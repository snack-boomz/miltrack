# miltrack
*The tracker to end all trackers*

![CyberReq-cover-image](/cover.png)

## Overview

- CyberReq is here to solve the problem of finding personnel with the skills you need to solve your mission.
- Ability to track talents, skills, specializations for every member to be able to quickly find personnel to fill job requirements.

## Table of Contents

1. [Description](#description)
2. [Setup & Dependencies](#setup)
   1. [Github](#github)
   2. [Install Dependencies](#dependencies)
   3. [Spinning up your own container and database for the first time](#database)
   4. [Starting up the application](#startup)

## Problem Statement

CyberReq seeks to address the problem of talent management across each service branch’s Cyber corps. CyberReq aims to consolidate Cyber talent across all service branches into a single portal. Servicemembers can then consistently and periodically update the CyberReq portal with their talents, skill sets, specializations and education, and mission owners (Commanders, flight chiefs, team leaders) can then use the CyberReq portal to properly search for the best and brightest talent across the military and scout those servicemembers to fulfill the mission need.

### Users

user information stuff

### Mission Owner

mission information

### search

search stuff

### Schema - Entity Relationship Diagram

![CyberReq-cover-image](./schema.png)

## Setup & Dependencies: <a name="setup"></a>

### GitHub Repo: <a name="github"></a>

- Clone github repo for this project
  - https://github.com/gustovshikov/full-stack-project
- Navigate to and open repo in your IDE

### Install Dependencies: <a name="dependencies"></a>

- Navigate to front-end folder within repo, using terminal.

  - Run command to install client side dependencies:

        npm install

- Navigate to backend folder within repo, using terminal.

  - Run command to install server side dependencies:

        npm install

### Spinning up your own container and database for the first time <a name="database"></a>

- Pull latest postgres image for docker

      docker pull postgres

- Make a docker volume directory for postgres

      mkdir -p $HOME/docker/volumes/postgres

- Spin up the postgres container

       docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres

- Shows list of containers, you will need the container ID for the subsequent command

      docker ps -a

- Open a bash command line with the docker container

      docker exec -it <PSQL-Container-ID> bash

- Open command line inside psql with the username postgres

      psql -U postgres

- Create the database for this project

      CREATE DATABASE cyber_req;

- Select the database that was just created

      \c cyber_req

- Now you are in the cyber_req database

- To initialize the database, run the following commands in the /back-end directory using an ordinary terminal:

      npx knex migrate:latest
      npx knex seed:run

### Starting up the application <a name="startup"></a>

- Run command to start your react client on localhost:3000.

      cd client
      npm start

- Run command to start your back-end server on localhost:30001.

      cd server
      npm start

### User Notes

- Who is the user?
  - Personnel
  - Mission owners

### User stories

1. As a user I want to be able to update my skills so that my talent is known for mission owners.
2. As a user I should be able to login and update my profile.
3. As a mission owner I want to be able to search by certain skill sets for members who can fulfill those requirements.

#### STRETCH

1. Mission owners can make a billet/job posting
2. Users can search jobs
3. Educational Opportunities

### Features (To be filled upon completion once we confirm what actual features the PoC ships with)

1. See a...
2. I can...
3. I can search...
4. I can view...
5. I can view...
6. I can download...
7. etc
