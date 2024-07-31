<script setup>
import { useZendoStore } from '../stores/zendo.js'
const zendoStore = useZendoStore()
</script>


<script>
export default {
    mounted() {
    }
}
</script>

<template>
    <div class="header">
        <div class="lbox">
            <el-button @click="zendoStore.toggleCollapse">
                <el-icon>
                    <Expand v-if="zendoStore.isCollapse" />
                    <Fold v-else />
                </el-icon>
            </el-button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.header {
    height: 100%;
    display: flex;
    align-items: center;

    .lbox {}
}
</style>
