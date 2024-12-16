// import { Button } from "@headlessui/react";
// import { TvIcon, H1Icon } from "@heroicons/react/16/solid";
import Sidebar from "../ui/sidebar";
import Posting from "../ui/posting";
import Tweet from "../ui/twitterCard";

export default function Home() {
    return (
      <div className="flex">

        <Sidebar></Sidebar>
        
        <div className="w-2/4 ml-[24.5%] border-l-[1px] border-r-[1px] border-[#313032]">
          <Posting></Posting>
          <Tweet></Tweet>
          <Tweet></Tweet>
        </div>
        <h1>page.tsx Home</h1>
        {/* y de este lado debería estar el lado derecho donde muestra algunas cosas muy secundarias 
        debería medir 28%*/}

      </div>
    );
  }
  