import Image from "next/image";
import SidebarLink from "./SidebarLink";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon
} from "@heroicons/react/outline";

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 mt-1 p-0 xl:ml-24 ">
        <Image src="/twitter_clone.svg" width={50} height={50} /> 
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="sm:hidden xl:inline ml-auto bg-[#1d9bf0] rounded-full w-56 h-[52px] text-lg text-white font-bold shadow-md hover:bg-[#1a8cd8]">Tweet</button>
      <div className="bg-[#1d9bf0] rounded-full text-[#d9d9d9]  hover:bg-opacity-90 cursor-pointer w-[52px] h-[52px] flex justify-center items-center xl:hidden transition duration-200 ease-out">
        <svg viewBox="0 0 24 24" className="h-[22px] fill-white"><g><path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"></path></g></svg>
      </div>
      <div className="flex items-center justify-center xl:ml-auto xl:-mr-5 mt-auto hoverAnimate text-[#d9d9d9]">
        <Image src="/profile_avatar.png" width={40} height={40} className="rounded-full xl:mr-2.5" />
        <div className="hidden xl:inline xl:ml-2 leading-5">
          <h4 className="text-white">Corbin Tanner</h4>
          <p className="text=[#6e767d]">@corbintanner</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  )
}
