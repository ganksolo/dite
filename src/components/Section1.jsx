import React, { useState, useEffect, useRef } from 'react';
import './Section1.css';

// Import banner images for the slides
import banner1 from '../assets/imgs/banner-1.png';
import banner2 from '../assets/imgs/banner-2.png';
import banner3 from '../assets/imgs/banner-3.png';
import banner4 from '../assets/imgs/banner-4.png';

const Section1 = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
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

    const slides = [
        {
            bg: banner1,
            content: (
                <div className="s1-hero-content fade-in" key="slide0">
                    <div className="s1-hero-subtitle">MÉDITE SaaS&Ai</div>
                    <h1 className="s1-hero-title">定义时尚产业新秩序</h1>
                    <div className="s1-hero-buttons">
                        <button className="s1-pill-btn"><span className="s1-pill-text-scale">Custom Shop System</span></button>
                        <button className="s1-pill-btn"><span className="s1-pill-text-scale">Personal Ai System</span></button>
                        <button className="s1-pill-btn"><span className="s1-pill-text-scale">Fabric Supplier System</span></button>
                        <button className="s1-pill-btn"><span className="s1-pill-text-scale">OEM factory system</span></button>
                    </div>
                </div>
            )
        },
        {
            bg: banner2,
            content: (
                <div className="s1-hero-content-slide2 fade-in" key="slide1">
                    <div className="s1-hero-subtitle">MÉDITE SaaS&Ai</div>
                    <h1 className="slide2-text-cn">
                        时尚纺织及服装产业供应链数字化与解决方案提供商，<br />
                        &nbsp;&nbsp;为产业不同业务类型企业输出具有针对性的S2B或S2C解决方案。
                    </h1>
                    <p className="slide2-text-en">
                        A digitalization and solution provider for the fashion textile and apparel industry supply chain,<br />
                        delivering targeted S2B or S2C solutions to enterprises with different business types in the industry.
                    </p>
                </div>
            )
        },
        {
            bg: banner3,
            content: (
                <div className="s1-hero-content-slide3 fade-in" key="slide2">
                    <div className="s1-hero-subtitle">MÉDITE SaaS&Ai</div>
                    <div className="slide3-group">
                        <h1 className="slide3-title-cn">来自高级定制门店，为高级定制而定制。</h1>
                        <p className="slide3-desc-cn">专为高级定制门店开发的数字一体化经营升级解决方案。</p>
                    </div>
                    <div className="slide3-group">
                        <h2 className="slide3-title-en">From the Haute Couture Atelier, Customized for Haute Couture.</h2>
                        <p className="slide3-desc-en">Exclusively Developed Integrated Digital Operation Upgrading Solution for Haute Couture Atelier.</p>
                    </div>
                </div>
            )
        },
        {
            bg: banner4,
            content: (
                <div className="s1-hero-content-slide4 fade-in" key="slide3">
                    <div className="s1-hero-subtitle">MÉDITE SaaS&Ai</div>
                    <div className="slide4-group">
                        <h1 className="slide4-title-cn">让我们的能力，成为你的实力。</h1>
                        <p className="slide4-desc-cn">用品牌唯一与即时协同达成更快的销售合作。</p>
                    </div>
                    <div className="slide4-group">
                        <h2 className="slide4-title-en">Our Capabilities, Your Strength.</h2>
                        <p className="slide4-desc-en">Exclusive Single-Brand Supply &amp; Real-Time Collaboration, Faster Sales Partnerships.</p>
                    </div>
                </div>
            )
        }
    ];

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
            <div
                className="s1-hero"
                style={{ backgroundImage: `url(${slides[currentSlide].bg})` }}
            >
                {slides[currentSlide].content}
            </div>

            {/* Content Grid */}
            <div className="s1-content">
                <h2 className="s1-content-title">快速找到您想了解的内容</h2>
                <div className="s1-cards">

                    <div className="s1-card" onClick={() => setCurrentSlide(0)} style={{ cursor: 'pointer' }}>
                        <div className="s1-card-img" style={{ backgroundColor: '#00C853' }}></div>
                        <div className="s1-card-bottom">
                            <span>主题活动</span>
                        </div>
                    </div>

                    <div className="s1-card" onClick={() => setCurrentSlide(1)} style={{ cursor: 'pointer' }}>
                        <div className="s1-card-img" style={{ backgroundColor: '#1E3A8A' }}></div>
                        <div className="s1-card-bottom">
                            <span>解决方案产品</span>
                        </div>
                    </div>

                    <div className="s1-card" onClick={() => setCurrentSlide(2)} style={{ cursor: 'pointer' }}>
                        <div className="s1-card-img" style={{ backgroundColor: '#78350F' }}></div>
                        <div className="s1-card-bottom">
                            <span>产品场景与应用</span>
                        </div>
                    </div>

                    <div className="s1-card" onClick={() => setCurrentSlide(3)} style={{ cursor: 'pointer' }}>
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
