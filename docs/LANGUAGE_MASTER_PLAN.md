# 🗺️ LANGUAGE MASTER PLAN — Darija Tunisien

> Feuille de route officielle du contenu linguistique de l'application.
> **Document de planification uniquement** — aucun code, écran ou composant n'est créé ici.
> Le contenu réel sera produit ultérieurement, par lots, en suivant ce plan.

**Principe directeur : la fréquence réelle d'usage dans le tunisien parlé moderne prime sur tout.** Chaque lot est ordonné du plus utile au moins utile. Un débutant de la diaspora doit pouvoir tenir une vraie conversation le plus tôt possible.

---

## 0. Cadre de référence (aligné sur l'architecture existante)

Le contenu produit devra respecter **exactement** les types déjà définis dans `types/index.ts`, sans quoi il ne s'intégrera pas.

### Catégories de vocabulaire (`WordCategory`) — figées
`salutations` · `famille` · `nourriture` · `chiffres` · `couleurs` · `corps` · `maison` · `transport` · `travail` · `emotions` · `temps` · `vêtements` · `shopping` · `loisirs` · `nature` · `autres`

### Niveaux (`Level`)
`debutant` → `elementaire` → `intermediaire` → `avance`

### Registres (`VocabularyDomain`)
`quotidien` · `formel` · `familier` · `diaspora`

### Catégories de grammaire (`GrammarCategory`)
`article` · `negation` · `possession` · `pluriel` · `genre` · `temps` · `interrogation` · `comparaison` · `preposition` · `autre`

### Contextes de dialogue (`DialogueContext`)
`famille` · `marche` · `restaurant` · `telephone` · `rue` · `maison` · `travail` · `celebrations`

### Conventions d'identifiants (à poursuivre)
- Mots : `w_<slug_français>` (ex. `w_bonjour`)
- Verbes : `v_<racine_latine>` (ex. `v_kl`)
- Grammaire : `gr_<slug>` (ex. `gr_negation_simple`)
- Dialogues : `dial_<contexte>_<NN>` (ex. `dial_famille_01`)
- Leçons : `les_<slug>_<NN>` (ex. `les_salutations_01`)
- Phrases : `p_<contexte>_<NN>` (nouvelle convention proposée)

### Champs obligatoires par élément
- **Mot** : `darija`, `darijaLatin`, `phonetic`, `french`, `category`, `level`, `domain`, `frequencyRank` (1–5), `tags`
- **Verbe** : `infinitiveFrench`, `rootDarija`, `rootLatin`, `conjugations` (présent/passé/futur/impératif), `level`, `isIrregular`, `tags`
- **Règle** : `title`, `category`, `level`, `explanation`, `pattern`, `examples` (avec contre-exemples), `lessonIds`

### Translittération — règle de cohérence absolue
Conserver le système déjà en place (chiffres arabes pour les sons sans équivalent français) : **7 = ح**, **3 = ع**, **9 = ق**, **kh = خ**, **gh = غ**. Toute production doit s'y tenir sans exception.

---

## 1. 📝 LES 500 MOTS LES PLUS FRÉQUENTS

Organisés en **5 paliers de fréquence** (`frequencyRank` 1 → 5). Le palier 1 = mots entendus à chaque conversation. Produire dans l'ordre des paliers.

### Palier 1 — Survie absolue (rang 1) · ~80 mots · `debutant`
Les mots sans lesquels aucune phrase n'existe.

| Catégorie | Volume cible | Exemples de référence (déjà présents ou prioritaires) |
|-----------|-------------|--------------------------------------------------------|
| `salutations` | 12 | merhba, aslema, sba7 el khir, msa el khir, bislama |
| `autres` (mots-outils) | 25 | besh (futur), mch (ne…pas), fama (il y a), 3andi (j'ai), n7eb (je veux) |
| `chiffres` | 15 | wa7ed, zouz, tletha, arb3a… (1→10, 20, 100) |
| `temps` | 10 | el yetma (aujourd'hui), ghodwa (demain), el bera7 (hier) |
| `famille` | 10 | omm, bou, khou, okht, jadda |
| `emotions` (de base) | 8 | behi (bien), mrigel (ok), na3es (fatigué) |

### Palier 2 — Quotidien essentiel (rang 2) · ~120 mots · `debutant`
| Catégorie | Volume cible | Axes |
|-----------|-------------|------|
| `nourriture` | 25 | aliments de base, boissons, repas, marché |
| `maison` | 20 | pièces, meubles, objets courants |
| `corps` | 15 | parties du corps, santé de base |
| `transport` | 12 | taxi, louage, bus, métro, voiture |
| `shopping` | 12 | acheter, prix, argent (dinar, millime) |
| `couleurs` | 10 | couleurs de base |
| `vêtements` | 12 | habits courants |
| `nature` | 14 | météo, mer, soleil, éléments |

### Palier 3 — Conversation courante (rang 3) · ~140 mots · `elementaire`
Adjectifs descriptifs, lieux de la ville, professions courantes, mots de liaison, expressions de quantité et de fréquence. Répartis sur **toutes** les catégories.

### Palier 4 — Nuance et aisance (rang 4) · ~100 mots · `intermediaire`
Vocabulaire abstrait (idées, sentiments complexes), termes administratifs, vie professionnelle, loisirs spécifiques, expressions idiomatiques fréquentes.

### Palier 5 — Richesse (rang 5) · ~60 mots · `avance`
Vocabulaire spécialisé, registre soutenu, nuances régionales (Tunis / Sfax / Sousse), mots plus rares mais culturellement importants.

**Total : 500 mots.** Règle de production : ne jamais entamer un palier tant que le précédent n'est pas complet et relu.

---

## 2. 🗣️ LES 100 VERBES LES PLUS UTILES

Classés par **fréquence d'usage** et par **régularité morphologique** (pour exploiter la décomposition visuelle préfixe/radical/suffixe déjà prévue).

### Groupe A — Les 20 verbes vitaux (rang 1) · `debutant`
Les verbes du quotidien immédiat, à conjuguer en priorité au présent, passé et futur.

| Priorité | Sens | Racine indicative | Statut |
|----------|------|-------------------|--------|
| 1 | être / il y a | kain / fama | irrégulier |
| 2 | avoir | 3and | particule possessive |
| 3 | vouloir | 7ebb | régulier |
| 4 | aller | msha | irrégulier |
| 5 | venir | ja | irrégulier |
| 6 | manger | kl | irrégulier ✅ déjà présent |
| 7 | boire | shrab | régulier |
| 8 | parler | 7ka | défectueux ✅ déjà présent |
| 9 | faire | 3mal | régulier |
| 10 | dire | 9al | irrégulier |
| 11–20 | pouvoir, savoir, voir, donner, prendre, dormir, sortir, entrer, rester, partir | — | mixte |

### Groupe B — Les 30 verbes courants (rang 2) · `elementaire`
Actions du quotidien élargi : acheter, vendre, travailler, étudier, comprendre, attendre, chercher, trouver, ouvrir, fermer, écrire, lire, jouer, rire, pleurer, aider, demander, répondre, appeler, payer…

### Groupe C — Les 30 verbes utiles (rang 3) · `intermediaire`
Verbes de nuance : penser, croire, espérer, décider, oublier, se souvenir, changer, essayer, réussir, échouer, commencer, finir, continuer, arrêter…

### Groupe D — Les 20 verbes d'enrichissement (rang 4–5) · `avance`
Verbes moins fréquents ou à connotation soutenue / idiomatique.

**Conjugaisons à produire pour chaque verbe :**
1. **Présent** (priorité 1) — préfixes n-/t-/y-
2. **Passé** (priorité 1) — suffixes
3. **Futur** (priorité 2) — particule « besh » + présent
4. **Impératif** (priorité 3) — 2 personnes

> ⚠️ **Donnée morphologique** : le champ optionnel `morphology` (prefix/root/suffix) de `VerbConjugation` permet la décomposition colorée. À renseigner **en priorité pour les verbes réguliers du Groupe A**, où le pattern est net. Ne jamais inventer un découpage incertain — laisser vide active le fallback lisible.

---

## 3. 💬 LES 300 PHRASES DU QUOTIDIEN

Phrases complètes prêtes à l'emploi, classées par **situation de communication** et par fréquence. Convention d'ID proposée : `p_<contexte>_<NN>`.

### Bloc 1 — Phrases de survie (rang 1) · ~60 phrases · `debutant`
| Fonction | Volume | Exemples de visée |
|----------|--------|-------------------|
| Se présenter | 12 | « Je m'appelle… », « Je viens de France » |
| Saluer / prendre congé | 10 | « Comment ça va ? », « À bientôt » |
| Politesse | 10 | « S'il te plaît », « Merci beaucoup », « Pardon » |
| Demander de l'aide | 8 | « Tu peux m'aider ? », « Je ne comprends pas » |
| Oui / non / accord | 10 | « D'accord », « Pas de problème », « Bien sûr » |
| Ne pas comprendre | 10 | « Répète s'il te plaît », « Parle plus lentement » |

### Bloc 2 — Phrases pratiques (rang 2) · ~90 phrases · `debutant`/`elementaire`
Au marché, au restaurant, en taxi/louage, faire des courses, demander son chemin, parler de prix, gérer l'argent, exprimer un besoin simple.

### Bloc 3 — Phrases sociales (rang 3) · ~90 phrases · `elementaire`
Parler de soi et de sa famille, exprimer ses goûts, accepter/refuser une invitation, parler du temps qu'il fait, prendre des nouvelles, féliciter, présenter ses condoléances.

### Bloc 4 — Phrases d'aisance (rang 4) · ~60 phrases · `intermediaire`
Exprimer une opinion, un désaccord poli, raconter un événement passé, parler de projets, gérer une situation administrative, nuancer.

**Chaque phrase doit lier :** la phrase en darija (arabe + translittération + français) + les `wordIds` du vocabulaire qu'elle mobilise + la `GrammarCategory` qu'elle illustre. Cela alimente automatiquement les exercices « remise en ordre » du quiz.

---

## 4. 🎭 LES 50 DIALOGUES ESSENTIELS

Scènes authentiques de la vie réelle, particulièrement celles que rencontre **la diaspora**. Classés par fréquence de la situation. Chaque dialogue suit le type `Dialogue` (contexte, niveau, lignes A/B, note culturelle, mots-clés).

### Série 1 — Dialogues fondamentaux (rang 1) · 15 dialogues · `debutant`
| # | Contexte | Situation | Statut |
|---|----------|-----------|--------|
| 1 | `famille` | Appel vidéo avec un proche | ✅ déjà présent |
| 2 | `marche` | Acheter des légumes / négocier | ✅ déjà présent |
| 3 | `salutations`→`rue` | Croiser un voisin | à produire |
| 4 | `restaurant` | Commander un repas | à produire |
| 5 | `transport` | Prendre un taxi / louage | à produire |
| 6 | `telephone` | Passer un appel simple | à produire |
| 7 | `maison` | Accueillir un invité | à produire |
| 8 | `shopping` | Acheter des vêtements | à produire |
| 9–15 | divers | café, pharmacie, demander son chemin, présentations… | à produire |

### Série 2 — Dialogues du quotidien (rang 2) · 20 dialogues · `elementaire`
Situations élargies : chez le médecin, à la banque/poste, réserver, se plaindre poliment, organiser une sortie, parler de son travail, retrouvailles à l'aéroport.

### Série 3 — Dialogues culturels et avancés (rang 3) · 15 dialogues · `intermediaire`/`avance`
| Contexte | Exemples |
|----------|----------|
| `celebrations` | Mariage, Aïd, naissance, circoncision |
| `famille` | Repas de famille élargi, désaccord générationnel |
| `travail` | Entretien, réunion, négociation |
| Culturel | Hospitalité, marchandage avancé, expressions imagées |

**Chaque dialogue doit :** réutiliser en priorité du vocabulaire des paliers déjà couverts, porter une **note culturelle** (essentielle pour la diaspora), et rester réaliste (pas de tunisien « scolaire »).

---

## 5. 📜 LES RÈGLES DE GRAMMAIRE

Classées par **rentabilité pédagogique** : une règle qui débloque beaucoup de phrases passe avant une règle de détail. Alignées sur les 6 sections déjà prévues dans `grammarSections.ts` (pronoms, présent, passé, futur, négation, possession) puis au-delà.

### Niveau 1 — Fondations (rang 1) · `debutant` · ~8 règles
| Priorité | Règle | `GrammarCategory` | Statut |
|----------|-------|-------------------|--------|
| 1 | Pronoms personnels (7 personnes) | — (pronoms) | ✅ data présente |
| 2 | La négation `ma … sh` | `negation` | ✅ déjà présent |
| 3 | L'article défini `el-` + assimilation solaire | `article` | ✅ déjà présent |
| 4 | Le présent (préfixes n/t/y) | `temps` | pattern ✅ présent |
| 5 | Le passé (suffixes) | `temps` | pattern ✅ présent |
| 6 | Genre (masculin/féminin) | `genre` | à produire |
| 7 | L'interrogation (mots interrogatifs) | `interrogation` | à produire |
| 8 | « il y a » / « j'ai » (fama / 3and) | `possession` | à produire |

### Niveau 2 — Construction (rang 2) · `elementaire` · ~7 règles
Le futur (`besh` + présent), la possession (suffixes pronominaux), le pluriel (régulier et irrégulier), les prépositions courantes, l'impératif, les démonstratifs (ce, cette, ces), l'accord de l'adjectif.

### Niveau 3 — Nuance (rang 3) · `intermediaire` · ~6 règles
La comparaison, les pronoms compléments, la subordination simple (parce que, quand, si), l'expression de la durée, les verbes à particule, la conditionnelle simple.

### Niveau 4 — Finitions (rang 4) · `avance` · ~4 règles
Nuances aspectuelles, tournures idiomatiques, registres (soutenu vs familier), particularités régionales.

**Chaque règle doit comporter :** une explication courte (pas de mur de texte), un `pattern` formel, des exemples **et des contre-exemples** (le champ `isCounterExample` existe déjà), et les `lessonIds` qui l'enseignent.

---

## 6. 🔢 ORDRE DE PRODUCTION RECOMMANDÉ

Pour livrer de la valeur utilisable le plus vite possible, produire **en tranches transversales** plutôt que catégorie par catégorie :

| Phase | Contenu | Résultat débloqué |
|-------|---------|-------------------|
| **P1 — MVP parlant** | 80 mots P1 + 20 verbes A (présent/passé) + 60 phrases B1 + 8 règles N1 + 15 dialogues S1 | L'utilisateur tient une conversation de survie |
| **P2 — Autonomie** | mots P2 + verbes B + phrases B2 + règles N2 + dialogues S2 | Se débrouiller seul au quotidien |
| **P3 — Aisance** | mots P3–P4 + verbes C + phrases B3 + règles N3 + dialogues S3 | Conversation fluide |
| **P4 — Richesse** | reste des mots + verbes D + phrases B4 + règles N4 | Maîtrise nuancée |

### Règles de qualité non négociables
1. **Fréquence d'abord** : si un mot/verbe/phrase n'est pas réellement courant en Tunisie aujourd'hui, il descend dans la liste.
2. **Cohérence de translittération** : système 7/3/9/kh/gh strict, sans exception.
3. **Tunisien authentique** : pas de calque de l'arabe standard ni de tournures « scolaires ».
4. **Réutilisation** : phrases et dialogues réemploient en priorité le vocabulaire déjà introduit.
5. **Relecture par palier** : aucun palier suivant tant que le précédent n'est pas validé.
6. **Note culturelle** : systématique pour les dialogues, fréquente pour les mots à charge culturelle (diaspora).

---

## 7. 📊 RÉCAPITULATIF DES VOLUMES

| Bloc | Volume cible | Découpage |
|------|-------------|-----------|
| Mots | **500** | 80 / 120 / 140 / 100 / 60 par palier |
| Verbes | **100** | 20 / 30 / 30 / 20 par groupe |
| Phrases | **300** | 60 / 90 / 90 / 60 par bloc |
| Dialogues | **50** | 15 / 20 / 15 par série |
| Règles | **~25** | 8 / 7 / 6 / 4 par niveau |

**État actuel de la base** (point de départ) : 2 mots, 2 verbes, 2 règles, 2 dialogues, 7 pronoms, 2 patterns de conjugaison.

---

*Ce plan est un document vivant. Il sera ajusté au fil de la production, mais l'ordre de priorité par fréquence réelle reste le principe fondateur et ne doit pas être contourné.*
