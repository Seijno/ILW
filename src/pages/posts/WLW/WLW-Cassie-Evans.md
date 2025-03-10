---
layout: ../../../layout/blogLayout.astro
title: 'Beyond Tweening GSAP'
pubDate: "2025-03-07"
description: 'Alle aantekeningen van deze WLW'
author: 'Seijno van Nieuwkoop'
image:
    url: ''
    alt: ''
tags: ["blogging", "Dave Bitter"]
---

# Beyond Tweening

## what is GSAP
Gsap is een animatie-library die heel veel kan animeren onderandere
- html elementen
- Css elementen
- Canvassen
- 3D-Objecten

In de demo's die we zien is echt van alles mogelijk.

Het kan best intimiderend zijn om te beginnen met gsap omdat het heel groot en uitgebreid is.

## starting with gsap
- ``gsap.to(".box", { x: 200})`` vertel je dat de box moet bewegen
- timeline je maakt een var voor je timeline en daarmee maak je punten met .to {whatever}
- goed voorbeeld zijn scroll animaties. je hoeft hier alleen de begin midden en eind punten aan te geven
GSAP is een soort animatie toolbox

"if all you have is a hammer, you will see everything as nails"

tweens zijn niet persee duper snel maar met de .quicksetter kan je voorang geven aan bepaalde calculaties.

## gsap utils
- `gsap.utils.random(-100, 100)` kiest een nummer tussen 2 gegeven nummers
- `gsap.utils.random(0, 500, 5)` pakt een getal tussen 0 en 500 en rond af naar n groepen van 5.
- utils.mapRange()
- utils.wrap()
- utils.wrapyoyo()
- utils.pipe()

## Let the ease do the work
- ease visualizer 

## usefull stuff
- matchMedia() gsap versie van mediaqueries voor responsiveness
`reduceMotion: "(prefers-reduced-motion: reduce)"`
- Control methods: play() pause() resume() reverse() restart()
- helper functions 
- motion paths
- enter/exit animations
