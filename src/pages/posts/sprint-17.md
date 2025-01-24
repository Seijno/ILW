---
layout: ../../layout/blogLayout.astro
title: 'Sprint 17'
pubDate: "2024-12-02"
description: 'Alle aantekeningen van sprint 17'
author: 'Seijno van Nieuwkoop'
image:
    url: ''
    alt: ''
tags: ["blogging", "sprint 17"]
---
# User needs
3 weken, 3 opdrachten
## creative coding spike
Coding spike is a type of computer programming in wich the goal is to create something instead of something functional.

- kan de gebruiker verrast worden met een bijzondere interactie?
- Doe onderzoek, maak het en maak er een pull request van, merch het niet maar hier documenteer je het
- FDND Concept Roulette

### Scroll driven animations
@support (animation-timeline: scroll()){
    animatie: naam;
    animation-timeline: scroll()
}
- keyframes
- @property
- animation-timeline: view()

## 2e coding spike
### View transition
- same document (
    Met JS `document.startViewTransition`
    ```JS
    el.addEventListener('click', function(){
        if (document.startViewTransition){

        }
        else{
            mooiefunctie()
        }
    })
    ```
    ```CSS
    
    ```
)
- cross document (Css only, voor normale a links 
``` CSS
@view-transition{
    navigation: auto; // smooth transitie tussen pagina's
    animatie: ; // met keyframes kan je coole animaties maken voor een transitie
}
```
)



