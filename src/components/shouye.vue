<template>
    <div class="shouye">
        <div class="top" >
            <div class="shang">
                <h3>lativ诚衣</h3>
                <img src="../../static/img/购物车_05.gif" alt="">
            </div>
            <div class="xia">
                <input type="text" name="" id="" placeholder="搜索商品">
            </div>
            <div class="zi">
               <ul>
                   <router-link to='/Nv' tag="li">女装</router-link>
                   <router-link to='/Nan' tag="li">男装</router-link>
                   <router-link to='/Tong' tag="li">童装</router-link>
                   <router-link to='/Ying' tag="li">婴幼儿</router-link>
                   <router-link to='/Yun' tag="li">运动</router-link>
                   <router-link to='/Yian' tag="li">限时特惠</router-link>
               </ul>
            </div>
        </div>
        <router-view></router-view>
        
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                
            }
        },
        
    }
</script>

<style lang="scss" scoped>
.shouye{
    width: 100%;
    height: 100%;
    // border: 0.01rem solid black;
}
.top{
    width: 100%;
    height: 2.3rem;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;
    .shang{
        width: 100%;
        height: 0.8rem;
        // border: 0.01rem solid black;
        display: flex; 
        line-height: 0.8rem;
        h3{
            font-size: 0.3rem;
            margin-left: 0.2rem;
        }
        img{
            width: 2rem;
            height: 0.7rem;
            margin-left: 4rem;
            margin-top: 0.1rem;
        }
    }
    .xia{
        width: 100%;
        height: 1rem;
        // border: 0.01rem solid black;
        display: flex;
        [type=text]{
            width: 6.5rem;
            height: 0.6rem;
            border: 0.01rem solid #f2f2f2;
            background: #f2f2f2;
            border-radius: 50px;
            margin: 0.2rem;
            background-image: url('../../static/img/111_03.png');
            background-position-x: 0.15rem;
            background-position-y: 0.06rem;
            background-repeat: no-repeat;
            background-size: 0.4rem;
            padding-left: 0.6rem;
        }
    }
    .zi{
        ul{
            display: flex;
            li{
                width: 16%;
                font-size: 0.25rem;
                color: gray;
                text-align: center;
            }
            li:hover{
                color: red;
            }
        }
    }
}



</style>