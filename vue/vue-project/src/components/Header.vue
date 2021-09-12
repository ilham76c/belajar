<template>
    <h2>Header</h2>
    <p>{{ text }}</p>
    <button @click="changeText">Ubah text</button>
</template>

<script>
export default {
    name: 'Header',
    props: [
        'text'
    ],
    data() {
        return {
            newText: 'Ini adalah text dari Header.vue',
        }
    },
    methods: {
        changeText() {
            this.$emit('changeTitle', this.newText);
        }
    },
    // perlu mendaftarkan event emit untuk menghilangkan warning "[Vue warn]: Extraneous non-emits event listeners"
    emits: [
        'changeTitle'
    ]
}
</script>

<style>

</style>