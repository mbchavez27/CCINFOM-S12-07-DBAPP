import CustomerHero from '../components/CustomerHero'
import CustomerDashboard from '../components/CustomerDashboard'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { useCookies } from 'react-cookie'

function ClientView() {
  const [cookies] = useCookies(['user'])
  console.log(cookies.user)
  return (
    <>
      <NavBar />
      <CustomerHero
        firstName={cookies.user.data.first_name}
        lastName={cookies.user.data.last_name}
      />
      <CustomerDashboard />
      <Footer />
    </>
  )
}

export default ClientView
