<template>
    <div class="page">
        <div class="btn-container">
            <button v-for="i in 4" :class="['btn', 'type-' + i]" @click="handleLayout(i)">切换布局{{ i }}</button>
        </div>

        <div :class="['grid-container', layout]">
            <div class="grid-box">1</div>
            <div class="grid-box">2</div>
            <div class="grid-box">3</div>
            <div class="grid-box">4</div>
            <div class="grid-box">5</div>
            <div class="grid-box">6</div>
            <div class="grid-box">7</div>
            <div class="grid-box">8</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const layout = ref('layout-1')
const handleLayout = (i = 1) => {
    console.log('i', i);
    i = i > 4 ? 1 : i
    layout.value = 'layout-' + i
}
</script>

<style lang="scss" scoped>
$btnColors: #409eff, #67c23a, #e39827, #f54343;

.btn-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 1ch;
    place-items: center center;
    margin-bottom: 30px;

    .btn {
        width: 120px;
        height: 50px;
        border-radius: 8px;
        text-align: center;
        line-height: 50px;
        font-size: 20px;
        justify-items: center
    }

    @for $i from 1 through length($btnColors) {
        .btn.type-#{$i} {
            $bgColor: nth($btnColors, $i);
            $textColor: #fff;
            color: $textColor;
            background: $bgColor;

            &:hover {
                background: lighten($bgColor, 10%);
            }

            &:active {
                background: darken($bgColor, 10%);
            }

            &:disabled {
                background: lighten($bgColor, 20%);
                color: lighten($textColor, 40%);
            }
        }
    }
}

.grid-container {
    display: grid;
    // grid-template-columns: repeat(5, 1fr);
    // grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    // grid-template-rows: 500px 500px;
    // grid-template-areas: ;
    column-gap: 10px;
    row-gap: 1ch;
    font-size: 24px;
    text-align: center;
    background: #eee;
    padding: 10px;
    // height: 100%;
    transition: .2s;

    .grid-box {
        background: #3cb9b4;
        min-height: 200px;
        border-radius: 10px;


        &:nth-child(1) {
            grid-area: a;
            background: #ffa600
        }

        &:nth-child(2) {
            grid-area: b;
            background: #67e659
        }

        &:nth-child(3) {
            grid-area: c;
            background: #1d96ff
        }

        &:nth-child(4) {
            grid-area: d;
            background: nth($btnColors, 4);
        }
    }
}

.layout-1 {
    // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); // 将网格自动分成多少列（会一直拉伸元素来适应页面）
    // grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); //将网格自动分成多少列（不会一直拉伸，而是伺机等待页面宽度可以装入下一个元素）
    grid-template-areas:
        "a a a a"
        "b b c c"
        "b b d d";
}

.layout-2 {
    // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); // 将网格自动分成多少列（会一直拉伸元素来适应页面）
    // grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); //将网格自动分成多少列（不会一直拉伸，而是伺机等待页面宽度可以装入下一个元素）
    grid-template-areas:
        "a a b b"
        "c c c c"
        "d d o o"
        "d d o o";
}

.layout-3 {
    // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); // 将网格自动分成多少列（会一直拉伸元素来适应页面）
    // grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); //将网格自动分成多少列（不会一直拉伸，而是伺机等待页面宽度可以装入下一个元素）
    grid-template-areas:
        "a a b b"
        "c c c d"
        "c c c d";
}

.layout-4 {
    // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); // 将网格自动分成多少列（会一直拉伸元素来适应页面）
    // grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); //将网格自动分成多少列（不会一直拉伸，而是伺机等待页面宽度可以装入下一个元素）
    grid-template-areas:
        "a a b b"
        "a a c c"
        "d d d d";
}
</style>