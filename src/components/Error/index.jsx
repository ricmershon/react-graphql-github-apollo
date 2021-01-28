/**
 * @file    ErrorMessage component
 * @author  Ric Mershon from Road to GraphQL.
 */

// EXTERNAL DEPENDENCIES

import React from 'react';

// INTERNAL DEPENDENCIES

import './style.css';

/**
 * Link: react functional component.
 * 
 * @param {string} children Name of repository.
 * @param {Object} ...props href URL for repository.
 * 
 * @returns single repository name with its link.
 */

const ErrorMessage = () => (
    <div className="ErrorMessage">
        <small>A query error ocurred</small>
    </div>
)

export default ErrorMessage;