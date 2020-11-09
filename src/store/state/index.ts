import { Template } from '@/types';

export interface State {
  loaded: boolean;
  date: Date;
  isDark: boolean;
  template: Template;
}

export const state: State = {
  loaded: false,
  date: new Date(),
  isDark: false,
  template: {
    name: '',
    email: '',
    photo: '',
    introText: [],
    hobby: [],
  },
};
