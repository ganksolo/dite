import React from 'react';
import './Section17.css';
import circleImg from '../assets/imgs/circle.png';

// Import icons
import icon1 from '../assets/imgs/icon-1.svg';
import icon2 from '../assets/imgs/icon-2.svg';
import icon3 from '../assets/imgs/icon-3.svg';
import icon4 from '../assets/imgs/icon-4.svg';
import icon5 from '../assets/imgs/icon-5.svg';
import icon6 from '../assets/imgs/icon-6.svg';
import icon7 from '../assets/imgs/icon-7.svg';
import icon8 from '../assets/imgs/icon-8.svg';


const leftFeatures = [
    {
        icon: icon1,
        title: "可跨区域",
        desc: "可跨地域且拥有业务自组织能力的开放式数字化供应链平台。"
    },
    {
        icon: icon2,
        title: "可量化",
        desc: "可用于业务前置量化的基于数字孪生的业务场景，用以根据消费市场反向进行供应链设计组合。"
    },
    {
        icon: icon3,
        title: "赋能中小微",
        desc: "为中小微企业（定制门店）提供轻资产的柔性供应链解决方案，并通过Ai协助其复杂性业务的开展。"
    },
    {
        icon: icon4,
        title: "标准化输出与治理",
        desc: "对产品、流程、规格和号型进行标准化制定与输出，对终端销售环节（尤其电商网购）进行治理。"
    }
];

const rightFeatures = [
    {
        icon: icon5,
        title: "可追溯",
        desc: "供应链中每个环节（材料、工艺、产地、加工或制造商等）的可追溯真实数据。"
    },
    {
        icon: icon6,
        title: "可降解",
        desc: "可降解功能性织物（植物纤维）的研发与设计。"
    },
    {
        icon: icon7,
        title: "按需时尚",
        desc: "整合完整的供应链，使他拥有直接面对终端消费者和消费需求的能力。"
    },
    {
        icon: icon8,
        title: "碳中和",
        desc: "通过对整个生产过程的碳排放总量进行溯源与计算，以多种其他方式实现生产方、销售方、购买方碳中和。"
    }
];

const Section17 = () => {
    return (
        <section className="section17-container">
            <div className="s17-header">
                <h3 className="s17-subtitle">MÉDITE 可持续</h3>
                <h2 className="s17-title">
                    通过构建可跨地域且拥有业务自组织能力的开放式数字化供应链生态，<br />
                    实现时尚纺织及服装产业<span className="s17-highlight">可溯源、可量化、可降解、可持续发展。</span>
                </h2>
                <button className="s17-btn">
                    查看 2026年度 生态举措及计划（PDF）
                </button>
            </div>

            <div className="s17-content">
                <div className="s17-features-col">
                    {leftFeatures.map((feature, idx) => (
                        <div key={idx} className="s17-feature-item">
                            <div className="s17-feature-header">
                                <img src={feature.icon} alt="" className="s17-feature-icon" />
                                <span className="s17-feature-title">{feature.title}</span>
                            </div>
                            <p className="s17-feature-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="s17-diagram-container">
                    <div className="s17-diagram-placeholder">
                        <img src={circleImg} alt="MÉDITE Sustainable Circular Diagram" className="s17-diagram-img" />
                    </div>
                </div>

                <div className="s17-features-col">
                    {rightFeatures.map((feature, idx) => (
                        <div key={idx} className="s17-feature-item">
                            <div className="s17-feature-header">
                                <img src={feature.icon} alt="" className="s17-feature-icon" />
                                <span className="s17-feature-title">{feature.title}</span>
                            </div>
                            <p className="s17-feature-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section17;
