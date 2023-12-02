import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => dispatch(logout())).finally(() => window.location.reload());
  };

  return (
    <button className="inline-block px-6 py-2 duration-200 text-[#a49d91] hover:text-white rounded-full"
        onClick={logoutHandler}>
      Logout
    </button>
  );
}

export default LogoutBtn;
