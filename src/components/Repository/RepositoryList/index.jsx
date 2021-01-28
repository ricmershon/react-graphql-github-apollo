/**
 * @file    RepositoryList component.
 * @author  Ric Mershon from Road to GraphQL.
 */

// EXTERNAL DEPENDENCIES

import React from 'react';

// INTERNAL DEPEPNDENCIES

import RepositoryItem from '../RepositoryItem';
import '../style.css';

/**
 * RepositoryList: react functional component.
 * 
 * @param {Object} repositories List of repositories
 * associated with the viewer.
 * 
 * @returns a mapped list of repositories. Passes individual
 * repository nodes to RepositoryItem.
 */

const RepositoryList = ({ repositories }) => (
    repositories.edges.map(({ node }) => (
        <div key={node.id} className="RepositoryItem">
            <RepositoryItem {...node} />
        </div>
    ))
)

export default RepositoryList;