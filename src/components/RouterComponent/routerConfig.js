import BasicsLayout from "../../layouts/BasicsLayout";
import Workbench from "../../containers/Workbench";

const routes = [
  {
    path: "/",
    componentName: "hooks",
    component: BasicsLayout,
  },
  {
    path: "/Workbench",
    componentName: "Workbench",
    component: Workbench,
  },
];

export default routes;
