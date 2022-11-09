import React,{useState}from "react";
import Button from "../../components/Button";
import SignUpInLayout from "../../layouts/SignUpInLayout";
import { Link } from "react-router-dom";
import "./style.css";
export default function SignupForm(props) {

  const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [place, setPlace] = useState('')
    const [addedBy, setAddedBy] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();
        const values = {
            name,
            date,
            place,
            addedBy
        }
        console.log("values --", values)
    }
    const handleClick = () => {
        setName('')
        setDate('')
        setPlace('')
        setAddedBy('')
    }
  return (
    <>  
      {" "}
      <div className="flex flex-wrap" style={{ height: "100vh" }}>
        <SignUpInLayout></SignUpInLayout>

        <div className="flex-auto">
          <div classNameName="flex">
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
          <div className="flex justify-center mt-1">
            <h4>Sign UP</h4>
            </div>
         
          <div className="flex justify-center allbtn">
            <form>
              
              <div class="mb-6">
             
                <input
                  type="text"
                  id="name"
                  className=" border-b-2 text-black-900 text-sm   p-2.5  dark:placeholder-black-400   inputwidth"
                  placeholder="UserName or Name"
                  required
                />
              </div>

              <div className="mb-6">
                <input
                  type="email"
                  id="email"
                  className=" border-b-2 text-black-900 text-sm  p-2.5  dark:placeholder-black-400 dark:text-white  inputwidth"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  id="password"
                  className=" border-b-2 text-black-900 text-sm   p-2.5  dark:placeholder-black-400 dark:text-white  inputwidth"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  id="confirm_password"
                  className=" border-b-2 text-black-900 text-sm   p-2.5  dark:placeholder-black-400 dark:text-white  inputwidth"
                  placeholder="Confirm Password"
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
               
              <div className="flex items-start mb-6">
              <Button
                title={"Sign In"}
                bgColor={'btn-bg-green'} 
                bgColorHover={''}
                size={'px-28 h-10 w-full'}
              />
              </div>
             <div classNameName="mt-2">
             <label
                  for="alreadyAcc"
                  classNameName="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400 "
                >
                  Already have an account?{" "}
                  <Link className="text-blue-600 hover:underline dark:text-blue-500" to="/signin">Sign in</Link>
                  
                </label>
             </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
