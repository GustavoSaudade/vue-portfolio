<template>
  <div class="row first-section">
    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <h2>Languages</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <Progress :radius="50" :strokeWidth="10" value="100.00">
            <template v-slot:footer>
              <b>Portuguese</b>
            </template>
          </Progress>
        </div>
        <div class="col-6">
          <Progress
            :transitionDuration="5000"
            :radius="50"
            :strokeWidth="10"
            strokeColor="#e67c0b"
            value="66.75"
          >
            <template v-slot:footer>
              <b>English</b>
            </template>
          </Progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Progress from 'easy-circular-progress'

export default {
  name: 'Languages',
  components: {
    Progress
  }
}
</script>

<style lang="scss">
</style>
