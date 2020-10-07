<template>
  <div class="home">
    <Item />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Item from '@/components/molecule/Item.vue';

export default defineComponent({
  name: 'Home',
  components: { Item },
});
</script>
