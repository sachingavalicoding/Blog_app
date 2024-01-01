import { useDispatch } from "react-redux"
import authSerivce from "../server/auth"
import { logout } from "../store/authSlice"
const LogoutBtn = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        // method logout is use to logout user 
        authSerivce.logout().then(() => dispatch(logout()))
    }
    return (
        <button onClick={handleLogout} className="px-2 py-4 text-2xl ">
            Logout
        </button>
    )
}

export default LogoutBtn