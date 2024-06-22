
const Navbar = () => {
    return (
        <nav className="bg-gray-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">Hotstar Clone</div>
                <div className="flex space-x-4">
                    <a href="/" className="text-gray-300 hover:text-white">Home</a>
                    <a href="/tv" className="text-gray-300 hover:text-white">TV</a>
                    <a href="/movies" className="text-gray-300 hover:text-white">Movies</a>
                    <a href="/sports" className="text-gray-300 hover:text-white">Sports</a>
                    <a href="/news" className="text-gray-300 hover:text-white">News</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
