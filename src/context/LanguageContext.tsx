import React, { createContext, useContext, useState, useCallback } from 'react';

type Language = 'en' | 'zh' | 'cn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.howItWorks': 'How It Works',
    'nav.sampleReport': 'Sample Report',
    'nav.pricing': 'Pricing',
    'nav.getFreeAnalysis': 'Get Free Analysis',
    
    // Hero
    'hero.trustedBy': 'Trusted by 2,000+ investors',
    'hero.headline1': 'Know Your Risk',
    'hero.headline2': 'Before It Knows You',
    'hero.subheadline': 'Professional VaR analysis for retail investors. Stop guessing, start measuring your portfolio risk with institutional-grade tools.',
    'hero.ctaPrimary': 'Get Your Free Risk Analysis',
    'hero.ctaSecondary': 'See How It Works',
    'hero.confidence': 'Confidence',
    'hero.users': 'Users',
    'hero.certified': 'Certified',
    'hero.scrollToExplore': 'Scroll to explore',
    
    // Problem Section
    'problem.theProblem': 'The Problem',
    'problem.title1': 'Why',
    'problem.title2': '90%',
    'problem.title3': 'of Retail Investors Lose Money',
    'problem.subtitle': 'The 5 critical mistakes destroying your portfolio — and how to avoid them',
    'problem.soundFamiliar': 'Sound familiar? You\'re not alone.',
    'problem.discoverSolution': 'Discover the solution',
    
    // Mistakes
    'mistake.1.title': 'Only Looking at Returns, Ignoring Risk',
    'mistake.1.desc': 'Chasing high returns without understanding the risk exposure. What looks profitable can wipe you out.',
    'mistake.2.title': 'Over-Concentration = Total Loss',
    'mistake.2.desc': 'Putting too much in one stock or sector. When it falls, everything falls with it.',
    'mistake.3.title': 'No Stop-Loss: Small Losses Become Disasters',
    'mistake.3.desc': 'Hope is not a strategy. Without stop-losses, a 5% loss becomes 50% before you react.',
    'mistake.4.title': 'Emotional Trading, No Discipline',
    'mistake.4.desc': 'Buying on FOMO, selling on panic. Emotions are the enemy of returns.',
    'mistake.5.title': 'Don\'t Even Know Your Own Risk Level',
    'mistake.5.desc': 'If you can\'t measure your risk, you can\'t manage it. Most investors have no idea what they\'re exposed to.',
    
    // Solution Section
    'solution.theSolution': 'The Solution',
    'solution.whatIsVaR': 'What is VaR?',
    'solution.subtitle': 'Value at Risk: The Metric Professionals Use',
    'solution.desc1': 'VaR (Value at Risk) tells you the maximum amount you could lose on your portfolio over a specific time period, with a given confidence level.',
    'solution.desc2': 'For example: If your daily VaR is',
    'solution.desc3': 'at',
    'solution.desc4': 'confidence, it means there\'s a 95% probability you won\'t lose more than ¥5,000 in a single day.',
    'solution.confidenceLevel': 'Confidence Level',
    'solution.sampleVaR': 'Sample Daily VaR',
    'solution.timeHorizon': 'Time Horizon',
    'solution.keyPoints': 'Know your maximum daily loss,Measure risk-adjusted returns,Identify portfolio vulnerabilities,Make informed decisions',
    
    // Sample Report
    'report.sampleReport': 'Sample Report',
    'report.title': 'See What You',
    'report.titleHighlight': 'Get',
    'report.subtitle': 'A professional-grade risk report for your portfolio',
    'report.portfolioValue': 'Portfolio Value',
    'report.dailyVaR': 'Daily VaR (95%)',
    'report.annualizedReturn': 'Annualized Return',
    'report.sharpeRatio': 'Sharpe Ratio',
    'report.cvar': 'CVaR (Tail Risk)',
    'report.cvarDesc': 'Expected loss in worst 5% of scenarios',
    'report.topHoldings': 'Top Holdings',
    'report.asset': 'Asset',
    'report.value': 'Value',
    'report.weight': 'Weight',
    'report.riskContribution': 'Risk Contribution',
    'report.disclaimer': 'Disclaimer: This analysis is for reference only and does not constitute investment advice.',
    'report.liveData': 'Live Data',
    'report.calcMethods': '3 Calculation Methods',
    'report.calcMethodsDesc': 'Historical, Parametric, Monte Carlo',
    'report.tailRisk': 'Tail Risk Analysis',
    'report.tailRiskDesc': 'CVaR for extreme scenarios',
    'report.riskTips': 'Risk Improvement Tips',
    'report.riskTipsDesc': 'Actionable recommendations',
    
    // Services
    'services.ourServices': 'Our Services',
    'services.title': 'Professional Risk Analytics',
    'services.titleHighlight': 'Tailored for You',
    'services.subtitle': 'Everything you need to understand, measure, and manage your portfolio risk',
    'services.readyToStart': 'Ready to get started with professional risk analysis?',
    'services.viewPricing': 'View Pricing Plans',
    
    // Service Items
    'service.1.title': 'Daily VaR Calculation',
    'service.1.desc': 'Know your maximum potential loss every day. Updated with latest market data using institutional-grade models.',
    'service.2.title': 'CVaR Tail Risk Analysis',
    'service.2.desc': 'Understand what happens in the worst-case scenarios. Beyond VaR, we measure the extreme tail events.',
    'service.3.title': 'Portfolio Stress Testing',
    'service.3.desc': 'See how your portfolio performs under market crashes, volatility spikes, and black swan events.',
    'service.4.title': 'Risk Improvement Recommendations',
    'service.4.desc': 'Get actionable advice to reduce risk while maintaining returns. Rebalancing suggestions included.',
    'service.5.title': 'Multi-Method Calculation',
    'service.5.desc': 'We use Historical Simulation, Parametric, and Monte Carlo methods for comprehensive analysis.',
    'service.6.title': 'Professional PDF Reports',
    'service.6.desc': 'Receive beautiful, detailed reports you can share with your advisor or keep for your records.',
    'service.learnMore': 'Learn more',
    'service.mostPopular': 'Most Popular',
    
    // Pricing
    'pricing.pricing': 'Pricing',
    'pricing.title': 'Simple,',
    'pricing.titleHighlight': 'Transparent',
    'pricing.title2': 'Pricing',
    'pricing.subtitle': 'Choose based on your portfolio size. Professional and Enterprise plans include an initial consultation.',
    'pricing.oneTimeFee': 'One-time fee',
    'pricing.included': '+ Initial Consultation',
    'pricing.bottomNote': 'All plans include secure data handling and professional analysis by FRM-certified experts.',
    
    // Plans
    'plan.starter.name': 'Starter',
    'plan.starter.stockRange': '< 10 stocks',
    'plan.starter.desc': 'Perfect for small portfolios',
    'plan.starter.cta': 'Get Started',
    
    'plan.professional.name': 'Professional',
    'plan.professional.stockRange': '10 - 30 stocks',
    'plan.professional.desc': 'For diversified portfolios',
    'plan.professional.cta': 'Get Started',
    'plan.professional.mostPopular': 'Most Popular',
    
    'plan.enterprise.name': 'Enterprise',
    'plan.enterprise.stockRange': '> 30 stocks',
    'plan.enterprise.desc': 'For complex portfolios',
    'plan.enterprise.cta': 'Get Started',
    
    // Plan Features
    'plan.feature.var': 'Complete VaR Analysis',
    'plan.feature.cvar': 'CVaR Tail Risk Assessment',
    'plan.feature.metrics': 'Portfolio Risk Metrics',
    'plan.feature.pdf': 'Professional PDF Report',
    'plan.feature.walkthrough': 'Initial Consultation',
    'plan.feature.stress': 'Stress Testing Report',
    'plan.feature.tips': 'Risk Improvement Tips',
    'plan.feature.advanced': 'Advanced Stress Testing',
    'plan.feature.plan': 'Detailed Risk Improvement Plan',
    'plan.feature.multi': 'Multi-Method Calculation',
    'plan.feature.support': 'Priority Support',
    
    // CTA
    'cta.ready': 'Ready to Know Your',
    'cta.realRisk': 'Real Risk?',
    'cta.subtitle': 'Scan the QR code to contact us for your free portfolio risk analysis. Includes an initial consultation.',
    'cta.emailPlaceholder': 'Enter your email',
    'cta.getFreeAnalysis': 'Get Free Analysis',
    'cta.takes2Min': 'Quick Response',
    'cta.noSpam': 'No spam, ever',
    'cta.walkthrough': '+ Initial Consultation',
    'cta.scanWechat': 'Scan to add on WeChat',
    'cta.scanWhatsapp': 'Scan to chat on WhatsApp',
    
    // Success Dialog
    'success.title': 'You\'re on the List!',
    'success.desc': 'Thank you for your interest. We\'ve received your email and will contact you at info@openminai.com within 24 hours to schedule your free portfolio analysis and initial consultation.',
    'success.gotIt': 'Got it!',
    
    // Footer
    'footer.tagline': 'Professional risk analytics for every investor. Measure, understand, and manage your portfolio risk with confidence.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.certified': 'Certified by',
    'footer.frm': 'FRM Professional',
    'footer.copyright': '© {year} KW-Consultancy. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    
    // Blog
    'nav.blog': 'Insights',
    'blog.insights': 'Market Insights',
    'blog.title': 'Latest',
    'blog.titleHighlight': 'Analysis',
    'blog.subtitle': 'Expert perspectives on risk management, market trends, and investment strategies to help you make informed decisions.',
    'blog.featured': 'Featured',
    'blog.readMore': 'Read More',
    'blog.moreComing': 'More insights coming soon. Subscribe to get notified.',
    'blog.getNotified': 'Get Notified',
  },
  zh: {
    // Navigation
    'nav.services': '服務',
    'nav.howItWorks': '運作方式',
    'nav.sampleReport': '樣本報告',
    'nav.pricing': '價格',
    'nav.getFreeAnalysis': '免費分析',
    
    // Hero
    'hero.trustedBy': '受超過 2,000 名投資者信賴',
    'hero.headline1': '了解您的風險',
    'hero.headline2': '在它了解您之前',
    'hero.subheadline': '為散戶投資者提供專業的 VaR 分析。停止猜測，開始使用機構級工具衡量您的投資組合風險。',
    'hero.ctaPrimary': '獲取免費風險分析',
    'hero.ctaSecondary': '了解運作方式',
    'hero.confidence': '置信度',
    'hero.users': '用戶',
    'hero.certified': '認證',
    'hero.scrollToExplore': '向下滾動探索',
    
    // Problem Section
    'problem.theProblem': '問題所在',
    'problem.title1': '為什麼',
    'problem.title2': '90%',
    'problem.title3': '的散戶投資者會虧錢',
    'problem.subtitle': '摧毀您投資組合的 5 個關鍵錯誤 — 以及如何避免它們',
    'problem.soundFamiliar': '聽起來很熟悉？您並不孤單。',
    'problem.discoverSolution': '發現解決方案',
    
    // Mistakes
    'mistake.1.title': '只看回報，忽視風險',
    'mistake.1.desc': '追逐高回報而不了解風險敞口。看起來有利可圖的東西可能會讓您血本無歸。',
    'mistake.2.title': '過度集中 = 全盤皆輸',
    'mistake.2.desc': '把太多資金放在一隻股票或一個行業。當它下跌時，一切都會跟著下跌。',
    'mistake.3.title': '沒有止損：小虧變大虧',
    'mistake.3.desc': '希望不是策略。沒有止損，5% 的虧損在您反應之前會變成 50%。',
    'mistake.4.title': '情緒交易，沒有紀律',
    'mistake.4.desc': '因 FOMO 而買入，因恐慌而賣出。情緒是回報的敵人。',
    'mistake.5.title': '甚至不知道自己的風險水平',
    'mistake.5.desc': '如果您無法衡量風險，就無法管理風險。大多數投資者都不知道自己面臨什麼風險。',
    
    // Solution Section
    'solution.theSolution': '解決方案',
    'solution.whatIsVaR': '什麼是 VaR？',
    'solution.subtitle': '風險價值：專業人士使用的指標',
    'solution.desc1': 'VaR（風險價值）告訴您在給定置信水平下，特定時間內投資組合可能損失的最大金額。',
    'solution.desc2': '例如：如果您的每日 VaR 為',
    'solution.desc3': '置信度為',
    'solution.desc4': '，這意味著有 95% 的概率您在單日內不會損失超過 ¥5,000。',
    'solution.confidenceLevel': '置信水平',
    'solution.sampleVaR': '每日 VaR 範例',
    'solution.timeHorizon': '時間範圍',
    'solution.keyPoints': '了解您的最大日內虧損,衡量風險調整後回報,識別投資組合漏洞,做出明智決策',
    
    // Sample Report
    'report.sampleReport': '樣本報告',
    'report.title': '看看您能',
    'report.titleHighlight': '獲得什麼',
    'report.subtitle': '為您的投資組合提供專業級風險報告',
    'report.portfolioValue': '投資組合價值',
    'report.dailyVaR': '每日 VaR (95%)',
    'report.annualizedReturn': '年化回報率',
    'report.sharpeRatio': '夏普比率',
    'report.cvar': 'CVaR (尾部風險)',
    'report.cvarDesc': '最壞 5% 情景下的預期虧損',
    'report.topHoldings': '主要持倉',
    'report.asset': '資產',
    'report.value': '價值',
    'report.weight': '權重',
    'report.riskContribution': '風險貢獻',
    'report.disclaimer': '免責聲明：本分析僅供參考，並不構成投資建議。',
    'report.liveData': '實時數據',
    'report.calcMethods': '3 種計算方法',
    'report.calcMethodsDesc': '歷史模擬法、參數法、蒙特卡洛法',
    'report.tailRisk': '尾部風險分析',
    'report.tailRiskDesc': '極端情景的 CVaR',
    'report.riskTips': '風險改善建議',
    'report.riskTipsDesc': '可行的建議',
    
    // Services
    'services.ourServices': '我們的服務',
    'services.title': '專業風險分析',
    'services.titleHighlight': '為您量身定制',
    'services.subtitle': '您理解、衡量和管理投資組合風險所需的一切',
    'services.readyToStart': '準備好開始使用專業風險分析了嗎？',
    'services.viewPricing': '查看價格方案',
    
    // Service Items
    'service.1.title': '每日 VaR 計算',
    'service.1.desc': '每天了解您的最大潛在虧損。使用機構級模型更新最新市場數據。',
    'service.2.title': 'CVaR 尾部風險分析',
    'service.2.desc': '了解最壞情況下會發生什麼。除了 VaR，我們還衡量極端尾部事件。',
    'service.3.title': '投資組合壓力測試',
    'service.3.desc': '看看您的投資組合在市場崩盤、波動率飆升和黑天鵝事件下的表現。',
    'service.4.title': '風險改善建議',
    'service.4.desc': '獲得可行的建議，在保持回報的同時降低風險。包括再平衡建議。',
    'service.5.title': '多方法計算',
    'service.5.desc': '我們使用歷史模擬法、參數法和蒙特卡洛法進行全面分析。',
    'service.6.title': '專業 PDF 報告',
    'service.6.desc': '收到精美、詳細的報告，您可以與您的顧問分享或保存記錄。',
    'service.learnMore': '了解更多',
    'service.mostPopular': '最受歡迎',
    
    // Pricing
    'pricing.pricing': '價格',
    'pricing.title': '簡單、',
    'pricing.titleHighlight': '透明',
    'pricing.title2': '的價格',
    'pricing.subtitle': '根據您的投資組合規模選擇。專業版和企業版包含初步諮詢。',
    'pricing.oneTimeFee': '一次性費用',
    'pricing.included': '+ 初步諮詢',
    'pricing.bottomNote': '所有方案都包括安全數據處理和 FRM 認證專家的專業分析。',
    
    // Plans
    'plan.starter.name': '入門版',
    'plan.starter.stockRange': '< 10 隻股票',
    'plan.starter.desc': '適合小型投資組合',
    'plan.starter.cta': '開始使用',
    
    'plan.professional.name': '專業版',
    'plan.professional.stockRange': '10 - 30 隻股票',
    'plan.professional.desc': '適合多元化投資組合',
    'plan.professional.cta': '開始使用',
    'plan.professional.mostPopular': '最受歡迎',
    
    'plan.enterprise.name': '企業版',
    'plan.enterprise.stockRange': '> 30 隻股票',
    'plan.enterprise.desc': '適合複雜投資組合',
    'plan.enterprise.cta': '開始使用',
    
    // Plan Features
    'plan.feature.var': '完整 VaR 分析',
    'plan.feature.cvar': 'CVaR 尾部風險評估',
    'plan.feature.metrics': '投資組合風險指標',
    'plan.feature.pdf': '專業 PDF 報告',
    'plan.feature.walkthrough': '初步諮詢',
    'plan.feature.stress': '壓力測試報告',
    'plan.feature.tips': '風險改善建議',
    'plan.feature.advanced': '高級壓力測試',
    'plan.feature.plan': '詳細風險改善計劃',
    'plan.feature.multi': '多方法計算',
    'plan.feature.support': '優先支持',
    
    // CTA
    'cta.ready': '準備好了解您的',
    'cta.realRisk': '真實風險了嗎？',
    'cta.subtitle': '掃描 QR code 聯繫我們，獲取免費的投資組合風險分析。包括初步諮詢。',
    'cta.emailPlaceholder': '輸入您的電郵',
    'cta.getFreeAnalysis': '獲取免費分析',
    'cta.takes2Min': '快速回覆',
    'cta.noSpam': '絕無垃圾郵件',
    'cta.walkthrough': '+ 初步諮詢',
    'cta.scanWechat': '掃描添加微信',
    'cta.scanWhatsapp': '掃描 WhatsApp 對話',
    
    // Success Dialog
    'success.title': '您已加入名單！',
    'success.desc': '感謝您的關注。我們已收到您的電郵，將在 24 小時內通過 info@openminai.com 與您聯繫，安排免費投資組合分析和初步諮詢。',
    'success.gotIt': '知道了！',
    
    // Footer
    'footer.tagline': '為每位投資者提供專業風險分析。充滿信心地衡量、理解和管理您的投資組合風險。',
    'footer.services': '服務',
    'footer.company': '公司',
    'footer.contact': '聯繫我們',
    'footer.certified': '認證機構',
    'footer.frm': 'FRM 專業人士',
    'footer.copyright': '© {year} KW-Consultancy。保留所有權利。',
    'footer.privacy': '隱私政策',
    'footer.terms': '服務條款',
    
    // Blog
    'nav.blog': '洞察',
    'blog.insights': '市場洞察',
    'blog.title': '最新',
    'blog.titleHighlight': '分析',
    'blog.subtitle': '風險管理、市場趨勢和投資策略的專業觀點，助您做出明智決策。',
    'blog.featured': '精選',
    'blog.readMore': '閱讀更多',
    'blog.moreComing': '更多洞察即將推出。訂閱以獲取通知。',
    'blog.getNotified': '獲取通知',
  },
  cn: {
    // Navigation
    'nav.services': '服务',
    'nav.howItWorks': '运作方式',
    'nav.sampleReport': '样本报告',
    'nav.pricing': '价格',
    'nav.getFreeAnalysis': '免费分析',
    
    // Hero
    'hero.trustedBy': '受超过 2,000 名投资者信赖',
    'hero.headline1': '了解您的风险',
    'hero.headline2': '在它了解您之前',
    'hero.subheadline': '为散户投资者提供专业的 VaR 分析。停止猜测，开始使用机构级工具衡量您的投资组合风险。',
    'hero.ctaPrimary': '获取免费风险分析',
    'hero.ctaSecondary': '了解运作方式',
    'hero.confidence': '置信度',
    'hero.users': '用户',
    'hero.certified': '认证',
    'hero.scrollToExplore': '向下滚动探索',
    
    // Problem Section
    'problem.theProblem': '问题所在',
    'problem.title1': '为什么',
    'problem.title2': '90%',
    'problem.title3': '的散户投资者会亏钱',
    'problem.subtitle': '摧毁您投资组合的 5 个关键错误 — 以及如何避免它们',
    'problem.soundFamiliar': '听起来很熟悉？您并不孤单。',
    'problem.discoverSolution': '发现解决方案',
    
    // Mistakes
    'mistake.1.title': '只看回报，忽视风险',
    'mistake.1.desc': '追逐高回报而不了解风险敞口。看起来有利可图的东西可能会让您血本无归。',
    'mistake.2.title': '过度集中 = 全盘皆输',
    'mistake.2.desc': '把太多资金放在一只股票或一个行业。当它下跌时，一切都会跟着下跌。',
    'mistake.3.title': '没有止损：小亏变大亏',
    'mistake.3.desc': '希望不是策略。没有止损，5% 的亏损在您反应之前会变成 50%。',
    'mistake.4.title': '情绪交易，没有纪律',
    'mistake.4.desc': '因 FOMO 而买入，因恐慌而卖出。情绪是回报的敌人。',
    'mistake.5.title': '甚至不知道自己的风险水平',
    'mistake.5.desc': '如果您无法衡量风险，就无法管理风险。大多数投资者都不知道自己面临什么风险。',
    
    // Solution Section
    'solution.theSolution': '解决方案',
    'solution.whatIsVaR': '什么是 VaR？',
    'solution.subtitle': '风险价值：专业人士使用的指标',
    'solution.desc1': 'VaR（风险价值）告诉您在给定置信水平下，特定时间内投资组合可能损失的最大金额。',
    'solution.desc2': '例如：如果您的每日 VaR 为',
    'solution.desc3': '置信度为',
    'solution.desc4': '，这意味着有 95% 的概率您在单日内不会损失超过 ¥5,000。',
    'solution.confidenceLevel': '置信水平',
    'solution.sampleVaR': '每日 VaR 示例',
    'solution.timeHorizon': '时间范围',
    'solution.keyPoints': '了解您的最大日内亏损,衡量风险调整后回报,识别投资组合漏洞,做出明智决策',
    
    // Sample Report
    'report.sampleReport': '样本报告',
    'report.title': '看看您能',
    'report.titleHighlight': '获得什么',
    'report.subtitle': '为您的投资组合提供专业级风险报告',
    'report.portfolioValue': '投资组合价值',
    'report.dailyVaR': '每日 VaR (95%)',
    'report.annualizedReturn': '年化回报率',
    'report.sharpeRatio': '夏普比率',
    'report.cvar': 'CVaR (尾部风险)',
    'report.cvarDesc': '最坏 5% 情景下的预期亏损',
    'report.topHoldings': '主要持仓',
    'report.asset': '资产',
    'report.value': '价值',
    'report.weight': '权重',
    'report.riskContribution': '风险贡献',
    'report.disclaimer': '免责声明：本分析仅供参考，并不构成投资建议。',
    'report.liveData': '实时数据',
    'report.calcMethods': '3 种计算方法',
    'report.calcMethodsDesc': '历史模拟法、参数法、蒙特卡洛法',
    'report.tailRisk': '尾部风险分析',
    'report.tailRiskDesc': '极端情景的 CVaR',
    'report.riskTips': '风险改善建议',
    'report.riskTipsDesc': '可行的建议',
    
    // Services
    'services.ourServices': '我们的服务',
    'services.title': '专业风险分析',
    'services.titleHighlight': '为您量身定制',
    'services.subtitle': '您理解、衡量和管理投资组合风险所需的一切',
    'services.readyToStart': '准备好开始使用专业风险分析了吗？',
    'services.viewPricing': '查看价格方案',
    
    // Service Items
    'service.1.title': '每日 VaR 计算',
    'service.1.desc': '每天了解您的最大潜在亏损。使用机构级模型更新最新市场数据。',
    'service.2.title': 'CVaR 尾部风险分析',
    'service.2.desc': '了解最坏情况下会发生什么。除了 VaR，我们还衡量极端尾部事件。',
    'service.3.title': '投资组合压力测试',
    'service.3.desc': '看看您的投资组合在市场崩盘、波动率飙升和黑天鹅事件下的表现。',
    'service.4.title': '风险改善建议',
    'service.4.desc': '获得可行的建议，在保持回报的同时降低风险。包括再平衡建议。',
    'service.5.title': '多方法计算',
    'service.5.desc': '我们使用历史模拟法、参数法和蒙特卡洛法进行全面分析。',
    'service.6.title': '专业 PDF 报告',
    'service.6.desc': '收到精美、详细的报告，您可以与您的顾问分享或保存记录。',
    'service.learnMore': '了解更多',
    'service.mostPopular': '最受欢迎',
    
    // Pricing
    'pricing.pricing': '价格',
    'pricing.title': '简单、',
    'pricing.titleHighlight': '透明',
    'pricing.title2': '的价格',
    'pricing.subtitle': '根据您的投资组合规模选择。专业版和企业版包含初步咨询。',
    'pricing.oneTimeFee': '一次性费用',
    'pricing.included': '+ 初步咨询',
    'pricing.bottomNote': '所有方案都包括安全数据处理和 FRM 认证专家的专业分析。',
    
    // Plans
    'plan.starter.name': '入门版',
    'plan.starter.stockRange': '< 10 只股票',
    'plan.starter.desc': '适合小型投资组合',
    'plan.starter.cta': '开始使用',
    
    'plan.professional.name': '专业版',
    'plan.professional.stockRange': '10 - 30 只股票',
    'plan.professional.desc': '适合多元化投资组合',
    'plan.professional.cta': '开始使用',
    'plan.professional.mostPopular': '最受欢迎',
    
    'plan.enterprise.name': '企业版',
    'plan.enterprise.stockRange': '> 30 只股票',
    'plan.enterprise.desc': '适合复杂投资组合',
    'plan.enterprise.cta': '开始使用',
    
    // Plan Features
    'plan.feature.var': '完整 VaR 分析',
    'plan.feature.cvar': 'CVaR 尾部风险评估',
    'plan.feature.metrics': '投资组合风险指标',
    'plan.feature.pdf': '专业 PDF 报告',
    'plan.feature.walkthrough': '初步咨询',
    'plan.feature.stress': '压力测试报告',
    'plan.feature.tips': '风险改善建议',
    'plan.feature.advanced': '高级压力测试',
    'plan.feature.plan': '详细风险改善计划',
    'plan.feature.multi': '多方法计算',
    'plan.feature.support': '优先支持',
    
    // CTA
    'cta.ready': '准备好了解您的',
    'cta.realRisk': '真实风险了吗？',
    'cta.subtitle': '扫描 QR code 联系我们，获取免费的投资组合风险分析。包括初步咨询。',
    'cta.emailPlaceholder': '输入您的电邮',
    'cta.getFreeAnalysis': '获取免费分析',
    'cta.takes2Min': '快速回复',
    'cta.noSpam': '绝无垃圾邮件',
    'cta.walkthrough': '+ 初步咨询',
    'cta.scanWechat': '扫描添加微信',
    'cta.scanWhatsapp': '扫描 WhatsApp 对话',
    
    // Success Dialog
    'success.title': '您已加入名单！',
    'success.desc': '感谢您的关注。我们已收到您的电邮，将在 24 小时内通过 info@openminai.com 与您联系，安排免费投资组合分析和初步咨询。',
    'success.gotIt': '知道了！',
    
    // Footer
    'footer.tagline': '为每位投资者提供专业风险分析。充满信心地衡量、理解和管理您的投资组合风险。',
    'footer.services': '服务',
    'footer.company': '公司',
    'footer.contact': '联系我们',
    'footer.certified': '认证机构',
    'footer.frm': 'FRM 专业人士',
    'footer.copyright': '© {year} KW-Consultancy。保留所有权利。',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
    
    // Blog
    'nav.blog': '洞察',
    'blog.insights': '市场洞察',
    'blog.title': '最新',
    'blog.titleHighlight': '分析',
    'blog.subtitle': '风险管理、市场趋势和投资策略的专业观点，助您做出明智决策。',
    'blog.featured': '精选',
    'blog.readMore': '阅读更多',
    'blog.moreComing': '更多洞察即将推出。订阅以获取通知。',
    'blog.getNotified': '获取通知',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to Traditional Chinese (zh)
  const [language, setLanguage] = useState<Language>('zh');

  const t = useCallback((key: string): string => {
    const translation = translations[language][key as keyof typeof translations.en];
    return translation || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
