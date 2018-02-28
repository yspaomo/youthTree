<template>
	<div id="case">
		<div class="banner-wrapper">
			<img src="@/components/case/banner.jpg" />
		</div>
		<div class="top-img-wrapper">
			<img class="top-img" src="@/components/case/top.jpg" />
		</div>
		<div class="content-wrapper">

			<div class="title">
				<h3>绿色不仅仅是一种颜色，更是一种生活方式的标签</h3>
				<p>对当代人而言我们关注生活中的每一个细节，酝酿关于生活的点滴灵感<br/> 青春树，"源"自自然，致力于提供更健康环保的产品
					<br/> 拉近在城市中央的我们与深林，田野的距离，为更多家庭营造健康舒心的环境
				</p>
			</div>
			<div class="content">
				<div class="c-left">
					<div class="img1" @click="bigImg(1)">
						<img src="@/components/case/case_1.jpg" />
					</div>
					<div class="img2" @click="bigImg(2)">
						<img src="@/components/case/case_2.jpg" />
					</div>
					<div class="img4" @click="bigImg(4)">
						<img src="@/components/case/case_4.jpg" />
					</div>
					<div class="img5" @click="bigImg(5)">
						<img src="@/components/case/case_5.jpg" />
					</div>

				</div>
				<div class="c-right" @click="bigImg(3)">
					<img class="img3" src="@/components/case/case_3.jpg" />
				</div>
			</div>
		</div>
		<div class="big-img" :class="{'size_1':type===1,'size_2':type===2,'size_3':type===3,'size_4':type===4,'size_5':type===5}">
			<div class="closeBtn" @click="close">
				X
			</div>
			<div class="left" @click="preImg">
				< </div>
					<div class="center" :class="{'img_1':type===1,'img_2':type===2,'img_3':type===3,'img_4':type===4,'img_5':type===5}">

					</div>
					<div class="right" @click="nextImg">
						>
					</div>
			</div>
		</div>

</template>

<script>
	export default {
		data: function() {
			return {
				type: 0
			}
		},
		methods: {
			nextImg: function() {
				if(this.type === 5) {
					this.type = 1;
				} else {
					this.type++;
				}
			},
			preImg: function() {
				if(this.type === 1) {
					this.type = 5;
				} else {
					this.type--;
				}
			},
			bigImg: function(obj) {
				$(".big-img").show();
				this.type = obj;
			},
			close: function() {
				$(".big-img").hide();
				this.type = 0;
			}
		}
	}
</script>

<style>
	#case .closeBtn {
		position: absolute;
		border: 3px solid #fff;
		color: #fff;
		width: 30px;
		height: 30px;
		border-radius: 18px;
		line-height: 30px;
		font-size: 30px;
		text-align: center;
		cursor: pointer;
		right: 0;
		top: -50px;
		transition: .2s linear;
	}
	
	#case .left:hover {
		color: red !important;
		border: 3px solid red !important;
	}
	
	#case .right:hover {
		color: red !important;
		border: 3px solid red !important;
	}
	
	#case .closeBtn:hover {
		color: red;
		border: 3px solid red;
	}
	
	#case .big-img {
		overflow: hidden;
		display: flex;
		width: 0;
		height: 0;
		border-radius: 7px;
		transition: .2s linear;
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 9;
	}
	
	#case .big-img .left {
		width: 60px;
		height: 60px;
		border: 3px solid #fff;
		border-radius: 32px;
		position: absolute;
		top: 50%;
		margin-top: -30px;
		left: -100px;
		line-height: 60px;
		text-align: center;
		color: #fff;
		font-weight: 600;
		font-size: 44px;
		transition: .2s linear;
		cursor: pointer;
	}
	
	#case .big-img .right {
		width: 60px;
		height: 60px;
		border: 3px solid #fff;
		border-radius: 32px;
		position: absolute;
		top: 50%;
		margin-top: -30px;
		right: -100px;
		line-height: 60px;
		text-align: center;
		color: #fff;
		font-weight: 600;
		font-size: 44px;
		transition: .2s linear;
		cursor: pointer;
	}
	
	#case .big-img:hover .left {
		left: 20px;
	}
	
	#case .big-img:hover .right {
		right: 20px;
	}
	
	#case .big-img:hover .closeBtn {
		top: 0px;
	}
	
	#case .big-img .center {
		float: left;
		flex: 1;
		height: 100%;
		transition: .2s linear;
	}
	
	#case .big-img .center.img_1 {
		background: url(case_1.jpg) no-repeat;
		background-size: 100%;
	}
	
	#case .big-img .center.img_2 {
		background: url(case_2.jpg) no-repeat;
		background-size: 100%;
	}
	
	#case .big-img .center.img_3 {
		background: url(case_3.jpg) no-repeat;
		background-size: 100%;
	}
	
	#case .big-img .center.img_4 {
		background: url(case_4.jpg) no-repeat;
		background-size: 100%;
	}
	
	#case .big-img .center.img_5 {
		background: url(case_5.jpg) no-repeat;
		background-size: 100%;
	}
	
	#case .big-img.size_1 {
		width: 1020px;
		height: 524px;
		margin-left: -510px;
		margin-top: -262px;
		border: 10px solid #555;
		border: 10px solid rgba(0, 0, 0, 0.5);
	}
	
	#case .big-img.size_2 {
		width: 1020px;
		height: 524px;
		margin-left: -510px;
		margin-top: -262px;
		border: 10px solid #555;
		border: 10px solid rgba(0, 0, 0, 0.5);
	}
	
	#case .big-img.size_3 {
		width: 435px;
		height: 550px;
		margin-left: -218px;
		margin-top: -275px;
		border: 10px solid #555;
		border: 10px solid rgba(0, 0, 0, 0.5);
	}
	
	#case .big-img.size_4 {
		width: 544px;
		height: 500px;
		margin-left: -272px;
		margin-top: -250px;
		border: 10px solid #555;
		border: 10px solid rgba(0, 0, 0, 0.5);
	}
	
	#case .big-img.size_5 {
		width: 1020px;
		height: 476px;
		margin-left: -510px;
		margin-top: -238px;
		border: 10px solid #555;
		border: 10px solid rgba(0, 0, 0, 0.5);
	}
	
	#case .banner-wrapper img {
		width: 100%;
	}
	
	#case .content-wrapper {
		overflow: hidden;
		width: 1170px;
		border-top: 1px solid #e7e7e7;
		margin-top: 60px;
		margin-bottom: 60px;
	}
	
	#case .top-img-wrapper {
		width: 1170px;
		position: absolute;
		left: 50%;
		margin-left: -585px;
		top: 344px;
		z-index: 9;
	}
	
	#case .top-img {
		width: 280px;
		float: right;
	}
	
	#case .content-wrapper .title {
		margin: 30px 0;
		overflow: hidden;
	}
	
	#case .content-wrapper .title h3 {
		color: #2d8063;
		font-size: 18px;
		font-weight: 500;
		font-style: italic;
	}
	
	#case .content-wrapper .title p {
		color: #555;
		font-size: 15px;
		line-height: 24px;
		margin-top: 20px;
	}
	
	#case .content-wrapper .content {
		overflow: hidden;
		display: flex;
	}
	
	#case .content-wrapper .c-left {
		box-sizing: border-box;
		padding-right: 10px;
		flex: 1;
		float: left;
		overflow: hidden;
	}
	
	#case .content-wrapper .c-left img {
		width: 100%;
		transition: .4s linear;
		cursor: pointer;
	}
	
	#case .content-wrapper .c-left .img1 {
		float: left;
		width: 382px;
		height: 223px;
		margin-right: 10px;
		overflow: hidden;
	}
	
	#case .content-wrapper .c-left div:hover img {
		transform: scale(1.1);
	}
	
	#case .content-wrapper .c-left div:hover {
		box-shadow: 0 0 10px #555;
	}
	
	#case .content-wrapper .c-left .img2 {
		width: 385px;
		height: 223px;
		float: left;
		overflow: hidden;
	}
	
	#case .content-wrapper .c-left .img4 {
		width: 280px;
		height: 258px;
		margin-right: 10px;
		margin-top: 10px;
		float: left;
		overflow: hidden;
	}
	
	#case .content-wrapper .c-left .img5 {
		margin-top: 10px;
		height: 258px;
		width: 487px;
		float: left;
		overflow: hidden;
	}
	
	#case .content-wrapper .c-right {
		box-sizing: border-box;
		float: right;
		width: 383px;
		height: 490px;
		overflow: hidden;
	}
	
	#case .content-wrapper .c-right img {
		width: 100%;
		height: 100%;
		transition: .4s linear;
		cursor: pointer;
	}
	
	#case .content-wrapper .c-right:hover img {
		transform: scale(1.1);
	}
	
	#case .content-wrapper .c-right img.query-left {
		width: 300px;
		margin-top: 30px;
		float: left;
	}
	
	#case .content-wrapper .c-right:hover {
		box-shadow: 0 0 10px #555;
	}
	
	#case .content-wrapper .c-right img.query-right {
		width: 180px;
		margin-left: 30px;
		float: left;
	}
</style>