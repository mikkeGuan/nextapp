import Link from "next/link";
import Image from "next/image";
import homeImage from "../app/images/home.png";
export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <Link href="/test">
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Go to Test Page</button>

      </Link>
          <Image
            src={homeImage}
            width={500}
            height={500}
            alt="Picture of home"
          />
          

    </div>
  );
}
