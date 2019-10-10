<template>
     <div id="you">
            <div class="qq">
                <div class="www"  v-for="(v,i) in list" :key="i">
                        <img :src="'/static/img/'+v.img" alt="">
                    <p class="z">{{v.name}}</p>
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
            axios.get('/static/tuzi.json').then((res)=>{
                // console.log(res)
                this.list = res.data
            })
        },
    }
</script>

<style lang="scss">
#you{
    width: 100%;
    height:500px;
        .qq{
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
        }
        .www{
            width: 30%;
            height: 2rem;
            // border: 0.01rem solid black;
            img{
                width: 100%;
                height: 70%;
                // background: pink;
                display: block;
                margin: 0 auto;
                margin-top: 0.09rem;
            }
            .z{
                color: gray;
                font-size: 0.22rem;
                text-align: center;
                display: block;
            }
    }
}
</style>