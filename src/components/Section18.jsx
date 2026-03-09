import React from 'react';
import './Section18.css';

const features = [
    {
        title: "关注产品质量及安全性",
        desc: "产品数字护照可以实现产品信息的可追溯性和透明度，有助于提高产品质量和安全性，增强消费者信任。"
    },
    {
        title: "提高企业竞争力",
        desc: "产品数字护照可以帮助企业实现数字化转型，提高生产效率和管理水平，增强企业竞争力。"
    },
    {
        title: "促进业务及市场可持续发展",
        desc: "产品数字护照可以支持循环经济的发展，减少资源浪费和环境污染，促进可持续发展。"
    },
    {
        title: "推动国际贸易顺利进行",
        desc: "产品数字护照可以实现产品信息的跨国共享和互认，从而有效推动国际贸易的便利化和自由化。"
    }
];

const Section18 = () => {
    return (
        <section className="section18-container">
            {/* Header Content */}
            <div className="s18-header">
                <h3 className="s18-subtitle">MÉDITE DPP</h3>
                <h2 className="s18-title">从纺织源头到成衣交付，供应链环节均可追溯。</h2>
                <p className="s18-desc">
                    基于MÉDITE供应链数据管理能力，从纺织原料生产开始至成衣最终交付，DPP 产品数字护照全程实现可追溯。
                </p>
            </div>

            {/* Main Content Area */}
            <div className="s18-content-card">
                {/* Left Side: Mockup Image Placeholder */}
                <div className="s18-mockup-wrapper">
                    <div className="s18-mockup-placeholder">
                        {/* Mockup Image */}
                    </div>
                </div>

                {/* Right Side: Features List */}
                <div className="s18-features-wrapper">
                    {features.map((feature, idx) => (
                        <div key={idx} className={`s18-feature-item ${idx === features.length - 1 ? 'last-item' : ''}`}>
                            <h4 className="s18-feature-title">{feature.title}</h4>
                            <p className="s18-feature-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section18;
