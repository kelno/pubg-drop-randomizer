import React from "react";
import "./PubgDropRandomizer.css";
import { useMapStore } from "../store/useMapStore";
import { Button } from "./ui/button";
import { convertToLetterAxisX, convertToLetterCoordinate } from "../lib/utils";

type PubgDropRandomizerProps = unknown;

export const PubgDropRandomizer: React.FC<PubgDropRandomizerProps> = () => {
  const {
    maps,
    selectedMap,
    randomCoordinate,
    selectMap,
    generateRandomCoordinate,
  } = useMapStore();

  const randomCoordinatesText =
    randomCoordinate && selectedMap
      ? convertToLetterCoordinate(randomCoordinate, selectedMap.size)
      : "?";

  return (
    <div className="container flex flex-col items-center p-4 h-screen w-screen justify-center ">
      <h1 className="text-2xl font-bold mb-4">PUBG Drop Randomizer</h1>
      <select
        className="mb-4 p-2 border rounded bg-white text-black"
        onChange={(e) => selectMap(e.target.value)}
        value={selectedMap?.id || ""}
      >
        {maps.map((map) => (
          <option key={map.id} value={map.id}>
            {map.name}
          </option>
        ))}
      </select>
      <Button
        onClick={generateRandomCoordinate}
        className="mb-2 bg-blue-500 text-white"
      >
        Generate Random Coordinate
      </Button>
      <div className="text-xl font-bold">
        Random Coordinate: {randomCoordinatesText}
      </div>
      {selectedMap && (
        <>
          {/* X axis labels grid */}

          {/* Map grid */}
          <div className="aspect-square flex-grow flex flex-col">
            {" "}
            <div
              className="grid mt-4 w-full"
              style={{
                gridTemplateColumns: `repeat(${selectedMap.size}, 1fr)`,
                gridTemplateRows: `1fr`,
                zIndex: 1,
              }}
            >
              {Array.from({ length: selectedMap.size }).map((_, index) => (
                <div
                  key={`label-${index}`}
                  className="flex items-center justify-center font-bold"
                  style={{ gridColumn: index + 1, gridRow: 1 }}
                >
                  {convertToLetterAxisX(index)}
                </div>
              ))}
            </div>
            <div className="aspect-square relative">
              {selectedMap.image && (
                <img
                  src={`${window.location.pathname}/${selectedMap.image}`}
                  alt={selectedMap.name}
                  className="absolute w-full h-full object-cover inset-0"
                  style={{ zIndex: 0 }}
                />
              )}
              <div
                className="inset-0 grid w-full h-full"
                style={{
                  gridTemplateColumns: `repeat(${selectedMap.size}, 1fr)`,
                  gridTemplateRows: `repeat(${selectedMap.size}, 1fr)`,
                  zIndex: 1,
                }}
              >
                {Array.from({
                  length: selectedMap.size * selectedMap.size,
                }).map((_, index) => {
                  const row = Math.floor(index / selectedMap.size);
                  const col = index % selectedMap.size;

                  // Determine if the current cell is the random coordinate
                  const isRandomCoordinate =
                    randomCoordinate &&
                    randomCoordinate.x === col &&
                    randomCoordinate.y === row;

                  return (
                    <div
                      key={index}
                      className={`border ${
                        isRandomCoordinate ? "bg-yellow-500 opacity-50" : ""
                      }`}
                      style={{ zIndex: 2 }}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
