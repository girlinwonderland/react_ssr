import { useRoutes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserListPage from './pages/UsersListPage';
import AdminsPage from './pages/AdminsPage';
import NotFoundPage from './pages/NotFoundPage';
import App from './App';

// export default () => (
//     <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/users" element={<UserListPage />} />
//     </Routes>
// );

export const RoutersData = [
    {
        ...App,
        children: [
            {
                ...HomePage,
                path: '/',
            },
            {
                ...UserListPage,
                path: '/users',
            },
            {
                ...AdminsPage,
                path: '/admins',
            },
            {
                ...NotFoundPage,
                path: '*'
            }
        ]
    },
]

export const Routers = () => {
    return useRoutes(RoutersData);
}
