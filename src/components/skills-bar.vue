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
        <SpecificFrameworks></SpecificFrameworks>
      </div>
    </div>
    <div class="row first-section">
      <div class="col-12">
        <Agile></Agile>
      </div>
    </div>
    <div class="row first-section">
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
</style>
