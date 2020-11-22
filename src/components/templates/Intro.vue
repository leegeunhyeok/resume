<template>
  <div class="intro">
    <div class="intro__content">
      <div class="intro__content__wallpaper" :style="{ transform: `scale(${zoom})` }" />
      <div class="intro__content__wrap hello" :style="{ opacity }">
        <Text
          v-for="(text, i) in template.introText"
          :content="text"
          font="normal"
          size="large"
          bold
          :key="i"
        />
      </div>
      <div class="intro__content__wrap login">
        <div class="profile">
          <img :src="template.photo" />
        </div>
        <Text size="large" bold :content="template.name" />
        <Button text="Login" size="large" color="glass" @click="toHome" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent, onMounted, onBeforeUnmount, ref } from 'vue';
import { useRouter } from 'vue-router';
import { scrollTo } from '@/common/util';

import Button from '@/components/atoms/Button.vue';
import Text from '@/components/atoms/Text.vue';
import { BaseTemplate } from '@/types';

const maxScale = 2;

export default defineComponent({
  name: 'Intro',
  components: { Button, Text },
  props: {
    template: {
      type: Object as PropType<BaseTemplate>,
      required: true,
    },
  },
  setup() {
    const router = useRouter();
    const loading = ref(true);
    const zoom = ref(maxScale);
    const opacity = ref(1);
    const scrolling = ref(false);

    const toHome = () => {
      if (scrolling.value) return;
      scrolling.value = true;
      scrollTo(document.body.scrollHeight - window.innerHeight, () => {
        router.push({ path: '/home' });
      });
    };

    const scrollHandler = () => {
      const scale = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      zoom.value = Math.max(-1 * scale + maxScale, 1);
      opacity.value = 1 - Math.min(window.scrollY / (window.innerHeight / 2), 1);
    };

    // Life cycle hooks
    onMounted(() => window.addEventListener('scroll', scrollHandler));
    onBeforeUnmount(() => window.addEventListener('scroll', scrollHandler));

    return {
      loading,
      zoom,
      opacity,
      toHome,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

$intro-text-size: 3.2rem;
$profile-image-size: 12rem;

@include theme {
  .intro {
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
        padding-top: calc(50vh - #{$intro-text-size * 2});

        &.hello {
          p {
            font-size: $intro-text-size !important;
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
