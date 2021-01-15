import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background: papayawhip;
  margin: 48px auto 0;
  width: 235px;
  height: 135px;
  border-radius: 2px;
`;

const CardHeading = styled.section`
  font-size: 1.5em;
  text-align: center;
  margin-top: 50px;
  color: palevioletred;
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
      {enableDelete && handleCheck && (
        <input
          id={task._id}
          name={task._id}
          type="checkbox"
          value={task._id}
          checked={task.checked}
          onChange={(event) =>
            handleCheck(event?.target?.value, event?.target?.checked)
          }
        />
      )}
      <CardHeading>{task.name}</CardHeading>
    </CardWrapper>
  );
}
