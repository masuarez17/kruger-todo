<template>
  <div id="app" class="d-flex w-100 h-100 align-items-center background">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
html, body {
  background-color: lightgrey;
}

.background {
  background-color: lightgrey;
}

.fade-enter, .fade-leave {
  opacity: 0;
  transform: translateX(2em);
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s ease;
}

</style>
