import { GetterTree } from 'vuex';
import { State } from '@/store/state';
import { numberPadding } from '@/common/util';

export enum GetterTypes {
  TIME = 'TIME',
}

export interface Getters<S = State> {
  [GetterTypes.TIME](state: S): string;
}

export const getters: GetterTree<State, State> & Getters = {
  [GetterTypes.TIME]({ date }) {
    return `${numberPadding(date.getHours(), 2)}:${numberPadding(date.getMinutes(), 2)}`;
  },
};
