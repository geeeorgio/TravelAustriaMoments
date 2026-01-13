import { PLACES } from './images';

import type { LocationType, RouteType } from 'src/types';

export const CITIES_LIST: LocationType[] = [
  {
    id: 'city1',
    title: 'Vienna',
    description:
      'Austria’s capital city, known for imperial architecture, museums, and cultural heritage.',
    location: 'Vienna, 1010, Austria',
    image: PLACES.Vienna,
  },

  {
    id: 'city2',
    title: 'Salzburg',
    description:
      'Historic city famous for baroque architecture and Alpine surroundings.',
    location: 'Salzburg, 5020, Austria',
    image: PLACES.Salzburg,
  },
  {
    id: 'city3',
    title: 'Graz',
    description:
      'A vibrant city combining a UNESCO-listed old town with modern design.',
    location: 'Graz, 8010, Austria',
    image: PLACES.Graz,
  },
  {
    id: 'city4',
    title: 'Innsbruck',
    description:
      'An Alpine city surrounded by mountains, popular for outdoor activities.',
    location: 'Innsbruck, 6020, Austria',
    image: PLACES.Innsbruck,
  },
  {
    id: 'city5',
    title: 'Linz',
    description:
      'A cultural city on the Danube River with a strong contemporary art scene.',
    location: 'Linz, 4020, Austria',
    image: PLACES.Linz,
  },
];

export const CULTURE_LIST: LocationType[] = [
  {
    id: 'place1',
    title: 'Schönbrunn Palace',
    description:
      'Former imperial summer residence with expansive gardens and richly decorated historic interiors.',
    location: 'Schönbrunner Schloßstraße 47, 1130 Vienna, Austria',
    image: PLACES.Schonbrunn_Palace,
  },
  {
    id: 'place2',
    title: 'Hofburg Palace',
    description:
      'Historic palace complex that served as the main residence of Austrian rulers for centuries.',
    location: 'Michaelerkuppel, 1010 Vienna, Austria',
    image: PLACES.HofburgPalace,
  },
  {
    id: 'place3',
    title: 'Belvedere Palace',
    description:
      'Baroque palace complex housing major art collections, including works by Gustav Klimt.',
    location: 'Prinz Eugen-Straße 27, 1030 Vienna, Austria',
    image: PLACES.BelvederePalace,
  },
  {
    id: 'place4',
    title: 'Mozart’s Birthplace',
    description:
      'Birthplace and museum of composer Wolfgang Amadeus Mozart, showcasing his early life.',
    location: 'Getreidegasse 9, 5020 Salzburg, Austria',
    image: PLACES.mozartsBirthplace,
  },
  {
    id: 'place5',
    title: 'St. Stephen’s Cathedral',
    description:
      'Iconic Gothic cathedral and one of Vienna’s most important architectural landmarks.',
    location: 'Stephansplatz 3, 1010 Vienna, Austria',
    image: PLACES.StStephensCathedral,
  },
];

export const NATURE_LIST: LocationType[] = [
  {
    id: 'nature1',
    title: 'Hallstatt',
    description:
      'Picturesque lakeside village in the Austrian Alps, known for its scenic views and historic charm.',
    location: 'Hallstatt, 4830, Upper Austria, Austria',
    image: PLACES.Hallstatt,
  },
  {
    id: 'nature2',
    title: 'Grossglockner High Alpine Road',
    description:
      'Scenic mountain road offering breathtaking panoramic views of the Austrian Alps.',
    location:
      'Grossglockner Hochalpenstraße, 5672 Fusch an der Großglocknerstraße, Austria',
    image: PLACES.HighAlpineRoad,
  },
  {
    id: 'nature3',
    title: 'Wachau Valley',
    description:
      'Danube valley famous for vineyards, monasteries, and well-preserved historic towns.',
    location: 'Wachau Valley, 3602 Dürnstein, Lower Austria, Austria',
    image: PLACES.WachauValley,
  },
  {
    id: 'nature4',
    title: 'Zell am See',
    description:
      'Alpine town located on Lake Zell, surrounded by mountains and popular for outdoor activities.',
    location: 'Zell am See, 5700, Salzburg, Austria',
    image: PLACES.ZellAmSee,
  },
  {
    id: 'nature5',
    title: 'Krimml Waterfalls',
    description:
      'Austria’s highest waterfalls located in Hohe Tauern National Park.',
    location: 'Krimmler Wasserfälle, Wasserfallweg 47, 5743 Krimml, Austria',
    image: PLACES.KrimmlWaterfalls,
  },
];

export const ROUTE_1: RouteType[] = [
  {
    id: 'route1_place1',
    title: 'St. Stephen’s Cathedral',
    description:
      'Vienna’s iconic Gothic cathedral and the spiritual heart of the city.',
    location: 'Stephansplatz 3, 1010 Vienna, Austria',
    image: PLACES.StStephensCathedral,
  },
  {
    id: 'route1_place2',
    title: 'Hofburg Palace',
    description:
      'Former imperial residence and political center of the Habsburg Empire.',
    location: 'Michaelerkuppel, 1010 Vienna, Austria',
    image: PLACES.HofburgPalace,
  },
  {
    id: 'route1_place3',
    title: 'Belvedere Palace',
    description:
      'Baroque palace complex famous for its art collections and landscaped gardens.',
    location: 'Prinz Eugen-Straße 27, 1030 Vienna, Austria',
    image: PLACES.BelvederePalace,
  },
];

export const ROUTE_2: RouteType[] = [
  {
    id: 'route2_place1',
    title: 'Mozart’s Birthplace',
    description: 'Birthplace and museum of composer Wolfgang Amadeus Mozart.',
    location: 'Getreidegasse 9, 5020 Salzburg, Austria',
    image: PLACES.mozartsBirthplace,
  },
  {
    id: 'route2_place2',
    title: 'Salzburg Old Town',
    description:
      'UNESCO-listed historic center with narrow streets and historic squares.',
    location: 'Altstadt Salzburg, 5020 Salzburg, Austria',
    image: PLACES.SalzburgOldTown,
  },
  {
    id: 'route2_place3',
    title: 'Hohensalzburg Fortress',
    description:
      'Medieval fortress offering panoramic views over the city of Salzburg.',
    location: 'Mönchsberg 34, 5020 Salzburg, Austria',
    image: PLACES.HohensalzburgFortress,
  },
];

export const ROUTE_3: RouteType[] = [
  {
    id: 'route3_place1',
    title: 'Hallstatt',
    description: 'Picturesque lakeside village surrounded by Alpine mountains.',
    location: 'Hallstatt, 4830, Upper Austria, Austria',
    image: PLACES.Hallstatt,
  },
  {
    id: 'route3_place2',
    title: 'Zell am See',
    description:
      'Charming Alpine town located on a crystal-clear mountain lake.',
    location: 'Zell am See, 5700, Salzburg, Austria',
    image: PLACES.ZellAmSee,
  },
  {
    id: 'route3_place3',
    title: 'Krimml Waterfalls',
    description:
      'Austria’s highest waterfalls set within Hohe Tauern National Park.',
    location: 'Wasserfallweg 47, 5743 Krimml, Austria',
    image: PLACES.KrimmlWaterfalls,
  },
];

export const TIPS_LIST = [
  {
    id: 'tip1',
    title: 'Start your day with a morning walk',
    description: 'Early hours are perfect for calm routes and beautiful light.',
  },
  {
    id: 'tip2',
    title: 'Leave space for spontaneity',
    description: 'The best travel moments often happen unexpectedly.',
  },
  {
    id: 'tip3',
    title: 'Pay attention to small details',
    description:
      'Architecture, shop windows, and quiet streets shape the city’s atmosphere.',
  },
  {
    id: 'tip4',
    title: 'Travel at your own pace',
    description: ' Slowing down helps you truly experience a place.',
  },
  {
    id: 'tip5',
    title: 'Balance city and nature',
    description:
      'Austria is perfect for combining cultural and natural locations.',
  },
  {
    id: 'tip6',
    title: 'Take notes during your journey',
    description: 'Short notes help preserve emotions and memories.',
  },
  {
    id: 'tip7',
    title: 'Use offline maps',
    description: 'They make travel easier and independent from the internet.',
  },
  {
    id: 'tip8',
    title: 'Pause and enjoy the moment',
    description: 'Even a short break can change how you feel about a route.',
  },
  {
    id: 'tip9',
    title: 'Photograph beyond popular spots',
    description: 'Some of the best moments are found off the main paths.',
  },
  {
    id: 'tip10',
    title: 'Trust your travel instincts',
    description: 'Choose places and routes that feel right for you.',
  },
];

export const LocationTypes = ['City', 'Culture', 'Nature'] as const;
export const RouteTypes = ['Route1', 'Route2', 'Route3'] as const;

export const PLACES_LIST = {
  Locations: {
    Cities: CITIES_LIST,
    Culture: CULTURE_LIST,
    Nature: NATURE_LIST,
  },
  Routes: {
    Route1: ROUTE_1,
    Route2: ROUTE_2,
    Route3: ROUTE_3,
  },
  Tips: TIPS_LIST,
};
