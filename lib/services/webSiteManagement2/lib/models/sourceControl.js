/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the SourceControl class.
 * @constructor
 * The source control OAuth token.
 *
 * @member {string} [sourceControlName] Name or source control type.
 *
 * @member {string} [token] OAuth access token.
 *
 * @member {string} [tokenSecret] OAuth access token secret.
 *
 * @member {string} [refreshToken] OAuth refresh token.
 *
 * @member {date} [expirationTime] OAuth token expiration.
 *
 */
class SourceControl extends models['Resource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SourceControl
   *
   * @returns {object} metadata of SourceControl
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SourceControl',
      type: {
        name: 'Composite',
        className: 'SourceControl',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          sourceControlName: {
            required: false,
            serializedName: 'properties.name',
            type: {
              name: 'String'
            }
          },
          token: {
            required: false,
            serializedName: 'properties.token',
            type: {
              name: 'String'
            }
          },
          tokenSecret: {
            required: false,
            serializedName: 'properties.tokenSecret',
            type: {
              name: 'String'
            }
          },
          refreshToken: {
            required: false,
            serializedName: 'properties.refreshToken',
            type: {
              name: 'String'
            }
          },
          expirationTime: {
            required: false,
            serializedName: 'properties.expirationTime',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = SourceControl;