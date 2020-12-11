<template>
    <div class="wrap">
        <view class="list">
            <view class="list_item" v-for="(item,index) in list" :key="index">
                <view class="list_item_t flex">
                    <view class="checkbox" style="margin:0 30rpx" @click="checkAllGoods(item)">
                        <image
                            v-if="item.checkAll"
                            src="/static/images/car-checked.png"
                            mode="widthFix"
                        />
                        <image v-else src="/static/images/pay-unchecked.png" mode="widthFix" />
                        <!-- <image src="/static/images/pay-lock.png " mode="widthFix" /> -->
                    </view>
                    <view>{{item.shopName}}店铺1111A</view>
                </view>
                <view
                    class="list_item_act"
                >{{item.startTime}} - {{item.endTime}} {{item.activityName}}本店商品满100元减20元</view>
                <view v-for="(item2,index2) in item.goods" :key="index2">
                    <view class="list_item_goods">
                        <view class="checkbox list_item_goods_l" @click="checkGoods(item2,item)">
                            <image
                                v-if="item2.checked"
                                src="../../assets/radius@2x.png"
                                mode="widthFix"
                            />
                            <image v-else src="../../assets/radius@2x.png" mode="widthFix" />
                            <!-- <image src="/static/images/pay-lock.png" mode="widthFix" /> -->
                        </view>
                        <view class="list_item_goods_c">
                            <!-- <image
                                src="http://jz.uat1.rscloud.com/img/logo.3c167510.png"
                                mode="widthFix"
                            /> -->
                        </view>
                        <view class="list_item_goods_r">
                            <view class="list_item_goods_rt">{{item2.prodName}}商品</view>
                            <view class="list_item_goods_rc">{{item2.specsValue}}150/80/xs</view>
                            <view class="list_item_goods_rb">￥{{item2.price}}</view>
                        </view>
                        <view class="u-number-box">
                            <!--<u-number-box
                                :disabled-input="true"
                                :min="1"
                                :max="999999"
                                v-model="item2.goodsNum"
                                @minus="(val,obj)=>delNum(val,item2)"
                                @plus="(val,obj)=>addNum(val,item2)"
                            ></u-number-box>-->
                        </view>
                    </view>
                    <view class="list_item_goods_b">
                        <text>配送方式</text>
                        <text>支持自提</text>
                    </view>
                </view>
            </view>
        </view>
        <view class="footer">
            <view class="checkbox" @click="checkAllShops">
                <image
                    style="margin:0 30rpx"
                    v-if="allCheck"
                    src="../../assets/radius@2x.png"
                    mode="widthFix"
                />
                <image
                    style="margin:0 30rpx"
                    v-else
                    src="../../assets/radius@2x.png"
                    mode="widthFix"
                />
                <text>全选</text>
                <!-- <image src="/static/images/pay-lock.png" mode="widthFix" />-->
            </view>
            <view>
                <text>
                    合计:
                    <text style="color:#EA5205;font-weight:bold">￥{{totalMoney}}</text>
                </text>
                <button class="submit_btn">提交订单</button>
            </view>
        </view>
    </div>
</template>

<script>
//import uNumberBox from '@/components/uview/u-number-box'
/**
 * 参数说明
 * @property  {String} shopName 店铺名称
 * @property  {String} startTime 活动开始时间
 * @property  {String} endTime 活动结束时间
 * @property  {String} activityName  活动名称
 * @property  {Array}  goods  商品列表
 * @property  {Number} distributeWay 配送方式 1：自提 2： 快递
 * @property  {Number} goodsId 商品ID
 * @property  {String} prodName 商品名称
 * @property  {String} skuImageUrl 商品图片
 * @property  {Number} goodsNum  商品数量
 * @property  {String} goodsSku  商品sku
 * @property  {Number} id ID
 * @property  {Number} price 价格
 * @property  {String} specsValue 规格
 * @property  {Number} status 状态  1:正常;2:无效
 * @property  {String} endTime 活动结束时间
 * @property  {String} endTime 活动结束时间
 * @event {Function} delNum 减少商品数量
 * @event {Function} addNum 增加商品数量
 *
 */
export default {
//  components: { uNumberBox },
    data() {
        return {
            // allCheck: false,
            list: [
                {
                    shopName: '',
                    startTime: '',
                    endTime: '',
                    activityName: '',
                    checkAll: false,
                    goods: [
                        {
                            skuImageUrl: '',
                            prodName: 'a',
                            specsValue: '',
                            price: 10,
                            goodsNum: 1,
                            distributeWay: '',
                            checked: false
                        },
                        {
                            skuImageUrl: '',
                            prodName: '',
                            specsValue: '',
                            price: 20,
                            goodsNum: 2,
                            distributeWay: '',
                            checked: false
                        }
                    ]
                },
                {
                    shopName: '',
                    startTime: '',
                    endTime: '',
                    activityName: '',
                    checkAll: false,
                    goods: [
                        {
                            skuImageUrl: '',
                            prodName: 'a',
                            specsValue: '',
                            price: 30,
                            goodsNum: 3,
                            distributeWay: '',
                            checked: false
                        },
                        {
                            skuImageUrl: '',
                            prodName: '',
                            specsValue: '',
                            price: 40,
                            goodsNum: 4,
                            distributeWay: '',
                            checked: false
                        }
                    ]
                }
            ]
        }
    },
    created() {
        this.getData()
    },
    computed: {
        allCheck: {
            get: function() {
                return this.list.every(e => e.checkAll) //是否选中所有店铺
            },
            set: function(params) {
                this.list.map(item => (item.checkAll = params))
            }
        },
        totalMoney: function() {
            let sum = 0
            if (this.list.length) {
                this.list.map(item => {
                    if (item.goods.length) {
                        item.goods.map(item2 => {
                            if (item2.checked) {
                                sum += item2.goodsNum * item2.price
                            }
                        })
                    }
                })
            } else {
                sum = 0
            }
            return sum
        }
    },
    methods: {
        delNum(val, item) {
            console.log(val)
            console.log(item)
        },
        addNum(val, item) {
            console.log(val)
            console.log(item)
        },
        getData() {
            // if (this.list.length) {
            //     this.list.map(item => {
            //         item.checkAll = false;
            //         if (item.goods.length) {
            //             item.goods.map(item2 => item2.checked = false)
            //         }
            //     }
            // }
        },
        //选中店铺下的所有商品
        checkAllGoods(item) {
            item.checkAll = !item.checkAll
            item.goods.forEach(item2 => {
                item2.checked = item.checkAll
            })
        },
        //选中所有店铺和商品
        checkAllShops() {
            this.allCheck = !this.allCheck
            this.list.map(item => {
                item.checkAll = this.allCheck
                item.goods.map(item2 => (item2.checked = this.allCheck))
            })
        },
        //选中某个商品
        checkGoods(item2, item) {
            item2.checked = !item2.checked
            let isCheckAllGoods = item.goods.every(e => e.checked) //是否选中该店铺下的全部商品
            item.checkAll = isCheckAllGoods ? true : false
        }
    }
}
</script>

<style lang="less" scoped>
.wrap {
    background: #f7f7f7;
}
.list {
    overflow: hidden;
    padding-bottom: 150rpx;
}
.list_item {
    background: #fff;
    margin-top: 20rpx;
    
    
}
.list_item_t {
        display: flex;
        padding: 30rpx 0 20rpx;
    }
    .list_item_act {
        margin: 0 30rpx 0 96rpx;
        background: rgba(153, 117, 243, 0.1);
        color: #9975f3;
        border-radius: 12rpx;
        font-size: 24rpx;
        padding: 10rpx;
    }
    .list_item_goods {
        height: 220rpx;
        display: flex;
        align-items: center;
        margin: 0 30rpx;
        position: relative;
        
            
    }
.u-number-box {
            position: absolute;
            right: 0;
            bottom: 30rpx;
        }
        .list_item_goods_l {
            flex-shrink: 0;
          
        }
         .list_item_goods_l image {
                margin: 30rpx 30rpx 30rpx 0;
            }
        .list_item_goods_c {
            background: #efefef;
            border-radius: 12rpx;
            width: 160rpx;
            height: 160rpx;
            line-height: 160rpx;
            flex-shrink: 0;
            text-align: center;
            
        }
        .list_item_goods_c image {
                width: 90%;
                vertical-align: middle;
            }
        .list_item_goods_r {
            margin-left: 20rpx;
            
        }
        .list_item_goods_rt {
                /*.line_2;*/
                font-size: 30rpx;
                font-weight: 400;
                line-height: 42rpx;
                height: 100rpx;
            }
.list_item_goods_rc {
                font-size: 24rpx;
                color: #999;
            }
            .list_item_goods_rb {
                font-size: 28rpx;
                color: #ea5205;
                font-weight: bold;
            }
.list_item_goods_b {
        margin: 0 30rpx;
        padding: 0 0 20rpx 60rpx;
        display: flex;
        justify-content: space-between;
        border-bottom: 2rpx solid #f1f1f1;
       
    }
.list_item_goods_b text {
            font-size: 24rpx;
            color: #999;
        }
.checkbox {
    display: flex;
    justify-content: center;
    align-items: center;}
.checkbox image {
        width: 36rpx;
        height: 36rpx;
    }

.footer {
    width: 100%;
    height: 140rpx;
    background: #fff;
    position: fixed;
    bottom: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #f3f3f3;
    
}
.footer .submit_btn {
        display: inline-block;
        vertical-align: middle;
        width: 240rpx;
        height: 88rpx;
        background: linear-gradient(144deg, rgba(179, 116, 248, 1) 0%, rgba(109, 120, 238, 1) 100%);
        border-radius: 44px;
        color: #fff;
        margin-left: 15rpx;
    }

/*//一行*/
.line_1 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
}
/*//两行*/
.line_2 {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>>