<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="subtilte">Skills</h1>
      </div>
    </div>
    <div class="row first-section">
      <div class="col-12">
        <h2>Program languages</h2>
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
        { area: 'html', initLevel: 0, level: 98 },
        { area: 'JavaScript', initLevel: 0, level: 93 },
        { area: 'css', initLevel: 0, level: 88 },
        { area: 'Python', initLevel: 0, level: 70 },
        { area: 'Java', initLevel: 0, level: 65 },
        { area: 'SAP', initLevel: 0, level: 66 }
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
