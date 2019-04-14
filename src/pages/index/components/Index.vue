<template>
    <div class="index-page">
        <Banner />
        <MovementsList class="interval"/>
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import MovementsList from '@/components/MovementsList.vue'

export default {
    name: 'App',
    components: {
        Banner,
        MovementsList,
    },
    data () {
        return {
        }
    }
}
</script>
<style lang="scss" scoped>
</style>
