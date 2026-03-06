import React from 'react';
import './Section19.css';

const highlightCards = [
    {
        title: "新闻",
        desc: "持续关注 MÉDITE 的最新新闻资讯，或许能找到和我一起天马行空的可能。"
    },
    {
        title: "合作",
        desc: "MÉDITE 致力于搭建以 SaaS 为基础平台的开放式产业生态，从而与客户一起探索更多业务维度与可能性。"
    },
    {
        title: "研发",
        desc: "MÉDITE 不断与全球顶尖设计团队合作，将最新的技术与纺织原料相融合，并提供给市场与消费者。"
    }
];

const newsGridItems = Array(8).fill({
    date: "2024年11月14日",
    desc: "持续关注 MÉDITE 最新新闻资讯，或许能找到和我一起天马行空的可能。"
});

const Section19 = () => {
    return (
        <section className="section19-container">
            {/* Header */}
            <div className="s19-header">
                <h2 className="s19-title">服务门店</h2>
                <div className="s19-notification-pill">
                    MÉDITE 需要你的许可来<a href="#notify" className="s19-link">启用桌面通知</a>，以便在有新文章发布时向你推送通知。
                </div>
            </div>

            {/* Highlights Row (3 columns) */}
            <div className="s19-highlights-row">
                {highlightCards.map((card, idx) => (
                    <div key={idx} className="s19-highlight-card">
                        <div className="s19-hl-title">{card.title}</div>
                        <div className="s19-hl-img-placeholder"></div>
                        <div className="s19-hl-desc">{card.desc}</div>
                    </div>
                ))}
            </div>

            {/* News Grid (2 columns) */}
            <div className="s19-news-grid">
                {newsGridItems.map((item, idx) => (
                    <div key={idx} className="s19-news-card">
                        <div className="s19-news-img-placeholder"></div>
                        <div className="s19-news-content">
                            <span className="s19-news-date">{item.date}</span>
                            <p className="s19-news-desc">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Button */}
            <button className="s19-history-btn">翻阅历史资讯</button>
        </section>
    );
};

export default Section19;
