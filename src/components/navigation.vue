<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Gustavo Saudade</a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link to="/">{{ landerLink }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/skills">{{ skillsLink }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/portfolio">{{ portfolioLink }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact">{{ contactLink }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',

  data () {
    return {
      landerLink: 'Card',
      skillsLink: 'Skills',
      portfolioLink: 'Portfolio',
      contactLink: 'Contact'
    }
  }
}
</script>

<style lang="scss">
.navbar, .navbar-expand-lg {
  color: #f0f6fc;
}

li {
  margin-left: 20px;
}
</style>
