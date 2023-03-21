import configRoutes from '~/config';

// Layouts

// Pages
import Home from '~/containers/Home';
import Libary from '~/containers/Libary';
import ZingChart from '~/containers/ZingChart';
import Login from '~/containers/Login';
import Signup from '~/containers/Signup';
import Loading from '~/components/Loading';
import { LOGIN } from '~/constants';
// Public routes
const publicRoutes = [
    { path: configRoutes.home, component: Home },
    { path: configRoutes.libary, component: Libary },
    { path: configRoutes.zingchart, component: ZingChart },
    { path: configRoutes.login, component: Login, onlyContent: true },
    { path: configRoutes.signup, component: Signup, onlyContent: true },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
