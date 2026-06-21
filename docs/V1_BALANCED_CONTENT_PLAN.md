# 🌶️ V1 BALANCED CONTENT PLAN — Harissa

> **Plan officiel de remplissage de la V1.**
> Document de planification uniquement — aucun code, écran ou composant n'est modifié.
> La documentation stratégique est figée ; ce plan **organise le remplissage**, il ne refait aucune stratégie.
> On définit précisément **ce qui doit être produit**, pas le contenu détaillé lui-même.

---

## 0. Cadre et objectif

**Contexte :** cette V1 n'est pas destinée au grand public mais à l'**entourage** (famille, amis, diaspora). Elle ne doit donc **pas** être un MVP minimal : elle doit déjà paraître **riche, complète et agréable à explorer**.

**Objectif chiffré global :** atteindre **~20 à 25 % du contenu final dans TOUTES les rubriques**, de façon **équilibrée**. Aucune rubrique très riche à côté d'une rubrique presque vide.

**Principe de répartition :** on remplit en priorité ce qui est le plus fréquent/utile (cf. `LANGUAGE_MASTER_PLAN.md`), mais on garantit une présence visible partout — y compris Découvrir, Écriture et les contenus diaspora.

**Référence :** ce plan complète `V1_CONTENT_ROADMAP.md` (qui visait un MVP minimal) en relevant la barre à « V1 riche pour l'entourage ». Le Pack 01 déjà produit (`V1_CONTENT_PACK_01.md`) couvre une première tranche ; ce plan cadre **l'ensemble** à atteindre.

---

## 1. 📚 APPRENDRE

Cible : environ **20–25 %** des volumes finaux du `LANGUAGE_MASTER_PLAN.md`.

| Brique | Cible finale | **Cible V1 (~20–25 %)** | Source / priorité |
|--------|-------------|--------------------------|-------------------|
| Mots | 500 | **100–120 mots** | Palier 1 complet + début Palier 2 |
| Verbes | 100 | **20–25 verbes** | Groupe A complet + début Groupe B |
| Grammaire | ~25 | **10 règles** | Niveau 1 complet + 2 du Niveau 2 |
| Phrases | 300 | **20–30 phrases** | Bloc 1 (survie) prioritaire |
| Dialogues | 50 | **10 mini-dialogues** | Série 1 (fondamentaux) |
| Leçons du quotidien | — | **10 leçons** | Parcours 1 + début Parcours 2 |

### 1.1 Vocabulaire — 100 à 120 mots (répartition par catégorie)
Équilibrer sur les catégories `WordCategory`, en pondérant par fréquence :
| Catégorie | Mots V1 |
|-----------|---------|
| salutations | 12 |
| mots-outils (`autres`) | 20 |
| chiffres | 15 |
| temps | 10 |
| famille | 12 |
| nourriture | 14 |
| maison | 10 |
| émotions | 8 |
| corps | 6 |
| transport | 6 |
| couleurs | 5 |
| **Total** | **~118** |

### 1.2 Verbes — 20 à 25 (Groupe A + amorce B)
Les 15 du Pack 01 + ~8 supplémentaires (acheter, payer, travailler, étudier, attendre, chercher, ouvrir, fermer). Présent + passé prioritaires ; décomposition morphologique sur les réguliers.

### 1.3 Grammaire — 10 règles
Niveau 1 complet (8) : pronoms, négation `ma…ch`, article `el-`, présent, passé, genre, interrogation, « il y a / j'ai ». + 2 du Niveau 2 : le futur (`besh`), la possession (suffixes).

### 1.4 Phrases — 20 à 30
Bloc 1 (survie) : se présenter, politesse, demander de l'aide, oui/non/accord, ne pas comprendre, + premières phrases pratiques (marché, taxi, café).

### 1.5 Mini-dialogues — 10
Série 1 fondamentale : voisin, café, restaurant, taxi/louage, téléphone, accueil d'un invité, shopping, marché (✅ amorcé), famille (✅ amorcé), demander son chemin.

### 1.6 Leçons du quotidien — 10
Parcours 1 « Survivre » (10 leçons) du `CONTENT_UNIVERSE.md`, en priorité.

---

## 2. 🧠 RÉVISER

Le pilier Réviser ne crée pas de contenu propre : il **recycle** Apprendre et Découvrir via les moteurs existants. Le « contenu » à préparer = s'assurer que chaque élément est exploitable par les moteurs.

### Contenu à préparer pour la V1
| Modalité | Ce qu'il faut | Volume V1 |
|----------|---------------|-----------|
| **Flashcards** | chaque mot → 2 cartes (fr→tn, tn→fr) | ~120 mots → ~240 cartes |
| **Quiz QCM** | mots avec ≥3 distracteurs possibles | couvert dès ~100 mots |
| **Quiz traduction** | mots avec sens clair | tous les mots V1 |
| **Quiz conjugaison** | verbes avec ≥2 formes/temps | les 20–25 verbes |
| **Quiz remise en ordre** | phrases ≥ 3 mots | les 20–30 phrases + dialogues |
| **Associations** | paires mot↔catégorie, mot↔image/picto | toutes catégories |
| **Révisions quotidiennes** | pool suffisant pour 30+ jours sans répétition lassante | garanti par les volumes ci-dessus |

> **Règle :** chaque mot/verbe/phrase produit dans Apprendre et Découvrir doit être **directement réutilisable** par le `reviewEngine` et le `quizGenerator` (mêmes champs, mêmes conventions d'ID). C'est ce qui rend Réviser riche « gratuitement ».

---

## 3. 🇹🇳 DÉCOUVRIR LA TUNISIE

Cible : présence **visible et équilibrée** dans les 6 rubriques + diaspora. C'est le pilier qui donne l'impression « riche et culturel ».

| Rubrique | **Cible V1** | Note |
|----------|--------------|------|
| 🍵 Culture | **10 micro-leçons** | traditions, codes sociaux, vie quotidienne |
| 🏛️ Histoire | **10 micro-leçons** | repères des grandes périodes + personnages |
| 🌶️ Cuisine | **8 recettes pédagogiques** | Ojja ✅ (Pack 01) + 7 autres |
| 🎵 Musique | **6 artistes ou genres** | genres + instruments + ambiances |
| 🌊 Régions | **8 régions** | fiches régionales |
| 💬 Expressions | **30 expressions** | tournures tunisiennes du quotidien |
| 🌍 Diaspora | **5 micro-leçons** | contenus spécifiques entourage (voir §5) |

### 3.1 Culture — 10 micro-leçons
Les 3 du Pack 01 (salutations, thé, famille) + 7 : l'hospitalité, le marché/souk, le café, les fêtes (Aïd), le mariage, les codes de politesse/gestes, le rapport au temps.

### 3.2 Histoire — 10 micro-leçons
Carthage, Rome (El Jem/Dougga), Kairouan, période ottomane, protectorat, Indépendance 1956, Tunisie contemporaine + 3 personnages-repères (une fiche chacun).

### 3.3 Cuisine — 8 recettes pédagogiques
Ojja ✅ + couscous, brik, salade tunisienne (slata), harissa (la pâte), makroud, lablabi, thé à la menthe. Chacune : ingrédients + vocabulaire + verbes + expressions + anecdote.

### 3.4 Musique — 6 fiches
Malouf, mezoued, variété contemporaine (genres) + oud, derbouka, mezoued-instrument (instruments). Format descriptif/culturel (pas d'audio requis en V1).

### 3.5 Régions — 8 fiches
Tunis & médina, Sidi Bou Saïd/Nord, Cap Bon (Nabeul), Sahel (Sousse/Monastir), Sfax, Kairouan, Djerba, Sud (sobrement). Chacune : caractère, spécialité culinaire, particularité linguistique, un objet signature.

### 3.6 Expressions — 30 expressions tunisiennes
Réparties : formules d'hospitalité (8), expressions imagées du quotidien (10), proverbes (6), interjections/petits mots (6). Format triptyque (latin/Arabizi/arabe) + sens réel + usage.

---

## 4. 🔤 ÉCRITURE TUNISIENNE — mini-parcours

L'**Arabizi est une composante forte** de Harissa. Le parcours répartit le contenu sur les trois systèmes, avec passerelles systématiques (cf. `TUNISIAN_WRITING_SYSTEM.md`).

### 4.1 Répartition V1 sur les 3 systèmes
| Système | Cible V1 | Statut |
|---------|----------|--------|
| **1. Latin tunisien** | actif partout (le système de l'app) + 1 leçon d'intro | ✅ base |
| **2. Arabizi** | **mini-parcours de 8 leçons** (cœur du dispositif) | priorité forte |
| **3. Arabe** | **6 lettres en reconnaissance** + 1 leçon découverte | progressif |

### 4.2 Priorisation des chiffres Arabizi
Distinction claire entre **prioritaires** (fréquents, indispensables) et **secondaires** (utiles mais moins courants) :

| Chiffre | Lettre | Priorité | Justification |
|---------|--------|----------|---------------|
| **3** | ع | 🟢 **Prioritaire** | extrêmement fréquent (*3andi*, *m3a*, *3aslema*) |
| **7** | ح | 🟢 **Prioritaire** | très fréquent (*n7eb*, *7aja*, *sba7*) |
| **9** | ق | 🟢 **Prioritaire** | fréquent (*9ahwa*, *9addesh*, *wa9t*) |
| **kh** | خ | 🟢 **Prioritaire** | fréquent + facile pour francophone (*khouya*, *okht*) |
| **5** | خ | 🟡 Secondaire | variante de *kh* — à mentionner, mais on enseigne *kh* d'abord |
| **gh / 8** | غ | 🟡 Secondaire | moins fréquent (*ghodwa*, *sghir*) |
| **2** | ء (hamza) | 🟡 Secondaire | coup de glotte, subtil, peu marqué à l'écrit informel |
| **6** | ط | 🟡 Secondaire | t emphatique ; souvent écrit simplement *t* en Arabizi |

> **Décision V1 :** enseigner d'abord les **4 prioritaires (3, 7, 9, kh)** — ils couvrent l'immense majorité des cas. Les secondaires (5, 8/gh, 2, 6) sont **présentés en reconnaissance** dans une leçon de synthèse, sans en faire un prérequis. Cela respecte la faible charge cognitive du `LEARNER_PROFILE.md`.

### 4.3 Mini-parcours Arabizi — 8 leçons
1. C'est quoi l'Arabizi ? (intro)
2. Le 3 = ع (✅ Pack 01)
3. Le 7 = ح (✅ Pack 01)
4. Le 9 = ق (✅ Pack 01)
5. Le kh = خ (✅ Pack 01)
6. Les secondaires en reconnaissance (5, gh, 2, 6)
7. Lire un vrai message WhatsApp tunisien
8. Écrire son premier message en Arabizi

### 4.4 Passerelles systématiques (latin → Arabizi → arabe)
Chaque mot-clé du parcours est présenté en triptyque. Exemples de référence à produire :
```
Merhba    →  Mer7ba    →  مرحبا       (bienvenue)
Nhebbek   →  N7ebbek   →  نحبك        (je t'aime)
Aandek    →  3andek    →  عندك        (tu as / chez toi)
Sabah     →  Sba7      →  صباح        (matin)
Khouya    →  Khouya    →  خويا        (mon frère)
9ahwa     →  9ahwa     →  قهوة        (café)
```
> Objectif de progression réaliste V1 : à la fin du mini-parcours, l'apprenant **lit un message WhatsApp tunisien simple** et **reconnaît** les 4 lettres arabes prioritaires. La maîtrise complète de l'arabe reste un objectif long terme.

---

## 5. 🌍 CONTENUS ORIENTÉS ENTOURAGE & DIASPORA

Spécificité majeure de cette V1 (public = proches). À intégrer comme **mini-leçons situationnelles** (Parcours dédié dans Apprendre + rubrique Diaspora dans Découvrir). Cible : **8 situations** (dont les 5 micro-leçons diaspora de §3).

| Situation | Pilier | Contenu type |
|-----------|--------|--------------|
| **Appeler sa famille** | Apprendre + Diaspora | vocabulaire téléphone, formules d'ouverture, prendre des nouvelles |
| **Arriver chez ses grands-parents** | Diaspora | salutations respectueuses, gestes, formules d'affection |
| **Aller voir la famille en Tunisie** | Diaspora | arrivée, retrouvailles, aéroport, premiers échanges |
| **Organiser un mariage** | Culture + Apprendre | vocabulaire des célébrations, félicitations, invitations |
| **Aller au café** | Apprendre | commander, payer, expressions du café |
| **Passer une soirée en famille** | Diaspora | repas, partage, expressions de table (lien recette Ojja) |
| **Aller faire les courses** | Apprendre | marché, prix, quantités, négocier |
| **Utiliser WhatsApp (en Arabizi)** | Écriture + Diaspora | lire/écrire un message, abréviations courantes |

> Ces contenus sont le **cœur émotionnel** de la V1 : ils parlent directement au vécu des proches et de la diaspora. Ton chaleureux, situations réelles, zéro cliché (`TUNISIAN_IDENTITY_SYSTEM.md`).

---

## 6. 📊 TABLEAU DE BORD GLOBAL DU REMPLISSAGE V1

Vue d'ensemble pour garantir l'équilibre (aucune rubrique vide) :

| Pilier / Rubrique | Cible V1 | % du final | Statut Pack 01 |
|-------------------|----------|------------|----------------|
| 📚 Mots | 100–120 | ~22 % | amorcé |
| 📚 Verbes | 20–25 | ~22 % | 15 faits ✅ |
| 📚 Grammaire | 10 | ~40 %* | à produire |
| 📚 Phrases | 20–30 | ~8 %** | amorcé |
| 📚 Dialogues | 10 | ~20 % | 2 faits ✅ |
| 📚 Leçons quotidien | 10 | parcours 1 | amorcé |
| 🧠 Réviser | dérivé | 100 % exploitable | automatique |
| 🍵 Culture | 10 | ~visible | 3 faits ✅ |
| 🏛️ Histoire | 10 | ~visible | à produire |
| 🌶️ Cuisine | 8 | ~visible | 1 faite ✅ (Ojja) |
| 🎵 Musique | 6 | ~visible | à produire |
| 🌊 Régions | 8 | ~visible | à produire |
| 💬 Expressions | 30 | ~visible | à produire |
| 🌍 Diaspora | 5–8 | nouveau | à produire |
| 🔤 Écriture | parcours 8+6 | Arabizi fort | 5 leçons ✅ |

\* La grammaire monte à ~40 % car le Niveau 1 débloque énormément de phrases : c'est un choix de **rentabilité pédagogique**, pas un déséquilibre.
\** Les phrases restent à ~8 % en V1 car le vocabulaire et les dialogues portent déjà l'usage ; on montera les phrases dans une V1.1. Choix assumé pour garder l'équilibre d'effort.

> **Lecture de l'équilibre :** toutes les rubriques ont une cible non nulle et visible. Les deux écarts (grammaire plus haute, phrases plus basses) sont **justifiés et assumés**, pas accidentels.

---

## 7. 🔢 ORDRE DE PRODUCTION RECOMMANDÉ (lots équilibrés)

Produire par lots transversaux, pour que l'app paraisse riche **à chaque étape** :

| Lot | Contenu | Effet |
|-----|---------|-------|
| **Lot A** | reste du vocabulaire P1 + verbes A complets + 4 règles N1 | Apprendre devient solide |
| **Lot B** | 8 mini-dialogues + 20 phrases + parcours « Survivre » complet | l'usage prend vie |
| **Lot C** | mini-parcours Arabizi complet + passerelles | Écriture devient un atout fort |
| **Lot D** | Cuisine (7 recettes) + Culture (7 leçons) | Découvrir s'étoffe |
| **Lot E** | Histoire (10) + Régions (8) + Musique (6) | Découvrir paraît complet |
| **Lot F** | Expressions (30) + contenus Diaspora (8) | le cœur émotionnel diaspora |
| **Lot G** | vocabulaire P2 (début) + 2 règles N2 + relecture native globale | finitions, V1 riche |

---

## 8. ✅ RÈGLES DE QUALITÉ DU REMPLISSAGE

1. **Équilibre d'abord** : ne jamais sur-remplir une rubrique au détriment d'une autre.
2. **Fréquence et vécu** : prioriser le tunisien réellement parlé, la Tunisie contemporaine et vécue, la diaspora.
3. **Translittération officielle** : 7/3/9/kh/gh stricts, partout.
4. **Triptyque systématique** quand pertinent (latin / Arabizi / arabe).
5. **Pas d'arabe littéraire, pas de mot à mot, pas de contenu scolaire.**
6. **Réutilisation** : chaque contenu réemploie le vocabulaire déjà introduit (renforce la mémorisation).
7. **Exploitable par les moteurs** : mêmes champs et conventions d'ID que l'existant, pour alimenter Réviser automatiquement.
8. **Respect du profil** : micro-sessions, une idée par carte, très visuel, un objet signature par écran.
9. **Relecture native** des graphies arabes et expressions avant intégration définitive (cf. note du Pack 01).

---

*Plan de remplissage équilibré : une V1 qui paraît déjà riche et chaleureuse pour les proches et la diaspora, avec ~20–25 % du contenu partout, l'Arabizi comme atout fort, et le vécu tunisien au cœur.*
