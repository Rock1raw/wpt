// META: title=test WebNN API element-wise max operation
// META: global=window,dedicatedworker
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils.js
// META: timeout=long

'use strict';

// https://www.w3.org/TR/webnn/#api-mlgraphbuilder-binary
// Compute the element-wise binary maximum of the two input tensors.
// MLOperand max(MLOperand a, MLOperand b);


const getMaxPrecisionTolerance = (graphResources) => {
  const toleranceValueDict = {float32: 1, float16: 1};
  const expectedDataType =
      getExpectedDataTypeOfSingleOutput(graphResources.expectedOutputs);
  return {metricType: 'ULP', value: toleranceValueDict[expectedDataType]};
};

const maxTests = [
  {
    'name': 'max float32 1D constant tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            17.72909164428711,   88.1480712890625,    -12.794827461242676,
            11.817361831665039,  19.51302146911621,   -62.87843704223633,
            50.771915435791016,  -56.91352081298828,  50.57254409790039,
            -96.00484466552734,  50.21434020996094,   20.59501075744629,
            -60.699546813964844, -96.84203338623047,  57.25886917114258,
            -56.29146194458008,  73.71659851074219,   21.347652435302734,
            79.85667419433594,   -22.918458938598633, 1.2300019264221191,
            65.67964935302734,   99.89971160888672,   -62.321685791015625
          ],
          'descriptor': {shape: [24], dataType: 'float32'},
          'constant': true
        },
        'inputB': {
          'data': [
            -34.50435256958008,  85.73471069335938,   25.818017959594727,
            -91.37040710449219,  87.01370239257812,   0.17744044959545135,
            74.8826675415039,    -4.1699137687683105, -73.76497650146484,
            55.388797760009766,  -58.69169616699219,  -67.62332916259766,
            -89.83531188964844,  -8.275739669799805,  97.59577178955078,
            -48.968868255615234, 95.34497833251953,   -97.36360168457031,
            -59.90718078613281,  97.15335083007812,   -40.226924896240234,
            -61.5142707824707,   33.363243103027344,  12.693191528320312
          ],
          'descriptor': {shape: [24], dataType: 'float32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'max',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            17.72909164428711,   88.1480712890625,    25.818017959594727,
            11.817361831665039,  87.01370239257812,   0.17744044959545135,
            74.8826675415039,    -4.1699137687683105, 50.57254409790039,
            55.388797760009766,  50.21434020996094,   20.59501075744629,
            -60.699546813964844, -8.275739669799805,  97.59577178955078,
            -48.968868255615234, 95.34497833251953,   21.347652435302734,
            79.85667419433594,   97.15335083007812,   1.2300019264221191,
            65.67964935302734,   99.89971160888672,   12.693191528320312
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'max float32 1D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            17.72909164428711,   88.1480712890625,    -12.794827461242676,
            11.817361831665039,  19.51302146911621,   -62.87843704223633,
            50.771915435791016,  -56.91352081298828,  50.57254409790039,
            -96.00484466552734,  50.21434020996094,   20.59501075744629,
            -60.699546813964844, -96.84203338623047,  57.25886917114258,
            -56.29146194458008,  73.71659851074219,   21.347652435302734,
            79.85667419433594,   -22.918458938598633, 1.2300019264221191,
            65.67964935302734,   99.89971160888672,   -62.321685791015625
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -34.50435256958008,  85.73471069335938,   25.818017959594727,
            -91.37040710449219,  87.01370239257812,   0.17744044959545135,
            74.8826675415039,    -4.1699137687683105, -73.76497650146484,
            55.388797760009766,  -58.69169616699219,  -67.62332916259766,
            -89.83531188964844,  -8.275739669799805,  97.59577178955078,
            -48.968868255615234, 95.34497833251953,   -97.36360168457031,
            -59.90718078613281,  97.15335083007812,   -40.226924896240234,
            -61.5142707824707,   33.363243103027344,  12.693191528320312
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'max',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            17.72909164428711,   88.1480712890625,    25.818017959594727,
            11.817361831665039,  87.01370239257812,   0.17744044959545135,
            74.8826675415039,    -4.1699137687683105, 50.57254409790039,
            55.388797760009766,  50.21434020996094,   20.59501075744629,
            -60.699546813964844, -8.275739669799805,  97.59577178955078,
            -48.968868255615234, 95.34497833251953,   21.347652435302734,
            79.85667419433594,   97.15335083007812,   1.2300019264221191,
            65.67964935302734,   99.89971160888672,   12.693191528320312
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'max float32 2D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            17.72909164428711,   88.1480712890625,    -12.794827461242676,
            11.817361831665039,  19.51302146911621,   -62.87843704223633,
            50.771915435791016,  -56.91352081298828,  50.57254409790039,
            -96.00484466552734,  50.21434020996094,   20.59501075744629,
            -60.699546813964844, -96.84203338623047,  57.25886917114258,
            -56.29146194458008,  73.71659851074219,   21.347652435302734,
            79.85667419433594,   -22.918458938598633, 1.2300019264221191,
            65.67964935302734,   99.89971160888672,   -62.321685791015625
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -34.50435256958008,  85.73471069335938,   25.818017959594727,
            -91.37040710449219,  87.01370239257812,   0.17744044959545135,
            74.8826675415039,    -4.1699137687683105, -73.76497650146484,
            55.388797760009766,  -58.69169616699219,  -67.62332916259766,
            -89.83531188964844,  -8.275739669799805,  97.59577178955078,
            -48.968868255615234, 95.34497833251953,   -97.36360168457031,
            -59.90718078613281,  97.15335083007812,   -40.226924896240234,
            -61.5142707824707,   33.363243103027344,  12.693191528320312
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'max',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            17.72909164428711,   88.1480712890625,    25.818017959594727,
            11.817361831665039,  87.01370239257812,   0.17744044959545135,
            74.8826675415039,    -4.1699137687683105, 50.57254409790039,
            55.388797760009766,  50.21434020996094,   20.59501075744629,
            -60.699546813964844, -8.275739669799805,  97.59577178955078,
            -48.968868255615234, 95.34497833251953,   21.347652435302734,
            79.85667419433594,   97.15335083007812,   1.2300019264221191,
            65.67964935302734,   99.89971160888672,   12.693191528320312
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'max float32 3D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            17.72909164428711,   88.1480712890625,    -12.794827461242676,
            11.817361831665039,  19.51302146911621,   -62.87843704223633,
            50.771915435791016,  -56.91352081298828,  50.57254409790039,
            -96.00484466552734,  50.21434020996094,   20.59501075744629,
            -60.699546813964844, -96.84203338623047,  57.25886917114258,
            -56.29146194458008,  73.71659851074219,   21.347652435302734,
            79.85667419433594,   -22.918458938598633, 1.2300019264221191,
            65.67964935302734,   99.89971160888672,   -62.321685791015625
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -34.50435256958008,  85.73471069335938,   25.818017959594727,
            -91.37040710449219,  87.01370239257812,   0.17744044959545135,
            74.8826675415039,    -4.1699137687683105, -73.76497650146484,
            55.388797760009766,  -58.69169616699219,  -67.62332916259766,
            -89.83531188964844,  -8.275739669799805,  97.59577178955078,
            -48.968868255615234, 95.34497833251953,   -97.36360168457031,
            -59.90718078613281,  97.15335083007812,   -40.226924896240234,
            -61.5142707824707,   33.363243103027344,  12.693191528320312
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'max',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            17.72909164428711,   88.1480712890625,    25.818017959594727,
            11.817361831665039,  87.01370239257812,   0.17744044959545135,
            74.8826675415039,    -4.1699137687683105, 50.57254409790039,
            55.388797760009766,  50.21434020996094,   20.59501075744629,
            -60.699546813964844, -8.275739669799805,  97.59577178955078,
            -48.968868255615234, 95.34497833251953,   21.347652435302734,
            79.85667419433594,   97.15335083007812,   1.2300019264221191,
            65.67964935302734,   99.89971160888672,   12.693191528320312
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'max float32 4D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            17.72909164428711,   88.1480712890625,    -12.794827461242676,
            11.817361831665039,  19.51302146911621,   -62.87843704223633,
            50.771915435791016,  -56.91352081298828,  50.57254409790039,
            -96.00484466552734,  50.21434020996094,   20.59501075744629,
            -60.699546813964844, -96.84203338623047,  57.25886917114258,
            -56.29146194458008,  73.71659851074219,   21.347652435302734,
            79.85667419433594,   -22.918458938598633, 1.2300019264221191,
            65.67964935302734,   99.89971160888672,   -62.321685791015625
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -34.50435256958008,  85.73471069335938,   25.818017959594727,
            -91.37040710449219,  87.01370239257812,   0.17744044959545135,
            74.8826675415039,    -4.1699137687683105, -73.76497650146484,
            55.388797760009766,  -58.69169616699219,  -67.62332916259766,
            -89.83531188964844,  -8.275739669799805,  97.59577178955078,
            -48.968868255615234, 95.34497833251953,   -97.36360168457031,
            -59.90718078613281,  97.15335083007812,   -40.226924896240234,
            -61.5142707824707,   33.363243103027344,  12.693191528320312
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'max',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            17.72909164428711,   88.1480712890625,    25.818017959594727,
            11.817361831665039,  87.01370239257812,   0.17744044959545135,
            74.8826675415039,    -4.1699137687683105, 50.57254409790039,
            55.388797760009766,  50.21434020996094,   20.59501075744629,
            -60.699546813964844, -8.275739669799805,  97.59577178955078,
            -48.968868255615234, 95.34497833251953,   21.347652435302734,
            79.85667419433594,   97.15335083007812,   1.2300019264221191,
            65.67964935302734,   99.89971160888672,   12.693191528320312
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'max float32 5D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            17.72909164428711,   88.1480712890625,    -12.794827461242676,
            11.817361831665039,  19.51302146911621,   -62.87843704223633,
            50.771915435791016,  -56.91352081298828,  50.57254409790039,
            -96.00484466552734,  50.21434020996094,   20.59501075744629,
            -60.699546813964844, -96.84203338623047,  57.25886917114258,
            -56.29146194458008,  73.71659851074219,   21.347652435302734,
            79.85667419433594,   -22.918458938598633, 1.2300019264221191,
            65.67964935302734,   99.89971160888672,   -62.321685791015625
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            -34.50435256958008,  85.73471069335938,   25.818017959594727,
            -91.37040710449219,  87.01370239257812,   0.17744044959545135,
            74.8826675415039,    -4.1699137687683105, -73.76497650146484,
            55.388797760009766,  -58.69169616699219,  -67.62332916259766,
            -89.83531188964844,  -8.275739669799805,  97.59577178955078,
            -48.968868255615234, 95.34497833251953,   -97.36360168457031,
            -59.90718078613281,  97.15335083007812,   -40.226924896240234,
            -61.5142707824707,   33.363243103027344,  12.693191528320312
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'max',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            17.72909164428711,   88.1480712890625,    25.818017959594727,
            11.817361831665039,  87.01370239257812,   0.17744044959545135,
            74.8826675415039,    -4.1699137687683105, 50.57254409790039,
            55.388797760009766,  50.21434020996094,   20.59501075744629,
            -60.699546813964844, -8.275739669799805,  97.59577178955078,
            -48.968868255615234, 95.34497833251953,   21.347652435302734,
            79.85667419433594,   97.15335083007812,   1.2300019264221191,
            65.67964935302734,   99.89971160888672,   12.693191528320312
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'max float32 broadcast 1D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [48.26115417480469],
          'descriptor': {shape: [1], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            17.72909164428711,   88.1480712890625,    -12.794827461242676,
            11.817361831665039,  19.51302146911621,   -62.87843704223633,
            50.771915435791016,  -56.91352081298828,  50.57254409790039,
            -96.00484466552734,  50.21434020996094,   20.59501075744629,
            -60.699546813964844, -96.84203338623047,  57.25886917114258,
            -56.29146194458008,  73.71659851074219,   21.347652435302734,
            79.85667419433594,   -22.918458938598633, 1.2300019264221191,
            65.67964935302734,   99.89971160888672,   -62.321685791015625
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'max',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            48.26115417480469,  88.1480712890625,  48.26115417480469,
            48.26115417480469,  48.26115417480469, 48.26115417480469,
            50.771915435791016, 48.26115417480469, 50.57254409790039,
            48.26115417480469,  50.21434020996094, 48.26115417480469,
            48.26115417480469,  48.26115417480469, 57.25886917114258,
            48.26115417480469,  73.71659851074219, 48.26115417480469,
            79.85667419433594,  48.26115417480469, 48.26115417480469,
            65.67964935302734,  99.89971160888672, 48.26115417480469
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'max float32 broadcast 2D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            17.72909164428711,   88.1480712890625,    -12.794827461242676,
            11.817361831665039,  19.51302146911621,   -62.87843704223633,
            50.771915435791016,  -56.91352081298828,  50.57254409790039,
            -96.00484466552734,  50.21434020996094,   20.59501075744629,
            -60.699546813964844, -96.84203338623047,  57.25886917114258,
            -56.29146194458008,  73.71659851074219,   21.347652435302734,
            79.85667419433594,   -22.918458938598633, 1.2300019264221191,
            65.67964935302734,   99.89971160888672,   -62.321685791015625
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            49.523128509521484, -61.555763244628906, -6.564808368682861,
            93.32227325439453, 3.3104186058044434, -98.31839752197266
          ],
          'descriptor': {shape: [2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'max',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            49.523128509521484, 88.1480712890625,    -6.564808368682861,
            93.32227325439453,  19.51302146911621,   -62.87843704223633,
            50.771915435791016, -56.91352081298828,  50.57254409790039,
            93.32227325439453,  50.21434020996094,   20.59501075744629,
            49.523128509521484, -61.555763244628906, 57.25886917114258,
            93.32227325439453,  73.71659851074219,   21.347652435302734,
            79.85667419433594,  -22.918458938598633, 1.2300019264221191,
            93.32227325439453,  99.89971160888672,   -62.321685791015625
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'max float32 broadcast 3D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            17.72909164428711,   88.1480712890625,    -12.794827461242676,
            11.817361831665039,  19.51302146911621,   -62.87843704223633,
            50.771915435791016,  -56.91352081298828,  50.57254409790039,
            -96.00484466552734,  50.21434020996094,   20.59501075744629,
            -60.699546813964844, -96.84203338623047,  57.25886917114258,
            -56.29146194458008,  73.71659851074219,   21.347652435302734,
            79.85667419433594,   -22.918458938598633, 1.2300019264221191,
            65.67964935302734,   99.89971160888672,   -62.321685791015625
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            39.32178497314453, 44.523738861083984, 58.046287536621094,
            84.13702392578125
          ],
          'descriptor': {shape: [2, 2, 1], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'max',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            39.32178497314453,  88.1480712890625,   39.32178497314453,
            44.523738861083984, 44.523738861083984, 44.523738861083984,
            58.046287536621094, 58.046287536621094, 58.046287536621094,
            84.13702392578125,  84.13702392578125,  84.13702392578125,
            39.32178497314453,  39.32178497314453,  57.25886917114258,
            44.523738861083984, 73.71659851074219,  44.523738861083984,
            79.85667419433594,  58.046287536621094, 58.046287536621094,
            84.13702392578125,  99.89971160888672,  84.13702392578125
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'max float32 broadcast 4D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [48.26115417480469],
          'descriptor': {shape: [1, 1, 1, 1], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            17.72909164428711,   88.1480712890625,    -12.794827461242676,
            11.817361831665039,  19.51302146911621,   -62.87843704223633,
            50.771915435791016,  -56.91352081298828,  50.57254409790039,
            -96.00484466552734,  50.21434020996094,   20.59501075744629,
            -60.699546813964844, -96.84203338623047,  57.25886917114258,
            -56.29146194458008,  73.71659851074219,   21.347652435302734,
            79.85667419433594,   -22.918458938598633, 1.2300019264221191,
            65.67964935302734,   99.89971160888672,   -62.321685791015625
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'max',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            48.26115417480469,  88.1480712890625,  48.26115417480469,
            48.26115417480469,  48.26115417480469, 48.26115417480469,
            50.771915435791016, 48.26115417480469, 50.57254409790039,
            48.26115417480469,  50.21434020996094, 48.26115417480469,
            48.26115417480469,  48.26115417480469, 57.25886917114258,
            48.26115417480469,  73.71659851074219, 48.26115417480469,
            79.85667419433594,  48.26115417480469, 48.26115417480469,
            65.67964935302734,  99.89971160888672, 48.26115417480469
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      }
    }
  }
];

if (navigator.ml) {
  maxTests.forEach((test) => {
    webnn_conformance_test(
        buildGraphAndCompute, getMaxPrecisionTolerance, test);
  });
} else {
  test(() => assert_implements(navigator.ml, 'missing navigator.ml'));
}