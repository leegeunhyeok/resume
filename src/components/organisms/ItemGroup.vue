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
        @click="$emit('select', i)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ListItem as ListItemProps } from '@/types';
import Text from '@/components/atoms/Text.vue';
import ListItem from '@/components/molecules/ListItem.vue';

export default defineComponent({
  name: 'ItemGroup',
  components: { Text, ListItem },
  props: {
    label: String,
    items: Array as PropType<ListItemProps[]>,
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
