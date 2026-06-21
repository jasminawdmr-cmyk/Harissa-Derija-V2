# ✍️ TUNISIAN WRITING SYSTEM — Harissa

> Section officielle consacrée aux trois systèmes d'écriture du tunisien.
> **Document de conception uniquement** — aucun code, écran ou composant n'est modifié.
> Définit une progression pédagogique pour qu'un francophone devienne progressivement à l'aise avec les trois.

**Réalité du tunisien écrit : il s'écrit de trois façons selon le contexte.** Un apprenant complet doit savoir naviguer entre elles. Mais on ne les enseigne pas toutes en même temps — la progression est douce, pour respecter la charge cognitive (cf. `LEARNER_PROFILE.md`).

---

## 1. Les trois systèmes

| Système | Exemple (« bonjour ») | Où on le rencontre | Difficulté pour un francophone |
|---------|----------------------|--------------------|-------------------------------|
| **Latin (translittération)** | *Aslema* | apprentissage, manuels, app | ⭐ Facile (alphabet connu) |
| **Arabizi (arabe + chiffres)** | *3aslema* | SMS, réseaux sociaux, chat | ⭐⭐ Moyen (logique à apprendre) |
| **Arabe** | السلام | écrit formel, officiel, religieux | ⭐⭐⭐⭐ Difficile (nouvel alphabet) |

---

## 2. Ordre d'apprentissage recommandé

L'ordre suit la **facilité d'entrée** et la **fréquence d'usage pour un débutant**, pas la « pureté » académique.

### Étape 1 — Latin (translittération) · dès le **début** · `debutant`
**Pourquoi en premier :** l'alphabet est déjà connu du francophone. Zéro barrière d'entrée. Permet de **parler et lire immédiatement** sans bloquer sur un nouvel alphabet.
- C'est le système **par défaut de toute l'app** (déjà en place dans les données).
- Système de translittération cohérent et stable : **7 = ح, 3 = ع, 9 = ق, kh = خ, gh = غ** (cf. `LANGUAGE_MASTER_PLAN.md`).
- Objectif : l'apprenant lit couramment la translittération dès les premiers jours.

### Étape 2 — Arabizi · à partir du **niveau élémentaire** · `elementaire`
**Pourquoi en deuxième :** c'est ce que les Tunisiens utilisent réellement au quotidien sur leurs téléphones (SMS, WhatsApp, réseaux sociaux). **Indispensable pour communiquer avec de vrais locuteurs** aujourd'hui.
- L'Arabizi **réutilise la translittération latine déjà maîtrisée** + ajoute la logique des chiffres pour les sons spécifiques. La transition est donc naturelle.
- Les chiffres-lettres sont **déjà familiers** grâce au système de translittération de l'app (le 7, le 3, le 9 sont les mêmes).
- Objectif : lire et écrire un message tunisien informel.

### Étape 3 — Arabe · à partir du **niveau intermédiaire**, en douceur · `intermediaire` → `avance`
**Pourquoi en dernier :** c'est le plus exigeant (nouvel alphabet, sens de lecture droite→gauche, lettres liées). On l'introduit quand l'apprenant est **déjà à l'aise à l'oral et en lecture latine**, pour ne pas le décourager au départ.
- Introduction **très progressive** : reconnaître avant d'écrire, lettres fréquentes d'abord.
- Fortement appuyé par le **double codage visuel** (couleurs, formes des lettres).
- Objectif réaliste : reconnaître l'alphabet, lire des mots simples — la maîtrise complète est un objectif de long terme, pas un prérequis.

---

## 3. Difficulté et fréquence — vue d'ensemble

| Système | Ordre | Niveau d'entrée | Fréquence d'usage réel | Effort d'apprentissage |
|---------|-------|-----------------|------------------------|------------------------|
| Latin | 1ᵉʳ | `debutant` | élevée (apprentissage) | faible |
| Arabizi | 2ᵉ | `elementaire` | **très élevée** (vie numérique) | moyen |
| Arabe | 3ᵉ | `intermediaire`+ | moyenne (formel/écrit) | élevé |

---

## 4. Passerelles entre les systèmes

La force pédagogique de Harissa : **montrer les trois écritures du même mot**, pour que l'apprenant tisse des ponts.

### Le triptyque d'un mot
Chaque mot peut être présenté sous ses trois formes, alignées :

```
Latin    :  Aslema
Arabizi  :  3aslema
Arabe    :  السلام
Sens     :  bonjour / la paix
```

### Passerelles concrètes
1. **Latin → Arabizi** : « le son *3* que tu connais en translittération (3ayn) s'écrit *3* en Arabizi aussi. » → continuité directe.
2. **Arabizi → Arabe** : « ce *3* correspond à la lettre ع en arabe. » → le chiffre devient un pont mnémotechnique vers la lettre.
3. **Latin → Arabe** : table de correspondance visuelle son → lettre arabe, couleur stable par lettre.

### Logique des chiffres (cœur des passerelles)
| Chiffre (Arabizi/translit.) | Lettre arabe | Son |
|------------------------------|--------------|-----|
| **7** | ح | h emphatique |
| **3** | ع | ‘ayn (guttural) |
| **9** | ق | q profond |
| **kh** | خ | kh (jota espagnole) |
| **gh** | غ | r grasseyé |

Ces correspondances sont **déjà la base du système de translittération de l'app** — l'apprenant les connaît donc avant même d'aborder l'Arabizi et l'arabe. C'est le fil conducteur des trois systèmes.

---

## 5. Progression pédagogique proposée

| Phase | Système(s) | Objectif |
|-------|-----------|----------|
| Jours 1–30 | Latin uniquement | Lire couramment la translittération, parler |
| Jours 31–60 | Latin + introduction Arabizi | Lire/écrire un message informel tunisien |
| Jours 61–90+ | + reconnaissance de l'arabe | Reconnaître l'alphabet, lire des mots simples |
| Long terme | Les trois en parallèle | Naviguer entre les contextes selon le besoin |

Cohérent avec la progression 90 jours du `MEMORY_SYSTEM.md`.

---

## 6. Format des leçons d'écriture

- **Une lettre/correspondance = une carte** (cf. `LEARNER_PROFILE.md` : une idée par carte).
- **Couleur stable par lettre/son** (système visuel), pour ancrer par double codage.
- **Reconnaissance avant production** : on apprend à lire avant à écrire.
- **Micro-sessions** : 3–5 minutes, quelques lettres à la fois.
- **Pont systématique** : toujours relier la nouvelle forme à une forme déjà connue.
- **Pas de pression** : l'arabe est présenté comme un bonus enrichissant, jamais comme un obstacle obligatoire.

---

## 7. Articulation avec l'app

- Pourrait vivre comme un **parcours dans l'onglet Apprendre**, ou une section transverse accessible depuis le Profil (progression d'écriture). À trancher dans une tâche dédiée (cf. `APP_ARCHITECTURE_V2.md`).
- S'appuie sur la **translittération déjà présente** dans toutes les données — aucun contenu existant n'est modifié.
- Respecte le **système visuel** (couleurs/pictos stables) et la **mémorisation** (espacement, double codage).

---

## 8. Volume minimal au lancement

(Détaillé dans `V1_CONTENT_ROADMAP.md`)
- **Latin** : déjà actif partout (le système de l'app).
- **Arabizi** : une leçon d'introduction + la table des chiffres (7, 3, 9, kh, gh) + 5–10 mots en triptyque.
- **Arabe** : une leçon de découverte (reconnaître l'alphabet) + les 5–8 lettres les plus fréquentes, en reconnaissance seulement.

---

*Trois écritures, un seul fil conducteur : les chiffres que l'apprenant connaît dès le premier jour deviennent les ponts vers l'arabe. On lit d'abord, on écrit ensuite, sans jamais décourager.*
