/**
 * @flow
 * @relayHash ad914778fe354c3fa81f20bf87c54a5c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CommentsFeedPaginationContainer_story$ref = any;
export type CommentsFeedQueryRenderer_QueryVariables = {|
  storyId: string,
|};
export type CommentsFeedQueryRenderer_QueryResponse = {|
  +node: ?{|
    +$fragmentRefs: CommentsFeedPaginationContainer_story$ref,
  |},
|};
*/


/*
query CommentsFeedQueryRenderer_Query(
  $storyId: ID!
) {
  node(id: $storyId) {
    __typename
    ...CommentsFeedPaginationContainer_story
    id
  }
}

fragment CommentsFeedPaginationContainer_story on Story {
  id
  by {
    id
    hnId
    created
  }
  text
  title
  url
  kids(first: 10) {
    edges {
      cursor
      node {
        ...CommentCard_comment
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

fragment CommentCard_comment on Comment {
  id
  text
  time
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
    "name": "storyId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "storyId",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "by",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    v3,
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
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "text",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "CommentsFeedQueryRenderer_Query",
  "id": null,
  "text": "query CommentsFeedQueryRenderer_Query(\n  $storyId: ID!\n) {\n  node(id: $storyId) {\n    __typename\n    ...CommentsFeedPaginationContainer_story\n    id\n  }\n}\n\nfragment CommentsFeedPaginationContainer_story on Story {\n  id\n  by {\n    id\n    hnId\n    created\n  }\n  text\n  title\n  url\n  kids(first: 10) {\n    edges {\n      cursor\n      node {\n        ...CommentCard_comment\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment CommentCard_comment on Comment {\n  id\n  text\n  time\n  by {\n    id\n    hnId\n    created\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CommentsFeedQueryRenderer_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CommentsFeedPaginationContainer_story",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CommentsFeedQueryRenderer_Query",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          v2,
          v3,
          {
            "kind": "InlineFragment",
            "type": "Story",
            "selections": [
              v4,
              v5,
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
                "kind": "LinkedField",
                "alias": null,
                "name": "kids",
                "storageKey": "kids(first:10)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 10,
                    "type": "Int"
                  }
                ],
                "concreteType": "CommentConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CommentEdge",
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
                        "concreteType": "Comment",
                        "plural": false,
                        "selections": [
                          v3,
                          v5,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "time",
                            "args": null,
                            "storageKey": null
                          },
                          v4,
                          v2
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
                "name": "kids",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 10,
                    "type": "Int"
                  }
                ],
                "handle": "connection",
                "key": "CommentsFeedPaginationContainer_kids",
                "filters": null
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '0424b6fdcb9102b9db139fd155cb866d';
module.exports = node;
