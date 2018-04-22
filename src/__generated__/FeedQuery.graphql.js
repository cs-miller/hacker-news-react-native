/**
 * @flow
 * @relayHash 59eb748b4978a9b2ada8c3dc0aa7463e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type StoryCard_story$ref = any;
export type FeedType = ('ASK' | 'BEST' | 'JOB' | 'NEW' | 'SHOW' | 'TOP' | '%future added value');
export type FeedQueryVariables = {|
  type: FeedType,
|};
export type FeedQueryResponse = {|
  +storyFeed: ?{|
    +stories: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +$fragmentRefs: StoryCard_story$ref,
        |},
      |}>,
    |},
  |},
|};
*/


/*
query FeedQuery(
  $type: FeedType!
) {
  storyFeed(type: $type) {
    stories(first: 5) {
      edges {
        node {
          ...StoryCard_story
          id
        }
      }
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
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 5,
    "type": "Int"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FeedQuery",
  "id": null,
  "text": "query FeedQuery(\n  $type: FeedType!\n) {\n  storyFeed(type: $type) {\n    stories(first: 5) {\n      edges {\n        node {\n          ...StoryCard_story\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment StoryCard_story on Story {\n  title\n  url\n  time\n  score\n  by {\n    hnId\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FeedQuery",
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
            "kind": "LinkedField",
            "alias": null,
            "name": "stories",
            "storageKey": "stories(first:5)",
            "args": v2,
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
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Story",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "FragmentSpread",
                        "name": "StoryCard_story",
                        "args": null
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FeedQuery",
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
            "storageKey": "stories(first:5)",
            "args": v2,
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
                          v3
                        ]
                      },
                      v3
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '12f32ad2c0b72c4411572fe58af3ef07';
module.exports = node;
