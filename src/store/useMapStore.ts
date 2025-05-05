import { create } from 'zustand';
import { pubgMaps, type PUBGMap } from '../lib/maps';
import { getRandomCoordinate } from '../lib/utils';
import type { Coordinates } from '../lib/coordinates';

interface MapState {
  maps: PUBGMap[];
  selectedMap: PUBGMap | null;
  randomCoordinate: Coordinates | null;
  selectMap: (mapId: string) => void;
  generateRandomCoordinate: () => void;
}

export const useMapStore = create<MapState>((set, get) => ({
  maps: pubgMaps,
  selectedMap: pubgMaps[0], // Default to Erangel
  randomCoordinate: null,
  
  selectMap: (mapId: string) => {
    const map = pubgMaps.find(m => m.id === mapId) || null;
    set({ selectedMap: map, randomCoordinate: null });
  },
  
  generateRandomCoordinate: () => {
    const { selectedMap } = get();
    
    if (!selectedMap) return;
    
    const coordinate = getRandomCoordinate(selectedMap.size);
    set({ randomCoordinate: coordinate });
  }
}));
