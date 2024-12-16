import ProfilePicture from "./profilePicture";

export default function AccountItem() {
  return (
    <div className="flex gap-3 items-center">
      <div>
        <ProfilePicture></ProfilePicture>
      </div>
      <div>
        <p className="font-bold text-[15px] flex text-center">
          joel cordero
          <img src="/images/lock.svg" alt="lock" className="w-5 h-5 ml-1" />
        </p>
        <p className="font-thin text-[#71767b] text-[15px]">
          @joelcordero60218
        </p>
      </div>
      <div>
        <img
          src="/images/menuoverflow.svg"
          alt="menuoverflow"
          className="w-5 h-5 ml-1"
        />
      </div>
    </div>
  );
}
