import { MutationTree } from 'vuex';
import { State } from '@/store/state';
import { BaseTemplate } from '@/types';

export enum MutationTypes {
  APP_LOADED = 'APP_LOADED',
  SET_TEMPLATE_DATA = 'SET_TEMPLATE_DATA',
  SET_TIME = 'SET_TIME',
  SET_DARKMODE = 'SET_DARKMODE',
}

export type Mutations<S = State> = {
  [MutationTypes.APP_LOADED](state: S): void;
  [MutationTypes.SET_TEMPLATE_DATA](state: S, payload: BaseTemplate): void;
  [MutationTypes.SET_TIME](state: S, payload: Date): void;
  [MutationTypes.SET_DARKMODE](state: S, payload: boolean): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.APP_LOADED](state) {
    state.loaded = true;
  },
  [MutationTypes.SET_TEMPLATE_DATA](state, template) {
    state.template = template;
  },
  [MutationTypes.SET_TIME](state, date) {
    state.date = date;
  },
  [MutationTypes.SET_DARKMODE](state, darkmode) {
    state.isDark = darkmode;
  },
};
