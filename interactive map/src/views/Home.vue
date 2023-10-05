<template>
  <div class="container">
    <h2 class="title">Search your desired location</h2>
    <button @click.prevent="getlocation">Where am I 🙂</button>
  </div>
  <div class="container">
    <form @submit.prevent="getSearchLocation">
      <input
        type="text"
        id="place"
        name="place"
        placeholder="search..."
        v-model="location"
      />
    </form>
    <button @click="updated">I want these locations</button>
    <button @click="remove">Remove all locations</button>
  </div>

  <ul class="list-container">
    <li class="listItems" v-for="(el, i) in search" :key="i">
      <input
        type="checkbox"
        :id="el.location"
        :name="el.location"
        v-model="el.checked"
      />
      <label :key="i" for="location">{{ el.location }}</label>
    </li>
  </ul>

  <Spot :lat="lat" :long="long" :search="results" />
</template>
<script>
import Spot from "../components/Map.vue";
import axios from "axios";
export default {
  components: {
    Spot,
  },
  data: function () {
    return {
      location: "",
      long: "",
      lat: "",
      search: [],
      results: [],
    };
  },
  // computed: {
  //   filterItems() {
  //     return this.search.filter((el) => el.checked === true);
  //   },
  // },
  methods: {
    getlocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.long = position.coords.longitude;
          this.lat = position.coords.latitude;
        });
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    },
    getSearchLocation() {
      axios
        .get(
          `https://nominatim.openstreetmap.org/search?q=${this.location}&format=json`
        )
        .then(
          (res) =>
            (this.search = res.data.map((el) => {
              return {
                location: el.display_name,
                lat: el.lat,
                long: el.lon,
                checked: false,
              };
            }))
        );
    },
    updated() {
      const addnew = this.search.filter((el) => el.checked === true);
      const newArr = this.results.concat(addnew);
      this.results = newArr.filter((el) => el.checked !== false);
    },
    remove() {
      this.results = [];
      this.lat = "";
      this.long = "";
    },
  },
};
</script>
<style>
#map {
  height: 180px;
}
.title {
  text-transform: uppercase;
  padding: 1.3rem;
  background-color: cadetblue;
  display: inline-block;
  margin-top: 1rem;
  color: white;
}
.list-container {
  display: flex;
  flex-direction: column;
}

.listItems {
  background-color: cadetblue;
  list-style-type: none;
  margin-bottom: 0.5rem;
  border-radius: 3rem;
  box-shadow: 1px 1px 2px black;
}
.container {
  display: flex;
  justify-content: space-between;
}
</style>
