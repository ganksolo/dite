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
                {/* Fan of 5 phones - center phone is largest/front */}
                <div className="s10-phones">
                    <div className="s10-phone s10-phone--far-left">
                        <div className="s10-phone-screen">
                            <div className="s10-phone-notch"></div>
                            <div className="s10-phone-ui">
                                <div className="s10-ui-bar"></div>
                                <div className="s10-ui-content">
                                    <div className="s10-ui-row"></div>
                                    <div className="s10-ui-row s10-ui-row--short"></div>
                                    <div className="s10-ui-row s10-ui-row--blue"></div>
                                    <div className="s10-ui-row"></div>
                                    <div className="s10-ui-row s10-ui-row--short"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="s10-phone s10-phone--left">
                        <div className="s10-phone-screen">
                            <div className="s10-phone-notch"></div>
                            <div className="s10-phone-ui">
                                <div className="s10-ui-bar s10-ui-bar--dark"></div>
                                <div className="s10-ui-content">
                                    <div className="s10-ui-avatar-list">
                                        <div className="s10-avatar-row"></div>
                                        <div className="s10-avatar-row"></div>
                                        <div className="s10-avatar-row s10-avatar-row--selected"></div>
                                        <div className="s10-avatar-row"></div>
                                        <div className="s10-avatar-row"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="s10-phone s10-phone--center">
                        <div className="s10-phone-screen s10-phone-screen--center">
                            <div className="s10-phone-notch s10-phone-notch--wide"></div>
                            <div className="s10-phone-ui s10-phone-ui--center">
                                <div className="s10-center-header">
                                    <span className="s10-center-cancel">取消</span>
                                    <span className="s10-center-title">新预约</span>
                                    <span className="s10-center-add">添加</span>
                                </div>
                                <div className="s10-center-card">
                                    <div className="s10-center-brand-block">先先生生</div>
                                </div>
                                <div className="s10-center-store">先先生生订制男装</div>
                                <div className="s10-center-rows">
                                    <div className="s10-cal-row"></div>
                                    <div className="s10-cal-row s10-cal-row--selected"></div>
                                    <div className="s10-cal-row"></div>
                                    <div className="s10-cal-row"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="s10-phone s10-phone--right">
                        <div className="s10-phone-screen">
                            <div className="s10-phone-notch"></div>
                            <div className="s10-phone-ui">
                                <div className="s10-ui-bar s10-ui-bar--dark"></div>
                                <div className="s10-ui-content">
                                    <div className="s10-grid-area">
                                        <div className="s10-grid-cell s10-grid-cell--dark">12</div>
                                        <div className="s10-grid-cell">15</div>
                                        <div className="s10-grid-cell s10-grid-cell--dark">13</div>
                                        <div className="s10-grid-cell">6</div>
                                        <div className="s10-grid-cell s10-grid-cell--accent">345</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="s10-phone s10-phone--far-right">
                        <div className="s10-phone-screen">
                            <div className="s10-phone-notch"></div>
                            <div className="s10-phone-ui">
                                <div className="s10-ui-bar"></div>
                                <div className="s10-ui-content">
                                    <div className="s10-list-rows">
                                        <div className="s10-list-row"></div>
                                        <div className="s10-list-row s10-list-row--blue"></div>
                                        <div className="s10-list-row"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section10;
