import Image from "next/image"

export default function ProfilePicture(){
    return(
        <Image
        src={"/images/avatar.png"}
        alt="Avatar"
        width={40}
        height={40}
        className="rounded-full"
      ></Image>
    )
}