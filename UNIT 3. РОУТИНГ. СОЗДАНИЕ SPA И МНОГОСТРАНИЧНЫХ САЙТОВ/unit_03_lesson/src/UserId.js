import { useParams } from "react-router-dom";

function UserId() {
    let {userName} = useParams();
    return (
        <div>
            <a href="/users">Назад</a>
            <h1>User:  {userName}</h1>
        </div>
    );
}

export default UserId;