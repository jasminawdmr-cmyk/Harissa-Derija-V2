# 📊 PROJECT STATUS — Darija Tunisien

> Rapport d'analyse de l'architecture existante.
> Généré pour éviter les doublons avant d'ajouter de nouvelles fonctionnalités.
> **Aucun fichier fonctionnel n'a été modifié pour produire ce rapport.**

Total : ~61 fichiers, ~7 160 lignes de code.

---

## 🖥️ Écrans existants (`app/`)

| Écran | Fichier | État | Branché aux données réelles ? |
|-------|---------|------|-------------------------------|
| 🏠 Accueil | `(tabs)/index.tsx` | Construit | ⚠️ Données fictives (`useHomeData`) |
| 📖 Leçon du jour | `(tabs)/lecon.tsx` | Squelette statique | ❌ Contenu codé en dur |
| 🧠 Révisions | `(tabs)/revisions.tsx` | **Fonctionnel** | ✅ `useReviewSession` + moteur |
| 🗣️ Verbes | `(tabs)/verbes.tsx` | Construit | ✅ `data/verbs.ts` — ⚠️ 1 erreur TS |
| 📚 Vocabulaire | `(tabs)/vocabulaire.tsx` | Squelette statique | ❌ Catégories codées en dur, pas de liste |
| 🎯 Quiz | `(tabs)/quiz.tsx` | **Fonctionnel** | ✅ `useQuiz` + `quizGenerator` |
| 📜 Grammaire | `(tabs)/grammaire.tsx` | Squelette statique | ❌ `GRAMMAR_TOPICS` codé en dur |
| 👤 Profil | `(tabs)/profil.tsx` | Construit | ❌ Statistiques codées en dur |

Navigation : `(tabs)/_layout.tsx` — 8 onglets via Expo Router, fonctionnel.

---

## 🧩 Composants existants (`components/`)

### Layout (2)
- `ScreenContainer` — conteneur scrollable + safe area. **Très utilisé.**
- `ScreenHeader` — titre + sous-titre + accent. **Très utilisé.**

### Common (19)
| Composant | Utilisé par | Statut |
|-----------|-------------|--------|
| `Badge` | Partout | ✅ Cœur |
| `Button` | Partout | ✅ Cœur |
| `Card` | Plusieurs écrans | ✅ Cœur |
| `Divider` | Plusieurs écrans | ✅ |
| `EmptyState` | Verbes, Quiz, Révisions | ✅ |
| `ProgressBar` | Accueil, Révisions, Quiz | ✅ |
| `SearchBar` | Verbes | ✅ |
| `FilterPills` | Verbes | ✅ |
| `StatTile` | Accueil, Révisions | ✅ |
| `CircularProgress` | Accueil | ✅ |
| `DailyGoalCard` | Accueil | ✅ |
| `StreakStrip` | Accueil | ✅ |
| `SessionCard` | Accueil | ✅ |
| `Flashcard` | Révisions | ✅ |
| `VerbCard` | Verbes | ✅ |
| `ConjugationTable` | VerbCard | ✅ |
| `QuizChoiceQuestion` | Quiz | ✅ |
| `QuizOrderQuestion` | Quiz | ✅ |
| `GrammarRuleCard` | **PERSONNE** | 🔴 **Inutilisé** |

---

## 🪝 Hooks existants (`hooks/`)

| Hook | Rôle | Statut |
|------|------|--------|
| `useReviewSession` | Pilote la session de flashcards | ✅ Actif |
| `useQuiz` | Pilote le quiz | ✅ Actif |
| `useFavorites` | Favoris de verbes (AsyncStorage) | ✅ Actif |
| `useHomeData` | Données de l'Accueil | ⚠️ **Mock**, marqué TEMPORAIRE |
| `useUserProgress` | Progression utilisateur complète | 🟠 Défini mais **utilisé nulle part en UI** |

---

## ⚙️ Services existants (`services/`)

| Service | Rôle | Statut |
|---------|------|--------|
| `reviewEngine` | SRS, scoring, entrelacement (726 l.) | ✅ Cœur, bien testé logiquement |
| `quizGenerator` | Génère 4 types de questions depuis les données | ✅ Actif |
| `reviewCardStore` | Pont vocabulaire → cartes + persistance | ✅ Actif |
| `storage` | Wrapper AsyncStorage typé | ✅ Cœur |

---

## 🏷️ Types existants (`types/index.ts`)

Domaine bien modélisé. Types principaux :
`Level`, `Word`, `VocabularyItem`, `Verb`, `VerbConjugation`, `Tense`, `Person`,
`Lesson`, `Module`, `GrammarRule`, `GrammarPoint`, `GrammarExample`, `Dialogue`,
`DialogueLine`, `Quiz`, `QuizQuestion`, `ReviewItem`, `UserProfile`, `UserStats`,
`WordProgress`, `LessonProgress`, `ReviewSession`.

⚠️ **Doublon conceptuel** : `GrammarRule` (riche, utilisé par les données) coexiste
avec `GrammarPoint` (plus ancien, dans le type `Lesson`). À unifier.

⚠️ **Doublon conceptuel** : `ReviewItem` (types) vs `ReviewCard` (reviewEngine).
Le moteur utilise sa propre structure `ReviewCard` plus riche ; `ReviewItem` du
domaine n'est plus référencé.

---

## 📚 Données existantes (`data/`)

| Fichier | Contenu | Volume |
|---------|---------|--------|
| `vocabulary.ts` | `VocabularyItem[]` | 2 mots (démo) |
| `verbs.ts` | `Verb[]` | 2 verbes (démo) |
| `grammar.ts` | `GrammarRule[]` | 2 règles (démo) |
| `dialogues.ts` | `Dialogue[]` | 2 dialogues (démo) |
| `lessons.ts` | `Module[]` + `Lesson[]` | 1 module, 2 leçons |
| `pronouns.ts` | `TunisianPronoun` × 7 | Complet |
| `conjugationRules.ts` | `ConjugationPattern` × 2 | Patterns passé/présent |
| `index.ts` | Barrel export | — |

Toutes les données sont volontairement minimales (2 exemples chacune).

---

## 🔴 Doublons éventuels

1. **`GrammarRuleCard` vs le contenu inline de `grammaire.tsx`.**
   L'écran Grammaire redéfinit ses propres `GRAMMAR_TOPICS` au lieu d'utiliser
   `data/grammar.ts` + le composant `GrammarRuleCard`. → Doublon de données + composant orphelin.

2. **`GrammarRule` vs `GrammarPoint`** (types) — deux modèles pour le même concept.

3. **`ReviewItem` vs `ReviewCard`** — le type domaine est supplanté par la structure du moteur.

4. **Logique de mélange** : `shuffle` existe dans `utils/index.ts` ET `shuffleCards`
   dans `reviewEngine.ts`. `quizGenerator` importe celui du moteur. → redondance mineure.

---

## ⚪ Composants / code inutilisés

- 🔴 **`GrammarRuleCard.tsx`** — jamais importé. Devrait alimenter l'écran Grammaire.
- 🟠 **`useUserProgress.ts`** — hook complet mais aucun écran ne le consomme.
- 🟠 **`store/userStore.ts`** — utilisé seulement par `useUserProgress` (lui-même inutilisé en UI).
- 🟠 **`utils/index.ts`** — fonctions (`formatDuration`, `shuffle`, `capitalize`…) non importées par l'UI.
- 🟠 **`data/index.ts`** (barrel) — les écrans importent souvent en direct (`@/data/verbs`) plutôt que via le barrel.

---

## ⚠️ Points faibles de l'architecture

1. **Erreur TypeScript ouverte** dans `verbes.tsx` : `VerbCard` rejette les props
   passées (décalage `VerbCardProps`). À corriger en priorité.

2. **Trois écrans encore statiques** (Leçon, Vocabulaire, Grammaire) dupliquent en
   dur des données qui existent déjà dans `data/`. Risque de divergence.

3. **Couleurs codées en dur** : beaucoup de composants référencent
   `Theme.rawColors.*` directement (terracotta, olive…) plutôt que des rôles
   sémantiques. Rend une refonte visuelle coûteuse — **cible directe de la charte visuelle**.

4. **`useHomeData` mock** : l'Accueil n'affiche pas la vraie progression.
   `useUserProgress` existe pourtant pour ça → brancher les deux.

5. **Pas de couche de couleur sémantique** pour la grammaire / les temps /
   les personnes / la maîtrise. Tout est ad hoc. **Cible de la charte visuelle.**

6. **Données morphologiques absentes** : `VerbConjugation` ne contient pas
   `prefix` / `root` / `suffix`. La décomposition visuelle des verbes devra donc
   prévoir l'architecture **sans inventer** ces segments.

---

## 🚀 Prochaines améliorations recommandées

**Priorité 1 — Stabilité**
- Corriger l'erreur TS de `verbes.tsx`.

**Priorité 2 — Charte visuelle (en cours)**
- Couches de couleurs sémantiques : grammaire, genre, personnes, temps, catégories, maîtrise.
- Composants `VisualLegend`, `ColorTag`, `MorphologyBlock`.
- Migrer les couleurs codées en dur vers des rôles.

**Priorité 3 — Brancher l'existant**
- `grammaire.tsx` → utiliser `data/grammar.ts` + `GrammarRuleCard`.
- `vocabulaire.tsx` → afficher `data/vocabulary.ts`.
- `index.tsx` → brancher `useUserProgress` à la place du mock.

**Priorité 4 — Enrichissement**
- Étendre le modèle `VerbConjugation` avec `morphology` optionnelle (prefix/root/suffix).
- Augmenter le volume de données (vocabulaire, verbes, règles).

**Priorité 5 — Nettoyage**
- Unifier `GrammarRule`/`GrammarPoint` et `ReviewItem`/`ReviewCard`.
- Centraliser le `shuffle`.
