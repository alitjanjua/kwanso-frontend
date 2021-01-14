import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import TaskCard from "../common/taskCard";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px;
  position: absolute;
`;

const DeleteButton = styled.button`
  color: primary;
`;

export default function ListTasks() {
  const [tasks, setTasks] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const response: any = await axios.get(
        "http://localhost:4000/task/list-tasks",
        {
          method: "GET",
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      );
      if (response && response.data && response.data.tasks) {
        setTasks(response.data.tasks);
      }
    })();
  }, []);

  const handleCheck = (value: string, checked: boolean) => {
    let index = tasks.findIndex((task: any) => task._id === value);
    let newTasks = tasks;
    newTasks[index].checked = checked;
    setTasks(newTasks);
  };

  const deleteTasks = () => {
    let newTasks = tasks.filter((task: any) => !task.checked);
    setTasks(newTasks);
  };

  return (
    <>
      <Container>
        <DeleteButton onClick={deleteTasks}>Delete Selected Tasks</DeleteButton>
        {tasks.map((task: any) => (
          <TaskCard task={task} enableDelete={true} handleCheck={handleCheck} />
        ))}
      </Container>
    </>
  );
}
