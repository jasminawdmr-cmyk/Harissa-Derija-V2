# 👤 LEARNER PROFILE — Darija Tunisien

> Profil d'apprentissage cible de l'application et règles ergonomiques officielles.
> **Document de référence uniquement** — aucun code n'est modifié ici.
> Toute nouvelle fonctionnalité **doit** respecter ces règles. C'est un contrat de conception.

---

## 1. Portrait de l'apprenant cible

L'application est conçue **pour une personne précise**. Chaque décision de design la sert en priorité.

### Qui est-elle ?
- **Adulte francophone** — l'interface, les explications et les traductions sont en français. Le public principal est la **diaspora tunisienne** et les francophones proches de la culture tunisienne.
- **Débutante en tunisien** — part de zéro. Ne connaît ni l'alphabet arabe ni la grammaire. A besoin de translittération latine systématique.
- **Très visuelle** — mémorise mieux par les images, couleurs et schémas que par le texte. Un mur de texte la décourage.
- **Avec des difficultés attentionnelles** (profil type TDAH) — attention limitée dans le temps, sensible à la surcharge, a besoin de feedback rapide et de progression visible.
- **Apprend mieux avec les couleurs** — le code couleur n'est pas décoratif, c'est un canal d'information à part entière.
- **Aime les schémas** — comprend une structure (préfixe/radical/suffixe, axe du temps) mieux qu'une règle écrite.
- **Aime les micro-sessions** — préfère 10 minutes par jour à 1 heure par semaine. La régularité est son moteur.

### Ce dont elle a besoin
| Besoin | Réponse de l'app |
|--------|------------------|
| Ne pas se sentir submergée | Sessions courtes (5–15 min), une idée par carte |
| Voir sa progression | Indicateurs visuels constants (maîtrise, série, XP) |
| Comprendre sans lire des pavés | Couleurs + pictogrammes + schémas |
| Rester motivée | Réussite en ouverture, feedback immédiat, célébration |
| Reprendre facilement | Reprise sans friction, pas de punition après une absence |

### Ce qu'il faut lui éviter
- Murs de texte, longues explications grammaticales théoriques.
- Choix multiples complexes ou réglages nombreux.
- Sessions longues ou sans fin claire.
- Surcharge d'informations à l'écran.
- Échecs répétés sans soutien (démotivation rapide).

---

## 2. Règles ergonomiques STRICTES

Ces règles sont **non négociables**. Toute nouvelle fonctionnalité qui les enfreint doit être revue.

### 🎴 Règle 1 — Une carte = une idée
Un écran ou une carte ne présente **qu'une seule notion principale** à la fois. Pas de double objectif. Si deux idées coexistent, les séparer en deux cartes.

### 📏 Règle 2 — Jamais de mur de texte
- Explications limitées à 2–3 phrases courtes.
- Toute explication longue est remplacée par un **schéma**, un **exemple coloré** ou découpée en cartes.
- Privilégier tableaux, listes courtes, blocs visuels.

### 🎨 Règle 3 — Le sens passe par la couleur ET la forme
- Toute information encodée par la couleur doit **aussi** l'être par un pictogramme ou un libellé (accessibilité + clarté).
- Les couleurs proviennent **exclusivement** du `VISUAL_LANGUAGE_SYSTEM.md`. Aucune couleur arbitraire.
- Une notion garde toujours la même couleur (stabilité = ancrage mémoriel).

### ⏱️ Règle 4 — Micro-sessions plafonnées
- Une session dure **5 à 15 minutes**, jamais plus.
- Maximum ~10 exercices par session.
- La session a un **début clair** (réussite facile) et une **fin claire** (bilan).
- L'utilisateur sait toujours où il en est : indicateur de progression visible (ex. « 3 / 10 »).

### ✅ Règle 5 — Feedback immédiat et bienveillant
- Correction affichée **juste après** chaque réponse.
- L'erreur n'est jamais punitive : elle est expliquée et reprogrammée.
- Toujours valoriser le progrès (XP, maîtrise qui monte, série).

### 🧩 Règle 6 — Une seule difficulté principale par exercice
- Un exercice teste **une** compétence (reconnaissance, rappel, production, morphologie ou syntaxe), pas plusieurs.
- La difficulté progresse graduellement au fil de la session (facile → plus exigeant).

### 👆 Règle 7 — Interaction mobile minimale
- Tout doit être atteignable au **pouce**, sur petit écran tenu d'une main.
- Cibles tactiles suffisamment grandes, espacées.
- Le moins de saisie clavier possible : préférer taper/sélectionner à écrire.
- Pas de geste complexe requis pour une action essentielle.

### 🔁 Règle 8 — Reprise sans friction
- Reprendre après une absence ne déclenche **aucune punition**.
- Les révisions en retard s'accumulent mais la session reste plafonnée (on ne rattrape pas tout d'un coup).
- L'utilisateur peut toujours faire « juste 5 minutes » utiles.

### 🎯 Règle 9 — Réduire la charge de décision
- Le parcours quotidien est **proposé**, pas à configurer. L'app décide quoi réviser.
- Peu d'options, valeurs par défaut intelligentes.
- L'utilisateur n'a jamais à se demander « par où commencer ? ».

### 🌿 Règle 10 — Calme visuel
- Palette chaleureuse et apaisante (sable, terracotta, olive, ivoire), pas d'agression visuelle.
- Espace de respiration entre les éléments.
- Animations douces et utiles, jamais distrayantes.

---

## 3. Grille de validation d'une nouvelle fonctionnalité

Avant d'ajouter quoi que ce soit, vérifier **chaque** point :

- [ ] Présente-t-elle **une seule idée** par écran/carte ?
- [ ] Évite-t-elle tout **mur de texte** ?
- [ ] Utilise-t-elle **uniquement** les couleurs/pictos du système visuel officiel ?
- [ ] Couple-t-elle toujours couleur **et** forme/libellé ?
- [ ] Tient-elle dans une **session de 5–15 min** ?
- [ ] Donne-t-elle un **feedback immédiat** ?
- [ ] Ne teste-t-elle qu'**une difficulté** à la fois ?
- [ ] Est-elle utilisable **au pouce** sur mobile ?
- [ ] La **reprise** est-elle sans friction ni punition ?
- [ ] Réduit-elle la **charge de décision** (parcours proposé) ?
- [ ] Préserve-t-elle le **calme visuel** ?

> Si **une seule** case n'est pas cochée, la fonctionnalité doit être retravaillée avant intégration.

---

## 4. Hiérarchie des priorités de conception

En cas de conflit entre objectifs, trancher dans cet ordre :

1. **Clarté** (comprendre sans effort) avant tout.
2. **Faible charge cognitive** (ne pas submerger).
3. **Mémorisation** (rétention à long terme).
4. **Motivation** (donner envie de revenir).
5. **Richesse fonctionnelle** (en dernier — mieux vaut peu et clair que beaucoup et confus).

---

*Ce profil est le contrat de conception de l'application. Il existe pour qu'aucune fonctionnalité, aussi séduisante soit-elle, ne trahisse l'apprenant cible : un adulte visuel, attentionnellement fragile, qui apprend par couleurs, schémas et micro-sessions.*
