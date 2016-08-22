module.exports = (function(UTIL, COLOR){
  var boxColor = COLOR.palette[2].box;
  var ringColor = COLOR.palette[2].ring;
    var level = {
        level: 3,
        speed: 1,
        background: COLOR.palette[2].background,
        way: {
            length: 4230,
            color: COLOR.palette[2].way,
            obstacles : [
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 350,
                        angle: 20
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 450,
                        angle: 60
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 300,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 557,
                        angle: -60
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 300,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 557,
                        angle: -100
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 760,
                        angle: -20
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 824,
                        angle: -45
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 50,
                        length: 25,
                        height: 10
                    },
                    color: boxColor,
                    position: {
                        distance: 863,
                        angle: 71
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 10,
                        length: 80,
                        height: 50
                    },
                    color: boxColor,
                    position: {
                        distance: 934,
                        angle: 83
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 1068,
                        angle: -78
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 1162,
                        angle: 37
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 35,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 1357,
                        angle: 20
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 30
                    },
                    color: boxColor,
                    position: {
                        distance: 1447,
                        angle: -79
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 20,
                        length: 25,
                        height: 40
                    },
                    color: boxColor,
                    position: {
                        distance: 1457,
                        angle: -50
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 37,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 1625,
                        angle: -89
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 5,
                        length: 5,
                        height: 1
                    },
                    color: boxColor,
                    position: {
                        distance: 1721,
                        angle: 9
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 10,
                        length: 75,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 1843,
                        angle: 76
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 1900,
                        angle: -81
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 1973,
                        angle: -70
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 2000,
                        angle: 0
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 1420,
                        angle: -36
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 1420,
                        angle: -90
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 1532,
                        angle: -102
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 1635,
                        angle: -154
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 546,
                        angle: -167
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 892,
                        angle: 180
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 200,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 1057,
                        angle: 152
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 37,
                        length: 25,
                        height: 60
                    },
                    color: boxColor,
                    position: {
                        distance: 1500,
                        angle: -170
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 1290,
                        angle: 159
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 1923,
                        angle: 64
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 2046,
                        angle: -65
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 2298,
                        angle: -76
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 2438,
                        angle: -91
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 2675,
                        angle: -95
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 2865,
                        angle: 25
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 2964,
                        angle: -27
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 3100,
                        angle: 43
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 2567,
                        angle: 170
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 2750,
                        angle: -153
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 100,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 3050,
                        angle: 138
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 5,
                        length: 100,
                        height: 10
                    },
                    color: boxColor,
                    position: {
                        distance: 2679,
                        angle: -81
                    }
                },


                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 300,
                        angle: 40
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 350,
                        angle: 42
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 400,
                        angle: 44
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 450,
                        angle: 46
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 500,
                        angle: 48
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 550,
                        angle: 50
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 700,
                        angle: -90
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 770,
                        angle: -80
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 800,
                        angle: -80
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 950,
                        angle: -80
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 1000,
                        angle: -80
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 1050,
                        angle: -80
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 1225,
                        angle: 30
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 1300,
                        angle: 25
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 1375,
                        angle: 20
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 1450,
                        angle: 15
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 1700,
                        angle: -15
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 1750,
                        angle: -20
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 1800,
                        angle: -25
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 1950,
                        angle: -30
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 2000,
                        angle: -30
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 2050,
                        angle: -30
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 2500,
                        angle: -40
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 2550,
                        angle: -40
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 2600,
                        angle: -40
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 2650,
                        angle: -40
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 2750,
                        angle: -50
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 2800,
                        angle: -50
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 2900,
                        angle: -50
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 3000,
                        angle: -50
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 3100,
                        angle: 38
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 3500,
                        angle: -177
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 3600,
                        angle: -168
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 3700,
                        angle: -150
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 3140,
                        angle: 45
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 3240,
                        angle: 50
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 3300,
                        angle: 55
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 3600,
                        angle: 0
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 3650,
                        angle: 0
                    }
                },
                {
                    type: 'diamond',
                    size: {},
                    color: 0xffffff,
                    position: {
                        distance: 3675,
                        angle: 0
                    }
                },



                {
                    type: 'ring',
                    size: {},
                    color: ringColor,
                    position: {
                        distance: Math.round(UTIL.randomNumberInRange(500,700)),
                        angle: 0
                    }
                },
                {
                    type: 'ring',
                    size: {},
                    color: ringColor,
                    position: {
                        distance: Math.round(UTIL.randomNumberInRange(1000,1400)),
                        angle: 0
                    }
                },
                {
                    type: 'ring',
                    size: {},
                    color: ringColor,
                    position: {
                        distance: Math.round(UTIL.randomNumberInRange(1500,1900)),
                        angle: 0
                    }
                },
                {
                    type: 'ring',
                    size: {},
                    color: ringColor,
                    position: {
                        distance: Math.round(UTIL.randomNumberInRange(2100,2400)),
                        angle: 0
                    }
                },
                {
                    type: 'ring',
                    size: {},
                    color: ringColor,
                    position: {
                        distance: Math.round(UTIL.randomNumberInRange(2600,2800)),
                        angle: 0
                    }
                },
                {
                    type: 'ring',
                    size: {},
                    color: ringColor,
                    position: {
                        distance: Math.round(UTIL.randomNumberInRange(3000,3100)),
                        angle: 0
                    }
                },/*
                {
                    type: 'ring',
                    size: {},
                    color: ringColor,
                    position: {
                        distance: Math.round(UTIL.randomNumberInRange(330,3500)),
                        angle: 0
                    }
                },
                {
                    type: 'ring',
                    size: {},
                    color: ringColor,
                    position: {
                        distance: Math.round(UTIL.randomNumberInRange(3800,4000)),
                        angle: 0
                    }
                }*/


            ]
        }
    };

    return level;
})(require('../UTIL'),
require('../COLOR'));
