import React, { FC } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Tasks from "../components/pages/ListTasks";

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
    <Tasks />
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
};
