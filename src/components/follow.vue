<template>
  <div id="follow">
      <x-header>
          <span>关注列表</span>
      </x-header>
      <h5 v-show="collectData.length===0">快去关注吧!</h5>
      <ul class="collectItem">
          <li v-for="item in collectData">
              <div class="avatar">
                  <img :src="item.avatar_url" />
              </div>
              <div class="name">
                  {{item.screen_name}}
                  <img src="https://s3b.pstatp.com/growth/mobile_detail/image/toutiaohao_tag_bc28ef080879ea46945f90a280f66c28.svg" alt="">
              </div>
              <div class="btn" @click="remove(item)">取消关注</div>
          </li>
      </ul>
  </div>
</template>

<script>
    import {XHeader} from 'vux'
    import Vue from 'vue'
    import index from '../store/index'
    import {mapState,mapMutations} from 'vuex'
    export default {
        data () {
            return {
                msg:'关注列表',
                collectData:[]
            }
        },
        computed:{
            ...mapState(['collectionArr']),
        },
        mounted(){
            this.data_init()
        },
        created(){
            this.data_init()
        },
        methods:{
            ...mapMutations(['reduce']),
            remove(item){
                this.collectData = this.collectData.filter(o => o.id !== item.id)
                window.sessionStorage.setItem('collectData',JSON.stringify(this.collectData))
            },
            data_init(){
                this.collectData = JSON.parse(window.sessionStorage.getItem('collectData'))
            }
        },
        components:{
            XHeader
        },
        watch:{
            '$route'(){
                this.data_init()
            }
        },
        index
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    .vux-header{
        width: 100%;
        position: fixed!important;
        top: 0;
        background-color:#d43d3d!important;
        z-index: 3;

        .vux-header-left .vux-header-back{
            color: #fff;
        }
        .vux-header-left .left-arrow:before{
            border-color: #fff;
            border-width: 1px 0 0 1px;
        }
    }
    #follow{
        width: 100%;
        text-align: center;
        position: absolute;
        top:0;
        min-height: 100%;
        h5{
            text-align: center;
            color: #ccc;
            font-size: 28px;
            margin-top: 200px;
            line-height: 40px;
        }
    }
    .collectItem{
        padding: 50px 10px 0 10px;
        li{
            padding:12px 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            position: relative;
            &:after{
                content: '';
                position: absolute;
                bottom: 0;
                width: 200%;
                height: 1px;
                background-color: #7e8c8d;
                left: -50%;
                transform: scale(0.5);
            }
            .btn{width:70px;height: 30px;background:#f85959;border-radius:5px;color: #fff;font-size: 14px;text-align: center;line-height:30px}
        }
        .avatar{
            height: 36px;
            width: 36px;
            img{
                width: 100%;
            }
        }
        .name{
            font-size: 16px;
            flex: 1 0;
            img{
                height: 16px;
                padding-left: 10px;
            }
        }
    }
</style>
