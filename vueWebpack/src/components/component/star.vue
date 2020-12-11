<template>
    <div>
        <div class="dis_flex_left">
            <div class="img_100" v-for="(star, index) in stars" @click="tostar(index)">
                <img :src="star.src" alt="">
            </div>
        </div>
        <div class="">{{starnum}}</div>
        <div id="app">
            <ul class="star">
                <span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item" track-by="index"></span>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:{

    },
    
    data(){
        return{
            stars:[
                {
                    src:require("../../assets/xing_02.png"),
                    active:false
                },
                {
                    src:require("../../assets/xing_02.png"),
                    active:false
                },
                {
                    src:require("../../assets/xing_02.png"),
                    active:false
                },
                {
                    src:require("../../assets/xing_02.png"),
                    active:false
                },
                {
                    src:require("../../assets/xing_02.png"),
                    active:false
                }
            ],
            starnum:0,
            score: 4.6,
            // on:{
            //     backgroundUrl:require("../../assets/b.png")
            // }
        }
    },
    methods:{
        tostar(index){
            // this.$emit("tostar")
            let star_index=index+1;
            let ind_length=this.stars.length;
            this.starnum=star_index;
                for(let i=0;i<ind_length;i++){
                    this.stars[i].src=require("../../assets/xing_02.png")
                    this.stars[i].active=false
                }
                if(star_index==this.starnum){
                    for(let i=0;i<star_index;i++){
                        this.stars[i].src=require("../../assets/xing_01.png")
                        this.stars[i].active=true
                    }
                }
            }
            
        // }
    },
    computed:{ //计算属性
         itemClasses(){
             let result = [];
             let score = Math.floor(this.score * 2 ) / 2;
             let hasDecimal = score % 1 !== 0;
             let integer = Math.floor(score);
             for(let i=0;i<integer;i++){
                 result.push("on");
             }
             if(hasDecimal){
                 result.push("half");
             }
             while(result.length < 5){
                result.push("off");
             }
            return result;
         }
     }
}
</script>
<style lang="">
    .dis_flex_left{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center
    }
    .img_100{
        width: 30px;
        height: 30px;
    }
    img{
        width: 100%;
        height: 100%;
    }

    .star{
        font-size: 0;
    }
    .star-item{
        display: inline-block;
        background-repeat: no-repeat;
        width: 40px;
        height: 40px;
        /* margin-right: 22px; */
        background-size: 100%;
     }
      .star-item.on{
         background: url('@/../../../assets/fc.png') no-repeat center;
     }
     .star-item.half{
         background-image: url('@/../../../assets/b.png');
     }
     .star-item.off{
         background: url('@/../../../assets/h.png') no-repeat center;
     }
</style>