<template>
    <div class="page cell-bg">
        <div class='card'>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
    </div>
</template>


<style lang='scss' scoped>
.page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.card {
    width: 500px;
    height: 500px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 10px;
    transition: .2s;

    @for $i from 1 through 9 {
        .item:nth-child(#{$i}) {
            background: hsl($i * 40, 100%, 80%);
        }

        // 移入子元素改变父元素css属性
        &:has(.item:nth-child(#{$i}):hover) {
            $r: floor(calc(($i - 1) / 3) + 1);
            $c: ($i - 1) % 3 + 1;
            $arr: 1fr 1fr 1fr;
            $rows: set-nth($arr, $r, 2fr);
            $cols: set-nth($arr, $c, 2fr);
            grid-template-columns: $cols;
            grid-template-rows: $rows;
        }
    }
}
</style>