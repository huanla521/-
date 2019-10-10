<template>
    <div class="box">
        <div class="top" >
            <div class="shang">
                <h3>购物车</h3>
                <img src="../../static/img/购物车_05.gif" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.top{
    width: 100%;
    height: 0.8rem;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;
    border-bottom: 0.01rem solid gainsboro;
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
            margin-left: 4.4rem;
            margin-top: 0.1rem;
        }
    }
}
</style>