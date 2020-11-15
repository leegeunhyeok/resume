<template>
  <div class="item" :class="active ? 'active' : null" @touchstart.passive="() => null">
    <Tag class="item__tag" :color="color" v-if="color" />
    <Text color="primary" :content="content" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Text from '@/components/atoms/Text.vue';
import Tag from '@/components/atoms/Tag.vue';

export default defineComponent({
  name: 'Item',
  components: { Text, Tag },
  props: {
    content: String,
    tag: String,
    color: String,
    active: Boolean,
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common.scss';

@include theme {
  .item {
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: $radius / 2;
    overflow: hidden;
    padding: 0.5rem;

    &:hover,
    &:active,
    &.active {
      background-color: rgba(t('mask'), 0.1);
    }

    &__tag {
      margin-right: 0.5rem;
    }
  }
}
</style>
