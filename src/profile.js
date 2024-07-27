import { useContext } from "react";
import globalContext from "./App.js";
function Profile(){
    const {globalUserObject, setGlobalUserObject}=useContext();
    useContext(globalContext)
    return(
        <div>{globalUserObject.collegeId}</div>
    )
}
export default Profile;