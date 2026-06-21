# 📥 README_IMPORT — Importer le projet sur GitHub depuis iPhone / iPad

Ce guide explique comment importer **proprement** ce projet sur GitHub et le faire tourner, en travaillant **uniquement depuis un iPhone ou un iPad**.

> Ce document concerne **l'import et le démarrage** du projet. Il ne décrit pas le fonctionnement de l'application.

---

## 📦 Ce que contient l'archive

Une application **Expo / React Native / TypeScript** utilisant **Expo Router**. Tout le code source est présent, prêt à l'emploi. Il manque seulement `node_modules`, qui s'installe avec une seule commande (voir plus bas) — c'est normal et voulu (les dépendances ne se committent jamais).

---

## ✅ Étape 1 — Décompresser l'archive

1. Télécharge le fichier `.zip` sur ton iPhone/iPad.
2. Ouvre l'app **Fichiers**.
3. Appuie sur le `.zip` : iOS crée automatiquement un dossier décompressé à côté.
4. Vérifie que le dossier contient bien `package.json`, `app.json` et les dossiers `app/`, `components/`, `data/`, etc. (voir la checklist en bas).

---

## ✅ Étape 2 — Mettre le projet sur GitHub

Tu as **deux options**. La plus simple depuis iOS est l'option A.

### Option A — App **Working Copy** (recommandée sur iOS)

[Working Copy](https://workingcopy.app) est un client Git complet pour iPhone/iPad.

1. Installe **Working Copy** depuis l'App Store.
2. Dans Working Copy : **Repositories → + → Create new repository**. Donne-lui un nom (ex. `darija-tunisien`).
3. Appuie sur le dépôt → **⋯ → Import files** (ou utilise « Partager » depuis l'app Fichiers vers Working Copy).
4. Sélectionne **tout le contenu** du dossier décompressé (pas le dossier `.zip` lui-même).
5. Working Copy détecte le `.gitignore` : `node_modules` et les caches seront automatiquement ignorés.
6. **Commit** : appuie sur le bouton de commit, ajoute un message (ex. « Import initial »).
7. **Lier à GitHub** : Working Copy → **⋯ → Remotes → GitHub**, connecte ton compte, crée le dépôt distant, puis **Push**.

> 💡 Working Copy gratuit permet de cloner/committer en local ; le push vers GitHub peut nécessiter l'achat unique de la version Pro. Alternative : l'option B ci-dessous, 100 % gratuite.

### Option B — Site **github.com** dans Safari (upload manuel)

1. Va sur [github.com](https://github.com) dans Safari, connecte-toi.
2. **New repository** → nomme-le → **Create repository**.
3. Sur la page du dépôt vide : **uploading an existing file**.
4. ⚠️ **Limite** : l'upload web ne gère pas les sous-dossiers par glisser-déposer de façon fiable sur iOS. Il faut uploader **dossier par dossier** (un commit par dossier), ce qui est fastidieux mais fonctionne. Working Copy (option A) évite ce problème.

> Pour un projet à arborescence profonde comme celui-ci, **l'option A est nettement préférable**.

---

## ✅ Étape 3 — Installer et lancer le projet

Sur iPhone/iPad, tu ne peux pas lancer `npm` localement. Utilise un environnement de développement **dans le cloud** qui exécute les commandes pour toi :

### Avec un Codespace GitHub (recommandé)

1. Sur la page de ton dépôt GitHub (dans Safari), appuie sur **Code → Codespaces → Create codespace on main**.
2. Un éditeur VS Code s'ouvre dans le navigateur, avec un terminal.
3. Dans le terminal, lance :
   ```bash
   npm install
   npx tsc --noEmit      # vérifie qu'il n'y a aucune erreur TypeScript
   npx expo start --tunnel
   ```
4. `--tunnel` génère un QR code accessible depuis n'importe quel réseau.

### Tester sur ton téléphone avec Expo Go

1. Installe **Expo Go** depuis l'App Store.
2. Scanne le QR code affiché par `npx expo start --tunnel` (depuis l'appareil photo ou Expo Go).
3. L'application se charge sur ton appareil.

> Si `expo start` signale une incohérence de versions, lance `npx expo install --fix` puis relance.

---

## ✅ Étape 4 — Vérification post-import

Une fois sur GitHub, vérifie que le dépôt **ne contient PAS** :
- `node_modules/` (doit être absent — ignoré par `.gitignore`)
- de dossier de cache `.expo/`
- de fichiers `.log`

Et qu'il **contient bien** tous les dossiers de la checklist ci-dessous.

---

## 📂 Checklist — Dossiers et fichiers qui DOIVENT être présents

```
darija-tunisien/
├── .gitignore                  ← indispensable pour un dépôt propre
├── app.json                    ← config Expo
├── babel.config.js             ← config Babel
├── package.json                ← dépendances + scripts
├── tsconfig.json               ← config TypeScript (+ alias @/*)
├── expo-env.d.ts               ← types Expo (généré, à conserver)
│
├── app/                        ← écrans (Expo Router)
│   ├── _layout.tsx
│   └── (tabs)/
│       ├── _layout.tsx
│       ├── index.tsx
│       ├── lecon.tsx
│       ├── revisions.tsx
│       ├── verbes.tsx
│       ├── vocabulaire.tsx
│       ├── quiz.tsx
│       ├── grammaire.tsx
│       └── profil.tsx
│
├── components/
│   ├── common/                 ← 21 composants réutilisables
│   └── layout/                 ← 2 composants de mise en page
│
├── data/                       ← données linguistiques + barrel
├── hooks/                      ← 7 hooks
├── lib/                        ← Colors / Theme / Typography
├── services/                   ← 8 moteurs (révision, quiz, etc.)
├── store/                      ← état utilisateur
├── types/                      ← types TypeScript
├── utils/                      ← utilitaires
│
├── docs/                       ← documentation (non requise pour build)
│   ├── PROJECT_STATUS.md
│   └── LANGUAGE_MASTER_PLAN.md
│
└── README_IMPORT.md            ← ce fichier
```

**Total attendu : ~81 fichiers** (hors `node_modules`).

---

## 🚫 Fichiers temporaires à EXCLURE (ne jamais committer)

Le `.gitignore` les bloque automatiquement, mais voici la liste de référence :

| Catégorie | À exclure |
|-----------|-----------|
| Dépendances | `node_modules/` |
| Caches Expo | `.expo/`, `.expo-shared/`, `dist/`, `web-build/` |
| Builds natifs | `ios/`, `android/` (régénérés à la demande) |
| Caches Metro / TS | `.metro-health-check*`, `*.tsbuildinfo`, `.cache/` |
| Logs | `*.log`, `npm-debug.*`, `yarn-error.*` |
| Environnement | `.env`, `.env.local` |
| Système / éditeur | `.DS_Store`, `Thumbs.db`, `.idea/`, `.vscode/` |
| **Stubs de types temporaires** | `__type_stubs_temp__/`, `**/*.stub.d.ts` (simulent React/Expo — **jamais** dans le dépôt) |

> ⚠️ Le seul fichier `.d.ts` légitime est **`expo-env.d.ts`** (généré par Expo). Tout autre `.d.ts` simulant React/React Native/Expo est un artefact temporaire et ne doit pas être présent.

---

## ❓ Problèmes fréquents

- **« Cannot find module 'react' »** au premier `tsc` → tu n'as pas encore lancé `npm install`. C'est normal : installe d'abord les dépendances.
- **Versions Expo incompatibles** → `npx expo install --fix`.
- **QR code inaccessible** → utilise `npx expo start --tunnel` plutôt que `--lan`.
- **Working Copy ne pousse pas** → vérifie la connexion GitHub dans Remotes, ou passe par un Codespace pour committer depuis le terminal.

---

*Document de préparation d'export. Il ne modifie aucune fonctionnalité, aucun écran et aucun contenu linguistique du projet.*
