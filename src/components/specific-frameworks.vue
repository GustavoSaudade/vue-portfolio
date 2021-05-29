<template>
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <h3>Specific Frameworks</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-6 specific-frameworks">
            <h4>JAVASCRIPT</h4>
            <div class="row">
              <div class="col-6">
                <Progress strokeColor="#FF00AA" value="16.88">
                  <template v-slot:footer>
                    <b>VueJs</b>
                  </template>
                </Progress>
              </div>
              <div class="col-6">
                <Progress strokeColor="#FF00AA" value="16.88">
                  <template v-slot:footer>
                    <b>ReactJs</b>
                  </template>
                </Progress>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <Progress strokeColor="#FF00AA" value="16.88">
                  <template v-slot:footer>
                    <b>Angular</b>
                  </template>
                </Progress>
              </div>
              <div class="col-6">
                <Progress strokeColor="#FF00AA" value="16.88">
                  <template v-slot:footer>
                    <b>Jquery</b>
                  </template>
                </Progress>
              </div>
            </div>
          </div>
          <div class="col-6 specific-frameworks">
            <h4>JAVASCRIPT</h4>
            <div class="row">
              <div class="col-6">
                <Progress strokeColor="#FF00AA" value="16.88">
                  <template v-slot:footer>
                    <b>VueJs</b>
                  </template>
                </Progress>
              </div>
              <div class="col-6">
                <Progress strokeColor="#FF00AA" value="16.88">
                  <template v-slot:footer>
                    <b>ReactJs</b>
                  </template>
                </Progress>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <Progress strokeColor="#FF00AA" value="16.88">
                  <template v-slot:footer>
                    <b>Angular</b>
                  </template>
                </Progress>
              </div>
              <div class="col-6">
                <Progress strokeColor="#FF00AA" value="16.88">
                  <template v-slot:footer>
                    <b>Jquery</b>
                  </template>
                </Progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Progress from 'easy-circular-progress'

export default {
  name: 'SpecificFrameworks',
  components: {
    Progress
  }
}
</script>

<style lang="scss">

</style>
