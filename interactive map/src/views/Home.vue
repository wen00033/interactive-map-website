<template>
  <h2>This is my home page</h2>
  <button @click.prevent="getlocation">click here</button>
</template>
<script>
export default {
  data: function () {
    return {
      location: "",
      long: "",
      lat: "",
    };
  },
  methods: {
    Hello() {
      console.log("hello world");
    },
    getlocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
        });
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    },
  },
};
</script>
