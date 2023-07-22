import Link from "next/link";

export default function Title(params: { userId?: string }) {
  return (
    <div className="w-full h-min flex-row flex ">
      <h1 className="flex text-4xl m-5">Todo List</h1>
      <Link
        className="flex text-2xl border border-slate-300 hover:border-slate-800 outline-none px-2 py-1 rounded-md h-min self-center bg-transparent hover:bg-slate-700"
        href={`/addTask/${params.userId || ""}`}
      >
        add task
      </Link>
    </div>
  );
}
