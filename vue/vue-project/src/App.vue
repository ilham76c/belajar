<template>
  <h2>Nama: {{ nama }}</h2>
  <button v-on:click="changeName">Change Name</button>
  <p><a v-bind:href="url">Blog</a></p>
  <p><input type="text" v-model="alamat"></p>
  <p>Alamat: {{ alamat }}</p>

  <div v-if="products.length">
    <ul>
      <li v-for="item in products" :key="item.id">
        {{ item.title }} - {{ item.price }}
      </li>
    </ul>
  </div>
  <div v-else>
    <p>No Data Found!</p>
  </div>
  <input type="text" v-model="cari" placeholder="Cari">
  <ul>
    <li v-for="item in cariData" :key="item.id">
      {{ item.title }} - {{ item.price }}
    </li>
  </ul>
  <Header :text="text"/>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      nama: 'Moh. Ilham B.',
      url: 'https://pacman97.blogspot.com/',
      alamat: '',
      products: [
        {id: 1, title: 'Product 1', price: 100},
        {id: 2, title: 'Product 2', price: 200},
        {id: 3, title: 'Product 3', price: 300},
        {id: 4, title: 'Product 4', price: 400},
        {id: 5, title: 'Product 5', price: 500},
      ],
      cari: '',
      text: 'Ini adalah text dari App.vue',
    }
  },
  methods: {
    changeName() {
      this.nama = 'Okee';
    },
  },
  beforeCreate() {
    // jika ingin menjalankan fungsi sebelum komponen dibuat
    console.log('Before create');
  },
  created() {
    console.log('Created');
    this.products.push({id: 6, title: 'Product 6', price: 600});
  },
  beforeMount() {
    console.log('Before mount');
  },
  mounted() {
    console.log('Mounted');
  },
  // computed property adalah property yg dapat digunakan untuk mendefinisikan data yg nilainya dari data lain
  computed: {
    cariData() {
      return this.products.filter((item) => {
        return item.title.match(this.cari);
      });
    }
  }
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
