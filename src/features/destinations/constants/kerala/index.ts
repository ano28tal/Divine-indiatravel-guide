import type { State } from "../../types/destinations";
import { alappuzha } from "./alappuzha";
import { ernakulam } from "./ernakulam";
import { idukki } from "./idukki";
import { kannur } from "./kannur";
import { kasaragod } from "./kasaragod";
import { kollam } from "./kollam";
import { kottayam } from "./kottayam";
import { kozhikode } from "./kozhikode";
import { malappuram } from "./malappuram";
import { palakkad } from "./palakkad";
import { pathanamthitta } from "./pathanamthitta";
import { thiruvananthapuram } from "./thiruvananthapuram";
import { thrissur } from "./thrissur";
import { wayanad } from "./wayanad";

// Kerala — one file per district in this folder
export const kerala: State = {
  name: "Kerala",
  districts: [
    alappuzha,
    ernakulam,
    idukki,
    kannur,
    kasaragod,
    kollam,
    kottayam,
    kozhikode,
    malappuram,
    palakkad,
    pathanamthitta,
    thiruvananthapuram,
    thrissur,
    wayanad,
  ],
};
