
const Content = () => {
    const movies = Array.from({ length: 12 }, (_, index) => ({
        title: `Movie ${index + 1}`,
        description: `Description for Movie ${index + 1}`,
        image: `https://via.placeholder.com/150?text=Movie+${index + 1}`,
    }));

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">Popular Movies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map((movie, index) => (
                    <div key={index} className="bg-gray-200 h-60 flex flex-col items-center justify-center p-4">
                        <img src={movie.image} alt={movie.title} className="h-32 mb-2 border-rounded"/>
                        <span className="text-gray-700 font-bold">{movie.title}</span>
                        <span className="text-gray-500 text-sm text-center">{movie.description}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Content;
