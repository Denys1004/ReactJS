function Header(props){
    let headerData=props.data;
    const listItem = headerData.map(item => <li key={item.id}><a href={item.link}>{item.text}</a></li>) // перебираем с пом map
    return(
        <nav>
            <ul>
                {listItem}
            </ul>
        </nav>
    )
}

export default Header;