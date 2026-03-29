import { useEffect, useRef, useState } from 'react';
import { BookOpen, Clock, ArrowRight, Calendar, Tag, X, Share2, Link2, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import ReactMarkdown from 'react-markdown';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

// Full article content embedded for static site
const blogPosts: Record<string, BlogPost[]> = {
  en: [
    {
      id: '1',
      slug: 'understanding-var-risk',
      title: 'Understanding VaR: A Complete Guide for Retail Investors',
      excerpt: 'Learn how Value at Risk (VaR) works and why it\'s the essential metric every investor should know to measure portfolio risk.',
      content: `# Understanding VaR: A Complete Guide for Retail Investors

Value at Risk (VaR) is one of the most widely used risk metrics in finance, yet many retail investors have never heard of it. In this comprehensive guide, we'll explain what VaR is, how it works, and why it should be part of your investment toolkit.

## What is Value at Risk?

Value at Risk (VaR) is a statistical measure that quantifies the level of financial risk within a firm, portfolio, or position over a specific time frame. In simple terms, VaR answers the question: *"What is my worst-case loss at a given confidence level?"*

For example, if your portfolio has a daily VaR of $1,000 at 95% confidence, this means that on 95 out of 100 days, your losses won't exceed $1,000. There's a 5% chance that losses could be greater.

## Why VaR Matters for Retail Investors

Most retail investors focus on returns while ignoring risk. This is a dangerous mistake. Here's why VaR should matter to you:

1. **Know Your Exposure**: VaR gives you a concrete number for potential losses
2. **Compare Investments**: You can compare the risk-adjusted returns of different portfolios
3. **Set Stop-Losses**: VaR helps you set rational stop-loss levels
4. **Position Sizing**: Use VaR to determine appropriate position sizes

## How VaR is Calculated

There are three main methods for calculating VaR:

### 1. Historical Simulation
This method uses historical data to simulate potential losses. It's simple and makes no assumptions about return distributions.

### 2. Parametric (Variance-Covariance) Method
This approach assumes returns follow a normal distribution. While computationally efficient, it may underestimate tail risk.

### 3. Monte Carlo Simulation
This method generates thousands of random scenarios to model potential outcomes. It's the most flexible but computationally intensive.

## Limitations of VaR

While VaR is useful, it's not perfect:

- **VaR doesn't tell you how bad losses can get in extreme cases** (beyond the confidence level)
- It assumes historical patterns will continue
- Different calculation methods can yield different results
- It may not capture all types of risk (liquidity risk, operational risk)

This is why professionals also use **CVaR** (Conditional Value at Risk), which measures the expected loss in the worst-case scenarios.

## Getting Started with VaR

If you're serious about risk management:

1. Calculate the VaR of your current portfolio
2. Use it to set appropriate stop-losses
3. Monitor how your VaR changes as markets move
4. Consider CVaR for a complete picture of tail risk

Remember: VaR is a tool, not a guarantee. Markets can always surprise us, but measuring your risk is the first step toward managing it.

---

*Want a professional VaR analysis of your portfolio? Contact us for a free consultation.*`,
      date: '2026-03-08',
      readTime: '8 min read',
      tags: ['VaR', 'Risk Management', 'Education'],
      featured: true,
    },
    {
      id: '2',
      slug: 'portfolio-concentration-risk',
      title: 'The Hidden Danger of Portfolio Concentration',
      excerpt: 'Why putting too many eggs in one basket can destroy your wealth — and how to build a truly diversified portfolio.',
      content: `# The Hidden Danger of Portfolio Concentration

"Don't put all your eggs in one basket" is one of the oldest investment adages. Yet many investors unknowingly concentrate their portfolios in ways that expose them to significant risk. Let's explore why portfolio concentration is dangerous and how to achieve true diversification.

## What is Portfolio Concentration?

Portfolio concentration occurs when a significant portion of your investments is tied to a single asset, sector, or geography. Common forms include:

- **Single Stock Risk**: Holding more than 10% of your portfolio in one company
- **Sector Concentration**: Overweighting tech, finance, or other sectors
- **Geographic Bias**: Being overly exposed to one country or region
- **Employer Stock**: Owning significant shares of your employer's company

## The Concentration Trap

Many investors fall into concentration traps without realizing it:

### The Success Trap
When a stock performs well, investors often let it grow to become a larger portion of their portfolio. The very success that made them money now creates risk.

### The Familiarity Bias
Investors tend to overweight stocks they know well — often their employer's stock or companies in their industry. This creates hidden correlation risk.

### The Home Bias
Most investors overweight their home country. U.S. investors might hold 70%+ in U.S. stocks, despite the U.S. representing about 60% of global market cap.

## Why Concentration is Dangerous

### 1. Asymmetric Risk
A 50% loss requires a 100% gain just to break even. Concentrated positions can lead to catastrophic losses that are difficult to recover from.

### 2. Correlation Surprises
During market stress, correlations often increase. Assets that seemed diversified suddenly move together.

### 3. Liquidity Risk
Concentrated positions can be difficult to exit without moving the market, especially in smaller stocks.

## Measuring Concentration Risk

Professional risk managers use metrics like:

- **Herfindahl Index**: Measures portfolio concentration
- **VaR Contribution**: Shows which positions drive your risk
- **Stress Testing**: Models losses under various scenarios

## Building a Diversified Portfolio

### The 5% Rule
Consider limiting any single position to no more than 5% of your portfolio. This means a complete loss in any single stock can only damage your portfolio by 5%.

### True Diversification
True diversification means holding assets that respond differently to various economic scenarios:

- **Stocks**: For growth
- **Bonds**: For stability and income
- **Real Estate**: For inflation protection
- **Commodities**: For inflation hedging
- **International**: For geographic diversification

### Regular Rebalancing
Set a schedule to rebalance your portfolio back to target weights. This naturally forces you to "sell high and buy low."

## The Bottom Line

Diversification is the only free lunch in finance. By spreading your investments across truly different assets, you can reduce risk without necessarily sacrificing returns.

Remember: The goal isn't to eliminate risk — that's impossible. The goal is to understand and manage the risks you're taking.

---

*Is your portfolio properly diversified? Get a free risk analysis to find out.*`,
      date: '2026-03-05',
      readTime: '6 min read',
      tags: ['Diversification', 'Risk Analysis'],
    },
    {
      id: '3',
      slug: 'market-volatility-2026',
      title: 'Navigating Market Volatility in 2026',
      excerpt: 'Key strategies to protect your investments during uncertain times and how to turn volatility into opportunity.',
      content: `# Navigating Market Volatility in 2026

Market volatility has become the new normal. With ongoing geopolitical tensions, shifting monetary policies, and technological disruption, investors face a challenging environment. Here's how to not just survive, but thrive in volatile markets.

## Understanding Volatility

Volatility is simply the statistical measure of the dispersion of returns. High volatility means prices move dramatically — both up and down. While often associated with fear, volatility also creates opportunity.

### The VIX Index
The CBOE Volatility Index (VIX) measures expected market volatility. Often called the "fear index," it tends to spike during market stress. Understanding VIX levels helps contextualize market conditions:

- **VIX < 20**: Relatively calm markets
- **VIX 20-30**: Elevated uncertainty
- **VIX > 30**: High fear/stress

## Why Volatility Matters

### 1. Sequence Risk
The order of returns matters. A significant decline early in retirement or before a major purchase can have lasting impacts.

### 2. Emotional Decision Making
Volatility triggers emotional responses. Fear leads to selling at lows; greed leads to buying at highs.

### 3. Compounding Effects
Large losses require even larger gains to recover. A 30% loss requires a 43% gain just to break even.

## Strategies for Volatile Markets

### 1. Maintain Perspective
Remember that volatility is normal. Since 1950, the S&P 500 has experienced:
- An average intra-year decline of 14%
- Yet positive annual returns in about 75% of years

### 2. Diversify Across Asset Classes
Different assets respond differently to volatility:
- **Quality stocks**: Tend to be more resilient
- **Bonds**: Often rise when stocks fall
- **Gold**: Traditional safe haven
- **Cash**: Provides optionality and peace of mind

### 3. Use Dollar-Cost Averaging
Investing regular amounts at regular intervals removes the emotion from timing decisions and can lower average purchase prices during volatility.

### 4. Maintain a Cash Cushion
Having 6-12 months of expenses in cash reduces the need to sell investments during downturns.

### 5. Consider Volatility as Opportunity
Warren Buffett's advice to "be fearful when others are greedy, and greedy when others are fearful" applies here. Market downturns have historically been excellent buying opportunities for long-term investors.

## Risk Management Techniques

### Position Sizing
Reduce position sizes in more volatile assets. This allows you to stay invested without excessive anxiety.

### Stop-Losses
Set rational stop-losses based on your VaR calculations, not arbitrary percentages.

### Hedging
Consider protective strategies:
- Put options for downside protection
- Inverse ETFs for temporary hedging
- Increased allocation to defensive sectors

## The Psychology of Volatility

The hardest part of volatile markets is psychological. Consider these principles:

1. **Have a Plan**: Know what you'll do before volatility hits
2. **Stay Informed, Not Obsessed**: Check portfolios periodically, not constantly
3. **Focus on What You Can Control**: Costs, taxes, and asset allocation
4. **Think Long Term**: Short-term volatility is noise for long-term investors

## Looking Ahead in 2026

Current market conditions suggest continued volatility driven by:
- Central bank policy transitions
- Geopolitical developments
- AI and technology disruption
- Climate transition impacts

However, volatility doesn't mean negative returns. Some of the best performing years in market history followed periods of high volatility.

## Conclusion

Volatility is the price investors pay for returns. Rather than fearing it, successful investors:
- Understand their true risk tolerance
- Maintain diversified portfolios
- Stick to disciplined investment plans
- View volatility as opportunity

Remember: Markets reward patient capital. The investors who succeed aren't those who avoid volatility, but those who manage it effectively.

---

*Concerned about your portfolio's volatility? Get a free VaR analysis to understand your risk exposure.*`,
      date: '2026-03-01',
      readTime: '5 min read',
      tags: ['Market Analysis', 'Volatility', 'Strategy'],
    },
    {
      id: '4',
      slug: 'latest-gold-update',
      title: 'Gold After the Spike — A Simple 1-Week XAUUSD Plan',
      excerpt: 'A practical trading framework using DXY + pullbacks to navigate gold consolidation after the violent spike and dump.',
      content: `# Gold After the Spike — A Simple 1-Week XAUUSD Plan (Using DXY + Pullbacks + Optional ORB)

## Why gold feels confusing right now

Gold recently did what gold often does: it moved fast, shocked everyone, and then became messy.

In recent Gold Chart observation, price surged to a major high area (around **5419**), then sold off sharply. After a move like that, the market usually needs time to "digest." That digestion shows up as sideways, choppy action (a **range**).

**Situation in 1 line:**

- Big move happened (spike + dump) → now **range/consolidation** → don't trade the middle.

---

## The "3-key" framework (simple English)

### 1) DXY filter (US Dollar Index)

Gold often moves opposite to the US dollar.

- **DXY up (USD strong)** → gold often gets pressured
- **DXY down (USD weak)** → gold often gets support

So DXY is a **filter**, not a crystal ball:

- If DXY is rising strongly → be careful buying gold.
- If DXY is falling → gold longs have better odds.

### 2) Pullbacks only (never chase)

If you buy after a big green candle, you're usually late.  

The higher-probability entry is after price **pulls back** into:

- **support** (for a buy), or
- **resistance** (for a sell).

### 3) ORB (optional timing tool)

ORB = Opening Range Breakout (NY open range).  

It can help you time entries, but for **1-week trades**, it's optional.

---

## What DXY is saying now (based on your screenshot)

From your DXY chart:

- DXY has been **trending up** (USD strength)
- Recently it looks like it's **pausing near ~99** (consolidating), not clearly reversing yet

**Simple takeaway:**

- USD strength is still the "default"
- So "aggressive gold buying" is less attractive until DXY actually turns down

---

## The 1-week XAUUSD strategy (simple rules)

### Step 1 — Mark only 2 zones on gold

- **Support zone** = area where gold previously bounced strongly (range floor)
- **Resistance zone** = area where gold previously got rejected strongly (range ceiling)

**Rule:** If gold is in the **middle** between support and resistance → **do nothing**.

### Step 2 — Choose direction using DXY

- If **DXY is rising** → only look for **SELL** setups on gold rallies (at resistance)
- If **DXY is falling** → only look for **BUY** setups on gold pullbacks (at support)
- If **DXY is sideways** → trade smaller or wait

### Step 3 — Entry trigger (keep it simple)

**BUY trigger:**

1. Gold reaches **support**
2. You see **rejection** (long lower wick, strong bullish candle, or quick reclaim)
3. Enter on the **next small pullback** (not the first spike)

**SELL trigger:**

1. Gold reaches **resistance**
2. You see **rejection** (upper wick, strong bearish candle, failure to hold above)
3. Enter on the **next small pullback** (not the first drop)

### Step 4 — Stop loss and take profit (basic but effective)

**Stop loss:**

- BUY: below the **support swing low**
- SELL: above the **resistance swing high**

**Take profit:**

- Target 1: back to the **middle of the range** (reduce risk)
- Target 2: the **opposite edge** of the range

**Management rule:**

- If gold starts trending hard, don't cap it too early—**trail your stop behind structure** (gold often goes further than expected).

---

## What to expect next (so you don't overtrade)

For the coming week, the "good" situations are:

1. Gold drops to support + DXY weakens → **good BUY environment**
2. Gold rallies to resistance + DXY strengthens → **good SELL environment**
3. Breakout happens and **holds** (not just a wick) → trade the **retest**, not the breakout candle

Until one of these happens: **patience is the strategy**.

---

## Final summary (one sentence)

Gold is consolidating after a violent move, DXY is still strong, so the best plan is: **wait for gold to hit a range edge, use DXY as confirmation, and enter only on pullbacks with clear rejection—never in the middle and never by chasing.**`,
      date: '2026-03-08',
      readTime: '7 min read',
      tags: ['Gold', 'XAUUSD', 'Trading Strategy'],
    },
    {
      id: '5',
      slug: 'oil-crisis-portfolio-risk',
      title: 'A Week of Oil Crisis: The Real Risk Isn\'t Oil—It\'s Your Portfolio',
      excerpt: 'When oil price shocks push markets into high volatility, the critical question isn\'t where oil is heading—it\'s how much your portfolio could lose in the worst-case scenario.',
      content: `# A Week of Oil Crisis: The Real Risk Isn't Oil—It's Your Portfolio

This week, news around oil prices and geopolitical conflicts has been intensifying. Many investors' first instinct is to predict direction: Will oil keep rising? Should I chase the energy sector? But for investors, the far more important question is this: Once an oil price shock pushes markets into a high-volatility regime, how much could your portfolio lose in a worst-case scenario?

The reason is that oil shocks rarely stay confined to the energy market. As a critical cost input for the global economy, a rapid rise in oil prices typically triggers a chain reaction across three areas:

First, inflation expectations rise.  
Second, the interest-rate path may become "higher for longer."  
Third, risk premiums increase—investors demand higher returns to compensate for uncertainty.

The result: equity valuations come under pressure, credit spreads widen, risk appetite declines, and volatility surges. What's worse, under stress, correlations between assets often spike suddenly. You may think your portfolio is well diversified, but in a systemic shock, many assets can fall together. This is the classic characteristic of tail risk: usually invisible, but when it strikes, losses tend to amplify non-linearly. At the same time, liquidity dries up and execution costs rise, making stop-losses and rebalancing harder to complete.

Therefore, the key to investing isn't just "prediction"—it's "quantifying and managing the worst-case scenario." This is exactly why VaR (Value at Risk) exists. VaR is not a crystal ball; it doesn't tell you exactly how much you will lose. Instead, it uses a consistent, comparable methodology to answer a manageable question:

Over a given time horizon and confidence level, what is the approximate maximum loss your portfolio could face?

When volatility rises and correlations strengthen, VaR becomes more sensitive in reflecting that "risk levels are escalating," helping investors make decisions with numbers rather than emotions: Should risk exposure be reduced? Should liquidity buffers be increased? Is hedging or restructuring warranted?

But in practice, looking only at "total portfolio VaR" is often insufficient. Total VaR can tell you "how dangerous the whole portfolio is," but not "where the danger is coming from or what to tackle first." Truly actionable risk management requires breaking risk down into finer management units—and this is where client-level VaR analysis delivers value.

Client-level VaR can decompose risk down to the client, account, or strategy level, answering four of the most important management questions:

1) Which clients (or accounts) contribute the most risk?  
2) What are the main risk drivers (oil, interest rates, FX, credit, equity volatility)?  
3) Where is risk concentrated in terms of behavior and structure (leverage, concentrated positions, derivatives non-linearity, high turnover)?  
4) If markets become more volatile, which clients should be prioritized for action (de-risking, hedging, margin calls, tighter limits)?

When you can turn risk from "a single number" into a "traceable, rankable, layerable" list, VaR truly upgrades from a reporting metric to a management tool: faster identification of concentration risk, more precise allocation of capital and limits, more effective hedging and deleveraging strategies, and an easier way to explain to management "why we must act now."

Markets will always have surprises. In the end, the investors who survive and compound steadily over the long term are often not the best at guessing directions, but those who are clearest about what could happen to them in the worst-case scenario—and have the ability to quickly bring risk back within a controllable range. This week's oil market volatility is just another reminder: risk management is not a cost; it is the survivability of investing.`,
      date: '2026-03-29',
      readTime: '8 min read',
      tags: ['Oil', 'VaR', 'Portfolio Risk', 'Tail Risk'],
    },
  ],
  zh: [
    {
      id: '1',
      slug: 'understanding-var-risk',
      title: '了解 VaR：散戶投資者完整指南',
      excerpt: '學習風險價值（VaR）的運作原理，以及為什麼它是每位投資者都應該了解的衡量投資組合風險的關鍵指標。',
      content: `# 了解 VaR：散戶投資者完整指南

風險價值（VaR）是金融領域最廣泛使用的風險指標之一，但許多散戶投資者從未聽說過它。在本綜合指南中，我們將解釋什麼是 VaR、它是如何運作的，以及為什麼它應該成為您投資工具包的一部分。

## 什麼是風險價值？

風險價值（VaR）是一種統計指標，用於量化在特定時間範圍內公司、投資組合或倉位所面臨的財務風險水平。簡單來說，VaR 回答了這個問題：*「在給定置信水平下，我的最壞情況損失是多少？」*

例如，如果您的投資組合在 95% 置信水平下的每日 VaR 為 $1,000，這意味著在 100 天中有 95 天，您的損失不會超過 $1,000。有 5% 的機會損失可能更大。

## 為什麼 VaR 對散戶投資者很重要

大多數散戶投資者專注於回報而忽視風險。這是一個危險的錯誤。以下是 VaR 應該對您重要的原因：

1. **了解您的敞口**：VaR 為您提供潛在損失的具體數字
2. **比較投資**：您可以比較不同投資組合的風險調整後回報
3. **設置止損**：VaR 幫助您設置合理的止損水平
4. **倉位規模**：使用 VaR 來確定適當的倉位規模

## VaR 的計算方法

計算 VaR 主要有三種方法：

### 1. 歷史模擬法
此方法使用歷史數據來模擬潛在損失。它簡單且對回報分佈沒有任何假設。

### 2. 參數法（方差-協方差法）
此方法假設回報遵循常態分佈。雖然計算效率高，但可能低估尾部風險。

### 3. 蒙特卡洛模擬法
此方法生成數千個隨機情景來模擬潛在結果。它最靈活但計算密集。

## VaR 的局限性

雖然 VaR 很有用，但它並不完美：

- **VaR 無法告訴您在極端情況下損失會有多嚴重**（超出置信水平）
- 它假設歷史模式將繼續
- 不同的計算方法可能產生不同的結果
- 它可能無法捕捉所有類型的風險（流動性風險、操作風險）

這就是為什麼專業人士還使用 **CVaR**（條件風險價值），它衡量最壞情況情景下的預期損失。

## VaR 入門

如果您認真對待風險管理：

1. 計算您當前投資組合的 VaR
2. 使用它來設置適當的止損
3. 監控隨著市場變化您的 VaR 如何變化
4. 考慮 CVaR 以獲得尾部風險的完整圖景

記住：VaR 是一種工具，不是保證。市場總是會讓我們驚訝，但衡量您的風險是管理它的第一步。

---

*想要對您的投資組合進行專業的 VaR 分析？聯繫我們獲取免費諮詢。*`,
      date: '2026-03-08',
      readTime: '8 分鐘閱讀',
      tags: ['VaR', '風險管理', '教育'],
      featured: true,
    },
    {
      id: '2',
      slug: 'portfolio-concentration-risk',
      title: '投資組合集中風險的隱藏危機',
      excerpt: '為什麼把所有雞蛋放在一個籃子裡會摧毀您的財富 — 以及如何建立真正多元化的投資組合。',
      content: `# 投資組合集中風險的隱藏危機

「不要把所有雞蛋放在一個籃子裡」是最古老的投資格言之一。然而，許多投資者在不知不覺中以使他們面臨重大風險的方式集中他們的投資組合。讓我們探討為什麼投資組合集中是危險的，以及如何實現真正的多元化。

## 什麼是投資組合集中？

當您投資的很大一部分與單一資產、行業或地理區域掛鉤時，就會發生投資組合集中。常見形式包括：

- **單一股票風險**：在一隻股票中持有超過投資組合 10% 的資金
- **行業集中**：超配科技、金融或其他行業
- **地理偏見**：過度暴露於某個國家或地區
- **雇主股票**：持有大量雇主公司股票

## 集中陷阱

許多投資者在不知不覺中陷入集中陷阱：

### 成功陷阱
當一隻股票表現良好時，投資者往往會讓它在投資組合中佔據更大的份額。正是讓他們賺錢的成功現在創造了風險。

### 熟悉偏見
投資者傾向於超配他們熟悉的股票——通常是他們雇主的股票或他們行業的公司。這會產生隱藏的相關性風險。

### 本土偏見
大多數投資者超配他們的祖國。美國投資者可能持有 70% 以上的美國股票，儘管美國僅佔全球市值的約 60%。

## 為什麼集中是危險的

### 1. 不對稱風險
50% 的損失需要 100% 的收益才能回本。集中倉位可能導致災難性損失，難以恢復。

### 2. 相關性驚喜
在市場壓力期間，相關性通常會增加。看起來多元化的資產突然一起波動。

### 3. 流動性風險
集中倉位可能難以在不影響市場的情況下退出，尤其是在較小的股票中。

## 衡量集中風險

專業風險管理人員使用以下指標：

- **赫芬達爾指數**：衡量投資組合集中度
- **VaR 貢獻**：顯示哪些倉位驅動您的風險
- **壓力測試**：在各種情景下模擬損失

## 建立多元化投資組合

### 5% 規則
考慮將任何單一倉位限制在不超過投資組合的 5%。這意味著任何單一股票的完全損失只會損害您的投資組合 5%。

### 真正的多元化
真正的多元化意味著持有對各種經濟情景反應不同的資產：

- **股票**：用於增長
- **債券**：用於穩定和收入
- **房地產**：用於通脹保護
- **商品**：用於通脹對沖
- **國際**：用於地理多元化

### 定期再平衡
制定時間表將您的投資組合再平衡回目標權重。這自然迫使您「高賣低買」。

## 結論

多元化是金融中唯一的免費午餐。通過將您的投資分散到真正不同的資產中，您可以在不一定犧牲回報的情況下降低風險。

記住：目標不是消除風險——那是不可能的。目標是了解和管理您正在承擔的風險。

---

*您的投資組合是否適當多元化？獲取免費風險分析以找出答案。*`,
      date: '2026-03-05',
      readTime: '6 分鐘閱讀',
      tags: ['多元化', '風險分析'],
    },
    {
      id: '3',
      slug: 'market-volatility-2026',
      title: '2026年市場波動應對策略',
      excerpt: '在不確定時期保護投資的關鍵策略，以及如何將波動轉化為機會。',
      content: `# 2026年市場波動應對策略

市場波動已成為新常態。隨著持續的地緣政治緊張局勢、不斷變化的貨幣政策和技術顛覆，投資者面臨著具有挑戰性的環境。以下是如何不僅在波動的市場中生存，而且茁壯成長。

## 了解波動率

波動率只是回報分散程度的統計衡量。高波動率意味著價格劇烈波動——無論是向上還是向下。雖然通常與恐懼相關，但波動率也創造機會。

### VIX 指數
CBOE 波動率指數（VIX）衡量預期的市場波動率。通常被稱為「恐懼指數」，它傾向於在市場壓力期間飆升。了解 VIX 水平有助於理解市場狀況：

- **VIX < 20**：相對平靜的市場
- **VIX 20-30**：不確定性升高
- **VIX > 30**：高度恐懼/壓力

## 為什麼波動率很重要

### 1. 序列風險
回報的順序很重要。退休初期或重大購買前的顯著下跌可能會產生持久影響。

### 2. 情緒化決策
波動率會引發情緒反應。恐懼導致在低點賣出；貪婪導致在高點買入。

### 3. 複合效應
大額損失需要更大的收益才能恢復。30% 的損失需要 43% 的收益才能回本。

## 波動市場的策略

### 1. 保持視角
記住波動是正常的。自 1950 年以來，標準普爾 500 指數經歷了：
- 平均年內下跌 14%
- 但約 75% 的年份實現正回報

### 2. 跨資產類別多元化
不同資產對波動率的反應不同：
- **優質股票**：往往更具彈性
- **債券**：通常在股票下跌時上漲
- **黃金**：傳統避風港
- **現金**：提供選擇性和安心

### 3. 使用定期定額投資法
在固定時間間隔投資固定金額可以消除擇時決策的情緒，並可能在波動期間降低平均購買價格。

### 4. 保持現金緩衝
持有 6-12 個月的現金開支可以減少在低迷時期出售投資的需求。

### 5. 將波動視為機會
巴菲特「在別人貪婪時恐懼，在別人恐懼時貪婪」的建議適用於此。從歷史上看，市場下跌一直是長期投資者的絕佳買入機會。

## 風險管理技術

### 倉位規模
減少波動性較大資產的倉位規模。這使您可以在不過度焦慮的情況下保持投資。

### 止損
根據您的 VaR 計算設置合理的止損，而不是任意的百分比。

### 對沖
考慮保護策略：
- 用於下行保護的看跌期權
- 用於臨時對沖的反向 ETF
- 增加對防禦性行業的配置

## 波動的心理學

波動市場最困難的部分是心理層面。考慮這些原則：

1. **制定計劃**：在波動來臨之前知道您會做什麼
2. **保持知情，而非沉迷**：定期檢查投資組合，而非持續查看
3. **專注於您可以控制的**：成本、稅收和資產配置
4. **長期思考**：短期波動是長期投資者的噪音

## 2026年展望

當前的市場狀況表明，以下因素將繼續推動波動：
- 央行政策轉型
- 地緣政治發展
- AI 和技術顛覆
- 氣候轉型影響

然而，波動並不意味著負回報。市場歷史上一些表現最好的年份都是在高波動時期之後。

## 結論

波動是投資者為回報付出的代價。成功的投資者不是恐懼它，而是：
- 了解他們真正的風險承受能力
- 保持多元化的投資組合
- 堅持紀律嚴明的投資計劃
- 將波動視為機會

記住：市場獎勵耐心的資本。成功的投資者不是那些避免波動的人，而是那些有效管理波動的人。

---

*擔心您的投資組合波動？獲取免費 VaR 分析以了解您的風險敞口。*`,
      date: '2026-03-01',
      readTime: '5 分鐘閱讀',
      tags: ['市場分析', '波動率', '策略'],
    },
    {
      id: '4',
      slug: 'latest-gold-update',
      title: '黃金暴漲後的交易策略 — 簡單的 XAUUSD 一週計劃',
      excerpt: '使用 DXY 和回調的實用交易框架，在黃金劇烈波動後的整固期導航市場。',
      content: `# 黃金暴漲後的交易策略 — 簡單的 XAUUSD 一週計劃（使用 DXY + 回調 + 可選 ORB）

## 為什麼黃金現在感覺很混亂

黃金最近做了黃金經常做的事：快速波動，震驚所有人，然後變得混亂。

在最近黃金圖表觀察中，價格飆升至主要高點區域（約 **5419**），然後急劇拋售。在這樣的走勢之後，市場通常需要時間來「消化」。這種消化表現為橫盤、震盪的走勢（**區間**）。

**一句話總結情況：**

- 大波動已經發生（暴漲 + 拋售）→ 現在是**區間/整固** → 不要在中間交易。

---

## 「3 鍵」框架（簡單說明）

### 1) DXY 過濾器（美元指數）

黃金通常與美元走勢相反。

- **DXY 上漲（美元強勢）** → 黃金通常受壓
- **DXY 下跌（美元弱勢）** → 黃金通常獲得支撐

所以 DXY 是一個**過濾器**，不是水晶球：

- 如果 DXY 強勁上漲 → 小心買入黃金。
- 如果 DXY 下跌 → 做多黃金的勝率更高。

### 2) 只交易回調（永遠不要追漲）

如果您在大陽線後買入，您通常已經遲了。

高概率的入場點是在價格**回調**至：

- **支撐位**（用於買入），或
- **阻力位**（用於賣出）。

### 3) ORB（可選的時機工具）

ORB = 開盤區間突破（紐約開盤區間）。

它可以幫助您把握入場時機，但對於**一週交易**來說，它是可選的。

---

## DXY 現在在說什麼（基於您的截圖）

從您的 DXY 圖表：

- DXY 一直在**上漲趨勢**（美元強勢）
- 最近看起來在 **~99 附近停頓**（整固），還沒有明確反轉

**簡單結論：**

- 美元強勢仍然是「默認」狀態
- 所以在 DXY 真正轉跌之前，「積極買入黃金」的吸引力較低

---

## XAUUSD 一週策略（簡單規則）

### 第一步 — 只在黃金上標記 2 個區域

- **支撐區** = 黃金之前強勁反彈的區域（區間底部）
- **阻力區** = 黃金之前強烈被拒的區域（區間頂部）

**規則：** 如果黃金在支撐和阻力之間的**中間** → **什麼都不做**。

### 第二步 — 使用 DXY 選擇方向

- 如果 **DXY 上漲** → 只在黃金反彈至阻力位時尋找**賣出**機會
- 如果 **DXY 下跌** → 只在黃金回調至支撐位時尋找**買入**機會
- 如果 **DXY 橫盤** → 減少交易或等待

### 第三步 — 入場觸發（保持簡單）

**買入觸發：**

1. 黃金到達**支撐位**
2. 您看到**拒絕**（長下影線、強勁看漲蠟燭，或快速收復）
3. 在**下一個小回調**時入場（不是第一個暴漲）

**賣出觸發：**

1. 黃金到達**阻力位**
2. 您看到**拒絕**（上影線、強勁看跌蠟燭，無法持穩上方）
3. 在**下一個小回調**時入場（不是第一個下跌）

### 第四步 — 止損和止盈（基本但有效）

**止損：**

- 買入：低於**支撐擺動低點**
- 賣出：高於**阻力擺動高點**

**止盈：**

- 目標 1：回到**區間中間**（降低風險）
- 目標 2：**區間對面邊緣**

**管理規則：**

- 如果黃金開始強勢趨勢，不要過早限制它——**跟隨止損在結構後方**（黃金往往比預期走得更遠）。

---

## 接下來會發生什麼（這樣您就不會過度交易）

對於下週，「好」的情況是：

1. 黃金跌至支撐位 + DXY 走弱 → **好的買入環境**
2. 黃金反彈至阻力位 + DXY 走強 → **好的賣出環境**
3. 突破發生並**持穩**（不只是影線）→ 交易**回測**，而不是突破蠟燭

在這些情況發生之前：**耐心就是策略**。

---

## 最終總結（一句話）

黃金在劇烈波動後正在整固，DXY 仍然強勢，所以最佳計劃是：**等待黃金觸及區間邊緣，使用 DXY 作為確認，並只在有明確拒絕的回調時入場——永遠不在中間，永遠不要追漲。**`,
      date: '2026-03-08',
      readTime: '7 分鐘閱讀',
      tags: ['黃金', 'XAUUSD', '交易策略'],
    },
    {
      id: '5',
      slug: 'oil-crisis-portfolio-risk',
      title: '油價危機的一週：真正的風險不在油，而在你的投資組合',
      excerpt: '當油價衝擊把市場推入高波動狀態，關鍵問題不是油價會漲到哪裡，而是你的投資組合在「最差情境」下會承受多大損失。',
      content: `# 油價危機的一週：真正的風險不在油，而在你的投資組合

這一週，油價與地緣衝突相關的消息不斷發酵。很多投資者第一反應是判斷方向：油價還會不會繼續上漲？要不要追能源板塊？但對投資者而言，更關鍵的問題其實是：一旦油價衝擊把市場推入高波動狀態，你的投資組合在「最差情境」下會承受多大損失？

原因在於，油價衝擊通常不會只停留在能源市場。油作為全球經濟的關鍵成本，一旦快速上行，市場往往會連鎖重估三件事：

第一，通脹預期上升；  
第二，利率路徑可能更「高、更久」；  
第三，風險溢價上升（投資者要求更高回報來補償不確定性）。

結果是：股票估值受壓、信用利差擴大、資金風險偏好下降，波動率走高。更麻煩的是，在壓力情境下，資產之間的相關性經常會突然上升——你以為已經分散配置，但在系統性衝擊裡，很多資產會「同時下跌」。這就是典型的尾部風險特徵：平時看似不顯著，但一旦發生，損失往往呈現非線性放大，同時疊加流動性下降、執行成本上升，使得止損與再平衡更難完成。

因此，投資的關鍵不只是「預測」，而是「量化並管理最差情境」。這也是 VaR（Value at Risk，風險價值）存在的意義。VaR 不是水晶球，它並不告訴你一定會虧多少，而是用一致、可比較的方法回答一個可管理的問題：

在給定時間範圍與置信水平下，你的投資組合可能面臨的最大損失大約是多少？

當波動率上升、相關性變強時，VaR 會更敏感地反映「風險水平正在升級」，幫助投資者用數字而非情緒做決策：是否需要降低風險敞口？是否需要增加流動性緩衝？是否需要做對沖或調整倉位結構？

但在實際風險管理中，只看「整體 VaR」往往不夠。整體 VaR 只能告訴你「整個盤子有多危險」，卻不能告訴你「危險來自哪裡、應該先處理誰」。真正可執行的風險管理，需要把風險拆到更細的管理單元——這就是「客戶級 VaR 分析」的價值所在。

客戶級 VaR 能夠把風險拆解到客戶／帳戶／策略層級，回答四個最重要的管理問題：

1）哪些客戶（或帳戶）貢獻了最大的風險？  
2）風險主要由哪些因子驅動（油、利率、匯率、信用、股市波動）？  
3）風險集中在什麼行為與結構上（槓桿、集中持倉、衍生品非線性、短期高換手）？  
4）如果市場進一步波動，哪些客戶需要優先採取動作（減倉、對沖、追加保證金、收緊限額）？

當你能把風險從「一個總數」變成「可追溯、可排序、可分層處理」的清單，VaR 才真正從報表指標升級為管理工具：更快定位集中風險、更精準分配資本與限額、更有效制定對沖與去槓桿策略，也更容易向管理層解釋「為什麼現在必須行動」。

市場永遠會有突發事件。最終能長期生存並穩定複利的投資者，往往不是最會猜方向的人，而是最清楚自己在最差情境下會發生什麼、並且有能力快速把風險壓回可控範圍的人。這一週的油市波動，只是再一次提醒：風險管理不是成本，而是投資的生存能力。`,
      date: '2026-03-29',
      readTime: '8 分鐘閱讀',
      tags: ['油價', 'VaR', '投資組合風險', '尾部風險'],
    },
  ],
  cn: [
    {
      id: '1',
      slug: 'understanding-var-risk',
      title: '了解 VaR：散户投资者完整指南',
      excerpt: '学习风险价值（VaR）的运作原理，以及为什么它是每位投资者都应该了解的衡量投资组合风险的关键指标。',
      content: `# 了解 VaR：散户投资者完整指南

风险价值（VaR）是金融领域最广泛使用的风险指标之一，但许多散户投资者从未听说过它。在本综合指南中，我们将解释什么是 VaR、它是如何运作的，以及为什么它应该成为您投资工具包的一部分。

## 什么是风险价值？

风险价值（VaR）是一种统计指标，用于量化在特定时间范围内公司、投资组合或仓位所面临的财务风险水平。简单来说，VaR 回答了这个问题：*「在给定置信水平下，我的最坏情况损失是多少？」*

例如，如果您的投资组合在 95% 置信水平下的每日 VaR 为 $1,000，这意味着在 100 天中有 95 天，您的损失不会超过 $1,000。有 5% 的机会损失可能更大。

## 为什么 VaR 对散户投资者很重要

大多数散户投资者专注于回报而忽视风险。这是一个危险的错误。以下是 VaR 应该对您重要的原因：

1. **了解您的敞口**：VaR 为您提供潜在损失的具体数字
2. **比较投资**：您可以比较不同投资组合的风险调整后回报
3. **设置止损**：VaR 帮助您设置合理的止损水平
4. **仓位规模**：使用 VaR 来确定适当的仓位规模

## VaR 的计算方法

计算 VaR 主要有三种方法：

### 1. 历史模拟法
此方法使用历史数据来模拟潜在损失。它简单且对回报分布没有任何假设。

### 2. 参数法（方差-协方差法）
此方法假设回报遵循正态分布。虽然计算效率高，但可能低估尾部风险。

### 3. 蒙特卡洛模拟法
此方法生成数千个随机情景来模拟潜在结果。它最灵活但计算密集。

## VaR 的局限性

虽然 VaR 很有用，但它并不完美：

- **VaR 无法告诉您在最坏情况下损失会有多严重**（超出置信水平）
- 它假设历史模式将继续
- 不同的计算方法可能产生不同的结果
- 它可能无法捕捉所有类型的风险（流动性风险、操作风险）

这就是为什么专业人士还使用 **CVaR**（条件风险价值），它衡量最坏情况情景下的预期损失。

## VaR 入门

如果您认真对待风险管理：

1. 计算您当前投资组合的 VaR
2. 使用它来设置适当的止损
3. 监控随着市场变化您的 VaR 如何变化
4. 考虑 CVaR 以获得尾部风险的完整图景

记住：VaR 是一种工具，不是保证。市场总是会让我们惊讶，但衡量您的风险是管理它的第一步。

---

*想要对您的投资组合进行专业的 VaR 分析？联系我们获取免费咨询。*`,
      date: '2026-03-08',
      readTime: '8 分钟阅读',
      tags: ['VaR', '风险管理', '教育'],
      featured: true,
    },
    {
      id: '2',
      slug: 'portfolio-concentration-risk',
      title: '投资组合集中风险的隐藏危机',
      excerpt: '为什么把所有鸡蛋放在一个篮子里会摧毁您的财富 — 以及如何建立真正多元化的投资组合。',
      content: `# 投资组合集中风险的隐藏危机

「不要把所有鸡蛋放在一个篮子里」是最古老的投资格言之一。然而，许多投资者在不知不觉中以使他们面临重大风险的方式集中他们的投资组合。让我们探讨为什么投资组合集中是危险的，以及如何实现真正的多元化。

## 什么是投资组合集中？

当您的很大一部分投资与单一资产、行业或地理区域挂钩时，就会发生投资组合集中。常见形式包括：

- **单一股票风险**：在一只股票中持有超过投资组合 10% 的资金
- **行业集中**：超配科技、金融或其他行业
- **地理偏见**：过度暴露于某个国家或地区
- **雇主股票**：持有大量雇主公司股票

## 集中陷阱

许多投资者在不知不觉中陷入集中陷阱：

### 成功陷阱
当一只股票表现良好时，投资者往往会让它在投资组合中占据更大的份额。正是让他们赚钱的成功现在创造了风险。

### 熟悉偏见
投资者倾向于超配他们熟悉的股票——通常是他们雇主的股票或他们行业的公司。这会产生隐藏的相关性风险。

### 本土偏见
大多数投资者超配他们的祖国。美国投资者可能持有 70% 以上的美国股票，尽管美国仅占全球市值的约 60%。

## 为什么集中是危险的

### 1. 不对称风险
50% 的损失需要 100% 的收益才能回本。集中仓位可能导致灾难性损失，难以恢复。

### 2. 相关性惊喜
在市场压力期间，相关性通常会增加。看起来多元化的资产突然一起波动。

### 3. 流动性风险
集中仓位可能难以在不影响市场的情况下退出，尤其是在较小的股票中。

## 衡量集中风险

专业风险管理人员使用以下指标：

- **赫芬达尔指数**：衡量投资组合集中度
- **VaR 贡献**：显示哪些仓位驱动您的风险
- **压力测试**：在各种情景下模拟损失

## 建立多元化投资组合

### 5% 规则
考虑将任何单一仓位限制在不超过投资组合的 5%。这意味着任何单一股票的完全损失只会损害您的投资组合 5%。

### 真正的多元化
真正的多元化意味着持有对各种经济情景反应不同的资产：

- **股票**：用于增长
- **债券**：用于稳定和收入
- **房地产**：用于通胀保护
- **商品**：用于通胀对冲
- **国际**：用于地理多元化

### 定期再平衡
制定时间表将您的投资组合再平衡回目标权重。这自然迫使您「高卖低买」。

## 结论

多元化是金融中唯一的免费午餐。通过将您的投资分散到真正不同的资产中，您可以在不一定牺牲回报的情况下降低风险。

记住：目标不是消除风险——那是不可能的。目标是了解和管理您正在承担的风险。

---

*您的投资组合是否适当多元化？获取免费风险分析以找出答案。*`,
      date: '2026-03-05',
      readTime: '6 分钟阅读',
      tags: ['多元化', '风险分析'],
    },
    {
      id: '3',
      slug: 'market-volatility-2026',
      title: '2026年市场波动应对策略',
      excerpt: '在不确定时期保护投资的关键策略，以及如何将波动转化为机会。',
      content: `# 2026年市场波动应对策略

市场波动已成为新常态。随着持续的地缘政治紧张局势、不断变化的货币政策和技术颠覆，投资者面临着具有挑战性的环境。以下是如何不仅在波动的市场中生存，而且茁壮成长。

## 了解波动率

波动率只是回报分散程度的统计衡量。高波动率意味着价格剧烈波动——无论是向上还是向下。虽然通常与恐惧相关，但波动率也创造机会。

### VIX 指数
CBOE 波动率指数（VIX）衡量预期的市场波动率。通常被称为「恐惧指数」，它倾向于在市场压力期间飙升。了解 VIX 水平有助于理解市场状况：

- **VIX < 20**：相对平静的市场
- **VIX 20-30**：不确定性升高
- **VIX > 30**：高度恐惧/压力

## 为什么波动率很重要

### 1. 序列风险
回报的顺序很重要。退休初期或重大购买前的显著下跌可能会产生持久影响。

### 2. 情绪化决策
波动率会引发情绪反应。恐惧导致在低点卖出；贪婪导致在高点买入。

### 3. 复合效应
大额损失需要更大的收益才能恢复。30% 的损失需要 43% 的收益才能回本。

## 波动市场的策略

### 1. 保持视角
记住波动是正常的。自 1950 年以来，标准普尔 500 指数经历了：
- 平均年内下跌 14%
- 但约 75% 的年份实现正回报

### 2. 跨资产类别多元化
不同资产对波动率的反应不同：
- **优质股票**：往往更具弹性
- **债券**：通常在股票下跌时上涨
- **黄金**：传统避风港
- **现金**：提供选择性和安心

### 3. 使用定期定额投资法
在固定时间间隔投资固定金额可以消除择时决策的情绪，并可能在波动期间降低平均购买价格。

### 4. 保持现金缓冲
持有 6-12 个月的现金开支可以减少在低迷时期出售投资的需求。

### 5. 将波动视为机会
巴菲特「在别人贪婪时恐惧，在别人恐惧时贪婪」的建议适用于此。从历史上看，市场下跌一直是长期投资者的绝佳买入机会。

## 风险管理技术

### 仓位规模
减少波动性较大资产的仓位规模。这使您可以在不过度焦虑的情况下保持投资。

### 止损
根据您的 VaR 计算设置合理的止损，而不是任意的百分比。

### 对冲
考虑保护策略：
- 用于下行保护的看跌期权
- 用于临时对冲的反向 ETF
- 增加对防御性行业的配置

## 波动的心理学

波动市场最困难的部分是心理层面。考虑这些原则：

1. **制定计划**：在波动来临之前知道您会做什么
2. **保持知情，而非沉迷**：定期检查投资组合，而非持续查看
3. **专注于您可以控制的**：成本、税收和资产配置
4. **长期思考**：短期波动是长期投资者的噪音

## 2026年展望

当前的市场状况表明，以下因素将继续推动波动：
- 央行政策转型
- 地缘政治发展
- AI 和技术颠覆
- 气候转型影响

然而，波动并不意味着负回报。市场历史上一些表现最好的年份都是在高波动时期之后。

## 结论

波动是投资者为回报付出的代价。成功的投资者不是恐惧它，而是：
- 了解他们真正的风险承受能力
- 保持多元化的投资组合
- 坚持纪律严明的投资计划
- 将波动视为机会

记住：市场奖励耐心的资本。成功的投资者不是那些避免波动的人，而是那些有效管理波动的人。

---

*担心您的投资组合波动？获取免费 VaR 分析以了解您的风险敞口。*`,
      date: '2026-03-01',
      readTime: '5 分钟阅读',
      tags: ['市场分析', '波动率', '策略'],
    },
    {
      id: '4',
      slug: 'latest-gold-update',
      title: '黄金暴涨后的交易策略 — 简单的 XAUUSD 一周计划',
      excerpt: '使用 DXY 和回调的实用交易框架，在黄金剧烈波动后的整固期导航市场。',
      content: `# 黄金暴涨后的交易策略 — 简单的 XAUUSD 一周计划（使用 DXY + 回调 + 可选 ORB）

## 为什么黄金现在感觉很混乱

黄金最近做了黄金经常做的事：快速波动，震惊所有人，然后变得混乱。

在最近黄金图表观察中，价格飙升至主要高点区域（约 **5419**），然后急剧抛售。在这样的走势之后，市场通常需要时间来「消化」。这种消化表现为横盘、震荡的走势（**区间**）。

**一句话总结情况：**

- 大波动已经发生（暴涨 + 抛售）→ 现在是**区间/整固** → 不要在中间交易。

---

## 「3 键」框架（简单说明）

### 1) DXY 过滤器（美元指数）

黄金通常与美元走势相反。

- **DXY 上涨（美元强势）** → 黄金通常受压
- **DXY 下跌（美元弱势）** → 黄金通常获得支撑

所以 DXY 是一个**过滤器**，不是水晶球：

- 如果 DXY 强劲上涨 → 小心买入黄金。
- 如果 DXY 下跌 → 做多黄金的胜率更高。

### 2) 只交易回调（永远不要追涨）

如果您在大阳线后买入，您通常已经迟了。

高概率的入场点是在价格**回调**至：

- **支撑位**（用于买入），或
- **阻力位**（用于卖出）。

### 3) ORB（可选的时机工具）

ORB = 开盘区间突破（纽约开盘区间）。

它可以帮助您把握入场时机，但对于**一周交易**来说，它是可选的。

---

## DXY 现在在说什么（基于您的截图）

从您的 DXY 图表：

- DXY 一直在**上涨趋势**（美元强势）
- 最近看起来在 **~99 附近停顿**（整固），还没有明确反转

**简单结论：**

- 美元强势仍然是「默认」状态
- 所以在 DXY 真正转跌之前，「积极买入黄金」的吸引力较低

---

## XAUUSD 一周策略（简单规则）

### 第一步 — 只在黄金上标记 2 个区域

- **支撑区** = 黄金之前强劲反弹的区域（区间底部）
- **阻力区** = 黄金之前强烈被拒的区域（区间顶部）

**规则：** 如果黄金在支撑和阻力之间的**中间** → **什么都不做**。

### 第二步 — 使用 DXY 选择方向

- 如果 **DXY 上涨** → 只在黄金反弹至阻力位时寻找**卖出**机会
- 如果 **DXY 下跌** → 只在黄金回调至支撑位时寻找**买入**机会
- 如果 **DXY 横盘** → 减少交易或等待

### 第三步 — 入场触发（保持简单）

**买入触发：**

1. 黄金到达**支撑位**
2. 您看到**拒绝**（长下影线、强劲看涨蜡烛，或快速收复）
3. 在**下一个小回调**时入场（不是第一个暴涨）

**卖出触发：**

1. 黄金到达**阻力位**
2. 您看到**拒绝**（上影线、强劲看跌蜡烛，无法持稳上方）
3. 在**下一个小回调**时入场（不是第一个下跌）

### 第四步 — 止损和止盈（基本但有效）

**止损：**

- 买入：低于**支撑摆动低点**
- 卖出：高于**阻力摆动高点**

**止盈：**

- 目标 1：回到**区间中间**（降低风险）
- 目标 2：**区间对面边缘**

**管理规则：**

- 如果黄金开始强势趋势，不要过早限制它——**跟随止损在结构后方**（黄金往往比预期走得更远）。

---

## 接下来会发生什么（这样您就不会过度交易）

对于下周，「好」的情况是：

1. 黄金跌至支撑位 + DXY 走弱 → **好的买入环境**
2. 黄金反弹至阻力位 + DXY 走强 → **好的卖出环境**
3. 突破发生并**持稳**（不只是影线）→ 交易**回测**，而不是突破蜡烛

在这些情况发生之前：**耐心就是策略**。

---

## 最终总结（一句话）

黄金在剧烈波动后正在整固，DXY 仍然强势，所以最佳计划是：**等待黄金触及区间边缘，使用 DXY 作为确认，并只在有明确拒绝的回调时入场——永远不在中间，永远不要追涨。**`,
      date: '2026-03-08',
      readTime: '7 分钟阅读',
      tags: ['黄金', 'XAUUSD', '交易策略'],
    },
    {
      id: '5',
      slug: 'oil-crisis-portfolio-risk',
      title: '油价危机的一周：真正的风险不在油，而在你的投资组合',
      excerpt: '当油价冲击把市场推入高波动状态，关键问题不是油价会涨到哪里，而是你的投资组合在「最差情境」下会承受多大损失。',
      content: `# 油价危机的一周：真正的风险不在油，而在你的投资组合

这一周，油价与地缘冲突相关的消息不断发酵。很多投资者第一反应是判断方向：油价还会不会继续上涨？要不要追能源板块？但对投资者而言，更关键的问题其实是：一旦油价冲击把市场推入高波动状态，你的投资组合在「最差情境」下会承受多大损失？

原因在于，油价冲击通常不会只停留在能源市场。油作为全球经济的关键成本，一旦快速上行，市场往往会连锁重估三件事：

第一，通胀预期上升；  
第二，利率路径可能更「高、更久」；  
第三，风险溢价上升（投资者要求更高回报来补偿不确定性）。

结果是：股票估值承压、信用利差扩大、资金风险偏好下降，波动率走高。更麻烦的是，在压力情境下，资产之间的相关性经常会突然上升——你以为已经分散配置，但在系统性冲击里，很多资产会「同时下跌」。这就是典型的尾部风险特征：平时看似不显著，但一旦发生，损失往往呈现非线性放大，同时叠加流动性下降、执行成本上升，使得止损与再平衡更难完成。

因此，投资的关键不只是「预测」，而是「量化并管理最差情境」。这也是 VaR（Value at Risk，风险价值）存在的意义。VaR 不是水晶球，它并不告诉你一定会亏多少，而是用一致、可比较的方法回答一个可管理的问题：

在给定时间范围与置信水平下，你的投资组合可能面临的最大损失大约是多少？

当波动率上升、相关性变强时，VaR 会更敏感地反映「风险水平正在升级」，帮助投资者用数字而非情绪做决策：是否需要降低风险敞口？是否需要增加流动性缓冲？是否需要做对冲或调整仓位结构？

但在实际风险管理中，只看「整体 VaR」往往不够。整体 VaR 只能告诉你「整个盘子有多危险」，却不能告诉你「危险来自哪里、应该先处理谁」。真正可执行的风险管理，需要把风险拆到更细的管理单元——这就是「客户级 VaR 分析」的价值所在。

客户级 VaR 能够把风险拆解到客户/账户/策略层级，回答四个最重要的管理问题：

1）哪些客户（或账户）贡献了最大的风险？  
2）风险主要由哪些因子驱动（油、利率、汇率、信用、股市波动）？  
3）风险集中在什么行为与结构上（杠杆、集中持仓、衍生品非线性、短期高换手）？  
4）如果市场进一步波动，哪些客户需要优先采取动作（减仓、对冲、追加保证金、收紧限额）？

当你能把风险从「一个总数」变成「可追溯、可排序、可分层处理」的清单，VaR 才真正从报表指标升级为管理工具：更快定位集中风险、更精准分配资本与限额、更有效制定对冲与去杠杆策略，也更容易向管理层解释「为什么现在必须行动」。

市场永远会有突发事件。最终能长期生存并稳定复利的投资者，往往不是最会猜方向的人，而是最清楚自己在最差情境下会发生什么、并且有能力快速把风险压回可控范围的人。这一周的油市波动，只是再一次提醒：风险管理不是成本，而是投资的生存能力。`,
      date: '2026-03-29',
      readTime: '8 分钟阅读',
      tags: ['油价', 'VaR', '投资组合风险', '尾部风险'],
    },
  ],
};

// Share Section Component
const ShareSection = ({ post }: { post: BlogPost }) => {
  const [copied, setCopied] = useState(false);
  const { language } = useLanguage();
  
  // Generate share URL
  const shareUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}${window.location.pathname}#blog/${post.slug}`
    : '';
  
  // Social share URLs
  const getTwitterShareUrl = () => {
    const text = encodeURIComponent(post.title);
    const url = encodeURIComponent(shareUrl);
    return `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
  };
  
  const getLinkedInShareUrl = () => {
    const url = encodeURIComponent(shareUrl);
    const title = encodeURIComponent(post.title);
    const summary = encodeURIComponent(post.excerpt);
    return `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}&summary=${summary}`;
  };
  
  const getFacebookShareUrl = () => {
    const url = encodeURIComponent(shareUrl);
    return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  };
  
  const getWhatsAppShareUrl = () => {
    const text = encodeURIComponent(`${post.title} ${shareUrl}`);
    return `https://wa.me/?text=${text}`;
  };
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  
  const shareLabels = {
    en: {
      share: 'Share this article',
      copyLink: 'Copy link',
      copied: 'Copied!',
      twitter: 'Share on X (Twitter)',
      linkedin: 'Share on LinkedIn',
      facebook: 'Share on Facebook',
      whatsapp: 'Share on WhatsApp',
    },
    zh: {
      share: '分享這篇文章',
      copyLink: '複製連結',
      copied: '已複製！',
      twitter: '分享到 X (Twitter)',
      linkedin: '分享到 LinkedIn',
      facebook: '分享到 Facebook',
      whatsapp: '分享到 WhatsApp',
    },
    cn: {
      share: '分享这篇文章',
      copyLink: '复制链接',
      copied: '已复制！',
      twitter: '分享到 X (Twitter)',
      linkedin: '分享到 LinkedIn',
      facebook: '分享到 Facebook',
      whatsapp: '分享到 WhatsApp',
    },
  };
  
  const labels = shareLabels[language];
  
  return (
    <div className="mt-8 pt-6 border-t border-[#e8e6e1]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2 text-[#666]">
          <Share2 className="w-4 h-4" />
          <span className="text-sm font-medium">{labels.share}</span>
        </div>
        
        <div className="flex flex-wrap items-center gap-2">
          {/* Copy Link Button */}
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#f5f5f5] hover:bg-[#e8e6e1] text-[#666] text-sm font-medium transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-green-600">{labels.copied}</span>
              </>
            ) : (
              <>
                <Link2 className="w-4 h-4" />
                {labels.copyLink}
              </>
            )}
          </button>
          
          {/* Social Share Buttons */}
          <a
            href={getTwitterShareUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#1a1a1a] hover:bg-[#333] text-white transition-colors"
            title={labels.twitter}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          
          <a
            href={getLinkedInShareUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#0077b5] hover:bg-[#006396] text-white transition-colors"
            title={labels.linkedin}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          
          <a
            href={getFacebookShareUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#1877f2] hover:bg-[#166fe5] text-white transition-colors"
            title={labels.facebook}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          
          <a
            href={getWhatsAppShareUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#25d366] hover:bg-[#128c7e] text-white transition-colors"
            title={labels.whatsapp}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Shareable Link Display */}
      <div className="mt-4 p-3 bg-[#f8f7f4] rounded-lg">
        <code className="text-xs text-[#666] break-all">{shareUrl}</code>
      </div>
    </div>
  );
};

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  const posts = blogPosts[language] || blogPosts.en;
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleOpenPost = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    // Update URL hash for sharing
    window.location.hash = `#blog/${post.slug}`;
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPost(null), 300);
    // Clear URL hash
    window.history.pushState('', document.title, window.location.pathname + window.location.search);
  };

  // Check URL hash on mount and when language changes
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#blog/')) {
        const slug = hash.replace('#blog/', '');
        const post = posts.find((p) => p.slug === slug);
        if (post) {
          setSelectedPost(post);
          setIsModalOpen(true);
          // Scroll to blog section
          setTimeout(() => {
            document.querySelector('#blog')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };
    
    checkHash();
    
    // Listen for hash changes
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, [posts]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (language === 'en') {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    }
    return date.toLocaleDateString(language === 'zh' ? 'zh-HK' : 'zh-CN', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <>
      <section
        id="blog"
        ref={sectionRef}
        className="section-padding bg-[#f8f7f4] relative overflow-hidden"
      >
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#c9a962]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#c9a962]/5 rounded-full blur-2xl translate-y-1/2 translate-x-1/2" />

        <div className="container-premium relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a962]/10 border border-[#c9a962]/30 mb-6 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#c9a962]" />
              <span className="text-sm text-[#c9a962] font-medium">{t('blog.insights')}</span>
            </div>

            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 transition-all duration-600 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {t('blog.title')} <span className="text-gradient-gold">{t('blog.titleHighlight')}</span>
            </h2>

            <p
              className={`text-lg text-[#666] max-w-2xl mx-auto transition-all duration-600 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {t('blog.subtitle')}
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div
              className={`mb-12 transition-all duration-600 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(-1)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleOpenPost(featuredPost)}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Featured Image Placeholder */}
                  <div className="relative h-64 md:h-auto bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c9a962]/20 to-transparent" />
                    <div className="relative z-10 text-center p-8">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[#c9a962]/20 flex items-center justify-center">
                        <BookOpen className="w-10 h-10 text-[#c9a962]" />
                      </div>
                      <span className="text-[#c9a962] text-sm font-medium uppercase tracking-wider">
                        {t('blog.featured')}
                      </span>
                    </div>
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-10 left-10 w-32 h-32 border border-[#c9a962] rounded-full" />
                      <div className="absolute bottom-10 right-10 w-24 h-24 border border-[#c9a962] rounded-full" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      {featuredPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#c9a962]/10 text-[#c9a962] text-xs font-medium"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4 group-hover:text-[#c9a962] transition-colors duration-300">
                      {featuredPost.title}
                    </h3>

                    <p className="text-[#666] leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-[#999] mb-6">
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredPost.date)}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <button className="inline-flex items-center gap-2 text-[#c9a962] font-semibold group/btn">
                      {t('blog.readMore')}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regular Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {regularPosts.map((post, index) => (
              <div
                key={post.id}
                className={`group relative transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleOpenPost(post)}
              >
                <div
                  className={`relative h-full bg-white rounded-2xl overflow-hidden border-2 border-[#e8e6e1] hover:border-[#c9a962]/50 transition-all duration-300 ${
                    hoveredIndex === index ? 'shadow-xl -translate-y-2' : 'shadow-md'
                  }`}
                >
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c9a962]/10 to-transparent" />
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-xl bg-[#c9a962]/20 flex items-center justify-center">
                        <BookOpen className="w-8 h-8 text-[#c9a962]" />
                      </div>
                    </div>
                    {/* Tags overlay */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm text-white text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-[#999] mb-3">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#c9a962] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-[#666] leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <button className="inline-flex items-center gap-2 text-[#c9a962] font-semibold text-sm group/btn">
                      {t('blog.readMore')}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-[#c9a962]/5 to-transparent transition-opacity duration-300 pointer-events-none ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom spacing */}
          <div className="h-8" />
        </div>
      </section>

      {/* Article Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-white border-0">
          {selectedPost && (
            <>
              {/* Modal Header with Close Button */}
              <div className="sticky top-0 z-10 bg-white border-b border-[#e8e6e1] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-[#999]">{formatDate(selectedPost.date)}</span>
                  <span className="text-[#e8e6e1]">|</span>
                  <span className="text-sm text-[#999]">{selectedPost.readTime}</span>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-2 rounded-lg hover:bg-[#f5f5f5] transition-colors"
                >
                  <X className="w-5 h-5 text-[#666]" />
                </button>
              </div>

              {/* Article Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
                {/* Article Header */}
                <div className="px-6 md:px-10 pt-8 pb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-[#c9a962]/10 text-[#c9a962] text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] leading-tight">
                    {selectedPost.title}
                  </h1>
                </div>

                {/* Article Body */}
                <div className="px-6 md:px-10 pb-10">
                  <article className="prose prose-lg max-w-none prose-headings:text-[#1a1a1a] prose-headings:font-bold prose-p:text-[#444] prose-p:leading-relaxed prose-li:text-[#444] prose-strong:text-[#1a1a1a] prose-a:text-[#c9a962] prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-[#c9a962] prose-blockquote:bg-[#f8f7f4] prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg">
                    <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
                  </article>

                  {/* Share Section */}
                  <ShareSection post={selectedPost} />

                  {/* CTA at bottom */}
                  <div className="mt-10 pt-8 border-t border-[#e8e6e1]">
                    <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-2xl p-6 md:p-8 text-center">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {t('cta.ready')} <span className="text-[#c9a962]">{t('cta.realRisk')}</span>
                      </h3>
                      <p className="text-white/70 mb-6 max-w-lg mx-auto">
                        {t('cta.subtitle')}
                      </p>
                      <button
                        onClick={() => {
                          handleCloseModal();
                          setTimeout(() => {
                            document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' });
                          }, 300);
                        }}
                        className="btn-primary"
                      >
                        {t('cta.getFreeAnalysis')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Blog;
