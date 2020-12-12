import reducer, {
  InitialStateProps,
  setScrollTop,
} from '../layout';

describe('layout reducer', () => {
  const initialState: InitialStateProps = {
    scrollTop: 0,
  };

  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setScrollTop', () => {
    it('changes scrollTop', () => {
      const state = reducer(initialState, setScrollTop(50));

      expect(state).toEqual({ scrollTop: 50 });
    });
  });
});
