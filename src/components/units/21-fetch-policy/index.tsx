import { gql, useQuery } from "@apollo/client"

const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards {
            _id
            writer
            title
            contents
        }
    }
`

export default function PolicyExam(){
    
    const {data} = useQuery(FETCH_BOARDS,{fetchPolicy: 'network-only'});
    
    return (
    <>
        {data?.fetchBoards.map(el=>(
            <div key={el}>{el.title}</div>
        ))}
    </>
    )
}