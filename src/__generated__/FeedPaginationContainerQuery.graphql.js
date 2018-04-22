/**
 * @flow
 * @relayHash ef6a33dc09ff028663ce1887328d49cb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FeedPaginationContainer_feed$ref = any;
export type FeedType = ('ASK' | 'BEST' | 'JOB' | 'NEW' | 'SHOW' | 'TOP' | '%future added value');
export type FeedPaginationContainerQueryVariables = {|
  count: number,
  cursor?: ?string,
  type: FeedType,
|};
export type FeedPaginationContainerQueryResponse = {|
  +storyFeed: ?{|
    +$fragmentRefs: FeedPaginationContainer_feed$ref,
  |},
|};
*/


/*
query FeedPaginationContainerQuery(
  $count: Int!
  $cursor: String
  $type: FeedType!
) {
  storyFeed(type: $type) {
    ...FeedPaginationContainer_feed_1G22uz
  }
}

fragment FeedPaginationContainer_feed_1G22uz on Feed {
  stories(first: $count, after: $cursor) {
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
  title
  url
  time
  score
  by {
    hnId
    id
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
v1 = [
  {
    "kind": "Variable",
    "name": "type",
    "variableName": "type",
    "type": "FeedType"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FeedPaginationContainerQuery",
  "id": null,
  "text": "query FeedPaginationContainerQuery(\n  $count: Int!\n  $cursor: String\n  $type: FeedType!\n) {\n  storyFeed(type: $type) {\n    ...FeedPaginationContainer_feed_1G22uz\n  }\n}\n\nfragment FeedPaginationContainer_feed_1G22uz on Feed {\n  stories(first: $count, after: $cursor) {\n    edges {\n      cursor\n      node {\n        ...StoryCard_story\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment StoryCard_story on Story {\n  title\n  url\n  time\n  score\n  by {\n    hnId\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FeedPaginationContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "storyFeed",
        "storageKey": null,
        "args": v1,
        "concreteType": "Feed",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "FeedPaginationContainer_feed",
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
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FeedPaginationContainerQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "storyFeed",
        "storageKey": null,
        "args": v1,
        "concreteType": "Feed",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "stories",
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
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "by",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "hnId",
                            "args": null,
                            "storageKey": null
                          },
                          v2
                        ]
                      },
                      v2,
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
            "name": "stories",
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
              }
            ],
            "handle": "connection",
            "key": "FeedPaginationContainer_stories",
            "filters": null
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'f7a46896b0d819eae581e944834c3b37';
module.exports = node;
