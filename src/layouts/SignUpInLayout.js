import React from "react";

export default function Signup(props) {
  return (
    <>
      {/* <div
        class="flex flex-wrap"
        style={{ height: "100vh", overflow: "hidden" }}
      > */}
        <div class="flex-auto shrink"  style={{width:"55%"}}>
          <img
            src={require("../assets/images/bg.png")}
            alt=""
            style={{ maxWidth: 'auto', position: "relative" }}
          />

          <div
            class="flex"
            style={{ position: "absolute", left: "-10rem", bottom: "22rem" }}
          >
            <div>
              <img
                alt=""
                src={require("../assets/images/ellipse.png")}
                style={{width:' 23rem',margin:' auto',bottom: '2rem', position: "relative" }}
              />
            </div>
            <div>
              <img
                src={require("../assets/images/ellipse2.png")}
                alt=""
                style={{
                  width: "7rem",
                  margin: "auto",
                  position: "absolute",
                  top: "13rem",
                  left: "49rem",
                }}
              />
            </div>
          </div>
          <div
            class="flex"
            style={{ position: "absolute", left: "-10rem", bottom: "20rem" }}
          >
            <img
              src={require("../assets/images/signimg.png")}
              alt=""
              style={{
                width: "30rem",
                margin: "auto",
                position: "relative",
                top: "15rem",
                left: "20rem",
              }}
            />
          </div>

          <div
            class="flex"
            style={{ position: "absolute", left: "-10rem", bottom: "22rem" }}
          >
            <div>
              <img
                src={require("../assets/images/eclips.png")}
                alt=""
                style={{
                  margin:' auto',
                  position: 'absolute',
                  top: '18rem',
                  left: '6rem',
                  maxWidth: '14rem',
                }}
              />
            </div>
            <div>
              <img
                src={require("../assets/images/rect1.png")} 
                alt=""
                style={{
                  width: "7rem",
                  margin: "auto",
                  position: "relative",
                  top: "17rem",
                  left: "47rem",
                }}
              />
              <img
                src={require("../assets/images/rect2.png")}
                alt=""
                style={{
                  width: "8rem",
                  margin: "auto",
                  position: "absolute",
                  top: "19rem",
                  left: "47rem",
                }}
              />
            </div>
          </div>
        </div>
        
      {/* </div> */}
    </>
  );
}
