import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FlightFeedback from "../../tabs/FlightFeedback/FlightFeedback";
import Photos from "../../tabs/Photos/Photos";
import PhotosTanstack from "../../tabs/PhotosTanstack/PhotosTanstack";
import Tasks from "../../tabs/Tasks/Tasks";

const App = () => {
  return (
    <Tabs>
      <TabList>
      <Tab>Tasks</Tab>
        <Tab>PhotosTanstack</Tab>
        <Tab>Photos</Tab>
        <Tab>Flight Feedback</Tab>
      </TabList>

      <TabPanel>
        <Tasks/>
      </TabPanel>
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
