<template>
	<div class="">
		<div class="source">
			<div class="el-tabs el-tabs--top el-tabs--border-card">
				<div class="el-tabs__header is-top">
					<div class="el-tabs__nav-wrap is-top">
						<div class="el-tabs__nav-scroll">
							<div role="tablist" class="el-tabs__nav" style="transform: translateX(0px);">
								<!--<div id="tab-0" aria-controls="pane-0" role="tab" tabindex="-1" class="el-tabs__item is-top">用户管理</div>
								<div id="tab-1" aria-controls="pane-1" role="tab" tabindex="0" class="el-tabs__item is-top is-active" aria-selected="true">配置管理</div>
								<div id="tab-2" aria-controls="pane-2" role="tab" tabindex="-1" class="el-tabs__item is-top">角色管理</div>
								<div id="tab-3" aria-controls="pane-3" role="tab" tabindex="-1" class="el-tabs__item is-top">定时任务补偿</div>-->
								<div @click="table_tap(index)" :class="['el-tabs__item','is-top',index==tap?'is-active':'']" v-for="(item,index) in list">{{item.title}}</div>
							</div>
						</div>
						<div class="resize-triggers">
							<div class="expand-trigger">
								<div style="width: 687px; height: 40px;"></div>
							</div>
							<div class="contract-trigger"></div>
						</div>
					</div>
				</div>
				<div class="el-tabs__content">
					<div v-if="index==tap" class="el-tab-pane" v-for="(text, index) in lists">{{text.title}}</div>
				</div>
			</div>
		</div>
		
		<!--<transition name="fade">
	      <div class="pay-model" >
	        <div class="pay-style">
	          <div>
	            <input type="radio"  name="settleChoose" checked = "checked"  data-value='4' id="wechat" value="微信支付" v-model="style">  
	            <label for="wechat" >微信支付</label>
	          </div>
	          <div>
	            <input type="radio" name="settleChoose"  id="alipay" data-value='2' value="支付宝支付" v-model='style'>  
	            <label for="alipay"  >支付宝支付</label>
	          </div>
	          <div>
	            <input type="radio" name="settleChoose" id="tohome" data-value='1' value="货到付款" v-model='style'>  
	            <label for="tohome">货到付款</label>
	          </div>
	        </div>
	      </div>
	    </transition>-->
	    <!--<div>
	          <label class="pay-lable" >
	          <input type="radio" v-bind:checked = 'curPayMethod == 2' name="choosePay" value="2"> 
	          支付宝支付</label>
	        </div>
	        <div>
	          <label class="pay-lable" >
	          <input type="radio" v-bind:checked = 'curPayMethod == 4' name="choosePay" value="4"> 
	          微信支付</label>
	        </div>
	        <div>
	          <label class="pay-lable">
	          <input type="radio" v-bind:checked = 'curPayMethod == 1' name="choosePay" value="1"> 
	          修改为货到付款</label>
	        </div>-->
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[{title:"用户管理"},{title:"配置管理"},{title:"角色管理"},{title:"定时任务补偿"}],
				lists:[{title:"用户管理"},{title:"配置管理"},{title:"角色管理"},{title:"定时任务补偿"}],
				tap:0
			}
		},
		created(){
			
		},
		methods:{
			table_tap(index){
				this.tap=index
			}
		}
	}
</script>

<style>
	body, html {
	    margin: 0;
	    padding: 0;
	    height: 100%;
	    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
	    font-weight: 400;
	    -webkit-font-smoothing: antialiased;
	    -webkit-tap-highlight-color: transparent;
	}
	* {
		box-sizing: border-box;  
		outline: 0;
		-webkit-tap-highlight-color: transparent;
	}
	.source {
	    padding: 24px;
	}
	.el-tabs--border-card {
	    background: #fff;
	    border: 1px solid #dcdfe6;/* no*/
	    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
	}
	.el-tabs--border-card .el-tabs__header {
    background-color: #f5f7fa;
    border-bottom: 1px solid #e4e7ed;
    margin: 0;
}
.el-tabs__header {
    padding: 0;
    position: relative;
    margin: 0 0 15px;
}
.el-tabs__nav-wrap {
    overflow: hidden;
    margin-bottom: -1px;
    position: relative;
}
.el-tabs__nav-scroll {
    overflow: hidden;
}
.el-tabs__nav {
    white-space: nowrap;
    position: relative;
    transition: transform .3s;
    float: left;
    z-index: 2;
}
.el-tabs--border-card .el-tabs__header .el-tabs__item {
    transition: all .1s cubic-bezier(.645,.045,.355,1);
    border: 1px solid transparent;
    margin: -1px -1px 0;
    color: #909399;
}
.el-tabs__item {
    padding: 0 20px;
    height: 80px;
    box-sizing: border-box;
    line-height: 80px;
    display: inline-block;
    list-style: none;
    font-size: 30px;
    font-weight: 500;
    color: #303133;
    position: relative;
}
.el-tabs--bottom.el-tabs--border-card .el-tabs__item:nth-child(2), .el-tabs--bottom.el-tabs--card .el-tabs__item:nth-child(2), .el-tabs--bottom .el-tabs--left .el-tabs__item:nth-child(2), .el-tabs--bottom .el-tabs--right .el-tabs__item:nth-child(2), .el-tabs--top.el-tabs--border-card .el-tabs__item:nth-child(2), .el-tabs--top.el-tabs--card .el-tabs__item:nth-child(2), .el-tabs--top .el-tabs--left .el-tabs__item:nth-child(2), .el-tabs--top .el-tabs--right .el-tabs__item:nth-child(2) {
    /*padding-left: 20px;*/
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    color: #409eff;
    background-color: #fff;
    border-right-color: #dcdfe6;
    border-left-color: #dcdfe6;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item {
    transition: all .1s cubic-bezier(.645,.045,.355,1);
    border: 1px solid transparent;
    margin: -1px -1px 0;
    color: #909399;
}
.resize-triggers, .resize-triggers div, .contract-trigger:before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    z-index: -1;
}
.resize-triggers {
    animation: 1ms resizeanim;
    visibility: hidden;
    opacity: 0;
}
.resize-triggers div {
    background: #eee;
    overflow: auto;
}
.el-tabs--border-card .el-tabs__content {
    padding: 15px;
}
</style>