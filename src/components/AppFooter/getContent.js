const appSet1 = ['burger_bun', 'noodle', 'puff_snacks', 'dumpling'];
const appSet2 = ['savory_dip', 'burger_sauce', 'salad_dressing'];
const appSet3 = ['nugget', 'french_fries', 'potato_chip'];

export const getContentForAppVariant = ({
  variant = 'yellow',
  appName = 'burger',
}) => {
  if (variant === 'pink') {
    if (appSet1.includes(appName)) {
      return {
        slabs: {
          appealing: 58,
          neutral: 22,
          nonAppealing: 20,
        },
        text: 'pinkSet1Text1',
        text2: 'pinkSet1Text2',
        flavourText: 'pinkSet1FlavourText1',
        flavourText2: 'pinkSet1FlavourText2'
      };
    } else if (appSet2.includes(appName)) {
      return {
        slabs: {
          appealing: 71,
          neutral: 18,
          nonAppealing: 11,
        },
        text: 'pinkSet2Text1',
        text2: 'pinkSet2Text2',
        flavourText: 'pinkSet2FlavourText1',
        flavourText2: 'pinkSet2FlavourText2'
      };
    } else if (appSet3.includes(appName)) {
      return {
        slabs: {
          appealing: 59,
          neutral: 20,
          nonAppealing: 21,
        },
        text: 'pinkSet3Text1',
        text2: 'pinkSet3Text2',
        flavourText: 'pinkSet3FlavourText1',
        flavourText2: 'pinkSet3FlavourText2'
      };
    }
  } else if (variant === 'yellow') {
    if (appSet1.includes(appName)) {
      return {
        slabs: {
          appealing: 84,
          neutral: 12,
          nonAppealing: 4,
        },
        text: 'yellowSet1Text1',
        text2: 'yellowSet1Text2',
        flavourText: 'yellowSet1FlavourText1',
        flavourText2: 'yellowSet1FlavourText2'
      };
    } else if (appSet2.includes(appName)) {
      return {
        slabs: {
          appealing: 79,
          neutral: 15,
          nonAppealing: 5,
        },
        text: 'yellowSet2Text1',
        text2: '',
        flavourText: 'yellowSet1FlavourText1',
        flavourText2: 'yellowSet1FlavourText2'
      };
    } else if (appSet3.includes(appName)) {
      return {
        slabs: {
          appealing: 71,
          neutral: 21,
          nonAppealing: 8,
        },
        text: 'yellowSet3Text1',
        text2: 'yellowSet3Text2',
        flavourText: 'yellowSet1FlavourText1',
        flavourText2: 'yellowSet1FlavourText2'
      };
    }
  } else if (variant === 'blue') {
    if (appSet1.includes(appName)) {
      return {
        slabs: {
          appealing: 48,
          neutral: 21,
          nonAppealing: 31,
        },
        text: 'blueSet1Text1',
        text2: 'blueSet1Text2',
        flavourText: 'blueSet1FlavourText1',
        flavourText2: 'blueSet1FlavourText2'
      };
    } else if (appSet2.includes(appName)) {
      return {
        slabs: {
          appealing: 63,
          neutral: 18,
          nonAppealing: 19,
        },
        text: 'blueSet2Text1',
        text2: 'blueSet2Text2',
        flavourText: 'blueSet1FlavourText1',
        flavourText2: 'blueSet1FlavourText2'
      };
    } else if (appSet3.includes(appName)) {
      return {
        slabs: {
          appealing: 47,
          neutral: 22,
          nonAppealing: 31,
        },
        text: 'blueSet3Text1',
        text2: 'blueSet3Text2',
        flavourText: 'blueSet1FlavourText1',
        flavourText2: 'blueSet1FlavourText2'
      };
    }
  } else if (variant === 'purple') {
    if (appSet1.includes(appName)) {
      return {
        slabs: {
          appealing: 52,
          neutral: 24,
          nonAppealing: 24,
        },
        text: 'purpleSet1Text1',
        text2: 'purpleSet1Text2',
        flavourText: 'purpleSet1FlavourText1',
        flavourText2: 'purpleSet1FlavourText2'
      };
    } else if (appSet2.includes(appName)) {
      return {
        slabs: {
          appealing: 70,
          neutral: 17,
          nonAppealing: 13,
        },
        text: 'purpleSet2Text1',
        text2: 'purpleSet2Text2',
        flavourText: 'purpleSet1FlavourText1',
        flavourText2: 'purpleSet1FlavourText2'
      };
    } else if (appSet3.includes(appName)) {
      return {
        slabs: {
          appealing: 51,
          neutral: 22,
          nonAppealing: 27,
        },
        text: 'purpleSet3Text1',
        text2: 'purpleSet3Text2',
        flavourText: 'purpleSet1FlavourText1',
        flavourText2: 'purpleSet1FlavourText2'
      };
    }
  } else if (variant === 'orange') {
    if (appSet1.includes(appName)) {
      return {
        slabs: {
          appealing: 73,
          neutral: 18,
          nonAppealing: 9,
        },
        text: 'orangeSet1Text1',
        text2: 'orangeSet1Text2',
        flavourText: 'orangeSet1FlavourText1',
        flavourText2: 'orangeSet1FlavourText2'
      };
    } else if (appSet2.includes(appName)) {
      return {
        slabs: {
          appealing: 78,
          neutral: 16,
          nonAppealing: 6,
        },
        text: 'orangeSet2Text1',
        text2: 'orangeSet2Text2',
        flavourText: 'orangeSet1FlavourText1',
        flavourText2: 'orangeSet1FlavourText2'
      };
    } else if (appSet3.includes(appName)) {
      return {
        slabs: {
          appealing: 74,
          neutral: 16,
          nonAppealing: 10,
        },
        text: 'orangeSet3Text1',
        text2: 'orangeSet3Text2',
        flavourText: 'orangeSet1FlavourText1',
        flavourText2: 'orangeSet1FlavourText2'
      };
    }
  } else if (variant === 'brown') {
    if (appSet1.includes(appName)) {
      return {
        slabs: {
          appealing: 40,
          neutral: 25,
          nonAppealing: 35,
        },
        text: 'brownSet1Text1',
        text2: 'brownSet1Text2',
        flavourText: 'brownSet1FlavourText1',
        flavourText2: 'brownSet1FlavourText2'
      };
    } else if (appSet2.includes(appName)) {
      return {
        slabs: {
          appealing: 76,
          neutral: 20,
          nonAppealing: 4,
        },
        text: 'brownSet2Text1',
        text2: 'brownSet2Text2',
        flavourText: 'brownSet1FlavourText1',
        flavourText2: 'brownSet1FlavourText2'
      };
    } else if (appSet3.includes(appName)) {
      return {
        slabs: {
          appealing: 49,
          neutral: 28,
          nonAppealing: 24,
        },
        text: 'brownSet3Text1',
        text2: 'brownSet3Text2',
        flavourText: 'brownSet1FlavourText1',
        flavourText2: 'brownSet1FlavourText2'
      };
    }
  } else if (variant === 'black') {
    if (appSet1.includes(appName)) {
      return {
        slabs: {
          appealing: 35,
          neutral: 21,
          nonAppealing: 44,
        },
        text: 'blackSet1Text1',
        text2: 'blackSet1Text2',
        flavourText: 'blackSet1FlavourText1',
        flavourText2: 'blackSet1FlavourText2'
      };
    } else if (appSet2.includes(appName)) {
      return {
        slabs: {
          appealing: 60,
          neutral: 22,
          nonAppealing: 18,
        },
        text: 'blackSet2Text1',
        text2: 'blackSet2Text2',
        flavourText: 'blackSet1FlavourText1',
        flavourText2: 'blackSet1FlavourText2'
      };
    } else if (appSet3.includes(appName)) {
      return {
        slabs: {
          appealing: 42,
          neutral: 22,
          nonAppealing: 36,
        },
        text: 'blackSet3Text1',
        text2: 'blackSet3Text2',
        flavourText: 'blackSet1FlavourText1',
        flavourText2: 'blackSet1FlavourText2'
      };
    }
  } else if (variant === 'red') {
    if (appSet1.includes(appName)) {
      return {
        slabs: {
          appealing: 54,
          neutral: 22,
          nonAppealing: 24,
        },
        text: 'redSet1Text1',
        text2: 'redSet1Text2',
        flavourText: 'redSet1FlavourText1',
        flavourText2: 'redSet1FlavourText2'
      };
    } else if (appSet2.includes(appName)) {
      return {
        slabs: {
          appealing: 72,
          neutral: 17,
          nonAppealing: 11,
        },
        text: 'redSet2Text1',
        text2: 'redSet2Text2',
        flavourText: 'redSet1FlavourText1',
        flavourText2: 'redSet1FlavourText2'
      };
    } else if (appSet3.includes(appName)) {
      return {
        slabs: {
          appealing: 59,
          neutral: 20,
          nonAppealing: 21,
        },
        text: 'redSet3Text1',
        text2: 'redSet3Text2',
        flavourText: 'redSet1FlavourText1',
        flavourText2: 'redSet1FlavourText2'
      };
    }
  } else if (variant === 'green') {
    if (appSet1.includes(appName)) {
      return {
        slabs: {
          appealing: 45,
          neutral: 23,
          nonAppealing: 33,
        },
        text: 'greenSet1Text1',
        text2: 'greenSet1Text2',
        flavourText: 'greenSet1FlavourText1',
        flavourText2: 'greenSet1FlavourText2'
      };
    } else if (appSet2.includes(appName)) {
      return {
        slabs: {
          appealing: 74,
          neutral: 19,
          nonAppealing: 7,
        },
        text: 'greenSet2Text1',
        text2: 'greenSet2Text2',
        flavourText: 'greenSet1FlavourText1',
        flavourText2: 'greenSet1FlavourText2'
      };
    } else if (appSet3.includes(appName)) {
      return {
        slabs: {
          appealing: 54,
          neutral: 23,
          nonAppealing: 23,
        },
        text: 'greenSet3Text1',
        text2: 'greenSet3Text2',
        flavourText: 'greenSet1FlavourText1',
        flavourText2: 'greenSet1FlavourText2'
      };
    }
  }
};
