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

/**
 * @class
 * Initializes a new instance of the OperationDisplay class.
 * @constructor
 * The object that represents the operation.
 *
 * @member {string} [provider] Service provider: Microsoft.ServiceBus
 *
 * @member {string} [resource] Resource on which the operation is performed:
 * Invoice, etc.
 *
 * @member {string} [operation] Operation type: Read, write, delete, etc.
 *
 */
class OperationDisplay {
  constructor() {
  }

  /**
   * Defines the metadata of OperationDisplay
   *
   * @returns {object} metadata of OperationDisplay
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Operation_display',
      type: {
        name: 'Composite',
        className: 'OperationDisplay',
        modelProperties: {
          provider: {
            required: false,
            readOnly: true,
            serializedName: 'provider',
            type: {
              name: 'String'
            }
          },
          resource: {
            required: false,
            readOnly: true,
            serializedName: 'resource',
            type: {
              name: 'String'
            }
          },
          operation: {
            required: false,
            readOnly: true,
            serializedName: 'operation',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OperationDisplay;
