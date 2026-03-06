import React from 'react';
import './Section13.css';

const Section13 = () => {
    return (
        <section className="section13-container">
            {/* Header Area */}
            <div className="s13-header">
                {/* Logo Area (Text representation of Medite Designer Workshop) */}
                <div className="s13-brand-logo">
                    <span className="s13-logo-medite">Medite</span>
                    <span className="s13-logo-sub">Designer Workshop</span>
                </div>

                <h2 className="s13-tagline">你只负责优秀，其他交给我们。</h2>
                <p className="s13-desc">
                    MÉDITE 设计师工作坊联合行业资源渠道及产能，面对专业人才进行招募，<br />
                    并倾力投入进行扶持与孵化。力求为有梦想的中国时尚设计师再添一对天马行空的翅膀。
                </p>
            </div>

            {/* Grid Area */}
            <div className="s13-grid-container">
                {/* Top Row: 1 large card, 2 small cards */}
                <div className="s13-grid-row s13-row-top">
                    {/* Card 1: 工作坊 */}
                    <div className="s13-card s13-card-large">
                        <div className="s13-card-img"></div>
                        <div className="s13-card-footer">
                            <span className="s13-card-title">工作坊</span>
                        </div>
                    </div>
                    {/* Card 2 & 3 wrapper */}
                    <div className="s13-card-group">
                        <div className="s13-card s13-card-small">
                            <div className="s13-card-img"></div>
                            <div className="s13-card-footer">
                                <span className="s13-card-title">讲师</span>
                            </div>
                        </div>
                        <div className="s13-card s13-card-small">
                            <div className="s13-card-img"></div>
                            <div className="s13-card-footer">
                                <span className="s13-card-title">助教</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: 3 equal cards */}
                <div className="s13-grid-row s13-row-bottom">
                    <div className="s13-card s13-card-medium">
                        <div className="s13-card-img"></div>
                        <div className="s13-card-footer">
                            <span className="s13-card-title">活动</span>
                        </div>
                    </div>
                    <div className="s13-card s13-card-medium">
                        <div className="s13-card-img"></div>
                        <div className="s13-card-footer">
                            <span className="s13-card-title">内训</span>
                        </div>
                    </div>
                    <div className="s13-card s13-card-medium">
                        <div className="s13-card-img"></div>
                        <div className="s13-card-footer">
                            <span className="s13-card-title">发展</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section13;
