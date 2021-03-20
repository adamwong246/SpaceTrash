declare module 'polybooljs' {
    export function polygon(segments: { segments: any[]; inverted: boolean; }): { regions: any[]; inverted: boolean; }
    export function segments(polygon): { segments: any[]; inverted: boolean; }
    export function union(a, b): { segments: any[]; inverted: boolean; }
  }