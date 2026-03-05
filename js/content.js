// ============================================================
// DayTrade Academy - All Module Content
// FACTS ONLY. No fluff. No hype. Verified data.
// ============================================================

const MODULE_CONTENT = {

// ============================================================
// WELCOME PAGE
// ============================================================
welcome: `
<div class="welcome-hero">
    <h1>Futures Day Trading<br>From Zero</h1>
    <p>A fact-based, no-BS curriculum for complete beginners. No prior knowledge of stocks, trading, or finance required. Every number is real. Every strategy is proven.</p>
</div>

<div class="info-box warning">
    <div class="box-title">Hard Truth Before You Start</div>
    <p>According to a 2019 study by the Brazilian Securities Commission analyzing 19,646 day traders over a 2-year period: <strong>97% of day traders lost money.</strong> The average loss was $36 per day. Only 1.1% earned more than minimum wage.</p>
    <p>A 2014 study from the University of California found that <strong>80% of day traders quit within the first 2 years.</strong></p>
    <p>This course exists to put you in the small percentage that survives — by doing what most traders refuse to do: study, practice on simulators, manage risk religiously, and treat this as a skill that takes 6-12 months to develop.</p>
</div>

<div class="content-section">
    <h2>Your Learning Roadmap</h2>
    <div class="roadmap">
        <div class="roadmap-phase">
            <div class="phase-num">1</div>
            <h3>Foundations</h3>
            <p>What futures are, how markets work, contracts, margin, and broker setup</p>
        </div>
        <div class="roadmap-phase">
            <div class="phase-num">2</div>
            <h3>Read the Market</h3>
            <p>Candlesticks, support/resistance, indicators, volume and order flow</p>
        </div>
        <div class="roadmap-phase">
            <div class="phase-num">3</div>
            <h3>Strategy</h3>
            <p>Trade setups, risk management, building a trading plan, psychology</p>
        </div>
        <div class="roadmap-phase">
            <div class="phase-num">4</div>
            <h3>Go Live</h3>
            <p>Sim trading, going live checklist, trade journaling</p>
        </div>
    </div>
</div>

<div class="content-section">
    <h2>What You Need to Start</h2>
    <ul>
        <li><strong>A computer</strong> — desktop or laptop with a stable internet connection. Minimum 2 monitors recommended (1 works, but 2 is significantly better).</li>
        <li><strong>$500-$5,000 starting capital</strong> — Many prop firms and micro-futures accounts allow you to start with as little as $500. We'll cover the exact options.</li>
        <li><strong>2-4 hours per day</strong> — Market study + 1-2 hours of active trading during the best session times.</li>
        <li><strong>A sim/demo account</strong> — You will NOT trade real money until you are consistently profitable on a simulator for at least 30 trading days.</li>
    </ul>
</div>

<div class="info-box tip">
    <div class="box-title">The Rule</div>
    <p><strong>Simulator first. Real money never until you prove yourself.</strong> If you can't make money in sim, you will not make money live. The market doesn't care about your feelings or your urgency.</p>
</div>

<div class="btn-group" style="justify-content: center;">
    <button class="btn btn-primary" onclick="navigateTo('module0')">Start From Zero →</button>
</div>
`,

// ============================================================
// MODULE 0: THE ABSOLUTE BASICS
// ============================================================
module0: `
<div class="module-header">
    <span class="phase-tag phase1">Phase 0: Before You Begin</span>
    <h1>The Absolute Basics</h1>
    <p class="subtitle">If you've never traded anything — stocks, crypto, nothing — start here. This explains the concepts every other module assumes you know.</p>
</div>

<div class="content-section">
    <h2>What Is "The Market"?</h2>
    <p>When people say "the market," they're talking about a place where people buy and sell financial instruments — stocks, bonds, futures, options, etc. It's not a physical building anymore (though the New York Stock Exchange building still exists). It's electronic. Buyers and sellers are matched by computers in milliseconds.</p>
    <p>Think of it like eBay, but for financial assets. Someone wants to sell, someone wants to buy, and they agree on a price. That price changes constantly based on how many people want to buy vs. sell at any given moment.</p>

    <h3>The Auction Analogy</h3>
    <p>Imagine you're at an auction house. A painting comes up for sale. The auctioneer starts: "Who'll give me $100?" Someone raises their hand (that's a <strong>bid</strong>). Another person yells "$110!" Now you have competing buyers. The seller thinks "I'd accept $115" (that's the <strong>ask</strong>). When a buyer's bid meets the seller's ask, the painting sells. That price gets recorded.</p>
    <p>Now imagine this happening thousands of times per second with millions of participants — that's the stock/futures market. Every price you see on a chart is just the most recent price where a buyer and seller agreed. <strong>The buyer thought the price was going up. The seller thought the price was going down. One of them was right.</strong></p>
    <p>Your job as a trader is to consistently be on the right side of that bet — not every time (impossible), but more often than not, with bigger wins than losses.</p>
</div>

<div class="content-section">
    <h2>What Is a Stock? (Quick Explanation)</h2>
    <p>A <strong>stock</strong> (also called a "share") is a tiny piece of ownership in a company. If Apple has 15 billion shares and you buy 1 share, you own 1/15,000,000,000th of Apple. When Apple does well, the stock price goes up. When it does poorly, the price goes down.</p>
    <p><strong>You will NOT be trading stocks.</strong> We're mentioning this only so you understand the difference. You'll be trading <strong>futures contracts</strong>, which are a completely different instrument (explained in Module 1). But many concepts from the stock world — like "price goes up and down" and "buy low, sell high" — apply to futures too.</p>
</div>

<div class="content-section">
    <h2>What Are the S&P 500 and Nasdaq?</h2>
    <p>These are <strong>indexes</strong> — they measure the performance of a group of stocks combined into one number.</p>
    <table class="data-table">
        <thead>
            <tr><th>Index</th><th>What It Tracks</th><th>Example Value</th><th>Why You Care</th></tr>
        </thead>
        <tbody>
            <tr><td><strong>S&P 500</strong></td><td>The 500 largest US companies (Apple, Microsoft, Amazon, JPMorgan, Johnson & Johnson, etc.)</td><td>~5,200</td><td>This is what you'll be trading futures on. When people say "the market is up 1%," they usually mean the S&P 500.</td></tr>
            <tr><td><strong>Nasdaq 100</strong></td><td>The 100 largest tech-heavy companies (Apple, Microsoft, Nvidia, Amazon, Meta, Google, etc.)</td><td>~18,000</td><td>More volatile than S&P 500 because it's dominated by tech stocks. Also available as a futures contract.</td></tr>
            <tr><td><strong>Dow Jones (DJIA)</strong></td><td>30 large US companies</td><td>~39,000</td><td>The oldest index. Media loves it. Traders rarely use it — the S&P 500 is more comprehensive.</td></tr>
        </tbody>
    </table>
    <p>You can't directly buy "the S&P 500" — it's just a number. But you CAN trade a <strong>futures contract</strong> that tracks its price. That's what ES (E-mini S&P 500) and MES (Micro E-mini S&P 500) are — they let you bet on whether the S&P 500 will go up or down.</p>
</div>

<div class="content-section">
    <h2>Why Do Prices Go Up and Down?</h2>
    <p>One word: <strong>supply and demand.</strong></p>
    <ul>
        <li>More buyers than sellers → price goes UP (buyers compete by offering higher prices)</li>
        <li>More sellers than buyers → price goes DOWN (sellers compete by accepting lower prices)</li>
    </ul>
    <p>What drives people to buy or sell?</p>
    <ul>
        <li><strong>Economic data:</strong> Jobs reports, inflation numbers, GDP growth. Good data → people buy (optimistic). Bad data → people sell (pessimistic).</li>
        <li><strong>Company earnings:</strong> Apple reports record profits → Apple stock goes up → S&P 500 goes up slightly (Apple is a big part of the index).</li>
        <li><strong>Federal Reserve (the Fed):</strong> They set interest rates. Lower rates → businesses borrow more → economy grows → market goes up. Higher rates → opposite.</li>
        <li><strong>World events:</strong> Wars, pandemics, elections, trade deals — anything that affects the economy or investor confidence.</li>
        <li><strong>Fear and greed:</strong> Markets are moved by human emotion. When people panic, they sell everything (prices crash). When people are euphoric, they buy everything (prices bubble up).</li>
    </ul>
</div>

<div class="content-section">
    <h2>Trading vs. Investing — They're Different</h2>
    <table class="data-table">
        <thead>
            <tr><th>Aspect</th><th>Investing</th><th>Day Trading (What You'll Do)</th></tr>
        </thead>
        <tbody>
            <tr><td>Time horizon</td><td>Months to decades</td><td>Minutes to hours (same day)</td></tr>
            <tr><td>Goal</td><td>Slow, steady wealth growth</td><td>Profit from short-term price movements</td></tr>
            <tr><td>Example</td><td>Buy Apple stock, hold for 10 years</td><td>Buy a futures contract at 9:35 AM, sell at 10:15 AM for a $50 profit</td></tr>
            <tr><td>Effort</td><td>Low — check portfolio monthly</td><td>High — requires daily focus, study, and screen time</td></tr>
            <tr><td>Risk</td><td>Lower (over long periods, markets generally go up)</td><td>Higher (you can lose money in minutes if you're wrong)</td></tr>
            <tr><td>Skill required</td><td>Minimal — buy diversified index funds and wait</td><td>Significant — takes 6-12 months to develop</td></tr>
        </tbody>
    </table>
    <div class="info-box warning">
        <div class="box-title">Honest Take</div>
        <p>For most people, investing (buying index funds and holding for decades) is the smarter financial move. Day trading is harder, riskier, and most people lose money doing it. This course exists for people who accept that reality and want to develop the skill anyway. If you just want to grow your money slowly and safely, put it in a low-cost S&P 500 index fund and don't day trade at all. Seriously.</p>
    </div>
</div>

<div class="content-section">
    <h2>What Is a Broker?</h2>
    <p>A <strong>broker</strong> is the company that gives you access to the market. You can't just walk up to "the market" and start trading. You need a middleman — a broker — who:</p>
    <ul>
        <li>Holds your money in a trading account</li>
        <li>Sends your buy/sell orders to the exchange (like the CME Group for futures)</li>
        <li>Provides you with the software (trading platform) to see prices and place orders</li>
        <li>Charges you a small fee (commission) for each trade</li>
    </ul>
    <p>Think of a broker like a casino (but legal and regulated): you deposit money, you make your bets (trades), and they facilitate the process. You pick your own broker — we'll cover specific recommendations in Module 4.</p>
</div>

<div class="content-section">
    <h2>What Is a Chart?</h2>
    <p>A <strong>chart</strong> is a visual graph of an asset's price over time. The horizontal axis is time (left = past, right = now). The vertical axis is price (bottom = lower price, top = higher price).</p>
    <p>When price moves from bottom-left to top-right, the asset is going up. When it moves from top-left to bottom-right, it's going down. That's literally it.</p>
    <p>We use <strong>candlestick charts</strong> (covered in depth in Module 5), where each "candle" represents a specific time period (like 5 minutes). Green candles mean the price went up during that period. Red candles mean it went down. The height of the candle shows how much it moved.</p>
    <p>Everything you do as a day trader revolves around reading charts — identifying patterns, predicting short-term direction, and making decisions based on what you see.</p>
</div>

<div class="content-section">
    <h2>Key Vocabulary You Need Before Module 1</h2>
    <table class="data-table">
        <thead>
            <tr><th>Term</th><th>Plain English Meaning</th></tr>
        </thead>
        <tbody>
            <tr><td><strong>Asset</strong></td><td>Anything with financial value you can buy or sell — a stock, a futures contract, gold, Bitcoin, etc.</td></tr>
            <tr><td><strong>Price</strong></td><td>What someone is willing to pay right now. Changes every second during market hours.</td></tr>
            <tr><td><strong>Buy (Go Long)</strong></td><td>You purchase an asset because you think the price will go UP. You profit if it goes up, lose if it goes down.</td></tr>
            <tr><td><strong>Sell (Go Short)</strong></td><td>You sell an asset you don't own (possible in futures) because you think the price will go DOWN. You profit if it goes down, lose if it goes up.</td></tr>
            <tr><td><strong>Profit (P&L)</strong></td><td>"Profit and Loss." The money you made or lost on a trade. Green = you made money. Red = you lost money.</td></tr>
            <tr><td><strong>Position</strong></td><td>An active trade. If you bought 1 futures contract and haven't sold it yet, you "have a position" or are "in a trade."</td></tr>
            <tr><td><strong>Entry</strong></td><td>The price where you open a trade (buy or sell).</td></tr>
            <tr><td><strong>Exit</strong></td><td>The price where you close a trade. The difference between entry and exit (minus fees) is your profit or loss.</td></tr>
            <tr><td><strong>Commission</strong></td><td>The fee your broker charges per trade. Usually $0.50-$2.50 per transaction in futures.</td></tr>
            <tr><td><strong>Volatility</strong></td><td>How much the price moves. High volatility = big swings (more risk, more opportunity). Low volatility = small moves.</td></tr>
            <tr><td><strong>Liquidity</strong></td><td>How easy it is to buy or sell without affecting the price. High liquidity = lots of buyers and sellers = good. Low liquidity = hard to get in and out = bad.</td></tr>
            <tr><td><strong>Capital</strong></td><td>Your money. Your trading capital is the money in your brokerage account.</td></tr>
        </tbody>
    </table>
</div>

<div class="info-box tip">
    <div class="box-title">You Don't Need to Memorize All of This</div>
    <p>These terms will be repeated and reinforced throughout every module. By the time you finish the course, they'll be second nature. The Glossary tool in the sidebar has all of these (and more) searchable at any time. Don't stress about memorization — focus on understanding the concepts.</p>
</div>

<div class="content-section">
    <h2>The Concept You Must Understand: "Buy Low, Sell High"</h2>
    <p>This is the entire basis of trading:</p>
    <div class="formula-block">
        BUY LOW, SELL HIGH (Going Long):<br>
        You buy at $100 → Price goes to $110 → You sell at $110<br>
        Profit: $110 - $100 = $10 ✓<br><br>
        SELL HIGH, BUY LOW (Going Short):<br>
        You sell at $110 → Price drops to $100 → You buy back at $100<br>
        Profit: $110 - $100 = $10 ✓<br><br>
        THE LOSING SIDE:<br>
        You buy at $100 → Price drops to $90 → You sell at $90<br>
        Loss: $90 - $100 = -$10 ✗
    </div>
    <p>In futures, you can profit whether prices go UP (buy first, sell later) or DOWN (sell first, buy later). This is a massive advantage over stocks, where shorting (profiting from price drops) is complicated and restricted. In futures, it's just as easy as going long.</p>
</div>

<div class="content-section">
    <h2>What Day Trading Actually Looks Like</h2>
    <p>Here's a realistic description of a day trader's morning:</p>
    <ol class="step-list">
        <li><strong>8:45 AM:</strong> Sit down at your computer. Open your charting platform (TradingView). Check the economic calendar — any big news today? Look at overnight price action. Mark key price levels on your chart.</li>
        <li><strong>9:30 AM:</strong> The US stock market opens. Futures volume surges. You watch your chart for the first 5-10 minutes — don't trade yet, just observe.</li>
        <li><strong>9:45 AM:</strong> You see a pattern you've practiced hundreds of times on your simulator. Price pulls back to a level you've identified. You click "Buy" — purchasing 1 micro futures contract. You immediately set a stop-loss order (automatic sell if price drops to a certain level, limiting your loss).</li>
        <li><strong>10:02 AM:</strong> Price has moved in your favor. You sell your contract for a $30 profit after commissions. Total time in the trade: 17 minutes.</li>
        <li><strong>10:02 - 11:30 AM:</strong> You wait for another setup. Maybe one more trade happens, maybe nothing meets your criteria. You're done by 11:30 AM.</li>
        <li><strong>11:30 AM:</strong> Close your platform. Log your trades in your journal. Review what went right and wrong. Total screen time: ~2.5 hours.</li>
    </ol>
    <p><strong>That's it.</strong> It's not screaming at screens with 8 monitors. It's not non-stop buying and selling. It's mostly waiting, occasionally executing a planned trade, and then reviewing. The best traders are patient and disciplined, not busy and frantic.</p>
</div>

<div class="info-box fact">
    <div class="box-title">Setting Expectations</div>
    <p>A realistic beginner making $30-$75/day on 1-2 micro contracts, trading 1-3 times during the morning session, 20 days a month = $600-$1,500/month. That's after 3-6 months of practice. Month 1 you'll likely break even or lose money. This is a skill that takes time to develop — like learning a musical instrument. Nobody plays a concert after week one.</p>
</div>

<button class="module-complete-btn" onclick="completeModule('module0')">Mark Module 0 Complete ✓</button>
<div class="btn-group">
    <button class="btn btn-secondary" onclick="navigateTo('welcome')">← Back</button>
    <button class="btn btn-primary" onclick="navigateTo('module1')">Module 1: What Are Futures? →</button>
</div>
`,

// ============================================================
// MODULE 1: WHAT ARE FUTURES?
// ============================================================
module1: `
<div class="module-header">
    <span class="phase-tag phase1">Phase 1: Foundations</span>
    <h1>What Are Futures?</h1>
    <p class="subtitle">The actual instrument you'll be trading — explained without jargon.</p>
</div>

<div class="content-section">
    <h2>The Farmer and the Baker — Why Futures Exist</h2>
    <p>Before we define anything, let's tell a story. This story is the entire reason futures contracts were invented.</p>
    <p>Imagine you're a <strong>wheat farmer</strong>. It's March. You've planted 1,000 bushels of wheat that will be ready to harvest in July. Right now, wheat is selling for $5 per bushel. You're happy with $5 — that's $5,000 and it covers your costs plus a nice profit.</p>
    <p>But here's your problem: <strong>you won't have wheat to sell until July.</strong> What if wheat drops to $3 by then? You'd only get $3,000 — not enough to cover your expenses. You'd be ruined.</p>
    <p>Now imagine a <strong>baker</strong> across town. She needs 1,000 bushels of wheat in July to make bread. She's also happy with $5 per bushel. But what if wheat goes UP to $7 by July? She'd have to pay $7,000 — her bakery can't afford that.</p>
    <p>So the farmer and the baker make a deal TODAY: <strong>"I'll sell you 1,000 bushels at $5 each, delivered in July."</strong> They shake hands. They sign a contract.</p>
    <p><strong>That contract is a futures contract.</strong> It's an agreement to buy/sell something at a set price at a future date. The farmer locked in his selling price (protected from a drop). The baker locked in her buying price (protected from a rise). Both can sleep at night.</p>

    <div class="info-box tip">
        <div class="box-title">But You're Not a Farmer</div>
        <p>You don't grow wheat. You don't bake bread. So why do YOU care about futures? Because a third type of person showed up to this market: the <strong>speculator</strong>. That's you. You don't want the wheat — you just want to profit from the price change. If you think wheat will go from $5 to $6, you buy the futures contract at $5, then sell it to someone else at $6 before delivery day. You pocket the $1 difference. You never touch a single grain of wheat.</p>
        <p>This is exactly what you'll do with S&P 500 futures. You don't own 500 companies. You just trade the contract that tracks their combined price — buying when you think it'll go up, selling when you think it'll go down. The farmer-and-baker story is the origin. Speculation is the modern reality.</p>
    </div>
</div>

<div class="content-section">
    <h2>Definition</h2>
    <p>A <strong>futures contract</strong> is a legally binding agreement to buy or sell a specific asset at a predetermined price on a specific future date. That's it. Nothing mystical.</p>
    <p>Originally created so farmers could lock in prices for crops before harvest (as you just learned). Today, speculators (that's us — day traders) trade futures contracts to profit from price movements without ever taking delivery of the underlying asset.</p>

    <h3>Key Difference From Stocks</h3>
    <ul>
        <li><strong>Stocks:</strong> You buy ownership in a company. Price goes up, you profit. Price goes down, you lose.</li>
        <li><strong>Futures:</strong> You don't own anything. You're placing a contract on the direction of price. You can profit whether price goes UP (long) or DOWN (short) equally easily.</li>
    </ul>
</div>

<div class="content-section">
    <h2>Why Day Traders Prefer Futures Over Stocks</h2>
    <table class="data-table">
        <thead>
            <tr><th>Factor</th><th>Stocks</th><th>Futures</th></tr>
        </thead>
        <tbody>
            <tr><td>Trading Hours</td><td>9:30 AM - 4:00 PM ET</td><td>Nearly 24 hours (Sun 6PM - Fri 5PM ET)</td></tr>
            <tr><td>PDT Rule</td><td>Yes — need $25K minimum for unlimited day trades</td><td>No PDT rule. Trade with any account size.</td></tr>
            <tr><td>Short Selling</td><td>Restrictions, hard-to-borrow fees</td><td>Short as easily as going long. No restrictions.</td></tr>
            <tr><td>Leverage</td><td>2:1 (4:1 intraday with margin)</td><td>Much higher — controlled by margin (see Module 3)</td></tr>
            <tr><td>Tax Treatment (US)</td><td>Short-term capital gains taxed at income rate</td><td>60/40 rule: 60% taxed at long-term rate, 40% short-term (Section 1256)</td></tr>
            <tr><td>Commissions</td><td>$0 on most platforms</td><td>$0.50 - $2.50 per side per contract</td></tr>
        </tbody>
    </table>
</div>

<div class="info-box fact">
    <div class="box-title">Tax Advantage (US Traders — IRS Section 1256)</div>
    <p>Futures are taxed under the 60/40 rule. If you make $100K in futures profits: $60K is taxed at 15% long-term rate, $40K at your ordinary income rate. For someone in the 32% bracket, this saves approximately $10,200/year compared to stocks.</p>
</div>

<div class="content-section">
    <h2>The 4 Futures Contracts You Should Know</h2>
    <p>As a beginner, you'll focus on the most liquid contracts. Liquidity = tight spreads = lower cost to trade.</p>
    <table class="data-table">
        <thead>
            <tr><th>Contract</th><th>Symbol</th><th>Exchange</th><th>Tick Size</th><th>Tick Value</th><th>Avg Daily Volume (2024)</th></tr>
        </thead>
        <tbody>
            <tr><td>E-mini S&P 500</td><td>ES</td><td>CME</td><td>0.25</td><td>$12.50</td><td>~1.5 million</td></tr>
            <tr><td>Micro E-mini S&P 500</td><td>MES</td><td>CME</td><td>0.25</td><td>$1.25</td><td>~2.5 million</td></tr>
            <tr><td>E-mini Nasdaq 100</td><td>NQ</td><td>CME</td><td>0.25</td><td>$5.00</td><td>~800K</td></tr>
            <tr><td>Micro E-mini Nasdaq</td><td>MNQ</td><td>CME</td><td>0.25</td><td>$0.50</td><td>~1.5 million</td></tr>
        </tbody>
    </table>
</div>

<div class="info-box tip">
    <div class="box-title">Start Here</div>
    <p><strong>Micro E-mini S&P 500 (MES)</strong> — This is your beginner contract. At $1.25 per tick, a 10-point move against you costs $50. On ES, that same move costs $500. Learn on micros. Period.</p>
</div>

<div class="content-section">
    <h2>Other Futures Contracts You'll Hear About</h2>
    <p>This course focuses on index futures (ES/MES/NQ/MNQ) because they have the tightest spreads, deepest liquidity, and most predictable behavior for beginners. But you should know these exist:</p>
    <table class="data-table">
        <thead>
            <tr><th>Contract</th><th>Symbol</th><th>Tick Size</th><th>Tick Value</th><th>Notes</th></tr>
        </thead>
        <tbody>
            <tr><td>E-mini Dow</td><td>YM</td><td>1.00</td><td>$5.00</td><td>Tracks the Dow 30. Less volatile than NQ. Popular with beginners.</td></tr>
            <tr><td>Micro Dow</td><td>MYM</td><td>1.00</td><td>$0.50</td><td>1/10th of YM. Good micro alternative.</td></tr>
            <tr><td>E-mini Russell 2000</td><td>RTY</td><td>0.10</td><td>$5.00</td><td>Small-cap index. More volatile, wider spreads than ES.</td></tr>
            <tr><td>Micro Russell 2000</td><td>M2K</td><td>0.10</td><td>$0.50</td><td>1/10th of RTY.</td></tr>
            <tr><td>Crude Oil</td><td>CL</td><td>0.01</td><td>$10.00</td><td>Second most popular day trading futures contract. Volatile, news-driven. NOT for beginners.</td></tr>
            <tr><td>Micro Crude Oil</td><td>MCL</td><td>0.01</td><td>$1.00</td><td>1/10th of CL. More accessible but still volatile.</td></tr>
            <tr><td>Gold</td><td>GC</td><td>0.10</td><td>$10.00</td><td>Safe-haven commodity. Moves on dollar strength, geopolitics.</td></tr>
            <tr><td>Micro Gold</td><td>MGC</td><td>0.10</td><td>$1.00</td><td>1/10th of GC.</td></tr>
        </tbody>
    </table>
    <div class="info-box warning">
        <div class="box-title">Critical: Tick Sizes Are Different</div>
        <p>Notice that CL has a tick size of 0.01 (not 0.25 like ES/MES). RTY ticks in 0.10 increments. YM ticks in 1.00 increments. <strong>Every contract has different tick sizes, tick values, and margin requirements.</strong> If you ever trade a new contract, look up its exact specifications on the CME website BEFORE placing a single trade. Using ES assumptions on a CL trade will destroy your risk calculations.</p>
    </div>
</div>

<div class="content-section">
    <h2>How a Futures Trade Works (Step by Step)</h2>
    <ol class="step-list">
        <li>You analyze the chart and believe the S&P 500 will go UP in the next 30 minutes.</li>
        <li>You BUY 1 MES contract at 5,200.00 (this is called "going long").</li>
        <li>The price moves to 5,205.00 — that's a 20-tick move (5 points × 4 ticks per point).</li>
        <li>You SELL your contract at 5,205.00 to close the trade.</li>
        <li>Profit: 20 ticks × $1.25 = <strong>$25.00</strong> (minus ~$1.00 in commissions).</li>
    </ol>
    <p>If the price had dropped to 5,195.00 instead, you'd lose 20 ticks × $1.25 = $25.00.</p>
</div>

<div class="content-section">
    <h2>Long vs. Short</h2>
    <ul>
        <li><strong>Long (Buy):</strong> You profit when price goes UP. You enter by buying, exit by selling.</li>
        <li><strong>Short (Sell):</strong> You profit when price goes DOWN. You enter by selling, exit by buying.</li>
    </ul>
    <p>In futures, there is zero difference in difficulty or cost between going long and going short. This is a major advantage. In a market crash, futures traders can profit just as easily as in a rally.</p>
</div>

<button class="module-complete-btn" onclick="completeModule('module1')">Mark Module 1 Complete ✓</button>
<div class="btn-group">
    <button class="btn btn-secondary" onclick="navigateTo('welcome')">← Back</button>
    <button class="btn btn-primary" onclick="navigateTo('module2')">Module 2: Market Structure →</button>
</div>
`,

// ============================================================
// MODULE 2: MARKET STRUCTURE
// ============================================================
module2: `
<div class="module-header">
    <span class="phase-tag phase1">Phase 1: Foundations</span>
    <h1>Market Structure</h1>
    <p class="subtitle">When markets move, who's moving them, and when you should trade.</p>
</div>

<div class="content-section">
    <h2>Who Trades Futures?</h2>
    <p>Understanding who else is in the market tells you who's moving price:</p>
    <table class="data-table">
        <thead>
            <tr><th>Participant</th><th>% of Volume</th><th>What They Do</th></tr>
        </thead>
        <tbody>
            <tr><td>Algorithmic / HFT Firms</td><td>~50-60%</td><td>Automated systems exploiting micro-inefficiencies. They provide liquidity.</td></tr>
            <tr><td>Institutional (Hedge funds, banks)</td><td>~25-30%</td><td>Large directional bets. They MOVE price when they enter.</td></tr>
            <tr><td>Commercial Hedgers</td><td>~5-10%</td><td>Actual businesses hedging risk (airlines hedging fuel, etc.)</td></tr>
            <tr><td>Retail Traders (You)</td><td>~5-10%</td><td>Individual speculators. We ride the waves institutions create.</td></tr>
        </tbody>
    </table>
</div>

<div class="info-box warning">
    <div class="box-title">Reality Check</div>
    <p>You are not competing against institutions. You are too small for them to care about. Your edge is agility — you can enter and exit in seconds with no slippage on 1-5 contracts. Institutions moving 500+ contracts cannot.</p>
</div>

<div class="content-section">
    <h2>Trading Sessions (All Times Eastern)</h2>
    <p>Futures trade nearly 24 hours (Sunday 6 PM ET through Friday 5 PM ET), but not all hours are equal. Volume = opportunity. Low volume = choppy, unpredictable price action.</p>
    <p><strong>Daily halt:</strong> Trading pauses every day from 5:00 PM to 6:00 PM ET for the CME daily settlement. Your platform is not broken — this is normal.</p>
    <table class="data-table">
        <thead>
            <tr><th>Session</th><th>Time (ET)</th><th>Character</th><th>Best For Beginners?</th></tr>
        </thead>
        <tbody>
            <tr><td>Overnight / Globex</td><td>6:00 PM - 8:00 AM</td><td>Low volume, slow moves, reacts to Asian/European markets</td><td>No — too thin</td></tr>
            <tr><td>Pre-Market</td><td>8:00 AM - 9:30 AM</td><td>Economic data drops, volume builds, institutional positioning begins</td><td>Watch only — don't trade</td></tr>
            <tr><td><strong>US Open (Best)</strong></td><td><strong>9:30 AM - 11:30 AM</strong></td><td><strong>Highest volume, strongest trends, most opportunities</strong></td><td><strong>Yes — focus here</strong></td></tr>
            <tr><td>Midday Chop</td><td>11:30 AM - 2:00 PM</td><td>Low volume, range-bound, lots of fakeouts</td><td>No — avoid</td></tr>
            <tr><td>Power Hour</td><td>2:00 PM - 4:00 PM</td><td>Volume picks up, institutions position for close</td><td>Yes — once experienced</td></tr>
            <tr><td>Daily Halt</td><td>5:00 PM - 6:00 PM</td><td>No trading. CME daily settlement processing.</td><td>N/A — market is closed</td></tr>
        </tbody>
    </table>

    <h3>The Pre-Market Session (8:00 - 9:30 AM ET)</h3>
    <p>The pre-market is critical for preparation, but dangerous for trading. Here's what happens:</p>
    <ul>
        <li><strong>8:30 AM — Major economic data releases.</strong> CPI, PPI, Non-Farm Payrolls, Jobless Claims, GDP, and Retail Sales are all released at 8:30 AM ET. ES can move 20-80+ points in seconds on these numbers. Do NOT have a position on during these releases unless you are experienced and have a specific news-trading strategy.</li>
        <li><strong>8:30 - 9:15 AM — Initial reaction and digestion.</strong> After the data drop, price will whip back and forth as algorithms react, then institutions process the data. Volume spikes then settles. This is NOT clean price action — it's noise.</li>
        <li><strong>9:15 - 9:30 AM — Pre-open positioning.</strong> Institutions finalize their positions for the open. The direction of ES during this window often (not always) hints at the opening direction. Watch, don't trade.</li>
    </ul>
    <p><strong>Your pre-market job as a beginner:</strong> Mark overnight high/low, check economic calendar, identify key S/R levels, set VWAP, note where price is relative to yesterday's close. By 9:30 AM you should know your bias (bullish, bearish, or neutral) and have levels drawn on your chart. Then wait for your setup.</p>

    <h3>ES/NQ Correlation</h3>
    <p>ES (S&P 500) and NQ (Nasdaq 100) are correlated but not identical. NQ is tech-heavy (Apple, Microsoft, Nvidia, Amazon, Meta comprise ~40% of the index), so it moves more on tech earnings and growth sentiment. ES is more diversified across sectors.</p>
    <ul>
        <li><strong>Correlation:</strong> ES and NQ move in the same direction ~85-90% of the time on a daily basis.</li>
        <li><strong>Beta:</strong> NQ typically moves 1.3-1.5× the magnitude of ES. If ES moves 10 points, NQ often moves 40-60 points (adjusted for point values).</li>
        <li><strong>Divergence signal:</strong> When ES is making new highs but NQ is lagging (or vice versa), the divergence can signal a weakening trend. If tech is selling off while ES holds, watch for ES to follow.</li>
        <li><strong>Practical use:</strong> If you trade MES, keep an NQ chart visible. If both are breaking out together, the move has more conviction. If only one is breaking out, be cautious.</li>
    </ul>
</div>

<div class="content-section">
    <h2>Economic Reports That Move Futures (Plain English)</h2>
    <p>You'll hear these acronyms constantly. You don't need to analyze the numbers — you just need to know <strong>what they are</strong> and <strong>when they drop</strong>, because the market can move 20-80+ points in seconds when these are released.</p>
    <table class="data-table">
        <thead>
            <tr><th>Report</th><th>What It Measures</th><th>What It Means for You</th><th>When Released</th></tr>
        </thead>
        <tbody>
            <tr><td><strong>CPI</strong> (Consumer Price Index)</td><td>How much everyday stuff costs — food, gas, rent, clothing</td><td>Measures inflation. If CPI is higher than expected, the Fed may raise interest rates → market usually drops. Lower than expected → market usually rallies.</td><td>Monthly, 8:30 AM ET</td></tr>
            <tr><td><strong>PPI</strong> (Producer Price Index)</td><td>How much businesses pay for supplies BEFORE goods reach consumers</td><td>A leading indicator for CPI. If PPI rises, consumer prices often follow. Market reacts similarly to CPI.</td><td>Monthly, 8:30 AM ET</td></tr>
            <tr><td><strong>NFP</strong> (Non-Farm Payrolls)</td><td>How many jobs the US economy added last month (excluding farms)</td><td>Strong jobs = strong economy = stocks up (usually). But TOO strong = Fed may raise rates = stocks down. Yes, it's confusing — that's why you stay flat.</td><td>First Friday of each month, 8:30 AM ET</td></tr>
            <tr><td><strong>GDP</strong> (Gross Domestic Product)</td><td>The total value of everything the country produced — the "report card" for the whole economy</td><td>Higher GDP = growing economy = generally bullish. Negative GDP = recession fears = bearish.</td><td>Quarterly (advance, preliminary, final), 8:30 AM ET</td></tr>
            <tr><td><strong>FOMC</strong> (Federal Open Market Committee)</td><td>The Fed's interest rate decision and economic outlook</td><td>The single biggest market-moving event. Rate hikes = bearish. Rate cuts = bullish. But the press conference at 2:30 PM matters more than the number itself — watch the Fed chair's tone.</td><td>8 times/year, 2:00 PM ET</td></tr>
            <tr><td><strong>PCE</strong> (Personal Consumption Expenditures)</td><td>Another inflation measure — the Fed's PREFERRED one (they care about this more than CPI)</td><td>Same logic as CPI but the Fed watches this one more closely. A surprise PCE number can move markets as much as CPI.</td><td>Monthly, 8:30 AM ET</td></tr>
            <tr><td><strong>ISM</strong> (Institute for Supply Management)</td><td>Survey of purchasing managers — are businesses buying more or less stuff?</td><td>Above 50 = economy expanding. Below 50 = economy contracting. A big miss in either direction moves ES 10-30 points.</td><td>Monthly (Manufacturing 1st business day, Services 3rd business day), 10:00 AM ET</td></tr>
        </tbody>
    </table>
    <div class="info-box warning">
        <div class="box-title">You Don't Need to Predict These Numbers</div>
        <p>Wall Street has teams of PhDs trying to predict economic data. You can't beat them. <strong>Your only job is to know WHEN these reports drop and stay flat (no position) or out of the market during the release.</strong> After the initial 5-10 minute reaction, clean price action resumes and you can trade normally. The calendar is your shield — check it every morning before you trade.</p>
    </div>
</div>

<div class="info-box fact">
    <div class="box-title">Before Any Trade: Identify the Market State</div>
    <p>Before placing any trade, ask yourself one question: <strong>"Is the market trending or ranging right now?"</strong> Look at your 15-minute chart. Higher highs + higher lows = uptrend. Lower highs + lower lows = downtrend. Price bouncing between two horizontal levels = range. This single question prevents 50% of bad trades because it stops you from applying a trend strategy in a range (and vice versa). If you can't answer this question clearly, don't trade. Wait until the market shows you its hand.</p>
</div>

<div class="info-box tip">
    <div class="box-title">Your Schedule</div>
    <p><strong>As a beginner, only trade 9:30 AM - 11:30 AM Eastern.</strong> This is when 60-70% of ES daily volume occurs. The setups are cleaner, trends are stronger, and you'll learn faster. Trading the chop session will destroy your confidence and your account.</p>
</div>

<div class="content-section">
    <h2>Key Daily Events That Move Futures</h2>
    <p>These events cause sudden, violent price moves. Either trade them with a specific plan or stay flat (no position).</p>
    <table class="data-table">
        <thead>
            <tr><th>Event</th><th>Time (ET)</th><th>Impact</th></tr>
        </thead>
        <tbody>
            <tr><td>Pre-market economic data (CPI, PPI, Jobs)</td><td>8:30 AM</td><td>Can move ES 30-80+ points in seconds</td></tr>
            <tr><td>Market Open</td><td>9:30 AM</td><td>First 5 minutes are chaotic — let it settle</td></tr>
            <tr><td>FOMC Rate Decisions</td><td>2:00 PM (8x/year)</td><td>Biggest single-event moves of the year. ES can swing 100+ points.</td></tr>
            <tr><td>FOMC Press Conference</td><td>2:30 PM</td><td>Second wave of volatility after the rate decision</td></tr>
            <tr><td>Market Close</td><td>4:00 PM</td><td>Institutional rebalancing, can be volatile</td></tr>
        </tbody>
    </table>
</div>

<div class="info-box warning">
    <div class="box-title">Beginner Rule</div>
    <p><strong>Do NOT trade during FOMC days, CPI releases, or Non-Farm Payrolls until you have 3+ months of sim experience.</strong> These events can blow through your stop-loss before your order executes. The slippage alone can be 5-20 ticks.</p>
</div>

<div class="content-section">
    <h2>CME Circuit Breakers (Limit Moves)</h2>
    <p>The CME has price limits to prevent panic cascades. When the S&P 500 drops by certain percentages from the prior day's close, trading halts:</p>
    <table class="data-table">
        <thead>
            <tr><th>Level</th><th>Trigger</th><th>What Happens</th></tr>
        </thead>
        <tbody>
            <tr><td>Level 1</td><td>-7%</td><td>15-minute trading halt (if triggered before 3:25 PM ET)</td></tr>
            <tr><td>Level 2</td><td>-13%</td><td>15-minute trading halt (if triggered before 3:25 PM ET)</td></tr>
            <tr><td>Level 3</td><td>-20%</td><td>Trading halted for the rest of the day</td></tr>
        </tbody>
    </table>
    <p>During overnight Globex hours, ES has a -5% limit down and +5% limit up. If price hits these limits, it cannot trade beyond them until the regular session opens. Your stop-loss WILL NOT FILL past the limit price.</p>
</div>

<div class="content-section">
    <h2>Check the Economic Calendar Daily</h2>
    <p>Before every trading session, check an economic calendar for scheduled news releases. These are the primary sources used by professionals:</p>
    <ul>
        <li><strong>CME Group Economic Events Calendar</strong> — cmegroup.com</li>
        <li><strong>ForexFactory Calendar</strong> — forexfactory.com (filter by "High Impact" events for USD)</li>
        <li><strong>Investing.com Economic Calendar</strong> — investing.com</li>
        <li><strong>TradingView Economic Calendar</strong> — built into TradingView under the Events tab</li>
    </ul>
    <p>Beyond the big events (FOMC, CPI, NFP), watch for: ISM Manufacturing, Retail Sales, Jobless Claims (weekly), GDP, PCE (the Fed's preferred inflation measure), Consumer Confidence, and housing data. Any "high impact" event for the USD can move ES 10-50+ points.</p>
</div>

<div class="content-section">
    <h2>Market Structure: Trending vs. Ranging</h2>
    <p>Price only does two things:</p>
    <ul>
        <li><strong>Trend:</strong> Makes higher highs and higher lows (uptrend) or lower highs and lower lows (downtrend). Approximately 30% of the time.</li>
        <li><strong>Range:</strong> Bounces between a ceiling (resistance) and floor (support). Approximately 70% of the time.</li>
    </ul>
    <p>Your job is to identify which state the market is in BEFORE entering a trade. Trading a trend strategy in a range (or vice versa) is the #1 reason beginners lose money.</p>
</div>

<button class="module-complete-btn" onclick="completeModule('module2')">Mark Module 2 Complete ✓</button>
<div class="btn-group">
    <button class="btn btn-secondary" onclick="navigateTo('module1')">← Module 1</button>
    <button class="btn btn-primary" onclick="navigateTo('module3')">Module 3: Contracts & Margin →</button>
</div>
`,

// ============================================================
// MODULE 3: CONTRACTS & MARGIN
// ============================================================
module3: `
<div class="module-header">
    <span class="phase-tag phase1">Phase 1: Foundations</span>
    <h1>Contracts & Margin</h1>
    <p class="subtitle">How much money you need, what margin is, and how leverage actually works.</p>
</div>

<div class="content-section">
    <h2>Futures Contract Specifications</h2>
    <p>Every futures contract has fixed specifications set by the exchange (CME Group). You need to know these cold.</p>
    <table class="data-table">
        <thead>
            <tr><th>Spec</th><th>ES</th><th>MES</th><th>NQ</th><th>MNQ</th></tr>
        </thead>
        <tbody>
            <tr><td>Full Name</td><td>E-mini S&P 500</td><td>Micro E-mini S&P</td><td>E-mini Nasdaq 100</td><td>Micro E-mini Nasdaq</td></tr>
            <tr><td>Point Value</td><td>$50/point</td><td>$5/point</td><td>$20/point</td><td>$2/point</td></tr>
            <tr><td>Tick Size</td><td>0.25 points</td><td>0.25 points</td><td>0.25 points</td><td>0.25 points</td></tr>
            <tr><td>Tick Value</td><td>$12.50</td><td>$1.25</td><td>$5.00</td><td>$0.50</td></tr>
            <tr><td>CME Day Trade Margin</td><td>~$13,200</td><td>~$1,320</td><td>~$18,700</td><td>~$1,870</td></tr>
            <tr><td>Broker Day Trade Margin*</td><td>$500-$2,000</td><td>$50-$200</td><td>$1,000-$3,000</td><td>$100-$300</td></tr>
            <tr><td>Overnight Margin</td><td>~$13,200</td><td>~$1,320</td><td>~$18,700</td><td>~$1,870</td></tr>
        </tbody>
    </table>
    <p><em>*Broker intraday margins are reduced margins for positions closed before market close. These vary by broker. Numbers are approximate as of late 2024/early 2025.</em></p>
</div>

<div class="content-section">
    <h2>Margin Is NOT a Down Payment</h2>
    <p>This is the biggest misconception beginners have. Margin is a <strong>performance bond</strong> — a security deposit. When you put up $1,320 to trade 1 MES contract, you are controlling an asset worth approximately $26,000 (S&P at 5,200 × $5). That's roughly <strong>20:1 leverage</strong>.</p>

    <div class="formula-block">
        Leverage = Contract Value / Margin Required<br>
        Example: ($5 × 5,200) / $1,320 = 19.7:1 leverage
    </div>
</div>

<div class="content-section">
    <h2>Margin Explained: The Apartment Security Deposit</h2>
    <p>Margin confuses everyone. Here's the simplest way to understand it:</p>
    <p>Imagine you're renting an apartment. The rent is $1,500/month. The landlord asks for a <strong>$3,000 security deposit</strong> before you move in. That deposit isn't a loan. It's not the rent. It's not a down payment on buying the apartment. It's just the landlord's proof that you're good for it — money held aside in case you damage something.</p>
    <p><strong>Margin is the security deposit for your trade.</strong> When your broker asks for $1,320 in margin to trade 1 MES contract (which controls ~$26,000 worth of S&P 500), they're not lending you $24,680. They're holding $1,320 as collateral — proof that you can cover potential losses. The rest of the $26,000 is theoretical exposure, not a loan.</p>

    <h3>Maintenance Margin = "Top It Up or Get Evicted"</h3>
    <p>Back to the apartment analogy. Imagine the landlord says: "Your security deposit must stay above $2,000. If it drops below that (because of damage charges), you must add money immediately — or you're evicted."</p>
    <p>That's <strong>maintenance margin</strong>. If your account equity drops below the maintenance margin level because your trade is losing, your broker says: "Add more money right now, or we're closing your position for you." They don't ask politely. They liquidate.</p>

    <h3>Margin Call: What Actually Happens, Step by Step</h3>
    <ol class="step-list">
        <li>You open a trade. Your broker sets aside the required margin ($1,320 for 1 MES).</li>
        <li>The trade moves against you. Your account equity drops.</li>
        <li>Your equity falls below the maintenance margin level. Your broker issues a <strong>margin call</strong> — a demand to deposit more funds.</li>
        <li>You have a very short window to respond (minutes to hours, depending on the broker — some are instant).</li>
        <li>If you don't add funds, your broker <strong>force-liquidates your position</strong> at whatever the current market price is. This could be far worse than your intended stop-loss.</li>
    </ol>
    <p><strong>The lesson:</strong> Never trade with so much size that a normal adverse move puts you near a margin call. If your margin usage is more than 50% of your account equity, you're trading too big.</p>
</div>

<div class="info-box warning">
    <div class="box-title">Leverage Kills</div>
    <p>Leverage amplifies BOTH gains AND losses equally. A 1% move on ES (52 points) = $2,600 per contract. If your account is $5,000 and you're trading 1 ES, a 1% adverse move wipes out 52% of your account.</p>
    <p><strong>This is why you start with micros (MES/MNQ).</strong> That same 1% move on 1 MES = $260. Survivable.</p>
</div>

<div class="content-section">
    <h2>How Much Money Do You Actually Need?</h2>
    <p>Forget the "trade with $100" marketing. Here's the math:</p>
    <table class="data-table">
        <thead>
            <tr><th>Scenario</th><th>Minimum Account</th><th>Contract</th><th>Max Risk/Trade</th></tr>
        </thead>
        <tbody>
            <tr><td>Absolute minimum (tight)</td><td>$500</td><td>1 MES</td><td>$25 (20 ticks)</td></tr>
            <tr><td>Comfortable beginner</td><td>$2,500</td><td>1-2 MES</td><td>$50 (2% rule)</td></tr>
            <tr><td>Proper funded account</td><td>$5,000</td><td>1-3 MES</td><td>$100 (2% rule)</td></tr>
            <tr><td>Stepping up to ES</td><td>$15,000+</td><td>1 ES</td><td>$300 (2% rule)</td></tr>
        </tbody>
    </table>
</div>

<div class="info-box money">
    <div class="box-title">The 2% Rule</div>
    <p>Never risk more than 2% of your account on a single trade. Account = $2,500 → max risk per trade = $50. This means your stop-loss on 1 MES contract must be within 40 ticks (10 points). Violating this rule is how accounts blow up.</p>
</div>

<div class="content-section">
    <h2>Contract Expiration & Rollover</h2>
    <p>Futures contracts have expiration dates. ES/MES/NQ/MNQ expire on the <strong>third Friday of March, June, September, and December</strong> (quarterly). You MUST know this.</p>
    <table class="data-table">
        <thead>
            <tr><th>Quarter</th><th>Contract Month Code</th><th>Example Symbol</th></tr>
        </thead>
        <tbody>
            <tr><td>Q1</td><td>H (March)</td><td>ESH26 (March 2026)</td></tr>
            <tr><td>Q2</td><td>M (June)</td><td>ESM26 (June 2026)</td></tr>
            <tr><td>Q3</td><td>U (September)</td><td>ESU26 (September 2026)</td></tr>
            <tr><td>Q4</td><td>Z (December)</td><td>ESZ26 (December 2026)</td></tr>
        </tbody>
    </table>
    <p><strong>Rollover:</strong> About 5-8 trading days before expiration, volume shifts from the current (front-month) contract to the next quarter's contract. You must "roll" — close your position in the expiring contract and re-open it in the new one. Most platforms show the "continuous" contract that auto-rolls, but for live trading, always confirm you're on the correct month.</p>
    <p><strong>If you forget to roll:</strong> Your contract will expire and be settled. For cash-settled index futures (ES/MES/NQ/MNQ), this means an automatic cash settlement at the final settlement price. You won't take delivery of anything, but you'll lose any remaining edge and pay extra fees. Always roll before expiration week.</p>
</div>

<div class="info-box warning">
    <div class="box-title">Overnight Gap Risk</div>
    <p>If you accidentally hold a position past the 5:00 PM ET close (into overnight), two things happen:</p>
    <ol>
        <li><strong>Overnight margin kicks in.</strong> Your broker's reduced intraday margin ($50 for MES) jumps to the full CME overnight margin (~$1,320 for MES, ~$13,200 for ES). If your account doesn't cover this, your broker will auto-liquidate your position at market price — which could be far worse than where you entered.</li>
        <li><strong>Gap risk.</strong> The market reopens at 6:00 PM and can gap significantly from where it closed due to overseas news. Your stop-loss is NOT active during the 5-6 PM halt. You can wake up to a much larger loss than your stop intended.</li>
    </ol>
    <p><strong>Rule: As a beginner, always close all positions by 3:55 PM ET.</strong> Set an alarm.</p>
</div>

<div class="content-section">
    <h2>Margin Calls</h2>
    <p>If your account equity drops below the maintenance margin requirement, your broker will:</p>
    <ol>
        <li>Issue a margin call — demanding you deposit more funds.</li>
        <li>If you don't respond quickly, they will <strong>liquidate your position</strong> at market price (which may be far worse than your intended stop).</li>
    </ol>
    <p>This is why you never use more than 50% of your account equity as margin. Keep the rest as a cushion.</p>
</div>

<div class="content-section">
    <h2>Funded Accounts (Prop Firms): Trade With Other People's Money</h2>
    <p>Proprietary trading firms ("prop firms") let you trade their capital after you pass an evaluation. You keep 80-100% of profits. Your risk is limited to the monthly evaluation fee.</p>

    <h3>How It Works</h3>
    <ol class="step-list">
        <li><strong>Pay for an evaluation.</strong> Typically $50-$200/month depending on account size.</li>
        <li><strong>Trade a sim account with their rules.</strong> Hit a profit target (e.g., $3,000 on a $50K account) without exceeding the max drawdown (e.g., $2,500).</li>
        <li><strong>Get a funded account.</strong> Once you pass, you trade their capital. Real money. Real profits.</li>
        <li><strong>Withdraw profits.</strong> Most firms allow withdrawals after a few days to 2 weeks of funded trading. You keep 80-100% of what you make.</li>
    </ol>

    <h3>Major Futures Prop Firms (Feb 2026)</h3>
    <table class="data-table">
        <thead>
            <tr><th>Firm</th><th>Eval Cost</th><th>Account Size</th><th>Profit Target</th><th>Max Drawdown</th><th>Profit Split</th></tr>
        </thead>
        <tbody>
            <tr><td>Apex Trader Funding</td><td>$147-$657/mo</td><td>$25K - $300K</td><td>$1,500 - $20K</td><td>$1,500 - $7,500 (trailing)</td><td>100% first $25K, then 90%</td></tr>
            <tr><td>Topstep</td><td>$49-$149/mo</td><td>$50K - $150K</td><td>$3,000 - $9,000</td><td>$2,000 - $4,500 (EOD trailing)</td><td>90% (100% first $10K)</td></tr>
            <tr><td>Take Profit Trader</td><td>$80-$360/mo</td><td>$25K - $150K</td><td>$1,500 - $9,000</td><td>$1,500 - $4,500 (EOD)</td><td>80%</td></tr>
            <tr><td>Earn2Trade</td><td>$150-$350/mo</td><td>$25K - $200K</td><td>$1,750 - $11K</td><td>$1,500 - $4,500 (EOD)</td><td>80%</td></tr>
        </tbody>
    </table>
    <p><em>Prices, profit targets, and rules change frequently. Always verify current terms on their websites before purchasing. Many firms run frequent sales (40-80% off).</em></p>

    <h3>Funded Account Rules You Must Understand</h3>
    <ul>
        <li><strong>Trailing drawdown:</strong> Some firms use a "trailing" max drawdown that follows your highest account balance. If your account peaks at $53,000 and the trailing drawdown is $2,500, you're violated if it drops below $50,500 — not just below your starting balance. This is the #1 way traders lose funded accounts.</li>
        <li><strong>EOD (End-of-Day) drawdown:</strong> Other firms only check your drawdown at the end of each day. This is more forgiving — intraday dips don't count as long as you recover by close.</li>
        <li><strong>Daily loss limit:</strong> Most firms also have a daily loss limit (separate from the max drawdown). Exceed it and you fail.</li>
        <li><strong>Contract limits:</strong> Funded accounts have maximum contract sizes. A $50K account might allow 5 ES or 50 MES contracts. Start with 1-2.</li>
        <li><strong>Consistency rules:</strong> Some firms require no single day to account for more than 30-40% of your total profit. This prevents "lucky one-shot" passes.</li>
        <li><strong>No holding through major news:</strong> Many firms prohibit holding positions during FOMC, CPI, NFP releases.</li>
    </ul>
</div>

<div class="info-box tip">
    <div class="box-title">Prop Firm Strategy</div>
    <p><strong>Do NOT try a prop firm evaluation until you are consistently profitable on sim for 2+ months.</strong> The average trader fails 3-5 evaluations before passing. At $100-$200/month, that's $300-$1,000 in fees before you even get funded. Be profitable first, then the evaluation is just a formality.</p>
    <p><strong>Pro tip:</strong> Wait for sales. Apex and Topstep regularly run 50-80% off promotions. A $150/month evaluation becomes $30-$75.</p>
</div>

<div class="info-box fact">
    <div class="box-title">The Funded Account Math</div>
    <p>A funded $50K account with a $3,000 profit target and 90% profit split means: you pay ~$100 for the eval, make $3,000 in sim, get funded, then make real money. A realistic beginner target: $50-$75/day on 2 MES contracts (10-15 points captured). At 90% profit split, that's $45-$67.50/day. In a 20-trading-day month: $900-$1,350. Your cost was $100.</p>
    <p><strong>Be realistic:</strong> ES average daily range is ~50-60 points. Consistently capturing 10-15 points of that is achievable with a proven setup. Capturing 40+ points/day (which some courses promise) would require catching 70-80% of the entire day's range — unrealistic even for full-time professionals.</p>
</div>

<button class="module-complete-btn" onclick="completeModule('module3')">Mark Module 3 Complete ✓</button>
<div class="btn-group">
    <button class="btn btn-secondary" onclick="navigateTo('module2')">← Module 2</button>
    <button class="btn btn-primary" onclick="navigateTo('module4')">Module 4: Broker & Platform Setup →</button>
</div>
`,

// ============================================================
// MODULE 4: BROKER & PLATFORM SETUP
// ============================================================
module4: `
<div class="module-header">
    <span class="phase-tag phase1">Phase 1: Foundations</span>
    <h1>Broker & Platform Setup</h1>
    <p class="subtitle">Where to open an account, what software to use, and how to set it all up.</p>
</div>

<div class="content-section">
    <h2>Broker Comparison (US-Based, Feb 2026)</h2>
    <table class="data-table">
        <thead>
            <tr><th>Broker</th><th>Broker Fee/Side</th><th>Exchange Fee/Side (CME)</th><th>Total Round-Trip (MES)</th><th>Day Margin (MES)</th></tr>
        </thead>
        <tbody>
            <tr><td>NinjaTrader</td><td>$0.09</td><td>$0.62</td><td>~$1.42</td><td>$50</td></tr>
            <tr><td>Tradovate</td><td>$0.49</td><td>$0.62</td><td>~$2.22</td><td>$50</td></tr>
            <tr><td>AMP Futures</td><td>$0.25</td><td>$0.62</td><td>~$1.74</td><td>$40</td></tr>
            <tr><td>Interactive Brokers</td><td>$0.25</td><td>$0.62</td><td>~$1.74</td><td>CME rates (~$1,320)</td></tr>
            <tr><td>Thinkorswim (Schwab)</td><td>$2.25</td><td>included</td><td>~$4.50</td><td>CME rates</td></tr>
        </tbody>
    </table>

    <div class="info-box money">
        <div class="box-title">Exchange Fees Are Real</div>
        <p>Most beginner guides only show broker commissions. The CME charges exchange fees ON TOP of your broker's commission. For MES it's ~$0.62 per side ($1.24 round-trip). For ES it's ~$1.28 per side ($2.56 round-trip). There are also NFA regulatory fees (~$0.02/side). <strong>Always calculate your TOTAL cost per trade.</strong></p>
        <p>On a $25 MES profit, $1.42 in total fees is 5.7% of your gain. Fees matter more at small account sizes.</p>
    </div>

    <p><em>Commission rates are approximate and change. Always verify current rates on broker websites and the CME fee schedule.</em></p>
</div>

<div class="info-box warning">
    <div class="box-title">Hidden Cost: Real-Time Data Feeds</div>
    <p><strong>Futures data is NOT free.</strong> By default, most platforms show DELAYED data (10-20 minutes behind). Trading on delayed data will lose you money immediately.</p>
    <ul>
        <li><strong>TradingView:</strong> CME real-time data add-on is ~$3-4/month (on top of any TradingView plan).</li>
        <li><strong>NinjaTrader:</strong> Real-time data included with a funded brokerage account. Sim accounts may require a separate data subscription (~$15-25/month through providers like Rithmic or CQG).</li>
        <li><strong>Tradovate:</strong> Real-time data included with a funded account. Free sim includes real-time data for a trial period.</li>
    </ul>
    <p><strong>Before placing any trade, verify your data is real-time.</strong> Look for a "DELAYED" or "D" indicator on your chart. If you see it, you need to upgrade your data subscription.</p>
</div>

<div class="content-section">
    <h2>TradingView — Your Charting Platform</h2>
    <p>TradingView (tradingview.com) is the most widely used charting platform in the world. It runs in your web browser — no download required. Here's why you should use it:</p>
    <ul>
        <li><strong>Free tier available:</strong> The free plan gives you 1 chart with 3 indicators. Plenty to start. Paid plans ($12.95-$49.95/mo) unlock multiple charts and more indicators.</li>
        <li><strong>Best charting tools:</strong> Drawing tools, indicator library, replay mode (practice on historical data), alerts, and a massive community sharing ideas.</li>
        <li><strong>Broker integration:</strong> Connect TradingView directly to Tradovate, AMP, or other supported brokers to trade FROM TradingView charts. You analyze and execute in the same window.</li>
        <li><strong>Economic Calendar built in:</strong> Click the calendar icon to see upcoming events with impact ratings.</li>
        <li><strong>Replay mode:</strong> Practice reading charts and placing trades on historical data. Use this during your observation phase (Weeks 1-2).</li>
    </ul>

    <h3>TradingView Setup for Futures</h3>
    <ol class="step-list">
        <li>Create a free account at tradingview.com.</li>
        <li>In the search bar, type <strong>MES1!</strong> (continuous Micro E-mini S&P 500 front-month contract). For ES, type <strong>ES1!</strong>.</li>
        <li>Set your chart timeframe to <strong>5 minutes</strong> (click the timeframe selector, type "5").</li>
        <li>Add indicators: Click "Indicators" → search and add <strong>VWAP</strong>, <strong>EMA</strong> (set to 9), <strong>EMA</strong> (set to 21). Add <strong>Volume</strong> below the chart.</li>
        <li>If you want to trade through TradingView, go to the Trading Panel at the bottom and connect your Tradovate or AMP account.</li>
    </ol>

    <h3>Continuous vs. Front-Month Contracts</h3>
    <p>When you type <strong>MES1!</strong> in TradingView, you're viewing a <strong>continuous contract</strong> — it automatically stitches together multiple quarterly contracts into one seamless chart. This is useful for analysis but has a catch:</p>
    <ul>
        <li><strong>Rollover gaps:</strong> When the chart switches from one quarter's contract to the next, there can be a small price gap. These gaps may create false support/resistance levels that don't exist on the actual contract.</li>
        <li><strong>For live trading:</strong> Always trade the actual front-month contract (e.g., <strong>MESH2026</strong> or <strong>MESM2026</strong>), not the continuous symbol. Your broker will show you the correct contract.</li>
        <li><strong>For analysis:</strong> The continuous contract (MES1!) is fine for drawing levels, studying patterns, and general chart analysis.</li>
    </ul>
</div>

<div class="info-box tip">
    <div class="box-title">Beginner Recommendation</div>
    <p><strong>Use TradingView for charting + Tradovate or NinjaTrader for execution.</strong> TradingView has the most intuitive interface and the best drawing tools. You can connect it directly to Tradovate to trade from TradingView charts. If you prefer an all-in-one desktop app, NinjaTrader has the lowest commissions and built-in charting. Both offer free sim accounts.</p>
</div>

<div class="content-section">
    <h2>Commission Impact on Small Accounts</h2>
    <p>Commissions matter much more at the micro scale. Understand this before choosing your setups:</p>
    <table class="data-table">
        <thead>
            <tr><th>Trade Profit (MES)</th><th>Ticks</th><th>Gross $</th><th>Commission (~$1.42 RT)</th><th>Net $</th><th>% Lost to Fees</th></tr>
        </thead>
        <tbody>
            <tr><td>Small scalp</td><td>4 ticks</td><td>$5.00</td><td>$1.42</td><td>$3.58</td><td style="color: var(--red);">28.4%</td></tr>
            <tr><td>Quick trade</td><td>8 ticks</td><td>$10.00</td><td>$1.42</td><td>$8.58</td><td style="color: var(--yellow);">14.2%</td></tr>
            <tr><td>Standard trade</td><td>20 ticks</td><td>$25.00</td><td>$1.42</td><td>$23.58</td><td>5.7%</td></tr>
            <tr><td>Good setup</td><td>40 ticks</td><td>$50.00</td><td>$1.42</td><td>$48.58</td><td>2.8%</td></tr>
        </tbody>
    </table>
    <p><strong>Takeaway:</strong> On MES, scalping for 2-4 ticks is barely viable after commissions. Your setups should target minimum 8-10 ticks to keep fees below 15% of profits. This is another reason the VWAP Pullback (targeting 20+ ticks) is the recommended beginner setup — the R:R absorbs commission impact.</p>
</div>

<div class="content-section">
    <h2>Step-by-Step: Getting Started</h2>
    <ol class="step-list">
        <li><strong>Download your platform.</strong> Go to ninjatrader.com or tradovate.com. Create a free account. Download and install.</li>
        <li><strong>Open a sim account.</strong> Both offer free simulation trading. This is a practice account with fake money. Use it.</li>
        <li><strong>Configure your chart.</strong> Set up a 5-minute candlestick chart of MES or ES. Add Volume bars below the chart.</li>
        <li><strong>Practice placing orders.</strong> Learn to place market orders, limit orders, and stop orders. Understand the difference (covered below).</li>
        <li><strong>Paper trade for minimum 30 days.</strong> Keep a journal (Module 15). Only consider funding a live account after consistent sim results.</li>
    </ol>
</div>

<div class="content-section">
    <h2>Order Types You Must Know</h2>
    <table class="data-table">
        <thead>
            <tr><th>Order Type</th><th>What It Does</th><th>When to Use</th><th>Risk</th></tr>
        </thead>
        <tbody>
            <tr><td><strong>Market Order</strong></td><td>Buys/sells immediately at best available price</td><td>When you need to get in/out NOW</td><td>Slippage — you may get a worse price than expected</td></tr>
            <tr><td><strong>Limit Order</strong></td><td>Buys/sells only at your specified price or better</td><td>Entries where you want a specific price</td><td>May not get filled if price doesn't reach your level</td></tr>
            <tr><td><strong>Stop Order (Stop Loss)</strong></td><td>Becomes a market order when price hits your level</td><td>Protecting against loss — ALWAYS have one</td><td>Slippage during fast moves</td></tr>
            <tr><td><strong>Stop Limit</strong></td><td>Becomes a limit order when price hits your level</td><td>When you want to limit slippage on stops</td><td>May not fill in fast markets — dangerous for stop losses</td></tr>
        </tbody>
    </table>
</div>

<div class="info-box warning">
    <div class="box-title">Non-Negotiable Rule</div>
    <p><strong>Every single trade must have a stop-loss order placed BEFORE or immediately upon entry.</strong> No exceptions. No "mental stops." No "I'll watch it." Your stop-loss is a stop order that automatically closes your position at a predetermined loss level. Trades without stops are gambling.</p>
</div>

<div class="content-section">
    <h2>First-Day Troubleshooting</h2>
    <p>Your first day on the platform WILL have problems. Every beginner hits at least one of these. Save yourself hours of frustration:</p>
    <table class="data-table">
        <thead>
            <tr><th>Problem</th><th>What's Happening</th><th>Fix</th></tr>
        </thead>
        <tbody>
            <tr><td>Chart shows "DELAYED" or no data</td><td>You don't have a real-time data subscription</td><td>In your broker/platform settings, subscribe to CME real-time data. On TradingView: go to the symbol info and click "Get real-time data" (~$3-4/month).</td></tr>
            <tr><td>Chart is blank or frozen</td><td>Wrong symbol, market is closed, or data feed disconnected</td><td>Check your symbol (use MES1! on TradingView). Verify market hours — futures are closed 5-6 PM ET daily and weekends. Try refreshing or reconnecting your data feed.</td></tr>
            <tr><td>Order rejected</td><td>Insufficient margin, wrong order type, or trading outside market hours</td><td>Check your available margin. Make sure you're not placing a limit order at an impossible price. Verify the market is open.</td></tr>
            <tr><td>Can't find MES on the platform</td><td>Wrong exchange or symbol format</td><td>Different platforms use different symbols: MES1! (TradingView continuous), MES (NinjaTrader), MESH2026 (specific month). Search for "Micro E-mini S&P" if the symbol doesn't work.</td></tr>
            <tr><td>P&L shows huge numbers on sim</td><td>Sim account is set to a large balance with multiple contracts</td><td>Change your sim balance to match your real planned account size ($2,500). Trade only 1 contract. Realistic sim = realistic practice.</td></tr>
            <tr><td>Stop-loss didn't fill at my price</td><td>Slippage during fast market</td><td>Normal. Stop orders become market orders when triggered. In fast markets, you may get filled 1-3 ticks worse than your stop price. Budget for 1-2 ticks of slippage in your risk calculations.</td></tr>
            <tr><td>Platform shows "Connection Lost"</td><td>Internet dropped or broker server issue</td><td>Check your internet. Try closing and reopening the platform. If persistent, switch to your phone app as backup. Your stop-loss orders live on the exchange server — they're still active even if you disconnect.</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h2>Your First Order: A Step-by-Step Walkthrough</h2>
    <p>Before you trade any setup, you need to know how to physically place an order. Do this on your sim account RIGHT NOW:</p>
    <ol class="step-list">
        <li><strong>Open your chart.</strong> Pull up a 5-minute MES chart. Make sure the market is open (Sun 6PM - Fri 5PM ET, except 5-6PM daily halt).</li>
        <li><strong>Click "Buy Market"</strong> (or the equivalent button on your platform). This places a <strong>market order</strong> — you're buying 1 MES contract at whatever the current price is. You'll see a confirmation. You now have a <strong>long position</strong>.</li>
        <li><strong>Immediately place a stop-loss.</strong> Find the "Sell Stop" order type. Set it 8-10 ticks below your entry price (2-2.5 points on MES). This is your safety net.</li>
        <li><strong>Watch your P&L change in real-time.</strong> As price moves up, your P&L goes green. As it moves down, it goes red. Each tick = $1.25 on MES.</li>
        <li><strong>Close the trade.</strong> Click "Flatten" or "Close Position" (or sell 1 MES at market). Your position is closed. Check your P&L — you made or lost money.</li>
    </ol>
    <div class="info-box warning">
        <div class="box-title">Market Order vs. Limit Order — Know the Difference</div>
        <p><strong>Market order:</strong> "Buy/sell RIGHT NOW at whatever price is available." Fast, guaranteed to fill, but you might get a slightly worse price (slippage). Use for getting in/out quickly.</p>
        <p><strong>Limit order:</strong> "Buy/sell ONLY at this price or better." You control the price, but the order might never fill if price doesn't reach your level. Use for patient entries at specific levels.</p>
        <p>As a beginner, use market orders for your first few weeks. You'll get comfortable with the platform without worrying about unfilled orders. Add limit orders once you're comfortable.</p>
    </div>
</div>

<div class="info-box warning">
    <div class="box-title">Accidentally Trading Live</div>
    <p>This happens more than people admit. You think you're on sim but you're on your live account. Suddenly real money is moving.</p>
    <p><strong>How to verify you're on sim:</strong></p>
    <ul>
        <li>Most platforms display "SIM," "DEMO," or "PAPER" prominently — usually in the header or next to your account number. Look for it NOW and memorize where it appears.</li>
        <li>Your sim account will have a large round balance (like $100,000 or $50,000). Your live account will show your actual deposit.</li>
        <li>On TradingView: the Trading Panel at the bottom shows which account is connected. Look for "Paper Trading" vs. your broker name.</li>
    </ul>
    <p><strong>If you accidentally placed a live trade:</strong> Don't panic. Close the position immediately by clicking "Flatten" or placing an opposing market order. A few ticks of loss is nothing compared to holding a position you didn't intend to take. Then check your account settings and switch back to sim.</p>
</div>

<div class="content-section">
    <h2>Chart Setup for Beginners</h2>
    <p>Start with this simple setup. You can add complexity later.</p>
    <ul>
        <li><strong>Chart type:</strong> Candlestick</li>
        <li><strong>Timeframe:</strong> 5-minute chart (primary), 15-minute chart (secondary/context)</li>
        <li><strong>Indicators:</strong> Volume (required), 9 EMA and 21 EMA (optional to start), VWAP (required)</li>
        <li><strong>Symbol:</strong> MES (Micro E-mini S&P 500)</li>
        <li><strong>Colors:</strong> Dark background. Green/white for bullish candles, red for bearish.</li>
    </ul>
</div>

<button class="module-complete-btn" onclick="completeModule('module4')">Mark Module 4 Complete ✓</button>
<div class="btn-group">
    <button class="btn btn-secondary" onclick="navigateTo('module3')">← Module 3</button>
    <button class="btn btn-primary" onclick="navigateTo('module5')">Module 5: Candlestick Charts →</button>
</div>
`,

// ============================================================
// MODULE 5: CANDLESTICK CHARTS
// ============================================================
module5: `
<div class="module-header">
    <span class="phase-tag phase2">Phase 2: Reading the Market</span>
    <h1>Candlestick Charts</h1>
    <p class="subtitle">How to read price action — the actual language of the market.</p>
</div>

<div class="content-section">
    <h2>Anatomy of a Candlestick</h2>
    <p>Each candlestick represents price action over a fixed time period (e.g., 5 minutes on a 5-min chart).</p>
    <div class="formula-block">
        BULLISH (Green/White) Candle:          BEARISH (Red) Candle:<br>
        <br>
            |  ← Upper Wick (High)                |  ← Upper Wick (High)<br>
           ┌┴┐ ← Close                           ┌┴┐ ← Open<br>
           │ │    (Body)                          │ │    (Body)<br>
           └┬┘ ← Open                            └┬┘ ← Close<br>
            |  ← Lower Wick (Low)                 |  ← Lower Wick (Low)<br>
    </div>
    <ul>
        <li><strong>Open:</strong> Price at the start of the period.</li>
        <li><strong>Close:</strong> Price at the end of the period.</li>
        <li><strong>High:</strong> Highest price during the period (top of upper wick).</li>
        <li><strong>Low:</strong> Lowest price during the period (bottom of lower wick).</li>
        <li><strong>Body:</strong> The filled rectangle between open and close. Shows the "conviction" of the move.</li>
        <li><strong>Wicks/Shadows:</strong> Lines above/below the body. Show rejection — price went there but couldn't hold.</li>
    </ul>
</div>

<div class="content-section">
    <h2>Candlestick Patterns That Actually Matter</h2>
    <p>There are hundreds of named candlestick patterns. Most are unreliable on their own. These are the ones with statistically validated significance when combined with context (support/resistance, volume):</p>

    <h3>Single Candle Patterns</h3>
    <table class="data-table">
        <thead>
            <tr><th>Pattern</th><th>Shape</th><th>What It Means</th><th>Reliability</th></tr>
        </thead>
        <tbody>
            <tr><td><strong>Hammer</strong></td><td>Small body at top, long lower wick (2x+ body)</td><td>Buyers rejected the sell-off. Bullish reversal at support.</td><td>Moderate — needs support level confirmation</td></tr>
            <tr><td><strong>Shooting Star</strong></td><td>Small body at bottom, long upper wick (2x+ body)</td><td>Sellers rejected the rally. Bearish reversal at resistance.</td><td>Moderate — needs resistance level confirmation</td></tr>
            <tr><td><strong>Doji</strong></td><td>Open ≈ Close, wicks both sides</td><td>Indecision. Neither buyers nor sellers won. Potential reversal.</td><td>Low alone — only meaningful at key levels</td></tr>
            <tr><td><strong>Marubozu</strong></td><td>Full body, no/tiny wicks</td><td>Total conviction in one direction. Strong trend continuation.</td><td>High — especially with high volume</td></tr>
        </tbody>
    </table>

    <h3>Multi-Candle Patterns</h3>
    <table class="data-table">
        <thead>
            <tr><th>Pattern</th><th>Structure</th><th>Signal</th></tr>
        </thead>
        <tbody>
            <tr><td><strong>Engulfing (Bullish)</strong></td><td>Red candle followed by larger green candle that completely covers it</td><td>Buyers overwhelmed sellers. Bullish reversal.</td></tr>
            <tr><td><strong>Engulfing (Bearish)</strong></td><td>Green candle followed by larger red candle that completely covers it</td><td>Sellers overwhelmed buyers. Bearish reversal.</td></tr>
            <tr><td><strong>Inside Bar</strong></td><td>Candle whose high and low are within the previous candle's range</td><td>Consolidation before breakout. Trade the breakout direction.</td></tr>
            <tr><td><strong>Three White Soldiers</strong></td><td>Three consecutive green candles, each closing higher</td><td>Strong bullish momentum. Trend continuation.</td></tr>
        </tbody>
    </table>
</div>

<div class="info-box fact">
    <div class="box-title">Context is Everything</div>
    <p>A hammer at a random spot on the chart means nothing. A hammer at a known support level with increasing volume is a high-probability reversal signal. <strong>Patterns without context are noise.</strong> Always ask: WHERE is this pattern forming?</p>
</div>

<div class="info-box warning">
    <div class="box-title">Timeframe Matters</div>
    <p>The same pattern is far more reliable on higher timeframes. A hammer on a <strong>1-minute chart</strong> is nearly meaningless — it's dominated by noise and HFT activity. A hammer on a <strong>5-minute chart</strong> at a key level is a valid signal. A hammer on a <strong>15-minute or daily chart</strong> is highly significant. <strong>Never trade patterns on 1-minute charts as a beginner.</strong> Stick to 5-minute for entries with 15-minute for trend confirmation.</p>
</div>

<div class="content-section">
    <h2>What the Wick Is Really Telling You</h2>
    <p>Think of each candle as a <strong>tug-of-war</strong> between buyers and sellers over a 5-minute period. The body shows who won. The wicks show the battle that happened along the way.</p>
    <p><strong>Long lower wick (hammer shape):</strong> During those 5 minutes, sellers pushed price WAY down. But then buyers stepped in and pushed it almost all the way back up. The sellers tried hard and failed. That long wick is the battlefield where sellers got overwhelmed. It's like a team pulling the rope far to their side, then getting dragged back. <strong>The buyers won that round.</strong></p>
    <p><strong>Long upper wick (shooting star shape):</strong> The opposite story. Buyers pushed price up hard, but sellers stepped in and slammed it back down. Buyers lost. That upper wick is where buying pressure got rejected. <strong>The sellers won that round.</strong></p>
    <p><strong>Wicks on both sides (doji):</strong> Both teams pulled hard, but nobody gained ground. It's a draw. Indecision. The next candle often decides who wins.</p>
    <p><strong>No wicks (marubozu):</strong> One team dominated start to finish. No fight at all. This is the strongest signal — whoever controlled this candle is in total command.</p>
</div>

<div class="content-section">
    <h2>Worked Example: Reading a 3-Candle Sequence</h2>
    <p>Let's read a real sequence step by step, like reading a story:</p>
    <div class="formula-block">
        CANDLE 1: Big green body, tiny wicks<br>
        → Strong buyers. Price moved up with conviction. No significant pushback from sellers.<br><br>
        CANDLE 2: Small body (red or green), wicks on both sides (doji-ish)<br>
        → Pause. The market is catching its breath. Sellers tested but couldn't reverse. Buyers tested but couldn't push higher. Indecision after a strong move.<br><br>
        CANDLE 3: Big green body, closes above Candle 1's high<br>
        → Buyers are back. The pause was just a rest, not a reversal. This is a CONTINUATION pattern. The uptrend is likely to keep going.
    </div>
    <p><strong>The story:</strong> Buyers charged forward (candle 1), paused to rest (candle 2), then charged again (candle 3). If you were waiting for a pullback entry in an uptrend, candle 2 was your opportunity. Candle 3 confirms it.</p>
    <p><strong>Now flip it:</strong> Big red → small doji → big red = bearish continuation. Same story, sellers in control.</p>

    <div class="info-box tip">
        <div class="box-title">Practice Exercise</div>
        <p>Open TradingView and pull up any 5-minute MES chart from a recent trading day. Find 3 candles in a row and ask yourself: "What story are these candles telling? Who's winning? Is this a continuation, a reversal, or indecision?" Do this for 10 different 3-candle sequences. You'll start seeing the patterns everywhere.</p>
        <p><strong>Hint:</strong> The most reliable sequences happen at support/resistance levels (Module 6). A hammer candle in the middle of nowhere means little. A hammer candle sitting right on yesterday's low? That's a high-probability reversal signal.</p>
    </div>
</div>

<div class="content-section">
    <h2>Reading Price Action (What Really Matters)</h2>
    <p>Forget memorizing 80 patterns. Focus on these three questions for every candle:</p>
    <ol>
        <li><strong>Who won this candle?</strong> Big green body = buyers dominated. Big red body = sellers dominated. Doji = nobody won.</li>
        <li><strong>Was there rejection?</strong> Long wicks = price was rejected at that level. The market is telling you that level matters.</li>
        <li><strong>What's the trend context?</strong> A bullish candle in a downtrend may just be a pullback, not a reversal. Always zoom out to the higher timeframe.</li>
    </ol>
</div>

<button class="module-complete-btn" onclick="completeModule('module5')">Mark Module 5 Complete ✓</button>
<div class="btn-group">
    <button class="btn btn-secondary" onclick="navigateTo('module4')">← Module 4</button>
    <button class="btn btn-primary" onclick="navigateTo('module6')">Module 6: Support & Resistance →</button>
</div>
`,

// ============================================================
// MODULE 6: SUPPORT & RESISTANCE
// ============================================================
module6: `
<div class="module-header">
    <span class="phase-tag phase2">Phase 2: Reading the Market</span>
    <h1>Support & Resistance</h1>
    <p class="subtitle">The single most important concept in all of technical analysis.</p>
</div>

<div class="content-section">
    <h2>What Are Support and Resistance?</h2>
    <p><strong>Support:</strong> A price level where buying pressure has historically been strong enough to stop price from falling further. Think of it as a floor.</p>
    <p><strong>Resistance:</strong> A price level where selling pressure has historically been strong enough to stop price from rising further. Think of it as a ceiling.</p>
    <p>These levels exist because traders have memory. If the S&P bounced at 5,150 three times last week, thousands of traders have that level on their charts. When price approaches 5,150 again, they will act — creating a self-fulfilling prophecy.</p>
</div>

<div class="content-section">
    <h2>How to Identify S/R Levels</h2>
    <h3>1. Horizontal Levels (Most Important)</h3>
    <p>Look for prices where the market has previously:</p>
    <ul>
        <li>Bounced (reversed direction) multiple times</li>
        <li>Consolidated (traded sideways) before a big move</li>
        <li>Gapped to or from</li>
    </ul>
    <p><strong>Rule:</strong> The more times a level has been tested, the stronger it is. A level tested 4 times is more significant than one tested twice.</p>
    <p><strong>Rule:</strong> S/R levels are ZONES, not exact prices. Don't draw a line at exactly 5,200.00. Draw a zone from 5,198 to 5,203.</p>

    <h3>2. VWAP (Volume Weighted Average Price)</h3>
    <p>VWAP is the average price weighted by volume for the day. It resets daily. Institutional traders use VWAP as a benchmark — they consider buying below VWAP as "getting a good price" and selling above VWAP as "selling at a premium."</p>
    <ul>
        <li>Price above VWAP = bullish bias for the day</li>
        <li>Price below VWAP = bearish bias for the day</li>
        <li>VWAP itself acts as dynamic support/resistance</li>
    </ul>

    <h3>3. Previous Day's Key Levels</h3>
    <ul>
        <li><strong>Previous Day High (PDH):</strong> Strong resistance. If price breaks above it, often signals strong uptrend.</li>
        <li><strong>Previous Day Low (PDL):</strong> Strong support. If price breaks below it, often signals strong downtrend.</li>
        <li><strong>Previous Day Close:</strong> Acts as a pivot. Opening above it = bullish gap, below = bearish gap.</li>
    </ul>

    <h3>4. Round Numbers / Psychological Levels</h3>
    <p>Whole numbers like 5,200, 5,250, 5,300 on ES attract orders because humans like round numbers. These act as natural S/R.</p>
</div>

<div class="info-box tip">
    <div class="box-title">Level Hierarchy</div>
    <p>Not all S/R is equal. In order of strength: <strong>Weekly/Monthly S/R > Daily S/R > VWAP > Previous Day High/Low > Round Numbers > Intraday S/R.</strong> Higher timeframe levels dominate lower timeframe levels.</p>
</div>

<div class="content-section">
    <h2>Not All Levels Are Equal — The Concrete Wall vs. Cardboard Wall</h2>
    <p>Imagine you're driving a car toward a wall. If it's a <strong>concrete wall</strong> (weekly high/low, major horizontal level tested 5+ times), you're going to bounce off hard. If it's a <strong>cardboard wall</strong> (a minor trendline with 2 touches), you might punch right through it.</p>
    <p>Beginners make the mistake of treating every line on their chart as equally important. They're not. Here's the hierarchy from strongest to weakest:</p>
    <table class="data-table">
        <thead>
            <tr><th>Level Type</th><th>Strength</th><th>Why</th></tr>
        </thead>
        <tbody>
            <tr><td><strong>Weekly/Monthly High/Low</strong></td><td style="color: var(--accent);">Very Strong</td><td>Watched by every timeframe — institutions, swing traders, and day traders all see these. Maximum participants = maximum reaction.</td></tr>
            <tr><td><strong>Prior Day High/Low (PDH/PDL)</strong></td><td style="color: var(--accent);">Strong</td><td>Key reference points for day traders. Algorithms are programmed to react at these levels. Breakouts above PDH or below PDL often signal strong trend days.</td></tr>
            <tr><td><strong>VWAP</strong></td><td style="color: var(--accent);">Strong</td><td>Institutional benchmark. Fund managers measure performance against VWAP. Creates real buying/selling pressure, not just lines on a chart.</td></tr>
            <tr><td><strong>Horizontal S/R (3+ touches)</strong></td><td>Moderate-Strong</td><td>The more times price bounced at a level, the more traders have it marked. But each touch "weakens" the level slightly — eventually it breaks.</td></tr>
            <tr><td><strong>Round Numbers (5,200, 5,250, etc.)</strong></td><td>Moderate</td><td>Human psychology — we gravitate toward round numbers. Lots of stop orders cluster at these levels. Not as reliable as horizontal S/R but worth noting.</td></tr>
            <tr><td><strong>Fibonacci Levels (38.2%, 50%, 61.8%)</strong></td><td>Moderate</td><td>Self-fulfilling prophecy — enough traders watch them that they work. Best when combined with another level type (confluence).</td></tr>
            <tr><td><strong>Trendlines (2 touches)</strong></td><td>Weak</td><td>Subjective — different traders draw them differently. Easily broken. Use only as secondary confirmation, never as a primary trading level.</td></tr>
        </tbody>
    </table>

    <div class="info-box warning">
        <div class="box-title">Too Many Lines = Analysis Paralysis</div>
        <p>If your chart looks like a coloring book with 15 different lines, you have too many levels drawn. When everything is "important," nothing is important. <strong>Stick to 3-5 key levels per session.</strong> Draw only the strongest levels — the ones that are obvious even on a zoomed-out chart. If you have to squint to see why a level matters, it probably doesn't.</p>
        <p>Before each session: mark the prior day high/low, overnight high/low, and 1-2 major horizontal levels. Add VWAP when the session opens. That's it. Five levels maximum. Clean chart, clear mind, better decisions.</p>
    </div>
</div>

<div class="content-section">
    <h2>Support Becomes Resistance (and Vice Versa)</h2>
    <p>When price breaks through a support level convincingly, that former support becomes resistance. When price breaks through resistance, it becomes support. This is called <strong>polarity</strong> and it is one of the most reliable concepts in technical analysis.</p>
    <div class="formula-block">
        Price at 5,200 (support) → Breaks below → Price rallies back to 5,200<br>
        Now 5,200 acts as RESISTANCE → Expect sellers here
    </div>
</div>

<div class="content-section">
    <h2>How to Trade S/R</h2>
    <table class="data-table">
        <thead>
            <tr><th>Setup</th><th>Entry</th><th>Stop Loss</th><th>Target</th></tr>
        </thead>
        <tbody>
            <tr><td>Bounce off Support</td><td>Buy when price touches support and shows rejection (hammer, bullish engulfing)</td><td>Below support zone (+ buffer of 2-4 ticks)</td><td>Next resistance level</td></tr>
            <tr><td>Rejection at Resistance</td><td>Sell when price touches resistance and shows rejection (shooting star, bearish engulfing)</td><td>Above resistance zone (+ buffer of 2-4 ticks)</td><td>Next support level</td></tr>
            <tr><td>Breakout</td><td>Enter when price closes ABOVE resistance or BELOW support with volume</td><td>Back inside the broken level</td><td>Next major level</td></tr>
        </tbody>
    </table>
</div>

<div class="info-box warning">
    <div class="box-title">False Breakouts</div>
    <p>60-70% of breakouts fail. Price punches through a level, triggers stops, then reverses. <strong>Wait for confirmation:</strong> a candle CLOSE beyond the level on your trading timeframe, ideally with above-average volume. Don't chase the breakout candle itself.</p>
</div>

<button class="module-complete-btn" onclick="completeModule('module6')">Mark Module 6 Complete ✓</button>
<div class="btn-group">
    <button class="btn btn-secondary" onclick="navigateTo('module5')">← Module 5</button>
    <button class="btn btn-primary" onclick="navigateTo('module7')">Module 7: Key Indicators →</button>
</div>
`,

// ============================================================
// MODULE 7: KEY INDICATORS
// ============================================================
module7: `
<div class="module-header">
    <span class="phase-tag phase2">Phase 2: Reading the Market</span>
    <h1>Key Indicators</h1>
    <p class="subtitle">Only the indicators that professional futures traders actually use. Nothing else.</p>
</div>

<div class="info-box warning">
    <div class="box-title">Indicator Truth</div>
    <p>Indicators are LAGGING — they are calculated from past price data. They do not predict the future. They help you confirm what price action is already telling you. If you need 5+ indicators to make a decision, you're overcomplicating it. Use 2-3 maximum.</p>
</div>

<div class="content-section">
    <h2>The Only Indicators You Need</h2>

    <h3>1. VWAP (Volume Weighted Average Price)</h3>
    <p><strong>What it is:</strong> The average price of the day, weighted by volume. It shows you the "fair value" price.</p>
    <p><strong>How institutions use it:</strong> Large fund managers use VWAP as a performance benchmark. If they buy below VWAP, they outperformed. This creates real buying pressure below VWAP and selling pressure above.</p>
    <ul>
        <li>Price consistently above VWAP → Buyers are in control → Look for long trades</li>
        <li>Price consistently below VWAP → Sellers are in control → Look for short trades</li>
        <li>Price hugging VWAP → No clear direction → Avoid trading or trade the range</li>
    </ul>

    <h3>2. EMA (Exponential Moving Average) — 9 and 21 Period</h3>
    <p><strong>What it is:</strong> A moving average that gives more weight to recent prices.</p>
    <ul>
        <li><strong>9 EMA:</strong> Fast-moving. Tracks short-term momentum.</li>
        <li><strong>21 EMA:</strong> Slower. Tracks the intermediate trend.</li>
        <li><strong>9 EMA above 21 EMA:</strong> Short-term uptrend. Look for longs.</li>
        <li><strong>9 EMA below 21 EMA:</strong> Short-term downtrend. Look for shorts.</li>
        <li><strong>Price pulling back to the 9 or 21 EMA in a trend:</strong> Potential entry point for trend continuation.</li>
    </ul>
    <div class="formula-block">
        EMA = Price(today) × k + EMA(yesterday) × (1 - k)<br>
        where k = 2 / (N + 1), N = period
    </div>

    <h3>3. RSI (Relative Strength Index) — 14 Period</h3>
    <p><strong>What it is:</strong> Measures the speed and magnitude of recent price changes. Oscillates 0-100.</p>
    <ul>
        <li><strong>Above 70:</strong> "Overbought" — but in a strong trend, RSI can stay above 70 for extended periods. Do NOT blindly short because RSI is over 70.</li>
        <li><strong>Below 30:</strong> "Oversold" — same caveat. Don't blindly buy.</li>
        <li><strong>Best use: Divergence.</strong> If price makes a new high but RSI makes a lower high, momentum is weakening. This is a reliable warning signal.</li>
        <li><strong>The RSI 50 Level (Trend Confirmation):</strong> Most traders only watch 70/30 and miss the most useful RSI level: 50. In an uptrend, RSI tends to bounce off the 50 level and stay above it. In a downtrend, RSI tends to reject at 50 and stay below it. <strong>RSI crossing above 50 = momentum shifting bullish. RSI crossing below 50 = momentum shifting bearish.</strong> Use this as a trend filter: only take longs when RSI is above 50, only take shorts when RSI is below 50. This single filter eliminates many counter-trend losers.</li>
    </ul>

    <h3>4. Fibonacci Retracement Levels</h3>
    <p><strong>What it is:</strong> A tool based on the Fibonacci sequence that identifies potential support/resistance levels where price may reverse during a pullback. The key levels are 38.2%, 50%, and 61.8%.</p>
    <p><strong>How it works:</strong> After a significant move (swing high to swing low, or vice versa), price often retraces a predictable percentage before continuing. Draw Fibonacci retracements from the swing low to the swing high (for an uptrend) or swing high to swing low (for a downtrend).</p>
    <ul>
        <li><strong>38.2% retracement:</strong> A shallow pullback. The trend is very strong. Aggressive traders enter here.</li>
        <li><strong>50% retracement:</strong> Not actually a Fibonacci number, but widely watched. Price retracing 50% of the prior move is considered a "healthy" pullback. This often lines up with VWAP or EMAs.</li>
        <li><strong>61.8% retracement ("Golden Ratio"):</strong> The deepest pullback that still suggests the trend is intact. If price breaks convincingly below 61.8%, the trend may be reversing. This is the last line of defense.</li>
        <li><strong>78.6% retracement:</strong> Borderline. If price pulls back this far, the original move is losing its validity.</li>
    </ul>
    <div class="formula-block">
        FIBONACCI RETRACEMENT EXAMPLE (Uptrend):<br>
        Swing Low: 5,150 → Swing High: 5,250 → Range = 100 points<br><br>
        38.2% level: 5,250 - (100 × 0.382) = 5,211.80<br>
        50.0% level: 5,250 - (100 × 0.500) = 5,200.00<br>
        61.8% level: 5,250 - (100 × 0.618) = 5,188.20<br><br>
        Expect potential support (buying opportunities) at these levels during pullbacks.
    </div>
    <div class="info-box tip">
        <div class="box-title">Fibonacci Confluence</div>
        <p>Fibonacci levels are most powerful when they <strong>line up with other levels</strong> — VWAP, a horizontal S/R zone, an EMA, or a round number. When a Fibonacci level and VWAP are at the same price, that level is extremely strong. This is called "confluence" and it's what professional traders look for. A Fibonacci level by itself is moderate; a Fibonacci level with 2-3 confirming factors is high-probability.</p>
    </div>
    <p><strong>In TradingView:</strong> Select the "Fib Retracement" tool from the left toolbar. Click on the swing low, drag to the swing high (for uptrend analysis). The levels will automatically appear on your chart.</p>

    <h3>Why Does Fibonacci Actually Work?</h3>
    <p>Here's the honest answer: <strong>Fibonacci works because enough traders believe it works.</strong> That's not a cop-out — that's actually how markets function. If thousands of traders all have the 61.8% level on their chart and all plan to buy there, their collective buying creates real support at that level. It's a self-fulfilling prophecy.</p>
    <p>Is there something magical about the number 0.618? In nature, yes — it appears in seashells, sunflowers, and spiral galaxies. In markets? The math is less important than the behavior it creates. What matters is that the 38.2%, 50%, and 61.8% levels are some of the most widely watched levels in all of trading. When something is widely watched, it becomes widely acted upon, and that action moves price.</p>
    <p><strong>Bottom line:</strong> Don't worry about whether Fibonacci is "real" or "mathematical destiny." It's a tool that works because of collective human behavior. That's a perfectly valid reason to use it — but always combine it with other confirmations (VWAP, S/R, volume) for highest probability.</p>

    <h3>EMA Crossovers: The Two Runners Analogy</h3>
    <p>Imagine two runners on a track:</p>
    <ul>
        <li>The <strong>9 EMA</strong> is a <strong>sprinter</strong> — she reacts fast to every change in direction. If price turns, she turns almost immediately.</li>
        <li>The <strong>21 EMA</strong> is a <strong>jogger</strong> — he moves steadily and takes longer to change direction. He doesn't react to every little wiggle.</li>
    </ul>
    <p>When the <strong>sprinter (9 EMA) passes the jogger (21 EMA) going uphill</strong>, it means short-term momentum has shifted bullish. The fast money is moving up faster than the slow money. This is a <strong>bullish crossover</strong> — look for longs.</p>
    <p>When the <strong>sprinter passes the jogger going downhill</strong> (9 EMA crosses below 21 EMA), short-term momentum has shifted bearish. This is a <strong>bearish crossover</strong> — look for shorts.</p>
    <p>When both runners are running side by side (EMAs are flat and close together), the market is going nowhere — it's ranging. <strong>Don't trade crossover signals when the EMAs are flat.</strong> Crossovers only work in trending markets.</p>

    <h3>5. ATR (Average True Range) — 14 Period</h3>
    <p><strong>What it is:</strong> Measures the average range of price movement over 14 periods. This tells you how volatile the market is RIGHT NOW.</p>
    <ul>
        <li>Use ATR to set realistic stop losses and profit targets</li>
        <li>If the 5-min ATR on ES is 3 points, setting a 1-point stop is too tight (you'll get stopped out by normal noise)</li>
        <li>A good stop-loss is typically 1-1.5× ATR away from entry</li>
    </ul>
    <div class="formula-block">
        Stop Loss Distance = 1× to 1.5× ATR<br>
        Example: ATR = 3 points on ES → Stop = 3-4.5 points from entry → Risk = $150-$225 per contract
    </div>
</div>

<div class="content-section">
    <h2>Your Starter Indicator Setup</h2>
    <table class="data-table">
        <thead>
            <tr><th>Chart</th><th>Indicators</th><th>Purpose</th></tr>
        </thead>
        <tbody>
            <tr><td>5-min chart</td><td>VWAP, 9 EMA, 21 EMA</td><td>Trade execution — entries and exits</td></tr>
            <tr><td>15-min chart</td><td>VWAP, 9 EMA, 21 EMA</td><td>Trend direction — confirms your bias</td></tr>
            <tr><td>Below chart</td><td>Volume bars, RSI (14)</td><td>Confirmation — validate setups, RSI 50 for trend filter</td></tr>
            <tr><td>As needed</td><td>Fibonacci Retracement</td><td>Draw on swing highs/lows to find pullback targets</td></tr>
        </tbody>
    </table>
</div>

<div class="info-box tip">
    <div class="box-title">The Indicator Trap</div>
    <p>Adding more indicators doesn't make you more accurate — it creates "analysis paralysis." You'll find conflicting signals and freeze. Master these 5 tools deeply before adding anything else. Most full-time futures traders use fewer indicators than beginners.</p>
</div>

<button class="module-complete-btn" onclick="completeModule('module7')">Mark Module 7 Complete ✓</button>
<div class="btn-group">
    <button class="btn btn-secondary" onclick="navigateTo('module6')">← Module 6</button>
    <button class="btn btn-primary" onclick="navigateTo('module8')">Module 8: Volume & Order Flow →</button>
</div>
`,

// ============================================================
// MODULE 8: VOLUME & ORDER FLOW
// ============================================================
module8: `
<div class="module-header">
    <span class="phase-tag phase2">Phase 2: Reading the Market</span>
    <h1>Volume & Order Flow</h1>
    <p class="subtitle">Volume is the only indicator that isn't derived from price — it's independent data.</p>
</div>

<div class="content-section">
    <h2>Part 1: Volume for Beginners — What You Need Now</h2>
    <h3>The Concert Crowd Analogy</h3>
    <p>Imagine you're at a concert. The band plays a song and the crowd reacts:</p>
    <ul>
        <li><strong>The crowd ROARS (high volume):</strong> This is a real reaction. The energy is genuine. When the market makes a big move and volume is high, the move is real — lots of traders are participating and putting real money behind it.</li>
        <li><strong>The crowd politely claps (low volume):</strong> The reaction is lukewarm. Nobody's that excited. When the market moves but volume is low, the move is weak — few traders care. It's likely to fizzle out or reverse.</li>
        <li><strong>The crowd goes DEAD SILENT after a huge buildup (volume dries up):</strong> Everyone who was going to act has already acted. The energy is spent. When volume spikes then suddenly collapses, the move is exhausted — it's about to reverse.</li>
    </ul>
    <p><strong>That's volume in a nutshell.</strong> Volume = crowd noise. It tells you whether a price move is the real deal or a fake-out. Now let's see this in action.</p>

    <h3>3 Volume Scenarios Every Beginner Must Recognize</h3>
    <div class="formula-block">
        SCENARIO 1: BREAKOUT + HIGH VOLUME (Real Move) ✓<br>
        Price has been bouncing between 5,200 and 5,210 for an hour.<br>
        Suddenly a big green candle closes above 5,210.<br>
        Volume on that candle is 2× the average.<br>
        → This is a REAL breakout. Lots of traders are buying above resistance.<br>
        → Action: This breakout is likely to continue. Look for a pullback entry.<br><br>

        SCENARIO 2: BREAKOUT + LOW VOLUME (Fake Move) ✗<br>
        Same range: 5,200 to 5,210.<br>
        Price pokes above 5,210 on a small candle.<br>
        Volume is BELOW average — barely anyone is trading.<br>
        → This is likely a FALSE breakout. Not enough conviction to sustain it.<br>
        → Action: Don't chase it. Wait. Price will probably fall back into the range.<br><br>

        SCENARIO 3: SELLOFF + VOLUME SPIKE (Exhaustion) ⚠<br>
        Price has been dropping all morning: 5,220 → 5,200 → 5,190.<br>
        Then a massive red candle drops to 5,180 on 3× average volume.<br>
        The next candle is small with a long lower wick.<br>
        → This is CLIMACTIC volume — the last sellers just panicked and dumped.<br>
        → Action: The selloff is likely exhausted. Watch for a reversal bounce.
    </div>
</div>

<div class="content-section">
    <h2>Part 2: Volume Mechanics — Going Deeper</h2>
    <h3>Why Volume Matters</h3>
    <p>Price tells you WHAT happened. Volume tells you HOW MUCH conviction was behind it. A big price move on low volume is suspect. A big price move on high volume is meaningful.</p>
    <ul>
        <li><strong>High volume + price moving up:</strong> Strong buying. Trend likely to continue.</li>
        <li><strong>High volume + price moving down:</strong> Strong selling. Trend likely to continue.</li>
        <li><strong>Low volume + price moving:</strong> Weak move. Likely to reverse or stall.</li>
        <li><strong>High volume + price NOT moving (narrow range candles):</strong> Absorption. Big players are absorbing all the selling (or buying). Potential reversal coming.</li>
    </ul>
</div>

<div class="content-section">
    <h2>Volume Patterns to Watch</h2>
    <h3>1. Volume Climax</h3>
    <p>An extreme spike in volume (2-3× the average bar volume), often at the end of a trend. This indicates exhaustion — the last buyers (or sellers) have entered. The move is likely over.</p>

    <h3>2. Decreasing Volume in a Trend</h3>
    <p>If price keeps making higher highs but volume is declining with each push, the trend is losing steam. Fewer participants are driving price higher. This divergence between price and volume often precedes a reversal.</p>

    <h3>3. Volume at Breakout</h3>
    <p>A breakout through a key level MUST be accompanied by above-average volume to be valid. If a breakout happens on low volume, it's more likely to be a false breakout. Look for 1.5× or more of average bar volume.</p>
</div>

<div class="content-section">
    <h2>Order Flow Basics (Tape Reading)</h2>
    <p>Order flow is the study of actual buy and sell orders as they hit the market in real time. This is more advanced but understanding the basics gives you an edge.</p>

    <h3>The DOM (Depth of Market / Order Book)</h3>
    <p>The DOM shows pending limit orders at each price level. It displays how many contracts are waiting to be bought (bid) and sold (ask) at each price.</p>
    <table class="data-table">
        <thead>
            <tr><th>Bid Size</th><th>Price</th><th>Ask Size</th></tr>
        </thead>
        <tbody>
            <tr><td></td><td>5,203.00</td><td>45</td></tr>
            <tr><td></td><td>5,202.75</td><td>120</td></tr>
            <tr><td></td><td>5,202.50</td><td>85</td></tr>
            <tr><td>90</td><td>5,202.25</td><td></td></tr>
            <tr><td>200</td><td>5,202.00</td><td></td></tr>
            <tr><td>150</td><td>5,201.75</td><td></td></tr>
        </tbody>
    </table>
    <p><em>The "inside market" is 5,202.25 bid / 5,202.50 ask. The spread is 1 tick (0.25 points = $12.50 on ES).</em></p>

    <h3>What to Look For</h3>
    <ul>
        <li><strong>Large resting orders:</strong> A stack of 500+ contracts at a price level often acts as a "wall" — support or resistance.</li>
        <li><strong>Iceberg orders:</strong> Large orders hidden as small orders that keep replenishing. Sign of institutional activity.</li>
        <li><strong>Pulling/spoofing:</strong> Large orders that appear and disappear. These are meant to mislead. Don't trust size that appears and vanishes quickly.</li>
    </ul>
</div>

<div class="content-section">
    <h2>Volume Profile (Advanced — Study After Month 3)</h2>
    <p>Volume Profile shows you WHERE volume was traded at each price level, not just WHEN. It answers the question: "At what prices did the most trading happen?" This reveals where institutions are active.</p>

    <h3>Key Volume Profile Concepts</h3>
    <table class="data-table">
        <thead>
            <tr><th>Concept</th><th>Definition</th><th>How to Use It</th></tr>
        </thead>
        <tbody>
            <tr><td><strong>POC (Point of Control)</strong></td><td>The single price level with the highest traded volume. The "fairest price" that day.</td><td>Acts as a magnet — price tends to return to POC. Strong S/R level for the next session.</td></tr>
            <tr><td><strong>Value Area (VA)</strong></td><td>The price range containing 70% of the day's volume. Think of it as "where most business was done."</td><td>If price opens inside yesterday's VA, expect range-bound trading. If outside, expect a trending move.</td></tr>
            <tr><td><strong>VAH (Value Area High)</strong></td><td>The upper boundary of the Value Area.</td><td>Acts as resistance. If price breaks above VAH with volume, bullish continuation.</td></tr>
            <tr><td><strong>VAL (Value Area Low)</strong></td><td>The lower boundary of the Value Area.</td><td>Acts as support. If price breaks below VAL with volume, bearish continuation.</td></tr>
            <tr><td><strong>High Volume Node (HVN)</strong></td><td>A price area where significant volume was traded (wide horizontal bar).</td><td>Acts as S/R — price tends to consolidate and slow down here. Think of it as "fair price agreement."</td></tr>
            <tr><td><strong>Low Volume Node (LVN)</strong></td><td>A price area where very little volume was traded (thin horizontal bar).</td><td>Price moves quickly through LVNs. These are "rejection zones" — nobody wanted to trade there. Think of them as speed bumps that price blows past.</td></tr>
        </tbody>
    </table>

    <h3>Initial Balance (IB)</h3>
    <p>The Initial Balance is the price range established in the first 30-60 minutes of the US session (9:30-10:00 or 9:30-10:30 AM ET). Market Profile traders consider this crucial because:</p>
    <ul>
        <li><strong>IB High and IB Low</strong> become strong S/R levels for the rest of the day.</li>
        <li>A narrow IB (small range in first hour) often leads to a trending day — price will break out of the IB and run.</li>
        <li>A wide IB (big range in first hour) often leads to a range day — price stays within the IB.</li>
        <li>If price breaks the IB High, watch for continuation to the upside with a target of 1.5× the IB range above the IB High. Same logic for IB Low breaks to the downside.</li>
    </ul>

    <h3>Delta (Advanced Order Flow)</h3>
    <p><strong>Delta</strong> = Buy volume minus Sell volume at a given price or candle. It shows the net aggression of buyers vs. sellers.</p>
    <ul>
        <li><strong>Positive delta + price up:</strong> Healthy bullish move. Aggressive buyers are in control.</li>
        <li><strong>Negative delta + price down:</strong> Healthy bearish move. Aggressive sellers are in control.</li>
        <li><strong>Negative delta + price up:</strong> Divergence. Price is rising but sellers are more aggressive. This is absorption — sellers are selling into the rally. Potential reversal warning.</li>
        <li><strong>Positive delta + price down:</strong> Divergence. Buyers are buying the dip aggressively but price keeps falling. Institutions may be selling via limit orders. Potential capitulation or exhaustion.</li>
    </ul>

    <div class="info-box tip">
        <div class="box-title">Volume Profile in TradingView</div>
        <p>In TradingView, add the "Volume Profile Visible Range" indicator. This overlays horizontal volume bars on your chart showing where the most trading happened. The thickest bar is the POC. The shaded area is the Value Area (70% of volume). <strong>Free TradingView plans have limited Volume Profile access — you may need a paid plan ($12.95/mo) for full functionality.</strong></p>
    </div>
</div>

<div class="info-box fact">
    <div class="box-title">Beginner Priority</div>
    <p>Order flow (DOM/tape reading) and Volume Profile are advanced skills. For your first 3-6 months, focus on <strong>volume bars on your chart.</strong> Learn to read whether volume confirms or contradicts the price move. That alone puts you ahead of most retail traders. Add Volume Profile study after month 3, and order flow after you're consistently profitable on sim.</p>
</div>

<button class="module-complete-btn" onclick="completeModule('module8')">Mark Module 8 Complete ✓</button>
<div class="btn-group">
    <button class="btn btn-secondary" onclick="navigateTo('module7')">← Module 7</button>
    <button class="btn btn-primary" onclick="navigateTo('module9')">Module 9: Trade Setups →</button>
</div>
`,

// ============================================================
// MODULE 9: TRADE SETUPS
// ============================================================
module9: `
<div class="module-header">
    <span class="phase-tag phase3">Phase 3: Strategy</span>
    <h1>Trade Setups</h1>
    <p class="subtitle">Three proven setups that professional futures traders use daily. Master one before learning the next.</p>
</div>

<div class="info-box tip">
    <div class="box-title">One Setup Only</div>
    <p>Pick ONE of these three setups. Trade ONLY that setup for your first 60 days on sim. You need to see the setup so many times that recognition becomes automatic. Trying to learn 3 setups at once will dilute your pattern recognition.</p>
</div>

<div class="content-section">
    <h2>Setup 1: VWAP Pullback (Trend Continuation)</h2>
    <p>This is the most reliable beginner setup. It trades WITH the trend, which gives you a statistical edge.</p>

    <h3>Rules</h3>
    <ol>
        <li><strong>Identify the trend:</strong> On 15-min chart, 9 EMA is above 21 EMA (for longs) or below (for shorts).</li>
        <li><strong>Wait for pullback:</strong> On 5-min chart, price pulls back to VWAP or the 9/21 EMA zone.</li>
        <li><strong>Confirmation:</strong> A bullish candle (for longs) forms at VWAP/EMA — hammer, bullish engulfing, or strong green candle with above-average volume.</li>
        <li><strong>Entry:</strong> Buy above the high of the confirmation candle.</li>
        <li><strong>Stop Loss:</strong> Below the low of the pullback (or 1× ATR below entry).</li>
        <li><strong>Target:</strong> Previous high (for longs) or a 2:1 reward-to-risk ratio.</li>
    </ol>

    <div class="formula-block">
        LONG EXAMPLE (MES):<br>
        Trend: 15-min shows uptrend (9 EMA > 21 EMA)<br>
        Pullback: Price drops from 5,210 to 5,200 (touching VWAP)<br>
        Confirmation: Hammer candle at 5,200 with high volume<br>
        Entry: 5,201.50 (above hammer high)<br>
        Stop: 5,198.00 (below hammer low) → Risk = 14 ticks = $17.50<br>
        Target: 5,208.00 (previous high) → Reward = 26 ticks = $32.50<br>
        Risk:Reward = 1:1.86
    </div>
</div>

<div class="content-section">
    <h2>Setup 2: Support/Resistance Bounce</h2>
    <p>Trading a bounce off a proven S/R level. Works in both trending and ranging markets.</p>

    <h3>Rules</h3>
    <ol>
        <li><strong>Mark key levels:</strong> Previous day high/low, weekly levels, round numbers, areas with 3+ touches.</li>
        <li><strong>Wait for price to reach the level.</strong></li>
        <li><strong>Watch for rejection:</strong> Long wicks, decreasing momentum, volume spike then drop.</li>
        <li><strong>Confirmation candle:</strong> A reversal candle (hammer at support, shooting star at resistance).</li>
        <li><strong>Entry:</strong> On the close of the confirmation candle or just beyond its extreme.</li>
        <li><strong>Stop Loss:</strong> Beyond the S/R zone (not right at it — give it room: 2-4 ticks past the zone).</li>
        <li><strong>Target:</strong> The next S/R level in your direction, or 2:1 R:R minimum.</li>
    </ol>
</div>

<div class="content-section">
    <h2>Setup 3: Opening Range Breakout</h2>
    <p>Based on the first 15-30 minutes of the US session (9:30-10:00 AM ET). The opening range often sets the tone for the day.</p>

    <h3>Rules</h3>
    <ol>
        <li><strong>Mark the range:</strong> Draw horizontal lines at the highest high and lowest low of the first 15 or 30 minutes (9:30-9:45 or 9:30-10:00).</li>
        <li><strong>Wait for breakout:</strong> Price closes a 5-min candle ABOVE the high (go long) or BELOW the low (go short).</li>
        <li><strong>Volume confirmation:</strong> The breakout candle must have above-average volume (1.5×+ average).</li>
        <li><strong>Entry:</strong> On the close of the breakout candle.</li>
        <li><strong>Stop Loss:</strong> Opposite side of the opening range, or midpoint of the range if the range is very wide.</li>
        <li><strong>Target:</strong> The height of the opening range projected from the breakout point, or next S/R level.</li>
    </ol>
</div>

<div class="content-section">
    <h2>How Often Do Setups Actually Appear?</h2>
    <p>One of the biggest beginner mistakes is expecting non-stop action. Here's the reality:</p>
    <ul>
        <li><strong>Quality setups per day (9:30-11:30 AM session):</strong> 1-3. Some days zero.</li>
        <li><strong>If you're taking 5+ trades per day:</strong> You're forcing setups that don't exist. You're seeing patterns where there are none because your brain WANTS to trade.</li>
        <li><strong>If you're taking 8+ trades per day:</strong> You are almost certainly gambling, not trading. Stop. Walk away.</li>
    </ul>
    <p>Professional day traders often take 1-2 trades in the entire morning session. They spend 80% of their time waiting and 20% executing. This feels boring — and that's the point. <strong>Boredom is the price of discipline.</strong></p>
</div>

<div class="content-section">
    <h2>When Perfect Setups Fail (And They Will)</h2>
    <p>Even the best setup fails 40-45% of the time. Here's what a losing trade looks like for each setup, so you know what to expect:</p>

    <h3>VWAP Pullback — The Failure</h3>
    <div class="formula-block">
        15-min trend is UP ✓ | Price pulls back to VWAP ✓ | Hammer candle forms ✓ | Volume confirms ✓<br>
        You buy at 5,201.50. Stop at 5,198.00.<br>
        Price pops to 5,203... then reverses. Drops through VWAP. Hits your stop at 5,198.00.<br>
        Loss: 14 ticks = -$17.50 on 1 MES.<br><br>
        WHY IT FAILED: A large institutional sell order hit the market that you couldn't see.<br>
        The setup was CORRECT. The execution was CORRECT. The market just didn't cooperate.<br>
        THIS IS NORMAL. You did nothing wrong.
    </div>

    <h3>S/R Bounce — The Failure</h3>
    <div class="formula-block">
        Price reaches strong support at 5,180 (tested 3 times before) ✓<br>
        Bullish engulfing candle forms ✓ | You buy at 5,181.00. Stop at 5,177.00.<br>
        Price bounces to 5,183... then a sudden red candle breaks through 5,180.<br>
        Your stop hits at 5,177.00. Loss: 16 ticks = -$20.00 on 1 MES.<br><br>
        WHY IT FAILED: The 4th test of support finally broke it. Each touch weakens the level.<br>
        Again — setup was valid. Sometimes support just breaks.
    </div>

    <h3>Opening Range Breakout — The Failure</h3>
    <div class="formula-block">
        Opening range: 5,200 to 5,215. Price breaks above 5,215 with volume ✓<br>
        You buy at 5,216.00. Stop at midpoint 5,207.50.<br>
        Price goes to 5,219... reverses... falls back into the range. Hits stop at 5,207.50.<br>
        Loss: 34 ticks = -$42.50 on 1 MES.<br><br>
        WHY IT FAILED: This was a false breakout — the 60-70% that fail (Module 6).<br>
        This is why R:R matters. Your winners need to cover these inevitable failures.
    </div>

    <div class="info-box warning">
        <div class="box-title">The Two-Strike Rule</div>
        <p>If a specific setup fails twice in a row during the same session, <strong>do NOT take a third.</strong> Two consecutive failures of the same setup suggest the market condition may have changed — maybe the trend reversed, maybe a news event shifted sentiment, maybe institutional flow is working against you. Switch to observation mode. The market is telling you something — listen.</p>
    </div>
</div>

<div class="info-box warning">
    <div class="box-title">Avoid These Traps</div>
    <p><strong>Chasing:</strong> If you missed the entry, let it go. There will be another setup. Entering late means your stop is too far away and your R:R is destroyed.</p>
    <p><strong>Counter-trend trading:</strong> Buying in a clear downtrend because it "looks cheap" is the fastest way to lose money. Trade WITH the trend until you have 6+ months of experience.</p>
    <p><strong>Overtrading:</strong> Quality over quantity. 1-3 trades per day is ideal. If you're taking 10+ trades, you're not waiting for proper setups — you're gambling.</p>
</div>

<div class="info-box tip">
    <div class="box-title">Flat Is a Position</div>
    <p><strong>Not trading is a trade decision.</strong> Some days the market chops sideways with no clean setups. Some days you check the calendar and see FOMC or CPI. Some days you sit down and nothing triggers your checklist. The correct action on these days is to do nothing. Zero trades.</p>
    <p>Professional traders have many zero-trade days per month. Beginners feel anxious about "missing out." This anxiety causes forced trades on weak setups — which is how most accounts die. If your setup doesn't appear by 11:00 AM, close the platform. Come back tomorrow. <strong>The market will be there every single day. Your capital won't be if you force trades.</strong></p>
</div>

<div class="content-section">
    <h2>Trade Checklist (Before Every Trade)</h2>
    <ol>
        <li>Is the higher timeframe (15-min) supporting my direction? □</li>
        <li>Is there a clear S/R level or VWAP interaction? □</li>
        <li>Is there a candlestick confirmation pattern? □</li>
        <li>Is volume confirming the move? □</li>
        <li>Is my stop-loss placed at a logical level (not arbitrary)? □</li>
        <li>Is my risk:reward at least 1.5:1? □</li>
        <li>Am I risking ≤ 2% of my account? □</li>
    </ol>
    <p><strong>If any answer is "no" — do NOT take the trade.</strong></p>
</div>

<button class="module-complete-btn" onclick="completeModule('module9')">Mark Module 9 Complete ✓</button>
<div class="btn-group">
    <button class="btn btn-secondary" onclick="navigateTo('module8')">← Module 8</button>
    <button class="btn btn-primary" onclick="navigateTo('module10')">Module 10: Risk Management →</button>
</div>
`,

// ============================================================
// MODULE 10: RISK MANAGEMENT
// ============================================================
module10: `
<div class="module-header">
    <span class="phase-tag phase3">Phase 3: Strategy</span>
    <h1>Risk Management</h1>
    <p class="subtitle">This module will save your account. Risk management isn't optional — it's THE skill.</p>
</div>

<div class="info-box warning">
    <div class="box-title">The Only Thing That Matters</div>
    <p>You can have a 40% win rate and still be profitable if your average winner is 2× your average loser. Conversely, you can have a 70% win rate and go broke if your losers are 5× your winners. <strong>Risk management determines profitability, not your win rate.</strong></p>
</div>

<div class="content-section">
    <h2>The Core Rules</h2>

    <h3>Rule 1: The 2% Rule</h3>
    <p>Never risk more than 2% of your trading account on a single trade.</p>
    <div class="formula-block">
        Max Risk Per Trade = Account Balance × 0.02<br><br>
        $2,500 account → $50 max risk per trade<br>
        $5,000 account → $100 max risk per trade<br>
        $10,000 account → $200 max risk per trade
    </div>

    <h3>Rule 2: The 6% Rule (Daily Loss Limit)</h3>
    <p>Stop trading for the day if you lose 6% of your account (or 3 consecutive losing trades — whichever comes first).</p>
    <div class="formula-block">
        Daily Loss Limit = Account Balance × 0.06<br><br>
        $2,500 account → $150 max daily loss → WALK AWAY<br>
        $5,000 account → $300 max daily loss → WALK AWAY
    </div>
    <p>When you hit your daily loss limit, close your platform. Do not look at the market. Go for a walk. Review your trades tonight. Come back tomorrow fresh.</p>

    <h3>Rule 3: Risk-to-Reward Ratio (R:R)</h3>
    <p>Only take trades where your potential profit is at least 1.5× your risk. Ideally 2:1 or better.</p>
    <div class="formula-block">
        R:R = (Target Price - Entry Price) / (Entry Price - Stop Loss Price)<br><br>
        Example: Entry = 5,200, Stop = 5,196, Target = 5,210<br>
        Risk = 4 points, Reward = 10 points<br>
        R:R = 10/4 = 2.5:1 ✓ TAKE THIS TRADE
    </div>
</div>

<div class="content-section">
    <h2>The Math of Survival</h2>
    <p>This table shows how much you need to gain to recover from a loss. This is why capital preservation is everything.</p>
    <table class="data-table">
        <thead>
            <tr><th>Account Loss</th><th>Gain Needed to Break Even</th><th>Difficulty</th></tr>
        </thead>
        <tbody>
            <tr><td>-10%</td><td>+11.1%</td><td>Easy — a few good days</td></tr>
            <tr><td>-20%</td><td>+25%</td><td>Moderate — a good week</td></tr>
            <tr><td>-30%</td><td>+42.9%</td><td>Hard — takes weeks</td></tr>
            <tr><td>-50%</td><td>+100%</td><td>Very hard — need to double your account</td></tr>
            <tr><td>-75%</td><td>+300%</td><td>Nearly impossible to recover</td></tr>
            <tr><td>-90%</td><td>+900%</td><td>Account is effectively dead</td></tr>
        </tbody>
    </table>

    <div class="info-box warning">
        <div class="box-title">Real-Money Example: Why Drawdowns Are Deceptive</div>
        <p>Let's say you start with a $5,000 account. You have a bad week and lose 20% — that's $1,000 lost. Your account is now $4,000.</p>
        <p>"No big deal," you think. "I just need to make 20% back." <strong>Wrong.</strong> 20% of $4,000 is only $800 — that gets you to $4,800, not $5,000. To get from $4,000 back to $5,000, you need a <strong>25% gain</strong>. You lost 20% but need 25% to recover.</p>
        <p>This asymmetry gets worse fast. A 50% loss requires a 100% gain to recover (you'd need to DOUBLE your remaining money). This is why capital preservation — not profit — is your #1 priority. Every dollar you protect today is worth more than a dollar you might earn tomorrow.</p>
    </div>
</div>

<div class="content-section">
    <h2>Position Sizing Formula</h2>
    <div class="formula-block">
        Number of Contracts = Max Risk ($) / (Stop Distance in Ticks × Tick Value)<br><br>
        Example (MES):<br>
        Account: $2,500<br>
        Max Risk: $50 (2%)<br>
        Stop Distance: 20 ticks (5 points)<br>
        Tick Value: $1.25<br><br>
        Contracts = $50 / (20 × $1.25) = $50 / $25 = 2 contracts<br><br>
        Example (ES):<br>
        Account: $15,000<br>
        Max Risk: $300 (2%)<br>
        Stop Distance: 12 ticks (3 points)<br>
        Tick Value: $12.50<br><br>
        Contracts = $300 / (12 × $12.50) = $300 / $150 = 2 contracts
    </div>
    <p>Use the Position Calculator tool in this program for quick calculations.</p>
</div>

<div class="content-section">
    <h2>Stop-Loss Placement</h2>
    <p>Your stop-loss must be at a LOGICAL level — where the trade thesis is invalidated. Not arbitrary.</p>
    <ul>
        <li><strong>Below/above the nearest S/R level</strong> (+ 2-4 tick buffer for noise)</li>
        <li><strong>Below/above the signal candle's wick</strong></li>
        <li><strong>1-1.5× ATR from entry</strong></li>
    </ul>
    <p>If the logical stop-loss would make your risk exceed 2% of your account, <strong>reduce your position size or skip the trade entirely.</strong> Never widen a stop to fit more size.</p>
</div>

<div class="content-section">
    <h2>Partial Profit Management (Scaling Out)</h2>
    <p>Scaling out means closing part of your position at different profit levels. This locks in gains while leaving room for larger moves. Here's the method:</p>

    <h3>The Half-Off Method (Recommended for Beginners)</h3>
    <ol>
        <li><strong>Enter with your full position</strong> (e.g., 2 MES contracts).</li>
        <li><strong>At 1:1 R:R</strong> — close half (1 contract). Move your stop-loss to break-even on the remaining contract.</li>
        <li><strong>At 2:1 or 3:1 R:R</strong> — close the second half at your full target, or trail your stop below the most recent swing low.</li>
    </ol>

    <div class="formula-block">
        SCALING OUT EXAMPLE (2 MES):<br>
        Entry: 5,200.00 | Stop: 5,196.00 (4 pts risk = $20/contract)<br><br>
        At 5,204.00 (1:1 R:R, +4 pts): Close 1 MES → Lock in $20<br>
        Move stop to 5,200.00 (break-even) on remaining 1 MES<br><br>
        At 5,208.00 (2:1 R:R, +8 pts): Close final MES → Lock in $40<br><br>
        Total: $60 profit. If price reversed after your first exit,<br>
        you still made $20 and lost $0 on the second contract (break-even stop).<br>
        Worst case after first scale-out: +$20 total (not a loss).
    </div>

    <h3>Why Scaling Out Works Psychologically</h3>
    <ul>
        <li><strong>Reduces fear of giving back profits.</strong> You've already locked in gains.</li>
        <li><strong>Allows winners to run.</strong> The remaining position has zero risk (break-even stop).</li>
        <li><strong>Smooths your equity curve.</strong> More consistent results day to day.</li>
    </ul>

    <h3>The Tradeoff</h3>
    <p>Scaling out reduces your average profit per trade compared to holding the entire position to your full target. In a strong trending market, holding the full position is more profitable. But for beginners, the psychological benefit of scaling out dramatically improves plan adherence — which is your #1 priority. <strong>Better adherence at slightly lower optimal profit beats perfect theory with poor execution every time.</strong></p>
</div>

<div class="info-box tip">
    <div class="box-title">The Professional Mindset</div>
    <p>Professional traders think in terms of risk, not profit. Before entering, they know exactly how much they'll lose if wrong. The profit takes care of itself when risk is managed. <strong>Your job is not to make money — your job is to not lose money.</strong> The profits come from that foundation.</p>
</div>

<button class="module-complete-btn" onclick="completeModule('module10')">Mark Module 10 Complete ✓</button>
<div class="btn-group">
    <button class="btn btn-secondary" onclick="navigateTo('module9')">← Module 9</button>
    <button class="btn btn-primary" onclick="navigateTo('module11')">Module 11: Trading Plan →</button>
</div>
`,

// ============================================================
// MODULE 11: TRADING PLAN
// ============================================================
module11: `
<div class="module-header">
    <span class="phase-tag phase3">Phase 3: Strategy</span>
    <h1>Your Trading Plan</h1>
    <p class="subtitle">A trading plan is a written document that defines every aspect of your trading. No plan = gambling.</p>
</div>

<div class="content-section">
    <h2>Why You Need a Written Plan</h2>
    <p>When you're in a trade and price is moving against you, your brain enters fight-or-flight mode. Your prefrontal cortex (logic) shuts down. Your amygdala (emotion) takes over. A written plan is the only thing that can override this because you made the decisions when you were calm and rational.</p>
</div>

<div class="content-section">
    <h2>Your Trading Plan Template</h2>
    <p>Copy this template. Fill it in. Print it. Tape it next to your monitor. Follow it without exception.</p>

    <div class="card">
        <h4>1. MARKET & INSTRUMENT</h4>
        <p>I trade: <strong>MES (Micro E-mini S&P 500)</strong></p>
        <p>I trade during: <strong>9:30 AM - 11:30 AM Eastern (US morning session only)</strong></p>
        <p>I do NOT trade: <strong>FOMC days, CPI/NFP release days (until 3+ months profitable)</strong></p>
    </div>

    <div class="card">
        <h4>2. SETUP</h4>
        <p>I trade ONE setup: <strong>[VWAP Pullback / S/R Bounce / Opening Range Breakout]</strong></p>
        <p>Entry checklist: All 7 items on the Trade Checklist (Module 9) must be checked YES.</p>
    </div>

    <div class="card">
        <h4>3. RISK RULES</h4>
        <p>Max risk per trade: <strong>2% of account = $___</strong></p>
        <p>Max daily loss: <strong>6% of account = $___</strong> OR <strong>3 consecutive losses</strong> (whichever first)</p>
        <p>Max contracts: <strong>___ MES contracts</strong> (calculated from position sizing formula)</p>
        <p>Minimum R:R ratio: <strong>1.5:1</strong></p>
        <p>Every trade has a stop-loss placed AT entry. No exceptions.</p>
    </div>

    <div class="card">
        <h4>4. TRADE MANAGEMENT</h4>
        <p>Once in a trade:</p>
        <ul>
            <li>I do NOT move my stop-loss further away. Ever.</li>
            <li>I may trail my stop to break-even after price moves 1× my risk in my favor.</li>
            <li>I take partial profits (half position) at 1:1 R:R and let the rest run to full target.</li>
            <li>If price stalls for 15+ minutes without progress, I close at market.</li>
        </ul>
    </div>

    <div class="card">
        <h4>5. PRE-MARKET ROUTINE (30 min before open)</h4>
        <ol>
            <li>Check overnight price action: Where did ES trade relative to yesterday's close?</li>
            <li>Mark key levels: Previous day high/low, overnight high/low, major S/R, VWAP.</li>
            <li>Check economic calendar (TradingView, ForexFactory, or Investing.com): Any high-impact news events today? If FOMC/CPI/NFP day, do NOT trade.</li>
            <li>Set alerts at key levels.</li>
            <li>Mental preparation: "I will follow my plan. I will take what the market gives me."</li>
        </ol>
    </div>

    <div class="card">
        <h4>6. POST-MARKET ROUTINE (After session)</h4>
        <ol>
            <li>Log every trade in the journal (Module 15) — win, loss, or breakeven.</li>
            <li>Screenshot each trade setup.</li>
            <li>Answer: Did I follow my plan? If not, why?</li>
            <li>Review: What did I learn today?</li>
            <li>Grade the day: A (followed plan), B (minor deviation), F (broke rules).</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h2>Filled-Out Example: Meet Alex</h2>
    <p>Here's what a completed trading plan looks like for a real beginner. Use this as a reference when filling out your own.</p>

    <div class="card">
        <h4>ALEX'S TRADING PLAN</h4>
        <p><strong>Account size:</strong> $2,500 (funded via Tradovate)</p>
        <p><strong>Instrument:</strong> MES (Micro E-mini S&P 500)</p>
        <p><strong>Trading hours:</strong> 9:30 AM - 11:30 AM Eastern only. No afternoon trading.</p>
        <p><strong>No-trade days:</strong> FOMC days, CPI day, NFP Friday, any day I slept less than 6 hours.</p>
    </div>

    <div class="card">
        <h4>ALEX'S RISK RULES</h4>
        <p><strong>Max risk per trade:</strong> 2% × $2,500 = <strong>$50</strong></p>
        <p><strong>Max daily loss:</strong> 6% × $2,500 = <strong>$150</strong> (or 3 consecutive losses — whichever comes first)</p>
        <p><strong>Max contracts:</strong> 2 MES (calculated: $50 risk ÷ (20 ticks × $1.25) = 2 contracts)</p>
        <p><strong>Minimum R:R:</strong> 1.5:1 — I will NOT take any trade where the target is less than 1.5× my risk</p>
        <p><strong>Stop-loss:</strong> Placed before or at entry. I NEVER move it further from entry. I MAY move it to break-even after 1:1 in my favor.</p>
    </div>

    <div class="card">
        <h4>ALEX'S SETUP</h4>
        <p><strong>Primary setup:</strong> VWAP Pullback (trend continuation)</p>
        <p><strong>Entry rules:</strong></p>
        <ol>
            <li>15-min chart confirms trend (9 EMA above 21 EMA for longs)</li>
            <li>5-min price pulls back to VWAP or 9/21 EMA zone</li>
            <li>Confirmation candle forms (hammer, engulfing, or strong body with volume)</li>
            <li>RSI is above 50 for longs, below 50 for shorts</li>
            <li>All 7 checklist items checked YES</li>
        </ol>
        <p><strong>Trade management:</strong> Scale out half at 1:1 R:R, move stop to break-even, let remainder run to 2:1 or next S/R level.</p>
        <p><strong>Max trades per day:</strong> 3</p>
    </div>

    <div class="card">
        <h4>ALEX'S DAILY ROUTINE</h4>
        <p><strong>8:45 AM:</strong> Open TradingView. Check economic calendar. Mark overnight high/low, PDH/PDL, major S/R levels.</p>
        <p><strong>9:15 AM:</strong> Note pre-market direction. Set VWAP. Determine bias (bullish, bearish, or neutral).</p>
        <p><strong>9:30-9:40 AM:</strong> Watch the open. Do NOT trade first 10 minutes.</p>
        <p><strong>9:40-11:30 AM:</strong> Execute plan. Maximum 3 trades.</p>
        <p><strong>11:30 AM:</strong> Close platform. Log trades in journal. Screenshot each trade. Grade the day (A/B/F).</p>
    </div>
</div>

<div class="content-section">
    <h2>When to Update Your Trading Plan</h2>
    <p>Your plan isn't set in stone forever. Update it at these milestones:</p>
    <ul>
        <li><strong>After 50 trades:</strong> You now have enough data. Review your stats. Is your win rate where it needs to be? Is your average R:R meeting your minimum? Adjust specific entry rules if the data says to — but never abandon the core risk rules.</li>
        <li><strong>After a rule violation pattern:</strong> If you notice you've broken the same rule 3+ times (e.g., "I keep moving my stop" or "I keep trading during lunch"), add a specific countermeasure. Alex added: "If I move my stop once, I'm done for the day."</li>
        <li><strong>After an account milestone:</strong> When your account grows (or shrinks), recalculate your dollar amounts. $2,500 → $3,000 means your 2% risk goes from $50 to $60. Update the plan.</li>
        <li><strong>After adding a new setup:</strong> Only add a second setup after 60+ trades with your first. Document its rules with the same detail as your primary setup.</li>
    </ul>
    <p><strong>What you should NEVER change:</strong> The 2% rule, the daily loss limit, and the requirement for a stop-loss on every trade. These are non-negotiable regardless of experience level.</p>
</div>

<div class="info-box warning">
    <div class="box-title">The Most Important Metric</div>
    <p>Your most important metric is NOT your P&L. It's your <strong>plan adherence rate.</strong> If you follow your plan on 95% of trades, you will become profitable. If you follow your plan on 60% of trades, you will lose money — even if the plan itself is good. <strong>Discipline IS the edge.</strong></p>
</div>

<button class="module-complete-btn" onclick="completeModule('module11')">Mark Module 11 Complete ✓</button>
<div class="btn-group">
    <button class="btn btn-secondary" onclick="navigateTo('module10')">← Module 10</button>
    <button class="btn btn-primary" onclick="navigateTo('module12')">Module 12: Psychology →</button>
</div>
`,

// ============================================================
// MODULE 12: TRADING PSYCHOLOGY
// ============================================================
module12: `
<div class="module-header">
    <span class="phase-tag phase3">Phase 3: Strategy</span>
    <h1>Trading Psychology</h1>
    <p class="subtitle">The market is not your enemy. Your brain is. Here's how to beat it.</p>
</div>

<div class="content-section">
    <h2>The Two Emotions That Destroy Traders</h2>

    <h3>1. Fear</h3>
    <p>Manifests as:</p>
    <ul>
        <li><strong>Not taking valid setups</strong> because your last trade lost. The market has no memory of your last trade.</li>
        <li><strong>Closing winners too early</strong> — taking $20 when your plan says the target is $60, because you're afraid of giving back the gain.</li>
        <li><strong>Moving your stop-loss closer</strong> to "reduce risk" — which actually increases your probability of being stopped out by noise.</li>
    </ul>

    <h3>2. Greed</h3>
    <p>Manifests as:</p>
    <ul>
        <li><strong>Overtrading</strong> — taking 15 trades when only 2 met your criteria, because you "need" to hit a daily target.</li>
        <li><strong>Increasing position size after a win</strong> — you feel confident, so you double your contracts. One loss wipes 4 wins.</li>
        <li><strong>Moving your target further away</strong> or removing your target because "this one is going to run."</li>
        <li><strong>Not taking the stop</strong> — "it'll come back" is the most expensive sentence in trading.</li>
    </ul>
</div>

<div class="info-box fact">
    <div class="box-title">Loss Aversion (Proven Science)</div>
    <p>Kahneman and Tversky's Prospect Theory (Nobel Prize, 2002) proved that humans feel the pain of losing approximately <strong>2.5× more intensely</strong> than the pleasure of an equivalent gain. This means a $50 loss hurts you emotionally as much as a $125 gain feels good. This asymmetry causes traders to hold losers too long (hoping for recovery) and cut winners too short (locking in the pleasure). Your trading plan exists to override this hardwired bias.</p>
</div>

<div class="content-section">
    <h2>Revenge Trading</h2>
    <p>After a loss (especially a loss where you broke your rules), your brain wants to "get it back" immediately. This is revenge trading and it is the single fastest way to blow up an account.</p>
    <p><strong>The sequence:</strong> Loss → Anger → Increase size → Take impulsive trade → Bigger loss → More anger → Repeat until account is destroyed.</p>
    <p><strong>The fix:</strong> Your daily loss limit (6% rule). When you hit it, you are DONE for the day. No exceptions. The money will be there tomorrow.</p>
</div>

<div class="content-section">
    <h2>Proven Mental Frameworks</h2>

    <h3>Think in Probabilities, Not Certainties</h3>
    <p>No trade is certain. Every setup has a probability of working. If your setup has a 55% win rate with 2:1 R:R, you will be very profitable over 100 trades — but any single trade can lose. Accepting this BEFORE you enter eliminates the emotional shock of a loss.</p>

    <div class="formula-block">
        Expected Value = (Win Rate × Avg Win) - (Loss Rate × Avg Loss)<br><br>
        55% win rate, $100 avg win, $50 avg loss:<br>
        EV = (0.55 × $100) - (0.45 × $50) = $55 - $22.50 = +$32.50 per trade<br><br>
        At 2-3 trades/day × 20 trading days = 40-60 trades/month:<br>
        50 trades × $32.50 = $1,625/month expected profit
    </div>
    <h3>Losing Streak Probability (The Math You Need to Accept)</h3>
    <p>Even a profitable strategy will produce losing streaks. This isn't bad luck — it's basic probability. Here's what to expect with a 55% win rate:</p>
    <table class="data-table">
        <thead>
            <tr><th>Losing Streak Length</th><th>Probability Per 50 Trades</th><th>Approximate Frequency</th></tr>
        </thead>
        <tbody>
            <tr><td>3 losses in a row</td><td>~82%</td><td>Almost guaranteed every month</td></tr>
            <tr><td>4 losses in a row</td><td>~53%</td><td>About every other month</td></tr>
            <tr><td>5 losses in a row</td><td>~28%</td><td>About once per quarter</td></tr>
            <tr><td>6 losses in a row</td><td>~13%</td><td>1-2 times per year</td></tr>
            <tr><td>7 losses in a row</td><td>~6%</td><td>Possible within a year</td></tr>
        </tbody>
    </table>
    <div class="formula-block">
        Probability of N consecutive losses = (1 - Win Rate)^N<br>
        5 losses at 55% WR = (0.45)^5 = 1.85% per sequence<br>
        But over 50 trades, there are ~46 possible starting points for a 5-loss sequence.<br>
        The compound probability is much higher: ~28%.
    </div>
    <p><strong>The takeaway:</strong> A 5-loss streak with a 55% win rate is NOT a broken strategy. It's statistics. If you panic and abandon your method after 4 losses, you will never stay with anything long enough to be profitable. This is why the daily loss limit exists — it stops you from emotional damage, not from a broken strategy. <strong>Trust the math. 50+ trades is the minimum sample size to evaluate a strategy.</strong></p>

    <h3>Process Over Outcome</h3>
    <p>A trade that followed your plan and lost is a GOOD trade. A trade that broke your rules and won is a BAD trade. Judge yourself on process, not P&L. Over time, good process produces good outcomes.</p>

    <h3>The 3-Strike Rule</h3>
    <p>3 consecutive losses → you're done for the day. Not because the strategy is broken, but because after 3 losses your emotional state is compromised and you WILL make worse decisions.</p>
</div>

<div class="content-section">
    <h2>Tilt Detection: 8 Warning Signs You're About to Blow Up</h2>
    <p>"Tilt" comes from poker — it means you've lost emotional control and are making irrational decisions. In trading, tilt destroys accounts. Here are the warning signs. If you catch yourself doing ANY of these, stop trading immediately.</p>
    <table class="data-table">
        <thead>
            <tr><th>#</th><th>Warning Sign</th><th>What It Looks Like</th></tr>
        </thead>
        <tbody>
            <tr><td>1</td><td><strong>Increasing position size after a loss</strong></td><td>"I'll trade 3 contracts instead of 1 to make it back faster." This is the fastest path to account destruction.</td></tr>
            <tr><td>2</td><td><strong>Skipping or widening your stop-loss</strong></td><td>"I'll give it more room" or "I'll just watch it." Translation: you can't accept the loss.</td></tr>
            <tr><td>3</td><td><strong>Trading outside your hours</strong></td><td>Your plan says 9:30-11:30 but it's 1:15 PM and you're entering trades in the chop session.</td></tr>
            <tr><td>4</td><td><strong>Checking P&L obsessively</strong></td><td>Looking at your daily P&L every 30 seconds. This means you're focused on money, not process.</td></tr>
            <tr><td>5</td><td><strong>Taking setups that "sort of" qualify</strong></td><td>"Well, it's ALMOST a VWAP pullback..." If you have to convince yourself, it's not a valid setup.</td></tr>
            <tr><td>6</td><td><strong>Feeling physical symptoms</strong></td><td>Clenched jaw, tight chest, sweaty palms, rapid heartbeat. Your body knows before your mind admits it.</td></tr>
            <tr><td>7</td><td><strong>Arguing with the market</strong></td><td>"This SHOULD be going up!" or "This doesn't make sense!" The market is never wrong. You are.</td></tr>
            <tr><td>8</td><td><strong>Wanting to "get even"</strong></td><td>You're not looking for a setup — you're looking for any trade that might recover today's losses. This is revenge trading.</td></tr>
        </tbody>
    </table>
    <p><strong>If you catch even ONE of these signs:</strong> Close your platform. Stand up. Walk away. The market will be there tomorrow. Your capital might not be if you keep going.</p>
</div>

<div class="content-section">
    <h2>Your Body Affects Your Trading: Lifestyle Factors</h2>
    <p>Trading is a high-performance cognitive activity — like being a surgeon or air traffic controller. Your brain needs to be sharp. These aren't optional "wellness tips" — they directly impact your P&L.</p>
    <ul>
        <li><strong>Sleep: 7-8 hours minimum.</strong> Studies show that after 17 hours without sleep, cognitive performance equals a blood alcohol level of 0.05%. After 24 hours, it equals 0.10% — legally drunk. You would never trade drunk. Don't trade sleep-deprived. If you slept less than 6 hours, skip the session.</li>
        <li><strong>Hydration:</strong> Even mild dehydration (1-2%) impairs concentration, working memory, and mood. Drink water before your session. Keep a glass at your desk. Avoid excessive caffeine — it increases anxiety, which is the last thing you need while trading.</li>
        <li><strong>Exercise:</strong> 20-30 minutes of exercise before trading (even a brisk walk) reduces cortisol (stress hormone) and increases blood flow to the prefrontal cortex (your decision-making center). Many professional traders exercise first thing in the morning.</li>
        <li><strong>Screen breaks:</strong> Decision fatigue is real. After 90-120 minutes of focused screen time, your decision quality measurably declines. This is why the 9:30-11:30 AM window works perfectly — 2 hours of focused trading, then you're done. Trying to trade 6+ hours will produce progressively worse decisions.</li>
        <li><strong>No trading after major life stress:</strong> Had a fight with your spouse? Kid is sick? Got a parking ticket that ruined your mood? Skip the session. Your emotional baseline is already compromised.</li>
    </ul>
</div>

<div class="content-section">
    <h2>The 4-7-8 Breathing Exercise</h2>
    <p>This is a technique developed by Dr. Andrew Weil, based on pranayama yoga breathing. It activates your parasympathetic nervous system (the "calm down" system) and suppresses your sympathetic nervous system (the "fight or flight" system). Do this:</p>
    <ol class="step-list">
        <li><strong>Before every trading session</strong> — to enter a calm, focused state.</li>
        <li><strong>After every loss</strong> — to reset before your next decision.</li>
        <li><strong>Whenever you feel any tilt warning sign</strong> — to interrupt the emotional spiral.</li>
    </ol>
    <div class="formula-block">
        THE 4-7-8 TECHNIQUE:<br><br>
        1. Breathe IN through your nose for 4 seconds<br>
        2. HOLD your breath for 7 seconds<br>
        3. Breathe OUT slowly through your mouth for 8 seconds<br><br>
        Repeat 3-4 times. Total time: ~75 seconds.<br><br>
        This is not meditation woo-woo. It's physiology.<br>
        The extended exhale triggers your vagus nerve, lowering heart rate<br>
        and cortisol. Your prefrontal cortex comes back online.<br>
        You make better decisions. Period.
    </div>
</div>

<div class="info-box tip">
    <div class="box-title">Daily Practice</div>
    <p>Before your trading session, do the 4-7-8 breathing exercise (3 rounds) then say out loud: "I will follow my plan today. I accept that losses are part of the process. I will not revenge trade. I will stop after 3 losses." This is not motivational nonsense — it's priming your prefrontal cortex to override emotional reactions.</p>
</div>

<button class="module-complete-btn" onclick="completeModule('module12')">Mark Module 12 Complete ✓</button>
<div class="btn-group">
    <button class="btn btn-secondary" onclick="navigateTo('module11')">← Module 11</button>
    <button class="btn btn-primary" onclick="navigateTo('module13')">Module 13: Sim Trading Guide →</button>
</div>
`,

// ============================================================
// MODULE 13: SIM TRADING GUIDE
// ============================================================
module13: `
<div class="module-header">
    <span class="phase-tag phase4">Phase 4: Go Live</span>
    <h1>Sim Trading Guide</h1>
    <p class="subtitle">Your 30-90 day bootcamp on a simulator. Treat it like real money or it's worthless.</p>
</div>

<div class="content-section">
    <h2>Why Sim Trading Matters</h2>
    <p>Simulator trading lets you practice everything you've learned with zero financial risk. But here's the catch: <strong>if you don't treat sim money like real money, you'll develop bad habits that will destroy you when you go live.</strong></p>
    <ul>
        <li>Set your sim account to match the real account size you'll trade with (e.g., $2,500).</li>
        <li>Follow your risk rules exactly (2% per trade, 6% daily limit, stop-losses).</li>
        <li>Journal every sim trade exactly as you would real trades.</li>
        <li>Stop trading for the day when you hit your daily loss limit — even though you could just reset.</li>
    </ul>
</div>

<div class="content-section">
    <h2>Your 90-Day Sim Plan</h2>

    <h3>Backtesting & Replay Mode (Before You Sim)</h3>
    <p>Before you even open a sim account, use TradingView's <strong>Replay Mode</strong> to practice on historical data. This lets you fast-forward through weeks of market data in hours. This is the most important practice tool you have — it compresses months of experience into days.</p>

    <h3>10-Step TradingView Replay Mode Walkthrough</h3>
    <ol class="step-list">
        <li><strong>Open TradingView</strong> (tradingview.com) and pull up a chart. Type <strong>MES1!</strong> in the symbol search bar. Set the timeframe to <strong>5 minutes</strong>.</li>
        <li><strong>Add your indicators:</strong> Click "Indicators" in the top menu. Add VWAP, EMA (set to 9), EMA (set to 21), Volume, and RSI (set to 14). Your chart should now match the setup from Module 4.</li>
        <li><strong>Click the "Replay" button</strong> in the top toolbar (it looks like a rewind icon, or says "Replay"). TradingView will prompt you to select a starting date.</li>
        <li><strong>Pick a date at least 3 months in the past.</strong> Choose a regular trading day (not a holiday). Click on the date on the chart to set your starting point. The chart will "rewind" — everything to the right of your date disappears.</li>
        <li><strong>Click the "Play" button</strong> to start advancing candles. You can also use the forward arrow button to advance one candle at a time (recommended for learning). Adjust the playback speed if using auto-play.</li>
        <li><strong>At each candle, PAUSE and ask yourself:</strong> "Is there a setup here? What's the trend? Where are my levels?" Write your analysis in a notebook or spreadsheet BEFORE advancing.</li>
        <li><strong>If you spot a setup, write down:</strong> Entry price, stop-loss price, target price, and the reason (which setup type). Be specific.</li>
        <li><strong>Advance the chart</strong> and see what happens. Did the trade hit your target or your stop? Record the result.</li>
        <li><strong>Track your results in a spreadsheet:</strong> Date, Setup Type, Entry, Stop, Target, Result (Win/Loss), R:R Achieved, Notes. This is your replay journal.</li>
        <li><strong>Complete at least 20 full sessions</strong> (each session = 9:30-11:30 AM of historical data). This gives you 100+ trade decisions minimum before you ever open a sim account.</li>
    </ol>

    <h3>What to Record During Each Replay Trade</h3>
    <table class="data-table">
        <thead>
            <tr><th>Field</th><th>Example</th><th>Why It Matters</th></tr>
        </thead>
        <tbody>
            <tr><td>Date & Time</td><td>2025-11-15, 10:05 AM</td><td>Reveals which times of day produce your best setups</td></tr>
            <tr><td>Setup Type</td><td>VWAP Pullback</td><td>Shows which setup works best for you</td></tr>
            <tr><td>Direction</td><td>Long</td><td>Reveals any long/short bias you need to correct</td></tr>
            <tr><td>Entry</td><td>5,201.50</td><td>Were you entering at the right level?</td></tr>
            <tr><td>Stop Loss</td><td>5,198.00</td><td>Were your stops too tight (hit by noise) or too wide (excess risk)?</td></tr>
            <tr><td>Target</td><td>5,208.00</td><td>Were your targets realistic?</td></tr>
            <tr><td>Result</td><td>Win: +$32.50</td><td>Track your would-have-been P&L</td></tr>
            <tr><td>Reasoning</td><td>"15-min uptrend, pullback to VWAP with hammer candle and volume"</td><td>Forces you to articulate WHY — not just "it looked good"</td></tr>
        </tbody>
    </table>

    <div class="info-box warning">
        <div class="box-title">Minimum 20 Hours of Replay Before Sim Trading</div>
        <p>This isn't arbitrary. You need to see enough market conditions — trending days, ranging days, news-driven days, slow days — to develop real pattern recognition. 20 hours of replay across different dates and market conditions gives your brain the raw data it needs. Shortcutting this step is like a pilot skipping flight simulator hours — it feels like you're saving time, but you're just moving risk to live trading.</p>
    </div>

    <div class="info-box tip">
        <div class="box-title">Backtesting Your Edge</div>
        <p>After 50+ replay trades, calculate your stats: win rate, average R:R, plan adherence. If you can't be profitable on historical data where you can pause and think carefully, you definitely won't be profitable in real-time. <strong>Replay profitability is the minimum bar before sim trading.</strong> If your strategy doesn't work in replay, it won't work live — refine it before moving forward.</p>
    </div>

    <h3>Phase A: Weeks 1-2 (Observation)</h3>
    <ul>
        <li>Do NOT trade. Just watch the market during US open (9:30-11:30 AM ET).</li>
        <li>Practice identifying candlestick patterns in real-time.</li>
        <li>Mark support and resistance levels BEFORE the session. See how price reacts to them.</li>
        <li>Place VWAP on your chart. Notice how price interacts with it.</li>
        <li>Get comfortable with your platform. Practice placing and canceling orders on the sim.</li>
        <li>Use TradingView's <strong>Replay Mode</strong> to practice on historical charts — pause, analyze, predict, then fast-forward to check your predictions.</li>
    </ul>

    <h3>Phase B: Weeks 3-6 (Single Setup)</h3>
    <ul>
        <li>Pick ONE setup (VWAP Pullback recommended).</li>
        <li>Trade 1 MES contract only. Never increase size during this phase.</li>
        <li>Maximum 3 trades per day.</li>
        <li>Journal every trade (Module 15): entry, exit, reason, screenshot, result, emotions.</li>
        <li>Goal: Execute 40+ trades following your checklist exactly.</li>
        <li>Metrics to track: Win rate, average win, average loss, R:R, plan adherence rate.</li>
    </ul>

    <h3>Phase C: Weeks 7-12 (Refinement)</h3>
    <ul>
        <li>Review your journal. What patterns show up in your losing trades? Fix those.</li>
        <li>If profitable, consider increasing to 2 MES contracts (still within risk rules).</li>
        <li>Start adding a second setup if your first is consistently working.</li>
        <li>Goal: Be net profitable for 4 consecutive weeks with 85%+ plan adherence.</li>
    </ul>
</div>

<div class="content-section">
    <h2>Minimum Benchmarks to Pass Sim</h2>
    <p>Do NOT go live until you meet ALL of these for at least 20 consecutive trading days:</p>
    <table class="data-table">
        <thead>
            <tr><th>Metric</th><th>Minimum Benchmark</th></tr>
        </thead>
        <tbody>
            <tr><td>Net P&L</td><td>Positive (any amount — proves your edge works)</td></tr>
            <tr><td>Win Rate</td><td>45%+ (with at least 2:1 R:R) OR 55%+ (with 1.5:1 R:R)</td></tr>
            <tr><td>Plan Adherence</td><td>85%+ (followed all rules on 85% of trades)</td></tr>
            <tr><td>Max Consecutive Losses Handled</td><td>Survived a 4+ loss streak without breaking rules</td></tr>
            <tr><td>Daily Loss Limit</td><td>Never exceeded in the 20-day period</td></tr>
            <tr><td>Average R:R Achieved</td><td>1.5:1 or better</td></tr>
        </tbody>
    </table>
</div>

<div class="info-box warning">
    <div class="box-title">The Sim-to-Live Gap</div>
    <p>Going live will feel different. Real money triggers real emotions. Expect your performance to drop 20-30% initially. This is normal. Start live with the MINIMUM position size (1 MES). You can always scale up. You can't un-lose money.</p>
</div>

<button class="module-complete-btn" onclick="completeModule('module13')">Mark Module 13 Complete ✓</button>
<div class="btn-group">
    <button class="btn btn-secondary" onclick="navigateTo('module12')">← Module 12</button>
    <button class="btn btn-primary" onclick="navigateTo('module14')">Module 14: Going Live Checklist →</button>
</div>
`,

// ============================================================
// MODULE 14: GOING LIVE CHECKLIST
// ============================================================
module14: `
<div class="module-header">
    <span class="phase-tag phase4">Phase 4: Go Live</span>
    <h1>Going Live Checklist</h1>
    <p class="subtitle">The exact steps to transition from simulator to real money.</p>
</div>

<div class="content-section">
    <h2>Pre-Live Checklist</h2>
    <p>Check every single box honestly before you put real money at risk.</p>

    <div class="card">
        <h4>Knowledge (Modules 1-8)</h4>
        <ul>
            <li>□ I can explain what a futures contract is and how margin works</li>
            <li>□ I know the tick value and point value of MES and ES</li>
            <li>□ I can read candlestick charts and identify basic patterns</li>
            <li>□ I can identify support and resistance levels on a chart</li>
            <li>□ I understand VWAP, EMA, RSI, and ATR and how to use them</li>
            <li>□ I understand volume confirmation</li>
            <li>□ I know when my contract expires and how to roll to the next quarter</li>
            <li>□ I know about the daily 5-6 PM ET halt and overnight margin rules</li>
        </ul>
    </div>

    <div class="card">
        <h4>Strategy (Modules 9-12)</h4>
        <ul>
            <li>□ I have ONE primary setup I can identify in real-time</li>
            <li>□ I can calculate position size given my account and risk per trade</li>
            <li>□ I have a written trading plan printed and visible</li>
            <li>□ I know my daily loss limit and will respect it</li>
            <li>□ I understand the psychology traps and have countermeasures</li>
        </ul>
    </div>

    <div class="card">
        <h4>Performance (Module 13)</h4>
        <ul>
            <li>□ I was net profitable on sim for 20+ consecutive trading days</li>
            <li>□ My plan adherence rate was 85%+ on sim</li>
            <li>□ My average R:R was 1.5:1 or better on sim</li>
            <li>□ I handled a 4+ loss streak without revenge trading</li>
        </ul>
    </div>

    <div class="card">
        <h4>Logistics</h4>
        <ul>
            <li>□ I have funded my brokerage account with money I can afford to lose entirely</li>
            <li>□ My platform is configured with the same settings as my sim</li>
            <li>□ I have a stable internet connection (wired Ethernet recommended over WiFi)</li>
            <li>□ I have my broker's phone number saved to call in case of platform failure</li>
            <li>□ I have set up my trade journal (Module 15)</li>
        </ul>
    </div>
</div>

<div class="info-box warning">
    <div class="box-title">The Warning Every Blown-Up Trader Wishes They'd Heard</div>
    <p>Every trader who blew up their account has said the same thing: <strong>"I knew I wasn't ready, but I went live anyway."</strong></p>
    <p>They skipped sim. They traded without a plan. They risked too much on the first day. They thought they were the exception. They weren't.</p>
    <p>If you cannot honestly check every single box above, you are not ready. Going live before you're ready isn't brave or ambitious — it's handing money to traders who ARE prepared. The checklist isn't a suggestion. It's the minimum. Respect it or pay the price.</p>
</div>

<div class="content-section">
    <h2>Your First Week Live</h2>
    <ol class="step-list">
        <li><strong>Day 1-5:</strong> Trade 1 MES contract ONLY. Maximum 2 trades per day. Your goal is NOT to make money — it's to execute your process with real money at stake.</li>
        <li><strong>End of Week 1 Review:</strong> Did you follow your plan? Did your emotions affect your decisions? If plan adherence was below 80%, go back to sim for another week.</li>
        <li><strong>Weeks 2-4:</strong> Continue with 1 MES. Increase to maximum 3 trades per day. Focus on consistency over profit.</li>
        <li><strong>After 4 Profitable Weeks:</strong> Consider increasing to 2 MES contracts. Recalculate your position sizing with the new account balance.</li>
    </ol>
</div>

<div class="content-section">
    <h2>Scaling Up (The Ladder)</h2>
    <table class="data-table">
        <thead>
            <tr><th>Level</th><th>Account Size</th><th>Max Contracts (MES)</th><th>Criteria to Advance</th></tr>
        </thead>
        <tbody>
            <tr><td>1 (Start)</td><td>$2,500</td><td>1 MES</td><td>4 consecutive profitable weeks</td></tr>
            <tr><td>2</td><td>$3,500+</td><td>2 MES</td><td>4 consecutive profitable weeks at this level</td></tr>
            <tr><td>3</td><td>$5,000+</td><td>3-4 MES</td><td>4 consecutive profitable weeks</td></tr>
            <tr><td>4</td><td>$10,000+</td><td>1 ES (or 8-10 MES)</td><td>3 months profitable at level 3</td></tr>
            <tr><td>5</td><td>$25,000+</td><td>2+ ES</td><td>6+ months consistent profitability</td></tr>
        </tbody>
    </table>
    <p>If at any level you have 2 losing weeks in a row, drop back ONE level. Ego has no place here.</p>
</div>

<div class="content-section">
    <h2>Emergency: Platform Crash Mid-Trade</h2>
    <p>This WILL happen eventually. Your internet will drop, your platform will freeze, or your broker's servers will go down while you have an open position. Have this plan ready BEFORE it happens:</p>
    <ol class="step-list">
        <li><strong>Don't panic.</strong> Your stop-loss order is on the exchange's server, not your computer. If you placed a stop-loss, it will execute even if your platform disconnects. This is why you ALWAYS have a stop-loss.</li>
        <li><strong>Call your broker immediately.</strong> Every broker has a phone trading desk. Call them and have them close your position or confirm your stop is active. <strong>Save this number in your phone NOW:</strong> NinjaTrader: 1-312-262-1289 | Tradovate: 1-312-329-7580 | AMP: 1-312-893-6400 | Interactive Brokers: 1-877-442-2757.</li>
        <li><strong>Switch to mobile.</strong> Most brokers have mobile apps. Open the app on your phone and manage your position from there. This is your backup.</li>
        <li><strong>If all else fails and you have NO stop-loss</strong> (which should never happen): wait for your connection to restore. The market will still be there. Check your account immediately when you reconnect.</li>
    </ol>
    <div class="info-box warning">
        <div class="box-title">Prevention Is Better Than Recovery</div>
        <p><strong>Use a wired Ethernet connection</strong> — not WiFi. Have your phone as a mobile hotspot backup. Consider a UPS (battery backup) for your computer if you lose power frequently. And above all: <strong>never trade without a stop-loss order on the exchange.</strong> "Mental stops" mean nothing when your screen goes black.</p>
    </div>
</div>

<div class="content-section">
    <h2>Tax Reporting for Futures (US Traders)</h2>
    <p>Futures have significant tax advantages, but you must report them correctly. Here's what you need to know:</p>

    <h3>IRS Form 6781 — Gains and Losses from Section 1256 Contracts</h3>
    <p>All regulated futures contracts are "Section 1256 contracts." At tax time, your broker will send you a <strong>1099-B</strong> showing your total realized gains/losses. You report these on <strong>Form 6781</strong>.</p>

    <h3>The 60/40 Rule</h3>
    <p>Regardless of how long you held the position (even if it was 5 seconds), futures profits are taxed:</p>
    <ul>
        <li><strong>60%</strong> at the long-term capital gains rate (0%, 15%, or 20% depending on income)</li>
        <li><strong>40%</strong> at your ordinary income tax rate</li>
    </ul>
    <div class="formula-block">
        TAX SAVINGS EXAMPLE:<br>
        Annual futures profit: $50,000<br>
        Income tax bracket: 32%<br><br>
        Futures tax: (60% × $50K × 15%) + (40% × $50K × 32%)<br>
        = $4,500 + $6,400 = $10,900 effective tax<br><br>
        If taxed as ordinary income (like stocks held &lt;1 year):<br>
        $50,000 × 32% = $16,000<br><br>
        Annual tax savings from 60/40: $5,100
    </div>

    <h3>Mark-to-Market (Important!)</h3>
    <p>Section 1256 contracts are "marked to market" at year-end. This means even unrealized gains (open positions on Dec 31) are treated as if you closed them. If you have an open position showing $2,000 profit on Dec 31, you owe taxes on that $2,000 even though you haven't closed the trade.</p>

    <h3>Loss Carryback</h3>
    <p>Section 1256 losses can be <strong>carried back 3 years</strong> to offset prior Section 1256 gains (and get a refund). This is unique to futures — stock losses can only be carried forward. If you have a bad year, you can amend prior returns to recoup taxes paid on previous years' futures gains.</p>

    <h3>Record Keeping</h3>
    <ul>
        <li>Your broker provides the 1099-B with aggregate gain/loss. You don't need to report individual trades.</li>
        <li>Keep your trade journal and broker statements for 7 years (IRS standard).</li>
        <li><strong>Consult a tax professional.</strong> If you're making meaningful money from trading, the cost of a CPA who understands trader taxation ($200-$500) pays for itself many times over.</li>
    </ul>
</div>

<div class="info-box tip">
    <div class="box-title">Realistic Expectations</div>
    <p>Month 1 live: Break even or small loss. You're paying tuition to learn real-money emotions.<br>
    Months 2-3: Small, inconsistent profits. You're finding your rhythm.<br>
    Months 4-6: Consistent small profits if you're following your plan.<br>
    Months 6-12: Growing profits as you increase size responsibly.<br><br>
    Anyone promising you $500/day in your first month is lying.</p>
</div>

<button class="module-complete-btn" onclick="completeModule('module14')">Mark Module 14 Complete ✓</button>
<div class="btn-group">
    <button class="btn btn-secondary" onclick="navigateTo('module13')">← Module 13</button>
    <button class="btn btn-primary" onclick="navigateTo('module15')">Module 15: Trade Journal →</button>
</div>
`,

// ============================================================
// MODULE 15: TRADE JOURNAL
// ============================================================
module15: `
<div class="module-header">
    <span class="phase-tag phase4">Phase 4: Go Live</span>
    <h1>Trade Journal</h1>
    <p class="subtitle">Every professional trader journals. Your journal is your personal feedback loop.</p>
</div>

<div class="content-section">
    <h2>Why Journal?</h2>
    <p>Without a journal, you're relying on memory — which is biased. You'll remember the big wins and forget the losses. You'll think your strategy works better (or worse) than it actually does. A journal gives you <strong>objective data</strong> about your trading.</p>
</div>

<div class="content-section">
    <h2>Log a Trade</h2>
    <div class="journal-form">
        <div class="calc-row">
            <div class="calc-field">
                <label>Date</label>
                <input type="date" id="journalDate">
            </div>
            <div class="calc-field">
                <label>Symbol</label>
                <select id="journalSymbol">
                    <option value="MES">MES</option>
                    <option value="ES">ES</option>
                    <option value="MNQ">MNQ</option>
                    <option value="NQ">NQ</option>
                </select>
            </div>
            <div class="calc-field">
                <label>Direction</label>
                <select id="journalDirection">
                    <option value="Long">Long</option>
                    <option value="Short">Short</option>
                </select>
            </div>
        </div>
        <div class="calc-row">
            <div class="calc-field">
                <label>Contracts</label>
                <input type="number" id="journalContracts" value="1" min="1">
            </div>
            <div class="calc-field">
                <label>Entry Price</label>
                <input type="number" id="journalEntry" step="0.25" placeholder="5200.00">
            </div>
            <div class="calc-field">
                <label>Exit Price</label>
                <input type="number" id="journalExit" step="0.25" placeholder="5205.00">
            </div>
        </div>
        <div class="calc-row">
            <div class="calc-field">
                <label>Entry Time</label>
                <input type="time" id="journalEntryTime">
            </div>
            <div class="calc-field">
                <label>Exit Time</label>
                <input type="time" id="journalExitTime">
            </div>
            <div class="calc-field">
                <label>Stop Loss Price</label>
                <input type="number" id="journalStop" step="0.25" placeholder="5196.00">
            </div>
        </div>
        <div class="calc-row">
            <div class="calc-field">
                <label>Setup Used</label>
                <select id="journalSetup">
                    <option value="VWAP Pullback">VWAP Pullback</option>
                    <option value="S/R Bounce">S/R Bounce</option>
                    <option value="Opening Range Breakout">Opening Range Breakout</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div class="calc-field">
                <label>Followed Plan?</label>
                <select id="journalPlan">
                    <option value="Yes">Yes - Followed all rules</option>
                    <option value="Partial">Partial - Minor deviation</option>
                    <option value="No">No - Broke rules</option>
                </select>
            </div>
            <div class="calc-field">
                <label>Emotional State</label>
                <select id="journalEmotion">
                    <option value="Calm">Calm / Focused</option>
                    <option value="Confident">Confident</option>
                    <option value="Anxious">Anxious / Hesitant</option>
                    <option value="Frustrated">Frustrated</option>
                    <option value="Revenge">Revenge Trading</option>
                    <option value="FOMO">FOMO / Chasing</option>
                </select>
            </div>
        </div>
        <div class="calc-field" style="margin-bottom: 12px;">
            <label>Notes (what happened, lessons learned)</label>
            <textarea id="journalNotes" placeholder="Describe the setup, your thought process, and what you learned..."></textarea>
        </div>
        <button class="btn btn-primary" onclick="saveJournalEntry()">Save Trade Entry</button>
    </div>
</div>

<div class="content-section">
    <h2>Your Trade History</h2>
    <div style="margin-bottom: 16px;"><button class="btn btn-secondary" onclick="exportJournal()">Export Journal to CSV</button></div>
    <div id="journalStats" class="calc-results-grid" style="margin-bottom: 24px;"></div>
    <div id="journalEntries">
        <p style="color: var(--text-muted); text-align: center;">No trades logged yet. Start journaling above.</p>
    </div>
</div>

<div class="content-section">
    <h2>Your First Journal Entry: A Complete Walkthrough</h2>
    <p>Let's walk through filling out every field using a real example trade, so you understand why each field matters.</p>

    <div class="card">
        <h4>The Trade: Alex buys 1 MES at 10:05 AM</h4>
        <p>Alex spotted a VWAP pullback setup. The 15-min chart showed an uptrend. Price pulled back to VWAP at 5,201.00 and a hammer candle formed with volume. Alex bought 1 MES at 5,201.50 with a stop at 5,198.00. Target was 5,208.00 (previous high). At 10:22 AM, price hit 5,206.50 and stalled. Alex closed at 5,206.00. Stop-loss at 5,198.00 was never hit.</p>
    </div>

    <table class="data-table">
        <thead>
            <tr><th>Field</th><th>Alex's Entry</th><th>Why This Field Matters</th></tr>
        </thead>
        <tbody>
            <tr><td><strong>Date</strong></td><td>2026-02-20</td><td>Lets you spot day-of-week patterns. Maybe you lose money on Mondays (many traders do — weekend gaps create uncertain openings).</td></tr>
            <tr><td><strong>Symbol</strong></td><td>MES</td><td>Track which contracts you trade. Stick to one until you're consistent.</td></tr>
            <tr><td><strong>Direction</strong></td><td>Long</td><td>After 50 trades, check: are you better at longs or shorts? Most beginners have a directional bias.</td></tr>
            <tr><td><strong>Contracts</strong></td><td>1</td><td>Never increase size impulsively. Size changes should only happen at plan review milestones.</td></tr>
            <tr><td><strong>Entry Price</strong></td><td>5,201.50</td><td>Compare to your planned entry. Did you enter where you planned, or did you chase?</td></tr>
            <tr><td><strong>Exit Price</strong></td><td>5,206.00</td><td>Compare to your planned target. Did you exit early out of fear, or hold per plan?</td></tr>
            <tr><td><strong>Entry Time</strong></td><td>10:05 AM</td><td>Reveals your best trading window. Maybe your best trades all happen 9:45-10:30 AM.</td></tr>
            <tr><td><strong>Exit Time</strong></td><td>10:22 AM</td><td>17-minute trade. Helps you understand how long your setups typically take to play out.</td></tr>
            <tr><td><strong>Stop Loss</strong></td><td>5,198.00</td><td>Auto-calculates R:R. This trade: risked 14 ticks ($17.50), made 18 ticks ($22.50). R:R = 1.29:1.</td></tr>
            <tr><td><strong>Setup</strong></td><td>VWAP Pullback</td><td>After 50 trades, compare win rates by setup. Is VWAP Pullback working better than S/R Bounce for you?</td></tr>
            <tr><td><strong>Followed Plan?</strong></td><td>Partial</td><td>Alex exited before the target (5,208 plan vs. 5,206 actual). Minor deviation — fear of giving back profits.</td></tr>
            <tr><td><strong>Emotional State</strong></td><td>Calm</td><td>Correlate emotions with results. If your "Calm" trades win 60% but "Anxious" trades win 30%, you know what to fix.</td></tr>
            <tr><td><strong>Notes</strong></td><td>"Good entry, held through a 3-tick pullback without panicking. Exited 2 pts early because momentum slowed. Next time: hold to target or use trailing stop."</td><td>The most valuable field. Your future self learns from your present self's observations.</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h2>After 50 Trades: How to Analyze Your Data</h2>
    <p>Your journal is useless if you never look back at it. After 50 trades, export to CSV and answer these questions:</p>
    <ul>
        <li><strong>Sort by Setup Type:</strong> Which setup has the highest win rate? Which has the best average R:R? Focus on what works for YOU — not what works in theory.</li>
        <li><strong>Sort by Emotional State:</strong> What's your win rate when Calm vs. Anxious vs. FOMO? If Calm trades win 58% and FOMO trades win 25%, the data is telling you to never trade when you feel FOMO. This alone can transform your results.</li>
        <li><strong>Sort by Time:</strong> Are your first trades of the day better than your third? Most traders get worse as the session goes on (decision fatigue). If your 3rd trade of the day consistently loses, your new rule is: max 2 trades per day.</li>
        <li><strong>Sort by Day of Week:</strong> Many traders have a "bad day" pattern. If Fridays are consistently negative (common — lower volume, traders closing positions before the weekend), stop trading Fridays.</li>
        <li><strong>Check your "Followed Plan" field:</strong> Calculate your win rate for "Yes" trades vs. "No" trades. Almost universally, plan-following trades outperform rule-breaking trades. This data makes discipline feel logical instead of forced.</li>
    </ul>
</div>

<div class="content-section">
    <h2>Screenshot Your Trades</h2>
    <p>A journal without screenshots is half a journal. Every trade should have a chart screenshot showing your entry, exit, stop-loss, and the price action context. Here's how to organize them:</p>

    <h3>Screenshot System</h3>
    <ol>
        <li><strong>Create a folder structure:</strong> Trading Screenshots → 2026 → 02-February → Each day (2026-02-23). One folder per trading day.</li>
        <li><strong>Name files consistently:</strong> Use the format <em>DATE_SYMBOL_DIRECTION_RESULT.png</em> — e.g., <em>2026-02-23_MES_Long_Win.png</em> or <em>2026-02-23_MES_Short_Loss.png</em>.</li>
        <li><strong>Capture BEFORE entry:</strong> Screenshot your chart BEFORE entering the trade, showing the setup, your planned entry, stop, and target levels drawn on the chart. This proves you had a plan, not a reaction.</li>
        <li><strong>Capture AFTER exit:</strong> Screenshot the final result. Mark your actual entry and exit on the chart.</li>
        <li><strong>In TradingView:</strong> Use the camera icon (top-right of chart) to save a snapshot. Or use Alt+S (Windows) to open the snapshot tool directly.</li>
    </ol>

    <h3>Weekly Screenshot Review</h3>
    <p>Every Sunday, open your screenshots from the week side-by-side. Look for patterns in your winners vs. losers. You will notice things in screenshots that you missed in the moment — a resistance level you didn't see, a volume divergence you ignored, a candle pattern that warned you. <strong>This visual review is the fastest way to improve.</strong> Professional traders spend more time reviewing trades than placing them.</p>
</div>

<div class="content-section">
    <h2>Weekly Review Questions</h2>
    <p>Every Sunday, answer these questions honestly:</p>
    <ol>
        <li>What was my win rate this week? (Goal: 45%+ with 2:1 R:R or 55%+ with 1.5:1 R:R)</li>
        <li>What was my average R:R this week? (Goal: 1.5:1+)</li>
        <li>What percentage of trades followed my plan? (Goal: 85%+)</li>
        <li>Did I hit my daily loss limit any day? If so, why?</li>
        <li>What was my biggest mistake? How will I prevent it next week?</li>
        <li>What trade am I most proud of? Why?</li>
        <li>Am I ready to increase size, hold steady, or need to decrease?</li>
    </ol>
</div>

<button class="module-complete-btn" onclick="completeModule('module15')">Mark Module 15 Complete ✓</button>
<div class="btn-group">
    <button class="btn btn-secondary" onclick="navigateTo('module14')">← Module 14</button>
    <button class="btn btn-primary" onclick="navigateTo('quiz')">Take the Knowledge Quiz →</button>
</div>
`,

// ============================================================
// GLOSSARY
// ============================================================
glossary: `
<div class="module-header">
    <h1>Futures Trading Glossary</h1>
    <p class="subtitle">Every term you need to know. Search or scroll.</p>
</div>

<input type="text" class="glossary-search" id="glossarySearch" placeholder="Search terms..." oninput="filterGlossary()">

<div id="glossaryList">
    <dl>
        <div class="glossary-item" data-term="ask"><dt>Ask (Offer)</dt><dd>The lowest price a seller is willing to accept. You buy at the ask price.</dd></div>
        <div class="glossary-item" data-term="atr"><dt>ATR (Average True Range)</dt><dd>An indicator measuring average price range over a period (typically 14). Used to gauge volatility and set stop-loss distances.</dd></div>
        <div class="glossary-item" data-term="bid"><dt>Bid</dt><dd>The highest price a buyer is willing to pay. You sell at the bid price.</dd></div>
        <div class="glossary-item" data-term="breakout"><dt>Breakout</dt><dd>When price moves beyond a defined support or resistance level. Valid breakouts are confirmed by above-average volume.</dd></div>
        <div class="glossary-item" data-term="circuit breaker"><dt>Circuit Breaker</dt><dd>CME-mandated trading halts triggered when the S&P 500 drops 7% (Level 1), 13% (Level 2), or 20% (Level 3) from the prior close. Overnight limits are ±5%.</dd></div>
        <div class="glossary-item" data-term="candlestick"><dt>Candlestick</dt><dd>A chart element showing open, high, low, and close prices for a specific time period. Green/white = close above open (bullish). Red = close below open (bearish).</dd></div>
        <div class="glossary-item" data-term="cme"><dt>CME Group</dt><dd>Chicago Mercantile Exchange. The world's largest futures exchange. Operates CME, CBOT, NYMEX, and COMEX. All ES/MES/NQ/MNQ contracts trade on CME.</dd></div>
        <div class="glossary-item" data-term="commission"><dt>Commission</dt><dd>Fee charged by your broker per contract per side (entry and exit). Ranges from $0.09 to $2.50+ per side depending on broker and contract.</dd></div>
        <div class="glossary-item" data-term="contract"><dt>Contract</dt><dd>The standardized unit you trade. 1 ES contract = $50/point. 1 MES contract = $5/point. You buy or sell contracts, not shares.</dd></div>
        <div class="glossary-item" data-term="cpi"><dt>CPI (Consumer Price Index)</dt><dd>A monthly report measuring the average change in prices paid by consumers for goods and services (food, gas, rent, clothing). The primary inflation gauge. Released at 8:30 AM ET. Higher-than-expected CPI is typically bearish for stocks (implies rate hikes). One of the highest-impact market events.</dd></div>
        <div class="glossary-item" data-term="dom"><dt>DOM (Depth of Market)</dt><dd>A display showing the order book — pending buy and sell orders at each price level. Also called Level 2 or the ladder.</dd></div>
        <div class="glossary-item" data-term="drawdown"><dt>Drawdown</dt><dd>The peak-to-trough decline in your account balance. A $10,000 account that drops to $8,500 has a $1,500 (15%) drawdown.</dd></div>
        <div class="glossary-item" data-term="ema"><dt>EMA (Exponential Moving Average)</dt><dd>A moving average giving more weight to recent prices. Common settings: 9 EMA (fast) and 21 EMA (slow).</dd></div>
        <div class="glossary-item" data-term="es"><dt>ES (E-mini S&P 500)</dt><dd>The most liquid futures contract in the world. Tracks the S&P 500 index. $50 per point, $12.50 per tick. Minimum tick = 0.25 points.</dd></div>
        <div class="glossary-item" data-term="exchange fees"><dt>Exchange Fees</dt><dd>Fees charged by the CME exchange on top of your broker's commission. For MES: ~$0.62/side. For ES: ~$1.28/side. Plus NFA regulatory fees (~$0.02/side). These are unavoidable.</dd></div>
        <div class="glossary-item" data-term="fill"><dt>Fill</dt><dd>When your order is executed (matched with a counterparty). A "filled" order means you are now in a position.</dd></div>
        <div class="glossary-item" data-term="funded account"><dt>Funded Account</dt><dd>A trading account provided by a prop firm after passing their evaluation. You trade the firm's capital and keep 80-100% of profits. Your risk is limited to the monthly evaluation fee.</dd></div>
        <div class="glossary-item" data-term="fomc"><dt>FOMC</dt><dd>Federal Open Market Committee. Sets US interest rates 8 times per year. FOMC announcements cause the largest intraday moves in ES.</dd></div>
        <div class="glossary-item" data-term="gap"><dt>Gap</dt><dd>When the opening price is significantly different from the previous close. Caused by overnight news or economic data.</dd></div>
        <div class="glossary-item" data-term="gdp"><dt>GDP (Gross Domestic Product)</dt><dd>The total value of all goods and services produced by a country over a period. The broadest measure of economic health. Released quarterly at 8:30 AM ET (advance, preliminary, final estimates). Positive GDP = growing economy, typically bullish. Negative GDP = contraction, typically bearish.</dd></div>
        <div class="glossary-item" data-term="leverage"><dt>Leverage</dt><dd>Using margin to control a position larger than your account balance. 20:1 leverage means $1 of margin controls $20 of asset value. Amplifies both gains and losses.</dd></div>
        <div class="glossary-item" data-term="limit order"><dt>Limit Order</dt><dd>An order to buy or sell at a specific price or better. Guarantees price but not execution.</dd></div>
        <div class="glossary-item" data-term="liquidity"><dt>Liquidity</dt><dd>How easily you can buy or sell without affecting the price. High liquidity = tight spreads, fast fills. ES and MES are extremely liquid during US hours.</dd></div>
        <div class="glossary-item" data-term="long"><dt>Long</dt><dd>A position that profits when price goes UP. You enter by buying, exit by selling.</dd></div>
        <div class="glossary-item" data-term="margin"><dt>Margin</dt><dd>A performance bond (security deposit) required to hold a futures position. Day trade margin is lower than overnight margin.</dd></div>
        <div class="glossary-item" data-term="margin call"><dt>Margin Call</dt><dd>A demand from your broker to deposit more funds because your account equity has fallen below the maintenance margin requirement.</dd></div>
        <div class="glossary-item" data-term="market order"><dt>Market Order</dt><dd>An order to buy or sell immediately at the best available price. Guarantees execution but not price.</dd></div>
        <div class="glossary-item" data-term="mes"><dt>MES (Micro E-mini S&P 500)</dt><dd>A 1/10th size version of the ES contract. $5 per point, $1.25 per tick. Ideal for beginners and small accounts.</dd></div>
        <div class="glossary-item" data-term="nfp"><dt>NFP (Non-Farm Payrolls)</dt><dd>A monthly US labor report showing how many jobs were added or lost (excluding farms). Released the first Friday of each month at 8:30 AM ET. One of the highest-impact reports. Strong NFP = strong economy but potential rate hikes. Can move ES 30-80+ points in seconds.</dd></div>
        <div class="glossary-item" data-term="nq"><dt>NQ (E-mini Nasdaq 100)</dt><dd>Futures contract tracking the Nasdaq 100 index. $20 per point, $5 per tick. More volatile than ES.</dd></div>
        <div class="glossary-item" data-term="pce"><dt>PCE (Personal Consumption Expenditures)</dt><dd>A monthly inflation measure tracking changes in the prices of goods and services purchased by consumers. The Federal Reserve's PREFERRED inflation indicator (they watch PCE more than CPI). Released at 8:30 AM ET. A surprise PCE reading can move markets as much as CPI.</dd></div>
        <div class="glossary-item" data-term="point"><dt>Point</dt><dd>One full unit of price movement. On ES, 1 point = 4 ticks = $50. On MES, 1 point = 4 ticks = $5.</dd></div>
        <div class="glossary-item" data-term="ppi"><dt>PPI (Producer Price Index)</dt><dd>A monthly report measuring the average change in selling prices received by domestic producers. A leading indicator for CPI — if producers pay more, consumers eventually pay more too. Released at 8:30 AM ET. Market reaction similar to CPI but typically slightly less volatile.</dd></div>
        <div class="glossary-item" data-term="rollover"><dt>Rollover</dt><dd>The process of closing a position in an expiring contract and opening the same position in the next quarterly contract. ES/MES/NQ/MNQ contracts expire quarterly (March, June, September, December). Roll 5-8 days before expiration when volume shifts to the new contract.</dd></div>
        <div class="glossary-item" data-term="position sizing"><dt>Position Sizing</dt><dd>Calculating how many contracts to trade based on your account size, risk per trade, and stop-loss distance.</dd></div>
        <div class="glossary-item" data-term="prop firm"><dt>Prop Firm (Proprietary Trading Firm)</dt><dd>A company that provides trading capital to traders who pass an evaluation. Trader keeps 80-90% of profits. Examples: Apex, Topstep.</dd></div>
        <div class="glossary-item" data-term="resistance"><dt>Resistance</dt><dd>A price level where selling pressure historically prevents further upward movement. Acts as a ceiling.</dd></div>
        <div class="glossary-item" data-term="rsi"><dt>RSI (Relative Strength Index)</dt><dd>Momentum oscillator measuring speed of price changes. Ranges 0-100. Above 70 = overbought, below 30 = oversold. Best used for divergence signals.</dd></div>
        <div class="glossary-item" data-term="rr"><dt>R:R (Risk-to-Reward Ratio)</dt><dd>The ratio of potential loss to potential gain on a trade. A 2:1 R:R means you stand to gain $2 for every $1 risked.</dd></div>
        <div class="glossary-item" data-term="scalp"><dt>Scalp</dt><dd>A very short-term trade lasting seconds to minutes, targeting small price moves (2-10 ticks). Requires fast execution and tight spreads.</dd></div>
        <div class="glossary-item" data-term="short"><dt>Short</dt><dd>A position that profits when price goes DOWN. You enter by selling, exit by buying.</dd></div>
        <div class="glossary-item" data-term="slippage"><dt>Slippage</dt><dd>The difference between your expected fill price and your actual fill price. Common during fast markets and news events.</dd></div>
        <div class="glossary-item" data-term="spread"><dt>Spread</dt><dd>The difference between the bid and ask price. On ES during US hours, the spread is typically 1 tick (0.25 points = $12.50).</dd></div>
        <div class="glossary-item" data-term="stop loss"><dt>Stop Loss</dt><dd>An order that automatically closes your position at a predetermined loss level. Non-negotiable for every trade.</dd></div>
        <div class="glossary-item" data-term="support"><dt>Support</dt><dd>A price level where buying pressure historically prevents further downward movement. Acts as a floor.</dd></div>
        <div class="glossary-item" data-term="tick"><dt>Tick</dt><dd>The minimum price increment. On ES/MES/NQ/MNQ, one tick = 0.25 points.</dd></div>
        <div class="glossary-item" data-term="tradingview"><dt>TradingView</dt><dd>A web-based charting platform (tradingview.com) used by millions of traders. Offers free and paid plans, broker integration (Tradovate, AMP), alerts, replay mode, and an economic calendar. The standard tool for chart analysis.</dd></div>
        <div class="glossary-item" data-term="trend"><dt>Trend</dt><dd>Sustained directional price movement. Uptrend = higher highs + higher lows. Downtrend = lower highs + lower lows.</dd></div>
        <div class="glossary-item" data-term="volume"><dt>Volume</dt><dd>The number of contracts traded in a given period. High volume = strong conviction. Low volume = weak, unreliable moves.</dd></div>
        <div class="glossary-item" data-term="vwap"><dt>VWAP (Volume Weighted Average Price)</dt><dd>The average price weighted by volume for the day. Institutional benchmark. Price above VWAP = bullish bias, below = bearish.</dd></div>
        <div class="glossary-item" data-term="absorption"><dt>Absorption</dt><dd>When large resting limit orders absorb aggressive market orders without price moving. Visible as high volume candles with small bodies. Often precedes a reversal as the absorbing side overwhelms the aggressors.</dd></div>
        <div class="glossary-item" data-term="backtest"><dt>Backtest</dt><dd>Testing a trading strategy on historical data to evaluate its performance. TradingView's Replay Mode allows manual backtesting. Minimum 50 trades needed for statistical significance.</dd></div>
        <div class="glossary-item" data-term="correlation"><dt>Correlation</dt><dd>The degree to which two instruments move together. ES and NQ have ~85-90% daily correlation. When correlated instruments diverge, it often signals a potential reversal.</dd></div>
        <div class="glossary-item" data-term="delta"><dt>Delta</dt><dd>The difference between aggressive buy volume and aggressive sell volume at a price or candle. Positive delta = more buying aggression. Negative delta = more selling aggression. Delta divergence from price is a reversal signal.</dd></div>
        <div class="glossary-item" data-term="fibonacci"><dt>Fibonacci Retracement</dt><dd>A tool that plots horizontal lines at key Fibonacci ratios (38.2%, 50%, 61.8%) between a swing high and low. Used to identify potential pullback levels. Most powerful when confluent with other S/R.</dd></div>
        <div class="glossary-item" data-term="form 6781"><dt>Form 6781</dt><dd>IRS tax form for reporting gains/losses on Section 1256 contracts (futures). Enables the 60/40 tax treatment and 3-year loss carryback.</dd></div>
        <div class="glossary-item" data-term="initial balance"><dt>Initial Balance (IB)</dt><dd>The price range established during the first 30-60 minutes of the trading session. IB High and IB Low become key S/R levels. Narrow IB = trending day likely. Wide IB = range day likely.</dd></div>
        <div class="glossary-item" data-term="market profile"><dt>Market Profile</dt><dd>A charting technique that organizes price data by time spent at each level (TPO — Time Price Opportunity). Shows the "bell curve" of where price spent the most time, revealing value areas and balance/imbalance.</dd></div>
        <div class="glossary-item" data-term="poc"><dt>POC (Point of Control)</dt><dd>The price level with the highest traded volume on a Volume Profile. Acts as a magnet — price tends to return to POC. Strong S/R level for the next session.</dd></div>
        <div class="glossary-item" data-term="section 1256"><dt>Section 1256</dt><dd>IRS tax code section governing futures contracts. Provides 60/40 tax treatment (60% long-term, 40% short-term rates), mark-to-market at year-end, and 3-year loss carryback. Significant advantage over stock trading taxes.</dd></div>
        <div class="glossary-item" data-term="sweep"><dt>Sweep</dt><dd>When price quickly moves through multiple price levels, taking out resting orders at each level. Sweeps of highs/lows often indicate stop-hunting before a reversal.</dd></div>
        <div class="glossary-item" data-term="tilt"><dt>Tilt</dt><dd>A state of emotional frustration causing irrational trading decisions. Named after the poker term. Symptoms: increasing position size, ignoring stops, revenge trading, abandoning your plan. Fix: walk away immediately.</dd></div>
        <div class="glossary-item" data-term="time and sales"><dt>Time and Sales (Tape)</dt><dd>A real-time feed showing every trade that occurs — price, size, and whether it was at the bid (sell) or ask (buy). The "tape" is the raw data of market activity. Reading it is called "tape reading."</dd></div>
        <div class="glossary-item" data-term="value area"><dt>Value Area</dt><dd>The price range containing approximately 70% of a session's traded volume. Defined by VAH (Value Area High) and VAL (Value Area Low). If price opens inside the prior session's VA, expect range-bound action.</dd></div>
        <div class="glossary-item" data-term="volume profile"><dt>Volume Profile</dt><dd>A charting tool that displays volume traded at each price level as horizontal bars. Unlike traditional volume (which shows volume per time period), Volume Profile shows WHERE the trading happened. Reveals HVN (high volume nodes) and LVN (low volume nodes).</dd></div>
    </dl>
</div>
`,

// ============================================================
// CALCULATOR
// ============================================================
calculator: `
<div class="module-header">
    <h1>Position Size Calculator</h1>
    <p class="subtitle">Calculate exactly how many contracts to trade based on your risk rules.</p>
</div>

<div class="calc-container">
    <h3 style="margin-bottom: 20px; color: var(--accent);">Position Sizer</h3>
    <div class="calc-row">
        <div class="calc-field">
            <label>Account Balance ($)</label>
            <input type="number" id="calcAccount" value="2500" oninput="calculatePosition()">
        </div>
        <div class="calc-field">
            <label>Risk Per Trade (%)</label>
            <input type="number" id="calcRiskPct" value="2" step="0.5" oninput="calculatePosition()">
        </div>
    </div>
    <div class="calc-row">
        <div class="calc-field">
            <label>Contract</label>
            <select id="calcContract" onchange="calculatePosition()">
                <option value="MES" data-tick="1.25">MES ($1.25/tick)</option>
                <option value="ES" data-tick="12.50">ES ($12.50/tick)</option>
                <option value="MNQ" data-tick="0.50">MNQ ($0.50/tick)</option>
                <option value="NQ" data-tick="5.00">NQ ($5.00/tick)</option>
            </select>
        </div>
        <div class="calc-field">
            <label>Stop Loss Distance (ticks)</label>
            <input type="number" id="calcStopTicks" value="20" oninput="calculatePosition()">
        </div>
    </div>
    <div class="calc-results-grid" id="calcResults">
    </div>
</div>

<div class="calc-container" style="margin-top: 24px;">
    <h3 style="margin-bottom: 20px; color: var(--accent);">Profit/Loss Calculator</h3>
    <div class="calc-row">
        <div class="calc-field">
            <label>Contract</label>
            <select id="plContract" onchange="calculatePL()">
                <option value="MES" data-tick="1.25">MES ($1.25/tick)</option>
                <option value="ES" data-tick="12.50">ES ($12.50/tick)</option>
                <option value="MNQ" data-tick="0.50">MNQ ($0.50/tick)</option>
                <option value="NQ" data-tick="5.00">NQ ($5.00/tick)</option>
            </select>
        </div>
        <div class="calc-field">
            <label>Number of Contracts</label>
            <input type="number" id="plContracts" value="1" min="1" oninput="calculatePL()">
        </div>
    </div>
    <div class="calc-row">
        <div class="calc-field">
            <label>Entry Price</label>
            <input type="number" id="plEntry" value="5200" step="0.25" oninput="calculatePL()">
        </div>
        <div class="calc-field">
            <label>Exit Price</label>
            <input type="number" id="plExit" value="5205" step="0.25" oninput="calculatePL()">
        </div>
    </div>
    <div class="calc-row">
        <div class="calc-field">
            <label>Direction</label>
            <select id="plDirection" onchange="calculatePL()">
                <option value="long">Long (Buy)</option>
                <option value="short">Short (Sell)</option>
            </select>
        </div>
        <div class="calc-field">
            <label>Commission per Side ($)</label>
            <input type="number" id="plCommission" value="0.62" step="0.01" oninput="calculatePL()">
        </div>
    </div>
    <div class="calc-results-grid" id="plResults">
    </div>
</div>
`,

// ============================================================
// QUIZ
// ============================================================
quiz: `
<div class="module-header">
    <h1>Knowledge Quiz</h1>
    <p class="subtitle">Test what you've learned. 25 questions covering all modules. 80%+ means you're ready for sim.</p>
</div>

<div id="quizContainer"></div>
<div id="quizScore" style="display:none;"></div>
<div class="btn-group" style="justify-content: center; margin-top: 20px;">
    <button class="btn btn-primary" id="quizSubmitBtn" onclick="scoreQuiz()">Submit Answers</button>
    <button class="btn btn-secondary" id="quizResetBtn" onclick="resetQuiz()" style="display:none;">Retake Quiz</button>
</div>
`
};
