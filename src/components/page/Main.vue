<template>
  <div class="main">
    <transition name="fade" mode="in-out">
      <div class="main__loading" v-if="loading">
        <Progress :value="progress" />
      </div>
      <div class="main__content" v-else>
        <div class="main__content__wallpaper" :style="{ transform: `scale(${zoom})` }" />
        <div class="main__content__wrap hello" :style="{ opacity }">
          <Text size="large" content="For better" font="normal" bold />
          <Text size="large" content="Web experience." font="normal" bold />
        </div>
        <div class="main__content__wrap login">
          <div class="profile">
            <img src="@/assets/avatar.png" />
          </div>
          <Text content="Geunhyeok LEE" size="large" bold />
          <Button text="Login" size="large" color="glass" @click="toHome" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/store';
import { MutationTypes } from '@/store/mutation';
import Progress from '@/components/atom/Progress.vue';
import Button from '@/components/atom/Button.vue';
import Text from '@/components/atom/Text.vue';

const maxScale = 2;

export default defineComponent({
  name: 'Main',
  components: { Progress, Button, Text },
  setup() {
    const { commit } = useStore();
    const router = useRouter();
    const progress = ref(0);
    const loading = ref(true);
    const zoom = ref(maxScale);
    const opacity = ref(1);

    const scrollHandler = () => {
      const scale = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      zoom.value = Math.max(-1 * scale + maxScale, 1);
      opacity.value = 1 - Math.min(window.scrollY / (window.innerHeight / 2), 1);
    };

    const toHome = () => router.push({ path: '/home' });

    // Lazy (wait for 1 sec)
    watch(
      () => progress.value,
      val => {
        if (val >= 100) {
          setTimeout(() => {
            loading.value = false;
            document.body.classList.add('loaded');
            commit(MutationTypes.APP_LOADED, undefined);
          }, 1000);
        }
      },
    );

    // Sample
    setTimeout(() => (progress.value = 100), 1000);

    // Life cycle hooks
    onMounted(() => window.addEventListener('scroll', scrollHandler));
    onBeforeUnmount(() => window.addEventListener('scroll', scrollHandler));

    return { loading, progress, zoom, opacity, toHome };
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
