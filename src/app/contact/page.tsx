/* import Link from "next/link";
 */import Image from "next/image";
 export default function ContactPage() {
   return (
     <div className="flex flex-col items-center">
       <h1 className="text-2xl font-bold">Contact Page</h1>
   
       <Image
         src="https://i.pinimg.com/736x/35/a7/71/35a771611ff599f31814639e5ed38e4a.jpg"
         width={300}
         height={300}
         alt="Picture of contact"
       />
       
     </div>
   );
 }