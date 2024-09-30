const appSet1 = ['burger_bun', 'noodle', 'puff_snacks', 'dumpling'];
const appSet2 = ['savory_dip', 'burger_sauce', 'salad_dressing'];
const appSet3 = ['nugget', 'french_fries', 'potato_chip'];

const imageFetcher = (appName, variant, type) => {
  return require(`../../assets/Intensity/${appName}/${type}/${variant}.jpg`);
};

const getAppIntensityIcons = (appName, variant) => {
  return [
    imageFetcher(appName, variant, 'BRIGHT'),
    imageFetcher(appName, `${variant}-alt`, 'PASTEL'),
  ];
};

const getSolutionData = (variant) => {
  if (variant === 'yellow') {
    return [
      {
        name: 'Marigold',
        icon: 'marigold',
        link: 'https://oterra.com/natural-colors?color=Yellow',
      },
      {
        name: 'Gardenia',
        icon: 'gardenia',
        link: 'https://oterra.com/natural-colors?color=Yellow',
      },
      {
        name: 'Palm Fruit',
        icon: 'palm-fruit',
        link: 'https://oterra.com/natural-colors?color=Yellow',
      },
      {
        name: 'Turmeric',
        icon: 'turmeric',
        link: 'https://oterra.com/natural-colors?color=Yellow',
      },
    ];
  }
  if (variant === 'black') {
    return [
      {
        name: 'Peat',
        icon: 'peat',
        link: 'https://oterra.com/natural-colors?color=Black',
      },
    ];
  }
  if (variant === 'pink') {
    return [
      {
        name: 'Cochineal',
        icon: 'cochineal',
        link: 'https://oterra.com/natural-colors?color=Pink',
      },
      {
        name: 'Hansen Sweet Potato',
        icon: 'hansen-sweet-potato',
        link: 'https://oterra.com/natural-colors?color=Pink',
      },
      {
        name: 'Purple Sweet Potato',
        icon: 'purple-sweet-potato',
        link: 'https://oterra.com/natural-colors?color=Pink',
      },
      {
        name: 'Red Beet',
        icon: 'red-beet',
        link: 'https://oterra.com/natural-colors?color=Pink',
      },
      {
        name: 'Red Radish',
        icon: 'red-radish',
        link: 'https://oterra.com/natural-colors?color=Pink',
      },
      {
        name: 'Lycopene',
        icon: 'lycopene',
        link: 'https://oterra.com/natural-colors?color=Pink',
      },
    ];
  }
  if (variant === 'brown') {
    return [
      {
        name: 'Malted Barley',
        icon: 'cochineal',
        link: 'https://oterra.com/natural-colors?color=Brown',
      },
      {
        name: 'Caramelised Sugar',
        icon: 'caramelised-sugar',
        link: 'https://oterra.com/natural-colors?color=Brown',
      },
      {
        name: 'Apple',
        icon: 'apple',
        link: 'https://oterra.com/natural-colors?color=Brown',
      }
    ];
  }
  if (variant === 'red') {
    return [
      {
        name: 'Hansen Sweet Potato',
        icon: 'hansen-sweet-potato',
        link: 'https://oterra.com/natural-colors?color=Red',
      },
      {
        name: 'Paprika',
        icon: 'paprika',
        link: 'https://oterra.com/natural-colors?color=Red',
      },
      {
        name: 'Hibiscus',
        icon: 'hibiscus',
        link: 'https://oterra.com/natural-colors?color=Red',
      },
      {
        name: 'Red Beet',
        icon: 'red-beet',
        link: 'https://oterra.com/natural-colors?color=Red',
      },
      {
        name: 'Purple Sweet Potato',
        icon: 'purple-sweet-potato',
        link: 'https://oterra.com/natural-colors?color=Red',
      },
      {
        name: 'Black Carrot',
        icon: 'black-carrot',
        link: 'https://oterra.com/natural-colors?color=Red',
      },
      {
        name: 'Cochineal',
        icon: 'cochineal',
        link: 'https://oterra.com/natural-colors?color=Red',
      },
    ];
  }
  if (variant === 'purple') {
    return [
      {
        name: 'Black Carrot',
        icon: 'black-carrot',
        link: 'https://oterra.com/natural-colors?color=Purple',
      },
      {
        name: 'Cochineal',
        icon: 'cochineal',
        link: 'https://oterra.com/natural-colors?color=Purple',
      },
      {
        name: 'Purple Sweet Potato',
        icon: 'purple-sweet-potato',
        link: 'https://oterra.com/natural-colors?color=Purple',
      }
    ];
  }
  if (variant === 'green') {
    return [
      {
        name: 'Green Leaf',
        icon: 'green-plant',
        link: 'https://oterra.com/natural-colors?color=Green',
      },
    ];
  }
  if (variant === 'orange') {
    return [
      {
        name: 'Orange carrot',
        icon: 'orange-carrot',
        link: 'https://oterra.com/natural-colors?color=Orange',
      },
      {
        name: 'Paprika',
        icon: 'paprika',
        link: 'https://oterra.com/natural-colors?color=Orange',
      },
      {
        name: 'Annatto',
        icon: 'annatto',
        link: 'https://oterra.com/natural-colors?color=Orange',
      },
      {
        name: 'Safflower',
        icon: 'safflower',
        link: 'https://oterra.com/natural-colors?color=Orange',
      },
      {
        name: 'Beta-Carotenel',
        icon: 'beta-carotene',
        link: 'https://oterra.com/natural-colors?color=Orange',
      }
    ];
  }
  if (variant === 'blue') {
    return [
      {
        name: 'Blue Spirulina',
        icon: 'spirulina',
        link: 'https://oterra.com/natural-colors?color=Blue',
      },
      {
        name: 'Jagua Fruit',
        icon: 'jagua-fruit',
        link: 'https://oterra.com/natural-colors?color=Blue',
      },
      {
        name: 'Gardenia Blue',
        icon: 'gardenia',
        link: 'https://oterra.com/natural-colors?color=Blue',
      }
    ];
  }
};

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
        flavourText2: 'pinkSet1FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'pinkSet1Intensity1',
        intensityTextBright: 'pinkSet1Intensity2',
        solutionData: getSolutionData(variant),
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
        flavourText2: 'pinkSet2FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'pinkSet2Intensity1',
        intensityTextBright: 'pinkSet2Intensity2',
        solutionData: getSolutionData(variant),
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
        flavourText2: 'pinkSet3FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'pinkSet3Intensity1',
        intensityTextBright: 'pinkSet3Intensity2',
        solutionData: getSolutionData(variant),
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
        flavourText2: 'yellowSet1FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'yellowSet1Intensity1',
        intensityTextBright: 'yellowSet1Intensity2',
        solutionData: getSolutionData(variant),
      };
    } else if (appSet2.includes(appName)) {
      return {
        slabs: {
          appealing: 80,
          neutral: 15,
          nonAppealing: 5,
        },
        text: 'yellowSet2Text1',
        text2: '',
        flavourText: 'yellowSet1FlavourText1',
        flavourText2: 'yellowSet1FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'yellowSet2Intensity1',
        intensityTextBright: 'yellowSet2Intensity2',
        solutionData: getSolutionData(variant),
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
        flavourText2: 'yellowSet1FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'yellowSet3Intensity1',
        intensityTextBright: 'yellowSet3Intensity2',
        solutionData: getSolutionData(variant),
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
        flavourText2: 'blueSet1FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'blueSet1Intensity1',
        intensityTextBright: 'blueSet1Intensity2',
        solutionData: getSolutionData(variant),
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
        flavourText2: 'blueSet1FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'blueSet2Intensity1',
        intensityTextBright: 'blueSet2Intensity2',
        solutionData: getSolutionData(variant),
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
        flavourText2: 'blueSet1FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'blueSet3Intensity1',
        intensityTextBright: 'blueSet3Intensity2',
        solutionData: getSolutionData(variant),
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
        flavourText2: 'purpleSet1FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'purpleSet1Intensity1',
        intensityTextBright: 'purpleSet1Intensity2',
        solutionData: getSolutionData(variant),
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
        flavourText2: 'purpleSet1FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'purpleSet2Intensity1',
        intensityTextBright: 'purpleSet2Intensity2',
        solutionData: getSolutionData(variant),
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
        flavourText2: 'purpleSet1FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'purpleSet3Intensity1',
        intensityTextBright: 'purpleSet3Intensity2',
        solutionData: getSolutionData(variant),
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
        flavourText2: 'orangeSet1FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'orangeSet1Intensity1',
        intensityTextBright: 'orangeSet1Intensity2',
        solutionData: getSolutionData(variant),
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
        flavourText: 'orangeSet2FlavourText1',
        flavourText2: 'orangeSet2FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'orangeSet2Intensity1',
        intensityTextBright: 'orangeSet2Intensity2',
        solutionData: getSolutionData(variant),
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
        flavourText: 'orangeSet3FlavourText1',
        flavourText2: 'orangeSet3FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'orangeSet3Intensity1',
        intensityTextBright: 'orangeSet3Intensity2',
        solutionData: getSolutionData(variant),
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
        flavourText2: 'brownSet1FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'brownSet1Intensity1',
        intensityTextBright: 'brownSet1Intensity2',
        solutionData: getSolutionData(variant),
      };
    } else if (appSet2.includes(appName)) {
      return {
        slabs: {
          appealing: 75,
          neutral: 20,
          nonAppealing: 15,
        },
        text: 'brownSet2Text1',
        text2: 'brownSet2Text2',
        flavourText: 'brownSet2FlavourText1',
        flavourText2: 'brownSet2FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'brownSet2Intensity1',
        intensityTextBright: 'brownSet2Intensity2',
        solutionData: getSolutionData(variant),
      };
    } else if (appSet3.includes(appName)) {
      return {
        slabs: {
          appealing: 50,
          neutral: 27,
          nonAppealing: 23,
        },
        text: 'brownSet3Text1',
        text2: 'brownSet3Text2',
        flavourText: 'brownSet3FlavourText1',
        flavourText2: 'brownSet3FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'brownSet3Intensity1',
        intensityTextBright: 'brownSet3Intensity2',
        solutionData: getSolutionData(variant),
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
        flavourText2: 'blackSet1FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'blackSet1Intensity1',
        intensityTextBright: 'blackSet1Intensity2',
        solutionData: getSolutionData(variant),
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
        flavourText: 'blackSet2FlavourText1',
        flavourText2: 'blackSet2FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'blackSet2Intensity1',
        intensityTextBright: 'blackSet2Intensity2',
        solutionData: getSolutionData(variant),
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
        flavourText: 'blackSet3FlavourText1',
        flavourText2: 'blackSet3FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'blackSet3Intensity1',
        intensityTextBright: 'blackSet3Intensity2',
        solutionData: getSolutionData(variant),
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
        flavourText2: 'redSet1FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'redSet1Intensity1',
        intensityTextBright: 'redSet1Intensity2',
        solutionData: getSolutionData(variant),
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
        flavourText: 'redSet2FlavourText1',
        flavourText2: 'redSet2FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'redSet2Intensity1',
        intensityTextBright: 'redSet2Intensity2',
        solutionData: getSolutionData(variant),
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
        flavourText: 'redSet3FlavourText1',
        flavourText2: 'redSet3FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'redSet3Intensity1',
        intensityTextBright: 'redSet3Intensity2',
        solutionData: getSolutionData(variant),
      };
    }
  } else if (variant === 'green') {
    if (appSet1.includes(appName)) {
      return {
        slabs: {
          appealing: 45,
          neutral: 22,
          nonAppealing: 33,
        },
        text: 'greenSet1Text1',
        text2: 'greenSet1Text2',
        flavourText: 'greenSet1FlavourText1',
        flavourText2: 'greenSet1FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'greenSet1Intensity1',
        intensityTextBright: 'greenSet1Intensity2',
        solutionData: getSolutionData(variant),
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
        flavourText: 'greenSet2FlavourText1',
        flavourText2: 'greenSet2FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'greenSet2Intensity1',
        intensityTextBright: 'greenSet2Intensity2',
        solutionData: getSolutionData(variant),
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
        flavourText: 'greenSet3FlavourText1',
        flavourText2: 'greenSet3FlavourText2',
        intensityIcons: getAppIntensityIcons(appName, variant),
        intensityTextPastel: 'greenSet3Intensity1',
        intensityTextBright: 'greenSet3Intensity2',
        solutionData: getSolutionData(variant),
      };
    }
  }
};
