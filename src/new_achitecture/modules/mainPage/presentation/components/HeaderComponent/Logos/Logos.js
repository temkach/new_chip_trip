import React from 'react';
import { NavLink } from "react-router-dom";
import { MAIN_ROUTE, PASSENGER_ROUTE } from "../../../../../trip_search/domain/entites/utils/constants/constants";
import { getBuildMode } from "../../../../data/firebase/config/build-config";
import css from "./Logos.module.css";

export const LogoHeader = ({ page_mode }) => {
  if(page_mode === "CheapTrip") return LogoTrip();
  if(page_mode === "TransferBuses") return LogoBus();
}

function LogoBus() {
  const mode = getBuildMode();
  return (
    <NavLink className={css.logo} to={PASSENGER_ROUTE}>
      <span className={css.logoBus}>TransferBuses</span>
      {mode.mode === "development" && (
        <div
          style={{
            fontSize: "11px",
            fontWeight: "200",
            color: "rgba(250, 250, 250, 0.7)",
          }}
        >
          {mode.version} by {mode.developer}
        </div>
      )}
    </NavLink>
  );
}

function LogoTrip() {
  return (
    <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
      <NavLink className={css.logo}  to={MAIN_ROUTE}>
        <span className={css.logoTrip}>CheapTrip</span>
      </NavLink>
      <span className={css.sloganHeader}>
        <span className={css.sloganHeaderChilds}>Pay less,</span>
        <span className={css.sloganHeaderChilds}> visit more!</span>
      </span>
    </div>
  );
}



