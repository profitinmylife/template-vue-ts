export const state = {
  counter: 0,
  saveCounter: 0,
  arr: [] as Array<number>,
  // eslint-disable-next-line
  testApi: [] as Array<object>,
  // eslint-disable-next-line
  postApi: {}
};

export type State = typeof state;
