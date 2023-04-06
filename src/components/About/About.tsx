import React, { useState, useRef, useEffect } from 'react';
const About = () => {

  // ANIMATE SCROLLING USING IntersectionObserver API, which provides a way to observe when an element enters or exits the viewport.
  const [isIntersecting, setIsIntersecting] = useState(false); // set to false by default
  const sectionRef = useRef(null); // create a ref to the section element in the DOM

  // useEffect hook to observe the section element
  useEffect(() => {
    const observer = new IntersectionObserver( // create a new IntersectionObserver object
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting); // set the state to true if the section element is in the viewport
      },
      {
        root: null, // the viewport
        rootMargin: "0px", // the margin around the viewport
        threshold: 0.3 // the percentage of the section element that must be in the viewport
      }
    );

    // observe the section element
    if (sectionRef.current) {
      observer.observe(sectionRef.current); // observe the section element
    }

    // unobserve the section element
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  return (
    <div className={`flex flex-col items-center justify-center h-4/5 w-full px-2 sm:px-20 text-center 
    ${isIntersecting ? 'animate-pulse' : 'opacity-2 translate-y-5'} transition duration-300 ease-in-out`} id="about" ref={sectionRef}>

      <h1 className="text-2xl sm:text-4xl text-blue-700 font-bold sm:leading-10 sm:4 sm:my-6">
        Stay Organized and Focused with ToDoPlanna: Your Personal Task Manager
      </h1>

      <div className="text-xl sm:text-2xl text-slate-800 font-normal sm:leading-7 my-3 sm:my-4">
        <p>
          ToDoPlanna is a powerful and easy-to-use to-do list app that helps you
          stay organized and focused. With this app, you can create tasks, set due
          dates, and prioritize your work to make sure you never miss a deadline.
        </p>

        <p className="text-sm text-slate-800 font-normal sm:leading-7 my-3 sm:my-8">
          The app is designed to be simple and intuitive, so you can start using it
          right away without any training or tutorials. The clean and modern
          interface makes it easy to add and manage tasks.
        </p>

        <p className="text-xs text-slate-800 sm:leading-7 my-3 sm:my-6 font-bold">
          Whether you're a student, a professional, or just someone who wants to
          be more productive, ToDoPlanna is the perfect app for you.
        </p>
      </div>
    </div>
  )
}

export default About;
