import React from 'react';
import './Section11.css';

const Section11 = () => {
    return (
        <section className="section11-container">
            {/* Centered Header */}
            <div className="s11-header">
                <span className="s11-brand">MÉDITE Ai</span>
                <h2 className="s11-tagline">赋能产业，「产地销」与「销地产」能力兼备。</h2>
                <p className="s11-desc">
                    摆脱供应链地域化对传统制造企业及品牌业务的制约，<br />
                    使企业同时获得发展早期和后期所需的供应链快速组织及协同生产能力。
                </p>
            </div>

            {/* Content Block: video cards + contact banner */}
            <div className="s11-content">
                {/* Two video cards */}
                <div className="s11-video-row">
                    <div className="s11-video-card">
                        <div className="s11-video-bg s11-video-bg--factory"></div>
                        <div className="s11-video-overlay"></div>
                        <div className="s11-play-btn">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="23.5" stroke="white" strokeOpacity="0.9" fill="rgba(0,0,0,0.3)" />
                                <path d="M19 16L33 24L19 32V16Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <div className="s11-video-card">
                        <div className="s11-video-bg s11-video-bg--workshop"></div>
                        <div className="s11-video-overlay"></div>
                        <div className="s11-play-btn">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="23.5" stroke="white" strokeOpacity="0.9" fill="rgba(0,0,0,0.3)" />
                                <path d="M19 16L33 24L19 32V16Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Contact Banner */}
                <div className="s11-contact-banner">
                    {/* Background image layer */}
                    <div className="s11-contact-bg"></div>
                    {/* Dark overlay */}
                    <div className="s11-contact-overlay"></div>
                    {/* Content */}
                    <div className="s11-contact-content">
                        <p className="s11-contact-text">
                            联系产品顾问<br />
                            让我们一起为你的企业量身制定一份计划。
                        </p>
                        <div className="s11-contact-icons">
                            {/* WeChat icon */}
                            <button className="s11-icon-btn" aria-label="WeChat">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5 10.5C9.33 10.5 10 9.83 10 9C10 8.17 9.33 7.5 8.5 7.5C7.67 7.5 7 8.17 7 9C7 9.83 7.67 10.5 8.5 10.5Z" fill="white" />
                                    <path d="M15.5 10.5C16.33 10.5 17 9.83 17 9C17 8.17 16.33 7.5 15.5 7.5C14.67 7.5 14 8.17 14 9C14 9.83 14.67 10.5 15.5 10.5Z" fill="white" />
                                    <path d="M12 2C6.48 2 2 6.02 2 11C2 13.2 2.85 15.21 4.25 16.77L3 21L7.5 18.9C8.89 19.59 10.41 20 12 20C17.52 20 22 15.98 22 11C22 6.02 17.52 2 12 2ZM12 18C10.52 18 9.13 17.6 7.93 16.9L4.5 18.5L5.9 15.2C4.73 13.85 4 12.01 4 11C4 7.13 7.58 4 12 4C16.42 4 20 7.13 20 11C20 14.87 16.42 18 12 18Z" fill="white" />
                                </svg>
                            </button>
                            <div className="s11-divider"></div>
                            {/* Email icon */}
                            <button className="s11-icon-btn" aria-label="Email">
                                <svg width="18" height="14" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="white" />
                                </svg>
                            </button>
                            <div className="s11-divider"></div>
                            {/* Phone icon */}
                            <button className="s11-icon-btn" aria-label="Phone">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section11;
