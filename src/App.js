import { useState } from "react";
import MainComponent from "./components/MaiComponent/MainComponent";
import Circle from "./images/Circle1";
import Arrow1 from "./images/Arrow1";
import Arrow2 from "./images/Arrow2";
import Arrow3 from "./images/Arrow3";
import Arrow4 from "./images/Arrow4";
import InteractiveElementIcon from "./images/InteractiveElementIcon";
import VisualAnalytics from "./images/VisualAnalytics";
import BidirectionArrow from "./images/BidirectionArrow";
import UserIcon from "./images/UserIcon";
import BottomArrow from "./images/BottomArrow";
import CenterImge from "./images/CenterImge";
import Shadow from "./images/Shadow";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'IBM Plex Sans', sans-serif",
    mainBg: "#fff",
    textColor: "#000",
    primaryColor: "#E5F2F5",
    secondaryColor: "rgb(229,242,245,.7)",
    title: "Central AI Hub",
    titleColor: "#000",
    centerImage: <CenterImge color="#93DEF7" />,
    shadowImage: <Shadow firstColor="#98A2B3" secondColor="#EFF7F9" />,
    downArrow: <BottomArrow color="#667085" />,

    data: [
      {
        icon: <Circle bgColor="#EFF7F9" color="#93DEF7" />,
        arrow: <Arrow1 color="#667085" />,
        info: "Unstructured Data A",
      },
      {
        icon: <Circle bgColor="#EFF7F9" color="#93DEF7" />,
        arrow: <Arrow2 color="#667085" />,
        info: "Unstructured Data B",
      },
      {
        icon: <Circle bgColor="#EFF7F9" color="#93DEF7" />,
        arrow: <Arrow3 color="#667085" />,
        info: "Documents",
      },
      {
        icon: <Circle bgColor="#EFF7F9" color="#93DEF7" />,
        arrow: <Arrow4 color="#667085" />,
        info: "Mails",
      },
    ],
    dataBaseData: {
      title: "Structured Database",
      titleColor: "#000",
      subTitle: "Industry Professionals",
      bidirectionalArrow: <BidirectionArrow color="#667085" />,
      borderColor: "#667085",
      smallBoxBg: "#667085",
      users: [
        <UserIcon color="#98A2B3" bgColor="#EAECF0" />,
        <UserIcon color="#98A2B3" bgColor="#EAECF0" />,
        <UserIcon color="#98A2B3" bgColor="#EAECF0" />,
      ],
      leftData: {
        icon: <InteractiveElementIcon color="#93DEF7" />,
        info: "Interactive <br/>  Elements   ",
        bgColor: "#fff",
        borderColor: "#d0d5dd",
      },
      rightData: {
        icon: <VisualAnalytics color="#93DEF7" />,
        info: "Visual <br/> Analytics   ",
        bgColor: "#fff",
        borderColor: "#d0d5dd",
      },
    },
  });
  return (
    <div
      style={{
        "--primaryColor": allData.primaryColor,
        "--secondaryColor": allData.secondaryColor,
        "--textColor": allData.textColor,
        "--mainBg": allData.mainBg,
        fontFamily: allData.fontFamily,
      }}
    >
      <MainComponent {...allData} />
    </div>
  );
}

export default App;
