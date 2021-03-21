import {
    selectUnion, combine, union, segments, polygon, selectIntersect
} from 'polybooljs';

export default {
    segmentsUnion: union,
    toSegments: segments,
    toPolygon: polygon,
    segmentsIntersction: selectIntersect,
    combineSegments: combine,
    selectSegmentsUnion: selectUnion
};
