import { Craft } from '../../../model/garland-tools/craft';
import { CrafterStats } from '../model/crafter-stats';

export const chocobo_weathervane_Recipe: Craft = {
  'id': '1675',
  'job': 9,
  'rlvl': 50,
  'durability': 80,
  'quality': 1320,
  'progress': 595,
  'lvl': 50,
  'hq': 0,
  'quickSynth': 0,
  'ingredients': [
    {'id': 5059, 'amount': 4, 'quality': 53},
    {'id': 5376, 'amount': 4, 'quality': 55},
    {'id': 5094, 'amount': 4, 'quality': 55},
    {'id': 2, 'amount': 6},
    {'id': 5, 'amount': 6}
  ],
  'complexity': {'nq': 1122, 'hq': 1142}
};

export const darksteel_nugget_Recipe: Craft = {
  'id': '1207',
  'job': 9,
  'rlvl': 55,
  'durability': 40,
  'quality': 2646,
  'progress': 97,
  'lvl': 50,
  'stars': 1,
  'hq': 1,
  'quickSynth': 1,
  'ingredients': [
    {'id': 5121,'amount': 3, 'quality': 441},
    {'id': 8, 'amount': 3}
  ],
  'complexity': {'nq': 118, 'hq': 138}
};

export const darksteel_ingot_Recipe: Craft = {
  'id': '1209',
  'job': 9,
  'rlvl': 70,
  'durability': 40,
  'quality': 2921,
  'progress': 116,
  'lvl': 50,
  'stars': 2,
  'hq': 1,
  'quickSynth': 1,
  'ingredients': [
    {'id': 5061, 'amount': 2, 'quality': 108},
    {'id': 5530, 'amount': 9, 'quality': 138},
    {'id': 14, 'amount': 1}
  ],
  'complexity': {'nq': 941, 'hq': 961}
};

export const wolfram_ingot_Recipe: Craft = {
  'id': '30291',
  'job': 9,
  'rlvl': 90,
  'durability': 80,
  'quality': 4980,
  'progress': 445,
  'lvl': 50,
  'stars': 3,
  'hq': 1,
  'quickSynth': 1,
  'unlockId': 7779,
  'ingredients': [
    {'id': 7597, 'amount': 1},
    {'id': 7588, 'amount': 1, 'quality': 858},
    {'id': 5116, 'amount': 1, 'quality': 527},
    {'id': 14, 'amount': 2},
    {'id': 17, 'amount': 1}
  ],
  'complexity': {'nq': 197, 'hq': 217}
};

export const gradeII_infusion_of_str_Recipe: Craft = {
  'id': '32644',
  'job': 14,
  'rlvl': 350,
  'durability': 70,
  'quality': 25881,
  'progress': 3548,
  'lvl': 70,
  'stars': 3,
  'yield': 3,
  'hq': 1,
  'quickSynth': 1,
  'controlReq': 1350,
  'craftsmanshipReq': 1500,
  'unlockId': 22315,
  'ingredients': [
    {
      'id': 21085,
      'amount': 1,
      'quality': 2680
    },
    {
      'id': 19907,
      'amount': 1,
      'quality': 2573
    },
    {
      'id': 19911,
      'amount': 2,
      'quality': 2546
    },
    {
      'id': 20014,
      'amount': 1,
      'quality': 2591
    },
    {
      'id': 19,
      'amount': 2
    },
    {
      'id': 18,
      'amount': 2
    }
  ],
  'complexity': {
    'nq': 165,
    'hq': 170
  }
};

export const infusionOfMind_Recipe: Craft = {
  'id': '3595',
  'job': 14,
  'rlvl': 288,
  'durability': 80,
  'quality': 12913,
  'progress': 2854,
  'lvl': 69,
  'yield': 3,
  'hq': 1,
  'quickSynth': 1,
  'ingredients': [
    {
      'id': 19872,
      'amount': 1,
      'quality': 1244
    },
    {
      'id': 19907,
      'amount': 1,
      'quality': 1313
    },
    {
      'id': 19915,
      'amount': 2,
      'quality': 1313
    },
    {
      'id': 20013,
      'amount': 1,
      'quality': 1272
    },
    {
      'id': 19,
      'amount': 2
    },
    {
      'id': 18,
      'amount': 1
    }
  ],
  'complexity': {
    'nq': 155,
    'hq': 160
  }
};

export const beetle_glue_Recipe: Craft = {
  'id': '3606',
  'job': 14,
  'rlvl': 273,
  'durability': 40,
  'quality': 10851,
  'progress': 1058,
  'lvl': 64,
  'hq': 1,
  'quickSynth': 1,
  'ingredients': [
    {'id': 19924, 'amount': 2, 'quality': 1339},
    {'id': 19908, 'amount': 1, 'quality': 1406},
    {'id': 19922, 'amount': 1, 'quality': 1339},
    {'id': 13, 'amount': 4}
  ],
  'complexity': {'nq': 142, 'hq': 162}
};

export const alc_70_350_stats: CrafterStats = new CrafterStats(
  14,
  1467,
  1468,
  474,
  true,
  70,
  [
    70,
    70,
    70,
    70,
    70,
    70,
    70,
    70
  ]);

export const acchan_stats: CrafterStats = new CrafterStats(
  14,
  1719,
  1729,
  493,
  true,
  70,
  [
    70,
    70,
    70,
    70,
    70,
    70,
    70,
    70
  ]);

export const acchan_matcha_stats: CrafterStats = new CrafterStats(
  14,
  1719,
  1790,
  549,
  true,
  70,
  [
    70,
    70,
    70,
    70,
    70,
    70,
    70,
    70
  ]);

export const arkhelyi_stats: CrafterStats = new CrafterStats(
  14,
  765,
  667,
  365,
  false,
  64,
  [
    70,
    64,
    68,
    70,
    70,
    70,
    64,
    63
  ]);

export const aurelle_stats: CrafterStats = new CrafterStats(
  9,
  454,
  407,
  398,
  false,
  50,
  [
    50,
    50,
    50,
    50,
    50,
    50,
    50,
    50
  ]);
