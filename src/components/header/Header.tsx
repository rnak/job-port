import React from 'react';
export default () => {
    return (
      <div className="nav">
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">
            <div className="nav-title">
                <img src={require("../../logo.png")} alt=""/>
            </div>
        </div>
        <div className="nav-btn">
            <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
            </label>
        </div>
        
        <div className="nav-links">
            <a href="/">HOW IT WORKS</a>
            <a href="/">BROWSE</a>
            <a href="/">SEARCH</a>
            <a href="/">My Account</a>
        </div>
    </div>
    );
}