import { GetterTree } from 'vuex';
import { State } from '@/store/state';
import { numberPadding } from '@/common/util';
import { BaseTemplate } from '@/types';

export enum GetterTypes {
  READY = 'READY',
  TIME = 'TIME',
  TEMPLATE = 'TEMPLATE',
}

export interface Getters<S = State> {
  [GetterTypes.READY](state: S): boolean;
  [GetterTypes.TEMPLATE](state: S): BaseTemplate;
  [GetterTypes.TIME](state: S): string;
}

export const getters: GetterTree<State, State> & Getters = {
  [GetterTypes.READY]({ loaded }) {
    return loaded;
  },
  [GetterTypes.TEMPLATE]({ template }) {
    return template;
  },
  [GetterTypes.TIME]({ date }) {
    return `${numberPadding(date.getHours(), 2)}:${numberPadding(date.getMinutes(), 2)}`;
  },
};
