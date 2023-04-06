const Footer = () => {
  return (
    <footer className="w-screen bg-gray-800 text-white border-t-2 border-gray-400">
      <div className="sm:px-6 py-4 flex flex-col sm:flex-row justify-around items-center">

        <div className="p-2 flex-none w-120 h-16 flex items-center justify-start text-center">
          <a href="#" className='p-1 font-bold'>
            <span className='block text-2xl text-blue-100 leading-6'>ToDoPlanna</span>
            <span className='block text-[10px] text-blue-500 underline underline-offset-4 leading-6'>Organize, be productive</span>
          </a>
        </div>

        <div className="px-2 py-4 flex justify-center items-center">
          <span className="linkedin-icon sm:mx-4 hover:translate-x-4 transition duration-300 ease-in-out"></span>
          <span className="github-icon sm:mx-4 hover:translate-x-4 transition duration-300 ease-in-out"></span>
          <span className="whatsapp-icon sm:mx-4 hover:translate-x-4 transition duration-300 ease-in-out"></span>
        </div>

        <div className="px-6 flex justify-center items-center">
          <div className="flex flex-col items-center justify-center h-full w-full sm:px-20 text-justify">
            <h1 className="text-xl text-blue-700 font-bold sm:leading-10 mb-3 mt-6">
              ToDoPlanna is the easiest way to manage your tasks.
            </h1>

            <ul className="list-none">
              <li className="text-sm text-slate-200 my-2">"Simplify your life with ToDoPlanna. Our intuitive interface makes it easy to manage your tasks, so you can focus on what really matters."</li>

              <li className="text-sm text-slate-200 my-2">"Say goodbye to scattered notes and hello to productivity with ToDoPlanna. Our app keeps all your to-do's in one place, so you can stay organized and get more done."</li>

              <li className="text-sm text-slate-200 my-2">"Whether you're a busy professional or a student juggling multiple projects, ToDoPlanna has got you covered. Take control of your schedule and achieve your goals with ease."</li>
            </ul>
          </div>
        </div>

      </div>

      <div className="px-6 py-4 flex justify-center items-center border-t-2 border-gray-300">
        <p className="text-xs sm:text-sm text-gray-400">
          Copyright &copy; {new Date().getFullYear()} ToDoPlanna | All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
