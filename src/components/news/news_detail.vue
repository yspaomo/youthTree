<template>
	<div id="news_detail">
		<div class="banner-wrapper">
			<img src="@/components/news/banner.jpg" />
		</div>
		<div class="nav">
			<div class="website">
				<img src="@/components/news/crumbs_icon.png" />
				<router-link to="/news">新闻列表</router-link>▸<span v-html="list.name"></span>
			</div>
			<ul>
				<li class="curren" v-if="type==='companyNews'">企业动态<span></span></li>
				<li class="curren" v-else>行业信息<span></span></li>
			</ul>
		</div>
		<div class="content-wrapper">
			<div class="list-wrapper">
				<div class="list">
					<div class="list-left">
						<p class="day" v-html="getDay(list.create_date)"></p>
						<p class="mouth" v-html="getMonth(list.create_date)"></p>
						<p class="year" v-html="getYear(list.create_date)"></p>
					</div>
					<div class="list-right">
						<h1 class="title" v-html="list.name">
							
						</h1>
						<p class="content" v-html="list.content">
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
				id: this.$router.currentRoute.query.id,
				type: this.$router.currentRoute.query.type,
				list: ''
			}
		},
		mounted: function() {
			this.getData();
		},
		methods: {
			getData: function() {
				var _this = this;
				var data = {
					"link": "c8b51d10ff3e11e7bf9e02420b6a1625",
					"id": Number(_this.id),
					"action": "qcs_article"
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
	#news_detail .banner-wrapper img {
		width: 100%;
	}
	
	#news_detail .nav {
		width: 1170px;
		margin-top: 20px;
		overflow: hidden;
		position: relative;
	}
	
	#news_detail .nav .website {
		position: absolute;
		bottom: 10px;
		font-size: 13px;
		font-weight: 600;
	}
	
	#news_detail .nav .website span {
		color: #333;
	}
	
	#news_detail .nav .website img {
		margin-top: 2px;
		width: 13px;
		vertical-align: top;
		margin-right: 3px;
	}
	
	#news_detail .nav .website a {
		color: #22634D;
		cursor: pointer;
	}
	
	#news_detail .nav ul {
		float: right;
	}
	
	#news_detail .nav ul li {
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
	
	#news_detail .nav ul:hover span {
		width: 0 !important;
	}
	
	#news_detail .nav ul li.curren span {
		width: 100%;
	}
	
	#news_detail .nav ul li span {
		position: absolute;
		display: inline-block;
		width: 0;
		height: 4px;
		bottom: 0;
		left: 0;
		background: #22634d;
		transition: .3s linear;
	}
	
	#news_detail .nav ul li:hover span {
		width: 100% !important;
	}
	
	#news_detail .content-wrapper {
		overflow: hidden;
		width: 1170px;
		border-top: 1px solid #efefef;
		padding-top: 40px;
	}
	
	#news_detail .list-wrapper {
		overflow: hidden;
	}
	
	#news_detail .list-wrapper .list {
		width: 100%;
		margin-bottom: 30px;
		display: flex;
	}
	
	#news_detail .list-wrapper .list-left {
		box-sizing: border-box;
		float: left;
		width: 120px;
		height: 140px;
		background: #f3f7e9;
		margin: 0;
	}
	
	#news_detail .list-left p {
		text-align: center;
		color: #7fa52c;
	}
	
	#news_detail .list-left p.day {
		margin-top: 15px;
		font-weight: 600;
		font-size: 40px;
	}
	
	#news_detail .list-left p.mouth {
		font-weight: 500;
		font-size: 20px;
	}
	
	#news_detail .list-left p.year {
		font-weight: 500;
		font-size: 18px;
	}
	
	#news_detail .list-wrapper .list-right {
		min-height: 400px;
		flex: 1;
		box-sizing: border-box;
		float: right;
		margin-left: 10px;
		padding: 0px 30px;
	}
	
	#news_detail .list-right .title {
		color: #22634d;
		font-size: 20px;
	}
	
	#news_detail .list-right .content {
		overflow: hidden;
		font-weight: 500;
		color: #555;
		font-size: 14px;
		padding-top: 15px;
		line-height: 24px;
	}
</style>