<template>
	<div id="contactUs">
		<div class="banner-wrapper">
			<img src="@/components/contactUs/banner.jpg" />
		</div>
		<div class="flower-wrapper">
			<img src="@/components/contactUs/flower.jpg" />
		</div>
		<div class="content-wrapper">
			<div class="left">
				欢迎光临“青春树”官网，如果您有相关需要与疑问欢迎联系我们，我们将竭诚为您服务！
			</div>
			<div class="rigth">
				<div class="title">
					东莞市汇美涂料有限公司
				</div>
				<div class="info">
					<p class="adress">东莞市塘厦镇宏业北十五路2号</p>
					<p class="tel">电话：0769 - 8790 1048</p>
					<p class="fax">传真：0769 - 8261 8492</p>
					<p class="email">邮箱：523440059@qq.com</p>
				</div>
				<img src="@/components/contactUs/ecode.jpg" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
	#contactUs .banner-wrapper img {
		width: 100%;
	}
	
	#contactUs .flower-wrapper {
		width: 1170px;
		margin-top: -30px;
	}
	
	#contactUs .flower-wrapper img {
		width: 200px;
		float: right;
	}
	
	#contactUs .content-wrapper {
		overflow: hidden;
		width: 1170px;
		margin-bottom: 50px;
	}
	
	#contactUs .content-wrapper .left {
		box-sizing: border-box;
		float: left;
		width: 40%;
		height: 170px;
		background: #7ac8a1;
		color: #fff;
		font-size: 15px;
		line-height: 25px;
		padding: 60px 60px;
	}
	
	#contactUs .content-wrapper .rigth {
		box-sizing: border-box;
		float: right;
		width: 60%;
		height: 170px;
		background: #80bfe2;
		color: #fff;
	}
	
	#contactUs .content-wrapper .rigth .title {
		float: left;
		font-size: 22px;
		margin-top: 45px;
		height: 80px;
		margin-left: 20px;
		line-height: 80px;
		border-right: 1px solid #fff;
		width: 280px;
		text-align: center;
	}
	
	#contactUs .content-wrapper .rigth .info {
		float: left;
		color: #f5f5f5;
		height: 80px;
		margin-top: 49px;
		margin-left: 30px;
	}
	
	#contactUs .content-wrapper .rigth .info p {
		line-height: 21px;
		font-size: 13px;
	}
	
	#contactUs .content-wrapper .rigth .info .adress {
		font-size: 15px;
		line-height: 10px;
		margin-bottom: 7px;
	}
	
	#contactUs .content-wrapper .rigth img {
		float: left;
		width: 80px;
		margin-top: 45px;
		margin-left: 30px;
	}
</style>