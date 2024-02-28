import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import MenuIcon from "@material-ui/icons/Menu";
import { MAIN_ROUTE } from "../../../../modules/trip_search/domain/entites/utils/constants/constants";
import { Sidebar, LanguageSelector } from "../../../../modules/index";
import CurrenciesSelector from "../../../../modules/transfer/presentation/currenciesSelector/CurrenciesSelector";
import { useStyles } from "../../../mui/useStyles";
import css from "./Navbar.module.css";
import { setSidebarAction } from "../../../../modules/trip_search/presentation/redux/reducers/actions/app-actions";
import { NavLink } from "react-router-dom";
import { getBuildMode } from "../../../../modules/mainPage/data/firebase/config/build-config";
// import {useTranslation} from "react-i18next";

// const Navbar = ({ changeLanguage }) => {
const Navbar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const mode = getBuildMode();
  // const mode = getBuildModeDev();

  function getLogo() {
    return (
      <NavLink className={css.logo} to={MAIN_ROUTE}>
        <span>TransferBuses</span>
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

  // console.log(typeof (process.env.REACT_APP_BUILD_MODE, "****************"));
  // console.log(process.env.REACT_APP_BUILD_MODE, "****************");
  // console.log(process.env);

  return (
    <AppBar position="fixed">
      {/*<Container maxWidth="lg" fixed >*/}
      {/*<Container maxWidth={'false !important'}>*/}
      {/*<Container className={classes.toolbarContainer}>*/}
      {/*<Container style={{maxWidth: '100% !important', width: '100% !important'}}>*/}
      <Toolbar className={`${classes.toolbar} ${css.navbar}`}>
        {getLogo()}
        <nav className={`${classes.nav} ${css.option_block}`}>
          <LanguageSelector />
          <CurrenciesSelector />
          <IconButton
            onClick={() => dispatch(setSidebarAction(true))}
            edge="end"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </nav>
      </Toolbar>
      <Sidebar />
    </AppBar>
  );
};

export default Navbar;
