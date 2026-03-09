import React from 'react';
import './Section17.css';

const leftFeatures = [
    {
        title: "可跨区域",
        desc: "可跨地域且拥有业务自组织能力的开放式数字化供应链平台。"
    },
    {
        title: "可量化",
        desc: "可用于业务前置量化的基于数字孪生的业务场景，用以根据消费市场反向进行供应链设计组合。"
    },
    {
        title: "赋能中小微",
        desc: "为中小微企业（定制门店）提供轻资产的柔性供应链解决方案，并通过Ai协助其复杂性业务的开展。"
    },
    {
        title: "标准化输出与治理",
        desc: "对产品、流程、规格和号型进行标准化制定与输出，对终端销售环节（尤其电商网购）进行治理。"
    }
];

const rightFeatures = [
    {
        title: "可追溯",
        desc: "供应链中每个环节（材料、工艺、产地、加工或制造商等）的可追溯真实数据。"
    },
    {
        title: "可降解",
        desc: "可降解功能性织物（植物纤维）的研发与设计。"
    },
    {
        title: "按需时尚",
        desc: "整合完整的供应链，使他拥有能够直接面对终端消费者和消费需求的能力。"
    },
    {
        title: "碳中和",
        desc: "通过对整个生产过程的碳排放总量进行溯源与计算，以多种其他方式实现生产方、销售方、购买方碳中和。"
    }
];

const Section17 = () => {
    return (
        <section className="section17-container">
            {/* 
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
                                <div className="s17-feature-icon-placeholder"></div>
                                <span className="s17-feature-title">{feature.title}</span>
                            </div>
                            <p className="s17-feature-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="s17-diagram-container">
                    <div className="s17-diagram-placeholder">
                        <div className="s17-diagram-label label-top">源产地保护</div>
                        <div className="s17-diagram-label label-top-right">设计与采购</div>
                        <div className="s17-diagram-label label-bottom-right">销售与渠道</div>
                        <div className="s17-diagram-label label-bottom">生产与制造</div>
                        <div className="s17-diagram-label label-bottom-left">回收与降解</div>
                        <div className="s17-diagram-center-icon"></div>
                    </div>
                </div>

                <div className="s17-features-col">
                    {rightFeatures.map((feature, idx) => (
                        <div key={idx} className="s17-feature-item">
                            <div className="s17-feature-header">
                                <div className="s17-feature-icon-placeholder"></div>
                                <span className="s17-feature-title">{feature.title}</span>
                            </div>
                            <p className="s17-feature-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            */}
        </section>
    );
};

export default Section17;
