/**
 * @flow
 * @relayHash a666d124d488370a8adf0ee47b18b9d0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type StoriesFeedPaginationContainer_feed$ref = any;
export type FeedType = "ASK" | "BEST" | "JOB" | "NEW" | "SHOW" | "TOP" | "%future added value";
export type StoriesFeedPaginationContainerQueryVariables = {|
  count: number,
  cursor?: ?string,
  type: FeedType,
|};
export type StoriesFeedPaginationContainerQueryResponse = {|
  +$fragmentRefs: StoriesFeedPaginationContainer_feed$ref
|};
*/


/*
query StoriesFeedPaginationContainerQuery(
  $count: Int!
  $cursor: String
  $type: FeedType!
) {
  ...StoriesFeedPaginationContainer_feed_PAmmQ
}

fragment StoriesFeedPaginationContainer_feed_PAmmQ on Query {
  storyFeed(first: $count, after: $cursor, type: $type) {
    edges {
      cursor
      node {
        id
        ...StoryCard_story
        __typename
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment StoryCard_story on Story {
  id
  title
  url
  time
  score
  descendants
  by {
    id
    hnId
    created
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "type",
    "type": "FeedType!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "StoriesFeedPaginationContainerQuery",
  "id": null,
  "text": "query StoriesFeedPaginationContainerQuery(\n  $count: Int!\n  $cursor: String\n  $type: FeedType!\n) {\n  ...StoriesFeedPaginationContainer_feed_PAmmQ\n}\n\nfragment StoriesFeedPaginationContainer_feed_PAmmQ on Query {\n  storyFeed(first: $count, after: $cursor, type: $type) {\n    edges {\n      cursor\n      node {\n        id\n        ...StoryCard_story\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment StoryCard_story on Story {\n  id\n  title\n  url\n  time\n  score\n  descendants\n  by {\n    id\n    hnId\n    created\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "StoriesFeedPaginationContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "StoriesFeedPaginationContainer_feed",
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "type",
            "variableName": "type",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "StoriesFeedPaginationContainerQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "storyFeed",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "cursor",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "type",
            "variableName": "type",
            "type": "FeedType"
          }
        ],
        "concreteType": "StoryConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "StoryEdge",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Story",
                "plural": false,
                "selections": [
                  v1,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "title",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "url",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "time",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "score",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "descendants",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "by",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      v1,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "hnId",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "created",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "storyFeed",
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "cursor",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "type",
            "variableName": "type",
            "type": "FeedType"
          }
        ],
        "handle": "connection",
        "key": "StoriesFeedPaginationContainer_storyFeed",
        "filters": [
          "type"
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3f4412af360db0334db8c257b7508e77';
module.exports = node;
