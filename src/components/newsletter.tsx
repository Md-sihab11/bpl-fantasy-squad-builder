
const Newsletter = () => {
    return (
      <div className="container mx-auto px-4 relative z-20 -mb-28 pt-25">
            
            
            <div className="p-6 rounded-3xl border-2 border-white bg-white/15 backdrop-blur-md max-w-5xl mx-auto">
              
                <div className="bg-gradient-to-r from-blue-100 via-white to-amber-100 p-8 md:p-12 rounded-2xl shadow-xl text-center">
                    
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                        Subscribe to our Newsletter
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base mb-6">
                        Get the latest updates and news right in your inbox!
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-800 text-sm focus:outline-none bg-white"
                        />
                        <button className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-pink-500 hover:opacity-90 text-black font-bold px-6 py-3 rounded-xl text-sm transition cursor-pointer whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Newsletter;