<template>
	<div id="product">
		<div class="banner-wrapper">
			<img src="@/components/product/banner.jpg" />
		</div>
		<div class="line">

		</div>
		<div class="pro-header">
			<div class="top">
				<ul>
					<li @click="changePage('waterPaint')" :class="{'curren1':page==='waterPaint'}">
						<span class="t-top">水性</span>
						<span class="t-bottom">木器漆</span>
					</li>
					<li @click="changePage('oilPaint')" :class="{'curren2':page==='oilPaint'}">
						<span class="t-top">油性</span>
						<span class="t-bottom">木器漆</span>
					</li>
					<li @click="changePage('waxoil')" :class="{'curren3':page==='waxoil'}"><span>木蜡油</span></li>
					<li @click="changePage('ingredients')" :class="{'curren4':page==='ingredients'}"><span>辅料</span></li>
				</ul>
			</div>
		</div>
		<div class="pro-content">
			<waterPaint v-if="page==='waterPaint'"></waterPaint>
			<oilPaint v-else-if="page==='oilPaint'"></oilPaint>
			<waxoil v-else-if="page==='waxoil'"></waxoil>
			<ingredients v-else></ingredients>
		</div>
	</div>
</template>

<script>
	import waterPaint from '@/components/product/waterPaint.vue'
	import oilPaint from '@/components/product/oilPaint.vue'
	import waxoil from '@/components/product/waxoil.vue'
	import ingredients from '@/components/product/ingredients.vue'

	export default {
		data: function() {
			return {
				page: this.$router.currentRoute.query.page || "waterPaint"
			}
		},
		watch: {
			'$route': 'setPage'
		},
		mounted: function() {
			$(".nav-wrapper li").removeClass("curren");
			$(".nav-wrapper li").eq(2).addClass("curren");
		},
		methods: {
			setPage: function() {
				this.page = this.$router.currentRoute.query.page || "waterPaint";
			},
			changePage: function(index) {
				this.page = index;
			}
		},
		components: {
			waterPaint,
			oilPaint,
			waxoil,
			ingredients
		}
	}
</script>

<style>
	#product {
		position: relative;
	}
	
	#product .banner-wrapper img {
		width: 100%;
	}
	
	#product .line {
		position: relative;
		border-top: 1px solid #efefef;
		width: 100%;
		top: 100px;
	}
	
	#product .pro-header {
		overflow: hidden;
		width: 1170px;
		margin-top: 15px;
	}
	
	#product .pro-header .top {
		position: relative;
		left: 50%;
		margin-left: -340px;
	}
	
	#product .pro-header .top ul li {
		float: left;
		background: url(drip_bg.jpg) no-repeat;
		height: 145px;
		width: 100px;
		background-size: 100px 145px;
		line-height: 172px;
		color: #fff;
		text-align: center;
		font-size: 15px;
		position: relative;
		cursor: pointer;
		margin: 0px 35px;
		transition: .2s linear;
	}
	
	#product .pro-header .top ul li:nth-child(1):hover {
		background: url(drip_bf_1.jpg) no-repeat;
		background-size: 100px 145px;
	}
	
	#product .pro-header .top ul li:nth-child(2):hover {
		background: url(drip_bf_2.jpg) no-repeat;
		background-size: 100px 145px;
	}
	
	#product .pro-header .top ul li:nth-child(3):hover {
		background: url(drip_bf_3.jpg) no-repeat;
		background-size: 100px 145px;
	}
	
	#product .pro-header .top ul li:nth-child(4):hover {
		background: url(drip_bf_4.jpg) no-repeat;
		background-size: 100px 145px;
	}
	
	#product .pro-header .top ul li.curren1 {
		background: url(drip_bf_1.jpg) no-repeat;
		background-size: 100px 145px;
	}
	
	#product .pro-header .top ul li.curren2 {
		background: url(drip_bf_2.jpg) no-repeat;
		background-size: 100px 145px;
	}
	
	#product .pro-header .top ul li.curren3 {
		background: url(drip_bf_3.jpg) no-repeat;
		background-size: 100px 145px;
	}
	
	#product .pro-header .top ul li.curren4 {
		background: url(drip_bf_4.jpg) no-repeat;
		background-size: 100px 145px;
	}
	
	#product .pro-header .top ul li .t-top {
		position: absolute;
		left: 35px;
		top: -12px;
	}
	
	#product .pro-header .top ul li .t-bottom {
		position: absolute;
		left: 27px;
		top: 7px;
	}
	
	#product .pro-content {
		overflow: hidden;
	}
</style>