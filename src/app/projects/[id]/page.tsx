/* import Link from "next/link";
 */
import Image from "next/image";
 export default async function Projects({params}: {params: {id: string}}) {
  const {id} = await params
   return (
     <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Projects Page for {id || 'All Projects'}</h1>
       
           <Image
           src="https://i.pinimg.com/originals/75/87/df/7587df77ef521cf98057d0028ee983f1.gif"
           width={300}
           height={300}
             alt="Projects"
           />

           
 
     </div>
   );
 }
 