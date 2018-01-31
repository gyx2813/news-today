<template>
    <div>
        <div class="loadEffect" v-show="pop.show">
            <div class="tips">正在加载中...</div>
        </div>
    </div>
</template>
<script>
    export default{
        props:['pop']
    }
</script>
<style lang="scss" rel="stylesheet/scss">
.loadEffect{
    position: fixed;
    left:0;
    right:0;
    top:0;
    bottom: 0;
    z-index: 999;
    .tips{
        position: absolute;
        left: 0;
        right: 0;
        top: 40%;
        margin: 0 auto;
        width: 110px;
        height: 40px;
        background-color: #000;
        color: #fff;
        text-align: center;
        line-height: 40px;
        border-radius: 5px;
    }
}
</style>
