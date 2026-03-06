import React from 'react';
import './Section3.css';

const Section3 = () => {
    return (
        <section className="section3-container">
            {/* Title Area */}
            <div className="s3-title-area">
                <div className="s3-subtitle">MÉDITE 安全</div>
                <h2 className="s3-main-heading">数据安全，源于架构可控。</h2>
                <p className="s3-description">
                    MÉDITE SaaS&Ai 为用户提供本地化部署+云端混合数据应用双重保障。<br />
                    从架构源头守护用户数据安全，让高效与安心同步实现。
                </p>
            </div>

            {/* Grid Content */}
            <div className="s3-grid-container">

                {/* Row 1 */}
                <div className="s3-grid-row">
                    <div className="s3-card">
                        <div className="s3-card-icon">
                            {/* Cloud / Sync Icon Placeholder */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
                        </div>
                        <p className="s3-card-text">本地化部署+云端混合数据应用，兼顾安全与效率;</p>
                    </div>
                    <div className="s3-card">
                        <div className="s3-card-icon">
                            {/* Laptop Icon Placeholder */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line></svg>
                        </div>
                        <p className="s3-card-text">核心数据本地存储，敏感信息不出本地域从源头保障数据主权;</p>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="s3-grid-row">
                    <div className="s3-card">
                        <div className="s3-card-icon">
                            {/* Cloud Alert Icon Placeholder */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                        </div>
                        <p className="s3-card-text">云端仅承载轻量化协同能力，关键业务数据不上云;</p>
                    </div>
                    <div className="s3-card">
                        <div className="s3-card-icon">
                            {/* Key Icon Placeholder */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
                        </div>
                        <p className="s3-card-text">全链路数据均采用加密传输与存储，严防泄露、篡改与非法访问;</p>
                    </div>
                </div>

                {/* Row 3 */}
                <div className="s3-grid-row">
                    <div className="s3-card">
                        <div className="s3-card-icon">
                            {/* User Identity / Shield ID Icon Placeholder */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <p className="s3-card-text">精细化权限管控，分级访问，操作可追溯，安全可审计;</p>
                    </div>
                    <div className="s3-card">
                        <div className="s3-card-icon">
                            {/* Network Node Icon Placeholder */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                        </div>
                        <p className="s3-card-text">混合架构灵活适配，支持私有化部署，满足企业合规要求;</p>
                    </div>
                </div>

                {/* Row 4 */}
                <div className="s3-grid-row">
                    <div className="s3-card">
                        <div className="s3-card-icon">
                            {/* Lock Circle / Privacy Icon Placeholder */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        </div>
                        <p className="s3-card-text">数据自主可控，企业完全掌握数据所有权与管理权;</p>
                    </div>
                    <div className="s3-card">
                        <div className="s3-card-icon">
                            {/* Shield Lock Icon Placeholder */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        </div>
                        <p className="s3-card-text">以安全架构为底座，全方位守护用户数据隐私与安全。</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Section3;
