/**
 * /data/verbs.ts
 * Verbes en darija tunisien — 2 exemples de démonstration.
 * Convention d'ID : "v_<racine_latine>"
 */

import type { Verb } from "../types";

/**
 * VERBE 1 — Manger : كل (K-L)
 * Verbe de haute fréquence, irrégulier (racine biconsonnantique).
 */
const VERB_MANGER: Verb = {
  id: "v_kl",
  infinitiveFrench: "manger",
  rootDarija: "ك-ل",
  rootLatin: "K-L",
  isIrregular: true,
  level: "debutant",
  tags: ["nourriture", "quotidien", "haute-frequence"],
  notes:
    "Verbe très fréquent. La racine كل (kl) est biconsonnantique dans son " +
    "usage courant tunisien, contrairement à la racine arabe standard أكل (akl).",
  conjugations: {
    passe: [
      { person: "1s",  form: "كليت",  formLatin: "Klit",   phonetic: "[klit]"   },
      { person: "2s",  form: "كليت",  formLatin: "Klit",   phonetic: "[klit]"   },
      { person: "3sm", form: "كل",    formLatin: "Kel",    phonetic: "[kel]"    },
      { person: "3sf", form: "كلت",   formLatin: "Klet",   phonetic: "[klet]"   },
      { person: "1p",  form: "كلينا", formLatin: "Klina",  phonetic: "[klina]"  },
      { person: "2p",  form: "كليتم", formLatin: "Klitou", phonetic: "[klitu]"  },
      { person: "3p",  form: "كلو",   formLatin: "Klou",   phonetic: "[klu]"    },
    ],
    present: [
      { person: "1s",  form: "ناكل",  formLatin: "Nekl",    phonetic: "[nekl]"   },
      { person: "2s",  form: "تاكل",  formLatin: "Tekl",    phonetic: "[tekl]"   },
      { person: "3sm", form: "ياكل",  formLatin: "Yekl",    phonetic: "[jekl]"   },
      { person: "3sf", form: "تاكل",  formLatin: "Tekl",    phonetic: "[tekl]"   },
      { person: "1p",  form: "ناكلو", formLatin: "Neklou",  phonetic: "[neklu]"  },
      { person: "2p",  form: "تاكلو", formLatin: "Teklou",  phonetic: "[teklu]"  },
      { person: "3p",  form: "ياكلو", formLatin: "Yeklou",  phonetic: "[jeklu]"  },
    ],
    imperatif: [
      { person: "2s", form: "كل",  formLatin: "Kol",   phonetic: "[kol]"  },
      { person: "2p", form: "كلو", formLatin: "Kolou", phonetic: "[kolu]" },
    ],
  },
};

/**
 * VERBE 2 — Parler : حكى (H-K-Y)
 * Verbe essentiel. Défectueux (racine se terminant par semi-voyelle).
 * Translittération : le son ح pharyngal est noté "h" (sourd, emphatique).
 */
const VERB_PARLER: Verb = {
  id: "v_hky",
  infinitiveFrench: "parler",
  rootDarija: "ح-ك-ي",
  rootLatin: "H-K-Y",
  isIrregular: false,
  level: "debutant",
  tags: ["communication", "quotidien", "haute-frequence"],
  notes:
    "Verbe défectueux (racine à finale semi-vocalique). " +
    "Très utilisé pour dire parler, raconter, discuter.",
  conjugations: {
    passe: [
      { person: "1s",  form: "حكيت",  formLatin: "Hkit",   phonetic: "[hkit]"  },
      { person: "2s",  form: "حكيت",  formLatin: "Hkit",   phonetic: "[hkit]"  },
      { person: "3sm", form: "حكى",   formLatin: "Hka",    phonetic: "[hka]"   },
      { person: "3sf", form: "حكات",  formLatin: "Hket",   phonetic: "[hket]"  },
      { person: "1p",  form: "حكينا", formLatin: "Hkina",  phonetic: "[hkina]" },
      { person: "2p",  form: "حكيتم", formLatin: "Hkitou", phonetic: "[hkitu]" },
      { person: "3p",  form: "حكاو",  formLatin: "Hkaw",   phonetic: "[hkaw]"  },
    ],
    present: [
      { person: "1s",  form: "نحكي",  formLatin: "Nahki",  phonetic: "[nahki]" },
      { person: "2s",  form: "تحكي",  formLatin: "Tahki",  phonetic: "[tahki]" },
      { person: "3sm", form: "يحكي",  formLatin: "Yahki",  phonetic: "[jahki]" },
      { person: "3sf", form: "تحكي",  formLatin: "Tahki",  phonetic: "[tahki]" },
      { person: "1p",  form: "نحكيو", formLatin: "Nahkiw", phonetic: "[nahkiw]"},
      { person: "2p",  form: "تحكيو", formLatin: "Tahkiw", phonetic: "[tahkiw]"},
      { person: "3p",  form: "يحكيو", formLatin: "Yahkiw", phonetic: "[jahkiw]"},
    ],
    imperatif: [
      { person: "2s", form: "احكي",  formLatin: "Ahki",  phonetic: "[ahki]"  },
      { person: "2p", form: "احكيو", formLatin: "Ahkiw", phonetic: "[ahkiw]" },
    ],
  },
};

// ─── Export ───────────────────────────────────────────────────────────────────

/** Liste complète des verbes — à enrichir au fil des sprints */
export const verbs: Readonly<Verb[]> = [VERB_MANGER, VERB_PARLER] as const;

/** Accès rapide par ID */
export const verbsById: Readonly<Record<string, Verb>> = Object.fromEntries(
  verbs.map((v) => [v.id, v])
);

export function getVerbById(id: string): Verb | undefined {
  return verbsById[id];
}

export function getVerbsByLevel(level: Verb["level"]): Verb[] {
  return verbs.filter((v) => v.level === level);
}
