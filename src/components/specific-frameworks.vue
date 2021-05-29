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
              <div class="col-6" v-for="(framework, i) in frameworks" :key="i">
                <Progress :strokeColor="framework.color" :value="framework.value">
                  <template v-slot:footer>
                    <b>{{ framework.name }}</b>
                  </template>
                </Progress>
              </div>
            </div>
          </div>
          <div class="col-6 specific-frameworks">
            <h4>NODE</h4>
            <div class="row">
              <div class="col-6" v-for="(framework, i) in frameworksNode" :key="i">
                <Progress :strokeColor="framework.color" :value="framework.value">
                  <template v-slot:footer>
                    <b>{{ framework.name }}</b>
                  </template>
                </Progress>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6 specific-frameworks">
            <h4>Python</h4>
            <div class="row">
              <div class="col-12" v-for="(framework, i) in frameworksPython" :key="i">
                <Progress :strokeColor="framework.color" :value="framework.value">
                  <template v-slot:footer>
                    <b>{{ framework.name }}</b>
                  </template>
                </Progress>
              </div>
            </div>
          </div>
          <div class="col-6 specific-frameworks">
            <h4>Database</h4>
            <div class="row">
              <div class="col-6" v-for="(framework, i) in frameworksDatabase" :key="i">
                <Progress :strokeColor="framework.color" :value="framework.value">
                  <template v-slot:footer>
                    <b>{{ framework.name }}</b>
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
  },
  data () {
    return {
      frameworks: [
        { name: 'VueJs', value: '90.55', color: '#aaff00' },
        { name: 'ReactJs', value: '70.83', color: '#ffc404' },
        { name: 'Angular', value: '68.90', color: '#ffc404' },
        { name: 'JQuery', value: '80.25', color: '#aaff00' }
      ],
      frameworksNode: [
        { name: 'Express', value: '80', color: '#aaff00' },
        { name: 'MEAN', value: '72.41', color: '#ffc404' },
        { name: 'Socket', value: '49.88', color: '#e94b4b' },
        { name: 'NestJs', value: '52.88', color: '#e94b4b ' }
      ],
      frameworksPython: [
        { name: 'Django Rest Framework', value: '78.15', color: '#ffc404' }
      ],
      frameworksDatabase: [
        { name: 'SQL', value: '66.15', color: '#ffc404' },
        { name: 'Mongo DB', value: '90.03', color: '#aaff00' }
      ]
    }
  }
}
</script>

<style lang="scss">
.specific-frameworks {
  border: solid 1px #ddd;
  padding: 20px;
}
</style>
