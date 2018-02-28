<template>
	<div id="oilPaint">
		<div class="paint-ul">
			<ul>
				<li :class="{'curren':page==='PU'}" @click="changePage('PU')">PU系列</li>
				<li :class="{'curren':page==='PE'}" @click="changePage('PE')">PE系列</li>
				<li :class="{'curren':page==='NC'}" @click="changePage('NC')">NC系列</li>
				<li :class="{'curren':page==='UV'}" @click="changePage('UV')">UV系列</li>
				<li @click="changePage()">新品上市</li>
			</ul>
		</div>
		<div class="paint-info">
			<div class="left">
				<span>油性木器漆</span>
				<h2 v-html="page+'系列'"></h2>
			</div>
			<div class="right">
				<p class="p1" v-html="info1">

				</p>
				<p class="p2" v-html="info2">

				</p>
			</div>
		</div>

		<PU v-if="page==='PU'"></PU>
		<PE v-else-if="page==='PE'"></PE>
		<NC v-else-if="page==='NC'"></NC>
		<UV v-else-if="page==='UV'"></UV>
	</div>
</template>

<script>
	import PU from '@/components/product/oliPaint/PU.vue'
	import PE from '@/components/product/oliPaint/PE.vue'
	import NC from '@/components/product/oliPaint/NC.vue'
	import UV from '@/components/product/oliPaint/UV.vue'
	export default {
		data: function() {
			return {
				page: 'PU',
				info1: "自然的果实，自然的作物，自然的气息带来最佳灵感，蔓延微小但真切的幸福",
				info2: "随着消费者环保意识的不断提升，尤其有关VOC排放限量标准，鼓励使用非溶剂型涂料的有关政策出台，给绿色产业的水性漆等环保涂料的未来带来了行业发展机遇。"
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
					case "PU":
						this.info1 = "自然的果实，自然的作物，自然的气息带来最佳灵感，蔓延微小但真切的幸福";
						this.info2 = "随着消费者环保意识的不断提升，尤其有关VOC排放限量标准，鼓励使用非溶剂型涂料的有关政策出台，给绿色产业的水性漆等环保涂料的未来带来了行业发展机遇。";
						break;
					case "PE":
						this.info1 = "出则繁华，入则自然，自然健康的美好是跨越学科和专业的唯一标准";
						this.info2 = "PE漆具有硬度高，固含量高，可一次成型较厚漆膜，填充性能强，不易发生下陷现象，耐温变性、化学腐蚀性优，被广泛用于贴纸、办公、木门、板式套房、橱柜展柜等家具上。";
						break;
					case "NC":
						this.info1 = "原木本色，健康极致，长效清新，低碳环保生活的必要序曲";
						this.info2 = "NC漆是目前比较常见的家具用涂料。优点是施工简便、干燥迅速、装饰作用较好，不易出现漆膜弊病，修补容易，漆料调配后没有使用时间的制约；青春树NC产品具有低气味、透明性好、亮度稳定、颜色的层次感佳等特色，更适合美式家居应用。";
						break;
					case "UV":
						this.info1 = "青春树健康环保漆致力于耕耘环保涂料领域，只为让您更安心";
						this.info2 = "青春树UV系列目前有成熟的辊涂、淋涂和喷涂等类型产品，可与其它品类产品搭配使用，也可全面取代高污染传统家具油漆。亮光漆可达到非常好的镜面高光效果，哑光效果柔和典雅。";
						break;
					default:
						break;
				}
			}
		},
		components: {
			PU,
			PE,
			NC,
			UV
		}
	}
</script>

<style>
	#oilPaint .paint-ul {
		overflow: hidden;
		margin: 40px 0;
		position: relative;
		left: 50%;
		margin-left: -450px;
	}
	
	#oilPaint .paint-ul ul li {
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
	
	#oilPaint .paint-ul ul:hover li {
		background: #888 !important;
	}
	
	#oilPaint .paint-ul ul li:hover {
		background: #e26d4a !important;
	}
	
	#oilPaint .paint-ul ul li.curren {
		background: #e26d4a;
	}
	
	#oilPaint .paint-info {
		display: flex;
		width: 1170px;
		height: 100px;
		background: #e26d4a;
		box-shadow: 0 0 1px #e26d4a;
		color: #fff;
	}
	
	#oilPaint .paint-info .left {
		float: left;
		border-right: 1px solid #fff;
		height: 70px;
		width: 200px;
		text-align: center;
		margin-top: 15px;
	}
	
	#oilPaint .paint-info .left span {
		font-size: 15px;
		margin-left: -20px;
	}
	
	#oilPaint .paint-info .left h2 {
		margin-top: 4px;
		font-size: 30px;
		font-weight: 500;
	}
	
	#oilPaint .paint-info .right {
		flex: 1;
		float: left;
		height: 70px;
		margin-left: 20px;
		margin-top: 15px;
	}
	
	#oilPaint .paint-info .right .p1 {
		font-size: 16px;
		font-style: italic;
	}
	
	#oilPaint .paint-info .right .p2 {
		font-size: 13px;
		line-height: 18px;
		margin-top: 10px;
		padding-right: 10px;
	}
</style>