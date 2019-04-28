<template>
    <div class="index-page">
        <Banner />
        <MovementsList class="interval"/>
        <ArticleS />
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import ArticleS from '@/components/ArticleList/ArticleS.vue'
import MovementsList from '@/components/MovementsList.vue'

export default {
    name: 'App',
    components: {
        Banner,
        ArticleS,
        MovementsList,
    },
    data () {
        return {
        }
    }
}
</script>
<style lang="scss" scoped>
.index-page {
    width: 100%;
}
</style>
