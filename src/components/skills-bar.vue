<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="subtilte">Skills</h1>
      </div>
    </div>
    <div class="row first-section">
      <div class="col-12">
        <ProgramLangues></ProgramLangues>
      </div>
    </div>
    <div class="row first-section">
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
    <div class="row first-section">
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
              value="86.12">
              <template v-slot:footer>
                <b>Kanban</b>
              </template>
            </Progress>
          </div>
        </div>
      </div>
    </div>
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
              value="66.75">
              <template v-slot:footer>
                <b>English</b>
              </template>
            </Progress>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Progress from 'easy-circular-progress'
import ProgramLangues from './program-languages'

export default {
  name: 'SkillsBar',
  components: {
    Progress,
    ProgramLangues
  }
}
</script>

<style lang="scss">
@import "./src/assets/variables.scss";

.subtilte {
  color: darken($gray-color, 25%);
}

.first-section {
  border: solid 1px #000;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
}

.specific-frameworks {
  border: solid 1px #000;
  padding: 20px;
}
</style>
