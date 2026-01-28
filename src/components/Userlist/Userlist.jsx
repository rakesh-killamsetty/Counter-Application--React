import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {Oval} from 'react-loader-spinner'
import './Userlist.css'
function Userlist() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchUsers() {
            try {
                setLoading(true)
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                if (!response.ok) {
                    throw new Error('Failed to fetch users')
                }
                const data = await response.json()
                setUsers(data)
            } catch (error) {
                console.error('Error fetching users:', error)
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchUsers()
    }, [])

    if (loading) {
        return (
            <div className="userlist-container">
                <h2>User List Items</h2>
                <p className="loading">Loading users...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="userlist-container">
                <h2>User List Items</h2>
                <p style={{color: '#ff6b6b', textAlign: 'center'}}>Error: {error}</p>
            </div>
        )
    }

    return (
        <div className="userlist-container">

            <h2>User List Items</h2>
            
            {users.length === 0 ? (
                <Oval/>
                
            ) : (
                users.map((user) => (
                    <div key={user.id} className="user-card">
                        <h3>{user.name}</h3>
                        <p><strong>Email:</strong> {user.email}</p>
                        <div className="user-details">
                            <p><strong>Username:</strong> {user.username}</p>
                            <p><strong>Phone:</strong> {user.phone}</p>
                            <p><strong>Website:</strong> {user.website}</p>
                            <p><strong>Company:</strong> {user.company.name}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default Userlist
