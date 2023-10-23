import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-center items-center gap-5 text-white text-2xl font-bold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/signup">SignUp</NavLink>
            <NavLink to="/signin">SignIn</NavLink>
        </div>
    );
};

export default Header;