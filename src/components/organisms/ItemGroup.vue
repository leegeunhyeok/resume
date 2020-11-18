<template>
  <div class="list-group">
    <Text
      class="list-group__label"
      color="secondary"
      size="small"
      bold
      :content="firstCharToUppercase(group)"
      v-if="group"
    />
    <div class="list-group__list">
      <Item
        v-for="(item, i) in items"
        :key="i"
        :content="item.label"
        :tag="item.id"
        :color="item.color"
        :active="activeTag === item.id"
        @click="$emit('select', item.id)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Item as ItemData } from '@/types';
import { firstCharToUppercase } from '@/common/util';
import Text from '@/components/atoms/Text.vue';
import Item from '@/components/molecules/Item.vue';

export default defineComponent({
  name: 'ItemGroup',
  components: { Text, Item },
  props: {
    group: String,
    items: Array as PropType<ItemData[]>,
    activeTag: String,
  },
  emits: ['select'],
  setup() {
    return { firstCharToUppercase };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

.list-group {
  position: relative;
  margin-right: 1rem;
  display: inline-block;

  @include size(sm) {
    display: block;
    margin-bottom: 1rem;
    margin-right: 0;
  }

  &__label {
    padding-left: 0.25rem;
    @include size(sm) {
      padding-left: 0.25rem;
    }
  }

  &__list {
    margin-top: 0.4rem;

    & .item {
      display: inline-flex !important;
      @include size(sm) {
        display: flex !important;
      }
    }
  }
}
</style>
