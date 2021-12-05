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
      <div className="flex items-center justify-center w-14 h-28 p-0 xl:ml-24 hoverAnimate">
        <Image src="/twitter_clone.svg" width={30} height={60} /> 
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
      <button className="hidden xl:inline ml-auto bg-[#1d9bf0] rounded-full w-56 h-[52px] text-lg text-white font-bold shadow-md hover:bg-[#1a8cd8]">Tweet</button>
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
