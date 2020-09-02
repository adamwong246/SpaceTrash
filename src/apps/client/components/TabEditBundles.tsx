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
        <Tabs className="vertical">
          <TabList>

            {
              this.props.userShips.map((viewBundle) => {
                return (
                  <Tab>{viewBundle.name}</Tab>
                )
              })
            }

          </TabList>

          {
            this.props.userShips.map((viewBundle) => {
              return (
                <TabPanel>
                  <button>load</button>
                  <pre>{viewBundle.contents}</pre>
                </TabPanel>
              )
            })
          }
        </Tabs>



      </TabPanel>

      <TabPanel>
        <Tabs className="vertical">
          <TabList>

            {
              this.props.userViews.map((viewBundle) => {
                return (
                  <Tab>{viewBundle.name}</Tab>
                )
              })
            }

          </TabList>

          {
            this.props.userViews.map((viewBundle) => {
              return (
                <TabPanel>
                  <button>load</button>
                  <pre>{viewBundle.contents}</pre>
                </TabPanel>
              )
            })
          }
        </Tabs>

      </TabPanel>

      <TabPanel>



        <Tabs className="vertical">
          <TabList>

            {
              this.props.userAis.map((viewBundle) => {
                return (
                  <Tab>{viewBundle.name}</Tab>
                )
              })
            }

          </TabList>

          {
            this.props.userAis.map((viewBundle) => {
              return (
                <TabPanel>
                  <button>load</button>
                  <pre>{viewBundle.contents}</pre>
                </TabPanel>
              )
            })
          }
        </Tabs>


      </TabPanel>


    </Tabs>);
  }
}

const mapStateToProps = state => {
  return getTabEditBundlesProps(state);
};

export default connect(mapStateToProps)(TabEditBundles);
