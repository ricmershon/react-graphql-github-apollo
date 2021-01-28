/**
 * @file    Link component
 * @author  Ric Mershon from Road to GraphQL.
 */

// EXTERNAL DEPENDENCIES

import React from 'react';

/**
 * Link: react functional component.
 * 
 * @param {string} children Name of repository.
 * @param {Object} ...props href URL for repository.
 * 
 * @returns single repository name with its link.
 */

const Link = ({ children, ...props }) => (
    <a {...props} target="_blank" rel="noopener noreferrer">
        {children}
    </a>
)

export default Link;