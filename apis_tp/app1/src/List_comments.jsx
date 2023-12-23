import axios from 'axios';
const { useState } = require("react")

const List_comments = (props) => {
    const [Comments, setComments] = useState([])
    const handleComments = () => {
        const getData = async () => {
            const my_Comments = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setComments(my_Comments.data.filter(c => c.postId == props.post.id))
        }
        getData()
        props.handleChangeActivitedId(props.post.id)
    }
    return (
        <>
            {
                    <div className='card w-75 m-auto p-3'>
                        {props.post.id}
                        <h3>
                            {props.post.title}
                        </h3>
                        <p>
                            {props.post.body}
                        </p>
                    </div>
                
            }
            <div>
                <button type='button' onClick={handleComments}>Comments</button>
            {
                props.activatedId==props.post.id&&(
                    Comments.map(c=>
                        <div className='card w-75 mb-5 mt-1 m-auto bg-info p-3  '>
                            <h6>{c.email}</h6>
                            <h3>{c.name}</h3>
                            <h3>{c.body}</h3>
                        </div>
                        )
                )
            }
            </div>
        </>
    )
}
export default List_comments ;
