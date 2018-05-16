/**
 * @flow
 * @relayHash f332336a4db416fee6df88997ec776de
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type StoriesFeedPaginationContainer_feed$ref = any;
export type FeedType = "ASK" | "BEST" | "JOB" | "NEW" | "SHOW" | "TOP" | "%future added value";
export type StoriesFeedQueryRenderer_QueryVariables = {|
  count: number,
  cursor?: ?string,
  type: FeedType,
|};
export type StoriesFeedQueryRenderer_QueryResponse = {|
  +$fragmentRefs: StoriesFeedPaginationContainer_feed$ref
|};
*/


/*
query StoriesFeedQueryRenderer_Query(
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
        ...StoryCard_story
        id
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
  "name": "StoriesFeedQueryRenderer_Query",
  "id": null,
  "text": "query StoriesFeedQueryRenderer_Query(\n  $count: Int!\n  $cursor: String\n  $type: FeedType!\n) {\n  ...StoriesFeedPaginationContainer_feed_PAmmQ\n}\n\nfragment StoriesFeedPaginationContainer_feed_PAmmQ on Query {\n  storyFeed(first: $count, after: $cursor, type: $type) {\n    edges {\n      cursor\n      node {\n        ...StoryCard_story\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment StoryCard_story on Story {\n  id\n  title\n  url\n  time\n  score\n  descendants\n  by {\n    id\n    hnId\n    created\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "StoriesFeedQueryRenderer_Query",
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
    "name": "StoriesFeedQueryRenderer_Query",
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
(node/*: any*/).hash = '64f4145f406be3fadf39bc48bd5d7667';
module.exports = node;
