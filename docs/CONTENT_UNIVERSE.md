# 🗺️ CONTENT UNIVERSE — Harissa

> **Carte mère pédagogique de toute l'application.**
> Document de structure uniquement — aucun code, écran ou composant n'est modifié.
> Aucun contenu détaillé n'est produit ici : on construit **l'arborescence**, pas le contenu.
> Tout le travail existant reste la base officielle et n'est ni supprimé ni remplacé.

**Rôle de ce document :** centraliser, organiser et hiérarchiser **tout le contenu futur** de Harissa avant son implémentation. C'est la table des matières maîtresse à laquelle tous les autres documents se rattachent.

**Rappel d'identité :** Harissa n'est plus une simple application de langue. C'est une **porte d'entrée immersive dans la langue, la culture et le quotidien tunisien** (cf. `PRODUCT_VISION_V2.md`).

---

## 0. Comment lire cette carte

- L'univers est organisé autour des **5 piliers** de `APP_ARCHITECTURE_V2.md`.
- Chaque branche renvoie au document de référence qui la détaille.
- Les niveaux suivent l'échelle existante : `debutant` → `elementaire` → `intermediaire` → `avance`.
- L'ordre est **hiérarchisé par fréquence/utilité réelle** (principe du `LANGUAGE_MASTER_PLAN.md`).
- Légende statut : ✅ déjà amorcé dans les données · 🟡 cadré (plan existant) · ⬜ à structurer plus tard.

### Vue d'ensemble des 5 piliers

```
HARISSA
├── 🏠 Accueil        → point de départ quotidien
├── 📚 Apprendre      → la langue, en parcours structurés
├── 🧠 Réviser        → mémorisation active
├── 🇹🇳 Découvrir       → la culture tunisienne vivante
└── 👤 Profil         → progression & identité
```

---

## 🏠 1. ACCUEIL

Le point de retour quotidien. Ne contient pas de « matière » propre : il **oriente** vers les autres piliers.

```
🏠 Accueil
├── Session du jour (proposée, 5–15 min)        🟡  → MEMORY_SYSTEM.md
├── Ambiance tunisienne du jour (mot/objet/scène) ⬜  → TUNISIAN_IDENTITY_SYSTEM.md
├── Progression rapide (série, objectif, maîtrise) ✅  → écran Accueil actuel
├── Reprise « continuer où j'en étais »          ⬜
└── Accès direct au prochain contenu pertinent   ⬜
```

---

## 📚 2. APPRENDRE

Le cœur langue. Regroupe Leçons + Vocabulaire + Verbes + Grammaire (cf. `APP_ARCHITECTURE_V2.md`), organisés en **parcours thématiques** progressifs. Chaque parcours = une série de leçons courtes, ordonnées par fréquence d'usage.

### 2.1 Structure interne du pilier
```
📚 Apprendre
├── Parcours (entrée par défaut — les leçons ordonnées)
├── Mots (vocabulaire, filtrable par thème)        ✅ écran actuel
├── Verbes (conjugaisons visuelles)                ✅ écran actuel
├── Grammaire (règles, par section)                ✅ écran actuel
└── Écriture (3 systèmes)                          🟡 → TUNISIAN_WRITING_SYSTEM.md
```

### 2.2 Les parcours thématiques (ordonnés par priorité)

Chaque parcours puise dans les paliers du `LANGUAGE_MASTER_PLAN.md`. Structure uniquement — les leçons listées sont des **intitulés**, pas du contenu.

#### Parcours 1 — Survivre en Tunisie · `debutant` 🟡
Le strict nécessaire pour les premières interactions.
```
1. Saluer
2. Se présenter
3. Dire merci / la politesse
4. Dire oui et non
5. Demander son chemin
6. Commander au café
7. Commander au restaurant
8. Compter (chiffres essentiels)
9. Demander un prix
10. Comprendre / ne pas comprendre (« répète », « plus lentement »)
```

#### Parcours 2 — Le quotidien · `debutant` → `elementaire` ⬜
La vie de tous les jours.
```
1. La famille
2. À la maison
3. Le temps (aujourd'hui, demain, hier, l'heure)
4. Faire ses courses / au marché
5. Prendre un taxi / un louage
6. Au téléphone
7. Exprimer un besoin simple
8. Les émotions de base
```

#### Parcours 3 — Se débrouiller seul · `elementaire` ⬜
Autonomie élargie.
```
1. Chez le médecin / la santé
2. À la banque / la poste
3. Le travail (bases)
4. Faire des projets (le futur)
5. Décrire (couleurs, tailles, adjectifs)
6. Les vêtements / le shopping
7. S'orienter en ville
```

#### Parcours 4 — Converser · `elementaire` → `intermediaire` ⬜
Échanger vraiment.
```
1. Donner son opinion
2. Exprimer un désaccord poli
3. Raconter un événement passé
4. Parler de ses goûts et loisirs
5. Inviter / accepter / refuser
6. Prendre des nouvelles
```

#### Parcours 5 — Nuancer · `intermediaire` → `avance` ⬜
Finesse et aisance.
```
1. Comparer
2. Exprimer la cause et la condition (parce que, si, quand)
3. Les expressions idiomatiques
4. Les registres (familier vs soutenu)
5. Les nuances régionales
```

### 2.3 Les briques transversales d'Apprendre

Chaque parcours mobilise ces briques, qui ont aussi leur accès direct :

```
📚 Apprendre — briques
├── Vocabulaire        → 5 paliers de fréquence (500 mots cible)   🟡 LANGUAGE_MASTER_PLAN §1
│   └── par catégorie : salutations, famille, nourriture, chiffres,
│       couleurs, corps, maison, transport, travail, emotions,
│       temps, vêtements, shopping, loisirs, nature, autres
├── Verbes             → 4 groupes (100 verbes cible)              🟡 LANGUAGE_MASTER_PLAN §2
│   └── Groupe A (vitaux) → B (courants) → C (utiles) → D (rares)
├── Grammaire          → 4 niveaux (~25 règles)                   🟡 LANGUAGE_MASTER_PLAN §5
│   └── pronoms, présent, passé, futur, négation, possession,
│       genre, pluriel, interrogation, comparaison, prépositions…
└── Écriture           → 3 systèmes progressifs                   🟡 TUNISIAN_WRITING_SYSTEM.md
    ├── Latin (translittération) — dès le début
    ├── Arabizi (chiffres + lettres) — élémentaire
    └── Arabe — intermédiaire+, en reconnaissance d'abord
```

---

## 🧠 3. RÉVISER

Consolidation par récupération active. Regroupe Flashcards + Quiz (cf. `APP_ARCHITECTURE_V2.md`), piloté par les moteurs existants. Ne crée pas de contenu propre : il **recycle** ce qui a été appris.

```
🧠 Réviser
├── Session du jour (révisions dues, entrelacées)   ✅ → MEMORY_SYSTEM.md
│   └── piliers : espacement · rappel actif · entrelacement
├── Cartes (flashcards libres)                       ✅ écran actuel
│   └── sens : français→tunisien · tunisien→français
├── Quiz (4 types)                                   ✅ écran actuel
│   ├── QCM
│   ├── Traduction
│   ├── Compléter une conjugaison
│   └── Remettre une phrase en ordre
└── Bilan de session (maîtrise, XP, série)           ✅
```

> Le contenu révisé provient automatiquement d'Apprendre **et** de Découvrir (les mots rencontrés en contexte culturel deviennent des cartes).

---

## 🇹🇳 4. DÉCOUVRIR LA TUNISIE

Le pilier culturel — ce qui fait de Harissa une porte d'entrée, pas une app de langue (cf. `DISCOVER_TUNISIA_SYSTEM.md`). Six rubriques, chacune en micro-fiches visuelles.

```
🇹🇳 Découvrir
├── 🍵 Culture                                       🟡 DISCOVER §3
│   ├── Traditions (fêtes, hospitalité, thé, hammam…)
│   ├── Vie quotidienne (marché, café, 7ouma, louage…)
│   ├── Codes sociaux (politesse, gestes, hospitalité)
│   └── Expressions culturelles (formules sociales)
│
├── 🏛️ Histoire                                      🟡 DISCOVER §4
│   ├── Grandes périodes (Carthage → Rome → Kairouan →
│   │   ottomans → protectorat → indépendance → contemporaine)
│   ├── Événements importants (frise visuelle)
│   └── Personnages importants (une fiche chacun)
│
├── 🌶️ Cuisine                                       🟡 DISCOVER §5
│   ├── Recettes pédagogiques (harissa, couscous, brik, thé…)
│   ├── Ingrédients (vocabulaire nourriture)
│   ├── Verbes de cuisine (couper, mélanger, cuire…)
│   ├── Expressions de table
│   └── Anecdotes culturelles
│
├── 🎵 Musique                                       🟡 DISCOVER §6
│   ├── Genres (malouf, mezoued, contemporain, fusion)
│   ├── Instruments (oud, derbouka, qanûn…)
│   ├── Ambiances (mariage, café, fête)
│   └── Vocabulaire de la musique et de la fête
│
├── 🌊 Régions                                       🟡 DISCOVER §7
│   ├── Carte interactive sobre
│   ├── Fiches régionales (Tunis, Sidi Bou Saïd, Cap Bon,
│   │   Sahel, Sfax, Sud, Kairouan…)
│   └── Variantes régionales de la langue (regionalVariants)
│
└── 💬 Expressions typiquement tunisiennes           🟡 DISCOVER §8
    ├── Expressions imagées du quotidien
    ├── Proverbes (sens + usage)
    ├── Formules d'hospitalité
    └── Interjections et petits mots
```

> **Ponts** : chaque fiche Découvrir introduit du vocabulaire/des verbes/des expressions qui rejoignent Apprendre et Réviser. La cuisine est le pont le plus naturel langue ↔ culture.

---

## 👤 5. PROFIL

Progression, identité de l'apprenant, réglages. Pas de contenu pédagogique, mais le **miroir** de la progression sur tous les piliers.

```
👤 Profil
├── Progression globale (maîtrise du vocabulaire)    ✅ écran actuel
├── Statistiques (série, XP, mots, quiz)             ✅ écran actuel
├── Progression d'écriture (latin/Arabizi/arabe)     ⬜ → TUNISIAN_WRITING_SYSTEM.md
├── Collection culturelle (fragments Découvrir)      ⬜ → DISCOVER_TUNISIA_SYSTEM.md
├── Objectif quotidien (5–15 min)                    ✅
├── Réglages                                         ✅
└── Réinitialisation de la progression               ✅
```

---

## 6. Matrice de hiérarchisation globale

Ordre de priorité de production, **toutes branches confondues** (cf. `V1_CONTENT_ROADMAP.md` pour le détail du MVP) :

| Priorité | Branche | Pilier | Statut |
|----------|---------|--------|--------|
| 1 | Parcours 1 « Survivre » + Vocabulaire Palier 1 | 📚 Apprendre | 🟡 |
| 2 | Verbes Groupe A + Grammaire Niveau 1 | 📚 Apprendre | 🟡 |
| 3 | Session de révision (cartes + quiz) | 🧠 Réviser | ✅ |
| 4 | Cuisine (3–4 recettes) + Culture (5–6 fiches) | 🇹🇳 Découvrir | 🟡 |
| 5 | Parcours 2 « Quotidien » + dialogues fondamentaux | 📚 Apprendre | ⬜ |
| 6 | Histoire (5 repères) + Expressions (8–10) | 🇹🇳 Découvrir | 🟡 |
| 7 | Écriture : intro Arabizi + découverte arabe | 📚 Apprendre | 🟡 |
| 8 | Parcours 3–5 + Musique + Régions | 📚 / 🇹🇳 | ⬜ |

---

## 7. Règles de cohérence de l'univers

Tout contenu ajouté à cette carte devra :
1. **Se rattacher à un pilier** et à une branche claire (pas de contenu orphelin).
2. **Respecter la hiérarchie par fréquence/utilité** réelle.
3. **Suivre le système visuel** (couleurs/pictos stables — `VISUAL_LANGUAGE_SYSTEM.md`).
4. **Respecter le profil apprenant** (micro-sessions, une idée par carte — `LEARNER_PROFILE.md`).
5. **Respecter l'identité tunisienne** (authentique, sans cliché — `TUNISIAN_IDENTITY_SYSTEM.md`).
6. **Alimenter la mémorisation** (espacement, rappel actif, double codage — `MEMORY_SYSTEM.md`).
7. **Tisser langue ↔ culture** : chaque fragment culturel relie du vocabulaire ; chaque mot peut ouvrir sur un fragment culturel.

---

## 8. Carte des documents de référence

Cette carte mère s'articule avec l'ensemble du corpus documentaire :

| Document | Rôle |
|----------|------|
| **CONTENT_UNIVERSE.md** *(ce document)* | Carte mère — arborescence de tout le contenu |
| `PRODUCT_VISION_V2.md` | Vision, positionnement, identité de marque |
| `APP_ARCHITECTURE_V2.md` | Les 5 piliers / navigation |
| `LANGUAGE_MASTER_PLAN.md` | Détail du contenu langue (mots, verbes, phrases, dialogues, grammaire) |
| `DISCOVER_TUNISIA_SYSTEM.md` | Détail du pilier culturel |
| `TUNISIAN_WRITING_SYSTEM.md` | Les 3 systèmes d'écriture |
| `VISUAL_LANGUAGE_SYSTEM.md` | Charte visuelle (couleurs, pictos) |
| `MEMORY_SYSTEM.md` | Système de mémorisation + progression 90 jours |
| `LEARNER_PROFILE.md` | Profil cible + règles ergonomiques |
| `TUNISIAN_IDENTITY_SYSTEM.md` | Ton, objets signatures, anti-clichés |
| `V1_CONTENT_ROADMAP.md` | Contenu minimal du MVP |

---

*Cette carte est vivante : elle s'enrichit à mesure que de nouvelles branches sont cadrées. Mais sa logique reste fixe — 5 piliers, hiérarchie par fréquence, langue et culture tissées ensemble. C'est le plan directeur avant toute implémentation.*
