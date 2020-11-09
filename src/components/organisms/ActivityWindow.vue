<template>
  <Window @close="$emit('close')">
    <template v-slot:side>
      <ItemGroup
        v-for="(list, i) in groupList"
        :group="list.group"
        :items="list.items"
        :activeTag="activeTag || ''"
        :key="i"
        @select="setTagFilter($event)"
      />
    </template>
    <template v-slot:default>
      <transition-group name="list" mode="in-out">
        <div class="activity__items" v-for="(data, i) in filteredContent" :key="i">
          <div class="activity__items__tag">
            <Tag :color="data.tag" />
          </div>
          <div class="activity__items__information">
            <Text :content="data.title" size="large" bold />
            <Text :content="data.date" color="secondary" size="small" thin />
          </div>
        </div>
      </transition-group>
    </template>
  </Window>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue';
import { TagData, ActivityData } from '@/types';

import Tag from '@/components/atoms/Tag.vue';
import Text from '@/components/atoms/Text.vue';
import Window from '@/components/organisms/Window.vue';
import ItemGroup from '@/components/organisms/ItemGroup.vue';

interface ActivityWindowProps {
  tags: { [key: string]: TagData };
  content: ActivityData[];
}

const allTag: TagData = {
  tag: 'empty',
  label: 'All',
};

export default defineComponent({
  name: 'ActivityWindow',
  components: { Tag, Text, Window, ItemGroup },
  props: {
    data: {
      type: Object as PropType<ActivityWindowProps>,
      required: true,
    },
  },
  emits: ['close'],
  setup(props) {
    const currentTag = ref<string>(allTag.tag);
    const groupList = computed(() =>
      Object.entries({ general: [allTag], ...props.data.tags }).map(([group, items]) => ({
        group,
        items,
      })),
    );

    const filteredContent = computed(() =>
      props.data.content
        .filter(content =>
          currentTag.value !== allTag.tag ? content.tag === currentTag.value : true,
        )
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    );

    const setTagFilter = (tag: string) => (currentTag.value = tag);

    return {
      groupList,
      filteredContent,
      setTagFilter,
      activeTag: computed(() => currentTag.value),
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

.activity {
  &__items {
    position: relative;
    margin-bottom: 1rem;
    padding-left: 10px;

    &__tag {
      position: absolute;
      top: 0;
      left: 0;

      & > * {
        height: 1.6rem;
        border-radius: 0;
        width: 5px;
      }
    }

    &__information {
      & > * {
        display: inline-block;
        margin-right: 0.5rem !important;
      }
    }
  }
}

.list-enter-active,
.list-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
