/**
 * /data/verbs.ts
 * Verbes en darija tunisien — 2 exemples de démonstration.
 * Convention d'ID : "v_<racine_arabizi>"
 * Convention : arabic = arabe · arabizi = translittération · french = traduction
 */

import type { Verb } from "../types";

/**
 * VERBE 1 — Manger : كل (K-L)
 */
const VERB_MANGER: Verb = {
  id: "v_kl",
  infinitiveFrench: "manger",
  rootArabic: "ك-ل",
  rootArabizi: "K-L",
  isIrregular: true,
  level: "debutant",
  tags: ["nourriture", "quotidien", "haute-frequence"],
  notes:
    "Verbe très fréquent. La racine كل (kl) est biconsonnantique dans son " +
    "usage courant tunisien, contrairement à la racine arabe standard أكل (akl).",
  conjugations: {
    passe: [
      { person: "1s",  arabic: "كليت",  arabizi: "Klit",   phonetic: "[klit]"   },
      { person: "2s",  arabic: "كليت",  arabizi: "Klit",   phonetic: "[klit]"   },
      { person: "3sm", arabic: "كل",    arabizi: "Kel",    phonetic: "[kel]"    },
      { person: "3sf", arabic: "كلت",   arabizi: "Klet",   phonetic: "[klet]"   },
      { person: "1p",  arabic: "كلينا", arabizi: "Klina",  phonetic: "[klina]"  },
      { person: "2p",  arabic: "كليتم", arabizi: "Klitou", phonetic: "[klitu]"  },
      { person: "3p",  arabic: "كلو",   arabizi: "Klou",   phonetic: "[klu]"    },
    ],
    present: [
      { person: "1s",  arabic: "ناكل",  arabizi: "Nekl",    phonetic: "[nekl]"   },
      { person: "2s",  arabic: "تاكل",  arabizi: "Tekl",    phonetic: "[tekl]"   },
      { person: "3sm", arabic: "ياكل",  arabizi: "Yekl",    phonetic: "[jekl]"   },
      { person: "3sf", arabic: "تاكل",  arabizi: "Tekl",    phonetic: "[tekl]"   },
      { person: "1p",  arabic: "ناكلو", arabizi: "Neklou",  phonetic: "[neklu]"  },
      { person: "2p",  arabic: "تاكلو", arabizi: "Teklou",  phonetic: "[teklu]"  },
      { person: "3p",  arabic: "ياكلو", arabizi: "Yeklou",  phonetic: "[jeklu]"  },
    ],
    imperatif: [
      { person: "2s", arabic: "كل",  arabizi: "Kol",   phonetic: "[kol]"  },
      { person: "2p", arabic: "كلو", arabizi: "Kolou", phonetic: "[kolu]" },
    ],
  },
};

/**
 * VERBE 2 — Parler : حكى (H-K-Y)
 */
const VERB_PARLER: Verb = {
  id: "v_hky",
  infinitiveFrench: "parler",
  rootArabic: "ح-ك-ي",
  rootArabizi: "H-K-Y",
  isIrregular: false,
  level: "debutant",
  tags: ["communication", "quotidien", "haute-frequence"],
  notes:
    "Verbe défectueux (racine à finale semi-vocalique). " +
    "Très utilisé pour dire parler, raconter, discuter.",
  conjugations: {
    passe: [
      { person: "1s",  arabic: "حكيت",  arabizi: "Hkit",   phonetic: "[hkit]"  },
      { person: "2s",  arabic: "حكيت",  arabizi: "Hkit",   phonetic: "[hkit]"  },
      { person: "3sm", arabic: "حكى",   arabizi: "Hka",    phonetic: "[hka]"   },
      { person: "3sf", arabic: "حكات",  arabizi: "Hket",   phonetic: "[hket]"  },
      { person: "1p",  arabic: "حكينا", arabizi: "Hkina",  phonetic: "[hkina]" },
      { person: "2p",  arabic: "حكيتم", arabizi: "Hkitou", phonetic: "[hkitu]" },
      { person: "3p",  arabic: "حكاو",  arabizi: "Hkaw",   phonetic: "[hkaw]"  },
    ],
    present: [
      { person: "1s",  arabic: "نحكي",  arabizi: "Nahki",  phonetic: "[nahki]" },
      { person: "2s",  arabic: "تحكي",  arabizi: "Tahki",  phonetic: "[tahki]" },
      { person: "3sm", arabic: "يحكي",  arabizi: "Yahki",  phonetic: "[jahki]" },
      { person: "3sf", arabic: "تحكي",  arabizi: "Tahki",  phonetic: "[tahki]" },
      { person: "1p",  arabic: "نحكيو", arabizi: "Nahkiw", phonetic: "[nahkiw]"},
      { person: "2p",  arabic: "تحكيو", arabizi: "Tahkiw", phonetic: "[tahkiw]"},
      { person: "3p",  arabic: "يحكيو", arabizi: "Yahkiw", phonetic: "[jahkiw]"},
    ],
    imperatif: [
      { person: "2s", arabic: "احكي",  arabizi: "Ahki",  phonetic: "[ahki]"  },
      { person: "2p", arabic: "احكيو", arabizi: "Ahkiw", phonetic: "[ahkiw]" },
    ],
  },
};

export const verbs: Readonly<Verb[]> = [VERB_MANGER, VERB_PARLER] as const;

export const verbsById: Readonly<Record<string, Verb>> = Object.fromEntries(
  verbs.map((v) => [v.id, v])
);

export function getVerbById(id: string): Verb | undefined {
  return verbsById[id];
}

export function getVerbsByLevel(level: Verb["level"]): Verb[] {
  return verbs.filter((v) => v.level === level);
}
