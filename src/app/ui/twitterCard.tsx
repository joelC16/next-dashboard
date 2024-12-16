import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle, Repeat2, Heart, Share } from "lucide-react";

interface TweetProps {
  avatarSrc?: string;
  name?: string;
  username?: string;
  content?: string;
  likes?: number;
  timestamp?: string;
  src?: string;
  alt?: string;
}

export default function Tweet({
  avatarSrc = "https://github.com/shadcn.png",
  name = "John Doe",
  username = "johndoe",
  content = "¡Este es un tweet de ejemplo!",
  likes = 42,
  timestamp = "2h",
  src = "/images/avatar.png",
  alt = "imagen",
}: TweetProps) {
  return (
    <div className="w-full bg-black border-b-[1px] border-[#313032] p-4 space-y-3">
      <div className="flex space-x-3">
        <Avatar>
          <AvatarImage src={avatarSrc} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-semibold">{name}</span>
              <span className="text-base text-[#71767b] ml-2">@{username}</span>
            </div>
            <span className="text-base text-[#71767b]">{timestamp}</span>
          </div>
          <div>
            <div>
              <p className="text-white text-base">{content}</p>
            </div>
            <div className="flex w-fit mt-3 rounded-2xl border-[1px] border-[#313032]">
              <img src={src} alt={alt} className="rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Button
          className="bg-black hover:bg-[#181818] text-[#71767b]"
          size="sm"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          <span className="text-sm">Comentar</span>
        </Button>
        <Button
          className="bg-black hover:bg-[#181818] text-[#71767b]"
          size="sm"
        >
          <Repeat2 className="h-5 w-5 mr-2" />
          <span className="text-sm">Retweet</span>
        </Button>
        <Button
          className="bg-black hover:bg-[#181818] text-[#71767b]"
          size="sm"
        >
          <Heart className="h-5 w-5 mr-2" />
          <span className="text-sm">{likes}</span>
        </Button>
        <Button
          className="bg-black hover:bg-[#181818] text-[#71767b]"
          size="sm"
        >
          <Share className="h-5 w-5 mr-2" />
          <span className="text-sm">Compartir</span>
        </Button>
      </div>
    </div>
  );
}
