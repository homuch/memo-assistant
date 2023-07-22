import { prisma } from "@/db";
import { redirect } from "next/navigation";

async function addTask(data: FormData) {
  "use server";

  console.log(data);
  const userId = data.get("userId")?.valueOf();
  const taskTitle = data.get("taskTitle")?.valueOf();
  const taskDescription = data.get("taskDescription")?.valueOf();
  if (!userId || !taskTitle) throw new Error(`missing userId or taskTitle`);
  if (
    !(typeof userId === "string") ||
    !(typeof taskTitle === "string") ||
    !(typeof taskDescription === "string")
  )
    throw new Error(`invalid typeof params`);

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!user) {
    throw new Error("User not found");
  }
  await prisma.task.create({
    data: {
      title: taskTitle,
      description: taskDescription,
      userId,
    },
  });
  redirect(
    process.env.NODE_ENV === "production" ? "/" : `http://localhost:3000/`
  );
}

export default function TaskAddPage({
  params,
}: {
  params: { userId: string };
}) {
  return (
    <form
      className="flex flex-col justify-center items-center"
      action={addTask}
    >
      <input
        type="text"
        name="userId"
        value={params.userId}
        className="placeholder:italic placeholder:text-slate-800 m-3 w-56"
        placeholder="user id*"
      />
      <input
        type="text"
        name="taskTitle"
        className="placeholder:italic placeholder:text-slate-800 m-3  w-56"
        placeholder="task title*"
      />
      <input
        type="text"
        name="taskDescription"
        className="placeholder:italic placeholder:text-slate-800 m-3  w-56"
        placeholder="task description"
      />
      <button
        type="submit"
        className="flex text-2xl border border-slate-300 hover:border-slate-800 outline-none px-2 py-1 rounded-md h-min self-center bg-transparent hover:bg-slate-700"
      >
        submit
      </button>
    </form>
  );
}
