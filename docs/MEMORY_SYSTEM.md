# 🧠 MEMORY SYSTEM — Darija Tunisien

> Système officiel de mémorisation à long terme de l'application.
> **Document de conception uniquement** — aucun code n'est modifié ici.
> Décrit les principes, leurs réglages, et une progression quotidienne sur 90 jours.

**Objectif central : maximiser la rétention à long terme**, pas le volume vu à court terme. Chaque jour dure **5 à 15 minutes** — la régularité prime sur la durée.

---

## 1. Les six piliers de la mémorisation

L'application combine six leviers cognitifs reconnus. Plusieurs sont déjà implémentés dans les moteurs existants (`reviewEngine`, `retentionEngine`, `personalizationEngine`, `visualMemoryEngine`).

### Pilier 1 — Répétition espacée (Spaced Repetition)
On revoit un élément juste avant de l'oublier ; l'intervalle s'allonge à chaque réussite.

| Score de maîtrise | Intervalle avant révision |
|-------------------|---------------------------|
| 1 — très fragile | 1 jour |
| 2 — en cours | 3 jours |
| 3 — fragile consolidé | 7 jours |
| 4 — bien connu | 14 jours |
| 5 — maîtrisé | 30 jours |

*Implémenté dans `reviewEngine.ts` (table `SPACING_INTERVALS`).* Une erreur ramène l'intervalle à 1 jour ; une hésitation le fige à 2 jours.

### Pilier 2 — Récupération active (Active Recall)
On ne montre **jamais** la réponse en premier. L'apprenant doit produire la réponse de mémoire, puis se corrige. Trois qualités de réponse : **je savais / j'ai hésité / je ne savais pas**.
*Implémenté : flashcards + champ `activeRecall` du `retentionEngine`.*

### Pilier 3 — Entrelacement (Interleaving)
Les exercices mélangent les types (mot, verbe, grammaire, phrase) et les thèmes. **Jamais deux exercices identiques à la suite.** Cela force le cerveau à discriminer et améliore le transfert.
*Implémenté : `buildInterleavedSession` + `dailySessionGenerator`.*

### Pilier 4 — Double codage (Dual Coding)
Chaque élément linguistique est associé à un **motif visuel stable** (couleur + pictogramme). Le sens est encodé deux fois : texte **et** image. Voir `VISUAL_LANGUAGE_SYSTEM.md`.
*Implémenté : `visualMemoryEngine` + charte de `lib/Colors.ts`.*

### Pilier 5 — Feedback immédiat (Immediate Feedback)
La correction apparaît **juste après** chaque réponse, jamais en fin de session. L'erreur est corrigée tant que la trace mémorielle est chaude.
*Implémenté : composants de quiz et flashcards.*

### Pilier 6 — Réduction de la charge cognitive (Cognitive Load)
**Une seule difficulté principale par exercice** (`difficultyType` unique). Pas de mur de texte. Une carte = une idée. La difficulté progresse graduellement.
*Implémenté : `retentionEngine` (`estimatedCognitiveLoad`, `orderByProgressiveDifficulty`).*

---

## 2. Structure d'une journée type (5–15 min)

Chaque session quotidienne suit toujours le même squelette, pour réduire la charge de décision.

| Étape | Durée | Contenu | Pilier dominant |
|-------|-------|---------|-----------------|
| 1. Réveil mémoriel | ~1 min | 1 carte facile déjà maîtrisée (réussite d'ouverture) | Feedback / confiance |
| 2. Révisions dues | 3–6 min | Cartes à revoir (répétition espacée, priorisées) | Spaced Repetition |
| 3. Nouveauté | 2–4 min | 1 à 5 nouveaux éléments avec fort appui visuel | Double codage |
| 4. Application | 2–4 min | Quiz entrelacé (mots + verbes + phrases) | Interleaving / Active Recall |
| 5. Clôture | ~1 min | Bilan visuel : maîtrise, série, XP | Motivation |

**Règle d'or : toujours commencer par une réussite facile, toujours finir sur un bilan positif.**

---

## 3. Progression quotidienne sur 90 jours

La progression suit les paliers du `LANGUAGE_MASTER_PLAN.md`. Le rythme cible : **~6 nouveaux éléments/jour** en moyenne, ajusté à la baisse les jours de forte révision (la charge totale reste stable, 5–15 min).

### 📅 Phase 1 — Survie (Jours 1–30) · niveau `debutant`
**But : tenir une conversation de survie.** Contenu : Palier 1 (80 mots) + verbes vitaux du Groupe A au présent/passé + phrases de survie + 8 règles de fondation + dialogues fondamentaux.

| Jours | Focus du jour | Nouveaux éléments | Révisions |
|-------|---------------|-------------------|-----------|
| 1–3 | Salutations + se présenter | 5–6 mots/j | aucune → légère |
| 4–6 | Pronoms + « je veux / j'ai » | 4 mots + 1 règle/j | montée douce |
| 7–10 | Chiffres + temps (aujourd'hui/demain) | 5 mots/j | révisions J1–3 dues |
| 11–14 | Famille + verbe « être/avoir » | 4 mots + 1 verbe/j | révisions croissantes |
| 15–18 | Verbes manger/boire/aller/venir (présent) | 1 verbe + 3 mots/j | J7–10 dues |
| 19–22 | Négation `ma…sh` + 1ᵉʳ dialogue | 1 règle + dialogue | consolidation |
| 23–26 | Nourriture de base + au marché | 4 mots + phrases | J15–18 dues |
| 27–30 | **Révision-bilan Phase 1** | 0–2 nouveaux | révision massive + 1ᵉʳ quiz bilan |

➡️ **Jalon J30 :** se présenter, saluer, compter, dire ce qu'on veut, nier, tenir le dialogue « famille » et « marché ».

### 📅 Phase 2 — Autonomie (Jours 31–60) · `debutant` → `elementaire`
**But : se débrouiller seul au quotidien.** Contenu : Palier 2 (120 mots) + verbes Groupe B + futur (`besh`) + possession + pluriel + dialogues du quotidien.

| Jours | Focus | Rythme |
|-------|-------|--------|
| 31–36 | Maison + transport (taxi/louage) | 4 mots/j + révisions Phase 1 |
| 37–42 | Le futur + projets simples | 1 règle + verbes Groupe B |
| 43–48 | Corps + santé + chez le médecin | 4 mots/j + dialogue |
| 49–54 | Possession (suffixes) + shopping | 1 règle + phrases pratiques |
| 55–60 | **Révision-bilan Phase 2** | révision + quiz bilan |

➡️ **Jalon J60 :** parler au passé/présent/futur, gérer courses, transport, rendez-vous ; ~200 mots actifs.

### 📅 Phase 3 — Aisance (Jours 61–90) · `elementaire` → `intermediaire`
**But : conversation fluide et nuancée.** Contenu : Paliers 3–4 + verbes Groupe C + comparaison + interrogation avancée + subordination simple + dialogues culturels.

| Jours | Focus | Rythme |
|-------|-------|--------|
| 61–66 | Adjectifs descriptifs + opinions | 5 mots/j + révisions Phase 2 |
| 67–72 | Comparaison + exprimer un désaccord poli | 1 règle + verbes Groupe C |
| 73–78 | Travail + administration | 4 mots/j + dialogue |
| 79–84 | Subordination (parce que/quand/si) + récits | 1 règle + phrases d'aisance |
| 85–89 | Dialogues culturels (fêtes, hospitalité) | dialogues Série 3 |
| 90 | **Bilan final 90 jours** | grand quiz + bilan de maîtrise global |

➡️ **Jalon J90 :** conversation autonome, opinions nuancées, récits au passé, compréhension des dialogues culturels ; ~350+ mots actifs.

---

## 4. Règles d'adaptation dynamique

La progression n'est **pas** rigide : les moteurs ajustent.

1. **Surcharge détectée** (trop de cartes dues) → la part de nouveauté du jour diminue automatiquement ; priorité aux révisions (`prioritizeReviews`).
2. **Difficulté récurrente** sur un élément → il réapparaît plus souvent, avec appui visuel renforcé (`personalizationEngine`).
3. **Réussite constante** → l'intervalle s'allonge plus vite ; on introduit un peu plus de nouveauté.
4. **Jour manqué** → pas de punition ; les cartes dues s'accumulent mais la session reste plafonnée à 5–15 min (on ne rattrape pas tout d'un coup).
5. **Plafond strict** : jamais plus de ~10 exercices ni 15 min par session, quelle que soit la charge.

---

## 5. Indicateurs de mémorisation à suivre

| Indicateur | Source | Cible saine |
|------------|--------|-------------|
| Précision globale | `getCatalogSummary` | > 80 % |
| Cartes maîtrisées (score 5) | `MasteryColors.automated` | croissance régulière |
| Série de jours | `UserStats.currentStreak` | régularité > intensité |
| Charge cognitive moyenne | `retentionEngine` summary | 2,5–3,5 / 5 |
| Ratio rappel actif | `retentionEngine` summary | > 60 % |

---

*Ce système est conçu pour la rétention durable. La règle non négociable : régularité quotidienne, sessions courtes, réussite en ouverture, feedback immédiat, et jamais de surcharge.*
