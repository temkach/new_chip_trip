import React from 'react';
import { AppBar, Toolbar } from "@material-ui/core";
// import { sidebar } from "..";
import Sidebar from "./sidebar/Sidebar";
import css from "./HeaderComponent.module.css";
import { LogoHeader } from "./logos/Logos";
import Nav from "./nav/Nav";
import { MAIN_ROUTE, CONTACTS_ROUTE } from "../../../../trip_search/domain/entites/utils/constants/constants";
import { useLocation } from 'react-router';

const HeaderComponent = () => {
  const page_mode = useStatePath();
  return (
    <AppBar position="fixed">
      <Toolbar className={css.navbar}>
        <LogoHeader page_mode={page_mode} />
        <Nav />
      </Toolbar>
      <Sidebar page_mode={page_mode} />
    </AppBar>
  );
}

export default HeaderComponent;

function useStatePath() {
  const { pathname } = useLocation();
  if (pathname === MAIN_ROUTE || pathname === CONTACTS_ROUTE) {
    return "CheapTrip";
  }
  return "TransferBuses";
}







