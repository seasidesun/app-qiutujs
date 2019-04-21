<template>
    <transition :name="aniName">
        <router-view></router-view>
    </transition>
</template>

<script>
const routerAniMap = ['index-movement', 'movement-step', 'index-step']

export default {
    name: 'App',
    compontents: {
    },
    data () {
        return {
            aniName: 'forward',
        }
    },
    watch: {
        '$route' (to, from) {
            console.log(`${from.name}-${to.name}`)
            if (!from || !to) this.aniName = 'forward'
            else if (routerAniMap.includes(`${from.name}-${to.name}`)) this.aniName = 'forward'
            else this.aniName = 'back'
        },
    },
}
</script>
<style lang="scss">
@import "~@/styles/h5.scss";
@import "~@/styles/base.scss";
@import "~@/styles/normalize.css";
</style>

<style lang="scss">
$grey: #3f3f3f;

.theme-grey {
    background-color: $grey;
}

.interval {
    margin-top: .1rem;
}

.header-box {
    height: 1.5rem;
    padding: .3rem .2rem;
    box-sizing: border-box;
}

.back-leave-active, .back-enter-active,
.forward-leave-active, .forward-enter-active {
    position: fixed;
    top: 0;
    transition: transform .5s, opacity 1s;
}
.forward-leave-to, .back-enter {
    transform: translate(-100%);
}
.forward-enter, .back-leave-to {
    transform: translate(100%);
}
.forward-leave-to, .back-leave-to {
    opacity: 0;
}
</style>
