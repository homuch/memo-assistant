import React from "react";

interface Task {
  title: string;
  lastReviewed: Date | null;
}

export default function TodoItem(params: { task: Task }) {
  return (
    <div className="border border-slate-800 rounded m-3 px-2 py-1">
      <h2 className="text-lg font-bold">{params.task.title}</h2>
      <div className="flex flex-row">
        <p>last reviewed:</p>
        <p className="italic text-slate-500 mx-1">
          {params.task.lastReviewed?.toDateString() || "not reviewed yet"}
        </p>
      </div>
    </div>
  );
}
