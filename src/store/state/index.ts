import pkg from '@/../package.json';
import { Template } from '@/types';

export interface State {
  _version: string;
  loaded: boolean;
  date: Date;
  isDark: boolean;
  template: Template;
}

export const state: State = {
  _version: pkg.version,
  loaded: false,
  date: new Date(),
  isDark: false,
  template: {
    name: '',
    email: '',
    photo: '',
    introduce: '',
    skill: [],
    hobby: [],
    introText: [],
  },
};
