import React from "react";
import { useDispatch } from "react-redux";
import { BiChevronDown, BiUser } from "react-icons/bi";
import { logout } from "../../redux-toolkit/features/userSlice";
import { Link, useNavigate } from "react-router-dom";

function MyAccDropdown({user}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const myAccountUI = () => {
    return user && Object.keys(user).length ? (
      <>
        <button
          className="btn dropdown-toggle myAccount__btn border-0"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Hi {user.name}!
          <BiChevronDown className="myAccount__icon   angle-down ms-2" />
        </button>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="#">
              Action
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Another action
            </Link>
          </li>
          <hr className="mt-1 mb-1" />
          <li>
            <button
              className="logOut btn text-center w-100"
              onClick={() => dispatch(handleLogout())}
            >
              Sign Out
            </button>
          </li>
        </ul>
      </>
    ) : (
      <>
        {/*<!-- login --> */}

        <Link to="/login" className="item login text-white">
          Login
          <BiUser className="text-white icon"/>
        </Link>
      </>
    );
  };

  return (
    <div className=" myAccount dropdown pointer-event align-items-center d-flex">
      {myAccountUI()}
    </div>
  );
}

export default MyAccDropdown;
