<template>
	<div id="ingredients">
		<div class="paint-ul">
			<ul>
				<li :class="{'curren':page==='glaze'}" @click="changePage('glaze')">格丽斯</li>
				<li :class="{'curren':page==='diluent'}" @click="changePage('diluent')">稀释剂</li>
				<li @click="changePage()">新品上市</li>
			</ul>
		</div>
		<div class="paint-info">
			<div class="left">
				<h2 v-html="pageName+'系列'"></h2>
			</div>
			<div class="right">
				<p class="p1" v-html="info1">
					
				</p>
				<p class="p2" v-html="info2">
					
				</p>
			</div>
		</div>

		<diluent v-if="page==='diluent'"></diluent>
		<glaze v-else></glaze>
	</div>
</template>

<script>
	import diluent from '@/components/product/diluent.vue'
	import glaze from '@/components/product/glaze.vue'

	export default {
		data: function() {
			return {
				page: 'glaze',
				pageName: 'SX格丽斯',
				info1: "懂自然生活，爱创意造型，玩出腔调，玩出新意<br/>青春树与你一起，为自己，为家人打造一个品味出众兼具质感的家。",
				info2: "青春树品牌的木器漆PU系列具有优良的耐化学性和耐机械性，有优异的硬度、手感、丰满度等性能，可以抗钢丝绒刮伤等。兼具保护性和装饰性，广泛应用于家具各行业。"
			}
		},
		methods: {
			changePage: function(index) {
				if(!index) {
					alert("敬请期待。。。")
					return;
				}
				this.page = index;
				
				if(this.page === 'glaze') {
					this.pageName = "SX格丽斯";
					this.info1 = "懂自然生活，爱创意造型，玩出腔调，玩出新意<br/>青春树与你一起，为自己，为家人打造一个品味出众兼具质感的家。";
					this.info = "青春树品牌的木器漆PU系列具有优良的耐化学性和耐机械性，有优异的硬度、手感、丰满度等性能，可以抗钢丝绒刮伤等。兼具保护性和装饰性，广泛应用于家具各行业。";
				} else {
					this.pageName = "稀释剂";
					this.info1 = "<br/>以严苛的标准塑造安全的家园， 打造一个安心，舒适的自然乐园<br/>";
					this.info2 = "青春树公司所有稀释剂，均采用优质环保溶剂组成，不含重金属，属环保稀释剂；稀释剂分冬用和夏用两种：温度低于20℃时，选用冬用稀释剂；温度高于20℃以上，选用夏用稀释剂，底漆和面漆均可以通用；";
				}
			}
		},
		components: {
			diluent,
			glaze
		}
	}
</script>

<style>
	#ingredients .paint-ul {
		overflow: hidden;
		margin: 40px 0;
		position: relative;
		left: 50%;
	}
	
	#ingredients .paint-ul ul li {
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
	
	#ingredients .paint-ul ul li a {
		color: #fff;
	}
	
	#ingredients .paint-ul ul:hover li {
		background: #888 !important;
	}
	
	#ingredients .paint-ul ul li:hover {
		background: #81b620 !important;
	}
	
	#ingredients .paint-ul ul li.curren {
		background: #81b620;
	}
	
	#ingredients .paint-info {
		display: flex;
		width: 1170px;
		height: 120px;
		background: #81b620;
		box-shadow: 0 0 1px #81b620;
		color: #fff;
		margin-bottom: 40px;
	}
	
	#ingredients .paint-info .left {
		float: left;
		border-right: 1px solid #fff;
		height: 80px;
		width: 240px;
		text-align: center;
		margin-top: 20px;
	}
	
	#ingredients .paint-info .left span {
		font-size: 15px;
		margin-left: -20px;
	}
	
	#ingredients .paint-info .left h2 {
		margin-top: 14px;
		font-size: 30px;
		font-weight: 500;
	}
	
	#ingredients .paint-info .right {
		flex: 1;
		float: left;
		height: 50px;
		margin-left: 20px;
		margin-top: 15px;
	}
	
	#ingredients .paint-info .right .p1 {
		font-size: 16px;
		font-style: italic;
	}
	
	#ingredients .paint-info .right .p2 {
		font-size: 13px;
		line-height: 18px;
		margin-top: 10px;
		padding-right: 10px;
	}
</style>