<script lang="ts">
import { h, defineComponent, PropType, computed } from 'vue';
import { ContentType, Content } from '@/types';

import Box from '@/components/atoms/Box.vue';

const renderContent = (type: ContentType, data: string) => {
  switch (type) {
    case 'text':
      return h('p', { innerHTML: data });
    case 'image':
      return h('img', { src: data });
  }
};

export default defineComponent({
  name: 'Box',
  props: {
    data: {
      type: Object as PropType<Content>,
      required: true,
    },
  },
  setup(props) {
    const content = computed(() => props.data);
    return () =>
      h(Box, { class: 'content', xs: 12 }, [renderContent(content.value.type, content.value.data)]);
  },
});
</script>

<style lang="scss">
@import '@/styles/common';

.content {
}
</style>
