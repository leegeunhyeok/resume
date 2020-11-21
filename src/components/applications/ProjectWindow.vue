<template>
  <Window @close="$emit('close')">
    <template v-slot:side>
      <ItemGroup
        v-for="(list, i) in groupList"
        :group="list.group"
        :items="list.items"
        :activeTag="currentTagId || ''"
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
  id: 'empty',
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
    const currentTagId = ref<string>(allTag.id);
    const groupList = computed(() =>
      Object.entries({ general: [allTag], ...props.data.tags }).map(([group, items]) => ({
        group,
        items,
      })),
    );

    const getTagColor = (tagId: string) => {
      const tag = Object.values(props.data.tags)
        .flat()
        .find(({ id }) => id === tagId);
      return tag ? tag.color : '';
    };

    const filteredContent = computed<(ProjectData & { tagColor: string[] })[]>(() =>
      props.data.content
        .filter(content =>
          currentTagId.value !== allTag.id ? content.tag.find(t => t === currentTagId.value) : true,
        )
        .map(data => ({
          ...data,
          tagColor: data.tag.map(getTagColor),
        }))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    );

    const setTagFilter = (tag: string) => (currentTagId.value = tag);

    return {
      groupList,
      filteredContent,
      setTagFilter,
      assetFrom,
      currentTagId,
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
