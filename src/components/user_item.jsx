import "./user_item.scss";

function UserItem(props){

    const handleClick = (event) =>{
        

        event.preventDefault();
    } 

    return(
        <li className="user_item" onClick={handleClick}>
            <img src={props.image_link} alt="" />
            <div className="user_info">
                <p>{props.name}</p>
                <p>{props.username}</p>
            </div>
        </li>
    )
}

export default UserItem;