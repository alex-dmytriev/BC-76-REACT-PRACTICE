import { keepPreviousData, useQuery } from "@tanstack/react-query";
import TaskForm from "../../components/TaskForm/TaskForm";
import { fetchedTasks } from "../../services/tasks";
import TaskList from "../../components/TaskList/TaskList";
import css from "./Tasks.module.css";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Pagination from "../../components/Pagination/Pagination";
import SearchBoxTasks from "../../components/SearchBoxTasks/SearchBoxTasks";
import { useDebouncedCallback } from "use-debounce";

const Tasks = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["tasks", page, search],
    queryFn: () => fetchedTasks(page, search),
    placeholderData: keepPreviousData,
  });

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleSearch = useDebouncedCallback((value: string) => {
    setSearch(value);
  }, 1000);
  return (
    <div>
      <header className={css.toolbar}>
        <SearchBoxTasks onChange={handleSearch} />
        {data && data.totalPages > 1 && (
          <Pagination
            page={page}
            totalPages={data.totalPages}
            onChange={handlePageChange}
          />
        )}
        <button onClick={handleOpenModal} type="button" className={css.button}>
          +
        </button>
      </header>

      {isSuccess && data && data?.tasks.length > 0 ? (
        <TaskList tasks={data.tasks} />
      ) : (
        !isLoading && <p>Tasks not found</p>
      )}
      {isLoading && !data && <Loader />}
      {isError && <ErrorMessage />}
      {modalIsOpen && (
        <Modal closeModal={handleCloseModal}>
          <TaskForm closeModal={handleCloseModal} />
        </Modal>
      )}
    </div>
  );
};

export default Tasks;
