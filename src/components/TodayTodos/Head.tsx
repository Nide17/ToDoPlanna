import { useState, useEffect } from 'react';

const Head = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || '{}'));
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, []); // The empty dependency array ensures that the effect runs only once

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user') || '{}'));
    }, []); // Fetch the user from localStorage once

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='fixed top-0 left-0 w-full z-10 bg-slate-100 text-slate-900 text-16 drop-shadow-md'>
            <nav className="py-1 px-3 sm:px-40 flex items-center columns-3">
                <div className="p-2 flex-none w-120 h-16 flex items-center justify-center text-center">
                    <a href="/" className='p-1 font-bold'>
                        <span className='block text-2xl text-blue-500 leading-6'>Today's Lists</span>
                        <span className='block text-[10px] text-slate-800 underline underline-offset-4 leading-6'>Your plan for the day</span>
                    </a>
                </div>

                <div className={`${isMenuOpen ? "" : "hidden"} sm:flex grow justify-center sm:justify-end top-20 sm:top-0 h-72 sm:h-auto fixed sm:static z-1000 sm:z-2000 mr-3 sm:mr-0  w-full sm:w-auto`}>
                    <ul className={`flex flex-col sm:flex-row justify-center sm:justify-end items-center w-9/12 sm:w-auto mx-auto sm:mr-0 bg-slate-100`}>
                        <li className='sm:mx-4 py-3 hover:scale-110 transition duration-500 ease-in-out'>
                            <a href="/#" className='p-2 border border-slate-100 rounded-md hover:bg-blue-500 hover:text-white'>
                                {user.username}
                            </a>
                        </li>

                        <li className='sm:mx-4 py-3 hover:scale-110 transition duration-500 ease-in-out'>
                            <b className='p-2 border rounded-md bg-blue-500 text-white hover:bg-blue-900'>
                                {date.toLocaleTimeString()}
                            </b>
                        </li>

                        <li className='sm:mx-4 py-3 hover:scale-110 transition duration-500 ease-in-out'>
                            <button type="button"
                                className="p-2 border rounded-md bg-red-400 text-white hover:bg-red-800"
                                onClick={() => { localStorage.clear(); window.location.href = '/' }
                                }>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>

                <div className={`hamburger inline sm:hidden ml-auto ${isMenuOpen ? "w-4 h-[2rem]" : ""}`} onClick={toggleMenu}>
                    <span className={`w-5 h-[2px] bg-slate-900 block ${isMenuOpen ? "hidden" : ""}`}></span>
                    <span className={`sm:w-5 h-[2px] bg-slate-900 block my-1 ${isMenuOpen ? "w-0 h-0 font-mono text-3xl my-auto text-blue-500" : ""}`}>
                        {isMenuOpen ? "X" : ""}
                    </span>
                    <span className={`w-5 h-[2px] bg-slate-900 block ${isMenuOpen ? "hidden" : ""}`}></span>
                </div>
            </nav>
        </header>
    );
};

export default Head;