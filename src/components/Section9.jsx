import React from 'react';
import './Section9.css';

const Section9 = () => {
    return (
        <section className="section9-container">
            {/* Centered Header */}
            <div className="s9-header">
                <div className="s9-brand">
                    <span className="s9-brand-text">MÉDITE SaaS&amp;Ai</span>
                </div>
                <h2 className="s9-tagline">未见更多，不止更多。</h2>
                <p className="s9-desc">
                    我们将向您提供适合业务发展与场景需求的 SaaS+Ai 解决方案、<br />
                    或通过联络客服为您定制有针对性的应用计划。
                </p>
            </div>

            {/* Three Product Cards */}
            <div className="s9-cards-row">

                {/* Card 1: 定制门店 */}
                <div className="s9-card">
                    <div className="s9-card-inner">
                        {/* Title */}
                        <div className="s9-card-title-row">
                            <h3 className="s9-card-title">定制门店解决方案产品</h3>
                        </div>

                        {/* Device mockup */}
                        <div className="s9-mockup"></div>


                        {/* Deployment section */}
                        <div className="s9-section-row">
                            <span className="s9-label">部署：</span>
                            <div className="s9-devices">
                                <svg width="19" height="12" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                <svg width="13" height="10" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                                <svg width="7" height="11" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                                <svg width="7" height="11" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                            </div>
                        </div>

                        {/* Basic Features */}
                        <div className="s9-feature-block">
                            <div className="s9-feature-label">基础功能：</div>
                            <div className="s9-feature-cols">
                                <ul className="s9-feature-list">
                                    <li>员工KPI管理</li>
                                    <li>新建订单及流程管理</li>
                                    <li>面料直采及订单采购</li>
                                    <li>生产进度协同</li>
                                    <li>客人市场大数据</li>
                                    <li>综合财务管理</li>
                                </ul>
                                <ul className="s9-feature-list">
                                    <li>客人到店预约</li>
                                    <li>订单综合管理</li>
                                    <li>代工厂OEM订单分发</li>
                                    <li>上下游结算</li>
                                    <li>客群档案及数据管理</li>
                                    <li>综合大数据看板</li>
                                </ul>
                            </div>
                        </div>

                        {/* Special Features */}
                        <div className="s9-feature-block">
                            <div className="s9-feature-label">特有功能：</div>
                            <div className="s9-feature-cols">
                                <ul className="s9-feature-list">
                                    <li>iPad 销售终端</li>
                                    <li>客人日常服务移动端</li>
                                    <li>集合型料商库存查询</li>
                                    <li>料率计算</li>
                                    <li>线上定制</li>
                                    <li>体型及号型参考</li>
                                </ul>
                                <ul className="s9-feature-list">
                                    <li>主理人管理移动端</li>
                                    <li>门店自定义工艺模板</li>
                                    <li>工艺单生成</li>
                                    <li>客群私域社群运营</li>
                                    <li>样衣采购</li>
                                    <li>年度数据报告</li>
                                </ul>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="s9-pricing-block">
                            <div className="s9-feature-label">价格：</div>
                            <div className="s9-price-row">
                                <span className="s9-price-tier">基础版：</span>
                                <span className="s9-price-value">RMB9,800元/年（30 天试用)</span>
                            </div>
                            <div className="s9-price-row">
                                <span className="s9-price-tier">集客版：</span>
                                <span className="s9-price-value">RMB12,800元/年（30 天试用)</span>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="s9-card-cta">
                        <button className="s9-buy-btn">购买</button>
                        <div className="s9-learn-more">
                            <span>进一步了解</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </div>
                    </div>
                </div>

                {/* Card 2: 面料商 */}
                <div className="s9-card">
                    <div className="s9-card-inner">
                        <div className="s9-card-title-row">
                            <h3 className="s9-card-title">面料商解决方案产品</h3>
                        </div>

                        {/* Device mockup */}
                        <div className="s9-mockup"></div>


                        <div className="s9-section-row">
                            <span className="s9-label">部署：</span>
                            <div className="s9-devices">
                                <svg width="19" height="12" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                <svg width="7" height="11" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                            </div>
                        </div>

                        <div className="s9-feature-block">
                            <div className="s9-feature-label">基础功能：</div>
                            <div className="s9-feature-cols">
                                <ul className="s9-feature-list">
                                    <li>面对所有门店开放销售</li>
                                    <li>智能料率计算</li>
                                    <li>实时物流状态</li>
                                </ul>
                                <ul className="s9-feature-list">
                                    <li>线上实时库存查询</li>
                                    <li>库存余量管理</li>
                                    <li>销售对账与结算</li>
                                </ul>
                            </div>
                        </div>

                        <div className="s9-feature-block">
                            <div className="s9-feature-label">特有功能：</div>
                            <div className="s9-feature-cols">
                                <ul className="s9-feature-list">
                                    <li>多品类及产品一键上架</li>
                                    <li>售罄品类下架</li>
                                    <li>面料展厅直销</li>
                                </ul>
                                <ul className="s9-feature-list">
                                    <li>年度数据报告</li>
                                    <li>ToC业务（择机开放）</li>
                                </ul>
                            </div>
                        </div>

                        <div className="s9-pricing-block">
                            <div className="s9-feature-label">价格：</div>
                            <div className="s9-price-row">
                                <span className="s9-price-tier">标准版：</span>
                                <span className="s9-price-value">免费</span>
                            </div>
                        </div>
                    </div>

                    <div className="s9-card-cta">
                        <button className="s9-buy-btn">购买</button>
                        <div className="s9-learn-more">
                            <span>进一步了解</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </div>
                    </div>
                </div>

                {/* Card 3: 代工厂 */}
                <div className="s9-card">
                    <div className="s9-card-inner">
                        <div className="s9-card-title-row">
                            <h3 className="s9-card-title">代工厂解决方案产品</h3>
                        </div>

                        {/* Device mockup */}
                        <div className="s9-mockup"></div>


                        <div className="s9-section-row">
                            <span className="s9-label">部署：</span>
                            <div className="s9-devices">
                                <svg width="19" height="12" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                <svg width="13" height="10" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                                <svg width="7" height="11" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                            </div>
                        </div>

                        <div className="s9-feature-block">
                            <div className="s9-feature-label">基础功能：</div>
                            <div className="s9-feature-cols">
                                <ul className="s9-feature-list">
                                    <li>面对所有门店开放接单</li>
                                    <li>智能接单与报价</li>
                                    <li>智能分线与调度</li>
                                    <li>业务对账与结算</li>
                                </ul>
                                <ul className="s9-feature-list">
                                    <li>工艺单自动生成</li>
                                    <li>生产进度多方协同</li>
                                    <li>实时物流状态</li>
                                    <li>面料采购</li>
                                </ul>
                            </div>
                        </div>

                        <div className="s9-feature-block">
                            <div className="s9-feature-label">特有功能：</div>
                            <div className="s9-feature-cols">
                                <ul className="s9-feature-list">
                                    <li>年度数据报告</li>
                                    <li>ToC业务（择机开发）</li>
                                </ul>
                                <ul className="s9-feature-list">
                                    <li>样衣展厅直销</li>
                                </ul>
                            </div>
                        </div>

                        <div className="s9-pricing-block">
                            <div className="s9-feature-label">价格：</div>
                            <div className="s9-price-row">
                                <span className="s9-price-tier">标准版：</span>
                                <span className="s9-price-value">免费</span>
                            </div>
                        </div>
                    </div>

                    <div className="s9-card-cta">
                        <button className="s9-buy-btn">购买</button>
                        <div className="s9-learn-more">
                            <span>进一步了解</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Section9;
