import Link from "next/link";

export default function BarItem({ url, alt, href }: any) {

    return (
        <div className="flex content-center">
            <Link href={url} className="flex gap-3 hover:bg-[#181818] rounded-full p-3 px-4 transition ease-in-out duration-200">
                <img src={href} alt={alt} className="h-[26px]"/>
                <p className="text-center text-xl px-2">{alt}</p>
            </Link>
        </div>
    );
}
