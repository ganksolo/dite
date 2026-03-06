import React from 'react';
import './Section16.css';

const Section16 = () => {
    // Generate 12 placeholders for the store grid
    const storePlaceholders = Array.from({ length: 12 }, (_, i) => i + 1);

    return (
        <section className="section16-container">
            {/* Header Content Wrapper */}
            <div className="s16-content-wrapper">
                <div className="s16-header-wrapper">
                    <div className="s16-header">
                        <h2 className="s16-title">服务门店</h2>
                    </div>

                    {/* Search / Location Bar Placeholder */}
                    <div className="s16-search-bar">
                        <span className="s16-search-text">MÉDITE 需要获取你的位置来来搜索最近的门店。</span>
                    </div>
                </div>

                {/* Grid */}
                <div className="s16-grid">
                    {storePlaceholders.map((num) => (
                        <div key={num} className="s16-store-card">
                            <div className="s16-store-img-placeholder"></div>
                            {/* Text content exists in structure but is hidden/disabled in the mockup 
                                We leave space setup in CSS if they want to enable text later */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section16;
