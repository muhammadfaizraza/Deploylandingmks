const NotFound = () => {
  return (
    <>
     <div className='unauthorized'>
          <div class="wrapper">
          <div class="box">
          <h1>404</h1>
          <p>Sorry, You're Unauthorized.</p>
          <p>&#58;&#40;</p>
          <p><a href="/">Let me try again!</a></p>
          </div>
          </div>
        {/* <span>
          <NavLink to='/login'>Login</NavLink>
        </span> */}
      </div>
    </>
  )
}
export default NotFound