<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="subtilte">Skills</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <ul class="nav nav-tabs">
          <li role="presentation" :class="{ tab: true, active: technicalActive }" @click="changeActive('activeTechnical')">
            Technical
          </li>
          <li role="presentation" :class="{ tab: true, active: projectActive }" @click="changeActive('activeProjectManagement')">
            Project Management
          </li>
          <li role="presentation" :class="{ tab: true, active: languagesActive }" @click="changeActive('activeLanguages')">
            Languages
          </li>
        </ul>
      </div>
    </div>
    <div class="row skill-section" v-if="technicalActive">
      <div class="col-12">
        <ProgramLangues></ProgramLangues>
        <SpecificFrameworks></SpecificFrameworks>
      </div>
    </div>
    <div class="row skill-section" v-if="projectActive">
      <div class="col-12">
        <Agile></Agile>
      </div>
    </div>
    <div class="row skill-section" v-if="languagesActive">
      <div class="col-12">
        <Languages></Languages>
      </div>
    </div>
  </div>
</template>

<script>
import ProgramLangues from './program-languages'
import SpecificFrameworks from './specific-frameworks'
import Agile from './agile'
import Languages from './languages'

export default {
  name: 'SkillsBar',
  components: {
    ProgramLangues,
    SpecificFrameworks,
    Agile,
    Languages
  },
  data () {
    return {
      technicalActive: true,
      projectActive: false,
      languagesActive: false
    }
  },
  methods: {
    changeActive: function (tabName) {
      if (tabName === 'activeTechnical') {
        this.technicalActive = true
        this.projectActive = false
        this.languagesActive = false
      }
      if (tabName === 'activeProjectManagement') {
        this.technicalActive = false
        this.projectActive = true
        this.languagesActive = false
      }
      if (tabName === 'activeLanguages') {
        this.technicalActive = false
        this.projectActive = false
        this.languagesActive = true
      }
    }
  }
}
</script>

<style lang="scss">
@import "./src/assets/variables.scss";

.container {
  background-color: #0d1117;
}
.skill-section {
  border: solid 1px #ddd;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
}
.tab {
  padding: 10px 15px;
}
.active {
  cursor: default;
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-color: transparent;
  position: relative;
  display: block;
  color: #007bff;
}
</style>
