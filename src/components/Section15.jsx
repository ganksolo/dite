import React, { useState } from 'react';
import './Section15.css';

const Section15 = () => {
    const [activeTab, setActiveTab] = useState('纺织面料');

    const categories = [
        "动物绒", "植物绒", "粗纺", "精纺",
        "纺织面料", "针织面料", "功能性面料", "OEM代工"
    ];

    // Generating 45 placeholders (5 rows of 9 items according to the design mockup)
    const brandPlaceholders = Array.from({ length: 45 }, (_, i) => i + 1);

    return (
        <section className="section15-container">
            {/* Header / Tabs Area */}
            <div className="s15-header-container">
                <h2 className="s15-title">合作品牌</h2>
                <div className="s15-tabs">
                    {categories.map((category, idx) => (
                        <div
                            key={idx}
                            className={`s15-tab ${activeTab === category ? 'active' : ''}`}
                            onClick={() => setActiveTab(category)}
                        >
                            <span>{category}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Brands Grid Area */}
            <div className="s15-brands-grid">
                {brandPlaceholders.map((num) => (
                    <div key={num} className="s15-brand-item">
                        {/* Placeholder for brand logo image */}
                        <div className="s15-brand-logo-placeholder"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Section15;
