<template>
  <div class="item-group">
    <Text
      class="item-group__label"
      color="secondary"
      size="small"
      bold
      :content="label"
      v-if="label"
    />
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
import { defineComponent, PropType } from 'vue';
import Text from '@/components/atom/Text.vue';
import Item from '@/components/molecule/Item.vue';

interface Item {
  tag?: string;
  content: string;
}

export default defineComponent({
  name: 'ItemGroup',
  components: { Text, Item },
  props: {
    label: String,
    items: Array as PropType<Item[]>,
  },
  emits: ['item-click'],
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

.item-group {
  margin-bottom: 1rem;

  &__label {
    padding-left: 0.25rem;
  }

  &__list {
    margin-top: 0.4rem;
  }
}
</style>
