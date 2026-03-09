import React from 'react';
import './Section10.css';

const Section10 = () => {
    return (
        <section className="section10-container">
            {/* Centered Header + CTAs */}
            <div className="s10-content">
                {/* Brand + tagline + desc */}
                <div className="s10-header">
                    <span className="s10-brand">MÉDITE Ai</span>
                    <div className="s10-text-group">
                        <h2 className="s10-tagline">一句话，包会的。</h2>
                        <p className="s10-desc">
                            用 Ai，让供应链具备服务个人的能力。<br />
                            专为个人用户推出的时尚应用，兼具私人裁缝和着装顾问等多维度 Ai 服务功能。
                        </p>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="s10-cta-row">
                    <button className="s10-btn">获取微信小程序</button>
                    <button className="s10-btn">获取免费App</button>
                </div>
            </div>

            {/* Phone Mockup Fan Spread */}
            <div className="s10-mockup-area">
                <div className="s10-phones"></div>
            </div>
        </section>
    );
};

export default Section10;
