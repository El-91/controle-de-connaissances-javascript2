# Évaluation JavaScript — Partie pratique (3h)

## Objectif
Résoudre **4 exercices** en JavaScript :
- **Exo 1 à 3 :** algorithmes sur tableaux
- **Exo 4 :** programmation orientée objet (classes, encapsulation, héritage)

## Règles
- Langage : **JavaScript**
- ✅ Autorisé : `let/const`, fonctions, tableaux, objets, classes, boucles, conditions.
- ❌ Interdit : librairies externes.
- Chaque exercice doit contenir **au moins 3 tests** avec `console.log(...)` (dont 1 cas limite).
- Lisibilité : noms de variables propres, indentation.

## Structure du repo
```
/exercises
  ex01_median.js
  ex02_next_permutation.js
  ex03_remove_element.js
  ex04_oop.js
README.md
```

## Exécution
```bash
node exercises/ex01_median.js
```

---

# Exercices

## Exercice 1 — Médiane de deux tableaux triés
### Énoncé
On te donne **deux tableaux de nombres triés** `nums1` et `nums2`.

Tu dois écrire une fonction `findMedianSortedArrays(nums1, nums2)` qui retourne la **médiane** de l’ensemble des valeurs des deux tableaux réunis.

- Si le nombre total d’éléments est **impair**, la médiane est l’élément du milieu.
- S’il est **pair**, la médiane est la moyenne des deux éléments du milieu.

### Exemple
- `nums1 = [1, 3]`, `nums2 = [2]` → total = `[1,2,3]` → médiane = `2`
- `nums1 = [1, 2]`, `nums2 = [3, 4]` → total = `[1,2,3,4]` → médiane = `(2+3)/2 = 2.5`

### Contraintes
- `nums1` et `nums2` sont déjà triés.
- Tu peux faire une solution simple (fusionner puis trouver la médiane).

---

## Exercice 2 — Permutation suivante
### Énoncé
On te donne un tableau `nums` (ex: `[1,2,3]`) représentant une permutation de nombres.

Écrire une fonction `nextPermutation(nums)` qui modifie `nums` **sur place** pour obtenir la **permutation suivante** dans l’ordre lexicographique (ordre “dictionnaire”).

Si `nums` est déjà la **dernière permutation possible**, alors tu dois le transformer en la **plus petite permutation** (triée en ordre croissant).

### Exemples
- `[1,2,3]` → `[1,3,2]`
- `[3,2,1]` → `[1,2,3]`
- `[1,1,5]` → `[1,5,1]`

### Contraintes
- Modification **sur place** (tu modifies le même tableau).
- Pas besoin de retourner un nouveau tableau.

---

## Exercice 3 — Supprimer une valeur
### Énoncé
On te donne un tableau `nums` et une valeur `val`.

Écrire une fonction `removeElement(nums, val)` qui supprime toutes les occurrences de `val` **en place** (dans `nums`).

La fonction doit retourner un entier `k` = le nombre d’éléments restants (ceux qui ne sont pas égaux à `val`).

Après exécution :
- Les **k premiers** éléments de `nums` doivent être les éléments conservés (l’ordre peut rester le même).
- Les éléments après `k` n’ont pas d’importance.

### Exemples
- `nums = [3,2,2,3]`, `val = 3` → `k = 2` et `nums` commence par `[2,2,...]`
- `nums = [0,1,2,2,3,0,4,2]`, `val = 2` → `k = 5` et `nums` commence par `[0,1,3,0,4,...]`

---

## Exercice 4 — POO : Gestion de bibliothèque (Users + Books)
### Énoncé
Tu dois créer un mini-système pour gérer une bibliothèque avec des **livres** et des **utilisateurs**.

### 1) Classe `Book`
Créer une classe `Book` avec :
- Propriétés publiques :
  - `title` (string)
  - `author` (string)
- Propriété privée :
  - `#isBorrowed` (boolean)
- Méthodes :
  - `borrow()` : si le livre n’est pas emprunté, le marque comme emprunté et retourne `true`, sinon retourne `false`
  - `returnBook()` : remet le livre comme non emprunté et retourne `true`
  - `isBorrowed()` : retourne `true/false` (accès contrôlé à `#isBorrowed`)

### 2) Classe `User`
Créer une classe `User` avec :
- Propriétés :
  - `name` (string)
- Propriété :
  - `borrowedCount` (number, commence à 0)
- Méthode :
  - `borrow(book)` : essaie d’emprunter un `Book`
    - si `book.borrow()` retourne `true`, incrémente `borrowedCount` et retourne `true`
    - sinon retourne `false`

### 3) Classe `Librarian` (hérite de `User`)
Créer une classe `Librarian` qui **extends** `User` et possède :
- Méthode :
  - `forceReturn(book)` : force le retour d’un livre en appelant `book.returnBook()` (utile si un livre est bloqué)

### Tests obligatoires (dans `ex04_oop.js`)
- Créer 2 livres
- Créer 1 utilisateur et 1 bibliothécaire
- Emprunter un livre avec l’utilisateur (succès)
- Essayer de ré-emprunter le même livre avec le bibliothécaire (échec)
- Forcer le retour avec le bibliothécaire (succès)
- Emprunter à nouveau avec l’utilisateur (succès)

---

## Rendu
- Tout dans le dossier `exercises/`
- Chaque fichier exécutable avec Node.js
- Les tests doivent afficher clairement les résultats
