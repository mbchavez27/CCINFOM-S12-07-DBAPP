import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import StaffDashboard from '../components/StaffDashboard'
import StaffHero from '../components/StaffHero'
import { useCookies } from 'react-cookie'

function StaffView() {
  const [cookies] = useCookies(['user'])

  const firstName = cookies.user?.data.first_name || ''
  const lastName = cookies.user?.data.last_name || ''

  console.log(cookies.user)

  return (
    <>
      <NavBar />
      <StaffHero firstName={firstName} lastName={lastName} />
      <StaffDashboard />
      <Footer />
    </>
  )
}

export default StaffView
