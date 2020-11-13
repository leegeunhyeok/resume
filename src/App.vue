<template>
  <div class="application">
    <div class="application__background" />
    <router-view v-slot="{ Component }">
      <transition :name="transitionName" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue';
import store, { Store, provideStore } from '@/store';
import { MutationTypes } from '@/store/mutation';
import { GetterTypes } from '@/store/getter';
import { isDarkmode, watchThemeChange } from '@/common/util';
import { Template } from '@/types';

import _Base from '@/data/_base.json';

const TemplateData: Template = {
  name: _Base.profile.name,
  email: _Base.profile.email,
  photo: require('@/assets/' + _Base.profile.photo),
  introduce: _Base.profile.introduce,
  skill: _Base.profile.skill,
  social: _Base.profile.social,
  hobby: _Base.profile.hobby,
  introText: _Base.introText,
};

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
      update();
    }, tick);
  })();
};

export default defineComponent({
  name: 'App',
  setup() {
    provideStore(store);
    updateTimeLoop(store);
    const transitionName = computed(() => (store.getters[GetterTypes.READY] ? 'fade' : null));
    const isDark = computed(() => store.state.isDark);

    const updateTheme = (isDark: boolean) => {
      document.body.removeAttribute('class');
      document.body.classList.add(isDark ? 'dark' : 'light');
    };

    // Darkmode configuration & watch OS theme changing
    watch(isDark, value => updateTheme(value));
    isDarkmode() && updateTheme(true);
    watchThemeChange(updateTheme);

    // Init template data
    store.commit(MutationTypes.SET_TEMPLATE_DATA, TemplateData);

    return { transitionName };
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

* {
  box-sizing: border-box;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  user-select: none;
  outline: 0;
}

.application {
  @include page;

  &__background {
    @include page;
    position: fixed;
    z-index: -1;
    background: url('~@/assets/wallpaper.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
}

@include theme {
  .fa-icon {
    display: inline-block;
    color: t(text);
    width: 24px;
    height: 24px;

    & > svg {
      width: 100%;
      height: 100%;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
