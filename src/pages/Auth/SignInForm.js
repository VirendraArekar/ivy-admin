import React, { useState,useEffect } from "react";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import SignUpInLayout from "../../layouts/SignUpInLayout";
import { Link ,useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../features/Auth/authAPI"
import { Controller, useForm } from "react-hook-form";
import { selectAuth } from "../../features/Auth/authSlices";
// import { loginReq } from "../../features/Auth/fetchApi";
import "./style.css"; 

export default function SignInForm() {
  const navigateTo = useNavigate();
  const token = localStorage.getItem('token')
  const userType = localStorage.getItem('userType')
  const { state } = useLocation();
  // const {  error, isAuthenticated } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const [username, setName] = useState("")
  const [password, setPassword] = useState("")

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (form) => {
    console.log(form)
    dispatch(loginUser({ ...form }));
  };

  // useEffect(() => {
  //   if (isAuthenticated) return navigateTo(state?.path || "/");
    
  // }, [token, isAuthenticated]);

  // const alert = (msg) => <div className="text-xs text-red-500">{msg}</div>;

  // const formSubmit = async (event) => {
  //   try {
  //     let responseData = await loginUser({
  //       username: username,
  //       password: password,  
  //     });
  //     console.log(responseData, "RESPONSSE");
  //     if (responseData.error) {
  //       alert("Wrong Credential")
  //     } else if (responseData.token) {
       
  //       localStorage.setItem("jwt", JSON.stringify(responseData));
  //       window.location.href = "/dashboard";
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const formSubmit=async(event)=>{
  //   event.preventDefault();
  //   const response=await fetch('http://localhost:3001/api/v1/auth/signin',{
  //     method:'POST',
  //     headers:{  
  //       "Content-Type":'application/json',
  //     },
  //     body:JSON.stringify({username,password}),   
  //   })
  //   console.log(response,"Response")
  //   const data =await response.json()  
  //   if (data.user){
  //     localStorage.setItem('token',data.user)
  //     alert('Login Successful')
  //     window.location.href = "/dashboard";
  //   }else{
  //     alert('wrong User Credentials')
  //   }
  // }

  return ( 
    <> 
      {" "}
      <div className="flex flex-wrap h-full">
        <SignUpInLayout></SignUpInLayout>
        {/* {error && (
              <Alert severity="error">Login Failed! Try Again {error}</Alert>
            )} */}
        <div className="flex-auto">
          <div className="flex">
            <img
              src={require("../../assets/images/logo2.png")}
              alt=""
              style={{
                width: "4rem",
                margin: "auto",
                marginTop: "2rem", 
              }}
            />
          </div>
          <div className="flex justify-center  mt-1">
            <h4>Sign In</h4>
          </div>
          <div className="flex justify-center allbtn">
            <form>
              <div className="mb-6">
              {/* <Controller
              name={"username"}
              control={control}
              render={({ field: { value } }) => (
                <input
                  className=" border-b-2 text-black-900 text-sm  p-2.5  dark:placeholder-black-400 dark:text-white  inputwidth"
                  
                  variant="standard" value={value} onChange={(e)=> setName(e.target.value)}/>
              )}
                /> */}

            <Controller
                  name="username"
                  control={control}
                 
                  render={({ field: { onChange, value } }) => (
                    <input
                      className=" border-b-2 text-black-900 text-sm  p-2.5  dark:placeholder-black-400 dark:text-white  inputwidth"
                      label="UserName or Email"
                      id="username"
                      variant="standard"
                      name="username"
                      type="text"
                      required
                      onChange={onChange}
                      value={value}
                      error={!!errors.username}
                      helperText={errors.username ? errors.username?.message : null}
                    />
                  )}
                />
              </div> 
             
              <Controller
                  name="password"
                  control={control}
                 
                  render={({ field: { onChange, value } }) => (
                    <input
                      className=" border-b-2 text-black-900 text-sm  p-2.5  dark:placeholder-black-400 dark:text-white  inputwidth"
                      label="Password"
                      id="password"
                      variant="standard"
                      name="password"
                      type="password"
                      required
                      onChange={onChange}
                      value={value}
                      error={!!errors.password}
                      helperText={errors.password ? errors.password?.message : null}
                    />
                  )}
                />

              <div className="mb-6">
                <div className="flex justify-between h-2">
                  <div>
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-3 h-3 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-500 dark:border-gray-400 dark:focus:ring-blue-400 dark:ring-offset-gray-600 "
                      
                    />
                    <span className="text-xs"> Remember me</span>
                  </div>

                  <div>
                    <Link
                      to="/"
                      className="text-black-600 hover:underline dark:text-black-500 mt-12 text-xs"
                    >
                      Forgot Password
                    </Link>
                    .
                  </div>
                </div>
              </div>
              <div className="flex justify-center allbtn">
                <Button
                  title={"Sign In"}
                  bgColor={"btn-bg-green"}
                  bgColorHover={""}
                  size={"px-28 h-10 w-50"}
                  variant="contained"
                  onClick={handleSubmit(onSubmit)}
                />
              </div>
              <div className="mt-2 flex justify-center allbtn">
                <label
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400 "
                >
                  Don't have an account?{" "}
                  <Link
                    className="text-blue-600 hover:underline dark:text-blue-500"
                    variant="contained"
                 
                  // disabled={loading}
                  >
                    SignUp
                  </Link>
                </label>
              </div>
              <div className="flex justify-center allbtn mt-3 ">
                <Link
                  className="text-blue-400 text-xs hover:underline dark:text-blue-400"
                  to="/#"
                >
                  Terms of Use.Privacy policy
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
