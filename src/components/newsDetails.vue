<template>
    <div id="newsDetails">
        <x-header>
            <span>新闻详情</span>
            <i class="icon iconfont icon-share3" @click="share"></i>
        </x-header>

        <div class="bg-img" v-if="newShow==1">
            <img src="../assets/bg.png" alt="" class="">
        </div>

        <article class="newsInfo" v-if="newShow==2">
            <div class="title">{{ newsInfo.title }}</div>
            <div class="aticle_author" v-if="newsInfo.media_user">
                <a :href="newsInfo.media_user.url">
                    <div class="avatar">
                        <img :src="newsInfo.media_user.avatar_url" alt="">
                    </div>
                </a>
                <div class="author-info">
                    <span class="author-name">{{newsInfo.media_user.screen_name}}</span>
                    <img src="https://s3b.pstatp.com/growth/mobile_detail/image/toutiaohao_tag_bc28ef080879ea46945f90a280f66c28.svg" alt="">
                    <div class="time">{{newsInfo.publish_time | formatTime}}</div>
                </div>

                <div class="gz" @click="collection">
                    <span>{{isCollection}}</span>
                </div>

            </div>
            <div class="news-content" v-html = "newsInfo.content" ref="news_content"></div>
        </article>
        <!-- 展开全文 -->
        <div class="unfold-field" @click="unfold_field" ref="unfold_field">
            <div class="unfold-field-mask"></div>
            <div>展开全文<i class="icon iconfont icon-unfold"></i></div>
        </div>

        <!--分享组件   -->
        <share v-on:hideShare="hide_Share" :isShow="isShare" v-show="isShare"></share>

    </div>

</template>
<script>
import { XHeader } from 'vux'
import { ajax2 } from '../common/js/ajax'
import { utils } from '../common/js/utils'
import share from '../components/share.vue'
import index from '../store/index'
import {mapState, mapMutations} from 'vuex'
    export default{
        components:{
            XHeader,
            share
        },
        data(){
            return {
                newsItem:{},
                newsInfo:{},
                souceUrl:this.$route.params.id,
                newitem:{},
                newShow:1,             //新闻详情展示
                isShare:false      //分享组件
            }
        },
        methods:{
            ...mapMutations(['add','reduce']),
            _getNewsDetial(){
                if(this.souceUrl){
                    let url = 'https://m.toutiao.com/' + this.souceUrl + '/info/';
                    let self = this;
                    ajax2(url).then((res) => {
                        self.newsInfo = res.data
                        self.newShow = 2
                        console.log(res.data)
                    })
                }else{
                    console.log('离开本页，不执行请求！');
                }
            },

            //点击展开全文
            unfold_field(){
                this.$refs.news_content.style.height = 'auto';
                this.$refs.unfold_field.style.display = 'none';
            },
            share(){
                this.isShare = true;
                document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            },
            hide_Share(){
                this.isShare = false;
            },
            collection(){
                let str = this.isCollection
                if(str === '关注'){
                    this.add(this.newsInfo.media_user)
                }
            }
        },
        computed:{
            ...mapState(['collectionArr']),
            isCollection(){
                let str = ''
                if(JSON.stringify(this.collectionArr).indexOf(JSON.stringify(this.newsInfo.media_user)) === -1){
                    str = '关注'
                }else{
                    str = '已关注'
                }
                return str
            }
        },
        watch:{
            '$route'(){
                this.$refs.news_content.style.height = '800px';
                this.$refs.unfold_field.style.display = 'block';
                document.getElementsByTagName('body')[0].style.overflow = 'auto';
            }
        },
        filters:{
            formatTime(time){
                utils.dateFormat();
                let time1 = time + '000';
                let time2 = new Date(parseInt(time1));
                let time3 = time2.format('MM-dd hh:mm:ss');
                return time3;
            }
        },
        activated(){
            this.souceUrl = this.$route.params.id;
//            this.newitem = JSON.parse(this.$route.query.newsItem);
            this._getNewsDetial()
            this.isCollection = false
        },
        index
    }
</script>
<style rel="stylesheet/scss" lang="scss">
    #newsDetails{
        width: 100%;
        background-color: #FFF;
        z-index: 999;
        position: absolute;
        top:0;
        .vux-header{
            width: 100%;
            position: fixed;
            top: 0;
            background-color:#d43d3d;
            z-index: 3;
            .vux-header-left .vux-header-back{
                color: #fff;
            }
            .vux-header-left .left-arrow:before{
                border-color: #fff;
                border-width: 1px 0 0 1px;
            }
            .icon-share3{
                font-size: 28px;
                position: absolute;
                right:10px;
                display: none;
            }
        }
        .bg-img{
            background-color: #fff;
            width: 100%;
            position: absolute;
            top: 46px;
            z-index: 1;
            img{
                width: 100%;
            }
        }

        .newsInfo{
            padding: 46px 17px 0 17px;
            margin-top: 12px;
            font-size: 16px;
            background-color: #fff;
            .title{
                font-size: 0.48rem;
                line-height: 0.68rem;
            }
            .aticle_author{
                display: flex;
                align-items: center;
                margin: 10px 0;
                .avatar{
                    height: 36px;
                    width: 36px;
                    border: none;
                    // position: relative;
                    img{
                        width: 100%;
                        height:100%;
                        border-radius: 50%;
                    }
                }
                .author-info{
                    flex: 1;
                    font-size: 12px;
                    padding-left: 10px;
                    color: #948d8d;
                    .author-name{
                        font-size: 14px;
                        line-height: 16px;
                    }
                    img{
                        padding-left: 5px;
                        height: 16px;
                        margin-bottom: -3px;
                    }
                    .time{
                        line-height: 18px;
                    }
                }
                .gz{
                    background-color: #f85959;
                    display: block;
                    text-align: center;
                    color: hsla(0,0%,100%,.96);
                    box-sizing: border-box;
                    width: 72px;
                    height: 29px;
                    line-height: 29px;
                    font-size: 14px;
                    border-radius: 6px;
                }
            }
            .news-content{
                margin-top: 10px;
                color: #333;
                font-size: 0.36rem;
                line-height: 0.60rem;
                height: 800px;
                overflow: hidden;
                p{
                    margin:5px 0;
                }
                img{
                    width: 100%;
                }
            }
        }
        .unfold-field{
            padding: 15px 0 ;
            box-shadow: 0 0 10px #ccc;
            text-align: center;
            color: #406599;
            position: relative;
            .unfold-field-mask{
                position: absolute;
                top: -38px;
                height: 38px;
                width: 100%;
                background-image: linear-gradient(-180deg,hsla(0,0%,100%,0),#fff);
            }
        }
    }
</style>
