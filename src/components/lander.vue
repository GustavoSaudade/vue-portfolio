<template>
  <div>
    <section class="section">
      <div class="container-fliud">
        <img
          alt="Vue logo"
          class="rounded-circle"
          src="../assets/imgs/avatar.png"
        />
        <h1>Software Developer</h1>
        <p>This is a fun project I built while learning vue.js and bootstrap</p>
        <button type="button" class="btn btn-primary btn-lg">Contact</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Lander',
  components: {}
}
</script>

<style lang="css" scoped>
.container {
  background-color: aqua;
}

.section {
  padding-top: 10%;
  padding-bottom: 10%;
}
</style>
