import React from 'react';
import './entries.css';
import { useNavigate } from 'react-router-dom';

function Entries({ info }) {
    const navigate = useNavigate();
    
    function handleInfo() {
        navigate(`/addEntry/${info.$id}`);
    }
    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with zero if needed
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, add 1 and pad
        const year = String(date.getFullYear()).slice(-2); // Get last 2 digits of the year

        return `${day}/${month}/${year}`; // Format as DD/MM/YY
    }

    return (
        <div className="entriesMain" onClick={handleInfo}>
            <div className="entitySub">
                <div className="entityLeft">
                    <span className="entityName" style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#333'}}>{info.name}</span>
                    <span className="entityInterest">{info.interest}%</span>
                    <span className="entityDate">{formatDate(info.date)} {info.id}</span>
                </div>
                <div className="entityRight">
                    <span className="entityAmount">{info.amount}</span>
                </div>
            </div>
        </div>
    );
}

export default Entries;
