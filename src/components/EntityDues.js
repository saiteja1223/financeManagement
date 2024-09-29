import React, { useEffect, useState } from 'react';
import './entityDues.css';

function EntityDues({ users, handleUserPaidStatus }) {
    const [sum, setSum] = useState(0); // Initialize sum using useState

    function formatDate(dateString) {
        const currentDate = new Date();
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with zero if needed
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based, add 1 and pad
        const year = String(date.getFullYear()).slice(-2); // Get last 2 digits of the year

        return `${day}/${month}/${year}`; // Format as DD/MM/YY
    }

    function getTotalAmount() {
        const unpaidUsers = users.filter(user => user.status === false);

        const totalSum = unpaidUsers.reduce((acc, user) => acc + (user.amount * user.interest) / 100, 0);
        setSum(totalSum); // Update sum state
    }

    useEffect(() => {
        getTotalAmount();
        console.log('useEffect called in EntityDues');
    }, [users]); // Recalculate total sum whenever the `users` prop changes

    return (
        <div className="container"> {/* Add a class for better styling */}
            <h2>Monthly Dues</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Paid Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map(user => (
                            <tr key={user.$id} className={user.bill ? 'success' : 'pending'}>
                                <td>{user.name}</td>
                                <td>{(user.amount * user.interest) / 100}</td>
                                <td>{formatDate(user.date)}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={user.status}
                                        onChange={() => handleUserPaidStatus(user)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="total-amount">
                <span>Total Amount:</span> <span>{sum}</span>
            </div>
        </div>
    );
}

export default EntityDues;
