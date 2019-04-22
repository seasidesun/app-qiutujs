<template>
    <div class="step-page">
        <section class="header header-box theme-grey">
            {{info.title}}
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
        })
    },
}
</script>
<style lang="scss" scoped>
.step-page {
    width: 100%;
}
</style>
