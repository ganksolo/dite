import React from 'react';
import './Section7.css';

const Section7 = () => {
    return (
        <section className="section7-container">
            {/* Header Area */}
            <div className="s7-header">
                <h2 className="s7-title">个人用户产品</h2>
                <p className="s7-subtitle">用 Ai，让供应链具备服务个人的能力。</p>
            </div>

            {/* Main Content Area */}
            <div className="s7-main-content">

                {/* Hero Banner - text on the LEFT side */}
                <div className="s7-hero-banner">
                    <div className="s7-hero-overlay">
                        <div className="s7-hero-text-content">
                            <h2 className="s7-hero-title">为了你的独一无二，<br />这一刻我们紧密协同。</h2>
                            <p className="s7-hero-desc">
                                专为个人用户推出的时尚应用，<br />
                                兼具私人裁缝和着装顾问等多维度 Ai 服务功能。
                            </p>
                            <p className="s7-hero-sub">将于2026年夏季 推出</p>

                            {/* Device Icons */}
                            <div className="s7-hero-devices">
                                <svg width="19" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                <svg width="13" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                            </div>

                            {/* Action Button */}
                            <button className="s7-hero-btn">了解更多</button>
                        </div>
                    </div>
                </div>

                {/* Info Cards Grid */}
                <div className="s7-cards-container">

                    <div className="s7-card">
                        <div className="s7-card-header">
                            <div className="s7-card-icon"></div>
                            <div className="s7-card-add">
                                <svg width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#007bff"></circle><line x1="12" y1="8" x2="12" y2="16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"></line><line x1="8" y1="12" x2="16" y2="12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"></line></svg>
                            </div>
                        </div>
                        <div className="s7-card-body">
                            <h4 className="s7-card-title">产品演示</h4>
                            <p className="s7-card-desc">通过视频了解产品应用场景与功能</p>
                        </div>
                    </div>

                    <div className="s7-card">
                        <div className="s7-card-header">
                            <div className="s7-card-icon"></div>
                            <div className="s7-card-add">
                                <svg width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#007bff"></circle><line x1="12" y1="8" x2="12" y2="16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"></line><line x1="8" y1="12" x2="16" y2="12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"></line></svg>
                            </div>
                        </div>
                        <div className="s7-card-body">
                            <h4 className="s7-card-title">用户手册</h4>
                            <p className="s7-card-desc">在线查看或下载产品用户手册</p>
                        </div>
                    </div>

                    <div className="s7-card">
                        <div className="s7-card-header">
                            <div className="s7-card-icon"></div>
                            <div className="s7-card-add">
                                <svg width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#007bff"></circle><line x1="12" y1="8" x2="12" y2="16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"></line><line x1="8" y1="12" x2="16" y2="12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"></line></svg>
                            </div>
                        </div>
                        <div className="s7-card-body">
                            <h4 className="s7-card-title">预约购买</h4>
                            <p className="s7-card-desc">通过在线网站提交产品购买申请表</p>
                        </div>
                    </div>

                    <div className="s7-card">
                        <div className="s7-card-header">
                            <div className="s7-card-icon"></div>
                            <div className="s7-card-add">
                                <svg width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#007bff"></circle><line x1="12" y1="8" x2="12" y2="16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"></line><line x1="8" y1="12" x2="16" y2="12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"></line></svg>
                            </div>
                        </div>
                        <div className="s7-card-body">
                            <h4 className="s7-card-title">迭代计划</h4>
                            <p className="s7-card-desc">了解平台及产品本年内的功能迭代计划</p>
                        </div>
                    </div>

                    <div className="s7-card">
                        <div className="s7-card-header">
                            <div className="s7-card-icon"></div>
                            <div className="s7-card-add">
                                <svg width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#007bff"></circle><line x1="12" y1="8" x2="12" y2="16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"></line><line x1="8" y1="12" x2="16" y2="12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"></line></svg>
                            </div>
                        </div>
                        <div className="s7-card-body">
                            <h4 className="s7-card-title">咨询客服</h4>
                            <p className="s7-card-desc">在线联络并咨询客服人员</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Section7;
