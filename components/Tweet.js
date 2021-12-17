import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function Tweet() {

  return (
    <div className={`border-b border-gray-700 p-3 flex space-x-3`}>
      <div>
        <Image src="/profile_avatar.png" layout="fixed" width={40} height={40} className="rounded-full" />
      </div>

      <div className="w-full divide-y divide-gray-700 ml-2">
        <div className="space-y-2.5">
          <textarea name="Tweet" placeholder="What's happening?" row="2" className="bg-transparent outline-none text-[#8899A6] text-lg placeholder-gray-500 tracking-wide w-full m-h-[50px]" />
        </div>

        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center">
            <div className="icon">
              <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="icon">
              <svg viewBox="0 0 24 24" className="h-[22px] fill-[#1d9bf0]"><g><path d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z"></path><path d="M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z"></path></g></svg>
            </div>
            <div className="icon rotate-90">
              <ChartBarIcon className="h-[22px] text-[#1d9bd0]"/>
            </div>
            <div className="icon">
              <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]"/>
            </div>
            <div className="icon">
              <CalendarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
          </div>
          <button className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled-opacity-50 disabled:cursor-default">
            Tweet
          </button>
        </div>

      </div>


    </div>
  )
}
