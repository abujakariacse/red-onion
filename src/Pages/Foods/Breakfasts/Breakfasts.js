import React, { useEffect, useState } from 'react';

const Breakfasts = () => {
    const [Breakfasts, setBreakfasts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default Breakfasts;