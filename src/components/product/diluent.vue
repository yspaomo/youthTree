<template>
	<div id="diluent">
		<div class="diluent-list">
			<div class="tip">
				<div class="left">以下为具体型号参数，供参考：</div>
				<div class="right">
					<更多产品信息请咨询公司专业技术人员>
				</div>
			</div>
			<div class="content">
				<div class="left">
					<!--80ab28-->
					<table height="332" border="0" cellspacing="0" cellpadding="0" class="el-table">
						<tr>
							<th>产品编号</th>
							<th>产品名称</th>
							<th>性能概述</th>
						</tr>
						<tr>
							<td>TH-24N</td>
							<td>NC底漆稀释剂</td>
							<td>通用标准型，干燥性，溶解力适中</td>
						</tr>
						<tr>
							<td>TH-24N</td>
							<td>NC底漆稀释剂</td>
							<td>通用标准型，干燥性，溶解力适中</td>
						</tr>
						<tr>
							<td>TH-25N</td>
							<td>NC底漆稀释剂</td>
							<td>通用标准型，干燥性，溶解力适中</td>
						</tr>
						<tr>
							<td>TH-34P</td>
							<td>PU底漆稀释剂</td>
							<td>通用标准型，干燥性，溶解力适中</td>
						</tr>
						<tr>
							<td>TH-35P</td>
							<td>PU哑光面漆稀释剂</td>
							<td>通用标准型，干燥性，溶解力适中</td>
						</tr>
						<tr>
							<td>TH-36P</td>
							<td>PU亮光面漆稀释剂</td>
							<td>通用标准型，干燥性，溶解力适中</td>
						</tr>
						<tr>
							<td>TH-64G</td>
							<td>GLAZE</td>
							<td>通用标准型，干燥性，溶解力适中</td>
						</tr>
					</table>
					<div class="con-info">
						<div class="title">
							施工提醒
						</div>
						<ul>
							<li>
								<h1>1</h1>
								<p>
									稀释剂的使用对漆膜质量影响很大，请使用配套产品。
								</p>
							</li>
							<li>
								<h1>2</h1>
								<p>稀释剂依季节温度的变化选择不同的稀释剂。</p>
							</li>
							<li>
								<h1>3</h1>
								<p>在使用慢干水时，切勿添加过量，以免影响涂料的干燥速度。</p>
							</li>
						</ul>
					</div>
				</div>
				<div class="right">
					<img src="@/components/product/d_right_1.jpg" />
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
	#diluent table th {
		background: #81ac27;
	}
	
	#diluent table td {
		padding: 10px 0;
	}
	
	.diluent-list {
		overflow: hidden;
		margin-top: 30px;
	}
	
	.diluent-list .content {
		width: 1170px;
		display: flex;
		margin-bottom: 30px;
		padding-bottom: 30px;
	}
	
	.diluent-list .tip {
		font-size: 15px;
		font-weight: 500;
		color: #555;
		width: 1170px;
		overflow: hidden;
		margin-bottom: 10px;
		margin-top: 20px;
	}
	
	.diluent-list .tip .left {
		float: left;
	}
	
	.diluent-list .tip .right {
		float: left;
		margin-left: 305px;
		font-size: 13px;
		margin-top: 3px;
	}
	
	.diluent-list .content .left {
		flex: 1;
		box-sizing: border-box;
		float: left;
		padding-right: 30px;
		border-right: 1px solid #cecece;
		margin-right: 30px;
	}
	
	.diluent-list .content .right {
		float: right;
		width: 350px;
	}
	
	.diluent-list .left p {
		font-size: 15px;
		color: #555;
		line-height: 25px;
		margin-bottom: 20px;
	}
	
	.diluent-list .left span {
		display: inline-block;
		margin-top: 20px;
		margin-bottom: 5px;
		font-size: 15px;
		color: #555;
		margin-left: 32px;
	}
	
	.diluent-list .content .left img {
		width: 100%;
	}
	
	.diluent-list .content .right img {
		width: 100%;
		height: 559px;
	}
	
	.diluent-list .content .con-info {
		overflow: hidden;
		margin-top: 20px;
	}
	
	.diluent-list .content .con-info .title {
		background: #81ac27;
		height: 40px;
		line-height: 40px;
		padding-left: 20px;
		width: 100%;
		color: #FFF;
		font-size: 17px;
	}
	
	.diluent-list .content .con-info ul li {
		float: left;
		width: 246px;
		height: 160px;
		box-sizing: border-box;
		background: #f5f5f5;
		margin-right: 10px;
		margin-top: 10px;
	}
	
	.diluent-list .content .con-info ul li:last-child {
		margin-right: 0;
		background: #e7e7e7;
	}
	
	.diluent-list .content .con-info ul li:first-child {
		background: #e7e7e7;
	}
	
	.diluent-list .content .con-info ul li h1 {
		color: #81ac27;
		font-size: 30px;
		text-align: center;
		font-weight: 500;
		margin-top: 20px;
	}
	
	.diluent-list .content .con-info ul li p {
		padding: 0 20px;
		margin-top: 10px;
	}
</style>