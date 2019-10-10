<template>
    <div class="box">
        <div class="zuo">
            <ul>
                <router-link to='/Qbsp' tag="li">全部商品</router-link>
                <router-link to='/Qjxp' tag="li">秋季新品</router-link>
                <router-link to='/Syl' tag="li">上衣类</router-link>
                <router-link to='/Wtl' tag="li">外套类</router-link>
                <router-link to='/Xsl' tag="li">下身类</router-link>
                <router-link to='/Lyq' tag="li">连衣裙</router-link>
                <router-link to='/Nyl' tag="li">内衣类</router-link>
                <router-link to='/Jjf' tag="li">家居服</router-link>
                <router-link to='/Pj' tag="li">配件</router-link>
            </ul>
        </div>
        <div class="you">
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>

    export default {
        
    }
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 100%;
    // border: 0.01rem solid black;
    // margin-top: 2.3rem;s
    display: flex;
    .you{
        margin-top:2.2rem;
        width: 80%;
    }
}
.zuo{
    width: 30%;
    height: 100%;
    margin-top:2.2rem;
    // border: 0.01rem solid black;
    ul{
        li{
            height: 0.7rem;
            font-size: 0.28rem;
            line-height: 0.7rem;
            padding-left: 0.3rem;
        }
        li:hover{
            font-size: 0.3rem;
            border-left: 0.04rem solid black;
        }
    }
}


</style>