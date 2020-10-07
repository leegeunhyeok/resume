<template>
  <div class="item">
    <Text color="secondary" size="small">Hello!</Text>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Text from '@/components/atom/Text.vue';

export default defineComponent({
  name: 'Item',
  components: { Text },
  props: {
    source: String,
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common.scss';

.item {
  cursor: pointer;
  border-radius: $radius;
  overflow: hidden;
  padding: 0.5rem 1rem;

  &.active {
    background-color: $accent;
  }
}
</style>
