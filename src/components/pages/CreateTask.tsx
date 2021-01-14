import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import history from "../../utility";

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 500px;
  height: 300px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: "palevioletred";
  color: "white";
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  position: relative;
  top: 250px;
  left: 200px;
`;

export default function CreateTask() {
  const [taskName, setName] = useState<string>();

  const handleChange = (taskName: string) => {
    setName(taskName);
  };

  const onCreateTask = async () => {
    const response: any = await axios.post(
      "http://localhost:4000/task/create-task",
      {
        name: taskName,
      }
    );
    if (response.status === 201) {
      history.push("/list-tasks");
    }
  };

  return (
    <CardWrapper>
      <input
        name="createTask"
        onChange={(event) => handleChange(event.target.value)}
      />
      <Button onClick={onCreateTask}>Create</Button>
    </CardWrapper>
  );
}
