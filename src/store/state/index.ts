export interface State {
  loaded: boolean;
  date: Date;
  isDark: boolean;
}

export const state: State = {
  loaded: false,
  date: new Date(),
  isDark: false,
};
