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
      <ListItem
        v-for="(item, i) in items"
        :key="i"
        :content="item.title"
        :tag="item.tag"
        @item-click="$emit('item-click', i)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Text from '@/components/atom/Text.vue';
import ListItem from '@/components/molecule/ListItem.vue';
import { ListItem as ListItemProps } from '@/types';

export default defineComponent({
  name: 'ListGroup',
  components: { Text, ListItem },
  props: {
    label: String,
    items: Array as PropType<ListItemProps[]>,
  },
  emits: ['item-click'],
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
