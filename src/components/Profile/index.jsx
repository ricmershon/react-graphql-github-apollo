/*
 * EXTERNAL DEPENDENCIES
 */

import React from 'react';
import { Query } from 'react-apollo';
import { 
    GET_CURRENT_USER,
    GET_REPOSITORIES_OF_CURRENT_USER
 } from '../../constants/index';

/*
 * INTERNAL DEPENDENCIES
 */

import RepositoryList from '../Repository';
import Loading from '../Loading';

const Profile = () => (
    <Query query={ GET_REPOSITORIES_OF_CURRENT_USER }>
        {({ data, loading }) => {
            const { viewer } = data ? data : false;
            console.log(viewer);
            
            if (loading || !viewer) {
                return <Loading />
            }
            return <RepositoryList repositories={viewer.repositories}/>
        }}
    </Query>
)

export default Profile;