import type { State } from "../../types/destinations";
import { gangtok } from "./gangtok";
import { gyalshing } from "./gyalshing";
import { mangan } from "./mangan";
import { namchi } from "./namchi";
import { pakyong } from "./pakyong";
import { soreng } from "./soreng";

// Sikkim — one file per district in this folder
export const sikkim: State = {
  name: "Sikkim",
  districts: [gangtok, gyalshing, mangan, namchi, pakyong, soreng],
};
