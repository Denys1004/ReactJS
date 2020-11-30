import { Link} from "react-router-dom";

function Header(props){
    let headerData=props.data;
    const listItem = headerData.map(item => <li key={item.id}><Link to={item.link}>{item.text}</Link></li>)
    return(
        <nav>
            <ul>
                {listItem}
            </ul>
        </nav>
    )
}

export default Header;
