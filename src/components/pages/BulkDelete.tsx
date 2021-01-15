import React, { useState, useEffect } from "react";
import styled from "styled-components";

import TaskCard from "../common/taskCard";
import { Container, FlexLayout } from "../common/layout";
import { request } from "../../utility";

const DeleteButton = styled.button`
  color: primary;
`;

export default function ListTasks() {
  const [tasks, setTasks] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const response: any = await request({
        url: "http://localhost:4000/list-tasks",
        method: "GET",
      });
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
        <FlexLayout>
          {tasks.map((task: any) => (
            <TaskCard
              task={task}
              enableDelete={true}
              handleCheck={handleCheck}
            />
          ))}
        </FlexLayout>
      </Container>
    </>
  );
}
