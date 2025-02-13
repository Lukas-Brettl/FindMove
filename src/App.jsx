import movie from "./assets/images/movie.jpg"
export default function App(){
    
    return(
        <>
            <nav>
                
            </nav>
            <section className="flex w-full h-full items-center px-6 text-white">

                <div className="flex flex-col items-center relative bg-red-950 border-2 border-red-950">
                    <img src={movie} alt="" className="w-80"/>
                    {/*raiting (stars) */}
                    <div class="flex gap-1 flex-row-reverse justify-end items-center py-3">
                        <input id="hs-ratings-readonly-1" type="radio" class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" value="1"/>
                        <label for="hs-ratings-readonly-1" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none">
                            <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                            </svg>
                        </label>
                        <input id="hs-ratings-readonly-2" type="radio" class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" value="2"/>
                        <label for="hs-ratings-readonly-2" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none">
                            <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                            </svg>
                        </label>
                        <input id="hs-ratings-readonly-3" type="radio" class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" value="3"/>
                        <label for="hs-ratings-readonly-3" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none">
                            <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                            </svg>
                        </label>
                        <input id="hs-ratings-readonly-4" type="radio" class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" value="4"/>
                        <label for="hs-ratings-readonly-4" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none">
                            <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                            </svg>
                        </label>
                        <input id="hs-ratings-readonly-5" type="radio" class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" value="5"/>
                        <label for="hs-ratings-readonly-5" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none">
                            <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                            </svg>
                        </label>
                       
                    </div>
                    
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