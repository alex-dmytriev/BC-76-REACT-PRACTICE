import { useQuery } from "@tanstack/react-query";
import TaskForm from "../../components/TaskForm/TaskForm";
import { fetchedTasks } from "../../services/tasks";
import TaskList from "../../components/TaskList/TaskList";

const Tasks = () => {
    const { data, isSuccess } = useQuery({ queryKey: ["tasks"], queryFn: () => fetchedTasks() })
  return (
      <div><TaskForm />
      {isSuccess && data && data?.tasks.length > 0 && <TaskList tasks ={data.tasks} />}
      </div>
  )
}

export default Tasks;