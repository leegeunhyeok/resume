<template>
  <div class="main">
    <transition name="fade" mode="in-out">
      <div class="main__loading" v-if="loading">
        <Progress :value="progress" />
      </div>
      <Intro :template="template" @next="toHome" v-else />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/store';
import { MutationTypes } from '@/store/mutation';
import { imagePreload } from '@/common/util';
import { useTemplate } from '@/compositions';

import Progress from '@/components/atoms/Progress.vue';
import Intro from '@/components/templates/Intro.vue';

declare const __assets: string[];

export default defineComponent({
  name: 'Main',
  components: { Progress, Intro },
  setup() {
    const { commit } = useStore();
    const router = useRouter();
    const progress = ref(0);
    const loading = ref(true);

    const toHome = () => router.push({ path: '/home' });

    imagePreload(__assets, (percent: number) => (progress.value = percent)).then(() => {
      commit(MutationTypes.APP_LOADED, undefined);
      setTimeout(() => (loading.value = false), 500);
    });

    return { progress, loading, toHome, template: useTemplate() };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

$main-text-size: 3.2rem;
$profile-image-size: 12rem;

@include theme {
  .main {
    @include page;

    &__loading {
      @include page;
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 1rem;
      background-color: t(pure);
      z-index: elevation(middle);

      & > div {
        width: 50%;
        max-width: 400px;
      }
    }

    &__content {
      @include page;
      position: relative;

      & > * {
        position: relative;
        z-index: elevation(middle);
        text-align: center;

        p.text {
          color: #fff;
        }
      }

      &__wallpaper {
        @include page;
        position: fixed;
        background: url('~@/assets/wallpaper.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        top: 0;
        left: 0;
        z-index: elevation(lowest);
        transition: transform 0.1s;
      }

      &__wrap {
        @include page;
        position: relative;
        padding-top: calc(50vh - #{$main-text-size * 2});

        &.hello {
          p {
            font-size: $main-text-size !important;
            opacity: 0;
            transition: color 0.1s;

            &:nth-child(1) {
              animation: fade 1s 1.6s linear forwards;
            }

            &:nth-child(2) {
              animation: fade 1s 2s linear forwards;
            }
          }
        }

        &.login {
          padding-top: calc(55vh - #{$profile-image-size * 1.4});

          & > * {
            margin-bottom: 1rem;
          }

          & > div.profile {
            display: inline-block;
            background-color: #fff;
            border-radius: 50%;
            overflow: hidden;
            width: $profile-image-size;
            height: $profile-image-size;

            & > img {
              width: 100%;
            }
          }
        }
      }
    }
  }
}

@keyframes fade {
  100% {
    opacity: 1;
  }
}
</style>
