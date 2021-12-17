import Image from "next/image";
import {
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  SwitchHorizontalIcon,
} from "@heroicons/react/outline";

export default function Post({post}) {
  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-700">
      <div className="mr-4">
        <Image src={post?.userAvatar} width={50} height={50} className="rounded-full" />
      </div>
      <div className="flex flex-col space-y-2 w-full">
        <div className="text-[#6e767d]">
          <div className="inline-block group">
            <h4 className="font-bold text-[15px] sm:text-base text-[#d9d9d9] mr-2 group-hover:underline inline-block">
              {post?.username}
            </h4>
            <span>@{post?.tag}</span>
          </div>
          <span>{" "} · {" "}</span>
          <span className="hover:underline text-sm sm:text-[15px]">
            3h
          </span>
          <div className="icon group flex-shrink-0 ml-auto">
            <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
          </div>            
        </div>

        <p className="text-[#d9d9d9] text-[15px] sm:text-base">
          {post?.tweet}
        </p>

        <div className="rounded-2xl max-h-[700px] object-cover mr-2">
          {post.image && (
            <Image src={post?.image} width={500} height={500} />
          )}
        </div>

        <div
          className="text-[#6e767d] flex justify-between w-10/12"
        >
          <div className="flex items-center space-x-1 group">
            <div className="icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10">
              <ChatIcon className="h-5 group-hover:text-[#1d9bf0]" />
            </div>
              <span className="group-hover:text-[#1d9bf0] text-sm">
                12
              </span>
          </div>

          <div className="flex items-center space-x-1 group">
            <div className="icon group-hover:bg-green-500/10">
              <SwitchHorizontalIcon className="h-5 group-hover:text-green-500" />
            </div>
            <span className="group-hover:text-green-500 text-sm">
                30
              </span>
          </div>

          <div className="flex items-center space-x-1 group">
            <div className="icon group-hover:bg-pink-600/10">
              <HeartIcon className="h-5 group-hover:text-pink-600" />
            </div>
              <span className="group-hover:text-pink-600 text-sm">
                30
              </span>
          </div>

          <div className="icon group">
            <ShareIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
        </div>
      </div>
    </div>
  )
}
