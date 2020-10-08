<template>
  <div class="home">
    <ItemGroup label="Languages" :items="items" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ItemGroup from '@/components/organism/ItemGroup.vue';

export default defineComponent({
  name: 'Home',
  components: { ItemGroup },
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
