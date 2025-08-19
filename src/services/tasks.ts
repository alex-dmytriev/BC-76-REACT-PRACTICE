import axios from "axios";
import type { NewTask, Task } from "../types/type";

const instance = axios.create({
    baseURL: 'https://tasks-back-9h2m.onrender.com',
    headers: {'Authorization': `Bearer ${import.meta.env.VITE_TASKS_TOKEN}`}
  });
  
interface FetchedTasksResponse {
    tasks: Task[];
    totalPages: number;
  }

export async function fetchedTasks(): Promise<FetchedTasksResponse> {
    const { data } = await instance.get<{data: FetchedTasksResponse}>("/tasks", {params: {perPage: 100}}) 
    return data.data;
}

export async function createTask(newTask: NewTask): Promise<Task> {
    const { data } = await instance.post<{data: Task}>("/tasks", newTask)
    return data.data;
}

export async function deleteTask(id: string): Promise<Task> {
    const { data } = await instance.delete(`/tasks/${id}`)
    return data.data;
}