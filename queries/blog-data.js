import { getClient } from "@/lib/graphQLClient";
import { gql } from "graphql-request";

export const getAllPosts = async (tags) => {
  const client = getClient();

  const data = await client.request(gql`
    query allPosts($tags: [ObjectId!]) {
      publication(host: "blog.greenroots.info") {
        title
        posts(first: 20) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              author {
                name
                profilePicture
              }
              title
              subtitle
              brief
              slug
              coverImage {
                url
              }
              tags {
                name
                slug
                id
              }
              publishedAt
              readTimeInMinutes
            }
          }
        }
      }
    }
  `);
  return data;
};
