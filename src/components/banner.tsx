
import bannerIm from '../assets/banner-main.png';
import bannerImg from '../assets/bg-shadow.png';

const Banner = () => {
    return (
        <div className="container mx-auto mt-6 px-4">
            <div 
                className="bg-black rounded-2xl min-h-[350px] w-full bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center text-center p-8 text-white relative overflow-hidden"
                style={{ backgroundImage: `url(${bannerImg})` }}
            >
                {/* Content */}
                <div className="relative z-10 max-w-2xl flex flex-col items-center">
                    
                    {/* Main Image Center */}
                    <img src={bannerIm} alt="Banner Main" className="mb-4 mx-auto w-auto max-h-[150px]" />

                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                        Assemble Your Ultimate BPL Eleven
                    </h1>

                    <p className="text-gray-300 text-base md:text-lg mb-6">
                        Beyond Boundaries, Beyond Dreams!
                    </p>

                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl transition duration-300 cursor-pointer">
                        Claim Free Credit
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Banner;