"use client"

/* import Link from "next/link";
 */import Image from "next/image";
 import { useRouter } from "next/navigation";
import homeImage from "../app/images/home.png";
export default function HomePage() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Home Page</h1>
      {/* <Link href="/test">
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Go to Test Page</button>

      </Link> */}
          <Image
            src={homeImage}
            width={300}
            height={300}
            alt="Picture of home"
          />
          <button onClick={() => router.push("/contact")} className="bg-blue-500 text-white px-4 py-2 rounded mt-2"> Go to contact page</button>
          

    </div>
  );
}
