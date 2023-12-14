import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchUsers } from '../actions';

const UserListPage = React.memo(() => {

    const { data: users, error, loading } = useSelector((state) => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!users.length) {
            dispatch(fetchUsers());
        }
    }, []);

    return (
        <div>
            <Helmet>
                <title>{`${users.length} User App`}</title>
                <meta property="og:title" content="User App" />
            </Helmet>
            {loading && <div>loading...</div>}
            {error && <div>oooops error((</div>}
            <ul>
                {!loading && !error && users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
})

const loadData = (store) => {
    return store.dispatch(fetchUsers())
};

export default { element: <UserListPage />, loadData };
