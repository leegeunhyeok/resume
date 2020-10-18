export interface State {
  loaded: boolean;
  date: Date;
}

export const state: State = {
  loaded: false,
  date: new Date(),
};
