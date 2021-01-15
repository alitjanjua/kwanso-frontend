import React, { useState, useEffect } from "react";

import TaskCard from "../common/taskCard";
import { Container, FlexLayout } from "../common/layout";
import { request } from "../../utility";

export default function ListTasks() {
  const [tasks, setTasks] = useState([]);

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

  return (
    <>
      <Container>
        <FlexLayout>
          {tasks.map((task, index) => (
            <TaskCard task={task} />
          ))}
        </FlexLayout>
      </Container>
    </>
  );
}
