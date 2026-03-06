import React from 'react';
import './Section5.css';

const Section5 = () => {
    return (
        <section className="section5-container">
            {/* Header Area */}
            <div className="s5-header">
                <h2 className="s5-title">面料品牌/经销商产品</h2>
                <p className="s5-description">随平台发展不断扩张的销售渠道。</p>
            </div>

            {/* Main Content Area */}
            <div className="s5-main-content">

                {/* Hero Banner Area */}
                <div className="s5-hero-banner">
                    {/* Using a sophisticated linear gradient as image placeholder for the fabric background */}
                    <div className="s5-hero-overlay">
                        <div className="s5-hero-text-content">
                            <h2 className="s5-hero-title">让我们的能力，<br />成为你的实力。</h2>
                            <p className="s5-hero-desc">
                                针对面料经销商以及面料生产商免费开放，<br />
                                支持品牌唯一化入驻。
                            </p>
                            <p className="s5-hero-sub">面料品牌/经销商版本  现已推出</p>

                            {/* Devices Icons Row */}
                            <div className="s5-hero-devices">
                                <svg width="19" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                <svg width="13" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                                <svg width="7" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                            </div>

                            {/* Action Button */}
                            <button className="s5-hero-btn">了解更多</button>
                        </div>
                    </div>
                </div>

                {/* Info Cards Grid */}
                <div className="s5-cards-container">

                    <div className="s5-card">
                        <div className="s5-card-header">
                            <div className="s5-card-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                            </div>
                            <div className="s5-card-add">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" fill="#007bff" stroke="none"></circle><line x1="12" y1="8" x2="12" y2="16" stroke="#fff"></line><line x1="8" y1="12" x2="16" y2="12" stroke="#fff"></line></svg>
                            </div>
                        </div>
                        <div className="s5-card-body">
                            <h4 className="s5-card-title">产品演示</h4>
                            <p className="s5-card-desc">通过视频了解产品应用场景与功能</p>
                        </div>
                    </div>

                    <div className="s5-card">
                        <div className="s5-card-header">
                            <div className="s5-card-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><polyline points="9 15 12 18 15 15"></polyline></svg>
                            </div>
                            <div className="s5-card-add">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" fill="#007bff" stroke="none"></circle><line x1="12" y1="8" x2="12" y2="16" stroke="#fff"></line><line x1="8" y1="12" x2="16" y2="12" stroke="#fff"></line></svg>
                            </div>
                        </div>
                        <div className="s5-card-body">
                            <h4 className="s5-card-title">用户手册</h4>
                            <p className="s5-card-desc">在线查看或下载产品用户手册</p>
                        </div>
                    </div>

                    <div className="s5-card">
                        <div className="s5-card-header">
                            <div className="s5-card-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                            </div>
                            <div className="s5-card-add">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" fill="#007bff" stroke="none"></circle><line x1="12" y1="8" x2="12" y2="16" stroke="#fff"></line><line x1="8" y1="12" x2="16" y2="12" stroke="#fff"></line></svg>
                            </div>
                        </div>
                        <div className="s5-card-body">
                            <h4 className="s5-card-title">预约购买</h4>
                            <p className="s5-card-desc">通过在线网站提交产品购买申请表</p>
                        </div>
                    </div>

                    <div className="s5-card">
                        <div className="s5-card-header">
                            <div className="s5-card-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                            </div>
                            <div className="s5-card-add">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" fill="#007bff" stroke="none"></circle><line x1="12" y1="8" x2="12" y2="16" stroke="#fff"></line><line x1="8" y1="12" x2="16" y2="12" stroke="#fff"></line></svg>
                            </div>
                        </div>
                        <div className="s5-card-body">
                            <h4 className="s5-card-title">迭代计划</h4>
                            <p className="s5-card-desc">了解平台及产品本年内的功能迭代计划</p>
                        </div>
                    </div>

                    <div className="s5-card">
                        <div className="s5-card-header">
                            <div className="s5-card-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="9" y1="10" x2="15" y2="10"></line><line x1="12" y1="7" x2="12" y2="13"></line></svg>
                            </div>
                            <div className="s5-card-add">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" fill="#007bff" stroke="none"></circle><line x1="12" y1="8" x2="12" y2="16" stroke="#fff"></line><line x1="8" y1="12" x2="16" y2="12" stroke="#fff"></line></svg>
                            </div>
                        </div>
                        <div className="s5-card-body">
                            <h4 className="s5-card-title">咨询客服</h4>
                            <p className="s5-card-desc">在线联络并咨询客服人员</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Section5;
