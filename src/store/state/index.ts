import { VERSION, RELEASE_DATE } from '@/common';
import { BaseTemplate } from '@/types';

export interface State {
  _version: string;
  _releaseDate: string;
  loaded: boolean;
  date: Date;
  isDark: boolean;
  template: BaseTemplate;
}

export const state: State = {
  _version: VERSION,
  _releaseDate: RELEASE_DATE,
  loaded: false,
  date: new Date(),
  isDark: false,
  template: {
    name: '',
    email: '',
    photo: '',
    introduce: '',
    social: [],
    skill: [],
    hobby: [],
    introText: [],
  },
};
