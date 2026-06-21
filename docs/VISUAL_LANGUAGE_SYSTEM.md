# 🎨 VISUAL LANGUAGE SYSTEM — Darija Tunisien

> Système visuel officiel de toute l'application.
> **Document de référence uniquement** — aucun code n'est modifié ici.
> Documente fidèlement la charte déjà codée dans `lib/Colors.ts` (valeurs exactes).

**Objectif fondateur : un utilisateur doit reconnaître les schémas visuels sans lire le texte.** Couleur + pictogramme = sens immédiat. Toute couleur ou icône utilisée dans l'app doit provenir de ce système ; aucune valeur codée en dur ailleurs.

Chaque entrée fournit quatre attributs stables : **couleur principale** (texte/bordure/picto), **couleur douce** (fond de carte), **libellé**, **pictogramme**.

---

## 1. 🔤 MORPHOLOGIE (rôle dans le mot)

Le cœur de la décomposition verbale colorée. Convention **stable et non négociable**.

| Rôle | Couleur | Hex principal | Fond doux | Picto | Sens |
|------|---------|---------------|-----------|-------|------|
| **Préfixe** | 🔵 Bleu | `#2F6FB0` | `#DCEAF7` | ◀ | ce qui précède le radical (n-, t-, y-) |
| **Radical** | 🟢 Vert | `#4E8C3A` | `#DEEFD3` | ● | le cœur invariant du verbe |
| **Suffixe** | 🟣 Violet | `#7E4FB0` | `#E8DCF5` | ▶ | ce qui suit le radical |
| **Conjugaison** | 🟠 Orange | `#D6792A` | `#FAE6D2` | ↻ | marque de temps/personne |
| **Exception** | 🔴 Rouge | `#C8403F` | `#F7DAD9` | ⚠ | irrégularité à mémoriser |
| **Particule** | ⚪ Gris | `#8C857C` | `#E8E5E1` | ○ | mot-outil grammatical |

**Règle de lecture :** dans une forme verbale, l'œil voit toujours bleu→vert→violet de gauche à droite. Un segment rouge = « attention, irrégulier ».

---

## 2. ⏳ TEMPS VERBAUX

| Temps | Couleur | Hex | Fond doux | Picto |
|-------|---------|-----|-----------|-------|
| **Présent** | 🟢 Vert | `#4E8C3A` | `#DEEFD3` | ⏺ |
| **Passé** | 🟡 Jaune | `#D8B22E` | `#F7EFC9` | ⏪ |
| **Futur** | 🟣 Violet | `#7E4FB0` | `#E8DCF5` | ⏩ |
| **Impératif** | 🟠 Orange | `#D6792A` | `#FAE6D2` | ❗ |

**Mnémonique temporelle :** vert = maintenant (présent), jaune = derrière soi (passé), violet = devant soi (futur). Les pictogrammes ⏪ ⏺ ⏩ renforcent l'axe du temps.

---

## 3. ⚥ GENRE

| Genre | Couleur | Hex | Fond doux | Picto |
|-------|---------|-----|-----------|-------|
| **Masculin** | 🔵 Bleu clair | `#3B8EC0` | `#D6EAF6` | ♂ |
| **Féminin** | 🌸 Rose clair | `#D46A93` | `#F8DEE9` | ♀ |
| **Neutre / mixte** | ⚪ Neutre | `#8C857C` | `#F4F2EE` | ◇ |

---

## 4. 👥 PERSONNES (pronoms)

Convention stable pour les 7 personnes du tunisien. Couleurs choisies pour un contraste maximal entre personnes voisines.

| Personne | Couleur | Hex | Picto | Note |
|----------|---------|-----|-------|------|
| **Je** (1s) | Vert | `#4E8C3A` | 🟢 | |
| **Tu masc.** (2sm) | Bleu clair | `#3B8EC0` | 🔵 | cohérent avec « masculin » |
| **Tu fém.** (2sf) | Rose clair | `#D46A93` | 🌸 | cohérent avec « féminin » |
| **Il** (3sm) | Bleu foncé | `#1E5A8A` | 🔷 | |
| **Elle** (3sf) | Violet | `#7E4FB0` | 🟣 | |
| **Nous** (1p) | Jaune | `#D8B22E` | 🟡 | |
| **Vous** (2p) | Orange | `#D6792A` | 🟠 | |
| **Ils/Elles** (3p) | Brun | `#7A5230` | 🟤 | |

**Cohérence transversale :** le bleu clair = masculin partout (genre ET « tu masculin »), le rose clair = féminin partout. L'utilisateur apprend l'association une fois.

---

## 5. 📚 CATÉGORIES DE VOCABULAIRE

Chaque grand domaine a sa couleur + son emoji. Les catégories sans couleur dédiée retombent sur un token neutre (gris sable).

| Catégorie | Couleur | Hex | Emoji |
|-----------|---------|-----|-------|
| **Famille** | Brun | `#7A5230` | 👨‍👩‍👧 |
| **Maison** | Vert olive | `#6B7C3A` | 🏠 |
| **Verbes** | Terracotta | `#C85A2E` | 🗣️ |
| **Émotions** | Rose | `#D46A93` | ❤️ |
| **Déplacements** | Turquoise | `#2BA89E` | 🚌 |
| **Grammaire** | Lavande | `#9B8AC4` | 📜 |
| **Nourriture** | Jaune | `#D8B22E` | 🍽️ |
| **Temps** | Gris | `#8C857C` | 🕐 |
| **Santé** | Rouge | `#C8403F` | 🩺 |
| **Travail** | Brun foncé | `#5A3A22` | 💼 |
| **Administration** | Orange foncé | `#B5611E` | 🏛️ |

> Note : la liste des catégories de **données** (`WordCategory`) est plus large (salutations, chiffres, couleurs, corps, transport, vêtements, shopping, loisirs, nature). Celles sans couleur dédiée utilisent le repli neutre, avec leur libellé propre conservé.

---

## 6. 🎯 NIVEAUX DE DIFFICULTÉ

Échelle visuelle de 1 (facile) à 5 (difficile), utilisée pour annoter les exercices.

| Niveau | Intensité | Repère visuel suggéré |
|--------|-----------|------------------------|
| 1 — Très facile | ●○○○○ | vert clair |
| 2 — Facile | ●●○○○ | vert |
| 3 — Moyen | ●●●○○ | jaune |
| 4 — Difficile | ●●●●○ | orange |
| 5 — Très difficile | ●●●●● | rouge |

**Type de difficulté** (une seule par exercice) avec pictogramme :
| Type | Picto | Compétence |
|------|-------|-----------|
| Reconnaissance | 👁️ | reconnaître un mot vu |
| Rappel | 🧠 | produire de mémoire |
| Production | ✍️ | traduire activement |
| Morphologie | 🧩 | assembler une forme |
| Syntaxe | 🔤 | ordonner une phrase |

---

## 7. ⭐ NIVEAU DE MAÎTRISE

L'indicateur le plus visible de la progression. Échelle de 5 paliers (score 0–5).

| Maîtrise | Couleur | Hex | Picto | Signification |
|----------|---------|-----|-------|---------------|
| **Non acquis** | 🔴 Rouge | `#C8403F` | 🔴 | jamais réussi / oublié |
| **Fragile** | 🟠 Orange | `#D6792A` | 🟠 | réussi parfois |
| **En progression** | 🟡 Jaune | `#D8B22E` | 🟡 | en cours d'ancrage |
| **Maîtrisé** | 🟢 Vert | `#4E8C3A` | 🟢 | solide |
| **Automatisé** | ⭐ Or | `#C9A55A` | ⭐ | réflexe acquis |

**Mnémonique universelle :** rouge → orange → jaune → vert → étoile. C'est le « feu tricolore » de l'apprentissage, compris sans lecture. L'étoile dorée = sommet.

---

## 8. 🔊 ÉTATS FONCTIONNELS & INTERACTIONS

| Élément | Picto | État |
|---------|-------|------|
| Audio disponible | 🔊 | actif |
| Audio absent | 🔇 | désactivé (gris) |
| Favori actif | ★ | doré |
| Favori inactif | ☆ | contour |
| Réponse correcte | ✓ | vert |
| Réponse incorrecte | ✗ | rouge |
| Série / régularité | 🔥 | flamme |
| Objectif du jour | 🎯 | cible |
| Réussite / bilan | 🎉 / 🏆 | célébration |
| Nouveau contenu | ✨ | nouveauté |

---

## 9. Règles d'usage du système visuel

1. **Stabilité absolue** : une notion = une couleur = un pictogramme, pour toute la vie de l'app. On ne réutilise jamais la même couleur pour deux sens contradictoires dans un même contexte.
2. **Couleur + forme** : ne jamais coder une info par la **seule** couleur (accessibilité daltonisme). Toujours coupler à un pictogramme ou un libellé.
3. **Cohérence transversale** : bleu = masculin partout, rose = féminin partout, vert = présent/maîtrisé, rouge = exception/non-acquis.
4. **Source unique** : toutes ces valeurs vivent dans `lib/Colors.ts`. Aucune couleur hex codée en dur dans un écran ou composant.
5. **Légende disponible** : tout écran utilisant un code couleur doit pouvoir afficher sa légende (composant `VisualLegend`), repliable pour ne pas encombrer.
6. **Lisibilité mobile** : contraste suffisant entre couleur principale (texte) et couleur douce (fond) sur petit écran.

---

*Ce système est la source de vérité visuelle officielle. Toute nouvelle fonctionnalité doit y puiser sans exception, pour que l'utilisateur reconnaisse les schémas d'un seul coup d'œil.*
