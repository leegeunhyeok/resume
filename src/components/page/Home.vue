<template>
  <div class="home">
    <div class="home__apps">
      <AppIcon name="Projects" :icon="require('@/assets/app/folder.png')" />
      <AppIcon name="Activity" :icon="require('@/assets/app/calendar.png')" />
      <AppIcon name="About me" :icon="require('@/assets/app/note.png')" />
      <AppIcon name="Terminal" :icon="require('@/assets/app/terminal.png')" />
      <AppIcon name="Browser" :icon="require('@/assets/app/safari.png')" />
      <AppIcon name="Email" :icon="require('@/assets/app/message.png')" />
      <AppIcon name="Contact" :icon="require('@/assets/app/contact.png')" />
      <AppIcon name="Information" :icon="require('@/assets/app/setting.png')" />
    </div>
    <Window title="hello" style="display: none">
      <template v-slot:side>
        <ItemGroup label="Languages" :items="items" />
      </template>
      <template v-slot:default>
        <Text size="large" content="Title" bold />
      </template>
    </Window>
    <Dock />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import Text from '@/components/atom/Text.vue';
import AppIcon from '@/components/atom/AppIcon.vue';
import Window from '@/components/organism/Window.vue';
import Dock from '@/components/organism/Dock.vue';
import ItemGroup from '@/components/organism/ItemGroup.vue';
import { GetterTypes } from '@/store/getter';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Home',
  components: { Text, AppIcon, Window, ItemGroup, Dock },
  setup() {
    const router = useRouter();
    const { getters } = useStore();
    getters[GetterTypes.READY] || router.push({ path: '/' });

    const items = [
      {
        tag: 'js',
        content: 'Javascript',
      },
      {
        tag: 'ts',
        content: 'Typescript',
      },
      {
        content: 'None',
      },
    ];

    return { items };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

.home {
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
