[![](screen.png)](https://mudroljub.github.io/small-tanks-game/)

# Small tanks game

> version 1.1.

Simple tank duel game. You can play against computer or against other player.

Play here: [mudroljub.github.io/small-tanks-game](https://mudroljub.github.io/small-tanks-game/)

P.S. Ako ne učita iz prve osveži browser.

## Develop

Prvo instaliraj [node.js](https://nodejs.org), noviju verziju. Nakon toga kloniraj repo i instaliraj zavisnosti:
```
npm install
git submodule init
git submodule update
```

ili samo
```
npm run fullinstall
```

Da pokreneš igru u razvojnom modu ukucaj:
```
npm start
```
Browser će se automatski osvežavati svaki put kada sačuvaš izmenu.

## Produkcija

U produkciji mora webpack publicPath: './dist/'

Pre dizanja na gh-pages potrebno obrisati submodule!

Za fb verziju ubaciti fb skripte u index.html

## Istorija izmena

Verzija 1.1.
* ubačen plamen
* igraj ponovo na enter
* animacija se nastavlja nakon kraja nivoa

## TODO
* bug: neprijatelj nekad opali pre pocetka scene
* prebaciti Plamen na Tenk?
* fb login
* ubaciti zvuk
* refaktorisati (najvise Tenk2, Cev.render)
