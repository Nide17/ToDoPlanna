import { useState, useEffect } from 'react'
import axios from 'axios'
import ListItem from './ListItem'

const Lists = () => {
    // URL for the backend - prod or dev
    const url = import.meta.env.VITE_BACKEND_URL

    // ERROR, SUCCESS, LOADING
    const [authError, setAuthError] = useState('')
    const [authSuccess, setAuthSuccess] = useState(false)
    const [authLoading, setAuthLoading] = useState(false)
    const [lists, setLists] = useState([])

    // Get all lists
    const getAllLists = async () => {
        try {
            // clear error message
            setAuthError('')
            // set loading to true when loading user profile data from server and before setting user state
            setAuthLoading(true)

            // get all lists - http://localhost:3000
            const response = await axios.get(`${url}/todosLists`)

            // set success message
            setAuthSuccess(true)

            // set lists
            setLists(response.data)

            // set loading to false
            setAuthLoading(false)
        } catch (error) {
            // set error message
            setAuthError('Error getting lists')

            // set loading to false
            setAuthLoading(false)
        }

    }

    // Get all lists on component mount
    useEffect(() => {
        getAllLists()
    }, [])

    console.log(lists)

    return (
        <div className='bg-slate-300 w-5/6 sm:w-full flex justify-center text-4xl text-blue-500 font-bold'>
            {
                authLoading
                    ? <div>Loading...</div>
                    : authError
                        ? <div>{authError}</div>
                        : authSuccess
                            ? <>
                                {lists.map((list: any) =>
                                    <ListItem list={list} />
                                )}
                            </>
                            : <div>Not authenticated</div>
            }
        </div>
    )
}

export default Lists