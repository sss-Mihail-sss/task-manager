import tasks from '@/data/tasks.json';
import React from 'react';
import { getRemainingTime } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export interface TaskInterface {
  id: number,
  title: string,
  assigned?: string,
  createdBy: string,
  followers?: string[],
  description: string,
  datetimeCreated: string,
  datetimeDue?: string,
  time?: {
    estimate: number,
    actual: number
  }
}

export default function Page({ params }: { params: { id: number } }) {
  const task: TaskInterface | undefined = tasks.find(task => task.id == params.id);

  if (!task) {
    return (<></>);
  }

  const {
    id,
    title,
    time,
    description,
    assigned,
    followers,
    createdBy,
  } = task;
  const { remaining, type } = getRemainingTime(time?.estimate, time?.actual);

  return (
    <div className="py-4 md:p-4">
      <div className="flex gap-y-4 flex-col sm:flex-row justify-between md:items-center w-full py-4">
        <h2 className="font-bold text-2xl">#{id}: {title}</h2>

        <div className="flex gap-4">
          <Button size="sm" className="px-8 bg-[#16A34A] hover:bg-[#106E33]">Edit task</Button>
          <Button size="sm" className="px-8 bg-[#16A34A] hover:bg-[#106E33]">Add time</Button>
        </div>
      </div>

      <div className="rounded border shadow p-4">
        <p className="text-sm py-4">{description}</p>

        <div className="flex flex-col md:flex-row text-sm justify-between">
          <div>
            <div className="flex gap-4 justify-between py-1">
              <span className="text-muted-foreground flex-shrink-0 w-24">Created by</span>
              <span className="w-full text-right md:text-left">{createdBy}</span>
            </div>
            <div className="flex gap-4 justify-between py-1">
              <span className="text-muted-foreground flex-shrink-0 w-24">Assigned to</span>
              <span className="w-full text-right md:text-left">{assigned}</span>
            </div>
            <div className="flex gap-4 justify-between py-1">
              <span className="text-muted-foreground flex-shrink-0 w-24">Followed by</span>
              <span className="w-full text-right md:text-left">{followers?.join(', ')}</span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="flex justify-between py-1">
              <span className="text-muted-foreground inline-flex w-28">Time estimate</span>
              <span className="inline-flex w-8 justify-end font-jetBrains">{time?.estimate}</span>
            </span>

            <span className="flex justify-between py-1">
              <span className="text-muted-foreground inline-flex w-28">Time actual</span>
              <span className="inline-flex w-8 justify-end font-jetBrains">{time?.actual}</span>
            </span>

            <span className="flex justify-between py-1">
              <span className="text-muted-foreground inline-flex w-28">Time remaining</span>
              <span className="value font-jetBrains">{remaining}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}