
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from 'react-router-dom'
// import '../CSS/unauthorized.css'
import { getUserDetails } from "../../redux/postReducer/UserPost";
import { useEffect } from "react";

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const { token, userInfo } = useSelector((state) => state.user)
  useEffect(() => {
    if (token !== null && userInfo === null) {
      dispatch(getUserDetails());
    }
  }, [userInfo, dispatch, token]);
  // show unauthorized screen if no user is found in redux store
  if (!userInfo && !token) {
    return (
      <div className='unauthorized'>
        <div class="wrapper">
          <div class="box">
            <h1>404</h1>
            <p>Sorry, You're Unauthorized.</p>
            <p>&#58;&#40;</p>
            <p><a href="/">Let me try again!</a></p>
          </div>
        </div>

      </div>
    )
  }

  return <Outlet />
}

export default ProtectedRoute