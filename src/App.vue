<template>
	<div id="app">
		<div class="header-wrapper">
			<div class="logo-wrapper" @click="goPage('index')">
				<img src="@/assets/logo.jpg" />
			</div>

			<div class="search-wrapper">
				<img src="@/assets/icon-search.jpg" @click="query" />
				<input type="text" id="queryTxt" value="" @keydown="key_query" />
			</div>
			<div class="nav-wrapper">
				<ul>
					<li class="n1" @click="goPage('index')" :class="{'curren':page==='index'}">
						<span>首页</span>
						<span class="bg"></span>

					</li>
					<li @click="goPage('aboutUs')" :class="{'curren':page==='aboutUs'}">
						<span>关于我们</span>
						<span class="bg"></span>
					</li>
					<li @click="goPage('product')" :class="{'curren':page==='product'}">
						<span>产品世界</span>
						<span class="bg"></span>
						<div class="pro-list">
							<p>
								<a @click="goPage_child('waterPaint',$event)" :class="{'curren':child_page1==='waterPaint'}">水性木器漆</a>
								<a @click="goPage_child('oilPaint',$event)" :class="{'curren':child_page1==='oilPaint'}">油性木器漆</a>
								<a @click="goPage_child('waxoil',$event)" :class="{'curren':child_page1==='waxoil'}">木蜡油</a>
								<a @click="goPage_child('ingredients',$event)" :class="{'curren':child_page1==='ingredients'}">辅料</a>
							</p>
						</div>
					</li>
					<li @click="goPage('service')" :class="{'curren':page==='service'}">
						<span>技术服务</span>
						<span class="bg"></span>
					</li>
					<li @click="goPage('case')" :class="{'curren':page==='case'}">
						<span>经典案例</span>
						<span class="bg"></span>
					</li>
					<li @click="goPage('news')" :class="{'curren':page==='news'}">
						<span>新闻中心</span>
						<span class="bg"></span>
						<div class="news-list">
							<p>
								<a @click="goPage_child('companyNews',$event)" :class="{'curren':child_page2==='companyNews'}">企业动态</a>
								<a @click="goPage_child('induring',$event)" :class="{'curren':child_page2==='induring'}">行业信息</a>
							</p>
						</div>
					</li>
					<li @click="goPage('join')" :class="{'curren':page==='join'}">
						<span>加盟流程</span>
						<span class="bg"></span>
					</li>
					<li @click="goPage('contactUs')" :class="{'curren':page==='contactUs'}">
						<span>联系我们</span>
						<span class="bg"></span>
					</li>
				</ul>
			</div>

		</div>
		<div class="content-wrapper">
			<router-view></router-view>
		</div>
		<div class="footer-wrapper">
			<ul>
				<li>
					<span>
						分享到
					</span>
				</li>
				<li style="min-width: 145px;">
					<!--<img class="icon" src="@/assets/icon-wx.jpg" />-->
					<a target="_blank" :href="'http://connect.qq.com/widget/shareqq/index.html?url='+href"><img class="icon" src="@/assets/icon-qq.png" /></a>
					<div id="soshid"></div>

					<!--<a target="_blank" :href="'http://connect.qq.com/widget/shareqq/index.html?url='+href"><img class="icon" src="@/assets/icon-qq.jpg" /></a>
					<a target="_blank" :href="'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+href"><img class="icon" src="@/assets/icon-qzing.jpg" /></a>
					<a target="_blank" :href="'http://service.weibo.com/share/share.php?url='+href"><img class="icon" src="@/assets/icon-weibo.jpg" /></a>-->
				</li>
				<li>
					<span id="">
					    服务热线：0769-87901048
					 </span>
				</li>
				<li style="width: 345px;">
					<!--<img class="icon-tip" src="@/assets/icon-tip.jpg" />-->
					<span class="ness">青春树漆  健康环保  关爱家人  自然守护</span>
					<img class="icon-tip" src="@/assets/butterfly.jpg" />
				</li>

				<li>
					<div class="contact">
						<p>东莞市汇美涂料有限公司 版权所有 法律声明</p>
						<p>沪 ICP备：15008719号-3</p>
						<p>
							技术支持：<a target="_blank" href="http://appnxt.com">Appnext&trade;</a>
						</p>
						<img src="@/assets/badge.jpg" />
					</div>

				</li>
			</ul>
		</div>

		<div class="backtop" id="backtop" @click="backtop">

		</div>
	</div>

</template>

<script>
	export default {
		name: 'App',
		data: function() {
			return {
				page: sessionStorage.page || "index",
				child_page1: 'waterPaint',
				child_page2: 'companyNews',
				href: location.href
			}
		},
		mounted: function() {
			window.onscroll = function() {
				var t = document.documentElement.scrollTop || document.body.scrollTop;
				var top_div = document.getElementById("backtop");
				if(t >= 150) {
					top_div.style.opacity = "1";
					top_div.style.bottom = "50px";
				} else {
					top_div.style.opacity = "0";
					top_div.style.bottom = "0px";
				}
			}
			this.share();
		},
		methods: {
			key_query: function() {
				if(window.event.keyCode === 13) {
					this.query();
				}
			},
			query: function() {
				this.$router.push({
					path: '/query',
					query: {
						query: $("#queryTxt").val()
					}
				})
			},
			goPage: function(obj) {
				$(".nav-wrapper li").removeClass("curren");
				this.page = obj;
				this.$router.push({
					path: '/' + obj
				})
				sessionStorage.page = obj;
				if(obj === "index") {
					window.location.reload();
				}
			},
			goPage_child: function(obj, event) {
				if(obj === "waterPaint" || obj === "ingredients" || obj === "waxoil" || obj === "oilPaint") {
					this.page = "product";
					this.child_page1 = obj;
				} else {
					this.page = "news";
					this.child_page2 = obj;
				}

				this.$router.push({
					path: '/' + this.page,
					query: {
						page: obj
					}
				})
				event.cancelBubble = true;
			},
			backtop: function() {
				let timer = null;
				cancelAnimationFrame(timer);
				timer = requestAnimationFrame(function fn() {
					var oTop = document.body.scrollTop || document.documentElement.scrollTop;
					if(oTop > 0) {
						document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
						timer = requestAnimationFrame(fn);
					} else {
						cancelAnimationFrame(timer);
					}
				})
			},
			share: function() {

			}
		}
	}
</script>

<style>
	#app {
		width: 100%;
		padding: 0;
		margin: 0;
	}
	
	.backtop {
		position: fixed;
		bottom: 0px;
		right: 20px;
		opacity: 0;
		height: 40px;
		width: 40px;
		background: url(assets/backtop.png);
		background-size: cover;
		cursor: pointer;
		transition: .2s linear;
	}
	
	.header-wrapper {
		width: 1170px;
		height: 100px;
		background: #fff;
		position: relative;
	}
	
	.logo-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}
	
	.logo-wrapper img {
		width: 200px;
	}
	
	.nav-wrapper {
		position: absolute;
		left: 250px;
		z-index: 9;
	}
	
	.nav-wrapper ul li {
		position: relative;
		font-size: 15px;
		float: left;
		padding: 0 15px;
		width: 60px;
		height: 100px;
		line-height: 100px;
		cursor: pointer;
	}
	
	.nav-wrapper ul li span {
		text-align: center;
		position: absolute;
		width: 100%;
		height: 100%;
		bottom: 0;
		left: 0;
		z-index: 2;
		transition: .2s linear;
	}
	
	.nav-wrapper ul li span.bg {
		height: 0;
		background: #7d9f2f;
		box-shadow: 0 0 1px #7d9f2f;
		z-index: 1;
	}
	
	.nav-wrapper ul li.n1 {
		width: 40px;
		color: #000;
	}
	
	.nav-wrapper ul:hover .bg {
		height: 0 !important;
	}
	
	.nav-wrapper ul:hover span {
		color: #000 !important;
	}
	
	.nav-wrapper ul li:hover .bg {
		height: 100% !important;
	}
	
	.nav-wrapper ul li:hover span {
		color: #fff !important;
	}
	
	.nav-wrapper ul li.curren span {
		color: #fff;
	}
	
	.nav-wrapper ul li.curren .bg {
		height: 100%;
	}
	
	.nav-wrapper ul li:hover .curren .bg {
		height: 0 !important;
	}
	
	.nav-wrapper ul li:hover .curren span {
		color: #000 !important;
	}
	
	.nav-wrapper ul li .pro-list {
		background: #22634d;
		width: 760px;
		height: 0;
		position: absolute;
		top: 100px;
		left: 0px;
		overflow: hidden;
		transition: .2s linear;
	}
	
	.nav-wrapper ul li .news-list {
		background: #22634d;
		width: 490px;
		height: 0;
		position: absolute;
		top: 100px;
		left: 0px;
		overflow: hidden;
		transition: .2s linear;
	}
	
	.nav-wrapper ul li .pro-list p,
	.nav-wrapper ul li .news-list p {
		margin-top: -29px;
		margin-left: 60px;
	}
	
	.nav-wrapper ul li .pro-list p a,
	.nav-wrapper ul li .news-list p a {
		padding: 0 30px;
		border-right: 1px solid #fff;
		color: #fff;
		font-size: 13px;
	}
	
	.nav-wrapper ul li .pro-list p a:last-child,
	.nav-wrapper ul li .news-list p a:last-child {
		border: 0;
	}
	
	.nav-wrapper ul li .pro-list p a.curren,
	.nav-wrapper ul li .news-list p a.curren {
		font-weight: bold;
	}
	
	.nav-wrapper ul li .pro-list p a:hover,
	.nav-wrapper ul li .news-list p a:hover {
		font-weight: bold;
	}
	
	.nav-wrapper ul li:hover .pro-list,
	.nav-wrapper ul li:hover .news-list {
		height: 42px;
	}
	
	.search-wrapper {
		float: right;
		margin-top: 38px;
		margin-left: 10px;
	}
	
	.search-wrapper input[type="text"] {
		border-radius: 12px;
		border: 0;
		box-shadow: 0 0 1px #d9e5d9;
		height: 20px;
		outline: none;
		padding-left: 10px;
		background: #d9e5d9;
		color: #555;
		line-height: 20px;
	}
	
	.search-wrapper img {
		width: 24px;
		vertical-align: top;
		cursor: pointer;
	}
	#app .content-wrapper{
		width: 1360px;
	}
	.footer-wrapper {
		width: 1360px;
		height: 90px;
		margin-top: 15px;
		border-top: 1px solid #cecece;
	}
	
	.footer-wrapper ul {
		width: 1190px;
		position: relative;
		left: 50%;
		margin-top: 15px;
		margin-left: -575px;
	}
	
	.footer-wrapper ul li {
		float: left;
		border-left: 1px solid #aaa;
		height: 25px;
		line-height: 25px;
		padding: 0 20px;
	}
	
	.footer-wrapper ul li:first-child,
	.footer-wrapper ul li:last-child {
		border: 0;
	}
	
	.footer-wrapper ul li .icon {
		width: 27px;
		height: 27px;
		float: left;
		margin-left: 2px;
		margin-right: 5px;
	}
	
	.footer-wrapper ul li .icon-tip {
		margin-top: -12px;
	}
	
	.footer-wrapper ul li span {
		font-size: 13px;
		color: #666;
	}
	
	.footer-wrapper .contact {
		position: relative;
		border-left: 1px solid #cecece;
	}
	
	.footer-wrapper ul li .ness {
		font-style: italic;
	}
	
	.footer-wrapper .contact p {
		margin-left: 10px;
		line-height: 19px;
		font-size: 12px;
		color: #aaa;
	}
	.footer-wrapper .contact p a{
		color: #aaa;
	}
	.footer-wrapper .contact p a:hover{
		color: red;
		text-decoration: underline;
	}
	
	.footer-wrapper .contact img {
		position: absolute;
		right: 5px;
		top: 17px;
		width: 35px;
	}
</style>