<template>
    <div>
        <span v-text="message"></span> <!-- 부모 컴포넌트에서 전달받은 변수를 바인딩하여 보여줍니다. -->
    </div>
</template>

<script>
    export default {
        name: "hello-noah",
        props: ['message']
    }
</script>

<style scoped>

</style>
