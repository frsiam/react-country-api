import React from 'react';

const Loading = () => {
    return (
        <div className="container d-flex align-items-center justify-center min-h-screen bg-red-400">
            <strong>Loading...</strong>
            <div className="spinner-border" role="status" aria-hidden="true"></div>
        </div>
    );
};

export default Loading;