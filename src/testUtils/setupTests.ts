/**
 * @jest-environment jsdom
 */
/* eslint-env jest */
import 'jest-fixed-jsdom';

import { jest } from '@jest/globals';
import { render, type RenderOptions } from '@testing-library/react';
import React, { type ReactElement } from 'react';

import { Wrapper } from './Wrapper';

// mock your config module
jest.mock('@config/config');

// retry flaky tests
// jest.retryTimes(3, { logErrorsBeforeRetry: true })
global.React = React;
// stub out matchMedia on the window
Object.defineProperty(globalThis, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated, but may be called
    removeListener: jest.fn(), // deprecated, but may be called
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
// In your setupTests.js or jest.config.js setup file
beforeEach(() => {
  // Ensure focus method exists and is writable
  if (!HTMLElement.prototype.focus || typeof HTMLElement.prototype.focus !== 'function') {
    HTMLElement.prototype.focus = jest.fn();
  }
});

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  return render(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';
export { customRender as render };
