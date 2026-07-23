# Smart Primärvård – Platform 2.0.0

GitHub Pages-färdig statisk webbplats för Smart Primärvård.

## Innehåll

- Ny startsida med plattformens manifest och fyra fokusområden.
- Sidan **Varför Smart Primärvård finns** med avsnittet **Hur Smart Primärvård växte fram**.
- Projektportal med filtrering och gemensam sexstegsmodell.
- Smart Läkarkontakt, Smart Hypertoni, Smart Försäkringsmedicin och Smart Sjukskrivning.
- Nyheter, samverkan, kontakt, integritet och tillgänglighet.
- Responsiv navigation och WCAG 2.2 AA som målnivå.
- Inga externa JavaScript-bibliotek, analysverktyg eller cookies.

## Publicera genom GitHub Desktop – rekommenderad metod

1. Ladda ned och packa upp `Smart_Primarvard_Platform_v2_0_GitHub.zip`.
2. Öppna GitHub Desktop och klona repositoryt `smartprimarvard/smartprimarvard` om det inte redan finns lokalt.
3. Öppna repositorymappen i Finder.
4. Radera de gamla webbplatsfilerna i mappen, men rör inte den dolda `.git`-mappen.
5. Kopiera **innehållet** i den uppackade Platform 2.0-mappen till repositorymappen. Kopiera inte den yttre mappen som en extra nivå.
6. Kontrollera ändringarna i GitHub Desktop.
7. Skriv commitmeddelandet `Publicera Platform 2.0.0`.
8. Klicka **Commit to main** och därefter **Push origin**.
9. GitHub Pages bygger om webbplatsen automatiskt. Kontrollera **Settings → Pages** eller fliken **Actions**.

## Publicera direkt i webbläsaren

1. Packa upp ZIP-filen på datorn.
2. Öppna repositoryt på GitHub och välj **Add file → Upload files**.
3. Dra in samtliga filer och mappar från den uppackade mappens innehåll.
4. GitHub skriver över filer med samma namn och lägger till de nya filerna.
5. Commitmeddelande: `Publicera Platform 2.0.0`.
6. Klicka **Commit changes**.

`om.html` finns kvar som en omdirigering till `varfor.html`, så äldre länkar fortsätter att fungera.

## Förhandsgranska lokalt

Dubbelklicka på `index.html`, eller kör en lokal webbserver i projektmappen:

```bash
python3 -m http.server 8000
```

Öppna därefter `http://localhost:8000`.

## Uppdatera projektdata

Projektmetadata finns i `data/projects.json`. De publika HTML-sidorna är avsiktligt förgenererade så att innehållet fortfarande fungerar utan JavaScript.

## Viktigt före offentlig lansering

- Lägg in fastställda kontaktuppgifter.
- Kontrollera eventuell anpassning av canonical-URL och sitemap om egen domän kopplas.
- Publicera inte verktyg eller patientnära funktioner innan de är färdiga, säkra och korrekt avgränsade.
