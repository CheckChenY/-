import React,{ Component} from 'react';

import './Slcompanynews.css'



class Slcompanynews extends Component{

        render() {
            return (
            <div>
                <div className="Slcompanynews-title">
                    <span className="Slcompanynews-title-line">|</span>
                    <span>公司公告</span>
                </div>
                <div className="Slcompanynews-body">
                    <div className="Slcompanynews-body-title">数据看市 & 港股公告</div>
                    <div className="Slcompanynews-body-time">2018年 8月27日</div>
                    <div className="Slcompanynews-body-content">      
                        <p>     
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            【港股】上周五恒生指数收盘跌0.43%报27671.87点，周涨1.68%；国企指数跌0.32%，
                            周涨2.53%；红筹指数涨0.18%，周涨4.52%。多只重磅股收跌，友邦保险跌近3%，
                            腾讯控股跌超1%。中国海洋石油逆势涨近4%领涨蓝筹。全日大市成交降至769.26亿港元。
　　                    </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            【美股】上周五美国三大股指集体收涨，纳指和标普500指数创收盘新高。
                            美联储主席鲍威尔发布鸽派言论，美元指数大跌，逼近95关口。科技股领涨，
                            奈飞涨5.8%。趣店大跌逾12%，与蚂蚁金服的合作8月到期后不再续签。
                            中国概念股多数收涨，阿里巴巴收涨1.16%，百度收涨2.31%，京东收涨0.03%。
                            七星云收涨38.79%，安博教育收涨11.21%，拍拍贷收涨8.18%，灿谷收涨7.84%，
                            航美传媒收涨5.88%，哔哩哔哩收涨3.61%；泰邦生物收跌15.85%，众美联收跌13.64%，
                            乐居收跌12.29%，趣店收跌12.24%，拼多多收跌5.95%。
　　                     </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            【A股】上周五两市午后冲高回落，上证综指收涨0.18%报2729.43点，
                            深证成指跌0.2%报8484.74点，创业板指跌0.37%报1450.09点。两市成交2391.84亿元。
                            本周，两市地量调整，上证综指周涨2.27%；深成指及创业板指均涨逾1%。盘面上看，
                            银行股午后爆发，平安银行大涨7%；海南板块午后亦强势冲高，大东海A涨停；
                            西部大基建板块冲高回落。5G板块全线回调，白酒股遭遇闷杀，燃气、军工、传媒均走势疲软。
                            个股方面，ST长生连续29日跌停，距“跌停王”尴尬纪录仅剩一步；攀钢钒钛恢复上市首日高开20%，
                            随后再涨10%特停恢复交易后冲高至逾40%，最终收涨25%。
                        </p>
                    </div>
                </div>
            </div>
            );
    }
}

export default Slcompanynews;