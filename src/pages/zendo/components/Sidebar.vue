<script setup>
import { RouterLink } from 'vue-router'
import { useZendoStore } from "../stores/zendo"

const zendoStore = useZendoStore()
</script>

<template>
    <el-menu default-active="2" :collapse="zendoStore.isCollapse" class="el-menu-vertical-demo">
        <el-menu-item class="logo">
            <img src="../assets/logo.png" alt="logo" style="width: 30px; margin-right: 6px;">
            <template #title>
                <span style="color: #fff; font-weight: bold;">代码禅道</span>
            </template>
        </el-menu-item>

        <template v-for="(menu, i) in zendoStore.menuList" :key="menu.url">
            <!-- 一级菜单 -->
            <RouterLink :to="menu.url" v-if="!menu.children">
                <el-menu-item :index="i + ''">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <template #title>
                        {{ menu.label }}
                    </template>
                </el-menu-item>
            </RouterLink>

            <!-- 二级菜单 -->
            <el-sub-menu :index="i + ''" v-else>
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>{{ menu.label }}</span>
                </template>
                <template v-for="(subMenu, j) in menu.children" :key="subMenu.url">
                    <RouterLink :to="subMenu.url">
                        <el-menu-item :index="i + '-' + j">
                            {{ subMenu.label }}
                        </el-menu-item>
                    </RouterLink>
                </template>
            </el-sub-menu>
        </template>
    </el-menu>
</template>

<style scoped lang="scss">
.el-menu-vertical-demo {
    min-height: 100vh;
    height: 100%;
    background: #545c64;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}

:deep(.el-sub-menu__title) {
    color: #a9a9a9;
}

.contaier .logo {
    background: #545c64;
    // border-bottom: 1px solid #fff;
}

.el-menu-item {
    color: #a9a9a9;
    background: #545c64;

    &.is-active {
        color: #fff;
        background: #545c64;
    }
}
</style>
