<template>
  <Desktop :appData="appData" :template="template" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/store';
import { GetterTypes } from '@/store/getter';
import { useTemplate } from '@/compositions';

import Desktop from '@/components/templates/Desktop.vue';

// Data
import ProjectData from '@/data/project.json';
import ActivityData from '@/data/activity.json';

const appData = {
  projects: ProjectData,
  activity: ActivityData,
};

export default defineComponent({
  name: 'Home',
  components: { Desktop },
  setup() {
    const router = useRouter();
    const { getters } = useStore();
    getters[GetterTypes.READY] || router.push({ path: '/' });

    return { appData, template: useTemplate() };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

.home {
  @include page;
}
</style>
