import {PI_NUMBER} from "./constants";

const getTinkerInterval = (length, attraction) => Math.floor((2 * PI_NUMBER * Math.sqrt(length / attraction)) * 100) / 100;

export {
  getTinkerInterval,
};
