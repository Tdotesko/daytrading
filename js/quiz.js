// ============================================================
// Quiz Engine - 30 questions covering all modules
// ============================================================

const QUIZ_DATA = [
    {
        q: "What is a futures contract?",
        options: [
            "A share of ownership in a company",
            "A legally binding agreement to buy or sell an asset at a predetermined price on a future date",
            "A loan from your broker to trade stocks",
            "An option to buy stocks at a discount"
        ],
        correct: 1,
        explain: "A futures contract is a standardized agreement to buy or sell a specific asset at a set price on a specific future date. You don't own the underlying asset."
    },
    {
        q: "What is the tick value of one MES (Micro E-mini S&P 500) contract?",
        options: ["$0.50", "$1.25", "$5.00", "$12.50"],
        correct: 1,
        explain: "MES tick value is $1.25. Each tick is 0.25 points, and MES is worth $5 per point. $5 × 0.25 = $1.25 per tick."
    },
    {
        q: "Why don't futures have the Pattern Day Trader (PDT) rule?",
        options: [
            "Because futures are unregulated",
            "Because futures are regulated by the CFTC, not the SEC. The PDT rule is an SEC/FINRA rule that applies to equities only.",
            "Because futures brokers ignore the rule",
            "They do have the PDT rule"
        ],
        correct: 1,
        explain: "The PDT rule ($25K minimum for unlimited day trades) is a FINRA rule applying to stock/equity accounts. Futures are regulated by the CFTC and NFA, which have no such rule."
    },
    {
        q: "What percentage of day traders lose money according to peer-reviewed research?",
        options: ["About 50%", "About 70%", "About 80%", "About 97%"],
        correct: 3,
        explain: "A 2019 Brazilian Securities Commission study of 19,646 day traders found 97% lost money over 2 years. Only 1.1% earned more than minimum wage."
    },
    {
        q: "What is the best trading session for a beginner?",
        options: [
            "Overnight Globex session (6 PM - 9:30 AM ET)",
            "US Open (9:30 AM - 11:30 AM ET)",
            "Midday (11:30 AM - 2:00 PM ET)",
            "All sessions are equally good"
        ],
        correct: 1,
        explain: "The US open (9:30-11:30 AM ET) has the highest volume (60-70% of daily ES volume), strongest trends, and cleanest setups. The midday session is choppy and the overnight is thin."
    },
    {
        q: "What does 'margin' mean in futures trading?",
        options: [
            "A loan from your broker",
            "The profit on your trade",
            "A performance bond / security deposit required to hold a position",
            "The commission fee"
        ],
        correct: 2,
        explain: "Margin in futures is a performance bond — a security deposit to ensure you can cover losses. It is NOT a loan like stock margin."
    },
    {
        q: "You have a $5,000 account and follow the 2% rule. What is your maximum risk per trade?",
        options: ["$50", "$100", "$250", "$500"],
        correct: 1,
        explain: "$5,000 × 2% = $100 maximum risk per trade."
    },
    {
        q: "What does a long lower wick (shadow) on a candlestick indicate?",
        options: [
            "Strong buying — sellers pushed price down but buyers rejected it",
            "Strong selling — the trend will continue down",
            "Nothing — wicks are meaningless",
            "The market is closed"
        ],
        correct: 0,
        explain: "A long lower wick means price dropped during the period but was pushed back up by buyers — showing rejection of lower prices. At a support level, this is a bullish signal."
    },
    {
        q: "What is VWAP?",
        options: [
            "Very Weak Average Price",
            "Volume Weighted Average Price — the average price weighted by volume for the day",
            "Variable Width Ascending Pattern",
            "A type of candlestick"
        ],
        correct: 1,
        explain: "VWAP is the Volume Weighted Average Price. Institutional traders use it as a benchmark — buying below VWAP and selling above it. It acts as dynamic support/resistance."
    },
    {
        q: "When a support level breaks, what does it often become?",
        options: [
            "It disappears entirely",
            "It becomes resistance (polarity)",
            "It becomes stronger support",
            "It becomes VWAP"
        ],
        correct: 1,
        explain: "This is called polarity. When support breaks, it often becomes resistance (and vice versa). Traders who bought at support are now underwater and will sell when price returns to that level to break even."
    },
    {
        q: "What is the recommended minimum reward-to-risk ratio for a trade?",
        options: ["1:1 (break even)", "1.5:1 ($1.50 reward per $1 risked)", "3:1", "It doesn't matter"],
        correct: 1,
        explain: "Minimum 1.5:1 reward-to-risk. This means for every $1 you risk, you should target at least $1.50 in profit. This allows you to be profitable even with a sub-50% win rate."
    },
    {
        q: "You're up $80 on a trade. Your plan says the target is $150. What should you do?",
        options: [
            "Close immediately and take the profit",
            "Follow your plan — hold for the target or manage according to your plan rules",
            "Double your position since you're winning",
            "Remove your stop loss to give it more room"
        ],
        correct: 1,
        explain: "Follow your plan. Cutting winners short (fear of giving back gains) is a documented psychological bias (loss aversion). Your plan was made with a calm, rational mind — trust it."
    },
    {
        q: "What is the daily loss limit rule?",
        options: [
            "No daily loss limit — keep trading until you're profitable",
            "Stop after losing 1 trade",
            "Stop trading for the day after losing 6% of your account or 3 consecutive losses",
            "Stop after 10 trades regardless"
        ],
        correct: 2,
        explain: "The 6% daily loss limit (or 3 consecutive losses) prevents emotional spiral and revenge trading. When hit, close your platform and review trades later."
    },
    {
        q: "A breakout through resistance on low volume is likely:",
        options: [
            "A very strong signal to buy",
            "A false breakout that will likely reverse",
            "Irrelevant — volume doesn't matter",
            "A signal to add more contracts"
        ],
        correct: 1,
        explain: "Breakouts need above-average volume (1.5×+) for confirmation. Low volume breakouts are often false breakouts — price moves through the level, traps traders, then reverses."
    },
    {
        q: "What is revenge trading?",
        options: [
            "Trading against someone who took the opposite side",
            "Taking impulsive, larger trades after a loss to try to recover the money quickly",
            "Trading the same stock every day",
            "A legitimate strategy for recovering losses"
        ],
        correct: 1,
        explain: "Revenge trading is emotionally driven, impulsive trading after a loss. The sequence: Loss → Anger → Bigger position → Impulsive trade → Bigger loss. It's the fastest way to blow up an account."
    },
    {
        q: "According to Kahneman and Tversky's research, how much more intensely do humans feel losses compared to equivalent gains?",
        options: ["Equal intensity", "1.5× more intense", "2.5× more intense", "5× more intense"],
        correct: 2,
        explain: "Prospect Theory (Nobel Prize, 2002) found that the pain of losing is approximately 2.5× more intense than the pleasure of an equivalent gain. A $50 loss hurts as much as a $125 gain feels good."
    },
    {
        q: "How long should you trade on a simulator before going live?",
        options: [
            "1-2 days to learn the platform",
            "1 week",
            "Minimum 20-30 consecutive profitable trading days with 85%+ plan adherence",
            "Sim trading is unnecessary"
        ],
        correct: 2,
        explain: "You need at least 20 consecutive profitable trading days with 85%+ plan adherence on sim. This proves your edge works and you can follow rules consistently."
    },
    {
        q: "When starting live trading, how many contracts should you trade?",
        options: [
            "As many as your margin allows",
            "1 MES contract — absolute minimum",
            "5-10 MES contracts to make it worthwhile",
            "1 ES contract"
        ],
        correct: 1,
        explain: "Start with 1 MES (Micro). The transition from sim to live triggers real emotions that will affect performance. Expect 20-30% drop in performance initially. Scale up only after consistent profitability."
    },
    {
        q: "What is the most important metric to track in your trading journal?",
        options: [
            "Total profit",
            "Win rate",
            "Plan adherence rate (percentage of trades that followed all rules)",
            "Number of trades"
        ],
        correct: 2,
        explain: "Plan adherence rate is the most predictive metric. If you follow your plan 95% of the time, profitability follows. A good plan with poor discipline produces poor results."
    },
    {
        q: "What is the US tax treatment for futures profits (Section 1256)?",
        options: [
            "All taxed as ordinary income",
            "All taxed at 15% long-term rate",
            "60% taxed at long-term capital gains rate, 40% at ordinary income rate",
            "Futures profits are tax-free"
        ],
        correct: 2,
        explain: "Under IRS Section 1256, futures are taxed 60/40: 60% at the long-term capital gains rate (typically 15%) and 40% at your ordinary income tax rate, regardless of how long the position was held."
    },
    {
        q: "What is the 61.8% Fibonacci retracement level also known as, and what does it represent?",
        options: [
            "The 'Death Level' — signals a trend reversal",
            "The 'Golden Ratio' — the deepest pullback that still suggests the trend is intact",
            "The 'Breakout Level' — price always bounces here",
            "It's not important — only 50% matters"
        ],
        correct: 1,
        explain: "The 61.8% level is the 'Golden Ratio' from the Fibonacci sequence. It represents the deepest pullback that still suggests the original trend is intact. If price breaks convincingly below 61.8%, the trend may be reversing."
    },
    {
        q: "What is Volume Profile's 'Point of Control' (POC)?",
        options: [
            "The price where no volume was traded",
            "The highest price of the day",
            "The single price level with the highest traded volume — the 'fairest price'",
            "The opening price of the session"
        ],
        correct: 2,
        explain: "The POC (Point of Control) is the price level where the most volume was traded. It represents the 'fairest price' where the most agreement between buyers and sellers occurred. It acts as a magnet and strong S/R level."
    },
    {
        q: "With a 55% win rate, how likely are you to experience 5 consecutive losses within a 50-trade sample?",
        options: [
            "Virtually impossible (less than 1%)",
            "Very unlikely (about 5%)",
            "Quite possible (about 28%)",
            "Almost certain (about 80%)"
        ],
        correct: 2,
        explain: "With a 55% win rate, there's approximately a 28% chance of hitting a 5-loss streak within 50 trades. This is statistically normal, not a sign of a broken strategy. This is why you need 50+ trades minimum to evaluate a strategy, and why a daily loss limit exists."
    },
    {
        q: "What is the recommended method for managing partial profits as a beginner?",
        options: [
            "Never take partial profits — always hold to full target",
            "Close the entire position at the first sign of profit",
            "Close half at 1:1 R:R, move stop to break-even, hold the rest for full target",
            "Close 90% immediately and let 10% ride"
        ],
        correct: 2,
        explain: "The Half-Off Method: close half your position at 1:1 R:R to lock in gains, then move your stop-loss to break-even on the remaining half. This ensures you can't lose on the trade while still allowing the remainder to reach the full target."
    },
    {
        q: "What is IRS Form 6781 used for?",
        options: [
            "Reporting stock dividend income",
            "Reporting gains and losses from Section 1256 contracts (futures) with 60/40 tax treatment",
            "Claiming deductions for trading software",
            "Reporting cryptocurrency transactions"
        ],
        correct: 1,
        explain: "Form 6781 is the IRS form for reporting gains/losses on Section 1256 contracts, which includes regulated futures. It enables the 60/40 tax split and allows 3-year loss carryback — a significant advantage over stock trading."
    },
    {
        q: "What does the NYSE $TICK index measure, and what does a reading of +1000 indicate?",
        options: [
            "The price of the most active stock — +1000 means it costs $1,000",
            "The number of stocks ticking up minus stocks ticking down — +1000 means extreme broad buying pressure across nearly all NYSE stocks",
            "The number of trades per second — +1000 means high-frequency trading is active",
            "The VIX divided by 10 — +1000 means extreme fear"
        ],
        correct: 1,
        explain: "$TICK = (stocks ticking up) minus (stocks ticking down) on the NYSE. A reading of +1000 means nearly every stock is being bought simultaneously — extreme bullish breadth. Professional ES traders use $TICK as a filter: only take longs when $TICK supports bullish breadth, shorts when bearish."
    },
    {
        q: "What is the VIX, and what does a VIX reading above 35 suggest?",
        options: [
            "A stock index — above 35 means the market is overvalued",
            "A volatility measure — above 35 means extreme fear and panic, with large unpredictable price swings",
            "A trading volume indicator — above 35 means very high participation",
            "A momentum oscillator — above 35 means overbought"
        ],
        correct: 1,
        explain: "The VIX (CBOE Volatility Index) measures expected S&P 500 volatility over the next 30 days. Above 35 is panic territory (COVID crash hit 82). VIX and ES move inversely ~80% of the time. High VIX means wider stops needed and beginners should reduce size or sit out."
    },
    {
        q: "Small gaps (3-12 points on ES) that are NOT driven by major news tend to:",
        options: [
            "Always continue in the gap direction",
            "Fill approximately 70% of the time during the first 2 hours",
            "Have no predictable behavior",
            "Cause the market to close early"
        ],
        correct: 1,
        explain: "Small, non-news-driven gaps tend to fill (price returns to the prior day's close) about 70% of the time in the first 2 hours. This creates the Gap Fill Fade setup. Large gaps (>1%) driven by news often do NOT fill and continue — never blindly fade a large gap."
    },
    {
        q: "What is a bracket order (OCO), and why should you use one on every trade?",
        options: [
            "An order that buys two different contracts simultaneously — for diversification",
            "An order that places your entry, stop-loss, and profit target as one package — so you're never in a position without a stop",
            "An order that only works during market hours — to prevent overnight positions",
            "An order that doubles your position if the first trade wins — for compounding"
        ],
        correct: 1,
        explain: "A bracket (OCO - One Cancels Other) order places your entry, stop-loss, AND target simultaneously. When one exit triggers, the other cancels. This ensures you NEVER enter a trade without a stop-loss already placed — eliminating the dangerous gap between entry and stop placement."
    },
    {
        q: "When trailing a stop using the swing structure method in a long trade, where do you move your stop?",
        options: [
            "A fixed number of ticks below the current price at all times",
            "To just below the most recent higher swing low as new swings form",
            "To the entry price after any profit is shown",
            "To the previous day's low"
        ],
        correct: 1,
        explain: "The swing structure trail moves your stop to just below the most recent swing low (for longs). In a healthy uptrend, each new higher low represents where buyers stepped in. Your stop sits below real buying activity — if that level breaks, the trend may be reversing, which is when you want to exit."
    }
];

function renderQuiz() {
    const container = document.getElementById('quizContainer');
    if (!container) return;

    let html = '';
    QUIZ_DATA.forEach((item, i) => {
        html += `<div class="quiz-question" id="q${i}">
            <h4><span class="q-number">Q${i + 1}.</span> ${item.q}</h4>`;
        item.options.forEach((opt, j) => {
            html += `<button class="quiz-option" data-q="${i}" data-opt="${j}" onclick="selectOption(${i}, ${j})">${opt}</button>`;
        });
        html += `<div class="quiz-explanation" id="explain${i}">${item.explain}</div>`;
        html += `</div>`;
    });
    container.innerHTML = html;
}

function selectOption(qIndex, optIndex) {
    const buttons = document.querySelectorAll(`[data-q="${qIndex}"]`);
    buttons.forEach(b => b.classList.remove('selected'));
    buttons[optIndex].classList.add('selected');
}

function scoreQuiz() {
    let score = 0;
    let answered = 0;

    // Count unanswered first
    QUIZ_DATA.forEach((item, i) => {
        if (document.querySelector(`[data-q="${i}"].selected`)) answered++;
    });

    const unanswered = QUIZ_DATA.length - answered;
    if (unanswered > 0 && !confirm(`You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}. Submit anyway? Unanswered questions will be marked wrong.`)) {
        return;
    }

    answered = 0;
    QUIZ_DATA.forEach((item, i) => {
        const selected = document.querySelector(`[data-q="${i}"].selected`);
        const buttons = document.querySelectorAll(`[data-q="${i}"]`);
        const explain = document.getElementById(`explain${i}`);

        buttons.forEach(b => b.disabled = true);

        if (selected) {
            answered++;
            const optIndex = parseInt(selected.getAttribute('data-opt'));

            if (optIndex === item.correct) {
                score++;
                selected.classList.add('correct');
            } else {
                selected.classList.add('wrong');
                buttons[item.correct].classList.add('correct');
            }
        } else {
            // Mark unanswered — show the correct answer
            buttons[item.correct].classList.add('correct');
        }

        explain.style.display = 'block';
    });

    const pct = Math.round((score / QUIZ_DATA.length) * 100);
    const scoreDiv = document.getElementById('quizScore');

    let message = '';
    if (pct >= 90) message = 'Excellent. You have a strong foundation. Move to sim trading with confidence.';
    else if (pct >= 80) message = 'Good. You\'re ready for sim trading. Review the questions you missed.';
    else if (pct >= 60) message = 'Needs work. Re-read the modules for the topics you missed before starting sim.';
    else message = 'Not ready yet. Go back through the modules carefully. Understanding this material is essential before risking any money.';

    scoreDiv.innerHTML = `
        <div class="quiz-score">
            <div class="score-number">${score}/${QUIZ_DATA.length}</div>
            <p style="font-size: 1.2rem; margin: 8px 0;">${pct}%</p>
            <p style="color: var(--text-dim); margin-top: 12px;">${message}</p>
        </div>
    `;
    scoreDiv.style.display = 'block';

    document.getElementById('quizSubmitBtn').style.display = 'none';
    document.getElementById('quizResetBtn').style.display = 'inline-block';

    window.scrollTo({ top: scoreDiv.offsetTop - 100, behavior: 'smooth' });
}

function resetQuiz() {
    document.getElementById('quizScore').style.display = 'none';
    document.getElementById('quizSubmitBtn').style.display = 'inline-block';
    document.getElementById('quizResetBtn').style.display = 'none';
    renderQuiz();
}
