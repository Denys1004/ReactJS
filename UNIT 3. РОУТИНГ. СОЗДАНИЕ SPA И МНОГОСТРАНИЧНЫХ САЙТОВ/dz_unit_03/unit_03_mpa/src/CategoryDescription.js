import {useParams} from "react-router-dom";

function CategoryDescription(){
    let {catDesc} = useParams();
    return(
        <>            
            <a href="/cat">Назад</a>
            <h1>Category: {catDesc}</h1>
        </>
    )
}

export default CategoryDescription;