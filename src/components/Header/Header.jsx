import { Container } from "postcss";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Logo from "../Logo";
import LogoutBtn from "../LogoutBtn";


const Header = () => {

    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate();
    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus
        },
        {
            name: "Sign-up",
            slug: "/signup",
            active: !authStatus
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus
        },
        {
            name: "Add Posts",
            slug: "/add-posts",
            active: authStatus
        },

    ]
    return (
        <Header>
            <Container >
                <nav>
                    <div>
                        <slug path="/" >
                            <Logo width="75px" />
                        </slug>
                    </div>
                    <ul className="w-full border-2 bg-slate-900">
                        {
                            navItems.map((item) => item.active ? <li
                                onClick={() => navigate(item.slug)} key={item.name}> {item.name}  </li> : null)
                        }
                        {
                            authStatus && (
                                <li>
                                    <LogoutBtn />
                                </li>
                            )
                        }
                    </ul>
                </nav>
            </Container>
        </Header>
    )
}

export default Header