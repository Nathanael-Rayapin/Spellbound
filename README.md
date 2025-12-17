# 🧙‍♂️ SpellBound – Backend

## Présentation du projet

**SpellBound** est un projet expérimental et ludique, à mi-chemin entre le développement web et le jeu de réflexion.

Le principe est simple :
- Une énigme est affichée sur le site
- Un champ de saisie (input) permet d’entrer un mot de passe
- Si le mot de passe est correct, **des parties de l’interface se débloquent progressivement**
  (header, navbar, footer, body, cards, etc.)

L’utilisateur n’est pas censé chercher uniquement dans l’interface visible 🤫

Le projet contient **10 énigmes**, chacune associée à **un mot de passe** permettant de débloquer une nouvelle étape.

L’interface volontairement minimaliste au départ fait partie de l’expérience.

---

## Architecture Backend

Le backend est construit avec **NestJS** et repose sur une architecture claire, modulaire et évolutive.

### 🚀 Pourquoi NestJS ?

[NestJS](https://nestjs.com/) est un framework Node.js moderne basé sur TypeScript.  
Il s’inspire fortement de frameworks backend comme **Angular** et **Spring**.

Sa philosophie repose sur plusieurs piliers (cf. documentation officielle) :
- **Modularité** : chaque fonctionnalité est isolée dans un module
- **Injection de dépendances** : code plus testable et maintenable
- **Séparation des responsabilités** : controllers, services, providers
- **Scalabilité** : pensé pour des applications qui grandissent proprement

👉 NestJS encourage une **architecture robuste**, lisible et prévisible, même pour des projets simples.

---

## Base de données

- **PostgreSQL** est utilisé comme base de données
- **TypeORM** est utilisé comme ORM pour :
  - définir les entités
  - gérer les relations
  - interagir avec la base de données de manière typée

---

## Docker & Environnement local

Le projet utilise **Docker** pour simplifier la mise en place de l’environnement de développement.

Même sans connaissance préalable de Docker, on peux lancer la base de données et l’outil d’administration en quelques commandes.

### 🧠 Pourquoi Docker ?

Docker permet de :
- lancer PostgreSQL sans l’installer sur le poste
- garantir le même environnement pour tout le monde
- éviter les problèmes de configuration locale

---

## Lancer PostgreSQL avec Docker

```bash
docker container run --name postgres-nest \
  -e POSTGRES_PASSWORD=postgres \
  -p 5432:5432 \
  -d postgres
```

---
## Explication de la commande

- `docker container run` : crée et lance un conteneur Docker
- `--name postgres-nest` : nom du conteneur
- `-e POSTGRES_PASSWORD=postgres` : définit le mot de passe du super-utilisateur PostgreSQL
- `-p 5432:5432` : expose PostgreSQL sur le port **5432** de ta machine
- `-d` : lance le conteneur en arrière-plan (mode détaché)
- `postgres` : image officielle PostgreSQL

👉 PostgreSQL est maintenant accessible localement sur le port **5432**.
---


## Lancer PgAdmin avec Docker

```bash
docker container run -p 80:80 \ 
  -e 'PGADMIN_DEFAULT_EMAIL=<ton-email>' \ 
  -e 'PGADMIN_DEFAULT_PASSWORD=password' \ 
  -d dpage/pgadmin4
```

---
## 🧾 Explication de la commande pgAdmin

- `docker container run` : crée et lance un conteneur Docker
- `-p 80:80` : expose pgAdmin sur le port **80** de ta machine, accessible via le navigateur (`http://localhost:80`)
- `-e 'PGADMIN_DEFAULT_EMAIL=<ton-email>'` : définit l’email utilisé pour se connecter à l’interface pgAdmin
- `-e 'PGADMIN_DEFAULT_PASSWORD=password'` : définit le mot de passe associé à cet email
- `-d` : lance le conteneur en arrière-plan (mode détaché)
- `dpage/pgadmin4` : image officielle de pgAdmin

👉 Une fois la commande exécutée, pgAdmin sera accessible dans ton navigateur à l’adresse **http://localhost:80**, et tu pourras te connecter avec les
