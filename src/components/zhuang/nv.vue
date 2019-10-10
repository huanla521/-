<template>
    <div class="box">
        <div class="body">
            <div class="lunbo">
                <div class="block">
                    <el-carousel height="150px">
                    <el-carousel-item v-for="(v,i) in list" :key="i">
                        <h3 class="small"> 
                            <img :src="'/static/img/'+v.img" alt="" class="lunbobo">
                        </h3>
                    </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div class="tuzi">
                <div class="tu">
                    <img src="/static/img/gwc_05.png" alt="">
                    <div>全场满￥49包邮</div>
                </div>
                <div class="tu">
                    <img src="/static/img/gwc_05.png" alt="">
                    <div>退货补贴优惠卷</div>
                </div>
                <div class="tu">
                    <img src="/static/img/gwc_05.png" alt="">
                    <div>天猫旗舰店</div>
                </div>
            </div>
            <div class="tupian">
                <ul >
                    <li>  <img src="/static/img/nr1.jpg" alt=""> </li>
                    <li>  <img src="/static/img/nr2.jpg" alt=""> </li>
                </ul>
                <ul>
                    <li>  <img src="/static/img/nr3.jpg" alt=""> </li>
                    <li>  <img src="/static/img/nr4.jpg" alt=""> </li>
                </ul>
                <ul>
                    <li>  <img src="/static/img/nr5.jpg" alt=""> </li>
                    <li>  <img src="/static/img/nr6.jpg" alt=""> </li> 
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                list:[]
            }
        },
        mounted() {
            axios.get('/static/lunbo.json').then((res)=>{
                // console.log(res)
                this.list = res.data
                console.log(this.list)
            })
        },
    }
</script>

<style lang="scss" scoped>
.body{
    width: 100%;
    height: 100%;
    // border: 0.01rem solid black;
    margin-top: 2.3rem;
    .lunbo{
        width: 100%;
        height: 2.5rem;
        // border: 0.01rem solid black;
        margin-top: 0.1rem;
         .lunbobo{
            width: 100%;
            height: 100%;
        }
    }
    .tuzi{
        width: 100%;
        height: 0.8rem;
        // border: 0.01rem solid black;
        font-size: 0.2rem;
        display: flex;
        .tu{
            width: 33%;
            height: 0.8rem;
            // border: 0.01rem solid black;
            display: flex;
            line-height: 0.8rem;
            img{
                width: 0.28rem;
                height: 0.28rem;
                margin-top: 0.28rem;
                margin-left: 0.5rem;
            }
            div{
                color: gray;
                margin-left: 0.08rem;
            }
        }
    }
    .tupian{
        width: 100%;
        height: 100%;
        // border: 0.01rem solid black;
        ul{
            width: 100%;
            height: 5.2rem;
            display: flex;
            // flex-wrap: wrap;
            li{
                width: 50%;
                height: 5.2rem;
                // border: 0.01rem solid black;
                img{
                    width: 3.4rem;
                    height: 5rem;
                    margin-left: 0.15rem;
                }
            }
        }
    }
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
 
</style>