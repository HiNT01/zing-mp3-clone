import configRoutes from '~/config';

// Layouts


// Pages
import Home from '~/containers/Home';
import Libary from '~/containers/Libary';
import ZingChart from '~/containers/ZingChart';

// Public routes
const publicRoutes = [
    { path: configRoutes.home, component: Home },
    { path: configRoutes.libary, component: Libary },
    { path: configRoutes.zingchart, component: ZingChart },
   
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
