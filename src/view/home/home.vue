<template>
<div id='home'>
<nav-bar class='home-nav'><div slot='center'>购物街</div></nav-bar>
<home-swiper :banners='banners'></home-swiper>
<home-recommend :recommends="recommends"/>
</div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import {getHomeMultidata} from 'network/home.js'


export default {
 name: 'Home',
components: {
  NavBar,
  HomeSwiper,
  HomeRecommend
},
data(){
  return {
    banners:[],
    recommends:[]
  }
},
created(){
  getHomeMultidata().then(res=>{
  
    this.banners=res.data.banner.list
    this.recommends=res.data.recommend.list
  }).catch(err=>{
    console.log(err)
  })
}
}
</script>
<style >


.home-nav{
  background: pink;
  color: white;
}
 </style>