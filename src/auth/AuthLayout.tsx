import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthinticated = false;
  return (
    <>
      {/*  user is authinticated means logined then hi goes on home page other wise authlayout page render  sign in or sign up page  */}
      {isAuthinticated ? (
        <Navigate to={"/"} />
      ) : (
        <div className=" w-full min-h-screen flex flex-col lg:flex-row">
          <section className="flex flex-1 justify-center items-center flex-col py-10 mt-5">
            <Outlet />
          </section>
          <img src="/assets/images/side-img.svg" alt="notfound" />
        </div>
      )}
    </>
  );
};

export default AuthLayout;
