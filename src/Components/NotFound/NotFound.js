import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', paddingBottom: '50px' }}>
            <img src="https://lh3.googleusercontent.com/-54nYIjfDE-k/YVvgrDHQa0I/AAAAAAAACPY/y7MgQgcCAS8shCKBaP-rCSm_ghnQkpPZgCLcBGAsYHQ/s16000/notfound.jpg" alt="" />
            <div>
                <Link to="/home">
                    <button className="btn-regular">Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;