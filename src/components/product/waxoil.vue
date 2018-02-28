<template>
	<div id="waxoil">
		<div class="paint-ul">
			<ul>
				<li :class="{'curren':page==='JJ'}" @click="changePage('JJ')">家居系列</li>
				<li :class="{'curren':page==='UV'}" @click="changePage('UV')">UV系列</li>
				<li :class="{'curren':page==='ZWY'}" @click="changePage('ZWY')">植物油基数脂</li>
				<li @click="changePage()">新品上市</li>
			</ul>
		</div>
		<div class="paint-info">
			<div class="left">
				<span v-if="pageName==='UV'" class="span">木蜡油</span>
				<span v-else-if="pageName==='家居'">木蜡油</span>
				<h2 v-html="pageName" v-if="pageName==='植物油基数脂'" style="margin-top: 14px;"></h2>
				<h2 v-html="pageName+'系列'" v-else></h2>
			</div>
			<div class="right">
				<p class="p2" v-html="info" v-if="pageName==='家居'">
				</p>
				<p class="p3" v-html="info" v-else>
				</p>
			</div>
		</div>

		<JJ v-if="page==='JJ'"></JJ>
		<UV v-else-if="page==='UV'"></UV>
		<ZWY v-else></ZWY>
	</div>
</template>

<script>
	import JJ from '@/components/product/waxoil/JJ.vue'
	import UV from '@/components/product/waxoil/UV.vue'
	import ZWY from '@/components/product/waxoil/ZWY.vue'

	export default {
		data: function() {
			return {
				page: 'JJ',
				pageName: '家居',
				info: '木蜡油是植物油蜡涂料国内的俗称，是一种类似油漆而又区别于油漆的天然木器涂料，它和目前那种基于石化类合成树脂所生产的油漆完全不同，青春树健康环保漆原料主要以亚麻油，桐油，棕榈蜡，蜂蜡等精炼而成。'
			}
		},
		methods: {
			changePage: function(index) {
				if(!index) {
					alert("敬请期待。。。")
					return;
				}
				this.page = index;
				switch(this.page) {
					case "JJ":
						this.pageName = "家居";
						this.info = "木蜡油是植物油蜡涂料国内的俗称，是一种类似油漆而又区别于油漆的天然木器涂料，它和目前那种基于石化类合成树脂所生产的油漆完全不同，青春树健康环保漆原料主要以亚麻油，桐油，棕榈蜡，蜂蜡等精炼而成。";
						break;
					case "UV":
						this.pageName = "UV";
						this.info = "纯植物油，涂刷面积大，可擦可喷，干燥时间快，气味特纯净，附着力好，硬度最高可达到3H等。";
						break;
					case "ZWY":
						this.pageName = "植物油基数脂";
						this.info = "纯植物油，涂刷面积大，可擦可喷，干燥时间快，气味特纯净，附着力好，硬度最高可达到3H等。";
						break;

					default:
						break;
				}
			}
		},
		components: {
			JJ,
			UV,
			ZWY
		}
	}
</script>

<style>
	#waxoil .paint-ul {
		overflow: hidden;
		margin: 40px 0;
		position: relative;
		left: 50%;
		margin-left: -450px;
	}
	
	#waxoil .paint-ul ul li {
		float: left;
		width: 140px;
		height: 27px;
		line-height: 27px;
		border-radius: 10px;
		background: #888;
		text-align: center;
		color: #fff;
		font-size: 14px;
		margin: 0 20px;
		cursor: pointer;
		transition: .2s linear;
	}
	
	#waxoil .paint-ul ul:hover li {
		background: #888 !important;
	}
	
	#waxoil .paint-ul ul li:hover {
		background: #1b87a4 !important;
	}
	
	#waxoil .paint-ul ul li.curren {
		background: #1b87a4;
	}
	
	#waxoil .paint-info {
		display: flex;
		width: 1170px;
		height: 100px;
		background: #1b87a4;
		box-shadow: 0 0 1px #1b87a4;
		color: #fff;
	}
	
	#waxoil .paint-info .left {
		float: left;
		border-right: 1px solid #fff;
		height: 70px;
		width: 250px;
		text-align: center;
		margin-top: 15px;
	}
	
	#waxoil .paint-info .left span {
		font-size: 15px;
		margin-left: -70px;
	}
	#waxoil .span{
		margin-left: -55px !important;
	}
	
	#waxoil .paint-info .left h2 {
		margin-top: 4px;
		font-size: 30px;
		font-weight: 500;
	}
	
	#waxoil .paint-info .right {
		flex: 1;
		float: left;
		height: 70px;
		margin-left: 20px;
		margin-top: 15px;
	}
	
	#waxoil .paint-info .right .p1 {
		font-size: 16px;
		font-style: italic;
	}
	
	#waxoil .paint-info .right .p2 {
		font-size: 13px;
		line-height: 18px;
		margin-top: 20px;
		padding-right: 10px;
	}
	#waxoil .paint-info .right .p3 {
		font-size: 13px;
		line-height: 18px;
		margin-top: 27px;
		padding-right: 10px;
	}
</style>