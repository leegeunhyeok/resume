<template>
  <div class="desktop">
    <div class="desktop__apps">
      <Icon
        v-for="(app, i) in apps"
        :name="app.name"
        :icon="app.icon"
        :key="i"
        @click="appExecute(app)"
      />
    </div>
    <transition name="fade">
      <Window :title="activeApp?.name" @close="closeWindow" v-show="isOpen">
        <template v-slot:side v-if="activeApp?.type === 'list'">
          <ItemGroup
            v-for="(list, i) in listGroup"
            :label="list.group"
            :items="list.items"
            :key="i"
          />
        </template>
        <template v-slot:default>
          <Text size="large" content="Title" bold />
        </template>
      </Window>
    </transition>
    <Dock />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue';
import { AppType, Content, ListItem, DockMenu } from '@/types';
import Text from '@/components/atoms/Text.vue';
import Icon from '@/components/atoms/Icon.vue';
import Window from '@/components/organisms/Window.vue';
import Dock from '@/components/organisms/Dock.vue';
import ItemGroup from '@/components/organisms/ItemGroup.vue';

interface DesktopProps {
  apps: AppType[];
  dock: DockMenu;
}

interface ListGroup {
  group?: string;
  items: (ListItem & { content: Content[] })[];
}

export default defineComponent({
  name: 'Desktop',
  components: { Text, Icon, Window, ItemGroup, Dock },
  props: {
    apps: {
      type: Array as PropType<AppType[]>,
      default: [],
    },
    dock: {
      type: Object as PropType<DockMenu>,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);
    const activeApp = ref<null | AppType>(null);
    const listGroup = computed(() => {
      if (activeApp.value?.type !== 'list') return [];
      return activeApp.value.items.reduce((prev, { group, tag, title, content }) => {
        const groupObject = prev.find(x => x.group === group);
        groupObject
          ? groupObject.items.push({ tag, title, content })
          : prev.push({ group, items: [{ tag, title, content }] });
        return prev;
      }, [] as ListGroup[]);
    });

    const appExecute = (app: AppType) => {
      if (app.type === 'link') {
        window.open(app.url, '_blank');
      } else {
        activeApp.value = app;
        isOpen.value = true;
      }
    };

    const closeWindow = () => (isOpen.value = false);

    return { appExecute, activeApp, listGroup, isOpen, closeWindow };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

.desktop {
  @include page;
  display: flex;
  align-items: center;
  justify-content: center;

  &__apps {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 1rem;
    padding-bottom: $dock-height;
    max-width: 24rem;

    @include size(sm) {
      max-width: 40rem;
    }
  }
}
</style>
