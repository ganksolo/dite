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
                        <div className="s3-card-icon s3-icon-1"></div>
                        <p className="s3-card-text">本地化部署+云端混合数据应用，兼顾安全与效率;</p>
                    </div>
                    <div className="s3-card">
                        <div className="s3-card-icon s3-icon-2"></div>
                        <p className="s3-card-text">核心数据本地存储，敏感信息不出本地域从源头保障数据主权;</p>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="s3-grid-row">
                    <div className="s3-card">
                        <div className="s3-card-icon s3-icon-3"></div>
                        <p className="s3-card-text">云端仅承载轻量化协同能力，关键业务数据不上云;</p>
                    </div>
                    <div className="s3-card">
                        <div className="s3-card-icon s3-icon-4"></div>
                        <p className="s3-card-text">全链路数据均采用加密传输与存储，严防泄露、篡改与非法访问;</p>
                    </div>
                </div>

                {/* Row 3 */}
                <div className="s3-grid-row">
                    <div className="s3-card">
                        <div className="s3-card-icon s3-icon-5"></div>
                        <p className="s3-card-text">精细化权限管控，分级访问，操作可追溯，安全可审计;</p>
                    </div>
                    <div className="s3-card">
                        <div className="s3-card-icon s3-icon-6"></div>
                        <p className="s3-card-text">混合架构灵活适配，支持私有化部署，满足企业合规要求;</p>
                    </div>
                </div>

                {/* Row 4 */}
                <div className="s3-grid-row">
                    <div className="s3-card">
                        <div className="s3-card-icon s3-icon-7"></div>
                        <p className="s3-card-text">数据自主可控，企业完全掌握数据所有权与管理权;</p>
                    </div>
                    <div className="s3-card">
                        <div className="s3-card-icon s3-icon-8"></div>
                        <p className="s3-card-text">以安全架构为底座，全方位守护用户数据隐私与安全。</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Section3;
