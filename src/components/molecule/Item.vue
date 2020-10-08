<template>
  <div class="item" @click="$emit('item-click')">
    <Tag class="item__tag" :color="tag" v-if="tag" />
    <Text color="primary" :content="content" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Text from '@/components/atom/Text.vue';
import Tag from '@/components/atom/Tag.vue';

export default defineComponent({
  name: 'Item',
  components: { Text, Tag },
  props: {
    content: String,
    tag: String,
  },
  emits: ['item-click'],
});
</script>

<style lang="scss" scoped>
@import '@/styles/common.scss';

@include theme {
  .item {
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: $radius;
    overflow: hidden;
    padding: 0.5rem 1rem;

    &:hover,
    &:active {
      background-color: rgba(t('mask'), 0.1);
    }

    &__tag {
      margin-right: 0.5rem;
    }
  }
}
</style>
