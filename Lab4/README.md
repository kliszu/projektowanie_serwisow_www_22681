# Labolatorium nr 4 - gra przeglądarkowa

Gra polega na zestrzeleniu jak najwięcej przeciwników przemieszczajacych się w stronę gracza. Koniec gry następuje, gdy przeciwnik zetknie sie z graczem. Punkty są przyznawane za zniszczenie lub uderzenie( w zależności od rozmiaru) kuli. Po wejsciu na stronę wyświetla się proste menu umożliwiające rozpoczęcie gry. Po zakoczeniu rozgrywki zostaje wyświetlony monit o wyniku oraz o najwyzszym wyniku zarejestrowanym w danej sesji. Gra jest wzbogacona o efekty wizualne w postaci animacji wybuchu oraz efektów dźwiękowych strzału oraz wybuchu przeciwnika. Do strzelania potrzebna jest mysz.

## Przykładowe screeny z gry

<hr>

![ekran_glowny]()

![koniec_gry]()

![best_score]()




## Logika gry

<hr>

Utworzyłem 4 klasy: Player, Enemy, Projectile, Projectiles. Klasy mają bardzo zbliżone konstruktory i posiadają identyczne metody: draw oraz update.

![klasy_kod]()

### funkcja init()

Odpowiada za nadpisanie wszystkich zmiennych i wygenerowanie nowego gracza podczas generowania nowej rozgrywki.

![init_fn]()

### funkcja spawnEnemies()

Odpowiada za wygenerowanie przeciwników w odstępie czasu 1s o różnej wielkości i kolorze. Przeciwnicy przemieszczają sie od krawędzi ekranu w stronę gracza. za co odpowiada konstrukcja warunkowa if. Każdy obiekt jest zapisywany do listy przeicwników.

![spawnEnemies_fn]()

### funkcja animate


### obsługa zdarzeń

Do całego okna przeglądarki zostało dodanie obsługa zdarzenia klikniecia przycisku myszy, które wyzwala pocisk, pozycja naszej myszki jest kierunkem w którym pocisk będzie się poruszał. Nowy obiekt pocisku jest dodany do listy projectiles.

![projectiles_event_listener]()

Zdarzenie wciśniecia przycisku Start Game uruchamia nową grę, i ustawia pole display naszego menu na none.

![startGameBtn_event_listener]()

