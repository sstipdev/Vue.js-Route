<template>
  <div v-for="(data, i) in roomsData" :key="i">
    <h5 @click="$router.push('/detail/' + data.number)">{{ data.title }}</h5>
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
