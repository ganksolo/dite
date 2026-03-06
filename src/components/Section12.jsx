import React, { useState } from 'react';
import './Section12.css';

const Section12 = () => {
    const tabs = ["内蒙古羊绒", "新疆羊绒", "新疆棉", "功能性面料"];
    const [activeTab, setActiveTab] = useState(0);

    // 15 product items
    const products = Array(15).fill({
        name: "Functional  S/S 26 -001",
    });

    return (
        <section className="section12-container">
            {/* Hero Banner Area */}
            <div className="s12-hero">
                {/* Background image placeholder */}
                <div className="s12-hero-bg"></div>
                {/* Semi-transparent overlay to ensure text readability */}
                <div className="s12-hero-overlay"></div>

                {/* Hero Content */}
                <div className="s12-hero-content">
                    <span className="s12-hero-brand">MÉDITE ORIGIN</span>
                    <h2 className="s12-hero-title">溯源上游环节，不断挑战成本。</h2>
                    <p className="s12-hero-desc">
                        MÉDITE 源产地计划，选用内蒙古和新疆顶级羊绒，<br />
                        并联合功能性面料研发实验室打造专属于 MÉDITE 用户的私享面料尖货。
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="s12-main-content">
                {/* Tabs Navigation */}
                <div className="s12-tabs-container">
                    <div className="s12-tabs">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                className={`s12-tab-btn ${activeTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="s12-product-grid">
                    {products.map((product, index) => (
                        <div key={index} className="s12-product-card">
                            <div className="s12-product-img-placeholder">
                                {/* Search/Magnify icon typically placed here in mockups */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="1.5" />
                                    <path d="M20 20L16 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M11 8V14M8 11H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <p className="s12-product-name">{product.name}</p>
                        </div>
                    ))}
                </div>

                {/* Browse More Button */}
                <button className="s12-browse-btn">
                    浏览更多产品
                </button>
            </div>
        </section>
    );
};

export default Section12;
