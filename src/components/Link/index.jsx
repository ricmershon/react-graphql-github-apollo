import React from 'react';

const Link = ({ children, ...props }) => (
    <a {...props} target="_blank" rel="noopern noreferrer">
        {children}
    </a>
)

export default Link;