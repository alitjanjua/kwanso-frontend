import React, { FC } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Tasks from "../components/pages/ListTasks";
import BulkDelete from "../components/pages/BulkDelete";
import CreateTask from "../components/pages/CreateTask";

interface Props {}

export const Routes: FC = (props: Props): JSX.Element => {
  //   const {} = props;

  return (
    // <Switch>
    //   {Object.values(routes).map((route: any) => {
    //     if (route.redirect) {
    //       return <Redirect to="/list-tasks" />;
    //     }
    //     return (
    //       <Route
    //         key={route.title}
    //         title={route.title}
    //         path={route.path}
    //         component={route.component}
    //       />
    //     );
    //   })}
    // </Switch>
    // <Switch>
    //   {Object.values(routes).map((route: any) => {
    //     return (
    //       <Route
    //         key={route.title}
    //         title={route.title}
    //         path={route.path}
    //         component={route.component}
    //       />
    //     );
    //   })}
    // </Switch>

    // <Tasks />

    // <BulkDelete />

    <CreateTask />
  );
};

const routes = {
  INDEX: {
    path: "/",
    title: "Home",
    redirect: true,
  },
  TASKS_LIST: {
    path: "/list-tasks",
    title: "TASKS",
    component: Tasks,
  },
  BULK_DELETE: {
    path: "/bulk-delete",
    title: "TASKS",
    component: Tasks,
  },
  CREATE_TASK: {
    path: "/create-task",
    title: "TASKS",
    component: Tasks,
  },
};
