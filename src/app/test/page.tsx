import Link from "next/link";
import Image from "next/image";
import testImage from "../images/test.png";
export default function TestPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Test Page</h1>
      <Link href="/">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Go Back</button>
      </Link>
      <Image
        src={testImage}
        width={500}
        height={500}
        alt="Picture of test"
      />
      
    </div>
  );
}