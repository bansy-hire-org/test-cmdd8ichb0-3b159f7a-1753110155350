<template>
  <div id="app">
    <h1>Satellite Image Dashboard</h1>
    <div class="filters">
      <label for="date">Acquisition Date:</label>
      <input type="date" id="date" v-model="filterDate" @change="applyFilter">
    </div>
    <div class="image-container">
      <img :src="imageUrl" alt="Satellite Image" v-if="imageUrl">
      <p v-else>Loading image...</p>
    </div>
    <div class="metadata">
      <p v-if="metadata">Acquisition Date: {{ metadata.acquisitionDate }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      imageUrl: null,
      metadata: null,
      filterDate: ''
    };
  },
  mounted() {
    this.fetchImage();
  },
  methods: {
    async fetchImage() {
      try {
        const response = await axios.get('/api/image');
        this.imageUrl = response.data.imageUrl;
        this.metadata = response.data.metadata;
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    },
    async applyFilter() {
      try {
          const response = await axios.get(`/api/image?date=${this.filterDate}`);
          this.imageUrl = response.data.imageUrl;
          this.metadata = response.data.metadata;
      } catch (error) {
          console.error('Error fetching image with filter', error);
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.image-container {
  margin-top: 20px;
}
img {
  max-width: 500px;
}
</style>
