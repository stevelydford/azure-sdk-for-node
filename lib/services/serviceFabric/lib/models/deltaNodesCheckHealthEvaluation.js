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
 * Initializes a new instance of the DeltaNodesCheckHealthEvaluation class.
 * @constructor
 * The evaluation of the delta nodes check health
 *
 * @member {array} [unhealthyEvaluations]
 *
 * @member {number} [baselineErrorCount]
 *
 * @member {number} [baselineTotalCount]
 *
 * @member {number} [totalCount]
 *
 * @member {number} [maxPercentDeltaUnhealthyNodes]
 *
 */
class DeltaNodesCheckHealthEvaluation extends models['HealthEvaluation'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DeltaNodesCheckHealthEvaluation
   *
   * @returns {object} metadata of DeltaNodesCheckHealthEvaluation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeltaNodesCheck',
      type: {
        name: 'Composite',
        className: 'DeltaNodesCheckHealthEvaluation',
        modelProperties: {
          description: {
            required: false,
            serializedName: 'Description',
            type: {
              name: 'String'
            }
          },
          aggregatedHealthState: {
            required: false,
            serializedName: 'AggregatedHealthState',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: true,
            serializedName: 'Kind',
            type: {
              name: 'String'
            }
          },
          unhealthyEvaluations: {
            required: false,
            serializedName: 'UnhealthyEvaluations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UnhealthyEvaluationElementType',
                  type: {
                    name: 'Composite',
                    className: 'UnhealthyEvaluation'
                  }
              }
            }
          },
          baselineErrorCount: {
            required: false,
            serializedName: 'BaselineErrorCount',
            type: {
              name: 'Number'
            }
          },
          baselineTotalCount: {
            required: false,
            serializedName: 'BaselineTotalCount',
            type: {
              name: 'Number'
            }
          },
          totalCount: {
            required: false,
            serializedName: 'TotalCount',
            type: {
              name: 'Number'
            }
          },
          maxPercentDeltaUnhealthyNodes: {
            required: false,
            serializedName: 'MaxPercentDeltaUnhealthyNodes',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = DeltaNodesCheckHealthEvaluation;