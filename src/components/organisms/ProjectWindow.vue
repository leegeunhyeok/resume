<template>
  <Window title="Project" @close="$emit('close')">
    <template v-slot:side>
      <ItemGroup
        v-for="(list, i) in groupList"
        :group="list.group"
        :items="list.items"
        :key="i"
        @select="setContent(list.items[$event].content)"
      />
    </template>
    <template v-slot:default>
      Content
    </template>
  </Window>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { Content } from '@/types';
import Window from '@/components/organisms/Window.vue';
import ItemGroup from '@/components/organisms/ItemGroup.vue';

interface Tag {
  tag: string;
  label: string;
}

interface Project {
  name: string;
  date: string;
  description: string;
  tag: string[];
  content: Content[];
}

interface ProjectWindowProps {
  tags: { [key: string]: Tag };
  content: Project[];
}

export default defineComponent({
  name: 'ProjectWindow',
  components: { Window, ItemGroup },
  props: {
    data: {
      type: Object as PropType<ProjectWindowProps>,
      required: true,
    },
  },
  emits: ['close'],
  setup(props) {
    return {
      groupList: computed(() =>
        Object.entries(props.data.tags).map(([group, items]) => ({ group, items })),
      ),
    };
  },
});
</script>
