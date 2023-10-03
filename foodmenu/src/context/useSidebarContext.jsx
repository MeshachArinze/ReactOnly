import { useContext } from "react";
import { SidebarContext } from "./sidebarContext";

 const UseSidebarContext = () => {
  return useContext(SidebarContext);
};

export default UseSidebarContext;
