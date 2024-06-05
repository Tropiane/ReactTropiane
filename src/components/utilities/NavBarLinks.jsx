function NavBarLinks(props){
    return(
        <>
        <a href={props.link} className="italic hover:not-italic" >{props.tContent}</a>
        </>
    )
}

export default NavBarLinks;