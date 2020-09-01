import { connect } from "react-redux";
import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { getTabEditBundlesProps } from '../redux/selectors.js';

class TabEditBundles extends React.Component<{
  broadcasterV2(): any;

}, {}> {

  render() {

    return (<Tabs>
      <TabList>

        <Tab>ships</Tab>
        <Tab>views</Tab>
        <Tab>AIs</Tab>

      </TabList>

      <TabPanel>
        <ul>
          {
            this.props.shipBundles.map((shipBundle) => {
              return (
                <li>
                  {shipBundle.name}
                  <button>load</button>
                </li>
              )
            })
          }
        </ul>
      </TabPanel>

      <TabPanel>

        <ul>
          {
            this.props.viewBundles.map((viewBundle) => {
              return (
                <li>
                  {viewBundle.name}
                  <button>load</button>
                </li>
              )
            })
          }
        </ul>

      </TabPanel>

      <TabPanel>      <ul>
        {
          this.props.aiBundles.map((aiBundle) => {
            return (
              <li>
                {aiBundle.name}
                <button>load</button>
              </li>
            )
          })
        }
      </ul></TabPanel>


    </Tabs>);
  }
}

const mapStateToProps = state => {
  return getTabEditBundlesProps(state);
};

export default connect(mapStateToProps)(TabEditBundles);
