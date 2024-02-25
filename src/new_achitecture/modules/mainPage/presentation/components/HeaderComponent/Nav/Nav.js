import React from 'react';
import LanguageSelector from "../../../../../../general/utils/language/LanguageSelector/LanguageSelector";
import CurrenciesSelector from "../../../../../transfer/domain/entites/CurrenciesSelector/CurrenciesSelector";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { setSidebarAction } from "../../../../../../general/redux/actions/app-actions";
import { useDispatch } from "react-redux";
import { useStyles } from "../../../../../../general/MUI/useStyles";
import css from "./Nav.module.css";

const Nav = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <nav className={css.nav}>
            {/* <LanguageSelector />
            <CurrenciesSelector /> */}
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

