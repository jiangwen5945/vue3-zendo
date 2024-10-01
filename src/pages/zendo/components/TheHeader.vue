<script setup>
import { computed, ref } from 'vue';
import { useZendoStore } from '../stores/zendo.js'
import ToggleTheme from '@/components/ToggleTheme.vue';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();
// 获取当前路由
const breadcrumbs = computed(() => {
    const [_first, ..._breadcrumbs] = router.currentRoute.value.matched
    return router.currentRoute.value.name === '首页' ? _breadcrumbs : [{name: '首页', path: '/'}, ..._breadcrumbs]
})


// const { toggleCollapse, isCollapse, toggleFullScreen, isFullScreen } = useZendoStore()

const zendoStore = useZendoStore()


const toggleCollapse = computed(() => zendoStore.toggleCollapse)
const toggleFullScreen = computed(() => zendoStore.toggleFullScreen)
const toggleBlurView = computed(() => zendoStore.toggleBlurView)

const isShowMsgPannel = ref(false)
const handleMsg = () => {
    isShowMsgPannel.value = !isShowMsgPannel.value
}

// 引入图片方法
const requireImg = (path) => {
    return new URL(`${path}`, import.meta.url).href
}

// 进入全屏
const setFullScreen = () => { }
</script>

<template>
    <div class="header">
        <div class="lbox">
            <el-button @click="toggleCollapse" class="collapse-icon">
                <el-icon>
                    <Expand v-if="zendoStore.isCollapse" />
                    <Fold v-else />
                </el-icon>
            </el-button>

            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: `${item.path}` }" v-for="item in breadcrumbs">
                    {{ item.name }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="rbox">
            <div class="full-box icon-box" @click="toggleFullScreen">
                <el-icon>
                    <Crop v-if="zendoStore.isFullScreen" />
                    <FullScreen v-else />
                </el-icon>
            </div>

            <div class="bell-box icon-box" @click="handleMsg">
                <el-icon>
                    <Bell />
                </el-icon>
            </div>

            <div class="bell-box icon-box" @click="toggleBlurView">
                <el-icon>
                    <View v-if="zendoStore.isBlurView" />
                    <Hide v-else />
                </el-icon>
            </div>

            <div class="theme-box">
                <ToggleTheme />
            </div>

            <div class="avatar-box">
                <el-avatar :src="requireImg('../assets/avatar.jpg')"></el-avatar>
                <span class="username">jiangwen</span>
            </div>
        </div>

        <div class="msg-pannel el-card" :class="isShowMsgPannel ? 'msg-pannel__show' : ''">
            消息通知🎙️
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    .lbox {
        display: flex;
        align-items: center;

        .collapse-icon {
            margin-right: 16px;
        }
    }

    .rbox {
        display: flex;
        align-items: center;
        margin-right: 20px;

        .avatar-box {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .username {
            font-size: 12px;
            margin-left: 8px;
        }

        .theme-box {
            font-size: 20px;
            margin-right: 16px;
            line-height: 20px;
        }

        .icon-box {
            font-size: 16px;
            margin-right: 16px;
            line-height: 16px;
        }
    }

    .msg-pannel {
        width: 300px;
        height: calc(100% - 59px);
        position: absolute;
        right: -300px;
        top: 59px;
        z-index: 99;
        transition: all .5s ease-in-out;
        // background: #fff;
        // color: #000;
        text-align: center;
        padding: 20px 10px;
        opacity: 0;
    }

    .msg-pannel__show {
        right: 0;
        opacity: .9;
    }
}
</style>