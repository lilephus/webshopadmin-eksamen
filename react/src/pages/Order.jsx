import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../helpers/sanityClient';

const statusOptions = [
    { value: 'open', label: 'Open' },
    { value: 'being-processed', label: 'Being Processed' },
    { value: 'packed', label: 'Packed' },
    { value: 'shipped', label: 'Shipped' }
]

export default function Order() {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!orderId) return
        const fetchOrderDetails = async () => {
            const query = `*[_type == "order" && orderid == $orderId][0]{
                _id,
                orderid,
                status,
                products[]{
                    quantity,
                    product->{
                        productname,
                        price,
                        "imageUrl": image.asset->url
                    }
                }
            }`
            const data = await sanityClient.fetch(query, { orderId: String(orderId) })
            setOrder(data)

            const total = data?.products.reduce(
                (sum, p) => sum + p.quantity * p.product.price, 0
            )
            setTotalPrice(total)
        }
        fetchOrderDetails()
    }, [orderId])

    const handleStatusChange = async (event) => {
        const newStatus = event.target.value
        setSaving(true)
        await sanityClient
            .patch(order._id)
            .set({ status: newStatus })
            .commit()
        setOrder({ ...order, status: newStatus })
        setSaving(false)
    }

    return (
        <div>
            <h1>Order Details</h1>
            <p>Order ID: {orderId}</p>
            {order && (
                <div>
                    <p>
                        <label>
                            Status:{' '}
                            <select
                                value={order.status}
                                onChange={handleStatusChange}
                                disabled={saving}
                            >
                                {statusOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </label>
                        {saving && <span> Saving…</span>}
                    </p>

                    <h2>Products:</h2>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.products.map((product, index) => (
                                <tr key={index}>
                                    <td>
                                        <img
                                            src={product.product.imageUrl || `https://placehold.co/50x50?text=${encodeURIComponent(product.product.productname)}`}
                                            alt={product.product.productname}
                                            style={{ width: 50, height: 50, objectFit: 'cover' }}
                                        />
                                    </td>
                                    <td>{product.product.productname}</td>
                                    <td>{product.quantity}</td>
                                    <td>${product.product.price.toFixed(2)}</td>
                                    <td>${(product.quantity * product.product.price).toFixed(2)}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan="4"><strong>Total Price:</strong></td>
                                <td><strong>${totalPrice.toFixed(2)}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}
