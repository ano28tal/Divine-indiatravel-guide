import type { State } from "../../types/destinations";
import { bilaspur } from "./bilaspur";
import { chamba } from "./chamba";
import { hamirpur } from "./hamirpur";
import { kangra } from "./kangra";
import { kinnaur } from "./kinnaur";
import { kullu } from "./kullu";
import { lahaulAndSpiti } from "./lahaul-and-spiti";
import { mandi } from "./mandi";
import { shimla } from "./shimla";
import { sirmaur } from "./sirmaur";
import { solan } from "./solan";
import { una } from "./una";

// Himachal Pradesh — one file per district in this folder
export const himachalPradesh: State = {
  name: "Himachal Pradesh",
  districts: [
    bilaspur,
    chamba,
    hamirpur,
    kangra,
    kinnaur,
    kullu,
    lahaulAndSpiti,
    mandi,
    shimla,
    sirmaur,
    solan,
    una,
  ],
};
