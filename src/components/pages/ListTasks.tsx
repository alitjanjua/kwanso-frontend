import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import TaskCard from "../common/taskCard";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px;
  position: absolute;
`;

export default function ListTasks() {
  const [tasks, setTasks] = useState([]);

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
  return (
    <>
      <Container>
        {tasks.map((task, index) => (
          <TaskCard task={task} />
        ))}
      </Container>
    </>
  );
}
