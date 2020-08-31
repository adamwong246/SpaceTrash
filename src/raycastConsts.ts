import {createSelector} from "reselect";
import {memoize} from 'lodash'

export const stripWidth = 1;
export const ABSOLLUTE = 'absolute';
export const screenWidth = 320;
export const screenHeight = 200;

const precision = 3;

export const MMath = {
  round: memoize((a) => Math.round(a)),
  ceil: memoize((a) => Math.ceil(a)),
  floor: memoize((a) => Math.floor(a)),

  sqrt: memoize((a) => Math.sqrt(a.toFixed(precision))),
  pow: memoize((a, b) => Math.pow(a.toFixed(precision), b)),

  sin: memoize((a) => Math.sin(a.toFixed(precision))),
  asin: memoize((a) => Math.asin(a.toFixed(precision))),

  cos: memoize((a) => Math.cos(a.toFixed(precision))),
  tan: memoize((a) => Math.tan(a.toFixed(precision))),
};
