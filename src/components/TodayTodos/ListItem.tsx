import moment from 'moment'
import EditIcon from './Icons/EditIcon'
import DeleteIcon from './Icons/DeleteIcon'
import CheckIcon from './Icons/CheckIcon'

const ListItem = ({ list }: any) => {
    return (
        <div className='w-1/2 p-6 flex text-xl text-slate-100 font-bold h-auto bg-slate-100'>
            <div className='p-4 sm:p-8 bg-blue-500 w-full h-fit border border-slate-100 rounded-lg'>
                
                {list.title} - {list.status === 'ACTIVE' ? '🕗' : list.status === 'FINISHED' ? '🟢' : '🔴'}
                <small className='block text-sm text-slate-900 align-bottom'>
                    Due date: {moment(list.dueDate).format('DD/MM/YYYY')} - In {moment(list.dueDate).fromNow()}
                </small>

                <hr />

                <table className="table-auto mt-4">
                    <tbody>
                        {
                            list.todos.map((todo: any, index: number) =>
                                <tr key={index} className="text-lg 2xl:text-2xl font-bold 2xl:mt-5 align-baseline">

                                    <td className='text-slate-100 hover:text-slate-900 py-2'>
                                        {index + 1}. {todo.title}&nbsp;&nbsp;
                                    </td>

                                    {/* EDIT, DELETE, CHANGE COMPLETE STATUS */}
                                    <td className='flex text-slate-100 hover:text-slate-900 py-2'>
                                        <EditIcon />
                                        <DeleteIcon />
                                        <CheckIcon />
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListItem