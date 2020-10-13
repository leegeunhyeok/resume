<template>
  <div class="main">
    <div class="main__loading"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'Main',
  setup() {
    const isLoaded = ref(false);
    return { isLoaded };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

@include theme {
  .main {
    @include page;

    &__loading {
      @include page;
      background-color: t(pure);
    }
  }
}
</style>