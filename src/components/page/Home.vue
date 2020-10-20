<template>
  <Desktop :apps="Template.apps" :dock="Template.dock" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import Desktop from '@/components/template/Desktop.vue';
import { GetterTypes } from '@/store/getter';
import { useRouter } from 'vue-router';
import { AppType, DockMenu } from '@/types';

interface DesktopTemplate {
  apps: AppType[];
  dock: DockMenu;
}

const Template: DesktopTemplate = {
  apps: [
    {
      type: 'list',
      name: 'Projects',
      icon: require('@/assets/app/folder.png'),
      items: [
        {
          group: 'Laugnage',
          title: 'JavaScript',
          tag: 'js',
          content: [],
        },
        {
          group: 'Laugnage',
          title: 'TypeScript',
          tag: 'ts',
          content: [],
        },
        {
          group: 'Other',
          title: 'Docker',
          tag: 'docker',
          content: [],
        },
      ],
    },
    {
      type: 'link',
      url: '',
      name: 'Activity',
      icon: require('@/assets/app/calendar.png'),
    },
    {
      type: 'link',
      url: '',
      name: 'About me',
      icon: require('@/assets/app/note.png'),
    },
    {
      type: 'link',
      url: '',
      name: 'Terminal',
      icon: require('@/assets/app/terminal.png'),
    },
    {
      type: 'link',
      url: '',
      name: 'Browser',
      icon: require('@/assets/app/safari.png'),
    },
    {
      type: 'link',
      url: 'mailto:dev.ghlee@gmail.com',
      name: 'Email',
      icon: require('@/assets/app/message.png'),
    },
    {
      type: 'link',
      url: '',
      name: 'Contact',
      icon: require('@/assets/app/contact.png'),
    },
    {
      type: 'link',
      url: '',
      name: 'Information',
      icon: require('@/assets/app/setting.png'),
    },
  ],
  dock: {
    memo: {
      title: '빌드 노트',
      content: 'Updated: 2020.10.21',
    },
    hobby: ['프로그래밍', '운동'],
    photo: require('@/assets/avatar.png'),
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
