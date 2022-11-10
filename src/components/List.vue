<template>
  <div v-for="(data, i) in roomsData" :key="i">
    <router-link to="/detail/">
      <h5 @click="check = data.number">{{ data.title }}</h5>
    </router-link>
    <p>{{ data.content }}</p>
    <p>{{ data.date }}</p>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    roomsData: Array,
  },
  data() {
    return {
      check: 0,
    };
  },
  methods: {
    sendCheckData() {
      const eventBus = new Vue();
      eventBus.$emit("check", this.check);
    },
  },
};
</script>

<style></style>
