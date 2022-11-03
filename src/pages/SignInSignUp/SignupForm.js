import React from "react";
import Button from "../../components/Button";
import SignUpInLayout from "../../layouts/SignUpInLayout";
import { Link } from "react-router-dom";
import "./style.css";
export default function SignupForm(props) {
  return (
    <>  
      {" "}
      <div class="flex flex-wrap" style={{ height: "100vh" }}>
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
          <div className="flex justify-center allbtn">
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
          
          </div>
          <div className="flex justify-center mt-1">
            <h4>Sign In</h4>
            </div>
         
          <div className="flex justify-center allbtn">
            <form>
              
              <div class="mb-6">
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 inputwidth"
                  placeholder="UserName or Name"
                  required
                />
              </div>

              <div class="mb-6">
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 inputwidth"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="mb-6">
                <input
                  type="password"
                  id="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 inputwidth"
                  placeholder="Password"
                  required
                />
              </div>
              <div class="mb-6">
                <input
                  type="password"
                  id="confirm_password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 inputwidth"
                  placeholder="Confirm Password"
                  required
                />
              </div>

              <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 inputwidth"
                    required
                  />
                </div>
                <label
                  for="remember"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Remember me{" "}
                  <Link to="/"
                    class="text-blue-600 hover:underline dark:text-blue-500 m-10"
                  >
                    Forgot Password  
                  </Link>
                  .
                </label>
              </div>
              <Button
                title={"Sign In"}
                bgColor={'btn-bg-green'} 
                bgColorHover={''}
                size={'px-28 h-10'}
                w-full
              />
             <div className="mt-2">
             <label
                  for="alreadyAcc"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400 "
                >
                  Already have an account?{" "}
                  <Link class="text-blue-600 hover:underline dark:text-blue-500" to="/signin">Sign in</Link>
                  
                </label>
             </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
