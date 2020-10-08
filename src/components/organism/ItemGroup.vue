<template>
  <div class="item-group">
    <Text :content="label" color="secondary" size="small" bold v-if="label" />
    <div class="item-group__list">
      <Item
        v-for="(item, i) in items"
        :key="i"
        :content="item.content"
        :tag="item.tag"
        @item-click="$emit('item-click', i)"
      />
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
    label: String,
    items: Array,
  },
  emits: ['item-click'],
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
