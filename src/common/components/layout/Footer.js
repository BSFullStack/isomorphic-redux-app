import React , { Component, PropTypes } from 'react';

export default class Footer extends Component {
    render() {
        return (
        	<div>
	        	    <footer id="footer">
				    <div className="container">
				        <div className="row hidden-xs">
				            <dl className="col-sm-2 site-link">
				                <dt>网站相关</dt>
				                <dd><a href="/about">关于我们</a></dd>
				                <dd><a href="/tos">服务条款</a></dd>
				                <dd><a href="/faq">帮助中心</a></dd>
				                <dd><a href="/repu">声望与权限</a></dd>
				                <dd><a href="/markdown">编辑器语法</a></dd>
				                <dd><a href="//weekly.segmentfault.com/">每周精选</a></dd>
				                <dd><a href="/app">App 下载</a></dd>
				            </dl>
				            <dl className="col-sm-2 site-link">
				                <dt>联系合作</dt>
				                <dd><a href="/contact">联系我们</a></dd>
				                <dd><a href="/hiring">加入我们</a></dd>
				                <dd><a href="/link">合作伙伴</a></dd>
				                <dd><a href="/press">媒体报道</a></dd>
				                <dd><a href="/0x">建议反馈</a></dd>
				                <dd><a href="http://pan.baidu.com/share/link?shareid=604288&amp;uk=839272106" target="_blank">Logo 下载</a>
				                </dd>
				            </dl>
				            <dl className="col-sm-2 site-link">
				                <dt>常用链接</dt>
				                <dd><a href="https://chrome.google.com/webstore/detail/segmentfault-%E7%AC%94%E8%AE%B0/pjklfdmleagfaekibdccmhlhellefcfo" target="_blank">笔记插件: Chrome</a></dd>
				                <dd><a href="https://addons.mozilla.org/zh-CN/firefox/addon/sf-note-ext/" target="_blank">笔记插件: Firefox</a></dd>
				                <dd><a href="//mirrors.segmentfault.com/" target="_blank">文档镜像</a></dd>
				                <dd>订阅：<a href="/feeds">问答</a> / <a href="/feeds/blogs">文章</a></dd>
				                <dd><a href="/hackathon">黑客马拉松</a></dd>
				                <dd><a href="/giveaways" target="_blank">开发者福利</a></dd>
				              
				                <dd><a href="https://namebeta.com/" target="_blank">域名搜索注册</a></dd>
				            </dl>
				            <dl className="col-sm-2 site-link">
				                <dt>关注我们</dt>
				                <dd><a href="https://github.com/SegmentFault" target="_blank">GitHub</a></dd>
				                <dd><a href="https://twitter.com/segment_fault" target="_blank">Twitter</a></dd>
				                
				                <dd><a href="https://www.linkedin.com/company/segmentfault" target="_blank">LinkedIn</a></dd>
				                <dd><a href="http://weibo.com/segmentfault" target="_blank">新浪微博</a></dd>
				                <dd><a href="http://i.youku.com/segmentfault" target="_blank">优酷主页</a></dd>
				                <dd><a href="/blog/segmentfault" target="_blank">开发日志</a></dd>
				            </dl>
				            <dl className="col-sm-4 site-link" id="license">
				                <dt>内容许可</dt>
				                <dd>除特别说明外，用户内容均采用 <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-sa/3.0/cn/">知识共享署名-相同方式共享 3.0
				                        中国大陆许可协议</a> 进行许可
				                </dd>
				                <dd>本站由 <a target="_blank" href="http://qingcloud.com/">青云 QingCloud</a> 提供云计算服务<br/><a target="_blank" href="https://www.upyun.com/?utm_source=segmentfault&amp;utm_medium=link&amp;utm_campaign=upyun&amp;md=segmentfault">又拍云</a>
				                    提供 CDN 存储服务
				                </dd>
				                
				            </dl>
				        </div>
				        <div className="copyright">
				            Copyright © 2011-2016 SegmentFault. 当前呈现版本 16.01.04<br/><a href="http://www.miibeian.gov.cn/" rel="nofollow">浙ICP备15005796号-2</a>
				        </div> 
				        <p className="text-center">
				            <a className ="js__view--selector hidden-sm hidden-md hidden-lg" data-action="mobile" href="javascript:;">移动版</a>
				            <a className="js__view--selector hidden-sm hidden-md hidden-lg" data-action="desktop" href="javascript:;">桌面版</a>
				        </p>
				    </div>
				</footer>
			</div>
        );
    }
}

