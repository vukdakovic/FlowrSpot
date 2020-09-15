import React from 'react';
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <nav>
        <div>
          <Link to="/">
            FlowrSpot
          </Link>
          <div>
            <ul>
              <li>
                <Link to="/">
                  Home
                  <span></span>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
