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
 * Initializes a new instance of the ProtectionPolicy class.
 * @constructor
 * The base class for a backup policy. Workload-specific backup policies are
 * derived from this class.
 *
 * @member {number} [protectedItemsCount] The number of items associated with
 * this policy.
 *
 * @member {string} backupManagementType Polymorphic Discriminator
 *
 */
class ProtectionPolicy {
  constructor() {
  }

  /**
   * Defines the metadata of ProtectionPolicy
   *
   * @returns {object} metadata of ProtectionPolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ProtectionPolicy',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'backupManagementType',
          clientName: 'backupManagementType'
        },
        uberParent: 'ProtectionPolicy',
        className: 'ProtectionPolicy',
        modelProperties: {
          protectedItemsCount: {
            required: false,
            serializedName: 'protectedItemsCount',
            type: {
              name: 'Number'
            }
          },
          backupManagementType: {
            required: true,
            serializedName: 'backupManagementType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ProtectionPolicy;
