<template>
  <div id="app">
    <router-view></router-view>
    <div class="bottom">
            <ul>
                <router-link to="/Sy" tag="li">
                    <div class="iconfont icon-shouye"></div>
                    <p>首页</p>
                </router-link>
                <router-link to="/Fl" tag="li">
                    <div class="iconfont icon-menu"></div>
                    <p>分类</p>
                </router-link>
                <router-link to="/Gwc" tag="li">
                    <div class="iconfont icon-icon-test2"></div>
                    <p>购物车</p>
                </router-link>
                <router-link to="/Wode" tag="li">
                   <div class="iconfont icon-account"></div>
                   <p>个人</p>
                </router-link>
            </ul>
        </div>  
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
ul{
  list-style: none;
}
.bottom{
    width: 100%;
    height: 0.8rem;
    background: white;
    // border: 0.01rem solid black;
    position: fixed;
    bottom: 0;
    left: 0;
    ul{
        display: flex;
        li{
            width: 25%;
            height: 1rem;
            // border: 0.01rem solid black;
            .iconfont{
                font-size: 0.35rem;
                display: block;
                margin-top: 0.01rem;
                fill:currentColor;
                text-align: center;
                padding-top: 0.1rem;
            }
            p{
                font-size: 0.2rem;
                text-align: center;
                display: block;
            }
        }
        li:hover{
          color: red;
        }
    }
}
</style>
