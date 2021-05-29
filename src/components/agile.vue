<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <h2>Agile & Project Management</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <Progress :radius="50" :strokeWidth="10" value="92.12">
            <template v-slot:footer>
              <b>Scrum</b>
            </template>
          </Progress>
        </div>
        <div class="col-6">
          <Progress
            :transitionDuration="5000"
            :radius="50"
            :strokeWidth="10"
            value="86.12"
          >
            <template v-slot:footer>
              <b>Kanban</b>
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
  name: 'Agile',
  components: {
    Progress
  }
}
</script>

<style lang="scss">
</style>
