import ProfilePicture from "./profilePicture";
import { Button } from "@headlessui/react";
import Svg from "./svg";

export default function Posting() {
  return (
    <div className="px-4 border-b-[1px] border-[#313032]">
      <div className="flex gap-3 py-4">
        <ProfilePicture></ProfilePicture>
        <input
          type="text"
          placeholder={"What is happening?!"}
          className="bg-black outline-none text-[22px] font-thin"
        />
      </div>
      <div className="pb-3 flex justify-between items-center">
        <div className="flex gap-4">
          <div className="cursor-pointer hover:bg-[#181818] rounded-full p-2 px-2 transition ease-in-out duration-200">
            <Svg src="/images/media.svg" alt="Media"></Svg>
          </div>
          <div className="cursor-pointer hover:bg-[#181818] rounded-full p-2 px-2 transition ease-in-out duration-200">
            <Svg src="/images/gif.svg" alt="Gif"></Svg>
          </div>
          <div className="cursor-pointer hover:bg-[#181818] rounded-full p-2 px-2 transition ease-in-out duration-200">
            <Svg src="/images/poll.svg" alt="Poll"></Svg>
          </div>
          <div className="cursor-pointer hover:bg-[#181818] rounded-full p-2 px-2 transition ease-in-out duration-200">
            <Svg src="/images/emoji.svg" alt="Emoji"></Svg>
          </div>
          <div className="cursor-pointer hover:bg-[#181818] rounded-full p-2 px-2 transition ease-in-out duration-200">
            <Svg src="/images/schedule.svg" alt="Schedule"></Svg>
          </div>
          <div className="cursor-pointer hover:bg-[#181818] rounded-full p-2 px-2 transition ease-in-out duration-200">
            <Svg src="/images/location.svg" alt="Location"></Svg>
          </div>
        </div>
        <Button className="w-[90px] p-3 text-center bg-[#1d9bf0] hover:bg-[#1a8cd8] rounded-full text-base font-bold">
          Post
        </Button>
      </div>
    </div>
  );
}
