<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h1 class="subtilte">Skills</h1>
        <ul>
          <li class="skill" v-for="(skill, i) in skillSet" :key="i">
            <div :style="{ width: skill.initLevel + '%' }">
              <label>{{ skill.area }}</label>
              <label>{{ skill.initLevel + "%" }}</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <Progress :radius="50" :strokeWidth="10" value="86.12">
          <template v-slot:footer>
            <b>Bolder & Bigger One</b>
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
            <b>Slow One</b>
          </template>
        </Progress>
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <Progress strokeColor="#FF00AA" value="16.88">
          <template v-slot:footer>
            <b>More Color</b>
          </template>
        </Progress>
      </div>
      <div class="col-3">
        <Progress strokeColor="#FF00AA" value="16.88">
          <template v-slot:footer>
            <b>More Color</b>
          </template>
        </Progress>
      </div>
      <div class="col-3">
        <Progress strokeColor="#FF00AA" value="16.88">
          <template v-slot:footer>
            <b>More Color</b>
          </template>
        </Progress>
      </div>
      <div class="col-3">
        <Progress strokeColor="#FF00AA" value="16.88">
          <template v-slot:footer>
            <b>More Color</b>
          </template>
        </Progress>
      </div>
    </div>
  </div>
</template>

<script>
import Progress from 'easy-circular-progress'

export default {
  name: 'SkillsBar',
  components: {
    Progress
  },
  data () {
    return {
      intervalID: '',
      increment: 1,
      skillSet: [
        { area: 'java', initLevel: 0, level: 50 },
        { area: 'c/c++', initLevel: 0, level: 60 },
        { area: 'python', initLevel: 0, level: 70 },
        { area: 'php', initLevel: 0, level: 80 },
        { area: 'css3', initLevel: 0, level: 90 },
        { area: 'html5', initLevel: 0, level: 100 }
      ]
    }
  },
  mounted: function () {
    this.intervalID = setInterval(() => {
      this.getLevelProgress(this.increment)
    }, 10)
  },
  methods: {
    getLevelProgress: function (value) {
      this.skillSet.forEach(data => {
        data.initLevel = Math.min(Math.floor(data.initLevel + value), data.level)
      })
    }
  },
  beforeDestroy: function () {
    clearInterval(this.intervalID)
  }
}
</script>

<style lang="scss">
@import "./src/assets/variables.scss";

.subtilte {
  color: darken($gray-color, 25%);
}
.skill {
  margin: .5em 0 .5em;
  border: .1em solid darken($loading-color, 25%);
  border-radius: 3px;
  background: lighten($loading-color, 25%);
  list-style: none;
  overflow: hidden;
  div {
    position: relative;
    height: 1.4em;
    background: $loading-color;
    font-size: 1.2em;
    label:first-child {
      position: absolute;
      left: 8px;
    }
    label:last-child {
      position: absolute;
      right: 8px;
    }
  }
}
</style>
