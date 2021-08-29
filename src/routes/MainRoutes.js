import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import MainLayout from './../layout/MainLayout';
import Loadable from '../ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../views/dashboard/Default')));

// sample page routing
const Tweets = Loadable(lazy(() => import('../views/tweets')));
const Gtrends = Loadable(lazy(() => import('../views/gtrends')));

//-----------------------|| MAIN ROUTING ||-----------------------//

const MainRoutes = () => {
    const location = useLocation();

    return (
        <Route path={['/dashboard/default', '/tweets', '/gtrends']}>
            <MainLayout>
                <Switch location={location} key={location.pathname}>
                    <Route path="/dashboard/default" component={DashboardDefault} />

                    <Route path="/tweets" component={Tweets} />
                    <Route path="/gtrends" component={Gtrends} />
                </Switch>
            </MainLayout>
        </Route>
    );
};

export default MainRoutes;
