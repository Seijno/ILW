---
layout: ../../layout/blogLayout.astro
title: 'Sprint 16'
pubDate: "2024-11-11"
description: 'Alle aantekeningen van sprint 16'
author: 'Seijno van Nieuwkoop'
image:
    url: ''
    alt: ''
tags: ["blogging", "sprint 16"]
---
# DRY (Dont Repeat Yourself)

focus op herbruiken van code met componenten.

## Deeltaak: I Love Web

Alles wat je leert (lesstof, articelen etc.) zet je in je learning journal (ILW).
* Css weekly (mail blog)

## Component liberary
dit college gaat over organiseren van componenten (Organisme structuur).
- Getest (user test/intergratie test) en gedocumenteerd van de componenten
- componenten zorgt voor consistentie
- in svelte is $lib een component liberary
- je kan je componenten publiseren op npm als package en daarmee dezelfde componenten gebruiken voor andere projecten.

## Component building block
- je gaat individueel in je project een component maken waarmee je rekening houd met het PE en andere dingen die we in het eerste juaar hebben geleerd.

## Typografie in Web Design
- verschillende lettertypes proberen (Bebas, Norwester Regular)

### Typografie tips
- Font-kerning
- font-variation-settings
- css(word-spacing)
- Font shorthand
- Downloaded font
- Installed font
- Generic font family
- monospace

### Variables fonts
- diktes en grootes aanpassen van fonts

### Opdracht
Bekijk in de font van je project of je ermee kan experiminteren op wakamaifondue



### Bronnen
- ia.net
- https://www.cssfontstack.com
- https://variablefonts.io
- https://wakamaifondue.com
- https://typescale.com/

## Advanced component

je hebt component libraries die je kunt downloaden en die je kan gebruiken in je projecten.

### voordelen

- Eenvoudig herbuiken
- Product krijgt consistenten uitstraling
- Efficientie en schaalbaarheid van het project
- Snel nieuwe functies toevoegen


### nadelen
* grotere kans op fouten (toegankelijkheid, niet efficient)
* alles ziet het hetzelfde uit (tailwind, bootstrap kan je eraan herkennen)
* vergroot de chaos (naamgeving, indeling library)

### Page-Section-Component
dit is hoe de meeste van ons nu werken.
Hier heb je een pagina die bestaat uit sections en die bestaat uit componenten.

### Functional layering
- Inputs (Componenten voor gebruikersinvoer)
- Display (Componenten voor weergaven)
- Navigation (Componenten voor de navigatie)
- Structural (Layout componenten met grids bijv)

### Lego strategie
- Bricks (Klein, niet herbruikbaare stukjes, icoon of tekstblok)
- Blocks (Herbruikbare basis, knop of afbeelding)
- Assemblages (Gecombineerde componenten met specifieke functie, formulier of kaart)
- Constructions (Complexe pagina secties of templates, dashboard)

### Atomic design
Dit is de strategie die wordt gebruikt in Wogo

### Presenter-Container

- Presentational components (UI specifieke data)
- Container components (Data componenten die het gedrag van het project bepalen)
- Compositions (combinatie van presentational en container components)

## The New Responsive
je kan niet voor alle apparaten een gedetailleerd responds design maken.
- responsive is 14 jaar oud (2010)

### verschillende response methodiek
- User
- Container
- Form Factor

* User: Instellingen van een gebruiker (Dark/Light mode, reduced motion & andere prefers van niveau 5)
* Container: container queries zijn handig om componenten super responsive te maken en per context aan te passen ipv media queries.
* Form factor: 

## States
* Toestand van je applicatie/component
### Recap
- zero state
- ideal state
- error state
- loading state

### state managment
* Shared presistent state
dit wil je voorkomen in de meeste gevallen (Dit geldt voor alle gebruikers)

* Non-Shared non-presistent state
Dit is het tegenover gestelde van shared persistent (ook blijft dit niet geupdate voor de gebruiker)

* Non-shared semi-persistent
states worden bijgehouden in de layout(alle pagina's die deze layout gebruiken houden de states bij, refrashen is nogsteeds niet persistant)

* Non-shared semi-persistent state, snapshot
Changes worden bijgehouden in de pagina, werkt met refresh soortvan. (niet als je verander van pagina)

* Non-Shared persistent state, local storage
svelte-presistent store.