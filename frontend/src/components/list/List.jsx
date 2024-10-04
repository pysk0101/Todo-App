import AddTask from "./listComponents/AddTask";
import Completed from "./listComponents/Completed";
import Tasks from "./listComponents/Tasks";

export default function List() {
  return (
    <div className={`flex flex-col h-[80svh] justify-between `}>
      <Tasks />
      <Completed />
      <div></div>
    </div>
  );
}
