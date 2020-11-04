<template>
  <Desktop :appData="Template.appData" :email="Template.email" :dock="Template.dock" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/store';
import { GetterTypes } from '@/store/getter';
import Desktop from '@/components/templates/Desktop.vue';

// Data
import _Base from '@/data/_base.json';
import ProjectData from '@/data/project.json';
import ActivityData from '@/data/activity.json';

const Template = {
  appData: {
    projects: ProjectData,
    activity: ActivityData,
  },
  email: _Base.email,
  dock: {
    name: 'Geunhyeok LEE',
    hobby: ['프로그래밍', '운동'],
    photo: {
      source: require('@/assets/avatar.png'),
      title: "It's me",
    },
  },
};

export default defineComponent({
  name: 'Home',
  components: { Desktop },
  setup() {
    const router = useRouter();
    const { getters } = useStore();
    getters[GetterTypes.READY] || router.push({ path: '/' });
    return { Template };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

.home {
  @include page;
}
</style>
