import { useState } from "react";
import VideoButtons from "./videoButtons";
import Video from "./video";

export default function VideoSelector() {
  const [selectedVideo, setSelectedVideo] = useState("");
  const [activeButton, setActiveButton] = useState(null);

  const handleSelect = (url, buttonName) => {
    setSelectedVideo(url); // Correctly set the selected video URL
    setActiveButton(buttonName); // Update the active button name
  };

  return (
    <div className="z-30 w-full min-h-screen overflow-hidden">
      <div className="font-instrument-sans z-0 font-light flex -mt-[10px] flex-col items-center justify-center text-[32px]">
        Experience the beauty and charm of this home through our immersive video
        tour.
        <div className="flex">Start exploring today!</div>
      </div>

      <div className=" relative flex flex-wrap gap-x-[26px] gap-y-[26px] pt-[26px] pl-[26px] pr-[26px] justify-center">
        <VideoButtons
          name="Full Tour"
          url="https://example.com/FullTour.mp4"
          onSelect={(url) => handleSelect(url, "Full Tour")}
          isSelected={activeButton === "Full Tour"} // Pass the active button state
        />
        <VideoButtons
          name="Master Bedroom"
          url="https://example.com/MasterBedroom.mp4"
          onSelect={(url) => handleSelect(url, "Master Bedroom")}
          isSelected={activeButton === "Master Bedroom"} // Pass the active button state
        />
        <VideoButtons
          name="BedRoom 2"
          url="https://example.com/BedRoom2.mp4"
          onSelect={(url) => handleSelect(url, "BedRoom 2")}
          isSelected={activeButton === "BedRoom 2"} // Pass the active button state
        />
        <VideoButtons
          name="BedRoom 3"
          url="https://example.com/BedRoom3.mp4"
          onSelect={(url) => handleSelect(url, "BedRoom 3")}
          isSelected={activeButton === "BedRoom 3"} // Pass the active button state
        />
        <VideoButtons
          name="Master Bathroom"
          url="https://example.com/MasterBathroom.mp4"
          onSelect={(url) => handleSelect(url, "Master Bathroom")}
          isSelected={activeButton === "Master Bathroom"} // Pass the active button state
        />
        <VideoButtons
          name="Bathroom 2"
          url="https://example.com/Bathroom2.mp4"
          onSelect={(url) => handleSelect(url, "Bathroom 2")}
          isSelected={activeButton === "Bathroom 2"} // Pass the active button state
        />
        <VideoButtons
          name="Master Closet"
          url="https://example.com/MasterCloset.mp4"
          onSelect={(url) => handleSelect(url, "Master Closet")}
          isSelected={activeButton === "Master Closet"} // Pass the active button state
        />
        <VideoButtons
          name="Kitchen"
          url="https://example.com/Kitchen.mp4"
          onSelect={(url) => handleSelect(url, "Kitchen")}
          isSelected={activeButton === "Kitchen"} // Pass the active button state
        />
        <VideoButtons
          name="Frontyard"
          url="https://example.com/Frontyard.mp4"
          onSelect={(url) => handleSelect(url, "Frontyard")}
          isSelected={activeButton === "Frontyard"} // Pass the active button state
        />
        <VideoButtons
          name="Backyard"
          url="https://example.com/Backyard.mp4"
          onSelect={(url) => handleSelect(url, "Backyard")}
          isSelected={activeButton === "Backyard"} // Pass the active button state
        />
      </div>
      <div className="pt-[50px] flex justify-center items-center">
        <Video name={activeButton} />
      </div>
    </div>
  );
}
