<template>
  <div style="width: 100%; height: 100%;">
    <hm-leaflet
      zoom="2"
      :center="center"
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      :list="list"
    ></hm-leaflet>
  </div>
</template>

<script>
import HmLeaflet from "/@/components/built-in/jeecg/HmLeaflet.vue";
export default {
  components: {
    HmLeaflet,
  },
  data() {
    return {
      center: [41.8329, -87.7327],
      list: [
        {
          id: 1,
          type: "marker",
          latLng: [41.8329, -87.7327],
          tooltip: "Hi! I'm staying here on this location!",
        },
        {
          id: 2,
          type: "markerGrag",
          latLng: [41.75, -87.65],
          tooltip: "Hi! You can drag me around!",
        },
        {
          id: 3,
          type: "polygon",
          latLng: [
            [41.6329, -87.5327],
            [41.5329, -87.2327],
            [41.3329, -87.3327],
            [41.6329, -87.5327],
          ],
          color: "#41b782",
          fill: true,
          fillOpacity: 0.5,
          fillColor: "#41b782",
          tooltip: "Hi! I'm a polygon, nice to meet you!",
        },
        {
          id: 4,
          type: "polyline",
          latLng: [
            [41.9329, -87.9327],
            [41.8329, -87.8327],
          ],
          color: "green",
          tooltip: "Hey! Polyline here, at your service!",
        },
        {
          id: 5,
          type: "rectangle",
          latLng: [
            [41.734852, -86.809485],
            [41.742596, -86.628731],
            [41.641487, -86.590568],
            [41.634787, -86.658337],
          ],
          colro: "#35495d",
          fill: true,
          tooltip: "Good day! Rectangle is my name!",
        },
        {
          id: 6,
          type: "circle",
          latLng: [41.4329, -87.7327],
          color: "green",
          radius: 10000,
          tooltip: " Hi! I'm a green Circle!",
        },
        {
          id: 7,
          type: "circleMarker",
          latLng: [41.4329, -87.95],
          radius: 20,
          tooltip: "Hi! You can call me Circle Marker!",
        },
      ]
    };
  },
  methods:  {},
  methods: {
  },
};
</script>

<style>
</style>