type Coordinates = {
  latitude: number;
  longitude: number;
};

const KNOWN_COORDINATES: Record<string, Coordinates> = {
  'Stephansplatz 3, 1010 Vienna, Austria': {
    latitude: 48.2085,
    longitude: 16.3721,
  },
  'Michaelerkuppel, 1010 Vienna, Austria': {
    latitude: 48.2066,
    longitude: 16.3658,
  },
  'Prinz Eugen-Straße 27, 1030 Vienna, Austria': {
    latitude: 48.1916,
    longitude: 16.3802,
  },
  'Schönbrunner Schloßstraße 47, 1130 Vienna, Austria': {
    latitude: 48.1845,
    longitude: 16.3122,
  },
  'Vienna, 1010, Austria': { latitude: 48.2082, longitude: 16.3738 },

  'Getreidegasse 9, 5020 Salzburg, Austria': {
    latitude: 47.7997,
    longitude: 13.0439,
  },
  'Altstadt Salzburg, 5020 Salzburg, Austria': {
    latitude: 47.7982,
    longitude: 13.0477,
  },
  'Mönchsberg 34, 5020 Salzburg, Austria': {
    latitude: 47.7951,
    longitude: 13.0477,
  },
  'Salzburg, 5020, Austria': { latitude: 47.8095, longitude: 13.055 },

  'Graz, 8010, Austria': { latitude: 47.0707, longitude: 15.4395 },
  'Innsbruck, 6020, Austria': { latitude: 47.2692, longitude: 11.4041 },
  'Linz, 4020, Austria': { latitude: 48.3069, longitude: 14.2858 },

  'Hallstatt, 4830, Upper Austria, Austria': {
    latitude: 47.5622,
    longitude: 13.6493,
  },
  'Grossglockner Hochalpenstraße, 5672 Fusch an der Großglocknerstraße, Austria':
    { latitude: 47.0849, longitude: 12.8422 },
  'Wachau Valley, 3602 Dürnstein, Lower Austria, Austria': {
    latitude: 48.396,
    longitude: 15.516,
  },
  'Zell am See, 5700, Salzburg, Austria': {
    latitude: 47.3254,
    longitude: 12.7947,
  },
  'Wasserfallweg 47, 5743 Krimml, Austria': {
    latitude: 47.2186,
    longitude: 12.1767,
  },
  'Krimmler Wasserfälle, Wasserfallweg 47, 5743 Krimml, Austria': {
    latitude: 47.2186,
    longitude: 12.1767,
  },
};

export const getCoordinatesFromAddress = (address: string): Coordinates => {
  if (KNOWN_COORDINATES[address]) {
    return KNOWN_COORDINATES[address];
  }

  console.warn(
    `Coordinates not found for address: ${address}. Using default Vienna coordinates.`,
  );
  return { latitude: 48.2082, longitude: 16.3738 };
};

export const getCoordinatesById = (itemLocation: string): Coordinates => {
  return getCoordinatesFromAddress(itemLocation);
};
