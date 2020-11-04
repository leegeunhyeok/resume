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
        <div class="project__items" v-for="(data, i) in filteredContent" :key="i">
          <DetailedImage
            :source="contentFrom(data.image)"
            :detail="{ title: data.name, description: data.description }"
          />
          <div class="project__items__tag">
            <Tag
              v-for="(tag, i) in data.tag"
              :color="tag"
              :key="i"
              :style="{ zIndex: data.tag.length - i }"
            />
          </div>
        </div>
      </transition-group>
    </template>
  </Window>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue';
import { TagData, ProjectData } from '@/types';
import { contentFrom } from '@/common/util';

import Tag from '@/components/atoms/Tag.vue';
import DetailedImage from '@/components/molecules/DetailedImage.vue';
import Window from '@/components/organisms/Window.vue';
import ItemGroup from '@/components/organisms/ItemGroup.vue';

interface ProjectWindowProps {
  tags: { [key: string]: TagData };
  content: ProjectData[];
}

const allTag: TagData = {
  tag: 'empty',
  label: 'All',
};

export default defineComponent({
  name: 'ProjectWindow',
  components: { Tag, DetailedImage, Window, ItemGroup },
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

    const filteredContent = computed(() =>
      props.data.content.filter(content =>
        currentTag.value !== allTag.tag ? content.tag.find(t => t === currentTag.value) : true,
      ),
    );

    const setTagFilter = (tag: string) => (currentTag.value = tag);

    return {
      groupList,
      filteredContent,
      setTagFilter,
      contentFrom,
      activeTag: computed(() => currentTag.value),
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

$overlap: 7px;

.project {
  &__items {
    position: relative;
    margin-bottom: 1rem;

    &__tag {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: $radius / 2;
      z-index: 1;
      padding: 0 4px;
      padding-left: $overlap * 1.5;

      & > * {
        position: relative;
        margin-left: -$overlap;
        margin-top: $overlap / 2;
      }
    }

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
