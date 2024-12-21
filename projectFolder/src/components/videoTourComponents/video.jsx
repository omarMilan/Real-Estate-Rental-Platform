import { useEffect, useState } from "react";

export default function Video({ name, videoId }) {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "AIzaSyDzGetuwjSJ1ePmCEl5iCrpYL7epHICZwk";
  const BASE_URL = "https://www.googleapis.com/youtube/v3";

  useEffect(() => {
    async function fetchVideoDetails() {
      try {
        const response = await fetch(
          `${BASE_URL}/videos?part=snippet&id=${videoId}&key=${API_KEY}`
        );
        const data = await response.json();
        setVideo(data.items[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching video data:", error);
        setLoading(false);
      }
    }
    fetchVideoDetails();
  }, [videoId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!video) {
    return <div>Video not found.</div>;
  }

  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <div className="h-[350px] w-[780px] rounded-sm bg-black">
        <iframe
          className="h-full w-full rounded-sm"
          src={videoUrl}
          title={video.snippet.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="font-instrument-sans z-0 font-medium flex mt-[10px] flex-col italic items-center justify-center text-[18px]">
        You Are Now Viewing: [{name}]
      </div>
    </div>
  );
}
