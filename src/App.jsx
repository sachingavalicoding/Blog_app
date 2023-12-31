import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import authSerivce from "./server/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
const App = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        // check current user login or not 
        authSerivce.getCurrentUser().
            then((userData) => {
                if (userData) {
                    dispatch(login({ userData }))

                }
                else {
                    dispatch(logout())
                }
            }).
            finally(() => setLoading(false))

    }, [])

    if (loading) {
        return <div className="bg-black h-screen">
            <h1> Loading </h1>
        </div>
    }
    else {
        return <div className="min-h-screen bg-slate-300 flex flex-wrap content-between ">
            <div className="w-full block">
                <Header />
                <main>
                    {/* <Outlet />  */}

                </main>
                <Footer />
            </div>
        </div>
    }

}

export default App