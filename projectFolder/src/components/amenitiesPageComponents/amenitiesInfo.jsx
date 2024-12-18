import collinCollegeLogo from "../../assets/logosImages/collinCollegeLogo.png";
import krogerLogo from "../../assets/logosImages/krogerLogo.jpg";
import libraryLogo from "../../assets/logosImages/libraryLogo.png";
import walmartLogo from "../../assets/logosImages/walmartLogo.png";
import WHSLogo from "../../assets/logosImages/WHSLogo.png";
import WRecCenterLogo from "../../assets/logosImages/recCenterLogo.png";
import AmenitiesCards from "./amenitiesCards";

export default function AmenetiesInfo() {
  return (
    <div className="bg-white w-full min-h-screen absolute -translate-y-20 overflow-hidden ">
      {/* Logos */}
      <div className="flex items-center animate-scroll gap-x-[60px] w-[200%] mt-10">
        <img src={collinCollegeLogo} className="h-[72px] w-[323px]" />
        <img src={WHSLogo} className="h-[73px] w-[73px]" />
        <img src={libraryLogo} className="h-[73px] w-[189px]" />
        <img src={walmartLogo} className="h-[81px] w-[338px]" />
        <img src={krogerLogo} className="h-[100px] w-[150px]" />
        <img src={WRecCenterLogo} className="h-[77px] w-[163px]" />

        {/* Duplicate Set */}
        <img src={collinCollegeLogo} className="h-[72px] w-[323px]" />
        <img src={WHSLogo} className="h-[73px] w-[73px]" />
        <img src={libraryLogo} className="h-[73px] w-[189px]" />
        <img src={walmartLogo} className="h-[81px] w-[338px]" />
        <img src={krogerLogo} className="h-[100px] w-[150px]" />
        <img src={WRecCenterLogo} className="h-[77px] w-[163px]" />
      </div>

      {/* Header */}
      <div className="font-instrument-sans font-light flex mt-[74px] justify-center text-[32px]">
        Close to everything that matters, right where you want to be.
      </div>

      {/* Amenities Cards */}
      <div className="flex flex-col gap-y-8 mt-[74px]">
        {/* First Row */}
        <div className="flex justify-between">
          <div className="ml-10">
            <AmenitiesCards
              title={"General Information"}
              FactOne={"Number of Bedrooms and Bathrooms"}
              ResponseOne={"3 Bedrooms & 2 Bathrooms"}
              FactTwo={"Square Footage"}
              ResponseTwo={"1,859 sqft"}
              FactThree={"Furnished or Unfurnished"}
              ResponseThree={"ANSWER"}
            />
          </div>
          <div className="mr-10">
            <AmenitiesCards
              title={"Pet and Accessibility Policies"}
              FactOne={"Parking"}
              ResponseOne={"2-Car Garage"}
              FactTwo={"Pet Policy"}
              ResponseTwo={"Pets Allowed"}
              FactThree={"Accessibility"}
              ResponseThree={"Wheelchair Accessible"}
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex justify-between">
          <div className="ml-10">
            <AmenitiesCards
              title={"Nearby Features"}
              FactOne={"Library"}
              ResponseOne={"3 Minutes Away"}
              FactTwo={"Supermarket"}
              ResponseTwo={"5 Minutes Away"}
              FactThree={"Recreational Center"}
              ResponseThree={"7 Minutes Away"}
            />
          </div>
          <div className="mr-10">
            <AmenitiesCards
              title={"Parking and Safety"}
              FactOne={"Security Features"}
              ResponseOne={"Smoke Detectors & Cameras"}
              FactTwo={"Lighting"}
              ResponseTwo={"Well-lit Community"}
              FactThree={"Fire Safety"}
              ResponseThree={"Fire Extinguishers Included"}
            />
          </div>
        </div>

        {/* Third Row */}
        <div className="flex justify-between">
          <div className="ml-10">
            <AmenitiesCards
              title={"Recreational Amenities"}
              FactOne={"Swimming Pool"}
              ResponseOne={"Community Pool Access"}
              FactTwo={"Gym"}
              ResponseTwo={"24/7 Fitness Center"}
              FactThree={"Parks"}
              ResponseThree={"Nearby Walking Trails"}
            />
          </div>
          <div className="mr-10">
            <AmenitiesCards
              title={"Energy Efficiency"}
              FactOne={"Solar Panels"}
              ResponseOne={"Installed"}
              FactTwo={"Energy Rating"}
              ResponseTwo={"High Efficiency Appliances"}
              FactThree={"Insulation"}
              ResponseThree={"Double-Glazed Windows"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
