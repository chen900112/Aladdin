import BasicsLayout from "../layouts/BasicsLayout";
import Workbench from "../containers/Workbench";
import Home from "../containers/Home";
const routes = [
  {
    path: "/",
    componentName: "hooks",
    component: BasicsLayout,
  },
  {
    path: "/Home",
    componentName: "Home",
    component: Home,
  },
  {
    path: "/Workbench",
    componentName: "Workbench",
    component: Workbench,
  },
];

export default routes;
