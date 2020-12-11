<template>
    <div class="fixed_top">
        <div class="dis_left_lf h50">
            <div class="lefttitle" @click="leftpro">
                返回
            </div>
            <div class="title">{{title}}</div>
            <div class="righttitle">取消</div>
        </div>
    </div>
</template>
<style lang="less">
    .fixed_top{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
    }
    .dis_left_lf{
        display: flex;
        flex-flow: row;
        justify-content: flex-start;
        align-items:center; 
        padding: 0 20px;
        background: #fff;
        box-shadow:0 1px 5px #ededed;/*no*/
    }
    .h50{
        height:96px;
    }
    .lefttitle{
        width: 100px;
    }
    .title{
        display: flex;
        flex:1;
        justify-content: center;
        align-items: center;
    }
    .righttitle{
        width: 100px;
        text-align: right;
        color:#333;
        cursor: pointer;
        &:hover{
            color:#fc7944;
        }
    }
</style>
<script>
export default {
    props:{
        title:{
            type:String,
            default:''
        },
        leftTitle:{
            type:String,
            default:''
        },
        rightTitle:{
            type:String,
            default:''
        },

    },
    data(){
        return{

        }
    },
    methods:{
        leftpro(){
           this.$emit('leftpro')
        }
    }
}
</script>