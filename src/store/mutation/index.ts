import { MutationTree } from 'vuex';
import { State } from '@/store/state';

export enum MutationTypes {
  SET_TIME = 'SET_TIME',
}

export type Mutations<S = State> = {
  [MutationTypes.SET_TIME](state: S, payload: Date): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_TIME](state, date) {
    state.date = date;
  },
};
