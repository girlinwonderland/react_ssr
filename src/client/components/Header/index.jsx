import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default () => {
    const auth = useSelector(state => state.auth);

    const authBtn = auth ? (
        <a href="/api/logout">Logout</a>
    ) : (
        <a href="/api/auth/google">Login</a>
    );

    return (
        <div>
            <Link to="/">React SSR</Link>
            <div>
                <Link to="/users">Users</Link>
                <Link to="/admins">Admins</Link>
                {authBtn}
            </div>
        </div>
    )
}
