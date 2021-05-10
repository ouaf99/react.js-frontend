import React, { Component } from 'react';
import {Typography, AppBar, CssBaseline, Toolbar} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom';
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    render() {
        return (
            <div>
                <CssBaseline />
                <AppBar position="absolute">
                    <Toolbar>
                    <Link to="http://localhost:3000/">
                        <Typography component="h1" variant="h6" color='inherit'>
                            User Management App
                        </Typography>
                        </Link>
                        <Link to="/dashboard-template">
                            <DashboardIcon color='inherit' aria-label="Dashboard" fontSize="large" align ="right" style={{
                                     position: 'absolute',
                                    right: 10,
                                    top: 7,
                             }} >
                        
                            </DashboardIcon >
                        </Link>
                    </Toolbar>
                </AppBar>
                 {/*<header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://localhost:3000/" className="navbar-brand">User Management App</a>
                        <Link to="/dashboard-template">
                            <DashboardIcon color="default" aria-label="Dashboard" fontSize="large" align ="right" style={{
                                     position: 'absolute',
                                    right: 10,
                                    top: 7,
                             }} >
                        
                            </DashboardIcon >
                        </Link>
                    </div>
                    {/*<div><h2 className="navbar-brand">User Management App</h2></div>*/}
                    {/*</nav>
                </header>*/}
                
            </div>
        );
    }
}

export default HeaderComponent;