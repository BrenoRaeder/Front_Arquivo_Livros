<template>
  <div>
    <span></span>
    <h2>{{ titulo }}</h2>
    <span></span>
  </div>
</template>

<script>
export default {
  props: {
    titulo: String,
  },
};
</script>

<style scoped>
div {
  margin: 60px auto;
  width: 95vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

h2 {
  margin: 0 10px;
  text-align: center;
}

span {
  background: var(--preto);
  width: 100%;
  height: 1px;
}
</style>
