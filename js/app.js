// ============================================================
// Main Application Controller
// ============================================================

// --- Helpers ---
function safeParse(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) return fallback;
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : fallback;
    } catch (e) {
        console.warn(`Corrupted localStorage key "${key}", resetting.`);
        localStorage.removeItem(key);
        return fallback;
    }
}

function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// --- State ---
let completedModules = safeParse('dtaCompleted', []);
let journalEntries = safeParse('dtaJournal', []);

// --- Navigation ---
function navigateTo(moduleId) {
    const content = MODULE_CONTENT[moduleId];
    if (!content) return;

    // Re-trigger fade-in animation
    const mc = document.getElementById('moduleContent');
    mc.style.animation = 'none';
    mc.offsetHeight; // force reflow
    mc.style.animation = '';
    mc.innerHTML = content;

    // Update active nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-module') === moduleId) {
            item.classList.add('active');
        }
    });

    // Close mobile sidebar + overlay
    document.getElementById('sidebar').classList.remove('open');
    const overlay = document.getElementById('sidebarOverlay');
    if (overlay) overlay.classList.remove('active');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Post-render hooks
    if (moduleId === 'quiz') {
        renderQuiz();
    }
    if (moduleId === 'calculator') {
        setTimeout(() => {
            calculatePosition();
            calculatePL();
        }, 50);
    }
    if (moduleId === 'module15') {
        setTimeout(() => {
            renderJournal();
            const dateInput = document.getElementById('journalDate');
            if (dateInput && !dateInput.value) {
                dateInput.value = new Date().toISOString().split('T')[0];
            }
        }, 50);
    }

    // Wrap tables for mobile scrolling
    document.querySelectorAll('#moduleContent .data-table').forEach(table => {
        if (!table.parentElement.classList.contains('table-wrap')) {
            const wrap = document.createElement('div');
            wrap.className = 'table-wrap';
            table.parentNode.insertBefore(wrap, table);
            wrap.appendChild(table);
        }
    });

    // Update completion button state
    updateCompletionButtons(moduleId);

    // Save current location
    localStorage.setItem('dtaCurrentModule', moduleId);
}

// --- Module Completion ---
function completeModule(moduleId) {
    if (!completedModules.includes(moduleId)) {
        completedModules.push(moduleId);
    } else {
        completedModules = completedModules.filter(m => m !== moduleId);
    }
    localStorage.setItem('dtaCompleted', JSON.stringify(completedModules));
    updateProgress();
    updateCompletionButtons(moduleId);
}

function updateCompletionButtons(moduleId) {
    const btn = document.querySelector('.module-complete-btn');
    if (btn) {
        if (completedModules.includes(moduleId)) {
            btn.classList.add('completed');
            btn.classList.add('just-completed');
            btn.textContent = 'Completed ✓ (click to undo)';
            setTimeout(() => btn.classList.remove('just-completed'), 500);
        } else {
            btn.classList.remove('completed');
            btn.textContent = `Mark Module Complete ✓`;
        }
    }
}

function updateProgress() {
    const totalModules = 16;
    const completed = completedModules.length;
    const pct = Math.round((completed / totalModules) * 100);

    const fill = document.querySelector('.progress-fill');
    const text = document.getElementById('globalProgressText');

    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = `${pct}% Complete (${completed}/${totalModules})`;

    // Update checkmarks (module0 through module15)
    for (let i = 0; i <= 15; i++) {
        const check = document.getElementById(`check-module${i}`);
        if (check) {
            if (completedModules.includes(`module${i}`)) {
                check.classList.add('done');
            } else {
                check.classList.remove('done');
            }
        }
    }
}

// --- Glossary Filter ---
function filterGlossary() {
    const query = document.getElementById('glossarySearch').value.toLowerCase();
    const items = document.querySelectorAll('.glossary-item');
    items.forEach(item => {
        const term = item.getAttribute('data-term') || '';
        const text = item.textContent.toLowerCase();
        if (text.includes(query) || term.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// --- Trade Journal ---
function saveJournalEntry() {
    const date = document.getElementById('journalDate').value;
    const symbol = document.getElementById('journalSymbol').value;
    const direction = document.getElementById('journalDirection').value;
    const contracts = parseInt(document.getElementById('journalContracts').value) || 1;
    const entry = parseFloat(document.getElementById('journalEntry').value);
    const exit = parseFloat(document.getElementById('journalExit').value);
    const entryTime = document.getElementById('journalEntryTime').value || '';
    const exitTime = document.getElementById('journalExitTime').value || '';
    const stopPrice = parseFloat(document.getElementById('journalStop').value) || 0;
    const setup = document.getElementById('journalSetup').value;
    const plan = document.getElementById('journalPlan').value;
    const emotion = document.getElementById('journalEmotion').value;
    const notes = document.getElementById('journalNotes').value;

    if (!date || !entry || !exit) {
        alert('Please fill in date, entry price, and exit price.');
        return;
    }

    const pointValue = POINT_VALUES[symbol];
    let priceDiff = direction === 'Long' ? exit - entry : entry - exit;
    const pnl = priceDiff * pointValue * contracts;

    // Calculate R:R if stop loss was provided
    let rr = '';
    if (stopPrice > 0) {
        const riskPoints = Math.abs(entry - stopPrice);
        const rewardPoints = Math.abs(priceDiff);
        if (riskPoints > 0) {
            rr = (rewardPoints / riskPoints).toFixed(2);
        }
    }

    const entryData = {
        id: Date.now(),
        date,
        symbol,
        direction,
        contracts,
        entry,
        exit,
        entryTime,
        exitTime,
        stopPrice,
        pnl: pnl.toFixed(2),
        rr,
        setup,
        plan,
        emotion,
        notes
    };

    journalEntries.unshift(entryData);
    localStorage.setItem('dtaJournal', JSON.stringify(journalEntries));

    // Clear form
    document.getElementById('journalEntry').value = '';
    document.getElementById('journalExit').value = '';
    document.getElementById('journalStop').value = '';
    document.getElementById('journalEntryTime').value = '';
    document.getElementById('journalExitTime').value = '';
    document.getElementById('journalNotes').value = '';

    renderJournal();
}

function exportJournal() {
    if (journalEntries.length === 0) {
        alert('No trades to export.');
        return;
    }
    const headers = ['Date','Symbol','Direction','Contracts','Entry','Exit','Entry Time','Exit Time','Stop Price','P&L','R:R','Setup','Plan Followed','Emotion','Notes'];
    const rows = journalEntries.map(e =>
        [e.date, e.symbol, e.direction, e.contracts, e.entry, e.exit, e.entryTime||'', e.exitTime||'', e.stopPrice||'', e.pnl, e.rr||'', e.setup, e.plan, e.emotion||'', `"${(e.notes||'').replace(/"/g,'""')}"`].join(',')
    );
    const csv = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `trade-journal-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
}

function deleteJournalEntry(id) {
    if (!confirm('Delete this trade entry? This cannot be undone.')) return;
    journalEntries = journalEntries.filter(e => e.id !== id);
    localStorage.setItem('dtaJournal', JSON.stringify(journalEntries));
    renderJournal();
}

function renderJournal() {
    const container = document.getElementById('journalEntries');
    const statsContainer = document.getElementById('journalStats');
    if (!container) return;

    if (journalEntries.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted); text-align: center;">No trades logged yet. Start journaling above.</p>';
        if (statsContainer) statsContainer.innerHTML = '';
        return;
    }

    // Calculate stats
    const wins = journalEntries.filter(e => parseFloat(e.pnl) > 0);
    const losses = journalEntries.filter(e => parseFloat(e.pnl) < 0);
    const totalPnl = journalEntries.reduce((sum, e) => sum + parseFloat(e.pnl), 0);
    const winRate = journalEntries.length > 0 ? ((wins.length / journalEntries.length) * 100).toFixed(1) : 0;
    const avgWin = wins.length > 0 ? (wins.reduce((s, e) => s + parseFloat(e.pnl), 0) / wins.length).toFixed(2) : 0;
    const avgLoss = losses.length > 0 ? (losses.reduce((s, e) => s + parseFloat(e.pnl), 0) / losses.length).toFixed(2) : 0;
    const planYes = journalEntries.filter(e => e.plan === 'Yes').length;
    const adherence = ((planYes / journalEntries.length) * 100).toFixed(1);

    // Calculate average R:R
    const rrEntries = journalEntries.filter(e => e.rr && parseFloat(e.rr) > 0);
    const avgRR = rrEntries.length > 0 ? (rrEntries.reduce((s, e) => s + parseFloat(e.rr), 0) / rrEntries.length).toFixed(2) : '—';

    // Calm trade win rate vs non-calm
    const calmTrades = journalEntries.filter(e => e.emotion === 'Calm' || e.emotion === 'Confident');
    const calmWins = calmTrades.filter(e => parseFloat(e.pnl) > 0);
    const calmWinRate = calmTrades.length > 0 ? ((calmWins.length / calmTrades.length) * 100).toFixed(1) : '—';

    if (statsContainer) {
        statsContainer.innerHTML = `
            <div class="calc-result">
                <div class="label">Total Trades</div>
                <div class="value">${journalEntries.length}</div>
            </div>
            <div class="calc-result">
                <div class="label">Win Rate</div>
                <div class="value">${winRate}%</div>
            </div>
            <div class="calc-result">
                <div class="label">Total P&L</div>
                <div class="value" style="color: ${totalPnl >= 0 ? 'var(--accent)' : 'var(--red)'}">
                    ${totalPnl >= 0 ? '+' : ''}$${totalPnl.toFixed(2)}
                </div>
            </div>
            <div class="calc-result">
                <div class="label">Avg Win</div>
                <div class="value" style="color: var(--accent)">+$${avgWin}</div>
            </div>
            <div class="calc-result">
                <div class="label">Avg Loss</div>
                <div class="value" style="color: var(--red)">$${avgLoss}</div>
            </div>
            <div class="calc-result">
                <div class="label">Plan Adherence</div>
                <div class="value">${adherence}%</div>
            </div>
            <div class="calc-result">
                <div class="label">Avg R:R Achieved</div>
                <div class="value">${avgRR}${avgRR !== '—' ? ':1' : ''}</div>
            </div>
            <div class="calc-result">
                <div class="label">Calm/Focused Win Rate</div>
                <div class="value">${calmWinRate}${calmWinRate !== '—' ? '%' : ''}</div>
            </div>
        `;
    }

    // Render entries
    let html = '';
    journalEntries.forEach(e => {
        const pnlVal = parseFloat(e.pnl);
        const pnlClass = pnlVal >= 0 ? 'pnl-positive' : 'pnl-negative';
        const pnlSign = pnlVal >= 0 ? '+' : '';
        const timeInfo = e.entryTime ? ` | ${escapeHtml(e.entryTime)}${e.exitTime ? ' → ' + escapeHtml(e.exitTime) : ''}` : '';
        const emotionColors = { Calm: 'var(--accent)', Confident: 'var(--accent)', Anxious: 'var(--yellow)', Frustrated: 'var(--red)', Revenge: 'var(--red)', FOMO: 'var(--red)' };
        const emotionColor = emotionColors[e.emotion] || 'var(--text-dim)';

        html += `
        <div class="journal-entry">
            <div class="entry-date">${escapeHtml(e.date)}${timeInfo} | ${escapeHtml(e.symbol)} | ${escapeHtml(e.setup)}
                <button onclick="deleteJournalEntry(${e.id})" style="float:right; background:none; border:none; color:var(--text-muted); cursor:pointer; font-size:0.8rem;">✕ Delete</button>
            </div>
            <div class="entry-details">
                <div class="detail">
                    <div class="label">Direction</div>
                    <div>${escapeHtml(e.direction)}</div>
                </div>
                <div class="detail">
                    <div class="label">Contracts</div>
                    <div>${parseInt(e.contracts) || 0}</div>
                </div>
                <div class="detail">
                    <div class="label">Entry</div>
                    <div>${parseFloat(e.entry) || 0}</div>
                </div>
                <div class="detail">
                    <div class="label">Exit</div>
                    <div>${parseFloat(e.exit) || 0}</div>
                </div>
                <div class="detail">
                    <div class="label">P&L</div>
                    <div class="${pnlClass}" style="font-weight:700;">${pnlSign}$${e.pnl}</div>
                </div>
                <div class="detail">
                    <div class="label">R:R</div>
                    <div>${e.rr ? escapeHtml(e.rr) + ':1' : '—'}</div>
                </div>
                <div class="detail">
                    <div class="label">Followed Plan</div>
                    <div style="color: ${e.plan === 'Yes' ? 'var(--accent)' : e.plan === 'No' ? 'var(--red)' : 'var(--yellow)'}">${escapeHtml(e.plan)}</div>
                </div>
                <div class="detail">
                    <div class="label">Emotion</div>
                    <div style="color: ${emotionColor}">${escapeHtml(e.emotion || '—')}</div>
                </div>
            </div>
            ${e.notes ? `<p style="color: var(--text-dim); font-size: 0.85rem; margin-top: 8px; border-top: 1px solid var(--border); padding-top: 8px;">${escapeHtml(e.notes)}</p>` : ''}
        </div>`;
    });
    container.innerHTML = html;
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Nav click + keyboard handlers
    document.querySelectorAll('.nav-item').forEach(item => {
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.addEventListener('click', () => {
            const moduleId = item.getAttribute('data-module');
            if (moduleId) navigateTo(moduleId);
        });
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const moduleId = item.getAttribute('data-module');
                if (moduleId) navigateTo(moduleId);
            }
        });
    });

    // Mobile menu toggle
    document.getElementById('menuToggle').addEventListener('click', (e) => {
        e.stopPropagation();
        document.getElementById('sidebar').classList.toggle('open');
        document.getElementById('sidebarOverlay').classList.toggle('active');
    });

    // Close sidebar on content or overlay click (mobile)
    document.getElementById('content').addEventListener('click', () => {
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('sidebarOverlay').classList.remove('active');
    });
    document.getElementById('sidebarOverlay').addEventListener('click', () => {
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('sidebarOverlay').classList.remove('active');
    });

    // Back-to-top button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Load last module or welcome
    const lastModule = localStorage.getItem('dtaCurrentModule') || 'welcome';
    navigateTo(lastModule);

    // Update progress
    updateProgress();

    // Journal date is set dynamically when navigating to module15
});
