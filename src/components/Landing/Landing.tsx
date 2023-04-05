const Landing = () => {
  return (
    <div className={`bg-fixed bg-cover bg-center bg-no-repeat bg-[#051726] h-screen w-full bg-image`}>
      <div className="flex flex-col items-center justify-center h-full w-full sm:px-72 text-center">
        <h1 className="text-4xl text-blue-700 font-bold leading-10 my-5">
          Effortlessly organize your daily tasks with ToDoPlanna.</h1>
        <p className="text-xl text-blue-700 font-bold">Stay on top of your to-do list and never miss a deadline again!</p>

        <div className="flex flex-col items-center justify-center mt-8">
          <a href="#" className="p-2 border rounded-md bg-blue-500 text-white hover:bg-blue-900 mt-4">
            Get started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
