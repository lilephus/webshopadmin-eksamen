import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../helpers/sanityClient'

export default function Customers() {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        const fetchCustomers = async () => {
            const query = `*[_type == "customer"] | order(lastname, firstname){
                _id, firstname, lastname, city, email
            }`
            const data = await sanityClient.fetch(query)
            setCustomers(data)
        }
        fetchCustomers()
    }, [])

    return (
        <div>
            <h1>Customer Management</h1>
            {customers.length === 0 ? (
                <p>No customers.</p>
            ) : (
                <ul>
                    {customers.map(customer => (
                        <li key={customer._id}>
                            <Link to={`/customer/${customer._id}`}>
                                {customer.firstname} {customer.lastname}
                            </Link>
                            {' — '}{customer.city}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
