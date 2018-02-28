<template>
	<div id="news">
		<div class="banner-wrapper">
			<img src="@/components/news/banner.jpg" />
		</div>
		<div class="nav">

			<div class="website">
				<img src="@/components/news/crumbs_icon.png" />
				<span>新闻列表</span>
			</div>

			<ul>
				<li @click="changePage('companyNews')" :class="{'curren':page==='companyNews'}">企业动态<span></span></li>
				<li @click="changePage('induring')" :class="{'curren':page==='induring'}">行业信息<span></span></li>
			</ul>
		</div>
		<div class="content-wrapper">
			<div class="list-wrapper">
				<div class="list" @click="goDetail(item.id)" v-for="item in list">
					<div class="list-left">
						<p class="day" v-html="getDay(item.create_date)"></p>
						<p class="mouth" v-html="getMonth(item.create_date)"></p>
						<p class="year" v-html="getYear(item.create_date)"></p>
					</div>
					<div class="list-right">
						<h1 class="title" v-html="item.name">
							
						</h1>
						<p class="content" v-html="item.content">

						</p>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				page: this.$router.currentRoute.query.page || "companyNews",
				list: ''
			}
		},
		watch: {
			'$route': 'setPage'
		},
		created: function() {
			this.getData();
		},
		methods: {
			setPage: function() {
				this.page = this.$router.currentRoute.query.page || "companyNews";
				this.getData();
			},
			changePage: function(obj) {
				this.page = obj;
				this.getData();
			},
			goDetail: function(id) {
				this.$router.push({
					path: '/news_detail',
					query: {
						id: id,
						type: this.page === 'companyNews' ? "企业动态" : "行业信息"
					}
				})
			},
			getData: function() {
				var _this = this;
				var data = {
					"link": "c8b51d10ff3e11e7bf9e02420b6a1625",
					"type": _this.page === 'companyNews' ? "企业动态" : "行业信息",
					"action": "qcs_article_list"
				};
				$.ajax({
					type: "post",
					url: "https://link.hub.appnxt.com/v1/trigger/message",
					data: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json;charset=utf-8"
					},
					dataType: 'json',
					success: function(data) {
						_this.list = data.result;
					},
					error: function(e) {
						//alert(e);
					}
				});
			},
			getMonth: function(dates) {
				var month = dates.substring(5, 7);
				switch(month) {
					case "01":
						return "Jan"
						break;
					case "02":
						return "Feb"
						break;
					case "03":
						return "Mar"
						break;
					case "04":
						return "Apr"
						break;
					case "05":
						return "May"
						break;
					case "06":
						return "June"
						break;
					case "07":
						return "July"
						break;
					case "08":
						return "Aug"
						break;
					case "09":
						return "Sept"
						break;
					case "10":
						return "Oct"
						break;
					case "11":
						return "Nov"
						break;
					case "12":
						return "Dec"
						break;
					default:
						break;
				}
			},
			getDay: function(dates) {
				return dates.substring(8, 10);
			},
			getYear: function(dates) {
				return dates.substring(0, 4);
			}
		}
	}
</script>

<style>
	#news .banner-wrapper img {
		width: 100%;
	}
	
	#news .nav {
		width: 1170px;
		margin-top: 20px;
		overflow: hidden;
		position: relative;
	}
	
	#news .nav .website {
		position: absolute;
		bottom: 10px;
		font-size: 13px;
		font-weight: 600;
		color: #333;
	}
	
	#news .nav .website img {
		margin-top: 2px;
		width: 13px;
		vertical-align: top;
		margin-right: 3px;
	}
	
	#news .nav ul {
		float: right;
	}
	
	#news .nav ul li {
		width: 70px;
		height: 60px;
		line-height: 60px;
		text-align: center;
		float: left;
		position: relative;
		font-size: 15px;
		color: #22634d;
		margin-right: 30px;
		cursor: pointer;
	}
	
	#news .nav ul:hover span {
		width: 0 !important;
	}
	
	#news .nav ul li.curren span {
		width: 100%;
	}
	
	#news .nav ul li span {
		position: absolute;
		display: inline-block;
		width: 0;
		height: 4px;
		bottom: 0;
		left: 0;
		background: #22634d;
		transition: .3s linear;
	}
	
	#news .nav ul li:hover span {
		width: 100% !important;
	}
	
	#news .content-wrapper {
		overflow: hidden;
		width: 1170px;
		border-top: 1px solid #efefef;
		padding-top: 40px;
	}
	
	#news .list-wrapper {
		overflow: hidden;
		min-height: 400px;
	}
	
	#news .list-wrapper .list {
		height: 140px;
		width: 100%;
		margin-bottom: 30px;
		display: flex;
		transition: .2s linear;
	}
	
	#news .list-wrapper .list:hover {
		background: #b4bd9d;
	}
	
	#news .list-wrapper .list:hover .list-left {
		background: #b4bd9d;
	}
	
	#news .list-wrapper .list:hover .list-right {
		background: #b4bd9d;
	}
	
	#news .list-wrapper .list-left {
		box-sizing: border-box;
		float: left;
		width: 120px;
		height: 140px;
		background: #f3f7e9;
		transition: .2s linear;
		cursor: pointer;
	}
	
	#news .list-left p {
		text-align: center;
		color: #7fa52c;
	}
	
	#news .list-left p.day {
		margin-top: 15px;
		font-weight: 600;
		font-size: 40px;
	}
	
	#news .list-left p.mouth {
		font-weight: 500;
		font-size: 20px;
	}
	
	#news .list-left p.year {
		font-weight: 500;
		font-size: 18px;
	}
	
	#news .list-wrapper .list-right {
		height: 140px;
		flex: 1;
		box-sizing: border-box;
		float: right;
		background: #f3f7e9;
		margin-left: 10px;
		padding: 20px 30px;
		transition: .2s linear;
		cursor: pointer;
	}
	
	#news .list-right .title {
		color: #22634d;
		font-size: 19px;
	}
	
	#news .list-right .content {
		font-weight: 500;
		color: #555;
		font-size: 13px;
		line-height: 20px;
		padding-top: 8px;
	}
</style>