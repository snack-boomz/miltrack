![miltrack-cover-image](/cover.png)

*The tracker to end all trackers*

## Overview

- Miltrack is here to solve a common problem that is present in all military branches which is that all your resources that need to be tracked are scattered throughtout multiple sites across the internet and all service members regardeless of the rank have to spend valuable time trying to track and find the correct information through all the sites in order to know if they're current in all their medical, yearly training and other schools or information.
- Miltrack grants the ability to track all your special skills, currency of medical information and provide valuable links that saves time and helps increases productivity along the ranks for the service member but also for all the subordinates under their command.


## Table of Contents

1. [Description](#description)
2. [Setup & Dependencies](#setup)
   1. [Github](#github)
   2. [Install Dependencies](#dependencies)
   3. [Spinning up your own container and database for the first time](#database)
   4. [Starting up the application](#startup)

## Problem Statement


SM’s and unit leaders need an accessible system to update and track admin tasks and requirements. SM’s are currently forced to navigate many complicated and constantly changing online systems to acquire this information, which leads to poor tracking.  PERSTAT strives to be an optional, open-source application that units can use as an alternative method of tracking all relevant admin items.


### Users

user information stuff

### Mission Owner

mission information

### search

search stuff

### Schema - Entity Relationship Diagram

\\\\\\//////schema picture here\\\\\\//////

## Setup & Dependencies: <a name="setup"></a>

### GitHub Repo: <a name="github"></a>

- Clone github repo for this project

 - (https://github.com/snack-boomz/miltrack)

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

1. I want to be able to update my medical readiness with a status and a date (date conducted/ date due) without needing to log into a government system/ console. 
2. I want to be able to update and track  my upcoming leave and pass (dates, on a calendar); I also want to be able to track TDY and other training activites.

### User features

1. From individual level to BN/GRP level.
2. Mission owners can make a billet/job posting.
3. Track medical (medpros).
4. Track online training.
5. Track specific qualifications (unit/MOS basis).
 

#### STRETCH
1. Incorporate callsigns in place of names for confidentiality. 
2. Must include Minesweeper.
=======

### Features (To be filled upon completion once we confirm what actual features the PoC ships with)

1. See a...
2. I can...
3. I can search...
4. I can view...
5. I can view...
6. I can download...
7. etc
