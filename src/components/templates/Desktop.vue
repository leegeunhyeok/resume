<template>
  <div class="desktop">
    <div class="desktop__apps">
      <!-- Max icons: 8 -->
      <Icon
        v-for="(app, i) in Object.entries(apps).slice(0, 8)"
        :name="app[0]"
        :icon="app[1]"
        :key="i"
        @click="executeApp(app[0])"
      />
    </div>
    <!-- Application windows -->
    <ProjectWindow
      :data="appData['projects']"
      :key="dummy"
      @close="currentApp = null"
      v-show="currentApp === 'projects'"
    />
    <ActivityWindow
      :data="appData['activity']"
      :key="dummy"
      @close="currentApp = null"
      v-show="currentApp === 'activity'"
    />
    <AboutWindow
      :template="template"
      @close="currentApp = null"
      v-show="currentApp === 'about_me'"
    />
    <TerminalWindow :key="dummy" @close="currentApp = null" v-show="currentApp === 'terminal'" />
    <BrowserWindow :key="dummy" @close="currentApp = null" v-show="currentApp === 'browser'" />
    <ContactWindow
      :template="template"
      @close="currentApp = null"
      v-show="currentApp === 'contact'"
    />
    <InformationWindow @close="currentApp = null" v-show="currentApp === 'information'" />
    <!-- Dock (Footer) -->
    <Dock :name="template.name" :hobby="template.hobby" :photo="template.photo" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

import Icon from '@/components/atoms/Icon.vue';
import Dock from '@/components/organisms/Dock.vue';

// Application windows
import ProjectWindow from '@/components/applications/ProjectWindow.vue';
import ActivityWindow from '@/components/applications/ActivityWindow.vue';
import AboutWindow from '@/components/applications/AboutWindow.vue';
import TerminalWindow from '@/components/applications/TerminalWindow.vue';
import BrowserWindow from '@/components/applications/BrowserWindow.vue';
import ContactWindow from '@/components/applications/ContactWindow.vue';
import InformationWindow from '@/components/applications/InformationWindow.vue';
import { BaseTemplate, DesktopAppData } from '@/types';
import { useStore } from '@/store';
import { GetterTypes } from '@/store/getter';

const apps = {
  projects: require('@/assets/app/folder.png'),
  activity: require('@/assets/app/calendar.png'),
  // eslint-disable-next-line @typescript-eslint/camelcase
  about_me: require('@/assets/app/note.png'),
  terminal: require('@/assets/app/terminal.png'),
  browser: require('@/assets/app/safari.png'),
  email: require('@/assets/app/message.png'),
  contact: require('@/assets/app/contact.png'),
  information: require('@/assets/app/setting.png'),
};

export default defineComponent({
  name: 'Desktop',
  components: {
    Icon,
    ProjectWindow,
    ActivityWindow,
    AboutWindow,
    TerminalWindow,
    BrowserWindow,
    ContactWindow,
    InformationWindow,
    Dock,
  },
  props: {
    appData: {
      type: Object as PropType<DesktopAppData>,
      required: true,
    },
    template: {
      type: Object as PropType<BaseTemplate>,
      required: true,
    },
  },
  setup() {
    const store = useStore();

    // Showing window (= app name)
    const currentApp = ref<keyof typeof apps | null>(null);

    // For rerender window component
    const dummy = ref<number>(0);

    /**
     * Show target application window
     * @param {string} appKey Application key
     */
    const executeApp = (appKey: keyof typeof apps): void => {
      if (appKey === 'email') {
        window.open(`mailto:${store.getters[GetterTypes.TEMPLATE].email}`, '_blank');
        return;
      } else {
        dummy.value++;
        currentApp.value = appKey;
      }
    };

    return { apps, currentApp, executeApp, dummy };
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
  position: fixed;
  top: 0;
  left: 0;

  &__apps {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
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
