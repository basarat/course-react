import { reducer, initialState } from "./App.reducer";

test('reducer', () => {
  // arrange
  const before = initialState;

  // act
  const after = reducer(before, { type: 'update', value: 'h' });

  // assert
  expect(after.changeCount).toBe(1);
  expect(after.value).toBe('h');
});
