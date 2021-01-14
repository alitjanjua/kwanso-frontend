import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  height: 200px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

const CardHeading = styled.h3`
  text-align: center;
  text-decoration: solid;
`;

interface IProps {
  _id: string;
  task_name: string;
}

export default function TaskCard({ task }: { task: IProps }) {
  return (
    <CardWrapper>
      <CardHeading>{task.task_name}</CardHeading>
    </CardWrapper>
  );
}
