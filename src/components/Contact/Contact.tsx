const Contact = () => {
  return (
    <div className={`bg-fixed bg-cover bg-center bg-no-repeat bg-[#051726] h-5/6 w-full bg-image-contact py-4`} id="contact">

      <div className="flex flex-col h-full w-full text-center sm:px-16">
        <h1 className="text-2xl sm:text-4xl text-[#f59e0b] font-bold sm:leading-10 mb-2 sm:my-6">
          Get in Touch with Us
        </h1>

        <div className="flex flex-col sm:flex-row justify-between items-center w-full h-full sm:p-2">

          <div className="flex flex-col justify-center items-center sm:w-1/2 backdrop-contrast-50 bg-white/50 border rounded-lg border-gray-300 mx-4 sm:mx-6 sm:h-5/6 hover:skew-y-1 hover:scale-105 transition duration-500 ease-in-out">
            <p className="text-lg sm:text-3xl text-[#000000] leading-0 sm:leading-10 my-2 sm:px-6">
              We are always happy to hear from you. If you have any questions or
              suggestions, please feel free to contact us.
            </p>

            <p className="text-sm sm:text-xl text-[#1c1c1c] mb-2 leading-0 sm:leading-10">
              We will get back to you as soon as possible.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center backdrop-contrast-50 bg-white/40 border rounded-lg border-gray-300 sm:mx-6 sm:h-5/6 w-11/12 sm:w-1/2 hover:-skew-y-1 hover:scale-105 transition duration-500 ease-in-out">
            <form className="flex flex-col justify-center items-center w-full">
              <input type="text" placeholder="Name" className="w-5/6 sm:w-3/4 h-10 px-2 py-1 text-slate-900 rounded-lg border-2 border-blue-900 bg-[#ffd284] my-2" />
              <input type="text" placeholder="Email" className="w-5/6 sm:w-3/4 h-10 px-2 py-1 text-slate-900 rounded-lg border-2 border-blue-900 bg-[#ffd284] my-2" />
              <textarea placeholder="Message" className="w-5/6 sm:w-3/4 h-32 px-2 py-1 text-slate-900 rounded-lg border-2 border-blue-900 bg-[#ffd284] my-2" />
              <button type="submit" className="w-5/6 sm:w-3/4 h-10 rounded-lg border-2 border-gray-300 my-2 bg-blue-900 text-white hover:scale-110 transition duration-500 ease-in-out">Send</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
