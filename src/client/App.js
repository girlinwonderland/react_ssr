import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { fetchCurrentUser } from './actions';
const App = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
};

const loadData = ({ dispatch }) => dispatch(fetchCurrentUser())
export default {
    element: <App />,
    loadData
}
