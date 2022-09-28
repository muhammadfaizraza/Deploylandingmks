import Layout from '../Components/Reuseable/layout'
import { useSelector } from 'react-redux'

const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.user)

  return (
    <div>
    <Layout />
      <span>
        Welcome <strong>{userInfo?.user.FirstName}!</strong> You can view this page
        because you're logged in
      </span>
    </div>
  )
}

export default ProfileScreen