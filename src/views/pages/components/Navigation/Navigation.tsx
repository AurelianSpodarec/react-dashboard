import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <aside className="w-[270px] bg-gray-800 h-screen">
            
            <header className="h-16 px-8 bg-gray-800">
                <span className="text-white font-bold">React Dashoard</span>
            </header>

            <nav className=" h-full">
                <ul role="list">
                    <li>
                        <span>Admin</span>
                        <ul>
                            <li>
                                <NavLink to="/users">
                                    Users
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>

        </aside>
    )
}

export default Navigation;