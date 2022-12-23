function UserModal(){
    return(
        <div className="modal user_view_modal">
          <div className="modal_content">
            <img src="https://robohash.org/adetat.png?size=50x50&set=set1" alt="avatar" />
            <div className="user_info">
              <p>Name: Ardyce Arnau</p>
              <p>Username: aarnau2k</p>
            </div>
            <div className="settings">
              <button type="button" className="delete_button">Delete</button>
              <button type="button" className="edit_button">Edit</button>
              <button type="button" className="close_button">Close</button>
            </div>
          </div>
      </div>
    )
}

export default UserModal;