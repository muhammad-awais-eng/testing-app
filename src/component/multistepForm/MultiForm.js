import React, { useEffect, useState } from "react";
import "./multi.css";
function MultiForm() {
  const [formStepsNu, setformstepNu] = useState(0);
  const [progressActive, setprogressActive] = useState(0);
  const [progress, setprogress] = useState(0);

  const nextbtn = (e) => {
    setformstepNu((prev) => prev + 1);
  };
  const prevBtn = (e) => {
    setformstepNu((prev) => prev - 1);
  };

  useEffect(() => {
    const progressActive = document.getElementsByClassName(
      "progress-step-active"
    ).length;
    setprogressActive(progressActive);
    const progress = document.getElementsByClassName("progress-step").length;
    setprogress(progress);
    console.log(progressActive, progress, formStepsNu, "lo ");
  }, [nextbtn, prevBtn]);

  return (
    <div>
      <form action="#" className="form">
        <h1 className="text-center">Menu Item</h1>
        {/* <!-- Progress bar --> */}
        <div className="progressbar">
          <div
            className="progress"
            id="progress"
            style={{
              width: ((progressActive - 1) / (progress - 1)) * 95 + "%",
            }}
          ></div>

          <div
            className="progress-step progress-step-active"
            data-title="step1"
          ></div>
          <div
            className={
              "progress-step " +
              (formStepsNu >= 1 ? "progress-step-active" : "")
            }
            data-title="step2"
          ></div>
          <div
            className={
              "progress-step " +
              (formStepsNu >= 2 ? "progress-step-active" : "")
            }
            data-title="step3"
          ></div>
          <div
            className={
              "progress-step " +
              (formStepsNu >= 3 ? "progress-step-active" : "")
            }
            data-title="step4"
          ></div>
        </div>

        {/* <!-- Steps --> */}
        <div
          className={
            "form-step " + (formStepsNu === 0 ? "form-step-active" : "")
          }
        >
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className="input-group">
            <label htmlFor="position">Position</label>
            <input type="text" name="position" id="position" />
          </div>
          <div className="">
            <button className="btn btn-next width-50 ml-auto" onClick={nextbtn}>
              Next
            </button>
          </div>
        </div>
        <div
          className={
            "form-step " + (formStepsNu === 1 ? "form-step-active" : "")
          }
        >
          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" id="phone" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="btns-group">
            <a href="#" className="btn btn-prev" onClick={prevBtn}>
              Previous
            </a>
            <a href="#" className="btn btn-next" onClick={nextbtn}>
              Next
            </a>
          </div>
        </div>
        <div
          className={
            "form-step " + (formStepsNu === 2 ? "form-step-active" : "")
          }
        >
          <div className="input-group">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" name="dob" id="dob" />
          </div>
          <div className="input-group">
            <label htmlFor="ID">National ID</label>
            <input type="number" name="ID" id="ID" />
          </div>
          <div className="btns-group">
            <a href="#" className="btn btn-prev" onClick={prevBtn}>
              Previous
            </a>
            <a href="#" className="btn btn-next" onClick={nextbtn}>
              Next
            </a>
          </div>
        </div>
        <div
          className={
            "form-step " + (formStepsNu === 3 ? "form-step-active" : "")
          }
        >
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
          </div>
          <div className="btns-group">
            <a href="#" className="btn btn-prev" onClick={prevBtn}>
              Previous
            </a>
            <input type="submit" value="Submit" className="btn" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default MultiForm;
