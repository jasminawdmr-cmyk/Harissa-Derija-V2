# 🧭 APP ARCHITECTURE V2 — Harissa

> Architecture de navigation repensée, version 2.
> **Document de conception uniquement** — aucun code, écran ou composant n'est modifié.
> Les 8 écrans actuels restent en place ; ce document décrit comment les **regrouper conceptuellement** en 5 onglets pour réduire la charge cognitive. La mise en œuvre éventuelle viendra plus tard, séparément.

---

## 1. Le problème actuel

L'application possède aujourd'hui **8 onglets** :
`Accueil · Leçon · Révisions · Verbes · Vocabulaire · Quiz · Grammaire · Profil`

C'est trop pour le profil cible (adulte, attention limitée). Huit destinations = huit décisions possibles à chaque ouverture. Cela contredit directement deux règles du `LEARNER_PROFILE.md` : **réduire la charge de décision** et **calme visuel**. Plusieurs onglets se recouvrent aussi conceptuellement (Vocabulaire, Verbes, Grammaire sont tous « du contenu de langue à étudier »).

---

## 2. La cible : 5 onglets maximum

| # | Onglet | Icône signature | Rôle |
|---|--------|-----------------|------|
| 1 | **Accueil** | (ambiance du jour) | Point de départ, session quotidienne proposée |
| 2 | **Apprendre** | 🧩 | Tout le contenu de langue structuré (leçons, vocabulaire, verbes, grammaire) |
| 3 | **Réviser** | 🧠 | Mémorisation active (flashcards, quiz) pilotée par le moteur |
| 4 | **Découvrir** | 🌶️ | Découvrir la Tunisie : culture, histoire, cuisine, musique, régions |
| 5 | **Profil** | (avatar) | Progression, réglages, identité de l'apprenant |

**Cinq destinations, cinq intentions claires.** L'utilisateur sait toujours où aller : « je continue » (Accueil), « j'apprends du nouveau » (Apprendre), « je consolide » (Réviser), « j'explore la culture » (Découvrir), « je me situe » (Profil).

---

## 3. Justification de chaque regroupement

### 🏠 Onglet 1 — Accueil *(inchangé dans son rôle)*
**Regroupe :** l'écran d'accueil actuel.
**Pourquoi :** c'est déjà la porte d'entrée. Il propose la session du jour (5–15 min) et l'ambiance tunisienne du moment. Aucune fusion nécessaire — c'est le cœur du retour quotidien.

### 🧩 Onglet 2 — Apprendre *(fusion de 4 écrans)*
**Regroupe :** `Leçon` + `Vocabulaire` + `Verbes` + `Grammaire`.
**Pourquoi ce regroupement :**
- Ces quatre écrans répondent tous à la **même intention utilisateur** : « je veux apprendre du nouveau contenu de langue ». Les séparer en 4 onglets force l'utilisateur à savoir *à l'avance* quelle brique il veut — une charge de décision inutile.
- La **leçon du jour** devient le point d'entrée naturel ; vocabulaire, verbes et grammaire en sont les **rayons d'une même bibliothèque**, accessibles en sous-navigation (sections internes, pas onglets de premier niveau).
- Pédagogiquement cohérent : une leçon mobilise déjà des mots + des verbes + une règle. Les réunir reflète la réalité de l'apprentissage.
- **Structure interne proposée** d'Apprendre :
  - *Parcours* (les leçons, dans l'ordre) — entrée par défaut
  - *Mots* (le vocabulaire, filtrable par thème)
  - *Verbes* (les conjugaisons visuelles)
  - *Grammaire* (les règles, par section)

### 🧠 Onglet 3 — Réviser *(fusion de 2 écrans)*
**Regroupe :** `Révisions` (flashcards) + `Quiz`.
**Pourquoi ce regroupement :**
- Les deux répondent à l'intention « je veux **consolider** ce que je connais déjà », par récupération active — pas découvrir du neuf.
- Tous deux sont **pilotés par les mêmes moteurs** (`reviewEngine`, `quizGenerator`, `personalizationEngine`). Les réunir reflète leur parenté technique et pédagogique.
- L'utilisateur n'a plus à choisir « flashcards ou quiz ? » : Réviser propose la **modalité adaptée** au moment (le moteur décide), avec possibilité de choisir.
- **Structure interne proposée** de Réviser :
  - *Session du jour* (révisions dues, entrelacées) — entrée par défaut
  - *Cartes* (flashcards libres)
  - *Quiz* (les 4 types de questions)

### 🌶️ Onglet 4 — Découvrir *(nouveau pilier)*
**Regroupe :** le nouveau pilier culturel (voir `DISCOVER_TUNISIA_SYSTEM.md`).
**Pourquoi :**
- C'est ce qui transforme Harissa d'« app de langue » en « porte d'entrée culturelle » (cf. `PRODUCT_VISION_V2.md`).
- Il mérite un onglet de premier niveau car c'est un **pilier d'égale importance** à l'apprentissage de la langue, pas un sous-menu.
- **Structure interne proposée** : Culture · Histoire · Cuisine · Musique · Régions · Expressions.

### 👤 Onglet 5 — Profil *(inchangé dans son rôle)*
**Regroupe :** l'écran profil actuel.
**Pourquoi :** progression, statistiques de maîtrise, série, réglages. Destination stable et attendue. Pourrait aussi accueillir la future progression d'écriture (cf. `TUNISIAN_WRITING_SYSTEM.md`) et la « collection » culturelle.

---

## 4. Avant / Après

| Avant (8 onglets) | Après (5 onglets) |
|-------------------|-------------------|
| Accueil | **Accueil** |
| Leçon | ↘ |
| Vocabulaire | → **Apprendre** (Parcours · Mots · Verbes · Grammaire) |
| Verbes | ↗ |
| Grammaire | ↗ |
| Révisions | ↘ **Réviser** (Session · Cartes · Quiz) |
| Quiz | ↗ |
| *(nouveau)* | **Découvrir** (Culture · Histoire · Cuisine · Musique · Régions · Expressions) |
| Profil | **Profil** |

**Résultat : 8 → 5 destinations de premier niveau**, malgré l'ajout d'un pilier culturel entier. La complexité descend, la richesse monte.

---

## 5. Principes de navigation

1. **5 onglets maximum**, jamais plus. C'est une limite dure.
2. **Une intention par onglet** : continuer / apprendre / réviser / explorer / se situer.
3. **Sous-navigation interne** plutôt que nouveaux onglets : quand une section grandit, elle se structure *à l'intérieur* de son onglet.
4. **Entrée par défaut intelligente** : chaque onglet ouvre sur l'action la plus probable (Apprendre → la leçon du jour ; Réviser → la session du jour).
5. **Profondeur limitée** : maximum 2 niveaux sous un onglet, pour ne pas perdre l'utilisateur.
6. **Cohérence visuelle** : chaque onglet porte une couleur/un picto stable issu du système visuel.

---

## 6. Continuité avec l'existant

- **Aucun écran n'est supprimé.** Leçon, Vocabulaire, Verbes, Grammaire, Révisions, Quiz existent toujours — ils deviennent des **vues à l'intérieur** d'un onglet plutôt que des onglets autonomes.
- **Aucune fonctionnalité perdue** : tout ce qui marche aujourd'hui reste accessible, simplement mieux rangé.
- **Aucun code modifié par ce document** : c'est un plan conceptuel. La réorganisation technique, si elle est décidée, fera l'objet d'une tâche dédiée, après test de l'app sur Expo Go.

---

*Moins d'onglets, plus de clarté. Cinq portes, chacune avec une intention évidente.*
