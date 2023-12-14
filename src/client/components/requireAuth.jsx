import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import {useEffect} from "react";
import { useStaticContext } from '../context';

export const RequireAuth = ({ component: Component }) => {
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const context = useStaticContext();

    useEffect(() => {
        if (!auth){
            navigate('/')
        }
    }, [auth]);

    if (auth === false) {
        context.url = '/';
        return <Navigate to="/" replace />
    }

    if (auth === null){
        return <div>Loading...</div>
    }

    return <Component />;
}
