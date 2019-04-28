<template>
    <div class="article-s box">
        <section class="img-wrapper"
            :style="{'background-image': 'url(http://old.bz55.com/uploads/allimg/151118/139-15111Q50555.jpg)'}"
        >
        </section>
        <section class="detail">
            <div class="title">六艺十式</div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'ArticleS',
    compontents: {
    },
    data () {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.article-s {
    display: flex;
    flex-direction: column;
    color: #000;
    width: 100%;
    height: 100%;

    &.box {
        width: 40%;
        height: 2.3rem;
        padding: .09rem;
        box-sizing: border-box;
    }

    .img-wrapper {
        width: 100%;
        height: 70%;
        min-height: 70%;
        max-height: 70%;
        background-repeat: no-repeat;
        background-size: auto 100%;
        background-position: center;
    }

    .detail {
        margin-top: .1rem;
        overflow: hidden;
        font-size: .12rem;

        .title {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
        }
    }
}
</style>
