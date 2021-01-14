import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  height: 200px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

const CardHeading = styled.h3`
  text-align: center;
  text-decoration: solid;
`;

interface IProps {
  task: {
    _id: string;
    name: string;
    checked?: boolean;
  };
  enableDelete?: boolean;
  handleCheck?: (value: string, checked: boolean) => void;
}

export default function TaskCard({ task, enableDelete, handleCheck }: IProps) {
  return (
    <CardWrapper>
      {enableDelete && (
        <input
          id={task._id}
          name={task._id}
          type="checkbox"
          value={task._id}
          checked={task.checked}
          onChange={(event) =>
            handleCheck &&
            handleCheck(event?.target?.value, event?.target?.checked)
          }
        />
      )}
      <CardHeading>{task.name}</CardHeading>
    </CardWrapper>
  );
}
