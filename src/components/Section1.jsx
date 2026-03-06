import React, { useState, useEffect, useRef } from 'react';
import './Section1.css';

const Section1 = () => {
    const [isSticky, setIsSticky] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                // Get the nav's original offset relative to the document
                // Since it's near the top we can just measure scrollY. For robustness, 
                // we'll stick when we scroll past the logo (roughly 40-50px).
                setIsSticky(window.scrollY > 50);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="section1-container">
            {/* Header */}
            <header className="s1-header">
                <div className="s1-logo">MÉDITE</div>
                <div
                    ref={navRef}
                    className={`s1-nav-row ${isSticky ? 's1-nav-sticky' : ''}`}
                >
                    <nav className="s1-nav">
                        <a href="#">MÉDITE</a>
                        <a href="#">SaaS+Ai</a>
                        <a href="#">源产地</a>
                        <a href="#">工作坊</a>
                        <a href="#">生态群</a>
                        <a href="#">可持续</a>
                        <a href="#">媒体</a>
                        <a href="#">技术支持</a>
                        <a href="#">企业云</a>
                        <a href="#">商务联络</a>
                    </nav>
                    <div className="s1-icons">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1">
                            <circle cx="5" cy="5" r="4" />
                            <path d="M8 8L11 11" />
                        </svg>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1">
                            <rect x="2" y="3" width="8" height="8" rx="1" />
                            <path d="M4 3V2a2 2 0 014 0v1" />
                        </svg>
                    </div>
                </div>
            </header>

            {/* Hero Banner */}
            <div className="s1-hero">
                <div className="s1-hero-content">
                    <div className="s1-hero-subtitle">MÉDITE SaaS&Ai</div>
                    <h1 className="s1-hero-title">I'm here, I'm back.</h1>
                    <div className="s1-hero-buttons">
                        <button className="s1-pill-btn">Custom Shop System</button>
                        <button className="s1-pill-btn">Personal Ai System</button>
                        <button className="s1-pill-btn">Fabric Supplier System</button>
                        <button className="s1-pill-btn">OEM factory system</button>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="s1-content">
                <h2 className="s1-content-title">快速找到您想了解的内容</h2>
                <div className="s1-cards">

                    <div className="s1-card">
                        <div className="s1-card-img" style={{ backgroundColor: '#00C853' }}></div>
                        <div className="s1-card-bottom">
                            <span>主题活动</span>
                        </div>
                    </div>

                    <div className="s1-card">
                        <div className="s1-card-img" style={{ backgroundColor: '#1E3A8A' }}></div>
                        <div className="s1-card-bottom">
                            <span>解决方案产品</span>
                        </div>
                    </div>

                    <div className="s1-card">
                        <div className="s1-card-img" style={{ backgroundColor: '#78350F' }}></div>
                        <div className="s1-card-bottom">
                            <span>产品场景与应用</span>
                        </div>
                    </div>

                    <div className="s1-card">
                        <div className="s1-card-img" style={{ backgroundColor: '#1F2937' }}></div>
                        <div className="s1-card-bottom">
                            <span>供应链资源与服务</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Section1;
