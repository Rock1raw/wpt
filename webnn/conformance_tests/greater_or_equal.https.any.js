// META: title=test WebNN API element-wise greaterOrEqual operation
// META: global=window,dedicatedworker
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils.js
// META: timeout=long

'use strict';

// https://www.w3.org/TR/webnn/#api-mlgraphbuilder-logical
// Compare if the values of the first input tensor is greater or equal,
// element-wise.
//
// MLOperand greaterOrEqual(MLOperand a, MLOperand b);


const getGreaterOrEqualPrecisionTolerance = (graphResources) => {
  const toleranceValueDict = {uint8: 0};
  const expectedDataType =
      getExpectedDataTypeOfSingleOutput(graphResources.expectedOutputs);
  return {metricType: 'ULP', value: toleranceValueDict[expectedDataType]};
};

const greaterOrEqualTests = [
  {
    'name': 'greaterOrEqual float32 0D scalar',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [0.2829853594303131],
          'descriptor': {shape: [], dataType: 'float32'}
        },
        'inputB': {
          'data': [6.156983375549316],
          'descriptor': {shape: [], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'greaterOrEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {'data': [0], 'descriptor': {shape: [], dataType: 'uint8'}}
      }
    }
  },
  {
    'name': 'greaterOrEqual float32 1D constant tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -8.049108505249023,  -5.522611141204834, -2.097508192062378,
            -7.455326557159424,  -5.450376510620117, 9.802918434143066,
            -3.604517936706543,  4.088084697723389,  -5.068355083465576,
            1.5821936130523682,  5.675583839416504,  -4.34159517288208,
            1.694622278213501,   2.926734685897827,  -7.00007438659668,
            -2.5270822048187256, 1.4437267780303955, 7.862768650054932,
            5.782289028167725,   1.8712012767791748, -0.5233999490737915,
            0.43433287739753723, 8.93836498260498,   1.6568396091461182
          ],
          'descriptor': {shape: [24], dataType: 'float32'},
          'constant': true
        },
        'inputB': {
          'data': [
            -7.028095245361328,  1.9109991788864136, 3.5765292644500732,
            1.7167965173721313,  2.846137523651123,  -2.311763048171997,
            -6.086130142211914,  -3.437926769256592, -3.476442813873291,
            -2.1946563720703125, 2.9962267875671387, -5.540947914123535,
            5.098470211029053,   6.775498867034912,  2.4505412578582764,
            5.210598945617676,   -9.710094451904297, -2.4130282402038574,
            8.678308486938477,   -9.449530601501465, 0.7702168822288513,
            -1.5186073780059814, -9.153943061828613, -4.991735935211182
          ],
          'descriptor': {shape: [24], dataType: 'float32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'greaterOrEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1,
            0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1
          ],
          'descriptor': {shape: [24], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'greaterOrEqual float32 1D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -8.049108505249023,  -5.522611141204834, -2.097508192062378,
            -7.455326557159424,  -5.450376510620117, 9.802918434143066,
            -3.604517936706543,  4.088084697723389,  -5.068355083465576,
            1.5821936130523682,  5.675583839416504,  -4.34159517288208,
            1.694622278213501,   2.926734685897827,  -7.00007438659668,
            -2.5270822048187256, 1.4437267780303955, 7.862768650054932,
            5.782289028167725,   1.8712012767791748, -0.5233999490737915,
            0.43433287739753723, 8.93836498260498,   1.6568396091461182
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -7.028095245361328,  1.9109991788864136, 3.5765292644500732,
            1.7167965173721313,  2.846137523651123,  -2.311763048171997,
            -6.086130142211914,  -3.437926769256592, -3.476442813873291,
            -2.1946563720703125, 2.9962267875671387, -5.540947914123535,
            5.098470211029053,   6.775498867034912,  2.4505412578582764,
            5.210598945617676,   -9.710094451904297, -2.4130282402038574,
            8.678308486938477,   -9.449530601501465, 0.7702168822288513,
            -1.5186073780059814, -9.153943061828613, -4.991735935211182
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'greaterOrEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1,
            0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1
          ],
          'descriptor': {shape: [24], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'greaterOrEqual float32 2D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -8.049108505249023,  -5.522611141204834, -2.097508192062378,
            -7.455326557159424,  -5.450376510620117, 9.802918434143066,
            -3.604517936706543,  4.088084697723389,  -5.068355083465576,
            1.5821936130523682,  5.675583839416504,  -4.34159517288208,
            1.694622278213501,   2.926734685897827,  -7.00007438659668,
            -2.5270822048187256, 1.4437267780303955, 7.862768650054932,
            5.782289028167725,   1.8712012767791748, -0.5233999490737915,
            0.43433287739753723, 8.93836498260498,   1.6568396091461182
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -7.028095245361328,  1.9109991788864136, 3.5765292644500732,
            1.7167965173721313,  2.846137523651123,  -2.311763048171997,
            -6.086130142211914,  -3.437926769256592, -3.476442813873291,
            -2.1946563720703125, 2.9962267875671387, -5.540947914123535,
            5.098470211029053,   6.775498867034912,  2.4505412578582764,
            5.210598945617676,   -9.710094451904297, -2.4130282402038574,
            8.678308486938477,   -9.449530601501465, 0.7702168822288513,
            -1.5186073780059814, -9.153943061828613, -4.991735935211182
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'greaterOrEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1,
            0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1
          ],
          'descriptor': {shape: [4, 6], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'greaterOrEqual float32 3D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -8.049108505249023,  -5.522611141204834, -2.097508192062378,
            -7.455326557159424,  -5.450376510620117, 9.802918434143066,
            -3.604517936706543,  4.088084697723389,  -5.068355083465576,
            1.5821936130523682,  5.675583839416504,  -4.34159517288208,
            1.694622278213501,   2.926734685897827,  -7.00007438659668,
            -2.5270822048187256, 1.4437267780303955, 7.862768650054932,
            5.782289028167725,   1.8712012767791748, -0.5233999490737915,
            0.43433287739753723, 8.93836498260498,   1.6568396091461182
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -7.028095245361328,  1.9109991788864136, 3.5765292644500732,
            1.7167965173721313,  2.846137523651123,  -2.311763048171997,
            -6.086130142211914,  -3.437926769256592, -3.476442813873291,
            -2.1946563720703125, 2.9962267875671387, -5.540947914123535,
            5.098470211029053,   6.775498867034912,  2.4505412578582764,
            5.210598945617676,   -9.710094451904297, -2.4130282402038574,
            8.678308486938477,   -9.449530601501465, 0.7702168822288513,
            -1.5186073780059814, -9.153943061828613, -4.991735935211182
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'greaterOrEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1,
            0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'greaterOrEqual float32 4D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -8.049108505249023,  -5.522611141204834, -2.097508192062378,
            -7.455326557159424,  -5.450376510620117, 9.802918434143066,
            -3.604517936706543,  4.088084697723389,  -5.068355083465576,
            1.5821936130523682,  5.675583839416504,  -4.34159517288208,
            1.694622278213501,   2.926734685897827,  -7.00007438659668,
            -2.5270822048187256, 1.4437267780303955, 7.862768650054932,
            5.782289028167725,   1.8712012767791748, -0.5233999490737915,
            0.43433287739753723, 8.93836498260498,   1.6568396091461182
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -7.028095245361328,  1.9109991788864136, 3.5765292644500732,
            1.7167965173721313,  2.846137523651123,  -2.311763048171997,
            -6.086130142211914,  -3.437926769256592, -3.476442813873291,
            -2.1946563720703125, 2.9962267875671387, -5.540947914123535,
            5.098470211029053,   6.775498867034912,  2.4505412578582764,
            5.210598945617676,   -9.710094451904297, -2.4130282402038574,
            8.678308486938477,   -9.449530601501465, 0.7702168822288513,
            -1.5186073780059814, -9.153943061828613, -4.991735935211182
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'greaterOrEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1,
            0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'greaterOrEqual float32 5D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -8.049108505249023,  -5.522611141204834, -2.097508192062378,
            -7.455326557159424,  -5.450376510620117, 9.802918434143066,
            -3.604517936706543,  4.088084697723389,  -5.068355083465576,
            1.5821936130523682,  5.675583839416504,  -4.34159517288208,
            1.694622278213501,   2.926734685897827,  -7.00007438659668,
            -2.5270822048187256, 1.4437267780303955, 7.862768650054932,
            5.782289028167725,   1.8712012767791748, -0.5233999490737915,
            0.43433287739753723, 8.93836498260498,   1.6568396091461182
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -7.028095245361328,  1.9109991788864136, 3.5765292644500732,
            1.7167965173721313,  2.846137523651123,  -2.311763048171997,
            -6.086130142211914,  -3.437926769256592, -3.476442813873291,
            -2.1946563720703125, 2.9962267875671387, -5.540947914123535,
            5.098470211029053,   6.775498867034912,  2.4505412578582764,
            5.210598945617676,   -9.710094451904297, -2.4130282402038574,
            8.678308486938477,   -9.449530601501465, 0.7702168822288513,
            -1.5186073780059814, -9.153943061828613, -4.991735935211182
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'greaterOrEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1,
            0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'greaterOrEqual float32 broadcast 0D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [-1.0187573432922363],
          'descriptor': {shape: [], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -8.049108505249023,  -5.522611141204834, -2.097508192062378,
            -7.455326557159424,  -5.450376510620117, 9.802918434143066,
            -3.604517936706543,  4.088084697723389,  -5.068355083465576,
            1.5821936130523682,  5.675583839416504,  -4.34159517288208,
            1.694622278213501,   2.926734685897827,  -7.00007438659668,
            -2.5270822048187256, 1.4437267780303955, 7.862768650054932,
            5.782289028167725,   1.8712012767791748, -0.5233999490737915,
            0.43433287739753723, 8.93836498260498,   1.6568396091461182
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'greaterOrEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1,
            0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'greaterOrEqual float32 broadcast 1D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [-1.0187573432922363],
          'descriptor': {shape: [1], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -8.049108505249023,  -5.522611141204834, -2.097508192062378,
            -7.455326557159424,  -5.450376510620117, 9.802918434143066,
            -3.604517936706543,  4.088084697723389,  -5.068355083465576,
            1.5821936130523682,  5.675583839416504,  -4.34159517288208,
            1.694622278213501,   2.926734685897827,  -7.00007438659668,
            -2.5270822048187256, 1.4437267780303955, 7.862768650054932,
            5.782289028167725,   1.8712012767791748, -0.5233999490737915,
            0.43433287739753723, 8.93836498260498,   1.6568396091461182
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'greaterOrEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1,
            0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'greaterOrEqual float32 broadcast 2D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -8.049108505249023,  -5.522611141204834, -2.097508192062378,
            -7.455326557159424,  -5.450376510620117, 9.802918434143066,
            -3.604517936706543,  4.088084697723389,  -5.068355083465576,
            1.5821936130523682,  5.675583839416504,  -4.34159517288208,
            1.694622278213501,   2.926734685897827,  -7.00007438659668,
            -2.5270822048187256, 1.4437267780303955, 7.862768650054932,
            5.782289028167725,   1.8712012767791748, -0.5233999490737915,
            0.43433287739753723, 8.93836498260498,   1.6568396091461182
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -4.19451379776001, 3.8917839527130127, -3.5139973163604736,
            6.279316425323486, 0.001788170775398612, -0.7928582429885864
          ],
          'descriptor': {shape: [2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'greaterOrEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0,
            1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'greaterOrEqual float32 broadcast 3D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            -8.049108505249023,  -5.522611141204834, -2.097508192062378,
            -7.455326557159424,  -5.450376510620117, 9.802918434143066,
            -3.604517936706543,  4.088084697723389,  -5.068355083465576,
            1.5821936130523682,  5.675583839416504,  -4.34159517288208,
            1.694622278213501,   2.926734685897827,  -7.00007438659668,
            -2.5270822048187256, 1.4437267780303955, 7.862768650054932,
            5.782289028167725,   1.8712012767791748, -0.5233999490737915,
            0.43433287739753723, 8.93836498260498,   1.6568396091461182
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -3.2823047637939453, -1.3975636959075928, 0.49053606390953064,
            -6.882648944854736
          ],
          'descriptor': {shape: [2, 2, 1], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'greaterOrEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1,
            1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'greaterOrEqual float32 broadcast 4D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [-1.0187573432922363],
          'descriptor': {shape: [1, 1, 1, 1], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -8.049108505249023,  -5.522611141204834, -2.097508192062378,
            -7.455326557159424,  -5.450376510620117, 9.802918434143066,
            -3.604517936706543,  4.088084697723389,  -5.068355083465576,
            1.5821936130523682,  5.675583839416504,  -4.34159517288208,
            1.694622278213501,   2.926734685897827,  -7.00007438659668,
            -2.5270822048187256, 1.4437267780303955, 7.862768650054932,
            5.782289028167725,   1.8712012767791748, -0.5233999490737915,
            0.43433287739753723, 8.93836498260498,   1.6568396091461182
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'greaterOrEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1,
            0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  }
];

if (navigator.ml) {
  greaterOrEqualTests.forEach((test) => {
    webnn_conformance_test(
        buildGraphAndCompute, getGreaterOrEqualPrecisionTolerance, test);
  });
} else {
  test(() => assert_implements(navigator.ml, 'missing navigator.ml'));
}