import { inject, provide } from 'vue';
import { createStore, Store as VuexStore, CommitOptions } from 'vuex';
import { State, state } from '@/store/state';
import { Getters, getters } from '@/store/getter';
import { Mutations, mutations } from '@/store/mutation';

export type Store = Omit<VuexStore<State>, 'getters' | 'commit' | 'dispatch'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
    options?: CommitOptions,
  ): ReturnType<Mutations[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

const store = createStore({
  state,
  getters,
  mutations,
});

const StoreSymbol = Symbol();
export const provideStore = (store: Store) => provide(StoreSymbol, store);
export const useStore = () => {
  const store = inject<Store>(StoreSymbol);
  if (!store) throw new Error('Store not provided');
  return store;
};

export default store;
