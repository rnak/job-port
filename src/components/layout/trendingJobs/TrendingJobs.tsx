import React from 'react';
export default () => {
  return (
    <>
      <section className="right">
        <div className="signup-box">
          <img src={require("../../../images/signUpBox.png")} alt="" />
          <h1>Track time on Hubstaff</h1>
          <h4>Pay only for the hourly worked</h4>
          <button className="signup">Sign Up</button>
          <h6 className="blue" >Learn more...</h6>
        </div>
        <div className="trending-jobs">
          <h1>TOP JOBS</h1>
          <div className="seperator"></div>
          <div className="job-header">
            <h1>Senior Ruby on Rails engineer</h1>
            <h1>$60/hr</h1>
          </div>
          <h6 className="job-description">
            In this job you have to pay attention on almost every crap we talk about, Not just once but always
                    </h6>
          <div className="job-header">
            <h1>Senior product designer</h1>
            <h1>$45/hr</h1>
          </div>
          <h6 className="job-description">
            In this job you have to pay attention on almost every crap we talk about, Not just once but always
                    </h6>
        </div>
        <div className="trending-jobs">
          <h1>MOST VISITED THIS WEEK</h1>
          <div className="seperator"></div>
          <div className="job-header">
            <h1>Senior Ruby on Rails engineer</h1>
            <h1>$60/hr</h1>
          </div>
          <h6 className="job-description">
            In this job you have to pay attention on almost every crap we talk about, Not just once but always
                    </h6>
          <div className="job-header">
            <h1>Senior product designer</h1>
            <h1>$45/hr</h1>
          </div>
          <h6 className="job-description">
            In this job you have to pay attention on almost every crap we talk about, Not just once but always
                    </h6>
        </div>
      </section>
    </>
  )
}