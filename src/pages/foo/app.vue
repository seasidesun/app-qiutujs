<template>
    <div class="wrapper">
        <p>{{ tips }}</p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tips: 'vue',
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/tool.scss";

.wrapper {
    display: flex;
    font-size: 23px;
    color: $grey;

    p {
        color: red;
    }
}
</style>
