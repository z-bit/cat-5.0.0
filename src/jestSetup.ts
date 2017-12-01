import 'jest-preset-angular';
import './jestGlobalMocks';

Object.defineProperty(window, 'CSS', {value: () => ({})});

const WARN_SUPPRESSING_PATTERNS = [
  /Could not find Angular Material core theme/,
  /Could not find HammerJS/,
];

const warn = console.warn;

Object.defineProperty(console, 'warn', {
  value: (...params: string[]) => {
    if (!WARN_SUPPRESSING_PATTERNS.some((pattern) => pattern.test(params[0]))) {
      // warn(...params);
    }
  }
});
