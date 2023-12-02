import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components/index";
import "./App.css";
import { Outlet } from "react-router-dom";
import service from "./appwrite/config";
import { setPost } from "./store/postSlice";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
          service.getPosts().then((posts) => {
            if (posts) dispatch(setPost(posts.documents));
          });
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className=" min-h-screen flex flex-wrap content-between bg-[#131516]">
      <div className="w-full block">
        <Header />
        {!loading ? (
          <main className="min-h-[300px]">
            <Outlet />
          </main>
        ) : (
          <Loading />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
