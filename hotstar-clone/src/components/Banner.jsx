
const Banner = () => {
    return (
        <div className="bg-cover bg-center h-96 flex items-center justify-center relative">
            <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/live_stream?channel=UC4R8DWoMoI7CAwX8_LjQHig"
                title="Live Stream"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold">Welcome to Hotstar Clone</h1>
            </div>
        </div>
    );
};

export default Banner;
