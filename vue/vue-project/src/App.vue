<template>
  <h2>Nama: {{ nama }}</h2>
  <button v-on:click="changeName">Change Name</button>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      nama: 'Moh. Ilham B.',
    };
  },
  methods: {
    changeName() {
      this.nama = 'Okee';
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
