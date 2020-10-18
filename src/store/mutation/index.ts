import { MutationTree } from 'vuex';
import { State } from '@/store/state';

export enum MutationTypes {
  APP_LOADED = 'APP_LOADED',
  SET_TIME = 'SET_TIME',
}

export type Mutations<S = State> = {
  [MutationTypes.APP_LOADED](state: S): void;
  [MutationTypes.SET_TIME](state: S, payload: Date): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.APP_LOADED](state) {
    state.loaded = true;
  },
  [MutationTypes.SET_TIME](state, date) {
    state.date = date;
  },
};
