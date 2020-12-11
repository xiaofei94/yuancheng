<template>
	<div class="">
		<div class="dialog" v-show="showMask">
        <div class="dialog-container">
            <div class="dialog-title">{{title}}</div>
            <div class="content" v-html="content"></div>
            <div class="btns">
                <div v-if="type != 'confirm'" class="default-btn" @click="closeBtn">
                    {{cancelText}}
                </div>
                <div v-if="type == 'danger'" class="danger-btn" @click="dangerBtn">
                    {{dangerText}}
                </div>
                <div v-if="type == 'confirm'" class="confirm-btn" @click="confirmBtn">
                    {{confirmText}}
                </div>
            </div>
            <div class="close-btn" @click="closeMask"><i class="iconfont icon-close"></i></div>
        </div>
        
    </div>
	</div>
</template>

<script>
	export default{
		props: {
	        value: {},
	        // 类型包括 defalut 默认， danger 危险， confirm 确认，
	        type:{
	            type: String,
	            default: 'default'
	        },
	        content: {
	            type: String,
	            default: ''
	        },
	        title: {
	            type: String,
	            default: ''
	        },
	        confirmText: {
	            type: String,
	            default: '确认'
	        },
	        cancelText: {
	            type: String,
	            default: '取消'
	        },
	        dangerText: {
	            type: String,
	            default: '删除'
	        },
	    },
	    data(){
	    	return{
	    		 showMask: false,
	    	}
	    },
	    methods:{
	    	 closeMask(){
            this.showMask = false;
	        },
	        closeBtn(){
	            this.$emit('cancel');
	            this.closeMask();
	        },
	        dangerBtn(){
	            this.$emit('danger');
	            this.closeMask();
	        },
	        confirmBtn(){
	            this.$emit('confirm');
	            this.closeMask();
	        }
	    },
	    mounted(){
	        this.showMask = this.value;
	    },
	    watch:{
	        value(newVal, oldVal){
	            this.showMask = newVal;
	        },
	        showMask(val) {
	            this.$emit('input', val);
	        }
	    },
	}
</script>

<style>
	.el-dropdown-menu {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    margin: 5px 0;
    background-color: #fff;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}

.el-popper .popper__arrow, .el-popper .popper__arrow::after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
}
.el-popper .popper__arrow {
    border-width: 6px;
    -webkit-filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03));
    filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03));
}
.el-popper[x-placement^=bottom] .popper__arrow {
    top: -6px;
    left: 50%;
    margin-right: 3px;
    border-top-width: 0;
    border-bottom-color: #ebeef5;
}
.el-popper[x-placement^=bottom] .popper__arrow::after {
    top: 1px;
    margin-left: -6px;
    border-top-width: 0;
    border-bottom-color: #fff;
}
.el-popper .popper__arrow::after {
    content: " ";
    border-width: 6px;
}
</style>