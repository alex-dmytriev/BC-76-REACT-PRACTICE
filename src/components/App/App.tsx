import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FlightFeedback from "../../tabs/FlightFeedback/FlightFeedback";
import Photos from "../../tabs/Photos/Photos";
import PhotosTanstack from "../../tabs/PhotosTanstack/PhotosTanstack";

const App = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>PhotosTanstack</Tab>
        <Tab>Photos</Tab>
        <Tab>Flight Feedback</Tab>
      </TabList>
      <TabPanel>
        <PhotosTanstack />
      </TabPanel>
      <TabPanel>
        <Photos />
      </TabPanel>
      <TabPanel>
        <FlightFeedback />
      </TabPanel>
    </Tabs>
  );
};

export default App;
