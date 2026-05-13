import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import sanityClient from './helpers/sanityClient'
import Layout from './pages/Layout'
import Frontpage from './pages/Frontpage'
import Order from './pages/Order'
import Customers from './pages/Customers'
import CustomerDetail from './pages/CustomerDetail'
import SearchResults from './pages/SearchResults'
import Show404 from './components/show404'

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const query = `*[_type == "admin"][0]{ _id, firstname, lastname, email, role }`
        const user = await sanityClient.fetch(query)
        setLoggedInUser(user)
      } catch (error) {
        console.error('Error fetching logged in user:', error)
      }
    }
    fetchUser()
  }, [])

  return (
    <Routes>
      <Route element={<Layout loggedInUser={loggedInUser} />}>
        <Route index path="/" element={<Frontpage loggedInUser={loggedInUser} />} />
        <Route path="/order/:orderId" element={<Order />} />
        <Route path="/crm" element={<Customers />} />
        <Route path="/customer/:id" element={<CustomerDetail />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="*" element={<Show404 />} />
      </Route>
    </Routes>
  )
}

export default App
