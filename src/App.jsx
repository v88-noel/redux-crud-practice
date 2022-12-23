import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./features/Users";
import UserItem from "./components/user_item";
import UserModal from "./modals/user_modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.scss";

function App() {

  const dispatch = useDispatch();
  const user_list = useSelector(state => state.users.value);

  const handleSubmit = (event) =>{

    let user_name = event.target.search_value.value;

    event.target.search_value.value = "";
    event.preventDefault();
  }

  return (
    <>

      <div className="App">
        <form className="search_bar" onSubmit={handleSubmit}>
          <button><span></span> Add User</button>
          <input type="text" name="search_value" placeholder="Search..." />
          <button type="submit">Submit</button>
        </form>
        <ul className="users_container">
          {
            user_list.slice(0).reverse().map((user)=>{
              return (<UserItem key={user.id} user_id={user.id} name={user.fullname} username={user.username} image_link={user.avatar}/>)
            })
          }
        </ul>
      </div>
      {/* <UserModal/> */}
    </>
  );
}

export default App;
