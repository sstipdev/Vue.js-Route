<template>
  <div>
    <h5>{{ data.title }}</h5>
    <p>{{ data.content }}</p>
    <p>{{ data.date }}</p>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    data: Array,
  },
};
</script>

<style></style>
