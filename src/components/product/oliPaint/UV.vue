<template>
	<div id="UV">
		<div class="oPaint-UV">
			<div class="UV-list-4">
				<div class="tip">
					<div class="t-left">以下为具体型号参数，供参考：</div>
					<div class="t-right">
						<更多产品信息请咨询公司专业技术人员>
					</div>
				</div>
				<div class="content">
					<div class="left">
						<table height="566" class="el-table" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<th width="20%">产品编号</th>
								<th width="30%">产品名称</th>
								<th>性能概述</th>
							</tr>
							<tr>
								<td>V007</td>
								<td>UV特清透明底</td>
								<td>砂光性好，附着力佳，透明度好<br/>流平性佳，低气味，耐擦拭</td>
							</tr>
							<tr>
								<td>V015</td>
								<td>UV高清透明底</td>
								<td>砂光性好、透明度极高，附着力佳<br/>流平性佳，低气味，耐擦拭</td>
							</tr>
							<tr>
								<td>V030</td>
								<td>UV透明底</td>
								<td>透明度好，流平性佳，附着力佳<br/>耐擦拭，低气味</td>
							</tr>
							<tr>
								<td>VP-COF**</td>
								<td>UV哑光透明面漆</td>
								<td>流平性佳，附着力佳，透明度好<br/>手感细腻，光泽柔和，低气味</td>
							</tr>
							<tr>
								<td>VD501</td>
								<td>UV白底漆</td>
								<td>遮盖力强，流平性佳<br/>防沉淀，低气味</td>
							</tr>
							<tr>
								<td>VD502</td>
								<td>UV高遮盖白底漆</td>
								<td>遮盖力强，丰满度好，流平性佳<br/>防沉淀，低气味</td>
							</tr>
							<tr>
								<td>VD50F**</td>
								<td>UV哑光白面漆</td>
								<td>丰满度好，流平性佳，遮盖力强<br/>手感细腻，光泽柔和，低气味</td>
							</tr>
							<tr>
								<td>VD701</td>
								<td>UV黑底</td>
								<td>遮盖力强，流平性好<br/>防沉淀，低气味</td>
							</tr>
							<tr>
								<td>VP-70F**</td>
								<td>UV哑光黑面漆</td>
								<td>丰满度好，遮盖力强，流平性好<br/>手感细腻，光泽柔和，低气味</td>
							</tr>

						</table>
					</div>
					<div class="right">
						<img src="@/components/product/oliPaint/uv_right_1.jpg" />
					</div>
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
	.oPaint-UV {
		overflow: hidden;
		margin-top: 30px;
	}
	
	.oPaint-UV .title {
		width: 1250px;
	}
	
	.oPaint-UV .title img {
		width: 180px;
	}
	
	.oPaint-UV .content {
		width: 1170px;
		display: flex;
		margin-bottom: 30px;
		padding-bottom: 20px;
	}
	
	.oPaint-UV .tip {
		font-size: 15px;
		font-weight: 500;
		color: #555;
		width: 1170px;
		overflow: hidden;
		margin-bottom: 10px;
		margin-top: 20px;
	}
	
	.oPaint-UV .content .left {
		flex: 1;
		float: left;
		padding-right: 30px;
		border-right: 1px solid #cecece;
		margin-right: 30px;
		margin-top: 0;
	}
	
	.oPaint-UV .content .right {
		float: right;
		width: 328px;
	}
	
	.oPaint-UV .content table th {
		background: #db6d4a;
	}
	
	.oPaint-UV .content img {
		width: 100%;
		height: 566px;
	}
	
	.oPaint-UV .tip .t-left {
		float: left;
	}
	
	.oPaint-UV .tip .t-right {
		float: left;
		margin-left: 330px;
		font-size: 13px;
		margin-top: 3px;
	}
</style>