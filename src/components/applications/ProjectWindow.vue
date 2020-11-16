<template>
  <Window @close="$emit('close')">
    <template v-slot:side>
      <ItemGroup
        v-for="(list, i) in groupList"
        :group="list.group"
        :items="list.items"
        :activeTag="currentTag || ''"
        :key="i"
        @select="setTagFilter($event)"
      />
    </template>
    <template v-slot:default>
      <transition-group name="list" mode="in-out">
        <ProjectItem v-for="(data, i) in filteredContent" :data="data" :key="i" />
      </transition-group>
    </template>
  </Window>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue';
import { TagData, ProjectData } from '@/types';
import { assetFrom } from '@/common/util';

import ProjectItem from '@/components/molecules/ProjectItem.vue';
import Window from '@/components/organisms/Window.vue';
import ItemGroup from '@/components/organisms/ItemGroup.vue';

interface ProjectWindowProps {
  tags: { [key: string]: TagData };
  content: ProjectData[];
}

const allTag: TagData = {
  tag: 'empty',
  label: 'All',
  color: '',
};

export default defineComponent({
  name: 'ProjectWindow',
  components: { ProjectItem, Window, ItemGroup },
  props: {
    data: {
      type: Object as PropType<ProjectWindowProps>,
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

    const getTagColor = (tagName: string) => {
      const tag = Object.values(props.data.tags)
        .flat()
        .find(({ tag }) => tag === tagName);
      return tag ? tag.color : '';
    };

    const filteredContent = computed<(ProjectData & { tagColor: string[] })[]>(() =>
      props.data.content
        .filter(content =>
          currentTag.value !== allTag.tag ? content.tag.find(t => t === currentTag.value) : true,
        )
        .map(data => ({
          ...data,
          tagColor: data.tag.map(getTagColor),
        })),
    );

    const setTagFilter = (tag: string) => (currentTag.value = tag);

    return {
      groupList,
      filteredContent,
      setTagFilter,
      assetFrom,
      currentTag,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

.project {
  &__items {
    position: relative;
    margin-bottom: 1rem;

    &--empty {
      text-align: center;
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
