<template>
  <div id="collection">
      <h5 class="nodata">
          <div>暂无数据</div>
          <h5>(快去收藏新闻吧)</h5>
      </h5>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      name:'collection'
  }
</script>

<style rel="stylesheet/scss" lang="scss">

#collection{
    width: 100%;
    position: absolute;
    min-height: 100%;
    .nodata{
        text-align: center;
        color: #ccc;
        font-size: 28px;
        margin-top: 200px;
        line-height: 40px;
    }
    .news-content {
        z-index:10;
        background-color: #fff;
        margin-bottom: 50px;
        .news-item{
            .news-title{
                line-height: 0.40rem;
            }
            padding: 0.20rem 0.40rem;
            font-size: 0.32rem;
            color: #585151;
            border-bottom: 1px solid #eee;
            .img-wrapper{
                display: flex;
                margin-top: 0.10rem;
                justify-content: space-between;
                li{
                    width:2.13rem;
                    height:1.50rem;
                    /*flex: 1;*/
                    img{
                        width:100%;
                    }
                }
            }
            .bottom-title{
                font-size: 10px;
                color: #b5b5b5;
                margin-top: 8px;
                .avIcon{
                    color: #2a90d7;
                    border: 1px solid rgba(42,144,215,.5);
                    border-radius: 2px;
                    font-size: 8px;
                    padding: 0 2px;
                }
            }
        }
    }
}
</style>
