<template>
  <div>
    <h2>프로젝트 상세 페이지 입니다.</h2>
    <h4>{{ roomsData[$route.params.id].title }}</h4>
    <p>{{ roomsData[$route.params.id].content }}</p>
    <p>{{ roomsData[$route.params.id].date }}</p>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    roomsData: Array,
  },
};
</script>

<style></style>
