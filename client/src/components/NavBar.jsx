function NavBar() {
    return (
        <nav className="flex w-full justify-between px-15 py-5">
            <img src="" alt="" />
            <ul className="flex gap-3">
                <li className="px-1.5 py-0.5 rounded-lg hover:bg-gray-300">
                    <a href="">Rental</a>
                </li>
                <li className="px-1.5 py-0.5 rounded-lg hover:bg-gray-300">
                    <a href="">Contact</a>
                </li>
                <li className="px-1.5 py-0.5 rounded-lg hover:bg-gray-300">
                    <a href="">About</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
