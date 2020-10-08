<template>
  <div class="item-group">
    <Text :content="label" color="secondary" size="small" bold v-if="label" />
    <div class="item-group__list">
      <Item content="Javascript" tag="js" @item-click="$emit('item-click')" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Text from '@/components/atom/Text.vue';
import Item from '@/components/molecule/Item.vue';

export default defineComponent({
  name: 'Image',
  components: { Text, Item },
  props: {
    source: String,
  },
  data() {
    return { label: 'My works' };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

.item-group {
  margin-bottom: 1rem;

  &__list {
    margin-top: 0.4rem;
  }
}
</style>
