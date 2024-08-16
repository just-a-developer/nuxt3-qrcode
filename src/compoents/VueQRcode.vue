<template>
    <img class="qrcode-img" :src="qrcodeUrl">
</template>

<script setup>
import { ref, watchEffect } from 'vue';

import QRCode from 'qrcode'

    const props = defineProps({ 
        value: { type: String },
        options: { type: Object }
    })

    const emits = defineEmits([ 'error' ]);

    const defaultOption = ref({
        margin: 4,
        scale: 4,
        small: false,
        width: 120,
        color: {
            dark: '#000000ff',
            light: '#ffffffff'
        }
    })

    const qrcodeUrl = ref('');

    watchEffect(() => {
        if (!props.value) return;
        
        QRCode.toDataURL(props.value, Object.assign({}, defaultOption.value, props.options))
            .then(result => {
                qrcodeUrl.value = result;
            }).catch((err) => {
                emits('error', err);
            })
    })
</script>

<style scoped>
.qrcode-img {
    display: block;
    width: 100%;
    height: 100%;
    vertical-align: middle;
}
</style>