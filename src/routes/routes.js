import config from '~/config';

import Home from '~/pages/Home';
import Friends from '~/pages/Friends';
import Groups from '~/pages/Groups';
import Watch from '~/pages/Watch';
import Market from '~/pages/MarketPlace';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.friends, component: Friends },
    { path: config.routes.groups, component: Groups },
    { path: config.routes.watch, component: Watch },
    { path: config.routes.market, component: Market },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
