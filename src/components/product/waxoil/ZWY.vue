<template>
	<div class="ZWY">
		<div class="ZWY-list-1">
			<div class="content">
				<div class="left">
					<table border="0" cellspacing="0" cellpadding="0" class="el-table">
						<tr>
							<td>型号<br/>Code</td>
							<td>名称<br/>Name</td>
							<td>固含(%)<br/>Non-Volatiles</td>
							<td>色泽(Colour)<br/>Gardner≤</td>
							<td>特性<br/>Features</td>
							<td>用途<br/>Application</td>
						</tr>
						<tr>
							<td>ML-007</td>
							<td>植物油基树脂</td>
							<td>90</td>
							<td>3</td>
							<td>纯植物油，干燥时间快，<br/>附着力好，光泽高等</td>
							<td>制备木蜡油</td>
						</tr>
					</table>
					<p class="tip">
						<更多产品信息请咨询公司专业技术人员>
					</p>
				</div>
				<div class="right">
					<img src="@/components/product/waxoil/zwy_right_1.jpg" />
				</div>
			</div>
		</div>
		<div class="ZWY-list-2">
			<div class="title">
				<img src="@/components/product/waxoil/jj_icon.png" />
				<span>木蜡油施工指南</span>
			</div>
			<div class="content">
				<div class="left">
					<ul>
						<li>
							<div class="z-tilte">
								基材处理
							</div>
							<p>
								木材表面洁净，<br/>干燥（含水率＜20%），<br/>无霜冻。
							</p>
						</li>
						<li>
							<div class="z-tilte">
								打磨处理
							</div>
							<p>
								清除木脂，防霉处理后用<br/>150-300目的砂纸打磨<br/>木材至表面光滑平整。
							</p>
						</li>
						<li>
							<div class="z-tilte">
								操作方法
							</div>
							<p>
								搅拌均匀后直接沿<br/>木材文理芳香反复涂刷，<br/>使已涂木材表面光滑，<br/>涂刷2-3遍。
							</p>
						</li>
						<li>
							<div class="z-tilte">
								干燥时间
							</div>
							<p>
								表干5-6小时，<br/>实干10-12小时，<br/>建议养护24小时。
							</p>
						</li>
						<li>
							<div class="z-tilte">
								维护翻新
							</div>
							<p>
								清洁木材表面灰尘，无油脂，<br/>保持干燥，用600-1000目砂纸<br/>轻打磨平整后，涂刷一遍即可。
							</p>
						</li>
						<li>
							<div class="z-tilte">
								最佳施工与干燥环境
							</div>
							<p>
								温度18-30℃，湿度50-60%，<br/>空气流动速度，温度，湿度影响干性，<br/>可用加温或风扇方式提升干速。
							</p>
						</li>
					</ul>
				</div>
				<div class="right">
					<h1>注意事项</h1>
					<div class="info">
						<div class="line-l"></div>
						<h2>01</h2>
						<div class="line-r"></div>

						<p>涂擦时需保持干净，否则会影响效果和干性。</p>
					</div>
					<div class="info">
						<div class="line-l"></div>
						<h2>02</h2>
						<div class="line-r"></div>

						<p>使用前需充分搅拌均匀，防止长时间放置产生分层。</p>
					</div>
					<div class="info">
						<div class="line-l"></div>
						<h2>03</h2>
						<div class="line-r"></div>

						<p>木蜡油不得与其他涂料混合使用。</p>
					</div>
					<div class="info">
						<div class="line-l"></div>
						<h2>04</h2>
						<div class="line-r"></div>

						<p>使用完毕，及时密封保存， 存放处保持通用干燥，并隔绝火源，远离热源，防止日晒雨淋。</p>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.ZWY-list-1 {
		overflow: hidden;
		width: 1170px;
		margin-top: 40px;
	}
	
	.ZWY-list-1 .content {
		display: flex;
		overflow: hidden;
		margin-bottom: 30px;
	}
	
	.ZWY-list-1 .content .left {
		flex: 1;
		float: left;
	}
	
	.ZWY-list-1 .content .left .tip {
		font-size: 14px;
		margin-top: 10px;
		color: #444;
	}
	
	.ZWY-list-1 table td {
		background: #e2e2e2;
		padding: 25px 0;
		font-size: 15px;
	}
	
	.ZWY-list-1 table tr:first-child td {
		background: #dae9f0;
	}
	
	.ZWY-list-1 .content .right {
		float: right;
		width: 350px;
	}
	
	.ZWY-list-1 .content .right img {
		width: 100%;
	}
	
	.ZWY-list-2 .title img {
		width: 19px;
		margin-right: 12px;
	}
	
	.ZWY-list-2 .title {
		width: 1250px;
		color: #1b87a4;
		font-size: 26px;
		margin-bottom: 25px;
	}
	
	.ZWY-list-2 .content {
		width: 1170px;
		display: flex;
		margin-top: 10px;
	}
	
	.ZWY-list-2 .content .left {
		flex: 1;
		float: left;
	}
	
	.ZWY-list-2 .content .left ul li:nth-child(3),
	.ZWY-list-2 .content .left ul li:nth-child(6) {
		margin-right: 0;
	}
	
	.ZWY-list-2 .content .left ul li:nth-child(2n+1) {
		background: #dae9f0;
	}
	
	.ZWY-list-2 .content .left ul li {
		float: left;
		width: 268px;
		text-align: center;
		height: 230px;
		background: #E2E2E2;
		margin-right: 8px;
		margin-bottom: 8px;
	}
	
	.ZWY-list-2 .content .left ul li .z-tilte {
		margin-top: 20px;
		height: 60px;
		line-height: 60px;
		width: 200px;
		border-bottom: 1px solid #999;
		font-size: 18px;
		font-weight: 600;
		color: #555;
	}
	
	.ZWY-list-2 .content .left ul li p {
		font-size: 14px;
		color: #555;
		line-height: 25px;
		margin-top: 15px;
	}
	
	.ZWY-list-2 .content .right {
		width: 310px;
		float: right;
		background: #e4e4e4;
		margin-top: -70px;
		height: 539px;
	}
	
	.ZWY-list-2 .right h1 {
		color: #4499b6;
		font-size: 18px;
		font-weight: 500;
		text-align: center;
		line-height: 60px;
	}
	
	.ZWY-list-2 .right .info h2 {
		color: #4499b6;
		font-size: 28px;
		font-weight: 500;
		text-align: center;
		left: 50%;
		top: -19px;
		margin-left: -16px;
		position: absolute;
	}
	
	.ZWY-list-2 .right .info {
		position: relative;
		margin-top: 20px;
	}
	
	.ZWY-list-2 .right .info:first-child {
		margin-top: 5px;
	}
	
	.ZWY-list-2 .line-l {
		border-bottom: 1px solid #888;
		width: 35%;
		position: absolute;
		left: 6%;
		top: 0;
	}
	
	.ZWY-list-2 .line-r {
		border-bottom: 1px solid #888;
		width: 35%;
		position: absolute;
		right: 6%;
		top: 0;
	}
	
	.ZWY-list-2 .right .info p {
		width: 88%;
		box-sizing: border-box;
		padding: 27px 20px;
		font-size: 13px;
		color: #555;
		line-height: 21px;
		border: 1px solid #888;
		border-top: 0;
	}
</style>