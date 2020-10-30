<template>
  <div class="list-group">
    <Text
      class="list-group__label"
      color="secondary"
      size="small"
      bold
      :content="label"
      v-if="label"
    />
    <div class="list-group__list">
      <Item
        v-for="(item, i) in items"
        :key="i"
        :content="item.label"
        :tag="item.tag"
        @click="$emit('select', i)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Item as ItemData } from '@/types';
import Text from '@/components/atoms/Text.vue';
import Item from '@/components/molecules/Item.vue';

export default defineComponent({
  name: 'ItemGroup',
  components: { Text, Item },
  props: {
    group: String,
    items: Array as PropType<ItemData[]>,
  },
  emits: ['select'],
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

.list-group {
  margin-bottom: 1rem;

  &__label {
    padding-left: 0.25rem;
  }

  &__list {
    margin-top: 0.4rem;
  }
}
</style>
