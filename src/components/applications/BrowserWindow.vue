<template>
  <Window @close="$emit('close')" :padding="false">
    <template v-slot:default>
      <div class="browser">
        <div class="browser__google">
          <img src="@/assets/google.png" />
        </div>
        <div class="browser__input">
          <span />
          <input type="text" spellcheck="false" v-model="keyword" @keydown.enter="submit" />
        </div>
      </div>
    </template>
  </Window>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import Window from '@/components/organisms/Window.vue';

export default defineComponent({
  name: 'BrowserWindow',
  components: { Window },
  emits: ['close'],
  setup() {
    const keyword = ref<string>('');

    const submit = () => {
      const currentKeyword = keyword.value.trim();
      if (currentKeyword) {
        window.open(`https://www.google.com/search?q=${currentKeyword}`, '_blank');
      }
    };

    return { keyword, submit };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

.browser {
  background-color: #fff;
  font-family: Consolas, monaco, monospace;
  width: 100%;
  height: 100%;
  padding: 1rem;
  padding-top: 12rem;
  text-align: center;

  &__google {
    margin: auto;
    width: 80%;
    max-width: 300px;

    & > img {
      width: 100%;
    }
  }

  &__input {
    position: relative;
    text-align: center;
    margin-top: 2rem;
    display: inline-block;
    width: 80%;
    max-width: 400px;

    span {
      position: absolute;
      top: 0.8rem;
      left: 0.8rem;
      width: 24px;
      height: 24px;
      background-image: url('~@/assets/search.svg');
      background-position: 0;
      background-size: 24px 24px;
    }

    input {
      background-color: #fff;
      border: 1px solid #dfe1e5;
      border-radius: 24px;
      padding: 1rem 1.5rem;
      padding-left: 3rem;
      color: #000;
      transition: box-shadow 0.2s;
      width: 100%;
      font-size: 1rem;

      &:hover,
      &:active,
      &:focus {
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
      }
    }
  }
}
</style>
