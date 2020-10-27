<template>
  <Window title="Project" @close="$emit('close')">
    <template v-slot:side>
      <!-- <ItemGroup
        v-for="(list, i) in listGroup"
        :label="list.group"
        :items="list.items"
        :key="i"
        @select="setContent(list.items[$event].content)"
      /> -->
    </template>
    <template v-slot:default>
      Content
    </template>
  </Window>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Window from '@/components/organisms/Window.vue';
// import ItemGroup from '@/components/organisms/ItemGroup.vue';

export default defineComponent({
  name: 'ProjectWindow',
  components: { Window },
  props: {},
  emits: ['close'],
  setup() {
    // EMPTY
  },
});
</script>
