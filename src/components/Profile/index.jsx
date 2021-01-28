/**
 * @file    Profile component.
 * @author  Ric Mershon from Road to GraphQL.
 */

// EXTERNAL DEPENDENCIES

import React from 'react';
import { Query } from 'react-apollo';

// INTERNAL DEPENDENCIES

import { 
    GET_CURRENT_USER,
    GET_REPOSITORIES_OF_CURRENT_USER
 } from '../../constants';
 
import RepositoryList from '../Repository';
import Loading from '../Loading';
import ErrorMessage from '../Error';

/**
 * Profile: react functional component queries database with GraphQL
 * and Apollo client. Query component takes the query as prop and passes
 * resulting list of repositories to RepositoryList for rendering.
 * 
 * Uses render props pattern with the child as a function in order to
 * access the result of the query as an argument.
 * 
 * @returns Loading component while loading data, ErrorMessage component
 * if a query error occurs, otherwise returns RepositoryList component.
 */

const Profile = () => (
    <Query query={ GET_REPOSITORIES_OF_CURRENT_USER }>
        {({ data, loading, error }) => {
            if (error) {
                return <ErrorMessage />
            }
            const { viewer } = data ? data : false;
            
            if (loading || !viewer) {
                return <Loading />
            }

            return <RepositoryList repositories={viewer.repositories}/>
        }}
    </Query>
)

export default Profile;