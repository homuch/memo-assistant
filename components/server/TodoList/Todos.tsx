import "server-only";
import React from "react";
import { prisma } from "@/db";
import TodoItem from "./TodoItem";
import Title from "./TodoTitle";
export default async function Todos(params: { userId?: string }) {
  const tasks = await prisma.task
    .findMany({
      where: {
        userId: params.userId,
      },
    })
    .then((res) => {
      res.sort(({ lastReviewed: a }, { lastReviewed: b }) =>
        a && b ? +a - +b : 0
      );
      return res;
    });

  return (
    <div className="w-auto max-w-full flex-col">
      <Title />
      {tasks.map((task, id) => (
        <TodoItem key={id} task={task}></TodoItem>
      ))}
    </div>
  );
}
