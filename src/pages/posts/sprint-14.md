---
layout: ../../layout/blogLayout.astro
title: 'Sprint 14'
pubDate: 2024-10-09
description: 'Alle aantekeningen van sprint 14'
author: 'Seijno van Nieuwkoop'
image:
    url: ''
    alt: ''
tags: ["astro", "blogging", "sprint 14"]
---
## 23-9
* Jamstack voor API's en workframes
* Headless CMS bij. Directus
### Notes
Ga verder met de js oefeningen, ga aan de slag met de digital garden.

### Mentor
* Mentor van H1

## 24-9
Vandaag heb ik geprobeerd aan portflow bewijslast erin te zetten.

## 30-9
### Vormgeving
* Structuur
* Routing
* Error handeling
* Loading data
* Binding
* Lib
* Componenten

### Structuur
Projectnaam
* -Src
* --Lib
* ---server// alle files die informatie hebben of gebruiken die niet in de client mogen
* --Routes
* ---+error.svelte // vangt errors op en geeft een custom pagina
* ---+page.svelte
* ---+layout.svelte // vaste layout
* --App.html
* -Static// dingen zoals favicons/svg's/webp
* -.gitignore // files die erin staan gaan niet mee met de pushes van github.
* -.env// gevoelige informatie bijv. API wachtwoord (Komt in gitignore)
* -.env.example // voorbeeld van wat er in je .env file moet zitten (komt wel in github)
* -package.json // hier staan de files in die je nodig hebt om de applicatie te draaien.
* -svelte.config.js // voor hosting dus aanpassen als je naar n andere hosting gaat
* -vite.config.js // tool om projecten te runnen.

### Routing
Laat dit na checken want dit moet goed gaan in het begin van het project.

### frameworks
let name= 'world'
input bind:value={name}
p {name} p

zodra je in de input iets typt wordt de p name, de nieuwe text

$: shout = name + "rocks"

$: zorgt dat het reageert dus elke keer als naam veranderd wordt shout geupdate.

### Lib
Header.svelte // Naam van een component begin je altijd met een hoofdletter
Footer.svelte

In page.server.js: import {Header, Footer} from "$lib"
In index.js: export {default as Header} from "Header.svelte"
             export {default as Footer} from "Footer.svelte"

<header {title}>

### belangrijke weetjes
* Async // dit is nodig om informatie met server en client over te laten lopen. (MUST)

## 2-10 Design Critique 
### 10 (8) principles of good design
* Good design is innovation
* Good design makes a product usefull
* Good design is eastatic
* Good design is honest
* Good design is long lasting
* Good design is as little design as possible
* Good design makes a product understandable
* Good design is thorough down to the last detail

Feed forward is a good understandable design.

Thorough to the last detail: je moet alles met bewustheid designen (Sanne website als voorbeeld).

As little as possible, je focused op het essentiële, niet in general weinig design. 

## 7-10 Project methodiek

### Software developer is moeilijk
er zijn super veel delen die onder de software developer term valt.

### Waterval vs agile
waterval: uitvoerige documentatie
* Specification-related paradigm
het verschil zit in de manier van werken, agile is een stuk meer interatiever.

Scrum is een effectieve en flexibele manier van werken aan complexe projecten.
Werkwijze:
* Product owner
* Scrum master
* Scrum team
* Stakeholder
* Sprint
* Sprint planning
* Sprint review
* Retrospect
* Epic
* User stories
* Taak
* DOD
* Estimation meeting
* Daily scrum (standup, checkout)
* Product Backlog

### agile team
* Autonoom
* Multi-functioneel
* Veel interactie

### Opdracht (Get more Agile)
1. Benoem rollen iets explicieter en wes je bewust van de waarde van jouw rol voor het team.
2. benoem fasering en werkwijze explicieter en bedien je van de kracht van projectmethodiek