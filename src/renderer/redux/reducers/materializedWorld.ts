import {IStrip} from "../../../lib/raycast/constantsAndTypes";

const initialState: IStrip[] = [];

export default function(videoState = initialState, action) {
  switch (action.type) {
    case 'SET_MATERIALIZED_WORLD': {

      return action.payload
      // const {
      //   id,
      //   style
      // } = action.payload;
      // return videoState.map((v) => {
      //   if (v.id === id){
      //     return {
      //       ...v,
      //       style
      //     };
      //   } else {
      //     return v
      //   }
      //
      // });
    }
    default:
      return videoState;
  }
}
