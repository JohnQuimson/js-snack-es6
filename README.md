# Snacks DESTRUCTURING

### Snack 1

Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

##### Procedimento:

1. Creo un array di oggetti
2. Aggiungo le proprietà:
   - nome
   - peso
3. ciclo forEach e mi prendo tutti gli elementi dell array obj assegnandoli a costanti usando il destructuring
4. Con innerText/innerHTML li aggiungo all html e li stampo a video

### Snack 2

Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

##### Procedimento:

1. Creo un array di oggetti
2. Aggiungo le proprietà:
   - nome
   - punti
   - falli
3. con math.random, genero i valori per punti e falli, nome va assegnato da me
4. inizializzo un array vuoto
5. inserisco in quest ultimo array solo punti e falli
