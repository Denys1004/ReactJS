function Header(props){
    return(
        <header>
            <h1>{props.data.sitename}</h1>
            <h2>{props.second_header}</h2>
            <Nav nav={props.data.nav}/>
        </header>
    )
}

function Nav(props){
    let data = props.nav; // сохраняем полученый обьект в переменную
    const listItem = data.map(item => <li key={item.link}><a href={item.link}>{item.text}</a></li>) // перебираем с пом map
    return(
        <nav>
            <ul>
                {listItem}
            </ul>
        </nav>
    )
}

export default Header;