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
import { BaseTemplate } from '@/types';

import _Base from '@/data/_base.json';

const TemplateData: BaseTemplate = {
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

img {
  user-select: none;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
