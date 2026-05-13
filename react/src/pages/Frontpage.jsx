import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../helpers/sanityClient";

export default function Frontpage({ loggedInUser }) {
    const [orders, setOrders] = useState([]);
    const isSuperAdmin = loggedInUser?.role === 'super';

    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1).toISOString();

    useEffect(() => {
        const fetchOrders = async () => {
            const query = `*[_type == "order" && _createdAt >= $startOfMonth && _createdAt < $endOfMonth]{
                orderid,
                status,
                _createdAt,
                products[]{
                    quantity,
                    product->{
                        price,
                        productname
                    }
                }
            }`
            const fetchedOrders = await sanityClient.fetch(query, { startOfMonth, endOfMonth })

            const ordersWithTotals = fetchedOrders.map(order => {
                const totalQuantity = order.products.reduce(
                    (sum, p) => sum + p.quantity, 0
                )
                const totalPrice = order.products.reduce(
                    (sum, p) => sum + p.quantity * p.product.price, 0
                )
                return { ...order, totalQuantity, totalPrice }
            })

            setOrders(ordersWithTotals)
        }
        fetchOrders()
    }, [])

    const totalProductsThisMonth = orders.reduce((sum, order) => sum + order.totalQuantity, 0)
    const totalRevenueThisMonth = orders.reduce((sum, order) => sum + order.totalPrice, 0)

    return (
        <div id="top">
            <section id="active-orders">
                <h2>Active Orders This Month</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.orderid}>
                                <td><Link to={`/order/${order.orderid}`}>{order.orderid}</Link></td>
                                <td>{order.status}</td>
                                <td>{new Date(order._createdAt).toLocaleString()}</td>
                                <td>${order.totalPrice.toFixed(2)} ({order.totalQuantity} products)</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section id="statistics">
                <h2>Monthly stats</h2>
                <ul>
                    <li>Total orders: {orders.length}</li>
                    <li>Total products sold: {totalProductsThisMonth}</li>
                    {isSuperAdmin && (
                        <li>Total revenue: ${totalRevenueThisMonth.toFixed(2)}</li>
                    )}
                </ul>
                {!isSuperAdmin && (
                    <p><em>Revenue figures are visible to super admins only.</em></p>
                )}
            </section>
        </div>
    )
}
