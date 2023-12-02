import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button, Input, Logo } from "./index";
import { login as authLogin } from "../store/authSlice";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const login = async (data) => {
    setError("");
    try {
      setLoading(true);
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" flex items-center justify-center w-full">
      <div className="mx-auto w-[95%] sm:w-full max-w-lg bg-[#1E2022] rounded-xl p-8 sm:p-10 border border-white/10 text-white/90">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl text-white/80 font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-white/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                      value
                    ) || "Email address must be a valid address",
                },
              })}
            />

            <Input
              label="Password: "
              type="password"
              placeholder="Enter you password"
              {...register("password", {
                required: true,
              })}
            />

            <Button type="submit" className="w-full">
              {loading ? <Loading /> : "Sign in"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
