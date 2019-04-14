<template>
    <div class="movement-page">
        <section class="header header-box theme-grey">
            <section class="name">
                <span>{{ info.movement.name }}</span>
                <span>{{ info.movement.nameEn }}</span>
            </section>
            <section class="">
                <span>{{ info.movement.slogan }}</span>
            </section>
            <section class="">
                <span>{{ info.movement.muscleGroup }}</span>
            </section>
        </section>
        <StepsList class="interval" :list="info.step" />
        <section>

        </section>
    </div>
</template>
<script>
import StepsList from '@/components/StepsList.vue'
import { movements, steps } from '@/scripts/utils/ctcd.json'

export default {
    name: 'Movement',
    components: {
        StepsList,
    },
    data () {
        return {
            mId: this.$route.params.mId,
        }
    },
    created () {
    },
    computed: {
        info () {
            return {
                movement: movements[this.mId - 1],
                step: steps[this.mId - 1],
            }
        },
    },
}
</script>
<style lang="scss" scoped>
.header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: .3rem .2rem;
    font-size: .15rem;

    .name {
        display: flex;
        align-items: flex-end;
        font-size: .2rem;
        font-weight: initial;

        span + span {
            margin-left: .1rem;
            font-size: .15rem;
            font-weight: 200;
        }
    }
}
</style>


