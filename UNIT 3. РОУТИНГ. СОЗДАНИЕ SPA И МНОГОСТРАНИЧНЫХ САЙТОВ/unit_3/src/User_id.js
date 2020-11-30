import {useParams} from "react-router-dom";

function User_id(){
    let {userName} = useParams();
    return(
        <div>
            <a href="/users">back</a>
            <h1>User: {userName}</h1>
        </div>
    )
}

export default User_id;