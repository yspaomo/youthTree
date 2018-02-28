<template>
	<div id="query">
		<div class="banner-wrapper">
			<img src="@/components/news/banner.jpg" />
		</div>
		<div class="nav">

			<div class="website">
				<img src="@/components/news/crumbs_icon.png" />
				<span>搜索结果列表</span>
			</div>

			<ul>
				<li class="curren">全部查询结果<span></span></li>
			</ul>
		</div>
		<div class="content-wrapper">
			<div class="list-wrapper">
				<div class="nodata" v-if="!length">
					暂无“<span style="color: red;" v-html="query"></span>”查询结果
				</div>
				<div class="data" v-if="list.length>0">
					查找到关于“<span style="color: red;" v-html="query"></span>”的数据约<span style="color: red;" v-html="total"></span>条
				</div>

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
			<div class="list-page">
				<div class="page" v-show="show">
					<div class="pagelist">
						<span class="jump" :class="{disabled:pstart}" @click="prePage">上一页</span>
						<span v-show="current_page>5" class="jump" @click="jumpPage(1)">1</span>
						<span class="ellipsis" v-show="efont">...</span>
						<span class="jump" v-for="num in indexs" :class="{bgprimary:current_page==num}" @click="jumpPage(num)">{{num}}</span>
						<span class="ellipsis" v-show="ebehind">...</span>

						<span :class="{disabled:pend}" class="jump" @click="nextPage">下一页</span>
						<span v-show="current_page<pages-4" class="jump" @click="jumpPage(pages)">{{pages}}</span>

						<span class="jumppoint">跳转到：</span>
						<span class="jumpinp"><input type="text" v-model="changePages"></span>
						<span class="jump gobtn" @click="jumpPage(changePages)">GO</span>
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
				list: '',
				length: 1,
				query: $("#queryTxt").val(),
				total: '',
				current_page: 1, //当前页
				pages: 0, //总页数
				changePages: '', //跳转页
				nowIndex: 0,
				pagesize: 5

			}
		},
		watch: {
			'$route': 'setPage'
		},
		created: function() {
			$(".nav-wrapper li").removeClass("curren");
			$(".nav-wrapper li").eq(5).addClass("curren");
			this.getData();
		},
		computed: {
			show: function() {
				return this.pages && this.pages != 1
			},
			pstart: function() {
				return this.current_page == 1;
			},
			pend: function() {
				return this.current_page == this.pages;
			},
			efont: function() {
				if(this.pages <= 7) return false;
				return this.current_page > 5
			},
			ebehind: function() {
				if(this.pages <= 7) return false;
				var nowAy = this.indexs;
				return nowAy[nowAy.length - 1] != this.pages;
			},
			indexs: function() {

				var left = 1,
					right = this.pages,
					ar = [];
				if(this.pages >= 7) {
					if(this.current_page > 5 && this.current_page < this.pages - 4) {
						left = Number(this.current_page) - 3;
						right = Number(this.current_page) + 3;
					} else {
						if(this.current_page <= 5) {
							left = 1;
							right = 7;
						} else {
							right = this.pages;

							left = this.pages - 6;
						}
					}
				}
				while(left <= right) {
					ar.push(left);
					left++;
				}
				return ar;
			},
		},
		methods: {
			jumpPage: function(id) {
				this.current_page = id;
				this.getData();
			},
			prePage: function() {
				this.current_page--;
				this.getData();
			},
			nextPage: function() {
				this.current_page++;
				this.getData();
			},
			setPage: function() {
				this.page = this.$router.currentRoute.query.page || "companyNews";
				this.query = $("#queryTxt").val();
				this.length = 1;
				this.list = "";
				this.getData();

			},
			changePage: function(obj) {
				this.page = obj;
				this.getData();
			},
			goDetail: function(id) {
				this.$router.push({
					path: '/query_detail',
					query: {
						id: id
					}
				})
			},
			getData: function() {
				var _this = this;
				var data = {
					"link": "c8b51d10ff3e11e7bf9e02420b6a1625",
					"keyword": $("#queryTxt").val(),
					"action": "qcs_article_list",
					"per_page": _this.pagesize,
					"page": (_this.current_page - 1)
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
						_this.length = _this.list.length;
						_this.total = data.total;
						_this.pages = Math.ceil(data.total / _this.pagesize);
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
	#query .banner-wrapper img {
		width: 100%;
	}
	
	#query .nav {
		width: 1170px;
		margin-top: 20px;
		overflow: hidden;
		position: relative;
	}
	
	#query .nav .website {
		position: absolute;
		bottom: 10px;
		font-size: 13px;
		font-weight: 600;
		color: #333;
	}
	
	#query .nav .website img {
		margin-top: 2px;
		width: 13px;
		vertical-align: top;
		margin-right: 3px;
	}
	
	#query .nav ul {
		float: right;
	}
	
	#query .nav ul li {
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
	
	#query .nav ul:hover span {
		width: 0 !important;
	}
	
	#query .nav ul li.curren span {
		width: 100%;
	}
	
	#query .nav ul li span {
		position: absolute;
		display: inline-block;
		width: 0;
		height: 4px;
		bottom: 0;
		left: 0;
		background: #22634d;
		transition: .3s linear;
	}
	
	#query .nav ul li:hover span {
		width: 100% !important;
	}
	
	#query .content-wrapper {
		overflow: hidden;
		width: 1170px;
		border-top: 1px solid #efefef;
		padding-top: 40px;
	}
	
	#query .list-wrapper {
		overflow: hidden;
		min-height: 400px;
	}
	
	#query .list-wrapper .list {
		height: 140px;
		width: 100%;
		margin-bottom: 30px;
		display: flex;
		transition: .2s linear;
	}
	
	#query .list-wrapper .list:hover {
		background: #b4bd9d;
	}
	
	#query .list-wrapper .list:hover .list-left {
		background: #b4bd9d;
	}
	
	#query .list-wrapper .list:hover .list-right {
		background: #b4bd9d;
	}
	
	#query .list-wrapper .list-left {
		box-sizing: border-box;
		float: left;
		width: 120px;
		height: 140px;
		background: #f3f7e9;
		transition: .2s linear;
		cursor: pointer;
	}
	
	#query .list-left p {
		text-align: center;
		color: #7fa52c;
	}
	
	#query .list-left p.day {
		margin-top: 15px;
		font-weight: 600;
		font-size: 40px;
	}
	
	#query .list-left p.mouth {
		font-weight: 500;
		font-size: 20px;
	}
	
	#query .list-left p.year {
		font-weight: 500;
		font-size: 18px;
	}
	
	#query .list-wrapper .list-right {
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
	
	#query .list-right .title {
		color: #22634d;
		font-size: 19px;
	}
	
	#query .list-right .content {
		font-weight: 500;
		color: #555;
		font-size: 13px;
		line-height: 20px;
		padding-top: 8px;
	}
	
	#query .nodata {
		text-align: center;
		font-size: 16px;
	}
	
	#query .data {
		color: #666;
		text-align: right;
		font-size: 14px;
		margin-bottom: 40px;
	}
	
	#query .list-page {
		height: 50px;
		width: 100%;
		box-sizing: border-box;
	}
	
	.page {
		font-weight: 900;
		height: 40px;
		text-align: center;
		color: #888;
		background: #f2f2f2;
	}
	
	.pagelist {
		font-size: 0;
		background: #fff;
		height: 50px;
		line-height: 50px;
	}
	
	.pagelist span {
		font-size: 14px;
	}
	
	.pagelist .jump {
		border: 1px solid #ccc;
		padding: 5px 8px;
		-webkit-border-radius: 4px;
		-moz-border-radius: 4px;
		border-radius: 4px;
		cursor: pointer;
		margin-left: 5px;
	}
	
	.pagelist .bgprimary {
		cursor: default;
		color: #fff;
		background: #22634d;
		border-color: #22634d;
	}
	
	.jumpinp input {
		width: 55px;
		height: 26px;
		font-size: 13px;
		border: 1px solid #ccc;
		-webkit-border-radius: 4px;
		-moz-border-radius: 4px;
		border-radius: 4px;
		text-align: center;
	}
	
	.ellipsis {
		padding: 0px 8px;
	}
	
	.jumppoint {
		margin-left: 30px;
	}
	
	.pagelist .gobtn {
		font-size: 12px;
	}
	
	.bgprimary {
		cursor: default;
		color: #fff;
		background: #337ab7;
		border-color: #337ab7;
	}
	
	.pagelist .jump.disabled {
		pointer-events: none;
		background: #ddd;
	}
</style>