<template>
    <div class="article-l box theme-grey">
        <section class="detail" :class="">
            <div class="title">六艺十式</div>
            <div class="tag">100人看过</div>
        </section>
        <section class="img-wrapper" :style="{'background-image': 'url(http://old.bz55.com/uploads/allimg/151118/139-15111Q50555.jpg)'}">
        </section>
    </div>
</template>

<script>
export default {
    name: 'ArticleL',
    compontents: {
    },
    data () {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.article-l {
    display: flex;
    width: 100%;
    height: 100%;

    &.box {
        width: 100%;
        height: 60px;
        padding: .09rem;
        box-sizing: border-box;
    }

    .detail {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        overflow: hidden;

        .title {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
        }

        .tag {
            font-size: .12rem;
        }
    }
    .img-wrapper {
        flex-grow: 0;
        width: 20%;
        min-width: 20%;
        max-width: 20%;
        background-repeat: no-repeat;
        background-size: auto 100%;
        background-position: center;
    }
}
</style>
