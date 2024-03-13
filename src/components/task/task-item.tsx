'use client';

import React from 'react';
import './task-item.css';
import Link from 'next/link';
import { TaskInterface } from '@/app/task/[id]/page';
import { getRemainingTime } from '@/lib/utils';

export interface TaskItemInterface {
  task: TaskInterface;
}

const TaskItem: React.FC<TaskItemInterface> = ({ task }) => {
  const {
    id,
    title,
    description,
    createdBy,
    datetimeCreated,
    datetimeDue,
    time,
  } = task;

  const { remaining, type } = getRemainingTime(time?.estimate, time?.actual);

  return <Link href={`/task/${id}`} type="button" data-state={type} className="group task">
    <div className="task-left">
      <h2 className="font-medium text-lg">{title}</h2>
      <span className="text-xs text-muted-foreground font-medium">Created by: {createdBy}</span>
      <span className="text-xs text-left line-clamp-2">{description}</span>
    </div>

    {
      time &&
      <div className="task-right time">
        <div className="time-estimate">
          <span className="text-muted-foreground inline-flex w-28">Time estimate:</span>
          <span className="inline-flex w-8 justify-end font-jetBrains">{time?.estimate}</span>
        </div>

        <div className="time-actual">
          <span className="text-muted-foreground inline-flex w-28">Time actual:</span>
          <span className="inline-flex w-8 justify-end font-jetBrains">{time?.actual}</span>
        </div>

        <div className="time-remaining">
          <span className="text-muted-foreground inline-flex w-28">Time remaining:</span>
          <span className="value font-jetBrains">{remaining}</span>
        </div>
      </div>
    }
  </Link>;
};

TaskItem.displayName = 'TaskItem';

export default TaskItem;