import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout, user } = useAuth0()

    return (
       <button className="buttonNoStyle nav-item mr-3" onClick={() => logout()}>
	    Log Out
        <img src={user.picture} alt={user.name} size="30" height="30" width="30" class="avatar-user avatar avatar-small ml-3"/>
       </button>

    )
}

export default LogoutButton