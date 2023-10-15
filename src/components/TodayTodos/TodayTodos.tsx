import Head from "./Head";
import LeftNav from "./LeftNav";
import Lists from "./Lists";

const TodayTodos = () => {


    return (
        <>
            <Head />
            <div className='flex top-20 sm:h-auto sm:absolute z-10 sm:z-1 mr-3 sm:mr-0 w-full'>
                <LeftNav />
                <Lists />
            </div>
        </>
    )
}

export default TodayTodos;