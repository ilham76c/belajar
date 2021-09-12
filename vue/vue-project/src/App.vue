<template>
  <h2>Nama: {{ nama }}</h2>
  <button v-on:click="changeName">Change Name</button>
  <p><a v-bind:href="url">Blog</a></p>
  <p><input type="text" v-model="alamat"></p>
  <p>Alamat: {{ alamat }}</p>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      nama: 'Moh. Ilham B.',
      url: 'https://pacman97.blogspot.com/',
      alamat: '',
    }
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
