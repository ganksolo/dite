import React, { useState } from 'react';
import './Section15.css';

const Section15 = () => {
    const [activeTab, setActiveTab] = useState('纺织面料');

    const categories = [
        "动物绒", "植物绒", "粗纺", "精纺",
        "纺织面料", "针织面料", "功能性面料", "OEM代工"
    ];

    // List of available image numbers between 44 and 87 based on the file system
    const availableImageNumbers = [
        44, 45, 46, 47, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 59,
        60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 73, 74, 75,
        76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87
    ];

    // Generating up to 45 items total (5 rows of 9 items).
    // The first part of the array will be the actual available image numbers.
    // The rest will be padded with null/undefined to act as placeholders.
    const gridItems = Array.from({ length: 45 }, (_, i) => {
        return availableImageNumbers[i] || null;
    });

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
                {gridItems.map((imgNum, index) => {
                    const imgUrl = imgNum ? new URL(`../assets/imgs/image ${imgNum}.png`, import.meta.url).href : null;
                    return (
                        <div
                            key={index}
                            className="s15-brand-item"
                            style={imgNum ? {
                                backgroundImage: `url("${imgUrl}")`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: '#fff' // Remove default #fafafa to make images cleaner if transparent
                            } : {}}
                        >
                            {/* If no image number exists, render the original placeholder */}
                            {!imgNum && <div className="s15-brand-logo-placeholder"></div>}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Section15;
