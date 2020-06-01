import React from "react";

import { Task, TaskStatus } from "../generated/graphql";
import TaskListItem from "./TaskListItem";

interface Props {
  tasks?: Task[];
}

const TaskList: React.FC<Props> = ({ tasks }) => (
  <ul className="task-list">
    {tasks.map((task) => (
      <TaskListItem key={task.id} task={task} />
    ))}
  </ul>
);

export default TaskList;
