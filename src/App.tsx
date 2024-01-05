import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigninForm from "./auth/Forms/SigninForm";
import SignupForm from "./auth/Forms/SignupForm";
import AuthLayout from "./auth/AuthLayout"
import RootLayout from "./root/RootLayout"
import { Home } from "./root/pages/index";
const App = () => {
    return (
        <main className="flex h-screen">
            <BrowserRouter>
                <Routes>
                    {/* public routes  */}
                    <Route element={<AuthLayout />}>
                        <Route path="/sign-in" element={<SigninForm />} />
                        <Route path="/sign-up" element={<SignupForm />} />
                    </Route>

                    {/*  Private Routes  */}
                    {/*  Create an Route for Root all Pages of Root dir  */}
                    <Route element={<RootLayout />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </main>
    );
};

export default App;
