import movie from "./assets/images/movie.jpg"
export default function App(){
    return(
        <>
            <nav>
                
            </nav>
            <section className="flex w-full h-full items-center px-6 text-white">
                <div className="relative">
                    <img src={movie} alt="" className="w-80"/>
                    <span className="absolute bottom-0">stars</span>
                </div>
                
                <div>
                    <div className="flex items-end">
                        <h1 className="text-5xl font-medium">Name</h1>
                        <h2 className="text-2xl ml-2">(year)</h2>
                    </div>
                    <div className="flex items-center mt-3">
                        <div className="p-1 px-3 font-semibold bg-red-900 rounded-full">types of movie</div>
                        <h3 className="text-gray-400 ml-3">time(h,m)</h3>
                    </div>
                    <div className="flex">
                        <p>information about movie</p>
                        <span>percent%</span>
                    </div>
                    <div>
                        <button>ignore</button>
                        <button>Add to play later list</button>
                    </div>
                </div>
            </section>
            <footer>

            </footer>
        </>
    )
}