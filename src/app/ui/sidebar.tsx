import BarItem from "./barItem";
import { Button } from "@headlessui/react";
import AccountPopover from "./accountPopover";

export default function Sidebar() {
  return (
    <nav className="flex fixed flex-col justify-between w-[22%] h-screen pl-2 pr-2">
      <ul className="w-full h-fit">
        
        <div>
          <div className="hover:bg-[#181818] rounded-full p-3 w-fit mt-[3px]">
            <img src="/images/xLogo.svg" alt="logo of twitter" className="h-8"/>
          </div>
        </div>

        <BarItem url={"/home"} href={"/images/home.svg"} alt={"Home"}></BarItem>
        <BarItem url={"/explore"} href={"/images/explore.svg"} alt={"Explore"}></BarItem>
        <BarItem url={"/notifications"} href={"/images/notifications.svg"} alt={"Notifications"}></BarItem>
        <BarItem url={"/messages"} href={"/images/messages.svg"} alt={"Messages"}></BarItem>
        <BarItem url={"/grok"} href={"/images/grok.svg"} alt={"Grok"}></BarItem>
        <BarItem url={"/profile"} href={"/images/profile.svg"} alt={"Profile"}></BarItem>
        <BarItem url={"/more"} href={"/images/more.svg"} alt={"More"}></BarItem>

        <Button className="mt-2 w-[90%] p-3 text-center bg-[#1d9bf0] hover:bg-[#1a8cd8] rounded-full text-xl font-bold">Post</Button>
      </ul>
      <div>
        <AccountPopover></AccountPopover>
      </div>
    </nav>
  );
}
