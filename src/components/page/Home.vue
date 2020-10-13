<template>
  <div class="home">
    <Window title="hello">
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
import Text from '@/components/atom/Text.vue';
import Window from '@/components/organism/Window.vue';
import Dock from '@/components/organism/Dock.vue';
import ItemGroup from '@/components/organism/ItemGroup.vue';

export default defineComponent({
  name: 'Home',
  components: { Text, Window, ItemGroup, Dock },
  setup() {
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
}
</style>
