<template>
    <div class="step-page">
        <section class="header theme-grey">
            {{info.title}}
            <div class="suggest">
                {{info.suggest}}
            </div>
        </section>
        <ul class="interval level">
            <li v-for="(item, index) in info.level" :key="index">{{item.description}}</li>
        </ul>
        <section class="text interval des theme-grey">
            {{info.description}}
            <ul class="img-list">
                <li v-for="(item, index) in info.imgList" :key="index">
                    <img class="" :src="`http://qt.qn.junanchi.com/${item.imgUrl}`">
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import { getStep } from '@/api'
export default {
    name: 'Step',
    components: {
    },
    data () {
        return {
            info: {},
            sId: this.$route.params.sId,
            mId: this.$route.params.mId,
        }
    },
    created () {
        getStep({sId: this.sId, mId: this.mId}).then((ret) => {
            this.info = ret
            console.log(this.info);
        })
    },
}
</script>
<style lang="scss" scoped>
.header {
    height: auto;
    min-height: 1.5rem;
    padding: .2rem .2rem;
    box-sizing: border-box;

    .suggest {
        margin-top: .1rem;
        font-size: .14rem;
    }
}

.step-page {
    width: 100%;
}
.level {
    background-color: #fff;
    font-size: .14rem;
    color: #353535;
    padding: .1rem;
    box-sizing: border-box;

    li + li {
        margin-top: .1rem;
    }
}
.text {
    background-color: #fff;
    font-size: .14rem;
    color: #353535;
    padding: .2rem .15rem;
    box-sizing: border-box;

    &.des {
        font-size: .16rem;
    }
}
.img-list {
    width: 70%;
    margin: .1rem auto;

    img {
        width: 100%;
    }
}
</style>
