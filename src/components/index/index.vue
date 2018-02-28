<template>
	<div id="index">
		<div class="banner-wrapper">
			<div class="focus" id="focus">
				<div id="focus_m" class="focus_m">
					<ul>
						<li class="li_1">
							<span class="span_1">无 添 加 的 自 然 造 物</span>
							<span class="span_2">青 春 树</span>
							<span class="span_3">健 康 环 保 漆</span>
						</li>
						<li class="li_2">
							<span class="span_1">生 活 不 可 获 缺 的 天 然 滋 养</span>
							<span class="span_2">充满自然元素的清新带走城市的繁忙与浮躁</span>
							<span class="span_3">绿意满屋，源于自然的点滴小确幸</span>
						</li>
						<li class="li_3">
							<span class="span_1">青 春 树</span>
							<span class="span_2">用 自 然 守 护 最 爱 的 家 人 ！</span>
						</li>
						<li class="li_4">
						</li>
					</ul>
				</div>
				<div class="focus_s">
					<ul>
						<li class="active"><b></b></li>
						<li><b></b></li>
						<li><b></b></li>
						<li><b></b></li>
					</ul>
				</div>
				<a href="javascript:;" class="focus_l" id="focus_l" hidefocus="true" title="上一张">
					<</a>
						<a href="javascript:;" class="focus_r" id="focus_r" hidefocus="true" title="下一张">></a>
			</div>
		</div>
		<div class="subject-wrapper">
			<ul>
				<router-link to="/product?page=waterPaint">
					<li class="curren">
						<div class="img_1">
							<span class="title">水性木器漆</span>
						</div>
						<div class="img_2">
							<img src="@/components/index/sxpaint_l.jpg" />
						</div>
					</li>
				</router-link>
				<router-link to="/product?page=oilPaint">
					<li>
						<div class="img_3">
							<span class="title">油性木器漆</span>
						</div>
						<div class="img_2">
							<img src="@/components/index/diluent_l.jpg" />
						</div>
					</li>
				</router-link>
				<router-link to="/product?page=waxoil">
					<li>
						<div class="img_4">
							<span class="title">木蜡油</span>
						</div>
						<div class="img_2">
							<img src="@/components/index/glaze_l.jpg" />
						</div>
					</li>
				</router-link>
				<router-link to="/product?page=ingredients">
					<li>
						<div class="img_5">
							<span class="title">辅料</span>
						</div>
						<div class="img_2">
							<img src="@/components/index/yxpaint_l.jpg" />
						</div>
					</li>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	import "@/components/index/script.js"

	export default {

	}
</script>

<style>
	#index {
		overflow: hidden;
	}
	
	#index .banner-wrapper img {
		width: 100%;
	}
	
	.focus {
		width: 1360px;
		height: 400px;
		overflow: hidden;
		position: relative;
		background: #ccc;
	}
	
	.focus_m ul {
		width: 100%;
		height: 400px;
		overflow: hidden;
	}
	
	.focus_m li {
		width: 100%;
		height: 400px;
		_float: left;
		opacity: 0;
		position: absolute;
	}
	
	.focus_m li.li_1 {
		background: url(banner5.jpg) center 0 no-repeat;
		background-size: cover;
		opacity: 100;
		filter: alpha(opacity=1);
	}
	
	.focus_m li.li_1 .span_1 {
		position: absolute;
		color: #fff;
		left: 171px;
		top: 172px;
		font-size: 32px;
	}
	
	.focus_m li.li_1 .span_2 {
		position: absolute;
		color: #fff;
		top: 215px;
		left: 333px;
		font-size: 32px;
	}
	
	.focus_m li.li_1 .span_3 {
		position: absolute;
		color: #fff;
		top: 215px;
		left: 471px;
		font-size: 32px;
	}
	
	.focus_m li.li_2 {
		background: url(banner6.jpg) center 0 no-repeat;
		background-size: cover;
	}
	
	.focus_m li.li_2 .span_1 {
		position: absolute;
		color: #fff;
		right: 205px;
		top: 89px;
		font-size: 15px;
	}
	
	.focus_m li.li_2 .span_2 {
		position: absolute;
		color: #fff;
		top: 114px;
		right: 205px;
		font-size: 12px;
	}
	
	.focus_m li.li_2 .span_3 {
		position: absolute;
		color: #fff;
		top: 131px;
		right: 205px;
		font-size: 12px;
	}
	
	.focus_m li.li_3 {
		background: url(banner7.jpg) center 0 no-repeat;
		background-size: cover;
	}
	
	.focus_m li.li_3 .span_1 {
		position: absolute;
		color: #fff;
		right: 694px;
		top: 206px;
		font-size: 20px;
		font-style: italic;
	}
	
	.focus_m li.li_3 .span_2 {
		position: absolute;
		color: #fff;
		top: 206px;
		right: 399px;
		font-size: 20px;
		font-style: italic;
	}
	
	.focus_m li.li_4 {
		background: url(banner4.jpg) center 0 no-repeat;
		background-size: cover;
	}
	
	.focus_s {
		position: absolute;
		margin: 0 auto;
		z-index: 2;
		overflow: hidden;
		top: 370px;
		left: 50%;
		margin-left: -48px;
	}
	
	.focus_s ul {}
	
	.focus_s li {
		float: left;
		cursor: pointer;
		margin-right: 8px;
	}
	
	.focus_s li b {
		display: block;
		border: 2px solid #fff;
		width: 11px;
		height: 11px;
		border-radius: 8px;
	}
	
	.focus_s li.active b {
		background: #fff;
	}
	
	.focus_l,
	.focus_r {
		position: absolute;
		display: block;
		width: 40px;
		height: 40px;
		color: #fff;
		z-index: 2;
		top: 180px;
		border: 1px solid #fff;
		box-shadow: 0 0 1px #fff;
		border-radius: 20px;
		text-align: center;
		font-size: 27px;
		line-height: 38px;
		transition: .3s linear;
	}
	
	.focus_l {
		left: -75px;
	}
	
	.focus_r {
		right: -75px;
	}
	
	.focus:hover .focus_l {
		left: 75px;
	}
	
	.focus:hover .focus_r {
		right: 75px;
	}
	
	.focus_l:hover,
	.focus_r:hover {
		*zoom: 1;
		border-color: red;
		color: red;
		box-shadow: 0 0 1px red;
	}
	
	.focus_l:hover b,
	.focus_r:hover b {
		opacity: 0.5;
		filter: alpha(opacity=50);
	}
	
	.subject-wrapper {
		width: 1100px;
		position: relative;
		left: 50%;
		margin-left: -550px;
		margin-top: 15px;
		height: 160px;
		overflow: hidden;
	}
	
	.subject-wrapper ul {
		transition: .3s linear;
	}
	
	.subject-wrapper ul li {
		width: 220px;
		float: left;
		position: relative;
		cursor: pointer;
		transition: .3s linear;
	}
	
	.subject-wrapper ul:hover li {
		width: 220px !important;
	}
	
	.subject-wrapper ul li:hover {
		width: 440px !important;
	}
	
	.subject-wrapper ul li.curren {
		width: 440px;
	}
	
	.subject-wrapper ul li div {
		float: left;
		transition: .3s linear;
	}
	
	.subject-wrapper ul li div.img_2 {
		position: absolute;
		right: 0;
		z-index: -1;
	}
	
	.subject-wrapper ul li div.img_1 {
		width: 220px;
		height: 160px;
		position: relative;
		background: url(sxpaint.jpg) no-repeat;
		background-size: 100%;
		text-align: center;
		line-height: 115px;
		font-size: 24px;
		color: #fff;
	}
	
	.subject-wrapper ul li div.img_3 {
		width: 220px;
		height: 160px;
		position: relative;
		background: url(yxpaint.jpg) no-repeat;
		background-size: 100%;
		text-align: center;
		line-height: 115px;
		font-size: 24px;
		color: #fff;
	}
	
	.subject-wrapper ul li div.img_4 {
		width: 220px;
		height: 160px;
		position: relative;
		background: url(glaze.jpg) no-repeat;
		background-size: 100%;
		text-align: center;
		line-height: 115px;
		font-size: 24px;
		color: #fff;
	}
	
	.subject-wrapper ul li div.img_5 {
		width: 220px;
		height: 160px;
		position: relative;
		background: url(diluent.jpg) no-repeat;
		background-size: 100%;
		text-align: center;
		line-height: 115px;
		font-size: 24px;
		color: #fff;
	}
	
	.subject-wrapper ul li div span {}
	
	.subject-wrapper ul li img {
		width: 220px;
		height: 160px;
	}
</style>