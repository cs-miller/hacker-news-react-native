/**
 * @flow
 * @relayHash 7ff50c6ff612b75af8971dc6cdcc52df
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type StoriesFeedPaginationContainer_feed$ref = any;
export type FeedType = ('ASK' | 'BEST' | 'JOB' | 'NEW' | 'SHOW' | 'TOP' | '%future added value');
export type StoriesFeedQueryRenderer_QueryVariables = {|
  type?: ?FeedType,
|};
export type StoriesFeedQueryRenderer_QueryResponse = {|
  +storyFeed: ?{|
    +$fragmentRefs: StoriesFeedPaginationContainer_feed$ref,
  |},
|};
*/


/*
query StoriesFeedQueryRenderer_Query(
  $type: FeedType
) {
  storyFeed(type: $type) {
    ...StoriesFeedPaginationContainer_feed
  }
}

fragment StoriesFeedPaginationContainer_feed on Feed {
  stories(first: 10) {
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
    "name": "type",
    "type": "FeedType",
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
  "name": "StoriesFeedQueryRenderer_Query",
  "id": null,
  "text": "query StoriesFeedQueryRenderer_Query(\n  $type: FeedType\n) {\n  storyFeed(type: $type) {\n    ...StoriesFeedPaginationContainer_feed\n  }\n}\n\nfragment StoriesFeedPaginationContainer_feed on Feed {\n  stories(first: 10) {\n    edges {\n      cursor\n      node {\n        ...StoryCard_story\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment StoryCard_story on Story {\n  title\n  url\n  time\n  score\n  by {\n    hnId\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "StoriesFeedQueryRenderer_Query",
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
            "name": "StoriesFeedPaginationContainer_feed",
            "args": null
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
        "args": v1,
        "concreteType": "Feed",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "stories",
            "storageKey": "stories(first:10)",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10,
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
                "kind": "Literal",
                "name": "first",
                "value": 10,
                "type": "Int"
              }
            ],
            "handle": "connection",
            "key": "StoriesFeedPaginationContainer_stories",
            "filters": null
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '133fcc2bd8f852d3a9f80bb2061aa229';
module.exports = node;
