import React from 'react';
import LanguageSelector from "../../../../../trip_search/domain/entites/utils/language/LanguageSelector/LanguageSelector";
import CurrenciesSelector from "../../../../../transfer/presentation/currenciesSelector/CurrenciesSelector";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { setSidebarAction } from "../../../../../trip_search/presentation/redux/reducers/actions/app-actions";
import { useDispatch } from "react-redux";
import { useStyles } from "../../../../../../general/mui/useStyles";
import css from "./Nav.module.css";

const Nav = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <nav className={css.nav}>
            {/* <LanguageSelector />
            <currenciesSelector /> */}
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
    );
};

export default Nav;

