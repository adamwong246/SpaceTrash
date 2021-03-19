declare module 'polybooljs' {
    export function polygon(segments: { segments: any[]; inverted: boolean; }): { segments: any[]; inverted: boolean; }
    export function segments(polygon): { segments: any[]; inverted: boolean; }
  }