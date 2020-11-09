import { reactive } from 'vue';
import { useStore } from '@/store';
import { GetterTypes } from '@/store/getter';

export const useTemplate = () => {
  const { getters } = useStore();
  return reactive(getters[GetterTypes.TEMPLATE]);
};
