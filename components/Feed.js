import { SparklesIcon } from "@heroicons/react/outline";
import Tweet from "./Tweet";
import Post from "./Post";

const posts = [
  { 
    id: 1,
    username: "Elon Muck",
    tag: "elonmuck",
    userAvatar: "/avatar1.jpg",
    image: "/image1.jpeg",
    tweet: "blah blah blah"
  },
  { 
    id: 2,
    username: "Elon Muck",
    tag: "elonmuck",
    userAvatar: "/avatar1.jpg",
    image: null,
    tweet: "blah blah blah"
  },
  { 
    id: 3,
    username: "ShibaShia",
    tag: "shibshia",
    userAvatar: "/avatar2.png",
    image: "/image2.png",
    tweet: "yada yada yada"
  },
  { 
    id: 4,
    username: "ShibaShia",
    tag: "shibshia",
    userAvatar: "/avatar2.png",
    image: null,
    tweet: "yada yada yada"
  }
]

export default function Feed() {
  return (
    <div className="flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-[#15202b] border-b border-gray-700">
        <div className="text-lg sm:text:xl font-bold">Home</div>
        <div className="hoverAnimate w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>

      <Tweet /> 

      <div className="pb-72">
        {posts.map( (post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
