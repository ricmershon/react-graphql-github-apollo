/**
 * @file    Contains RepositoryItem component.
 * @author  Ric Mershon from Road to GraphQL.
 */

// EXTERNAL DEPENDENCIES

import React from 'react';

// INTERNAL DEPENDENCIES

import Link from '../../Link';
import '../style.css';

/**
 * RepositoryItem: react functional component.
 * 
 * @param {string} name Name.
 * @param {string} url URL.
 * @param {string} descriptionHTML Description of the repository.
 * @param {string} primaryLanguage Primary programming language.
 * @param {string} owner Owner
 * @param {string} stargazers Number of users who starred.
 * @param {string} watchers Number of users watching.
 * @param {string} viewerSubscription Number of users subscribed.
 * @param {string} viewerHasStarred Viewer has starred.
 * 
 * @returns information from single repository.
 */

const RepositoryItem = ({
    name,
    url,
    descriptionHTML,
    primaryLanguage,
    owner,
    stargazers,
    watchers,
    viewerSubscription,
    viewerHasStarred
}) => (
    <>
        <div className="RepositoryItem-title">
            <h2>
                <Link href={url}>{name}</Link>
            </h2>

            <div className="RepositoryItem-title-action">
                {stargazers.totalCount} Stars
            </div>
        </div>

        <div className="RepositoryItem-title-description">
            <div
                className="RepositoryItem-description-info"
                dangerouslySetInnerHTML={{ __html: descriptionHTML}}
            />
            <div className="RepositoryItem-description-details">
                <div>
                    {primaryLanguage && (
                        <span>Language: {primaryLanguage.name}</span>
                    )}
                </div>
                <div>
                    {owner && (
                        <span>
                            Owner: <a href={owner.url}>{owner.login}</a>
                        </span>
                    )}
                </div>
            </div>
        </div>
    </>
)

 export default RepositoryItem;