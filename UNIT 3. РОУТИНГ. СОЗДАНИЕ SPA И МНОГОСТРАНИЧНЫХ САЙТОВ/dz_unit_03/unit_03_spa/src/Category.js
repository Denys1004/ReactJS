import {useRouteMatch} from "react-router-dom";

function Category(props){
    let match = useRouteMatch();
    return(
        <div>
            <h1>Category</h1>
            <ul>
                <li><a href={`${match.url}/notebook`}>Ноутбуки</a></li>
                <li><a href={`${match.url}/monitor`}>Мониторы</a></li>
                <li><a href={`${match.url}/cellphone`}>Мобильные телефоны</a></li>
            </ul>
        </div>
    )
}

export default Category;