import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Link from "next/link";
import AccountItem from "./accountItem";

export default function AccountPopover() {
  return (
    <Popover className="group p-3 px-4 mb-4 rounded-full transition ease-in-out duration-200 hover:bg-[#181818]">
      <PopoverButton className="flex items-center gap-2 border-0 outline-none">
        <AccountItem></AccountItem>
      </PopoverButton>
      <PopoverPanel
        anchor="bottom"
        className="flex flex-col bg-black shadow-[0px_0px_70px_-15px_rgba(0,0,0,0.3)] shadow-[#313032] rounded-2xl"
      >
        <div className="py-3">
          <Link href={"/"}>
            <div className="px-4 py-3 hover:bg-[#313032] transition ease-in-out duration-200">
              <AccountItem></AccountItem>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="px-4 py-3 hover:bg-[#313032] transition ease-in-out duration-200">
              <AccountItem></AccountItem>
            </div>
          </Link>
        </div>
        <div className="flex flex-col py-3 border-t-[1px] border-[#313032] border-solid">
          <Link href={"/insights"}>
            <div className="px-4 py-3 hover:bg-[#313032] transition ease-in-out duration-200">
              <p className="font-bold text-base">Add an existing account</p>
            </div>
          </Link>
          <Link href={"/insights"}>
            <div className="px-4 py-3 hover:bg-[#313032] transition ease-in-out duration-200">
              <p className="font-bold text-base">Manage Accounts</p>
            </div>
          </Link>
          <Link href={"/insights"}>
            <div className="px-4 py-3 hover:bg-[#313032] transition ease-in-out duration-200">
              <p className="font-bold text-base">Log out @corderojoel2</p>
            </div>
          </Link>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
