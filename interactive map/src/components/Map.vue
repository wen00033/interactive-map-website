<template>
  <div class="tag" v-for="(el, i) in search" :key="el.location">
    <p @click="unchecked(el)">{{ el.location }}</p>
  </div>
  <div>
    <l-map class="map" v-model:zoom="zoom" :center="[lat, long]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker v-if="Haslat" :lat-lng="[lat, long]"> </l-marker>
      <l-marker v-for="(el, i) in search" :key="i" :lat-lng="[el.lat, el.long]">
      </l-marker>
    </l-map>
  </div>
</template>

<script type="ts">
import { LMap, LTileLayer,LMarker, LIcon} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import {filter} from 'lodash';
export default {
  name: "Spot",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon
     },
  props:['lat','long','search'],
  data() {
    return {
      zoom: 2,
      filtered:[]
    };
  },
  computed:{
    Haslat(){
      return !!this.lat;
    }

  },
  methods:{
    unchecked(el){
      el.checked = false
    }
  }

};
</script>
<style>
.map {
  aspect-ratio: 1;
}

.tag {
  transition: all 400ms ease-in-out;
  padding: 1rem;
  margin: 0.5rem;
  color: white;
  border-radius: 1rem;
  background-color: cadetblue;
  display: inline-block;
  box-shadow: 1px 1px 2px black;
}
.tag:hover {
  box-shadow: 2px 2px 3px black;
  transform: scale(1.05);
}
</style>
