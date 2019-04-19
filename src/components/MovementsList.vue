<template>
    <div class="movements-wrapper">
        <ul>
            <li class="theme-grey" @click="toMovement(1)"><img src="../assets/icon/pushup.png" alt=""><span class="info">俯卧撑</span></li>
            <li class="theme-grey" @click="toMovement(2)"><img src="../assets/icon/squat.png" alt=""><span class="info">深蹲</span></li>
            <li class="theme-grey" @click="toMovement(3)"><img src="../assets/icon/pullup.png" alt=""><span class="info">引体向上</span></li>
        </ul>
        <ul> 
            <li class="theme-grey" @click="toMovement(4)"><img src="../assets/icon/legraise.png" alt=""><span class="info">举腿</span></li>
            <li class="theme-grey" @click="toMovement(5)"><img src="../assets/icon/handhandstand.png" alt=""><span class="info">倒立</span></li>
            <li class="theme-grey" @click="toMovement(6)"><img src="../assets/icon/bridges.png" alt=""><span class="info">桥</span></li>
        </ul>
    </div>
</template>

<script>
import { movements } from '@/scripts/utils/ctcd.json'

export default {
    name: 'MovementsList',
    compontents: {
    },
    data () {
        return {
            list: {}
        }
    },
    computed: {
    },
    methods: {
        toMovement (mId) {
            this.$router.push(`/movement/${mId}`)
        }
    }
}
</script>

<style lang="scss" scoped>
.movements-wrapper {
    width: 100%;
    padding: .1rem .04rem;
    box-sizing: border-box;
    background-color: #fff;

    ul {
        display: flex;
        justify-content: space-around;

        li {
            display: flex;
            width: 30%;
            height: .4rem;
            border-radius: .18rem;
            align-items: center;
            padding-left: .05rem;
            box-sizing: border-box;

            img {
                height: 80%;
            }

            .info {
                font-size: .14rem;
                font-weight: bold;
                margin-left: .05rem;
            }
        }
    }

    ul + ul {
        margin-top: 10px;
    }
}
</style>
