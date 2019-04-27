<template>
    <div class="index-page">
        <Banner />
        <MovementsList class="interval"/>
        <ArticleL />
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import ArticleL from '@/components/ArticleList/ArticleL.vue'
import MovementsList from '@/components/MovementsList.vue'

export default {
    name: 'App',
    components: {
        Banner,
        ArticleL,
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
