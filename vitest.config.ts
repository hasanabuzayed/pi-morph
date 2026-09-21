import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    // pi 0.87's module graph is much heavier to first-evaluate; each test
    // file's first test pays the cold vi.resetModules() import, which can
    // exceed the 5s default under load. Give the harness headroom.
    testTimeout: 20_000,
    clearMocks: true,
    restoreMocks: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'tests/', '**/*.d.ts', '**/*.config.ts'],
    },
  },
});
