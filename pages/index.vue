<template>
    <input class="test-input"type="text" v-model="val" placeholder="请在此处输入需要转换的内容">
    <button class="test-btn" type="button" @click="commit">重新渲染</button>
    <div class="qrcode">
        <VueQRcode :url="url" :options="{ margin: 1 }"></VueQRcode>
    </div>
</template>

<script setup>
import VueQRcode from '../src/compoents/VueQRcode.vue';

    const url = ref('hello world');

    const val = ref('');

    function commit () {
        if (val.value) {
            url.value = val.value;
        }
    }

</script>

<style>
.test-input {
    box-sizing: border-box;
    display: inline-block;
    width: 200px;
    height: 40px;
    padding: 6px  12px;
    border: 1px #cccccc solid;
    border-radius: 4px;
    line-height: 40px;
    vertical-align: middle;
}

.test-btn {
    box-sizing: border-box;
    display: inline-block;
    height: 40px;
    margin-left: 10px;
    padding: 6px  12px;
    background: #ffffff;
    border: 1px #cccccc solid;
    border-radius: 4px;
    vertical-align: middle;
    cursor: pointer;
}

.qrcode {
    width: 150px;
    height: 150px;
    margin: 20px 0;
}
</style>