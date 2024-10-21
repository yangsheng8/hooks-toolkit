import * as hooksToolkit from '..';

describe('hooksToolkit', () => {
  test('exports modules should be defined', () => {
    Object.keys(hooksToolkit).forEach((module) => {
      expect(hooksToolkit[module]).toBeDefined();
    });
  });
});
