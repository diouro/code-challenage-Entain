import reducer, { addRaces } from './raceReducer';

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({})
})

test('should return the initial state', () => {
  expect(reducer({races: []}, {})).toEqual({races: []})
})

test('should return the initial state', () => {
  expect(reducer({races: []}, {})).not.toEqual({races: [{ a: 1}]})
})