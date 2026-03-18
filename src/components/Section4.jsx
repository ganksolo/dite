import React from 'react';
import './Section4.css';

const Section4 = () => {
    return (
        <section className="section4-container">
            {/* Header Area */}
            <div className="s4-header">
                <h2 className="s4-company">MÉDITE SaaS&Ai</h2>
                <h1 className="s4-title">赋能行业，「标准化」与「个性化」完美融合。</h1>
                <p className="s4-description">
                    MÉDITE 销售团队与产品团队相互支持，在运营中规范行业标准，<br />
                    并通过标准化版本迭代降纬满足个性化应用需求。
                </p>
            </div>

            {/* Main Content Area */}
            <div className="s4-main-content">

                {/* Top Banner Toolbar */}
                <div className="s4-toolbar">
                    <span className="s4-toolbar-title">定制门店解决方案产品</span>
                    <span className="s4-toolbar-subtitle">来自高级定制门店，为高级定制而定制。</span>
                </div>

                {/* Hero Banner Area */}
                <div className="s4-hero-banner">
                    {/* We use a CSS gradient as a placeholder for the tailor background image */}
                    <div className="s4-hero-overlay">
                        <div className="s4-hero-text-content">
                            <h2 className="s4-hero-title">以专业、应万变，<br />向标准致敬。</h2>
                            <p className="s4-hero-desc">
                                专为高级定制门店应用场景与实际需求定制开发，<br />
                                以快速实现智能数字化经营升级。
                            </p>
                            <p className="s4-hero-sub">定制门店版本 现已推出</p>

                            {/* Devices Icons Row */}
                            <div className="s4-hero-devices">
                                <svg width="19" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                <svg width="13" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                                <svg width="13" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                            </div>

                            {/* Action Button */}
                            <button className="s4-hero-btn">了解更多</button>
                        </div>
                    </div>
                </div>

                {/* Info Cards Grid */}
                <div className="s4-cards-container">

                    <div className="s4-card">
                        <div className="s4-card-header">
                            <div className="s4-card-icon"></div>
                            <div className="s4-card-add">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" fill="#007bff" stroke="none"></circle><line x1="12" y1="8" x2="12" y2="16" stroke="#fff"></line><line x1="8" y1="12" x2="16" y2="12" stroke="#fff"></line></svg>
                            </div>
                        </div>
                        <div className="s4-card-body">
                            <h4 className="s4-card-title">产品演示</h4>
                            <p className="s4-card-desc">通过视频了解产品应用场景与功能</p>
                        </div>
                    </div>

                    <div className="s4-card">
                        <div className="s4-card-header">
                            <div className="s4-card-icon"></div>
                            <div className="s4-card-add">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" fill="#007bff" stroke="none"></circle><line x1="12" y1="8" x2="12" y2="16" stroke="#fff"></line><line x1="8" y1="12" x2="16" y2="12" stroke="#fff"></line></svg>
                            </div>
                        </div>
                        <div className="s4-card-body">
                            <h4 className="s4-card-title">用户手册</h4>
                            <p className="s4-card-desc">在线查看或下载产品用户手册</p>
                        </div>
                    </div>

                    <div className="s4-card">
                        <div className="s4-card-header">
                            <div className="s4-card-icon"></div>
                            <div className="s4-card-add">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" fill="#007bff" stroke="none"></circle><line x1="12" y1="8" x2="12" y2="16" stroke="#fff"></line><line x1="8" y1="12" x2="16" y2="12" stroke="#fff"></line></svg>
                            </div>
                        </div>
                        <div className="s4-card-body">
                            <h4 className="s4-card-title">预约购买</h4>
                            <p className="s4-card-desc">通过在线网站提交产品购买申请表</p>
                        </div>
                    </div>

                    <div className="s4-card">
                        <div className="s4-card-header">
                            <div className="s4-card-icon"></div>
                            <div className="s4-card-add">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" fill="#007bff" stroke="none"></circle><line x1="12" y1="8" x2="12" y2="16" stroke="#fff"></line><line x1="8" y1="12" x2="16" y2="12" stroke="#fff"></line></svg>
                            </div>
                        </div>
                        <div className="s4-card-body">
                            <h4 className="s4-card-title">迭代计划</h4>
                            <p className="s4-card-desc">了解平台及产品本年内的功能迭代计划</p>
                        </div>
                    </div>

                    <div className="s4-card">
                        <div className="s4-card-header">
                            <div className="s4-card-icon"></div>
                            <div className="s4-card-add">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" fill="#007bff" stroke="none"></circle><line x1="12" y1="8" x2="12" y2="16" stroke="#fff"></line><line x1="8" y1="12" x2="16" y2="12" stroke="#fff"></line></svg>
                            </div>
                        </div>
                        <div className="s4-card-body">
                            <h4 className="s4-card-title">咨询客服</h4>
                            <p className="s4-card-desc">在线联络并咨询客服人员</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Section4;
