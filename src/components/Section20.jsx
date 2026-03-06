import React from 'react';
import './Section20.css';

const footerLinks = [
    {
        title: "公共关系",
        links: ["产业资源", "政府资源", "媒体新闻"]
    },
    {
        title: "业务板块",
        links: ["MÉDITE", "MÉDITE SaaS", "MÉDITE Ai", "MÉDITE ORIGIN", "MÉDITE Workshop", "用户门店网络"]
    },
    {
        title: "加入美钉",
        links: ["社会招聘", "校园招聘", "版型师招募", "设计师招募"]
    },
    {
        title: "政策法规",
        links: ["联系我们", "联系客服"]
    },
    {
        title: "隐私条款",
        links: []
    }
];

// Placeholder SVG circles for social media icons
const socialIcons = Array(6).fill("");

const Section20 = () => {
    return (
        <section className="section20-container">
            {/* Top Search Bar */}
            <div className="s20-top-search-bar">
                <span className="s20-top-hint">新闻或话题</span>
                <span className="s20-top-title">搜索</span>
            </div>

            {/* Footer Main Area */}
            <div className="s20-footer-main">
                <div className="s20-footer-content-wrapper">

                    {/* Left Side: Newsletter & Social */}
                    <div className="s20-newsletter-social">

                        {/* Newsletter */}
                        <div className="s20-newsletter-block">
                            <h4 className="s20-newsletter-title">索取产品说明</h4>
                            <div className="s20-newsletter-input-group">
                                <input type="email" placeholder="输入电子邮件地址" className="s20-newsletter-input" />
                                <button className="s20-newsletter-btn">索取</button>
                            </div>
                            <p className="s20-newsletter-desc">
                                我们会在24小时内向您发送美钉产品及功能说明文档，专项客服人员会在说明文档发送后快速与您取得联系。
                            </p>
                        </div>

                        {/* Social Media */}
                        <div className="s20-social-block">
                            <h4 className="s20-social-title">官方社交媒体</h4>
                            <div className="s20-social-icons">
                                {socialIcons.map((_, idx) => (
                                    <div key={idx} className="s20-social-icon-placeholder">
                                        {/* Icon would go here depending on platform (WeChat, Weibo, etc.) */}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Side: Links Grid */}
                    <div className="s20-links-grid">
                        {footerLinks.map((col, idx) => (
                            <div key={idx} className="s20-link-col">
                                <h4 className="s20-link-col-title">{col.title}</h4>
                                <ul className="s20-link-list">
                                    {col.links.map((link, lIdx) => (
                                        <li key={lIdx} className="s20-link-item">{link}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Bottom Copyright */}
                <div className="s20-copyright">
                    品牌及业务主体-美钉科技（北京）有限公司 保留所有权利<br />
                    网站备案号：京ICP备17066933号-2
                </div>
            </div>
        </section>
    );
};

export default Section20;
