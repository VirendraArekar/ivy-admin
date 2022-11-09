import React from "react";
import Button from "../../components/Button";
import SignUpInLayout from "../../layouts/SignUpInLayout";
import { Link } from "react-router-dom";
import "./style.css";
export default function SignInForm(props) {
  return (
    <>  
      {" "}
      <div className="flex flex-wrap h-full">
        <SignUpInLayout></SignUpInLayout>

        <div class="flex-auto">
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
          {/* <div className="flex justify-center allbtn">
            <div className="flex_btn">
              <Button title={"Admin"} />
            </div>
            <div className="flex_btn">
              <Button
                title={"Counsellor"}
                bgColor={"btn-bg-green"}
                bgColorHover={""}
              />
            </div>
            <div className="flex_btn">
              <Button
                title={"Branch"}
                bgColor={"bg-orange-500"}
                bgColorHover={"hover:bg-orange-600"}
              />
            </div>
          </div> */}
          <div className="flex justify-center  mt-1">
            <h4>Sign In</h4>
            </div>
          <div className="flex justify-center allbtn">
            <form>
              
              <div class="mb-6">
                <input
                  type="text"
                  id="name"
                  className=" border-b-2 text-black-900 text-sm  p-2.5  dark:placeholder-black-400 dark:text-white  inputwidth"
                  placeholder="UserName or Email"
                  required
                />
              </div>

              
              <div class="mb-6">
                <input
                  type="password"
                  id="password"
                  className=" border-b-2 text-black-900 text-sm  p-2.5  dark:placeholder-black-400 dark:text-white  inputwidth"
                  placeholder="Password"
                  required
                />
              </div>
              

             
              <div className="mb-6">
                <div className="flex justify-between h-2">
                  <div>
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-3 h-3 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-500 dark:border-gray-400 dark:focus:ring-blue-400 dark:ring-offset-gray-600 "
                    required
                  /><span className="text-xs">  Remember me</span>
               
               
                  {/* <label
                    for="remember"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  {" "}
                  </label> */}
                  </div>
                
                 <div>
                 <Link to="/"
                      className="text-black-600 hover:underline dark:text-black-500 mt-12 text-xs"
                    >
                      Forgot Password  
                    </Link>
                    .
                 </div>
                  
                </div>
              </div>
              <div className="flex justify-center allbtn">
              <Link to="/dashboard"><Button
                title={"Sign In"}
                bgColor={'btn-bg-green'} 
                bgColorHover={''}
                size={'px-28 h-10 w-50'}
                
              /></Link>
              </div>
             <div className="mt-2 flex justify-center allbtn">
             <label
                  for="alreadyAcc"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400 "
                >
                  Don't have an account?{" "}
                  <Link class="text-blue-600 hover:underline dark:text-blue-500" to="/dashboard">SignUp</Link>
                  
              </label>

             </div>
             <div className="flex justify-center allbtn mt-3 ">

             <Link class="text-blue-400 text-xs hover:underline dark:text-blue-400" to="/#">Terms of Use.Privacy policy</Link>
             </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
