# nuxt3-qrcode

A compoent that supports Nuxt3

This component is based on [node-qrcode](https://github.com/soldair/node-qrcode)

## Installation

```
npm install nuxt3-qrcode
```

## Usage

```
<template>
    <VueQRcode :value="url" :options="option"/>
</template>

<script setup>
import VueQRcode from 'nuxt3-qrcode'

    const url = ref('www.xxxx.com');

    const option = {}
</script>
```

## Available Props

|props|type|required|default|
|--|--|--|--|
|value|String|true|None|
|options|Object|false|OptionInterface|


#### OptionInterface

|property|type|range|default|
|--|--|--|--|
|version|String|||
|errorCorrectionLevel|String|low, medium, quartile, high or L, M, Q, H.||
|maskPattern|Number|(0-7)||
|toSJISFunc|Function|||
|margin|Number||4|
|scale|Number||4|
|small|Boolean||false|
|width|Number|||
|color|Object|ColorObject||

#### ColorObject

|property|type|default|
|--|--|--|
|dark|String|#000000|
|light|String|#FFFFFF|