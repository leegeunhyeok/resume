<template>
  <span class="tag" :class="'background-' + color" :style="{ backgroundColor: color }" />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'Tag',
  props: {
    color: String,
  },
  setup(props) {
    return {
      tagColor: computed(() => props.color || null),
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

.tag {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;

  &.background-empty {
    background-color: transparent;
    border: 1px solid #eee;
  }
}
</style>
