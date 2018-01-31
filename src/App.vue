<template>
  <div id="app">
    <bottom></bottom>
    <transition :name="transitionName">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </transition>

  </div>
</template>

<script>

  import Bottom from './components/bottom.vue'
  export default {
      name: 'app',
      components:{
          Bottom
      },
      data(){
          return {
              transitionName:'',
              isBottom:true,
              bottomArr:['/index','/collection','/follow','/my']
          }
      },
      methods:{

      },
      watch: {
          '$route' (to, from) {
               this.transitionName = JSON.parse(window.sessionStorage.history).transitionName;
               let index = this.bottomArr.indexOf(to.path);
               if(index == -1){
                   this.isBottom = false;
               }else{
                   this.isBottom = true;
               }
          }
      }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "./common/scss/index";
    #app {
        height: 100%;
        .fade-enter-active, .fade-leave-active {
            transition: all 0.3s;
        }
        .fade-enter, .fade-leave-to {
            opacity: 0;
        }
        //微信切换样式 ，左右滚动
        //前进动画样式
        .forward-enter-active,.forward-leave-active{
            transition: all 0.3s;
        }

        .forward-enter{
            transform: translateX(100%);
        }
        .forward-leave-to{
            transform: translateX(-100%);
        }

        // 后退动画样式
        .reverse-enter-active,.reverse-leave-active{
            transition: all 0.3s;
        }
        .reverse-enter{
            transform: translateX(-100%);
        }
        .reverse-leave-to{
            transform: translateX(100%);
        }

    }





</style>
