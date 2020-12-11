<template>
    <div style="width:100%;height:100%;background:#f0f0f6;">
        <div class="time">
            <div class="year">
                <span>发布于</span>
                <sapn class="week"></sapn>
                <span class="year"></span>
                <span class="month"></span>
                <span class="day"></span>
                <sapn class="hour"></sapn>
                <span class="min"></span>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>
<script>
export default {
    data() {
		return {
            imgurl:require('../assets/login_bg.png')
        }
    },
    components:{

    },
    created(){
        this.gotime()
    },
    methods:{
        gotime(str){
            let now = new Date().getTime()
            console.log(now)
            let oldtime = new Date(str).getTime()
            console.log(oldtime)
        }
    },
}
</script>