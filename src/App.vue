<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

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
</style>
