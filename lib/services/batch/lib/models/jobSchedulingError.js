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
 * Initializes a new instance of the JobSchedulingError class.
 * @constructor
 * @summary An error encountered by the Batch service when scheduling a job.
 *
 * @member {string} category The category of the job scheduling error. Possible
 * values include: 'userError', 'serverError', 'unmapped'
 *
 * @member {string} [code] An identifier for the job scheduling error. Codes
 * are invariant and are intended to be consumed programmatically.
 *
 * @member {string} [message] A message describing the job scheduling error,
 * intended to be suitable for display in a user interface.
 *
 * @member {array} [details] A list of additional error details related to the
 * scheduling error.
 *
 */
class JobSchedulingError {
  constructor() {
  }

  /**
   * Defines the metadata of JobSchedulingError
   *
   * @returns {object} metadata of JobSchedulingError
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobSchedulingError',
      type: {
        name: 'Composite',
        className: 'JobSchedulingError',
        modelProperties: {
          category: {
            required: true,
            serializedName: 'category',
            type: {
              name: 'Enum',
              allowedValues: [ 'userError', 'serverError', 'unmapped' ]
            }
          },
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          details: {
            required: false,
            serializedName: 'details',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NameValuePairElementType',
                  type: {
                    name: 'Composite',
                    className: 'NameValuePair'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = JobSchedulingError;