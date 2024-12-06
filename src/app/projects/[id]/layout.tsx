import Image from "next/image";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>
    {children}
    <div>
        <h2>Featured projects</h2>
        <Image
           src="https://i.pinimg.com/736x/07/6c/a4/076ca4ab40fb5f03c83021bdea86443d.jpg"
           width={300}
           height={300}
             alt="github logo"
           />
    </div>
    </div>;
}
