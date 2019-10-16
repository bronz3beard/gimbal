import { defaultConfig, meta, type } from './config';

describe('@modus/gimbal-plugin-source-map-explorer/config', (): void => {
  it('should export properly', (): void => {
    expect(defaultConfig).toEqual({
      bundles: ['**/*.js'],
    });

    expect(meta).toEqual({
      capabilities: {
        remote: false,
      },
      maxNumRoutes: 1,
      thresholdLimit: 'upper',
      thresholdType: 'size',
    });

    expect(type).toBe('source-map-explorer');
  });
});
