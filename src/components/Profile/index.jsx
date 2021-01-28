/*
 * EXTERNAL DEPENDENCIES
 */

import React from 'react';
import { Query } from 'react-apollo';
import { GET_CURRENT_USER } from '../../constants/index';

/*
 * INTERNAL DEPENDENCIES
 */

import Loading from '../Loading';

const Profile = () => (
    <Query query={ GET_CURRENT_USER }>
        {({ data, loading }) => {
            const { viewer } = data;

            if (loading || !viewer) {
                return <Loading />
            }
            
            return (
                <div>
                    {viewer.name} {viewer.login}
                </div>
            )
        }}
    </Query>
)

export default Profile;