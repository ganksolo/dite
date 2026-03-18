import React from 'react';
import './Section8.css';

const Section8 = () => {
    return (
        <section className="section8-container">
            {/* Header Area */}
            <div className="s8-header">
                <h2 className="s8-title">OEM代工厂产品</h2>
                <p className="s8-subtitle">随平台发展不断扩张的订单渠道。</p>
            </div>

            {/* Main Content Area */}
            <div className="s8-main-content">

                {/* Hero Banner - text on the RIGHT side, luxury street scene */}
                <div className="s8-hero-banner">
                    <div className="s8-hero-overlay">
                        <div className="s8-hero-text-content">
                            <h2 className="s8-hero-title">市场在哪里，<br />你的供应链就在那里。</h2>
                            <p className="s8-hero-desc">
                                针对含有定制业务的连锁品牌进行服务，<br />
                                以快速实现目标市场进驻前的供应链资源 本地化前置获得与部署。
                            </p>
                            <p className="s8-hero-sub">将于2026年秋季  推出</p>

                            {/* Device Icons */}
                            <div className="s8-hero-devices">
                                <svg width="19" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                <svg width="13" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                                <svg width="13" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                            </div>

                            {/* Action Button */}
                            <button className="s8-hero-btn">了解更多</button>
                        </div>
                    </div>
                </div>

                {/* Info Cards Grid */}
                <div className="s8-cards-container">

                    <div className="s8-card">
                        <div className="s8-card-header">
                            <div className="s8-card-icon"></div>
                            <div className="s8-card-add">
                                <svg width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#007bff"></circle><line x1="12" y1="8" x2="12" y2="16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"></line><line x1="8" y1="12" x2="16" y2="12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"></line></svg>
                            </div>
                        </div>
                        <div className="s8-card-body">
                            <h4 className="s8-card-title">产品演示</h4>
                            <p className="s8-card-desc">通过视频了解产品应用场景与功能</p>
                        </div>
                    </div>

                    <div className="s8-card">
                        <div className="s8-card-header">
                            <div className="s8-card-icon"></div>
                            <div className="s8-card-add">
                                <svg width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#007bff"></circle><line x1="12" y1="8" x2="12" y2="16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"></line><line x1="8" y1="12" x2="16" y2="12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"></line></svg>
                            </div>
                        </div>
                        <div className="s8-card-body">
                            <h4 className="s8-card-title">用户手册</h4>
                            <p className="s8-card-desc">在线查看或下载产品用户手册</p>
                        </div>
                    </div>

                    <div className="s8-card">
                        <div className="s8-card-header">
                            <div className="s8-card-icon"></div>
                            <div className="s8-card-add">
                                <svg width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#007bff"></circle><line x1="12" y1="8" x2="12" y2="16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"></line><line x1="8" y1="12" x2="16" y2="12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"></line></svg>
                            </div>
                        </div>
                        <div className="s8-card-body">
                            <h4 className="s8-card-title">预约购买</h4>
                            <p className="s8-card-desc">通过在线网站提交产品购买申请表</p>
                        </div>
                    </div>

                    <div className="s8-card">
                        <div className="s8-card-header">
                            <div className="s8-card-icon"></div>
                            <div className="s8-card-add">
                                <svg width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#007bff"></circle><line x1="12" y1="8" x2="12" y2="16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"></line><line x1="8" y1="12" x2="16" y2="12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"></line></svg>
                            </div>
                        </div>
                        <div className="s8-card-body">
                            <h4 className="s8-card-title">迭代计划</h4>
                            <p className="s8-card-desc">了解平台及产品本年内的功能迭代计划</p>
                        </div>
                    </div>

                    <div className="s8-card">
                        <div className="s8-card-header">
                            <div className="s8-card-icon"></div>
                            <div className="s8-card-add">
                                <svg width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#007bff"></circle><line x1="12" y1="8" x2="12" y2="16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"></line><line x1="8" y1="12" x2="16" y2="12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"></line></svg>
                            </div>
                        </div>
                        <div className="s8-card-body">
                            <h4 className="s8-card-title">咨询客服</h4>
                            <p className="s8-card-desc">在线联络并咨询客服人员</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Section8;
