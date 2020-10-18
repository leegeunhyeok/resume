import { GetterTree } from 'vuex';
import { State } from '@/store/state';
import { numberPadding } from '@/common/util';

export enum GetterTypes {
  READY = 'READY',
  TIME = 'TIME',
}

export interface Getters<S = State> {
  [GetterTypes.READY](state: S): boolean;
  [GetterTypes.TIME](state: S): string;
}

export const getters: GetterTree<State, State> & Getters = {
  [GetterTypes.READY]({ loaded }) {
    return loaded;
  },
  [GetterTypes.TIME]({ date }) {
    return `${numberPadding(date.getHours(), 2)}:${numberPadding(date.getMinutes(), 2)}`;
  },
};
