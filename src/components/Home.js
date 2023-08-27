import { logoutUser } from "../lib/magic";
import { api } from "../api/Api";
import { UserContext } from '../UserContext';

const { default: React, useContext, useEffect, useState } = require("react");

const Home = ({ setStatus }) => {
    const { user } = useContext(UserContext);
    const [isLoading, setLoading] = useState(false);
    const [cats, setCats] = useState([]);

    useEffect(() => {
        setLoading(true)
        api.getCats(user).then(response => {
            const responseData = response?.data;
            setCats(responseData);
        });
        setLoading(false);
    }, [user]);

    const logout = async () => {
        await logoutUser();
        return setStatus({ isLoggedIn: false });
    }

    if (isLoading) return <span className="loading loading-ring loading-lg"></span>

    return (
        <>
            <p align="center">Here are all your cats:</p>
            {cats.map(({ name }) => (
                <p align="center" key={name}>{name}</p>
            ))}
            <button onClick={logout}>Logout</button>
        </>
    );
}

export default Home;