import React, { FC } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import BulkDelete from "../components/pages/BulkDelete";
import CreateTask from "../components/pages/CreateTask";
import ListTasks from "../components/pages/ListTasks";

interface Props {}

export const Routes: FC = (props: Props): JSX.Element => {
  return (
    <Switch>
      <Route component={ListTasks} path="/list-tasks" />
      <Route component={BulkDelete} path="/bulk-delete" />
      <Route component={CreateTask} path="/create-task" />
      <Redirect to="/list-tasks" />
    </Switch>
  );
};
