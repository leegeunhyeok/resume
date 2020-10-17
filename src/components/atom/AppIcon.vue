<template>
  <div class="app-icon">
    <img :src="icon" :alt="name"/>
    <p>{{ name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

$icon-size: 7rem;

.app-icon {
  cursor: pointer;
  border-radius: $radius;
  overflow: hidden;
  margin: 1.5rem 2rem;

  @include size(sm) {
    margin: 1rem;
  }

  & > img {
    width: $icon-size;
    height: $icon-size;
  }

  & > p {
    text-align: center;
    margin: 0;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .3);
  }
}
</style>
