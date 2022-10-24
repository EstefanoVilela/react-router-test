import { Link, Outlet, useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return(
        <div className="">
            <h1>Dashboard</h1>
            <button onClick={ handleClick }>Log out</button>
            <Link to='welcome'>Say Welcome!</Link>
            <Link to='goodbye'>Say Good Bye!</Link>
            {/* <Routes>
                <Route path='welcome' element={ <p>welcome!</p> } />
            </Routes> */}

            <Outlet />
        </div>
    );
}