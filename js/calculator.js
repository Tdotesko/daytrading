// ============================================================
// Position Size & P/L Calculators
// ============================================================

const TICK_VALUES = {
    MES: 1.25,
    ES: 12.50,
    MNQ: 0.50,
    NQ: 5.00
};

const POINT_VALUES = {
    MES: 5,
    ES: 50,
    MNQ: 2,
    NQ: 20
};

function calculatePosition() {
    const account = Math.max(0, parseFloat(document.getElementById('calcAccount').value) || 0);
    const riskPct = Math.max(0, parseFloat(document.getElementById('calcRiskPct').value) || 0);
    const contract = document.getElementById('calcContract').value;
    const stopTicks = Math.max(1, parseFloat(document.getElementById('calcStopTicks').value) || 1);

    const tickValue = TICK_VALUES[contract];
    const maxRiskDollars = account * (riskPct / 100);
    const riskPerContract = stopTicks * tickValue;
    const maxContracts = Math.floor(maxRiskDollars / riskPerContract);
    const actualRisk = maxContracts * riskPerContract;
    const stopPoints = (stopTicks * 0.25);

    const resultsDiv = document.getElementById('calcResults');
    resultsDiv.innerHTML = `
        <div class="calc-result">
            <div class="label">Max Risk ($)</div>
            <div class="value">$${maxRiskDollars.toFixed(2)}</div>
        </div>
        <div class="calc-result">
            <div class="label">Risk Per Contract</div>
            <div class="value">$${riskPerContract.toFixed(2)}</div>
        </div>
        <div class="calc-result">
            <div class="label">Max Contracts</div>
            <div class="value">${maxContracts}</div>
        </div>
        <div class="calc-result">
            <div class="label">Actual Risk</div>
            <div class="value">$${actualRisk.toFixed(2)}</div>
        </div>
        <div class="calc-result">
            <div class="label">Stop Distance</div>
            <div class="value">${stopPoints.toFixed(2)} pts</div>
        </div>
        <div class="calc-result">
            <div class="label">Tick Value</div>
            <div class="value">$${tickValue.toFixed(2)}</div>
        </div>
    `;
}

function calculatePL() {
    const contract = document.getElementById('plContract').value;
    const contracts = parseInt(document.getElementById('plContracts').value) || 1;
    const entry = parseFloat(document.getElementById('plEntry').value) || 0;
    const exit = parseFloat(document.getElementById('plExit').value) || 0;
    const direction = document.getElementById('plDirection').value;
    const commission = parseFloat(document.getElementById('plCommission').value) || 0;

    const pointValue = POINT_VALUES[contract];
    const tickValue = TICK_VALUES[contract];

    let priceDiff;
    if (direction === 'long') {
        priceDiff = exit - entry;
    } else {
        priceDiff = entry - exit;
    }

    const ticks = priceDiff / 0.25;
    const grossPL = priceDiff * pointValue * contracts;
    const totalCommission = commission * 2 * contracts; // round trip
    const netPL = grossPL - totalCommission;

    const plColor = netPL >= 0 ? 'var(--accent)' : 'var(--red)';

    const resultsDiv = document.getElementById('plResults');
    resultsDiv.innerHTML = `
        <div class="calc-result">
            <div class="label">Price Move</div>
            <div class="value">${priceDiff >= 0 ? '+' : ''}${priceDiff.toFixed(2)} pts</div>
        </div>
        <div class="calc-result">
            <div class="label">Ticks</div>
            <div class="value">${ticks >= 0 ? '+' : ''}${ticks.toFixed(0)}</div>
        </div>
        <div class="calc-result">
            <div class="label">Gross P/L</div>
            <div class="value" style="color: ${plColor}">${grossPL >= 0 ? '+' : ''}$${grossPL.toFixed(2)}</div>
        </div>
        <div class="calc-result">
            <div class="label">Commission</div>
            <div class="value">-$${totalCommission.toFixed(2)}</div>
        </div>
        <div class="calc-result">
            <div class="label">Net P/L</div>
            <div class="value" style="color: ${plColor}; font-size: 2rem;">${netPL >= 0 ? '+' : ''}$${netPL.toFixed(2)}</div>
        </div>
        <div class="calc-result">
            <div class="label">Per Contract</div>
            <div class="value" style="color: ${plColor}">${(netPL/contracts) >= 0 ? '+' : ''}$${(netPL / contracts).toFixed(2)}</div>
        </div>
    `;
}
