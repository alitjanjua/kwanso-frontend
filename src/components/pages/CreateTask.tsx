import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { request } from "../../utility";

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 500px;
  height: 300px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;
const TagWrapper = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  top: 100px;
`;
const Button = styled.button`
  background: "palevioletred";
  color: "white";
  font-size: 1em;
  margin-top: 10px;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  top: 250px;
`;

export default function CreateTask() {
  const [taskName, setName] = useState<string>();
  const history = useHistory();

  const handleChange = (taskName: string) => {
    setName(taskName);
  };

  const onCreateTask = async () => {
    const response: any = await request({
      url: "http://localhost:4000/task/create-task",
      method: "POST",
      data: { name: taskName },
    });
    if (response.status === 201) {
      history.push("/list-tasks");
    }
  };

  return (
    <CardWrapper>
      <TagWrapper style={{ marginTop: "100px" }}>
        <input
          name="createTask"
          placeholder="Task name.."
          onChange={(event) => handleChange(event.target.value)}
          style={{ height: "25px" }}
        />
      </TagWrapper>
      <TagWrapper>
        <Button onClick={onCreateTask}>Create</Button>
      </TagWrapper>
    </CardWrapper>
  );
}
