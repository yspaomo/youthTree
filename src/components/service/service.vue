<template>
	<div id="service">
		<div class="banner-wrapper">
			<img src="@/components/service/banner.jpg" />
		</div>

		<div class="content-wrapper">
			<div class="title">
				油漆施工中常见弊病种类及最佳解决方案
			</div>
			<div class="content">
				<div class="c-left">
					<table border="0" cellspacing="0" cellpadding="0">
						<tr>
							<th>问题</th>
							<th style="width: 240px;">产生原因</th>
							<th>解决方案</th>
						</tr>
						<tr class="tr1">
							<td class="td1" rowspan="6">流挂</td>
							<td>1：涂料施工粘度低，涂层过厚。</td>
							<td>1：调配好涂料粘度，涂层厚度一次不能超过30μm</td>
						</tr>
						<tr class="tr1">
							<td>2：喷涂距离太近，喷枪移动速度太慢。</td>
							<td>2：喷涂距离为150-300 mm，并控制喷枪移动速度</td>
						</tr>
						<tr class="tr1">
							<td>3：喷枪口径太大。</td>
							<td>3：根据实际情况选用适当的品径喷枪，1.5-2mm。</td>
						</tr>
						<tr class="tr1">
							<td>4：喷涂空气压力不均。</td>
							<td>4：施工中保持稳定的空气压力。</td>
						</tr>
						<tr class="tr1">
							<td>5：涂料含有密度大的颜料，搅拌不均。</td>
							<td>5：施工中涂料要多次充分搅拌均匀。</td>
						</tr>
						<tr class="tr1">
							<td>6：被涂表面过于光滑。</td>
							<td>6：保持被涂物表面适度的粗糙度，各层仔细打磨。</td>
						</tr>

						<tr class="tr2">
							<td class="td1" rowspan="6">发白</td>
							<td>1：施工湿度大，温度高，溶剂挥发快。</td>
							<td>1：调整施工环境中的温度或湿度，加入慢干水。</td>
						</tr>
						<tr class="tr2">
							<td>2：涂料或稀料中含有水分。</td>
							<td>2：注意选用正牌产品涂料。</td>
						</tr>
						<tr class="tr2">
							<td><span class="span">3：</span><p class="p-left">施工中油水分离器出现故障，水分带入涂料中。</p></td>
							<td><span class="span">3：</span><p class="p-right">修复油水分离器，并及时排除油水分离器中的水分。</p></td>
						</tr>
						<tr class="tr2">
							<td>4：稀料溶解力不够，涂料树脂析出变白。</td>
							<td>4：选用配套稀料。</td>
						</tr>
						<tr class="tr2">
							<td>5：手汗，盐分等沾污工作。</td>
							<td>5：戴布手套作业，将手汗沾污处打磨干净。</td>
						</tr>
						<tr class="tr2">
							<td>6：基材含水率偏高。</td>
							<td>6：基材含水率要求与当地木材平衡含水率相当。</td>
						</tr>

						<tr class="tr1">
							<td class="td1" rowspan="6">起皱</td>
							<td>1：底面干速不一，外干里不干而起皱。</td>
							<td>1：注意使用底层快干，面层干速稍慢的涂料。</td>
						</tr>
						<tr class="tr1">
							<td>2：涂料施工粘度过大，涂层过厚。</td>
							<td>2：施工中涂料粘度要适中，且控制好涂层厚度。</td>
						</tr>
						<tr class="tr1">
							<td>3：涂料配方有问题。</td>
							<td>3：选用合适涂料。</td>
						</tr>
						<tr class="tr1">
							<td>4：采用不配套的稀料。</td>
							<td>4：选用配套稀料。</td>
						</tr>
						<tr class="tr1">
							<td>5：喷枪油量太大，距离太近。</td>
							<td>5：合理调好油量和距离。</td>
						</tr>
						<tr class="tr1">
							<td>6：固化剂的量加入太少。</td>
							<td>6：正确按重量比操作。</td>
						</tr>

						<tr class="tr2">
							<td class="td1" rowspan="7">桔皮</td>
							<td>1：溶剂挥发快，涂料流平不好。</td>
							<td>1：合理选用稀料。</td>
						</tr>
						<tr class="tr2">
							<td>2：涂料自身流平差。</td>
							<td>2：调配好涂料粘度。</td>
						</tr>
						<tr class="tr2">
							<td>3：喷枪嘴口径大，涂料粘度高。</td>
							<td>3：选用合适口径的喷枪。</td>
						</tr>
						<tr class="tr2">
							<td><span class="span">4：</span><p class="p-left">喷涂距离不当，空气压力不足，涂料雾化不好。</p></td>
							<td><span class="span">4：</span><p class="p-right">调整空气压力及雾化效果适中，并调整好喷涂距离。</p></td>
						</tr>
						<tr class="tr2">
							<td>5：被涂物表面不平整，影响涂料流平。</td>
							<td>5：将被涂料充分打磨，保证被涂物表面平整。</td>
						</tr>
						<tr class="tr2">
							<td>6：涂料或稀料中吸入水分。</td>
							<td>6：剩余涂料或稀料注意密封。</td>
						</tr>
						<tr class="tr2">
							<td>7：稀料不配套。</td>
							<td>7：配套使用稀料。</td>
						</tr>

						<tr class="tr1">
							<td class="td1" rowspan="9">起泡</td>
							<td>1：被涂表面有油污，水分。</td>
							<td>1：使被涂物表面保持干爽洁净。</td>
						</tr>
						<tr class="tr1">
							<td>2：涂料本身耐水性差。</td>
							<td>2：选用耐水，耐潮涂料。</td>
						</tr>
						<tr class="tr1">
							<td>3：木材含水率高，不经干燥处理就施工。</td>
							<td><span class="span">3：</span><p class="p-right">要求木材含水率与当地平衡含水率相当（如北京10%）。</p></td>
						</tr>
						<tr class="tr1">
							<td>4：稀释剂选用不合理，挥发太快。</td>
							<td>4：添加慢干水，调整挥发速度。</td>
						</tr>
						<tr class="tr1">
							<td>5：环境温度过高，湿度太大，通风不良。</td>
							<td>5：避免涂层放在高温，高湿的环境中。</td>
						</tr>
						<tr class="tr1">
							<td>6：涂层过厚，溶剂挥发困难。</td>
							<td>6：不宜过厚，一次涂层不超过30μm。</td>
						</tr>

						<tr class="tr1">
							<td>7：空压机及分离器水份分离不好。</td>
							<td>7：定期排放油，水或检修分离器。</td>
						</tr>
						<tr class="tr1">
							<td><span class="span">8：</span><p class="p-left">固化剂加入油漆中搅匀后，放置时间不够。</p></td>
							<td>8：搅拌后，静置15分钟（25℃）。</td>
						</tr>
						<tr class="tr1">
							<td>9：空气压力过高，涂料中混入空气多。</p></td>
							<td>9：调整空气压力至正常值。</td>
						</tr>

						<tr class="tr2">
							<td class="td1" rowspan="5">露底</td>
							<td><span class="span">1：</span><p class="p-left">涂料中树脂多，颜料含量少，遮盖力下降。</p></td>
							<td>1：选用合适涂料。</td>
						</tr>
						<tr class="tr2">
							<td>2：涂料搅拌不均，颜料没有搅拌起来。</td>
							<td>2：施工前注意搅拌均匀。</td>
						</tr>
						<tr class="tr2">
							<td>3：涂料粘度低，涂层太薄。</td>
							<td>3：调配好涂料粘度，涂层要厚薄适当。</td>
						</tr>
						<tr class="tr2">
							<td>4：操作中产生漏涂。</td>
							<td>4：按一定顺序操作，避免漏涂。</td>
						</tr>
						<tr class="tr2">
							<td>5：底涂层颜色深，面涂层颜色浅。</td>
							<td>5：底层，面层涂料颜色不宜相差太大。</td>
						</tr>

					</table>
				</div>
				<div class="c-right">
					<table border="0" cellspacing="0" cellpadding="0">
						<tr>
							<th>问题</th>
							<th style="width: 240px;">产生原因</th>
							<th>解决方案</th>
						</tr>
						<tr class="tr1">
							<td class="td1" rowspan="3">砂纸纹</td>
							<td>1：打磨使用砂纸粒度过粗。</td>
							<td>1：打磨注意选用合适的砂纸，砂布。</td>
						</tr>
						<tr class="tr1">
							<td>2：涂层干燥不彻底就打磨。</td>
							<td>2：涂层实干再打磨。</td>
						</tr>
						<tr class="tr1">
							<td>3：手工磨痕太深。</td>
							<td>3：可增加底漆涂层，磨平整后再涂面层。</td>
						</tr>

						<tr class="tr2">
							<td class="td1" rowspan="4">黄变</td>
							<td>1：阳光直射，漆膜老化分解。</td>
							<td>1：选用耐黄变涂料可减低。</td>
						</tr>
						<tr class="tr2">
							<td>2：环境因素（如：空气，水等）。</td>
							<td>2：加强家具保养措施（如：打蜡等）。</td>
						</tr>
						<tr class="tr2">
							<td>3：高热干燥。</td>
							<td><span class="span">3：</span><p class="p-right">加热温度不可过高（60℃以下），时间不宜过长。</p></td>
						</tr>
						<tr class="tr2">
							<td>4：使用非耐黄变涂料。</td>
							<td>4：选用合适涂料。</td>
						</tr>

						<tr class="tr1">
							<td class="td1" rowspan="3">咬底</td>
							<td>1：底面不配套，如硝基底漆，聚脂面层。</td>
							<td>1：底层与面层涂料注意配套使用。</td>
						</tr>
						<tr class="tr1">
							<td>2：底层未干就涂面层涂料。</td>
							<td>2：同一类型的涂料，底层实干后再涂面层涂料。</td>
						</tr>
						<tr class="tr1">
							<td>3：底层过厚。</td>
							<td>3：不宜过厚，一次涂层不超过30μm。</td>
						</tr>

						<tr class="tr2">
							<td class="td1" rowspan="5"><span class="block">不干或粘砂</span></td>
							<td>1：蓝，白水比例不当。</td>
							<td>1：严格按照蓝，白水配比表，按温度湿度调整。</td>
						</tr>
						<tr class="tr2">
							<td>2：蓝，白水未能充分搅拌均匀。</td>
							<td>2：加入蓝，白水后充分搅拌均匀。</td>
						</tr>
						<tr class="tr2">
							<td>3：环境温度低于10℃，湿度高于85%。</td>
							<td>3：提高施工环境温度，降低温度。</td>
						</tr>
						<tr class="tr2">
							<td>4：干燥时间不够。</td>
							<td>4：适当延长干燥时间。</td>
						</tr>
						<tr class="tr2">
							<td>5：使用质量差的砂纸或砂纸受潮。</td>
							<td>5：选用正牌砂纸，并将砂纸放在干燥地方。</td>
						</tr>
						
						
						<tr class="tr1">
							<td class="td1" rowspan="4">开裂</td>
							<td>1：蓝，白水比例不当，超量加入。</td>
							<td><span class="span">1：</span><p class="p-right">严格按照蓝，白水配比表，按适合的温度，湿度进行调整。</p></td>
						</tr>
						<tr class="tr1">
							<td>2：木材含水率高，不经干燥处理就施工。</td>
							<td>2：要求木材含水率与当地平衡含水率相当。</td>
						</tr>
						<tr class="tr1">
							<td><span class="span">3：</span><p class="p-left">木材含油脂未经处理，日久渗出造成漆膜局部开裂。</p></td>
							<td><span class="span">3：</span><p class="p-right">清楚木材油脂并用封闭底漆做封闭处理。</p></td>
						</tr>
						<tr class="tr1">
							<td><span class="span">4：</span><p class="p-left">环境温差大，漆膜受冷热收缩的影响，引起开裂。</p></td>
							<td>4：选择适宜的环境条件下施工。</td>
						</tr>

						<tr class="tr2">
							<td class="td1" rowspan="3">下陷</td>
							<td>1：PU底未完全干透喷PE底漆。</td>
							<td>1：适当延长PU 底的干燥时间，实干后再喷PE底。</td>
						</tr>
						<tr class="tr2">
							<td>2：PE底未完全干透喷面漆。</td>
							<td>22：适当延长PE 底干燥时间和调整蓝，白水用量。</td>
						</tr>
						<tr class="tr2">
							<td>3：目标含水率高，不经处理就施工。</td>
							<td>3：要求木材含水率与当地平均含水率相当。</td>
						</tr>

						<tr class="tr1">
							<td class="td1" rowspan="5"><span>表面粗糙</span></td>
							<td>1：施工环境通风排尘不良，有大量灰尘。</td>
							<td>1：改善施工环境，加强通风排尘。</td>
						</tr>
						<tr class="tr1">
							<td>2：涂料喷涂前未经过滤。</td>
							<td>2：选用合适的过滤网过滤后使用。</td>
						</tr>
						<tr class="tr1">
							<td><span class="span">3：</span><p class="p-left">调漆工具或喷枪未安全清洁干净，残留污染物。</p></td>
							<td>3：对上述用具进行清洁除污处理。</td>
						</tr>
						<tr class="tr1">
							<td>4：涂料中物质细度不够。</td>
							<td>4：选用细度要求合理的涂料。</td>
						</tr>
						<tr class="tr1">
							<td>5：底层未经充分打磨平整。</td>
							<td>5：选用合适的砂纸对底层充分打磨平整。</td>
						</tr>
						

						<tr class="tr2">
							<td class="td1" rowspan="6"><span class="block">缩孔或跑油</span></td>
							<td><span class="span">1：</span><p class="p-left">涂料和稀释剂中有水或有油滴落在涂层表面。</p></td>
							<td><span class="span">1：</span><p class="p-right">处理好油水分离器，防止水分混入其中，或避免油，蜡落在涂层表面。</p></td>
						</tr>
						<tr class="tr2">
							<td><span class="span">2：</span><p class="p-left">被涂物表面有油，蜡，皂类，酸，碱等其他杂质。</p></td>
							<td>2：清理被污物表面。</td>
						</tr>
						<tr class="tr2">
							<td>3：空气压力太大，喷枪与工件距离太近。</td>
							<td>3：调整空气压力，以及喷枪与工件之间的距离。</td>
						</tr>
						<tr class="tr2">
							<td>4：涂料的粘度过高或过低。</td>
							<td>4：调配好涂料的粘度。</td>
						</tr>
						<tr class="tr2">
							<td>5：被涂物表面粗糙不均，打磨不完整。</td>
							<td>5：涂装前检查工件打磨程度是否平整，细致。</td>
						</tr>
						<tr class="tr2">
							<td>6：环境被污染。</td>
							<td>6：环境被污染。</td>
						</tr>
						
					</table>
					
					<div class="query-left">
						<p class="p1">青春树漆&nbsp;&nbsp;&nbsp;&nbsp;健康环保&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;关爱家人&nbsp;&nbsp;&nbsp;&nbsp;自然守护</p>
						<p class="p3">·&nbsp;&nbsp;高效净味&nbsp;&nbsp;·&nbsp;&nbsp;长效清新&nbsp;&nbsp;·&nbsp;&nbsp;健康优选&nbsp;&nbsp;·</p>
						<p class="p2"><span>TAKE CARE OF TOUR FAMILY</span><img src="@/components/aboutUs/tree.png" /><span>PROTECT THE ENVIRONMENT</span></p>
					</div>
					<img src="@/components/service/query_right_10.jpg" class="query-right"/>
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
	#service .banner-wrapper img {
		width: 100%;
	}
	
	#service .content-wrapper {
		overflow: hidden;
		width: 1170px;
		border-top: 1px solid #efefef;
		margin-top: 40px;
	}
	
	#service .content-wrapper .title {
		color: #2d8063;
		font-size: 22px;
		font-weight: 500;
		margin: 30px 0;
	}
	
	#service .content-wrapper .c-left {
		box-sizing: border-box;
		padding-right: 10px;
		width: 50%;
		float: left;
	}
	
	#service .content-wrapper .c-left img {
		width: 100%;
	}
	
	#service .content-wrapper .c-right {
		padding-left: 10px;
		box-sizing: border-box;
		float: right;
		width: 50%;
	}
	
	#service .content-wrapper .c-right img {
		width: 100%;
	}
	
	#service .content-wrapper .c-right .query-left {
		width: 315px;
		margin-top: 30px;
		float: left;
	}
	
	#service .content-wrapper .c-right .p1 {
		font-size: 14px;
		color: #2d8063;
		font-weight: bold;
		text-align: center;
	}
	#service .content-wrapper .c-right .p2{
		text-align: center;
	}
	
	#service .content-wrapper .c-right .p2 img {
		width: 19px;
		vertical-align: text-top;
		margin: 0 4px;
	}
	
	#service .content-wrapper .c-right .p2 span {
		font-size: 9px;
		font-family: cursive;
		color: #2d8063;
	}
	#service .content-wrapper .c-right .p3{
		color: #2d8063;
		font-weight: bold;
		text-align: center;
		margin: 8px 0;
	}
	
	#service .content-wrapper .c-right img.query-right {
		width: 180px;
		margin-left: 30px;
		float: left;
	}
	
	#service table {
		width: 100%;
	}
	
	#service table th {
		background: #22634d;
		color: #fff;
		height: 30px;
		border-right: 3px solid #fff;
		min-width: 45px;
	}
	
	#service table td {
		height: 26px;
		border-top: 2px solid #fff;
		border-right: 3px solid #fff;
		padding-left: 5px;
		font-size: 12px;
	}
	
	#service table .tr1 td {
		background: #e5eedd;
	}
	
	#service table .tr1 td.td1 {
		text-align: center;
		background: #c9deb3;
		padding: 0;
	}
	
	#service table .tr2 td {
		background: #e5f0f2;
	}
	
	#service table .tr2 td.td1 {
		text-align: center;
		background: #c1e0e5;
		padding: 0;
	}
	
	#service table td span {
		display: block;
		width: 20px;
	}
	#service table td .span{
		display: inline-block;
		vertical-align: top;
	}
	#service table td p{
		display: inline-block;
	}
	#service table tr .p-right{
		width: 240px;
	}
	#service table tr .p-left{
		width: 215px;
	}
</style>