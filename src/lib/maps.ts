export interface PUBGMap {
  id: string;
  name: string;
  size: number; // Grid size X and Y. Maps are always square
  image?: string; // Optional image path
}

export const pubgMaps: PUBGMap[] = [
  {
    id: 'erangel',
    name: 'Erangel',
    size: 8,
    image: 'maps/erangel.jpg',
  },
  {
    id: 'miramar',
    name: 'Miramar',
    size: 8,
    image: 'maps/miramar.webp',
  },
  {
    id: 'sanhok',
    name: 'Sanhok',
    size: 12,
    image: 'maps/sanhok.webp',
  },
  {
    id: 'vikendi',
    name: 'Vikendi',
    size: 8,
    image: 'maps/vikendi.webp',
  },
  {
    id: 'karakin',
    name: 'Karakin',
    size: 8,
    image: 'maps/karakin.webp',
  },
  {
    id: 'paramo',
    name: 'Paramo',
    size: 12,
    image: 'maps/paramo.webp',
  },
  {
    id: 'taego',
    name: 'Taego',
    size: 8,
    image: 'maps/taego.webp',
  },
  {
    id: 'deston',
    name: 'Deston',
    size: 8,
    image: 'maps/deston.webp',
  },
  {
    id: 'rondo',
    name: 'Rondo',
    size: 16,
    image: 'maps/rondo.webp',
  },
];
