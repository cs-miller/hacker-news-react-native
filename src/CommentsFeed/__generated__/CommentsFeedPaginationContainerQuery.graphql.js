/**
 * @flow
 * @relayHash af1fc6e62561b4d4ff1c47df764d4859
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CommentsFeedPaginationContainer_story$ref = any;
export type CommentsFeedPaginationContainerQueryVariables = {|
  count: number,
  cursor?: ?string,
  storyId: string,
|};
export type CommentsFeedPaginationContainerQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: CommentsFeedPaginationContainer_story$ref,
  |},
|};
*/


/*
query CommentsFeedPaginationContainerQuery(
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
  "name": "CommentsFeedPaginationContainerQuery",
  "id": null,
  "text": "query CommentsFeedPaginationContainerQuery(\n  $storyId: ID!\n) {\n  node(id: $storyId) {\n    __typename\n    ...CommentsFeedPaginationContainer_story\n    id\n  }\n}\n\nfragment CommentsFeedPaginationContainer_story on Story {\n  id\n  by {\n    id\n    hnId\n    created\n  }\n  text\n  title\n  url\n  kids(first: 10) {\n    edges {\n      cursor\n      node {\n        ...CommentCard_comment\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment CommentCard_comment on Comment {\n  id\n  text\n  time\n  by {\n    id\n    hnId\n    created\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CommentsFeedPaginationContainerQuery",
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
    "name": "CommentsFeedPaginationContainerQuery",
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
(node/*: any*/).hash = '3976953be57bb68c5d9a8a9ab9ded9a7';
module.exports = node;
