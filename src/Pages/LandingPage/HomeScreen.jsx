import GlobalCards from "../../Components/Common/GlobalCards";
import GlobalText from "../../Components/Common/GlobalText";
import InputButton from "../../Components/Common/InputButton";
import Bripo2 from "./Bripo2";
import FirstStartingPage from "./FirstStartingPage";
import IntroSession from "./IntroSession";
import PeopleComment from "./PeopleComment";
import StartingPage from "./StartingPage";
import StartingPage2 from "./StartingPage2";
import WhyBripo from "./WhyBripo";

const HomeScreen = () => {
  return (
    <div className="">
      <StartingPage />
      <IntroSession />
      <WhyBripo />
      <Bripo2 />
      <PeopleComment />
      {/* <InputButton /> */}
    </div>
  );
};

export default HomeScreen;
