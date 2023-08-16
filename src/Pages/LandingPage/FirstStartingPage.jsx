import pic from "../../assets/bripoLogo.svg";

const FirstStartingPage = () => {
  return (
    //Main Container
    <div className="w-[100%] h-[100vh] bg-MainCol flex justify-center text-lg items-center">
      <div>
        {/* Image Hoder  */}
        <img src={pic} />
      </div>
    </div>
  );
};

export default FirstStartingPage;
