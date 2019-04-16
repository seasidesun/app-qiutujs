<template>
    <div class="stepsList-wrapper">
        <ul>
            <li v-for="item in list"  @click="toStep(item.id)">
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'StepsList',
    compontents: {
    },
    props: {
        list: Array,
    },
    data () {
        return {
            mId: this.$route.params.mId,
        }
    },
    created () {
    },
    methods: {
        toStep (sId) {
            this.$router.push(`/step/${this.mId}/${sId}`)
        },
    }
}
</script>

<style lang="scss" scoped>
.stepsList-wrapper {
    width: 100%;
    padding: 0 .04rem .1rem;
    box-sizing: border-box;
    background-color: #fff;

    ul {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        li {
            display: flex;
            width: 40%;
            height: .4rem;
            background-color: #3f3f3f;
            border-radius: .18rem;
            align-items: center;
            padding-left: .05rem;
            box-sizing: border-box;
            font-size: .14rem;
            margin-top: .1rem;
            img {
                height: 80%;
            }

            .info {
                margin-left: .05rem;
            }
        }
    }

    ul + ul {
        margin-top: .1rem;
    }
}
</style>

