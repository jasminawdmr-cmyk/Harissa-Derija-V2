# 🌶️ PRODUCT VISION V2 — Harissa

> Vision produit officielle, version 2.
> **Document de référence uniquement** — aucun code, écran ou composant n'est modifié ici.
> Tout le travail existant (structure, écrans, fonctionnalités, documents) reste la base officielle du projet et n'est ni supprimé ni remplacé.

---

## 1. Le repositionnement

**Harissa n'est plus une application d'apprentissage des langues. C'est une porte d'entrée dans l'univers tunisien.**

L'utilisateur ne doit pas avoir l'impression d'étudier une langue, mais de **découvrir progressivement une culture vivante**. La langue est le moyen ; la Tunisie contemporaine est la destination.

### Ce que Harissa n'est pas
Harissa ne ressemble **pas** à Duolingo, Babbel, Busuu ou Anki. On évite l'esthétique des applications de langue classiques : grilles d'exercices froides, mascottes infantilisantes, gamification agressive, interfaces génériques interchangeables.

### Le positionnement cible
Harissa se situe à la croisée de cinq références, avec une **identité méditerranéenne tunisienne contemporaine** :

| Référence | Ce qu'on en prend |
|-----------|-------------------|
| **Apple** | Minimalisme, précision, qualité perçue, espace |
| **Airbnb** | Chaleur, sentiment d'appartenance, « belonging », humain |
| **Headspace** | Calme, douceur, sessions courtes, bien-être |
| **Notion** | Clarté structurelle, sobriété, flexibilité élégante |
| **Duolingo Max** | Apprentissage moderne, micro-sessions, progression |

Le résultat doit être **immédiatement reconnaissable** : on ouvre Harissa et on sait que c'est Harissa.

---

## 2. L'identité de marque

### Nom
**Harissa** — un objet du quotidien tunisien, chaleureux, piquant, authentique, partagé. Pas un cliché touristique : un emblème de la table et de la convivialité.

### Élément signature
Le **piment 🌶️** peut devenir l'élément signature, utilisé **avec subtilité et élégance** — jamais en surcharge. Un accent, pas un motif envahissant. (Détaillé dans `TUNISIAN_IDENTITY_SYSTEM.md`.)

### Personnalité de marque
- **Chaleureuse** sans être familière à l'excès.
- **Élégante** sans être froide.
- **Confiante** sans être arrogante.
- **Culturelle** sans être muséale.
- **Moderne** sans suivre les modes éphémères.

### Promesse
« En quelques minutes par jour, entre doucement dans la Tunisie d'aujourd'hui — sa langue, sa table, ses gens, ses histoires. »

---

## 3. Les principes de design

### 3.1 Minimalisme méditerranéen
Grands espaces, respiration, peu d'éléments par écran. La lumière et le vide font partie du design. On retire avant d'ajouter.

### 3.2 Chaleur premium
Palette chaude et naturelle (sable, terracotta, olive, ivoire — déjà en place dans `lib/Colors.ts`). Textures discrètes évoquant la céramique, le lin, la terre cuite — jamais appuyées.

### 3.3 Très visuel
Le sens passe d'abord par la couleur, le pictogramme, le schéma (voir `VISUAL_LANGUAGE_SYSTEM.md`). Le texte est secondaire et toujours bref.

### 3.4 Micro-animations
Transitions douces, retours tactiles subtils, animations **utiles** (qui guident l'attention) et jamais décoratives ou distrayantes. Une animation = une intention.

### 3.5 Légèrement avant-gardiste
Une touche d'audace dans la mise en page et la typographie, qui rend l'app mémorable — sans jamais sacrifier la clarté.

### 3.6 Cohérence absolue
Une notion = une couleur = un pictogramme, partout, pour toute la vie de l'app. Source unique : le système visuel officiel.

---

## 4. Les principes ergonomiques

Hérités et confirmés depuis `LEARNER_PROFILE.md` — ils restent le contrat de conception :

1. **Une carte = une idée.**
2. **Jamais de mur de texte.**
3. **Couleur ET forme** (jamais la couleur seule).
4. **Micro-sessions de 5–15 min**, début clair, fin claire.
5. **Feedback immédiat et bienveillant.**
6. **Une seule difficulté principale par exercice.**
7. **Interaction au pouce**, mobile d'abord.
8. **Reprise sans friction**, aucune punition.
9. **Charge de décision réduite** (parcours proposé).
10. **Calme visuel.**

---

## 5. L'expérience utilisateur cible

### Le sentiment recherché
À chaque session, l'utilisateur doit ressentir : *« c'est beau, c'est calme, j'ai appris quelque chose de vrai sur la Tunisie, et j'ai envie de revenir demain. »*

### Le parcours émotionnel d'une session
1. **Accueil chaleureux** — un mot, une image, une ambiance tunisienne du jour.
2. **Mise en confiance** — une réussite facile en ouverture.
3. **Découverte** — du nouveau contenu, présenté visuellement.
4. **Ancrage** — révision active, feedback immédiat.
5. **Satisfaction** — un bilan visuel, un fragment de culture découvert.

### De « apprendre » à « découvrir »
Chaque unité de langue est reliée à un fragment culturel : un mot de cuisine ouvre sur une recette, un verbe sur une scène de vie, une expression sur un code social. L'utilisateur **collectionne des morceaux de Tunisie**, pas des points.

---

## 6. Règles strictes pour tous les développements futurs

Ces règles s'appliquent à **toute** évolution, sans exception :

- ✅ **Réduire la charge cognitive** à chaque décision.
- ✅ **Favoriser les micro-sessions** (5–15 min).
- ✅ **Être très visuel** (couleurs, pictos, schémas avant le texte).
- ✅ **Être très immersif** (chaque écran rapproche de la culture tunisienne).
- ✅ **Être très cohérent** (système visuel et éditorial unique).
- ✅ **Être facilement mémorisable** (identité forte et stable).
- ✅ **Conserver une identité tunisienne forte** mais authentique (pas de clichés).
- ✅ **Rester moderne plusieurs années** (éviter les modes jetables).
- ✅ **Servir un adulte francophone débutant** en tunisien.
- ✅ **Servir les profils à difficultés attentionnelles.**

### Interdits permanents
- ❌ Clichés touristiques, orientalisme kitsch.
- ❌ Drapeaux ou chameaux décoratifs envahissants.
- ❌ Illustrations vieillottes ou bon marché.
- ❌ Interfaces surchargées.
- ❌ Esthétique d'app de langue générique.
- ❌ Plus d'un objet signature par écran.

---

## 7. Continuité avec l'existant

Cette vision **prolonge** le travail déjà réalisé, elle ne le renie pas :
- La **charte visuelle** (`VISUAL_LANGUAGE_SYSTEM.md`) reste la base — elle est déjà méditerranéenne et chaleureuse.
- Le **système de mémorisation** (`MEMORY_SYSTEM.md`) reste le moteur pédagogique.
- Le **plan linguistique** (`LANGUAGE_MASTER_PLAN.md`) reste la feuille de route du contenu langue.
- Le **profil apprenant** (`LEARNER_PROFILE.md`) reste le contrat ergonomique.
- Les **écrans et fonctionnalités actuels** restent en place ; leur réorganisation est décrite dans `APP_ARCHITECTURE_V2.md` (au niveau conceptuel uniquement).

V2 ajoute une **dimension culturelle et une ambition esthétique** par-dessus des fondations saines.

---

*Harissa : entrer dans la Tunisie d'aujourd'hui, un geste simple à la fois.*
