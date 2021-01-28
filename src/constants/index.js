import gql from 'graphql-tag';

export const GITHUB_BASE_URL = 'https://api.github.com/graphql';

export const GET_CURRENT_USER = gql`
    {
        viewer {
            login
            name
        }
    }
`;

export const GET_REPOSITORIES_OF_CURRENT_USER = gql`
    {
        viewer {
            repositories(
                first: 5
                orderBy: { direction: DESC, field: STARGAZERS }
            ) {
                edges {
                    node {
                        id
                        name
                        url
                        descriptionHTML
                        primaryLanguage {
                            name
                        }
                        owner {
                            login
                            url
                        }
                        stargazers {
                            totalCount
                        }
                        viewerHasStarred
                        watchers {
                            totalCount
                        }
                        viewerSubscription
                    }
                }
            }
        }
    }
`