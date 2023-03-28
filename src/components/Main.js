import CurrentState from './curentState/CurrentState';
import RecentTasks from './recentTask/RecentTasks';
import RecentTransitions from './recentTransitions/RecentTransitions';
import ComplationRate from './charts/ComplationRate';
import CycleTime from './charts/CycleTime';
import DueDate from './charts/DueDate';
import TasksAprovaleRate from './charts/TasksAprovaleRate';
import TasksReviewRate from './charts/TasksReview';
import TransitionChart from './charts/TransitionChart';

function Main() {

  return (
    <div className="mt-10 flex gap-6 flex-wrap">
      <TransitionChart />
      <DueDate />
      <CycleTime />
      <TasksReviewRate />
      <ComplationRate />
      <RecentTransitions />
      <RecentTasks />
      <CurrentState />
      <TasksAprovaleRate />
    </div>
  );
}

export default Main;
