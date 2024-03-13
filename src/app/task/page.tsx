import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import tasks from '@/data/tasks.json';

export default function Tasks() {
  const TaskItem = dynamic(async () => import('@/components/task/task-item'), {
    loading: () => <Skeleton className="w-full h-28" />,
    ssr: false,
  });

  return (
    <div className="flex flex-col gap-4">
      {
        tasks.map(task => {

          return <TaskItem key={`task-${task.id}`} task={task} />;
        })
      }
    </div>
  );
}