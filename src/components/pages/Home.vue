<template>
  <Desktop :appData="appData" :template="template" />
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/store';
import { GetterTypes } from '@/store/getter';
import { useTemplate } from '@/compositions';
import { getRepositoryStar } from '@/common/util';
import { ProjectTemplate, ActivityTemplate, DesktopAppData, ProjectData } from '@/types';

import Desktop from '@/components/templates/Desktop.vue';

// Data
import ProjectTemplateData from '@/data/project.json';
import ActivityTemplateData from '@/data/activity.json';

export default defineComponent({
  name: 'Home',
  components: { Desktop },
  setup() {
    const router = useRouter();
    const { getters } = useStore();
    const projects = reactive((ProjectTemplateData as unknown) as ProjectTemplate);
    getters[GetterTypes.READY] || router.push({ path: '/' });

    // Get Github repositories stars
    Promise.all(
      ProjectTemplateData.content.map(async content => {
        if (content.url && content.url.startsWith('https://github.com')) {
          const [user, repository] = content.url.replace('https://github.com/', '').split('/');
          content.date = content.date.replaceAll('.', '-');
          return { ...content, star: await getRepositoryStar(user, repository) } as ProjectData;
        } else {
          return { ...content, star: -1 } as ProjectData;
        }
      }),
    ).then(githubMappedProjectData => (projects.content = githubMappedProjectData));

    return {
      appData: {
        projects: projects,
        activity: (ActivityTemplateData as unknown) as ActivityTemplate,
      } as DesktopAppData,
      template: useTemplate(),
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

.home {
  @include page;
}
</style>
