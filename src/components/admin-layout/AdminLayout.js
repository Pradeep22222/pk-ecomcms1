import React from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { SideMenu } from "../side-menu/SideMenu";

export const AdminLayout = ({children}) => {
  return (
    <div>
      <Header ></Header>
      <SideMenu></SideMenu>
      <main className="admin_mainbody">{children}</main>

      <Footer></Footer>
    </div>
  );
};
