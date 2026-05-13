import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import sanityClient from '../helpers/sanityClient'

export default function SearchResults() {
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q') || ''
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!q) {
      setResults([])
      return
    }
    const fetchResults = async () => {
      setLoading(true)
      const query = `*[_type == "customer" && (
        firstname match $term || lastname match $term || email match $term
      )]{
        _id, firstname, lastname, email, city
      } | order(lastname, firstname)`
      const data = await sanityClient.fetch(query, { term: `*${q}*` })
      setResults(data)
      setLoading(false)
    }
    fetchResults()
  }, [q])

  return (
    <div>
      <h1>Search results for "{q}"</h1>
      {loading ? (
        <p>Searching...</p>
      ) : results.length === 0 ? (
        <p>No customers found.</p>
      ) : (
        <ul>
          {results.map(customer => (
            <li key={customer._id}>
              <Link to={`/customer/${customer._id}`}>
                {customer.firstname} {customer.lastname}
              </Link>
              {' — '}{customer.email}
              {customer.city && ` — ${customer.city}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
