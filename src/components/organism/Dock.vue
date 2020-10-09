<template>
  <div class="dock">
    <div class="dock__panel">
      <div>
        <span class="power-menu" />
      </div>
      <div>
        <Text content="00:00" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Text from '@/components/atom/Text.vue';

export default defineComponent({
  name: 'Dock',
  components: { Text },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

$dock-height: 4.5rem;

@include theme {
  .dock {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: $dock-height;

    &__panel {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      background-color: rgba(t(primary), 0.75);
      backdrop-filter: blur($blur);
      border: 1px solid rgba(t(primary), 0.4);
      padding: 0 1.5rem;
    }
  }

  span.power-menu {
    cursor: pointer;
    display: block;
    border-radius: 50%;
    width: $dock-height * 0.5;
    height: $dock-height * 0.5;
    border: 3px solid t(text);
    transition: background-color 0.2s;
    animation: breath 1s alternate infinite;

    &:hover,
    &:active {
      background-color: rgba(t(text), 0.5);
    }
  }
}

@keyframes breath {
  100% {
    transform: scale(1.1);
  }
}
</style>
