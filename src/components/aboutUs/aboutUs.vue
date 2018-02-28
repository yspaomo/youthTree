<template>
	<div id="aboutUs">
		<div class="banner-wrapper">
			<img src="@/components/aboutUs/banner.jpg" />
		</div>
		<div class="content-wrapper">
			<div class="c-left">

				<p>东莞市汇美涂料有限公司，成立于2012年，拥有一支高素质、业务能力强的技术经营队伍，是集开发，生产，销售为一体的综合性化工涂料企业。</p>

				<p>公司旗下现有品牌 “青春树”，主要生产产品有：水性木器漆，NC硝基漆，PU聚氨酯漆，PE不饱和树脂漆等各种工业涂料。</p>

				<p>“青春树”品牌尊重传统工艺技术的同时结合现代科技，致力于将最新科技应用于拓展环保涂料产品领域，解决产品实际应用中的各种问题，为客户提供系统的产品方案和综合全面服务。</p>

				<p>“青春树”健康环保漆，自创立以来坚持走优质，环保，健康的路线，秉承“以质量赢得市场，以诚信取得尊重，以科技搏得发展”的经营理念，遵循“超越自我，追求卓越”的企业文化，贯彻“务真、务细、务实”的工作理念，响应世界低碳经济号召，投身于中国绿色建材事业，力求实现环保健康产品惠及每一个家庭的夙愿，为广大客户提供一流的产品和至善至美的服务。</p>

				<p>公司技术力量雄厚，机器设备先进，产品经过多家权威部门检验合格，为配合国家环保治理理念，公司产品不断创新，以最大限度满足社会及市场需求，以优质的产品质量和快捷一流的技术服务，致力在化工涂料市场上树立一个新的行业标杆。</p>

				<p>青春树，愿与社会各界朋友携手共进，创造一个绿色环保，自然健康的大环境。</p>

			</div>
			<div class="c-right">
				<!--<img src="@/components/aboutUs/top.jpg" />-->
				<div class="info-wrapper">
					<p class="p1">青春树漆&nbsp;&nbsp;&nbsp;&nbsp;健康环保&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;关爱家人&nbsp;&nbsp;&nbsp;&nbsp;自然守护</p>
					<p class="p2"><span>TAKE CARE OF TOUR FAMILY</span><img src="@/components/aboutUs/tree.png" /><span>PROTECT THE ENVIRONMENT</span></p>
				</div>
				<div class="right-img">
					<span class="span1">中国环保产品认证</span>
					<span class="span2">ISO9001认证</span>
					<span class="span3">中国环境标志</span>
					<span class="span4">净化甲醛</span>
					<span class="span5">净味技术</span>
					<span class="span6">中国Ⅲ型环保标志</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>

	#aboutUs .banner-wrapper img {
		width: 100%;
	}
	
	#aboutUs .content-wrapper {
		overflow: hidden;
		width: 1170px;
		border-top: 1px solid #efefef;
		margin-top: 15px;
	}
	
	#aboutUs .content-wrapper .c-left {
		width: 780px;
		float: left;
		padding-bottom: 50px;
		margin-top: 15px;
	}
	
	#aboutUs .content-wrapper .c-left p {
		margin-top: 20px;
		line-height: 24px;
		color: #444;
		font-size: 15px;
	}
	
	#aboutUs .content-wrapper .c-right {
		margin-top: 35px;
		float: right;
		width: 315px;
		text-align: center;
	}
	
	#aboutUs .content-wrapper .c-right img {
		width: 315px;
		margin-bottom: 15px;
	}
	
	#aboutUs .right-img {
		height: 354px;
		width: 315px;
		background: url(right.jpg) no-repeat;
		background-size: 100%;
		position: relative;
	}
	
	#aboutUs .right-img .span1 {
		font-size: 12px;
		color: #444;
		position: absolute;
		top: 94px;
		left: 112px;
	}
	
	#aboutUs .right-img .span2 {
		font-size: 12px;
		color: #444;
		position: absolute;
		top: 152px;
		left: 21px;
	}
	
	#aboutUs .right-img .span3 {
		font-size: 12px;
		color: #444;
		position: absolute;
		top: 273px;
		left: 21px;
	}
	
	#aboutUs .right-img .span4 {
		font-size: 12px;
		color: #444;
		position: absolute;
		top: 339px;
		left: 137px;
	}
	
	#aboutUs .right-img .span5 {
		font-size: 12px;
		color: #444;
		position: absolute;
		top: 273px;
		right: 29px;
	}
	
	#aboutUs .right-img .span6 {
		font-size: 12px;
		color: #444;
		position: absolute;
		top: 152px;
		right: 5px;
	}
	
	#aboutUs .content-wrapper .c-right .info-wrapper {
		margin-bottom: 20px;
	}
	
	#aboutUs .content-wrapper .c-right .p1 {
		font-size: 14px;
		color: #22634d;
	}
	
	#aboutUs .content-wrapper .c-right .p2 img {
		width: 19px;
		vertical-align: text-top;
		margin: 0 4px;
	}
	
	#aboutUs .content-wrapper .c-right .p2 span {
		font-size: 9px;
		font-family: cursive;
		color: #22634d;
	}
</style>