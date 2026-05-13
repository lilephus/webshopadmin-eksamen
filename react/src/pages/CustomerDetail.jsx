import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import sanityClient from '../helpers/sanityClient'

export default function CustomerDetail() {
    const { id } = useParams()
    const [customer, setCustomer] = useState(null)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const fetchCustomer = async () => {
            const query = `{
                "customer": *[_type == "customer" && _id == $id][0]{
                    _id, firstname, lastname, email, streetaddress, zipcode, city
                },
                "orders": *[_type == "order" && customer._ref == $id] | order(_createdAt desc){
                    _id, orderid, status, _createdAt
                }
            }`
            const result = await sanityClient.fetch(query, { id })
            setCustomer(result.customer)
            setOrders(result.orders)
        }
        fetchCustomer()
    }, [id])

    if (!customer) return <p>Loading customer...</p>

    return (
        <div>
            <p><Link to="/crm">&larr; Back to customers</Link></p>
            <h1>{customer.firstname} {customer.lastname}</h1>
            <p>{customer.email}</p>
            <p>{customer.streetaddress}, {customer.zipcode} {customer.city}</p>

            <h2>Orders ({orders.length})</h2>
            {orders.length === 0 ? (
                <p>No orders.</p>
            ) : (
                <ul>
                    {orders.map(order => (
                        <li key={order._id}>
                            <Link to={`/order/${order.orderid}`}>{order.orderid}</Link>
                            {' — '}{order.status}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
