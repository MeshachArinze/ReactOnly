import { useContext } from "react";
import { SidebarContext } from "./sidebarContext";

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
