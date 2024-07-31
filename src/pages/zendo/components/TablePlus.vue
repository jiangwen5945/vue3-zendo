<script setup>
defineProps({
    tableData: {
        type: Array,
        required: true
    },
    tableColumns: {
        type: Array,
        required: true
    }
})
</script>


<script>
export default {
    mounted() {
    }
}
</script>

<template>
    <el-table :data="tableData" v-bind="$attrs">
        <el-table-column v-for="col in tableColumns" :prop="col.prop" :key="col.prop" :label="col.label"
            :width="col.width">
            <template v-if="$slots[col.prop]" #default="scoped">
                <slot :name="col.prop" v-bind="scoped"></slot>
            </template>
        </el-table-column>
    </el-table>

</template>

<style scoped></style>
