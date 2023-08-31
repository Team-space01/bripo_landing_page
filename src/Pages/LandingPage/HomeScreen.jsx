import GlobalCards from "../../Components/Common/GlobalCards";
import GlobalText from "../../Components/Common/GlobalText";
import InputButton from "../../Components/Common/InputButton";
import ToggleButton from "../../Components/Common/ToggleButton";
import Bripo2 from "./Bripo2";
import FirstStartingPage from "./FirstStartingPage";
import GetLink from "../../Components/Common/GetLink";
import Getting from "../../Components/Common/Getting";
import IntroSession from "./IntroSession";
import PeopleComment from "./PeopleComment";
import Refer from "./Refer";
import StartingPage from "./StartingPage";
import StartingPage2 from "./StartingPage2";
import WhyBripo from "./WhyBripo";

const HomeScreen = () => {
  return (
    <div className=''>
      <StartingPage />
      <IntroSession />
      <WhyBripo />
      <Bripo2 />
      <PeopleComment />
      {/* <GetLink /> */}
      <Refer />
      {/* <ToggleButton /> */}
      {/* <InputButton /> */}
      {/* <Getting /> */}
    </div>
  );
};

export default HomeScreen;
