import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';

// project imports
import config from './../config';

//-----------------------|| ROUTING RENDER ||-----------------------//

const Routes = () => {
    return (
        <Switch>
            <React.Fragment>
                {/* Routes for main layouts */}
                <MainRoutes />
            </React.Fragment>
            {/* <Redirect to="/" /> */}
        </Switch>
    );
};

export default Routes;
