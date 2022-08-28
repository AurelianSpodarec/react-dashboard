function Navigation() {
    return (
        <aside className="w-[270px] bg-gray-800 h-screen">
            
            <header className="h-16 px-8 bg-gray-800">
                <span className="text-white font-bold">React Dashoard</span>
            </header>

            <nav className=" h-full">
                <ul role="list">
                    <li>Admin</li>
                    <ul>
                        <li>Aomwthing</li>
                    </ul>
                </ul>
            </nav>

        </aside>
    )
}

export default Navigation;