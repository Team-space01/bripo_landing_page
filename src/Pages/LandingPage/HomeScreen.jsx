import GlobalText from "../../Components/Common/GlobalText";
import FirstStartingPage from "./FirstStartingPage";
import IntroSession from "./IntroSession";
import StartingPage from "./StartingPage"
import StartingPage2 from "./StartingPage2";


const HomeScreen = () => {
  return (
    <div>
      <FirstStartingPage />
      <IntroSession />
      <StartingPage/>
      <StartingPage2/>
    </div>
  );
}

export default HomeScreen