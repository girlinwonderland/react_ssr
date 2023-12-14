import { useSelector, useDispatch } from 'react-redux';
import { fetchAdmins } from '../actions';
import React, { useEffect } from "react";
import { RequireAuth } from '../components/requireAuth';
const AdminsPage = () => {

    const dispatch = useDispatch();
    const adminsUsers = useSelector((state) => state.admins);

    useEffect(() => {
        if (!adminsUsers.length){
            dispatch(fetchAdmins());
        }
    }, []);

    return (
        <div>
            <ul>
                {adminsUsers.map((admin) => (
                    <li key={admin.id}>{admin.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default { element: <RequireAuth component={AdminsPage} />, loadData: ({ dispatch }) => dispatch(fetchAdmins()) }
