import Image from "next/image";
import { Todos } from "@/components/server";
export default function Home() {
  return (
    <>
      <main className="w-full h-full flex-row m-2 align-middle justify-center flex">
        <Todos />
      </main>
    </>
  );
}
