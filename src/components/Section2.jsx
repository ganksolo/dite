import React from 'react';
import './Section2.css';

const Section2 = () => {
    return (
        <section className="section2-container">
            {/* Pills Navigation */}
            <div className="s2-pills-nav">
                <div className="s2-pill">概览</div>
                <div className="s2-pill s2-pill-active">定制门店解决方案系统</div>
                <div className="s2-pill">个人 Ai 终端</div>
                <div className="s2-pill">面料商系统</div>
                <div className="s2-pill">OEM 厂商系统(稍后推出)</div>
            </div>

            {/* Main Content */}
            <div className="s2-main-content">
                <div className="s2-title-area">
                    <div className="s2-medite-title">MÉDITE SaaS&Ai</div>
                    <h2 className="s2-main-heading">来自高级定制门店，为高级定制而定制。</h2>
                    <p className="s2-description">
                        MÉDITE SaaS&Ai 是为高级定制业务市场（门店、供应链与消费群）定制开发的综合性解决方案产品。<br />
                        MÉDITE Ai 深植于MÉDITE SaaS 业务平台，为不同业务角色和节点进行能力衔接辅助，<br />
                        并通过业务协同与数据共享保证全业务流程简单、专业、精准、高效。
                    </p>
                </div>

                <a href="#" className="s2-released-link">现已推出</a>

                {/* Device Mockup Graphic */}
                <div className="s2-device-mockup">
                    {/* We use a placeholder matching the design color/aspect for now, as no real images are in imgs/ */}
                    <div className="s2-mockup-placeholder"></div>
                </div>
            </div>
        </section>
    );
};

export default Section2;
