import React from 'react';
import { Link, withRouter } from "react-router-dom";
import './Navigation.css';

function Navigation(props) {
  return (
    <div>
      <nav>
        <div>
          <ul>
            <li className="flowrSpotLi">

              <Link className="Link" to="/">
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.4348 6.22379C19.6087 6.32791 19.7165 6.51459 19.7197 6.71732C19.7513 8.72673 18.9895 10.6208 17.6589 11.9974C19.0067 13.3832 19.7513 15.2749 19.7197 17.2826C19.7165 17.4854 19.6087 17.6721 19.4348 17.7762C18.2434 18.4893 16.9145 18.8534 15.5883 18.8534C14.9966 18.8534 14.4055 18.7802 13.8273 18.6339C13.3005 20.4746 12.041 22.0815 10.2849 23.0589C10.1963 23.1082 10.0981 23.1328 10 23.1328C9.90185 23.1328 9.80365 23.1082 9.71506 23.0589C7.95894 22.0815 6.69947 20.4746 6.17266 18.6339C5.59445 18.7802 5.00342 18.8534 4.41162 18.8534C3.08553 18.8534 1.75656 18.4893 0.565178 17.7762C0.391212 17.6721 0.2834 17.4854 0.280235 17.2827C0.248594 15.2749 0.99332 13.3832 2.34104 11.9975C1.01043 10.6209 0.248594 8.72679 0.280235 6.71738C0.283459 6.51465 0.391272 6.32797 0.565178 6.22384C2.28959 5.19172 4.3109 4.90443 6.16832 5.36849C6.69455 3.50849 7.96041 1.91773 9.715 0.941208C9.89213 0.842595 10.1077 0.842595 10.2849 0.941208C12.0395 1.91773 13.3054 3.50849 13.8316 5.36855C15.6891 4.90443 17.7103 5.19172 19.4348 6.22379ZM12.5946 7.1191C12.5084 7.1689 12.4236 7.22111 12.3399 7.27513C13.0945 7.65031 13.747 8.20086 14.2438 8.87334L14.8271 8.5366C15.1073 8.3747 15.4657 8.47086 15.6275 8.75105C15.7893 9.0313 15.6933 9.38966 15.413 9.55144L14.8312 9.88736C15.1153 10.5346 15.2734 11.2491 15.2734 12.0001C15.2734 12.1129 15.2694 12.2247 15.2624 12.3358C15.3508 12.2905 15.4382 12.2432 15.5243 12.1936C17.3322 11.1497 18.4687 9.20662 18.5447 7.06677C16.6536 6.06254 14.4026 6.07525 12.5946 7.1191ZM11.0032 8.02302C10.682 7.94199 10.3461 7.89845 10 7.89845C9.65389 7.89845 9.31779 7.94199 8.99646 8.02308C8.98932 8.0249 8.98217 8.02654 8.97496 8.02812C7.20772 8.48451 5.89844 10.0922 5.89844 12C5.89844 14.2616 7.73834 16.1016 10 16.1016C12.2616 16.1016 14.1015 14.2616 14.1015 12C14.1015 10.0923 12.7923 8.48457 11.0252 8.02818C11.0178 8.0266 11.0105 8.0249 11.0032 8.02302ZM18.5449 16.9334C18.4901 15.343 17.8595 13.8622 16.7764 12.7707C16.5638 12.928 16.3419 13.0746 16.1102 13.2083C15.7495 13.4166 15.3703 13.5926 14.9799 13.7346C14.9351 13.8629 14.8854 13.989 14.8311 14.1127L15.4129 14.4486C15.6932 14.6104 15.7892 14.9687 15.6274 15.249C15.5189 15.4369 15.322 15.5421 15.1195 15.5421C15.0201 15.5421 14.9193 15.5167 14.827 15.4634L14.2437 15.1266C14.1636 15.235 14.0796 15.3404 13.9916 15.4423C14.0642 15.8524 14.1015 16.2699 14.1015 16.6875C14.1015 16.9549 14.0854 17.2204 14.0556 17.4831C15.5426 17.8755 17.1401 17.6812 18.5449 16.9334ZM10 21.8666C11.8152 20.731 12.9297 18.7752 12.9297 16.6875C12.9297 16.5876 12.9269 16.4876 12.9218 16.3877C12.2384 16.8444 11.4428 17.1455 10.5859 17.2407V17.9121C10.5859 18.2357 10.3236 18.498 10 18.498C9.67639 18.498 9.41406 18.2357 9.41406 17.9121V17.2407C8.55719 17.1455 7.7616 16.8443 7.07816 16.3877C7.07312 16.4875 7.07031 16.5875 7.07031 16.6875C7.07025 18.7751 8.18482 20.7309 10 21.8666ZM5.94432 17.4832C5.91443 17.2204 5.89838 16.955 5.89838 16.6875C5.89838 16.2699 5.9357 15.8525 6.0083 15.4423C5.92035 15.3405 5.83633 15.2351 5.75629 15.1267L5.17299 15.4635C5.0807 15.5168 4.97998 15.5421 4.88061 15.5421C4.67811 15.5421 4.48117 15.437 4.3726 15.249C4.21076 14.9688 4.3068 14.6104 4.58705 14.4486L5.16883 14.1127C5.11457 13.9891 5.06488 13.8631 5.02006 13.7347C4.62959 13.5926 4.25043 13.4166 3.88973 13.2083C3.65811 13.0746 3.43621 12.928 3.22363 12.7708C2.14041 13.8622 1.50994 15.343 1.4551 16.9335C2.85983 17.6812 4.45738 17.8754 5.94432 17.4832ZM1.45527 7.06671C1.53115 9.20656 2.66764 11.1496 4.47566 12.1935C4.56174 12.2432 4.64916 12.2904 4.73758 12.3358C4.73055 12.2247 4.72656 12.1129 4.72656 12.0001C4.72656 11.2491 4.88465 10.5346 5.16877 9.88736L4.58699 9.55144C4.30674 9.38961 4.2107 9.03131 4.37254 8.75099C4.53432 8.4708 4.89268 8.37476 5.17293 8.53654L5.75623 8.87334C6.25299 8.20086 6.90549 7.65031 7.66006 7.27513C7.57645 7.22111 7.4916 7.1689 7.40535 7.1191C5.59732 6.07525 3.34621 6.06259 1.45527 7.06671ZM9.99994 2.13318C8.65 2.97588 7.68291 4.26236 7.27926 5.74613C7.52172 5.8516 7.75967 5.97043 7.99129 6.1042C8.35193 6.31238 8.69389 6.55267 9.01211 6.81974C9.14441 6.79455 9.27842 6.77433 9.414 6.75927V6.08791C9.414 5.76429 9.67639 5.50197 9.99994 5.50197C10.3236 5.50197 10.5859 5.76429 10.5859 6.08791V6.75927C10.7215 6.77433 10.8555 6.79455 10.9878 6.81974C11.3059 6.55273 11.6479 6.31238 12.0086 6.1042C12.2402 5.97049 12.4781 5.85166 12.7206 5.74613C12.317 4.26236 11.3499 2.97593 9.99994 2.13318Z" fill="#E4988D"/>
                </svg>
                <span></span>
                FlowrSpot
              </Link>
            </li>
            <li>
              <Link className="Link" to="/favourites">Favourites</Link>
            </li>
            <li>
              <Link className="Link" to="/sightings">Latest Sightings</Link>
            </li>
            <li>
              <Link className="Link" to="/flowers">Flowers</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}



export default withRouter(Navigation);
