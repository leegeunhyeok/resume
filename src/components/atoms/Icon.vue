<template>
  <div class="icon">
    <img :src="icon" :alt="name" />
    <p>{{ firstCharToUppercase(name) }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { firstCharToUppercase } from '@/common/util';

export default defineComponent({
  name: 'Icon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  setup() {
    return { firstCharToUppercase };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

.icon {
  cursor: pointer;
  border-radius: $radius;
  overflow: hidden;
  padding: 0.5rem 1rem;

  & > img {
    width: 7rem;
    height: 7rem;
  }

  & > p {
    text-align: center;
    margin: 0;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
}
</style>
