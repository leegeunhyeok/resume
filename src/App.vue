<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store, { Store, provideStore } from '@/store';
import { MutationTypes } from './store/mutation';

const updateTimeLoop = (store: Store) => {
  const baseTick = 1000;
  let tick = 1000;
  let recent = new Date();

  (function update() {
    setTimeout(() => {
      const current = new Date();
      const delta = current.getTime() - recent.getTime() - baseTick;
      tick = baseTick - delta;
      store.commit(MutationTypes.SET_TIME, current);
      recent = current;
      console.log('timer', tick);
      update();
    }, tick);
  })();
};

export default defineComponent({
  name: 'App',
  setup() {
    provideStore(store);
    updateTimeLoop(store);
  },
});
</script>

<style lang="scss">
@import '@/styles/common';
@import url('https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css');
@import url('https://cdn.jsdelivr.net/gh/moonspam/NanumBarunGothic@latest/nanumbarungothicsubset.css');

html {
  font-family: 'NanumSquare', sans-serif;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-user-select: none;
  user-select: none;
  font-size: 12px;

  @include size(sm) {
    font-size: 14px;
  }
}

html,
body,
#app {
  @include page;
}

body {
  background: url('~@/assets/wallpaper.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

* {
  box-sizing: border-box;
}
</style>
