# CLAUDE_CODE_HANDOVER

> Document de transmission pour Claude Code. Factuel et directement exploitable.
> Règle de lecture : « existe » = présent et fonctionnel dans le code. Tout ce qui
> n'est que décrit dans un `.md` est explicitement signalé comme « documentation seule ».
> Aucun élément n'est dit « terminé » s'il n'a jamais été exécuté en runtime.

---

## 1. Projet

Application mobile d'apprentissage du **tunisien (darija)** pour francophones.
- **Stack réelle** : Expo SDK ~51, React Native 0.74, TypeScript ~5.4, Expo Router ~3.5 (navigation par fichiers), AsyncStorage. Offline-first, pas de backend.
- **Emplacement** : racine du projet (dossiers `app/`, `components/`, `data/`, `hooks/`, `lib/`, `services/`, `store/`, `types/`, `utils/`, `docs/`).
- **Nom technique actuel** dans `app.json` : `"Darija تونسي"` (slug `darija-tunisien`). Le nom « Harissa » n'existe que dans la documentation (voir §9).
- **Aucun dépôt Git local** initialisé. **`node_modules` absent** : le projet n'a jamais été installé, compilé ni exécuté dans l'environnement où il a été construit.

## 2. Vision produit finale

Définie dans la documentation (`docs/PRODUCT_VISION_V2.md`), considérée comme figée : une app immersive, premium, calme, méditerranéenne, orientée découverte de la langue ET de la culture tunisienne. **Cette vision existe en documentation, pas comme fonctionnalité.** Ne pas la ré-ouvrir ni la réinventer.

## 3. Public cible

Francophones adultes débutants, diaspora tunisienne et proches de Tunisiens. Profil de référence : très visuel, attention parfois limitée, préfère les micro-sessions (5–15 min). Détaillé dans `docs/LEARNER_PROFILE.md`.

## 4. Contraintes absolues

- **Contenu linguistique sensible** : ne jamais inventer de tunisien. Ne pas substituer de l'arabe littéraire. Pas de traduction mot à mot. Tout contenu darija doit être fourni/validé séparément (locuteur natif).
- **Translittération officielle** (à respecter dans tout contenu) : `7=ح · 3=ع · 9=ق · kh=خ · gh=غ`.
- Ne pas créer de stubs de types simulant React/RN/Expo pour « faire passer » une compilation.
- Ne pas modifier la navigation, les structures de données, la charte couleur, les systèmes cognitifs (voir §8).

## 5. État réel du code

**Existe et est présent dans le code (non testé en runtime — voir §12) :**

- **Navigation 5 onglets** (`app/(tabs)/_layout.tsx`) : `index` (Accueil), `apprendre`, `revisions` (Réviser), `decouvrir`, `profil`. Routes conservées hors barre via `href: null` : `lecon`, `vocabulaire`, `verbes`, `grammaire`, `quiz`, `ecriture`.
- **11 écrans** (`app/(tabs)/*.tsx`) + `_layout.tsx` : `index`, `apprendre` (hub), `decouvrir` (hub), `ecriture`, `revisions`, `profil`, `lecon`, `vocabulaire`, `verbes`, `grammaire`, `quiz`. Tous ont un `export default`.
- **30 composants** (`components/common/` + `components/layout/`).
- **8 services** (`services/`) : moteurs SRS, génération de quiz, personnalisation, session quotidienne, rétention, mémoire visuelle, stockage, seed de cartes. **Codés, jamais exécutés.**
- **7 hooks** (`hooks/`).
- **1 fichier de types** (`types/index.ts`) contenant tous les types, y compris les contenants V2 (Phrase, Expression, DiscoverContent, Recipe, WritingLesson + sous-types).
- **Charte visuelle** (`lib/Colors.ts`, `lib/Theme.ts`, `lib/Typography.ts`) : couleurs, tokens, styles de texte.
- **Couche données** (`data/`) : 14 fichiers + barrel `index.ts` (détail des quantités en §6).
- **Config** : `package.json` (scripts `start`, `ios`, `android`, `web`, `lint`, `typecheck`), `app.json`, `babel.config.js`, `tsconfig.json` (alias `@/*` + `expo/tsconfig.base`), `.gitignore`, `expo-env.d.ts`.

**Statut runtime de tout ce qui précède : NON VÉRIFIÉ.** Les contrôles effectués se limitent à la syntaxe et à l'existence des références. Aucune compilation `tsc` complète avec `node_modules`, aucune exécution Expo.

## 6. État réel du contenu (dans le code)

| Contenu | Présent dans le code | Cible (doc) |
|---|---|---|
| Mots (`data/vocabulary.ts`) | **2** | 500 |
| Verbes (`data/verbs.ts`) | **2** | 100 |
| Règles grammaire (`data/grammar.ts`) | **2** | ~25 |
| Dialogues (`data/dialogues.ts`) | **2** | 50 |
| Pronoms (`data/pronouns.ts`) | **7** (complet) | 7 |
| Phrases (`data/phrases.ts`) | **0** (conteneur vide) | 300 |
| Expressions (`data/expressions.ts`) | **0** (conteneur vide) | 50 |
| Découvrir (`data/discover.ts`) | **0** (conteneur vide) | culture/histoire/régions/musique… |
| Recettes (`data/recipes.ts`) | **0** (conteneur vide) | 20 |
| Leçons d'écriture (`data/writing.ts`) | **0** (conteneur vide) | 20 |
| Audio | **0 fichier** | — |

Les écrans `decouvrir` et `ecriture` sont **branchés mais affichent des placeholders** car leurs données sont vides. C'est volontaire et fonctionnel (placeholders « Bientôt »).

## 7. Documentation existante (`docs/`, 16 fichiers `.md`)

**Ce sont des documents de référence — ils ne sont PAS du code exécutable.**

- `PRODUCT_VISION_V2.md`, `APP_ARCHITECTURE_V2.md`, `LEARNER_PROFILE.md`, `MEMORY_SYSTEM.md`, `VISUAL_LANGUAGE_SYSTEM.md`, `TUNISIAN_IDENTITY_SYSTEM.md`, `HARISSA_PERSONA.md` (personnalité éditoriale).
- `LANGUAGE_MASTER_PLAN.md`, `CONTENT_UNIVERSE.md`, `DISCOVER_TUNISIA_SYSTEM.md`, `TUNISIAN_WRITING_SYSTEM.md`.
- `V1_CONTENT_ROADMAP.md`, `V1_BALANCED_CONTENT_PLAN.md`, `V1_CONTENT_PACK_01.md` (contenu V1 rédigé **en document**, à valider puis intégrer — pas dans le code).
- `PROJECT_STATUS.md` (audit ancien, en partie périmé).
- `CLAUDE_CODE_HANDOVER.md` (ce document).

Recoupements connus (à titre informatif, ne rien fusionner) : `V1_CONTENT_ROADMAP` ⊃ `V1_BALANCED_CONTENT_PLAN` ; `DISCOVER_TUNISIA_SYSTEM` ⊃ section Découvrir de `CONTENT_UNIVERSE` ; `PROJECT_STATUS` périmé.

## 8. Éléments verrouillés (ne plus remettre en question)

- La **navigation à 5 piliers** et la liste des écrans.
- Les **structures de données / types** (`types/index.ts`) — contenants prêts, ne pas refondre.
- La **charte couleur** et le système visuel (`lib/`).
- Les **systèmes cognitifs** : mémorisation/SRS, profil apprenant, règles de sobriété.
- L'**identité tunisienne** et la **personnalité éditoriale** (`HARISSA_PERSONA.md`).
- Toute la **documentation stratégique** (figée).

## 9. Éléments encore non tranchés

- **Nom de l'application.** Le code dit `"Darija تونسي"` (`app.json`, et l'écran `profil.tsx` carte « À propos »). La documentation dit « Harissa ». **Décision produit non prise.** Si « Harissa » est retenu : mettre à jour `app.json` (`name`) + la carte « À propos » de `profil.tsx`. Ne pas trancher sans confirmation de l'utilisateur.

## 10. Priorités immédiates dans Claude Code

Dans l'ordre :
1. Installer les dépendances et obtenir une **compilation `tsc` propre** avec `node_modules` réels.
2. **Lancer l'app sur Expo Go** et vérifier qu'elle démarre.
3. **Tester en runtime les 8 services** (jamais exécutés) — surtout SRS, génération de quiz, session quotidienne.
4. Faire les **tests manuels** du §12.
5. Trancher le **nom de l'app** (§9) avec l'utilisateur, puis l'appliquer.
6. Préparer l'**intégration du contenu validé** dans les conteneurs `data/` (en attente du contenu natif).

## 11. Commandes à exécuter en premier

```bash
npm install
npx tsc --noEmit        # = script "typecheck" ; arbitre réel de la compilation
npx expo start --clear  # puis scanner le QR avec Expo Go
```
En cas d'incohérence de versions Expo : `npx expo install --fix`.
Pour un accès réseau distant : `npx expo start --tunnel`.

## 12. Tests manuels à faire sur Expo Go

- Démarrage de l'app sans crash.
- Les **5 onglets** s'affichent et sont navigables.
- **Accueil** : le bouton principal (« Commencer la session ») ouvre bien Réviser.
- **Apprendre** (hub) : les 4 cartes ouvrent `lecon`, `vocabulaire`, `verbes`, `grammaire`. Le bandeau « Écriture » ouvre `ecriture`.
- **Réviser** : flux flashcards (avec le très peu de contenu présent) ; la carte « Quiz » ouvre `quiz`.
- **Découvrir** et **Écriture** : s'affichent avec placeholders, sans erreur.
- **Profil** : stats, objectif, réinitialisation.
- **Quiz** : génération d'au moins une question à partir des données existantes.
- Vérifier la persistance AsyncStorage (progression conservée après redémarrage).

## 13. Interdictions permanentes

- Ne pas inventer de contenu linguistique tunisien ; ne pas utiliser d'arabe littéraire ; pas de mot-à-mot.
- Ne pas créer de **stubs de types** simulant React/RN/Expo/TS.
- Ne pas modifier la **navigation**, les **structures de données**, la **charte couleur**, les **systèmes cognitifs** (verrouillés).
- Ne pas multiplier les fichiers ni les écrans inutilement.
- Ne pas ajouter de drapeaux/clichés ; respecter la sobriété identitaire et la règle « un objet signature par écran maximum ».
- Ne pas affirmer qu'un élément est « terminé » tant qu'il n'a pas été testé en runtime.

## 14. Méthode de travail recommandée

- **Tester avant d'enrichir** : obtenir un build qui tourne sur Expo Go AVANT d'ajouter du contenu.
- **Réutiliser l'existant** : les contenants `data/` et les conventions d'ID sont déjà définis ; intégrer le contenu validé en respectant les interfaces de `types/index.ts` (chaque champ darija doit venir d'une source validée).
- **Itérer par petits lots** avec rechargement à chaud pour vérifier le rendu réel.
- **Distinguer contenu et code** : l'ajout de contenu ne doit jamais nécessiter de changer les structures (sinon, signaler avant d'agir).
- **Pour les textes d'interface** : suivre `HARISSA_PERSONA.md`.
- En cas de doute sur le contenu linguistique ou le nom de l'app : demander à l'utilisateur, ne pas décider seul.

---

*Fin du document de transmission. État transmis tel quel, sans modification du code, des données ou des structures.*
