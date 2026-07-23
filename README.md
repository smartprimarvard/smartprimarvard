# Smart Primärvård – Platform v1.0

Statisk prototyp för GitHub Pages.

## Innehåll
- Publik plattformssida
- Om plattformen
- Projektportfölj
- Samverkanssida
- Kontaktprototyp
- Projektsidor för Smart Läkarkontakt, Smart Hypertoni och Smart Sjukskrivning
- Ingen funktion, testdata eller verktygsmodul är publicerad

## Lägg upp på GitHub
1. Packa upp zip-filen.
2. Öppna ditt repository `smartprimarvard`.
3. Välj **Add file → Upload files**.
4. Dra in innehållet i den uppackade mappen, inte själva mappen.
5. Skriv commit-meddelande, exempelvis `Publicera Smart Primärvård Platform v1.0`.
6. Klicka **Commit changes**.
7. Gå till **Settings → Pages**.
8. Under **Build and deployment**, välj `Deploy from a branch`.
9. Välj branch `main` och mapp `/ (root)`.
10. Klicka **Save**.

Webbplatsen blir normalt tillgänglig på:
`https://DITT-GITHUB-NAMN.github.io/smartprimarvard/`

## Viktigt
Länkarna är förberedda för ett repository som heter exakt `smartprimarvard`.
När den egna domänen kopplas kan sökvägarna senare göras domänneutrala.

## Lokal testning på Mac
Öppna Terminal i projektmappen och kör:

```bash
python3 -m http.server 8000
```

Öppna sedan:
`http://localhost:8000`

För att länkarna med `/smartprimarvard/` ska fungera lokalt kan du antingen lägga mappen i en överordnad katalog med samma namn eller testa via GitHub Pages.
