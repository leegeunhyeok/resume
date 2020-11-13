<template>
  <Window @close="$emit('close')" :padding="false">
    <template v-slot:default>
      <div class="information">
        <div class="information__vue">
          <img src="@/assets/vue.png" />
        </div>
        <Text :content="'Based on Vue ' + VUE_VERSION" color="secondary" size="large" thin />
        <Text content="with ❤️" size="large" thin />
        <!-- !! DO NOT CHANGE UNDER CONTENTS !! -->
        <div class="information__dev" @click="goToRepository" @touchstart.passive="() => null">
          <Text content="This Résume template developed by" color="secondary" size="small" />
          <Text content="MIT LICENSED" color="secondary" size="small" />
        </div>
      </div>
    </template>
  </Window>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VUE_VERSION } from '@/common';
import { openPage } from '@/common/util';

import Text from '@/components/atoms/Text.vue';
import Window from '@/components/organisms/Window.vue';

export default defineComponent({
  name: 'InformationWindow',
  components: { Text, Window },
  emits: ['close'],
  setup() {
    /* !! DO NOT CHANGE UNDER CONTENTS !! */
    const goToRepository = () => openPage('https://github.com/leegeunhyeok/resume');
    return { goToRepository, VUE_VERSION };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

.information {
  @include page;
  padding-top: 30vh;
  text-align: center;

  @include size(sm) {
    padding-top: 7rem;
  }

  &__vue {
    width: 60%;
    max-width: 150px;
    margin: auto;
    margin-bottom: 0.5rem;
    animation: breath 1s alternate infinite;

    & > img {
      width: 100%;
    }
  }

  &__dev {
    cursor: pointer;
    position: absolute;
    bottom: 1rem;
    width: 100%;
    text-align: center;
    transition: transform 0.2s;

    &:hover,
    &:active {
      transform: scale(1.1);
    }

    & > p:nth-child(1)::after {
      content: ' ©Geunhyeok LEE';
      font-weight: bold;
    }
  }
}

@keyframes breath {
  100% {
    transform: scale(1.1);
  }
}
</style>
