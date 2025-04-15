import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   <div className="flex flex-col items-right justify-center min-h-screen p-24">
    <div className="w-100 flex justify-end">
      <ThemeToggle />
    </div>
    <h1 className=" text-blue-500 font-barlow ">Welcome to me</h1>
    
    <Button variant="destructive">Submit</Button>
   
    </div>
   
   
  );
}
