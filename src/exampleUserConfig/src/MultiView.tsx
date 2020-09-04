import * as React from 'react';
import Raycast from "../../apps/client/components/Raycast.tsx";
import Commands from "../../apps/client/components/CommandsV2.tsx";

console.log("HELLO FROM MULTIVIEW")
class MultiView extends React.Component<{}, {}>{
  constructor(a) {
    super(a);
  }

  render(props) {

    return (
      <div>
        Hello MultiView

        {
          (props.drones || []).map((drone) => {
            return (
              <div>
                <Raycast drone={drone}/>
                <Commands drone={drone} broadcasterV2={props.broadcasterV2}/>
              </div>
            );
          })
        }
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </div>
    )
  }
};

export default MultiView

Window.MULTIVIEW = MultiView
