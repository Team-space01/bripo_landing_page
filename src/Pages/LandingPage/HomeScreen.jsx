import GlobalCards from "../../Components/Common/GlobalCards";
import GlobalText from "../../Components/Common/GlobalText";
import Bripo2 from "./Bripo2";
import FirstStartingPage from "./FirstStartingPage";
import IntroSession from "./IntroSession";
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
    </div>
  );
};

export default HomeScreen;
