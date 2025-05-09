import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Coordinates } from "./coordinates";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert number to letter (1 -> 'A', 2 -> 'B', etc.)
export const numberToLetter = (num: number): string => {
  return String.fromCharCode(64 + num);
};

// Generate random coordinates for a given map size between 0 and sizeX-1 for x and 0 and sizeY-1 for y
export const getRandomCoordinate = (size: number): Coordinates => {
  const randomX = Math.floor(Math.random() * size);
  const randomY = Math.floor(Math.random() * size);

  return { x: randomX, y: randomY };
};

export const convertToLetterAxisX = (x: number): string => {
  return String.fromCharCode(65 + x); // A
}

export const convertToLetterAxisY = (y: number): string => {
  return String.fromCharCode(73 + y); // I
}

// Convert numerical coordinates to letter-based coordinates
export const convertToLetterCoordinate = (coordinates: Coordinates): string => {
  const result = `${convertToLetterAxisX(coordinates.x)}${convertToLetterAxisY(coordinates.y)}`
  //console.debug('convertToLetterCoordinate:', coordinates, sizeX, result);;
  return result;
};

// Get array of letters for coordinates based on map size
export const getLettersArray = (size: number): string[] => {
  return Array.from({ length: size }, (_, i) => String.fromCharCode(65 + i));
};
