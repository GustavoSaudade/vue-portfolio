<template>
  <div class="row">
      <div class="col-12">
        <h2>Program languages</h2>
        <ul>
          <li class="skill" v-for="(skill, i) in skillSet" :key="i">
            <div v-bind:class="{'high': skill.level >= 70, 'medium': skill.level < 70, 'low': skill.level < 50}"
              :style="{ width: skill.initLevel + '%' }">
              <label>{{ skill.area }}</label>
              <label>{{ skill.initLevel + "%" }}</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ProgramLangues',
  components: {},
  data () {
    return {
      intervalID: '',
      increment: 1,
      skillSet: [
        { area: 'html', initLevel: 0, level: 98 },
        { area: 'JavaScript', initLevel: 0, level: 93 },
        { area: 'css', initLevel: 0, level: 88 },
        { area: 'Python', initLevel: 0, level: 70 },
        { area: 'Java', initLevel: 0, level: 65 },
        { area: 'SAP', initLevel: 0, level: 49 }
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
.high {
  background: $loading-color;
}
.medium {
  background: rgb(255, 196, 4)!important;
}
.low {
  background: rgb(233, 75, 75)!important;
}

</style>
