export enum Category {
  HYDROGEN = 'hydrogen',
  ALKALI = 'alkali',
  ALKALINE = 'alkaline',
  TRANSITION = 'transition',
  LANTHANIDES = 'lanthanides',
  ACTINIDES = 'actinides',
  BORON_GROUP = 'boron-group',
  CARBON_GROUP = 'carbon-group',
  NITROGTN_GROUP = 'nitrogen-group',
  OXYGEN_GROUP = 'oxygen-group',
  HALOGEN_GROUP = 'halogen-group',
  NOBLE = 'noble',
}

export interface TableElement {
  name: string;
  symbol: string;
  position: number;
  row: number;
  column: number;
  category: Category;
  visible?: boolean;
}

export const allElements: TableElement[] = [
  {
    name: 'Hydrogen',
    symbol: 'H',
    position: 1,
    row: 1,
    column: 1,
    category: Category.HYDROGEN,
  },
  {
    name: 'Helium',
    symbol: 'He',
    position: 2,
    row: 1,
    column: 18,
    category: Category.NOBLE,
  },
  {
    name: 'Lithium',
    symbol: 'Li',
    position: 3,
    row: 2,
    column: 1,
    category: Category.ALKALI,
  },
  {
    name: 'Beryllium',
    symbol: 'Be',
    position: 4,
    row: 2,
    column: 2,
    category: Category.ALKALINE,
  },
  {
    name: 'Boron',
    symbol: 'B',
    position: 5,
    row: 2,
    column: 13,
    category: Category.BORON_GROUP,
  },
  {
    name: 'Carbon',
    symbol: 'C',
    position: 6,
    row: 2,
    column: 14,
    category: Category.CARBON_GROUP,
  },
  {
    name: 'Nitrogen',
    symbol: 'N',
    position: 7,
    row: 2,
    column: 15,
    category: Category.NITROGTN_GROUP,
  },
  {
    name: 'Oxygen',
    symbol: 'O',
    position: 8,
    row: 2,
    column: 16,
    category: Category.OXYGEN_GROUP,
  },
  {
    name: 'Fluorine',
    symbol: 'F',
    position: 9,
    row: 2,
    column: 17,
    category: Category.HALOGEN_GROUP,
  },
  {
    name: 'Neon',
    symbol: 'Ne',
    position: 10,
    row: 2,
    column: 18,
    category: Category.NOBLE,
  },
  {
    name: 'Sodium',
    symbol: 'Na',
    position: 11,
    row: 3,
    column: 1,
    category: Category.ALKALI,
  },
  {
    name: 'Magnesium',
    symbol: 'Mg',
    position: 12,
    row: 3,
    column: 2,
    category: Category.ALKALINE,
  },
  {
    name: 'Aluminium',
    symbol: 'Al',
    position: 13,
    row: 3,
    column: 13,
    category: Category.BORON_GROUP,
  },
  {
    name: 'Silicon',
    symbol: 'Si',
    position: 14,
    row: 3,
    column: 14,
    category: Category.CARBON_GROUP,
  },
  {
    name: 'Phosphorus',
    symbol: 'P',
    position: 15,
    row: 3,
    column: 15,
    category: Category.NITROGTN_GROUP,
  },
  {
    name: 'Sulfur',
    symbol: 'S',
    position: 16,
    row: 3,
    column: 16,
    category: Category.OXYGEN_GROUP,
  },
  {
    name: 'Chlorine',
    symbol: 'Cl',
    position: 17,
    row: 3,
    column: 17,
    category: Category.HALOGEN_GROUP,
  },
  {
    name: 'Argin',
    symbol: 'Ar',
    position: 18,
    row: 3,
    column: 18,
    category: Category.NOBLE,
  },
  {
    name: 'Potassium',
    symbol: 'K',
    position: 19,
    row: 4,
    column: 1,
    category: Category.ALKALI,
  },
  {
    name: 'Calcium',
    symbol: 'Ca',
    position: 20,
    row: 4,
    column: 2,
    category: Category.ALKALINE,
  },
  {
    name: 'Scandium',
    symbol: 'Sc',
    position: 21,
    row: 4,
    column: 3,
    category: Category.TRANSITION,
  },
  {
    name: 'Titanium',
    symbol: 'Ti',
    position: 22,
    row: 4,
    column: 4,
    category: Category.TRANSITION,
  },
  {
    name: 'Vanadium',
    symbol: 'V',
    position: 23,
    row: 4,
    column: 5,
    category: Category.TRANSITION,
  },
  {
    name: 'Chromium',
    symbol: 'Cr',
    position: 24,
    row: 4,
    column: 6,
    category: Category.TRANSITION,
  },
  {
    name: 'Manganese',
    symbol: 'Mn',
    position: 25,
    row: 4,
    column: 7,
    category: Category.TRANSITION,
  },
  {
    name: 'Iron',
    symbol: 'Fe',
    position: 26,
    row: 4,
    column: 8,
    category: Category.TRANSITION,
  },
  {
    name: 'Cobalt',
    symbol: 'Co',
    position: 27,
    row: 4,
    column: 9,
    category: Category.TRANSITION,
  },
  {
    name: 'Nickel',
    symbol: 'Ni',
    position: 28,
    row: 4,
    column: 10,
    category: Category.TRANSITION,
  },
  {
    name: 'Copper',
    symbol: 'Cu',
    position: 29,
    row: 4,
    column: 11,
    category: Category.TRANSITION,
  },
  {
    name: 'Zinc',
    symbol: 'Zn',
    position: 30,
    row: 4,
    column: 12,
    category: Category.TRANSITION,
  },
  {
    name: 'Gallium',
    symbol: 'Ga',
    position: 31,
    row: 4,
    column: 13,
    category: Category.BORON_GROUP,
  },
  {
    name: 'Germanium',
    symbol: 'Ge',
    position: 32,
    row: 4,
    column: 14,
    category: Category.CARBON_GROUP,
  },
  {
    name: 'Arsenic',
    symbol: 'As',
    position: 33,
    row: 4,
    column: 15,
    category: Category.NITROGTN_GROUP,
  },
  {
    name: 'Selenium',
    symbol: 'Se',
    position: 34,
    row: 4,
    column: 16,
    category: Category.OXYGEN_GROUP,
  },
  {
    name: 'Bromine',
    symbol: 'Br',
    position: 35,
    row: 4,
    column: 17,
    category: Category.HALOGEN_GROUP,
  },
  {
    name: 'Krypton',
    symbol: 'Kr',
    position: 36,
    row: 4,
    column: 18,
    category: Category.NOBLE,
  },
  {
    name: 'Rubidium',
    symbol: 'Rb',
    position: 37,
    row: 5,
    column: 1,
    category: Category.ALKALI,
  },
  {
    name: 'Strontium',
    symbol: 'Sr',
    position: 38,
    row: 5,
    column: 2,
    category: Category.ALKALINE,
  },
  {
    name: 'Yttrium',
    symbol: 'Y',
    position: 39,
    row: 5,
    column: 3,
    category: Category.TRANSITION,
  },
  {
    name: 'Zirconium',
    symbol: 'Zr',
    position: 40,
    row: 5,
    column: 4,
    category: Category.TRANSITION,
  },
  {
    name: 'Niobium',
    symbol: 'Nb',
    position: 41,
    row: 5,
    column: 5,
    category: Category.TRANSITION,
  },
  {
    name: 'Molybdenum',
    symbol: 'Mo',
    position: 42,
    row: 5,
    column: 6,
    category: Category.TRANSITION,
  },
  {
    name: 'Tecnetium',
    symbol: 'Tc',
    position: 43,
    row: 5,
    column: 7,
    category: Category.TRANSITION,
  },
  {
    name: 'Ruthenium',
    symbol: 'Ru',
    position: 44,
    row: 5,
    column: 8,
    category: Category.TRANSITION,
  },
  {
    name: 'Rhodium',
    symbol: 'Rh',
    position: 45,
    row: 5,
    column: 9,
    category: Category.TRANSITION,
  },
  {
    name: 'Palladium',
    symbol: 'Pd',
    position: 46,
    row: 5,
    column: 10,
    category: Category.TRANSITION,
  },
  {
    name: 'Silver',
    symbol: 'Ag',
    position: 47,
    row: 5,
    column: 11,
    category: Category.TRANSITION,
  },
  {
    name: 'Cadmium',
    symbol: 'Cd',
    position: 48,
    row: 5,
    column: 12,
    category: Category.TRANSITION,
  },
  {
    name: 'Indium',
    symbol: 'In',
    position: 49,
    row: 5,
    column: 13,
    category: Category.BORON_GROUP,
  },
  {
    name: 'Tin',
    symbol: 'Sn',
    position: 50,
    row: 5,
    column: 14,
    category: Category.CARBON_GROUP,
  },
  {
    name: 'Antimony',
    symbol: 'Sb',
    position: 51,
    row: 5,
    column: 15,
    category: Category.NITROGTN_GROUP,
  },
  {
    name: 'Tellurium',
    symbol: 'Te',
    position: 52,
    row: 5,
    column: 16,
    category: Category.OXYGEN_GROUP,
  },
  {
    name: 'Iodine',
    symbol: 'I',
    position: 53,
    row: 5,
    column: 17,
    category: Category.HALOGEN_GROUP,
  },
  {
    name: 'Xenon',
    symbol: 'Xe',
    position: 54,
    row: 5,
    column: 18,
    category: Category.NOBLE,
  },
  {
    name: 'Caesium',
    symbol: 'Cs',
    position: 55,
    row: 6,
    column: 1,
    category: Category.ALKALI,
  },
  {
    name: 'Barium',
    symbol: 'Ba',
    position: 56,
    row: 6,
    column: 2,
    category: Category.ALKALINE,
  },
  {
    name: 'Lanthanum',
    symbol: 'La',
    position: 57,
    row: 6,
    column: 3,
    category: Category.LANTHANIDES,
  },
  {
    name: 'Cerium',
    symbol: 'Ce',
    position: 58,
    row: 1,
    column: 1,
    category: Category.LANTHANIDES,
  },
  {
    name: 'Praseodymium',
    symbol: 'Pr',
    position: 59,
    row: 1,
    column: 2,
    category: Category.LANTHANIDES,
  },
  {
    name: 'Neodymium',
    symbol: 'Nd',
    position: 60,
    row: 1,
    column: 3,
    category: Category.LANTHANIDES,
  },
  {
    name: 'Promethium',
    symbol: 'Pm',
    position: 61,
    row: 1,
    column: 4,
    category: Category.LANTHANIDES,
  },
  {
    name: 'Samarium',
    symbol: 'Sm',
    position: 62,
    row: 1,
    column: 5,
    category: Category.LANTHANIDES,
  },
  {
    name: 'Europium',
    symbol: 'Eu',
    position: 63,
    row: 1,
    column: 6,
    category: Category.LANTHANIDES,
  },
  {
    name: 'Gadolinium',
    symbol: 'Gd',
    position: 64,
    row: 1,
    column: 7,
    category: Category.LANTHANIDES,
  },
  {
    name: 'Terbium',
    symbol: 'Tb',
    position: 65,
    row: 1,
    column: 8,
    category: Category.LANTHANIDES,
  },
  {
    name: 'Dysprosium',
    symbol: 'Dy',
    position: 66,
    row: 1,
    column: 9,
    category: Category.LANTHANIDES,
  },
  {
    name: 'Holmium',
    symbol: 'Ho',
    position: 67,
    row: 1,
    column: 10,
    category: Category.LANTHANIDES,
  },
  {
    name: 'Erbium',
    symbol: 'Er',
    position: 68,
    row: 1,
    column: 11,
    category: Category.LANTHANIDES,
  },
  {
    name: 'Thulium',
    symbol: 'Tm',
    position: 69,
    row: 1,
    column: 12,
    category: Category.LANTHANIDES,
  },
  {
    name: 'Ytterbium',
    symbol: 'Yb',
    position: 70,
    row: 1,
    column: 13,
    category: Category.LANTHANIDES,
  },
  {
    name: 'Lutetium',
    symbol: 'Lu',
    position: 71,
    row: 1,
    column: 14,
    category: Category.LANTHANIDES,
  },
  {
    name: 'Hafnium',
    symbol: 'Hf',
    position: 72,
    row: 6,
    column: 4,
    category: Category.TRANSITION,
  },
  {
    name: 'Tantalum',
    symbol: 'Ta',
    position: 73,
    row: 6,
    column: 5,
    category: Category.TRANSITION,
  },
  {
    name: 'Tungsten',
    symbol: 'W',
    position: 74,
    row: 6,
    column: 6,
    category: Category.TRANSITION,
  },
  {
    name: 'Rhenium',
    symbol: 'Re',
    position: 75,
    row: 6,
    column: 7,
    category: Category.TRANSITION,
  },
  {
    name: 'Osmium',
    symbol: 'Os',
    position: 76,
    row: 6,
    column: 8,
    category: Category.TRANSITION,
  },
  {
    name: 'Iridium',
    symbol: 'Ir',
    position: 77,
    row: 6,
    column: 9,
    category: Category.TRANSITION,
  },
  {
    name: 'Platinum',
    symbol: 'Pt',
    position: 78,
    row: 6,
    column: 10,
    category: Category.TRANSITION,
  },
  {
    name: 'Gold',
    symbol: 'Au',
    position: 79,
    row: 6,
    column: 11,
    category: Category.TRANSITION,
  },
  {
    name: 'Mercury',
    symbol: 'Hg',
    position: 80,
    row: 6,
    column: 12,
    category: Category.TRANSITION,
  },
  {
    name: 'Thallium',
    symbol: 'Tl',
    position: 81,
    row: 6,
    column: 13,
    category: Category.BORON_GROUP,
  },
  {
    name: 'Lead',
    symbol: 'Pb',
    position: 82,
    row: 6,
    column: 14,
    category: Category.CARBON_GROUP,
  },
  {
    name: 'Bismuth',
    symbol: 'Bi',
    position: 83,
    row: 6,
    column: 15,
    category: Category.NITROGTN_GROUP,
  },
  {
    name: 'Polonium',
    symbol: 'Po',
    position: 84,
    row: 6,
    column: 16,
    category: Category.OXYGEN_GROUP,
  },
  {
    name: 'Astatine',
    symbol: 'At',
    position: 85,
    row: 6,
    column: 17,
    category: Category.HALOGEN_GROUP,
  },
  {
    name: 'Radon',
    symbol: 'Rn',
    position: 86,
    row: 6,
    column: 18,
    category: Category.NOBLE,
  },
  {
    name: 'Francium',
    symbol: 'Fr',
    position: 87,
    row: 7,
    column: 1,
    category: Category.ALKALI,
  },
  {
    name: 'Radium',
    symbol: 'Ra',
    position: 88,
    row: 7,
    column: 2,
    category: Category.ALKALINE,
  },
  {
    name: 'Actinium',
    symbol: 'Ac',
    position: 89,
    row: 7,
    column: 3,
    category: Category.ACTINIDES,
  },
  {
    name: 'Thorium',
    symbol: 'Th',
    position: 90,
    row: 1,
    column: 1,
    category: Category.ACTINIDES,
  },
  {
    name: 'Protactinium',
    symbol: 'Pa',
    position: 91,
    row: 1,
    column: 2,
    category: Category.ACTINIDES,
  },
  {
    name: 'Uranium',
    symbol: 'U',
    position: 92,
    row: 1,
    column: 3,
    category: Category.ACTINIDES,
  },
  {
    name: 'Neptunium',
    symbol: 'Np',
    position: 93,
    row: 1,
    column: 4,
    category: Category.ACTINIDES,
  },
  {
    name: 'Plutonium',
    symbol: 'Pu',
    position: 94,
    row: 1,
    column: 5,
    category: Category.ACTINIDES,
  },
  {
    name: 'Americium',
    symbol: 'Am',
    position: 95,
    row: 1,
    column: 6,
    category: Category.ACTINIDES,
  },
  {
    name: 'Curium',
    symbol: 'Cm',
    position: 96,
    row: 1,
    column: 7,
    category: Category.ACTINIDES,
  },
  {
    name: 'Berkelium',
    symbol: 'Bk',
    position: 97,
    row: 1,
    column: 8,
    category: Category.ACTINIDES,
  },
  {
    name: 'Californium',
    symbol: 'Cf',
    position: 98,
    row: 1,
    column: 9,
    category: Category.ACTINIDES,
  },
  {
    name: 'Einsteinium',
    symbol: 'Es',
    position: 99,
    row: 1,
    column: 10,
    category: Category.ACTINIDES,
  },
  {
    name: 'Fermium',
    symbol: 'Fm',
    position: 100,
    row: 1,
    column: 11,
    category: Category.ACTINIDES,
  },
  {
    name: 'Mendelevium',
    symbol: 'Md',
    position: 101,
    row: 1,
    column: 12,
    category: Category.ACTINIDES,
  },
  {
    name: 'Nobelium',
    symbol: 'No',
    position: 102,
    row: 1,
    column: 13,
    category: Category.ACTINIDES,
  },
  {
    name: 'Lawrencium',
    symbol: 'Lr',
    position: 103,
    row: 1,
    column: 14,
    category: Category.ACTINIDES,
  },
  {
    name: 'Rutherfordium',
    symbol: 'Rf',
    position: 104,
    row: 7,
    column: 4,
    category: Category.TRANSITION,
  },
  {
    name: 'Dubnium',
    symbol: 'Db',
    position: 105,
    row: 7,
    column: 5,
    category: Category.TRANSITION,
  },
  {
    name: 'Seaborgium',
    symbol: 'Sg',
    position: 106,
    row: 7,
    column: 6,
    category: Category.TRANSITION,
  },
  {
    name: 'Bohrium',
    symbol: 'Bh',
    position: 107,
    row: 7,
    column: 7,
    category: Category.TRANSITION,
  },
  {
    name: 'Hassium',
    symbol: 'Hs',
    position: 108,
    row: 7,
    column: 8,
    category: Category.TRANSITION,
  },
  {
    name: 'Meitnerium',
    symbol: 'Mt',
    position: 109,
    row: 7,
    column: 9,
    category: Category.TRANSITION,
  },
  {
    name: 'Darmstadtium',
    symbol: 'Ds',
    position: 110,
    row: 7,
    column: 10,
    category: Category.TRANSITION,
  },
  {
    name: 'Roentgenium',
    symbol: 'Rg',
    position: 111,
    row: 7,
    column: 11,
    category: Category.TRANSITION,
  },
  {
    name: 'Copernicium',
    symbol: 'Cn',
    position: 112,
    row: 7,
    column: 12,
    category: Category.TRANSITION,
  },
  {
    name: 'Nihonium',
    symbol: 'Nh',
    position: 113,
    row: 7,
    column: 13,
    category: Category.BORON_GROUP,
  },
  {
    name: 'Flerovium',
    symbol: 'Fl',
    position: 114,
    row: 7,
    column: 14,
    category: Category.CARBON_GROUP,
  },
  {
    name: 'Moscovium',
    symbol: 'Mc',
    position: 115,
    row: 7,
    column: 15,
    category: Category.NITROGTN_GROUP,
  },
  {
    name: 'Livermorium',
    symbol: 'Lv',
    position: 116,
    row: 7,
    column: 16,
    category: Category.OXYGEN_GROUP,
  },
  {
    name: 'Tennessine',
    symbol: 'Ts',
    position: 117,
    row: 7,
    column: 17,
    category: Category.HALOGEN_GROUP,
  },
  {
    name: 'Oganesson',
    symbol: 'Og',
    position: 118,
    row: 7,
    column: 18,
    category: Category.NOBLE,
  },
];
