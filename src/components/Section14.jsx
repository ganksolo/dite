import React, { useState } from 'react';
import './Section14.css';

const Section14 = () => {
    // Accordion state
    const [activeIndex, setActiveIndex] = useState(2); // "面料生产与销售" is open by default in mockup

    const accordionItems = [
        { title: "纺织来源地", content: "" },
        { title: "精细化纺织", content: "" },
        {
            title: "面料生产与销售",
            content: "无论是定制门店还是消费者，均可使用自有设备直接查询面料库存或者下单采购，并由MÉDITE Ai进行辅助，从而为面料销售商提供顺畅且闭环的多维度销售场景。"
        },
        { title: "OEM代工厂", content: "" }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className="section14-container">
            {/* Header Area */}
            <div className="s14-header">
                <span className="s14-brand">MÉDITE ECOLOGY</span>
                <h2 className="s14-tagline">拥有业务自组织能力的开放式供应链生态。</h2>
                <p className="s14-desc">
                    通过构建开放且自主的供应链生态机制，<br />
                    帮助用户企业摆脱原本固有的供应链上下游业务关系，从而获得自行主导业务的能力。
                </p>
                <div className="s14-header-actions">
                    <button className="s14-btn">了解面料商政策</button>
                    <button className="s14-btn">申请面料商合作</button>
                </div>
            </div>

            {/* Content Area */}
            <div className="s14-content-block">
                {/* Left Accordion */}
                <div className="s14-accordion">
                    {accordionItems.map((item, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <div key={index} className={`s14-accordion-item ${isOpen ? 'open' : ''}`}>
                                <button className="s14-accordion-header" onClick={() => toggleAccordion(index)}>
                                    <span className="s14-accordion-title">{item.title}</span>
                                    <span className={`s14-accordion-icon ${isOpen ? 'open' : ''}`}>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 5L7 9L3 5" stroke="#333333" strokeOpacity="0.8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </button>
                                {isOpen && item.content && (
                                    <div className="s14-accordion-body">
                                        <p className="s14-accordion-text">{item.content}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Right Image/Device Mockup */}
                <div className="s14-device-mockup">
                    {/* Placeholder for the actual image. The image is an intricate composition 
                        of a Mac, iPad, and iPhone grouped together showing the SaaS platform. */}
                    <div className="s14-mockup-placeholder"></div>
                </div>
            </div>
        </section>
    );
};

export default Section14;
