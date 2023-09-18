---
title: "Veckoschema"
layout: toc
---
## **v23**: Introduktion till kursverktyg

Den första veckan kommer innehålla administration och avslutas med en
provkörning av kursverktygen i laboration 1.

### Mål denna vecka

- Dina kurskonto på [GitHub](https://github.com/) och [Posit
  Cloud](https://rstudio.cloud/) skall vara kopplade till kursens
  arbetsytor.
- Första laborationen inlämnad. (Deadline söndag).

### Kursmaterial

- Hadley Wickham and Garrett Grolemund, *R for Data Science* (i
  fortsättningen R4DS): [Kapitel 1,
  Introduction](https://r4ds.had.co.nz/introduction.html).
- [Kursintroduktion (YouTube, 4:28)](https://youtu.be/J2bpA1XECBI) OBS
  från 2022.
- [Kursverktyg och examination (YouTube,
  5:37)](https://youtu.be/qrgjCchBTWs)
- [Posit Cloud introduktion (YouTube,
  12:52)](https://youtu.be/hsJTGkrsQkc)
- [RMarkdown introduktion (YouTube,
  14:42)](https://youtu.be/Ckd3Yfkx5Hk)
- [GitHub introduktion (YouTube, 13:05)](https://youtu.be/nmxg_wthhHQ)
- [Examination och betyg
  (kurshemsida)](https://kurser.math.su.se/pluginfile.php/140337/mod_resource/content/1/betygskriterier.pdf)

*OBS: Introduktionerna till Posit Cloud, RMarkdown och GitHub spelades
in 2021. Utöver den uppenbara ändringen från ST21 till ST23 har det
skett små förändringar i det grafiska gränssnittet till Posit Cloud.
Detta bör inte orsaka problem.*

------------------------------------------------------------------------

## **v24**: Enkla visualiseringar

### Mål denna vecka

- Att ha grundläggande förståelse för Rs datatyper.
- Att kunna skapa enkla diagram och förstå de grundläggande
  komponenterna i en `ggplot`-visualisering (`data`, `mapping`, `geom`).

### Kursmaterial

- R4DS: [Kapitel 2-4](https://r4ds.had.co.nz/introduction.html).

Posit Primers:

- [The Basics](https://rstudio.cloud/learn/primers/1) (Vizualisation och
  Programming)
- [Working with tibbles](https://rstudio.cloud/learn/primers/2.1)

### Övningar

Under rubriken övningar hittar du träningsmaterial som inte ingår i
kursens examination. Detta ger bra övning inför inlämningsuppgifterna,
med fördelen att du kan fråga och tipsa hur mycket du vill på kursens
Discord. Skapa ett separat projekt i Posit Cloud där du arbetar med
övningar och skapa en mapp `data` i detta projekt där du kan spara de
datamaterial vi använder.

Gör inte bara uppgifterna utan experimentera med data och försök hitta
på egna frågeställningar att besvara, fråga på Discord om något inte
blev som du tänkt.

#### Ettor på stan

Du kan ladda ner en kopia av data från inlämningsuppgift 1 med

```r
download.file("https://raw.githubusercontent.com/MT3003-ST23/data/master/booli_ettor_2023-05-28.csv",
              "data/booli_ettor_2023-05-28.csv")
```

och läsa in den med

``` r
booli_ettor <- read_csv("data/booli_ettor_2023-05-28.csv")
```

Notera att det går bra att läsa direkt från en url, som i

``` r
booli_ettor <- read_csv("https://raw.githubusercontent.com/MT3003-ST23/data/master/booli_ettor_2023-05-28.csv")
```

men vi föredrar att ladda ner filen en gång, då kan vi vara säkra på att
vi arbetar med samma material nästa gång vi öppnar projektet. Använd din
egen fantasi för att undersöka materialet med enkla figurer, till
exempel kan du undersöka

- Hur påverkar yta (`livingArea`) hyran (`rent`)?
- Media rapporterar ibland om [anmälningar om
  lockpriser](https://www.svt.se/nyheter/inrikes/rekordmanga-anmalningar-om-lockpriser).
  Undersök hur förekomsten av lockpriser varierat genom att plotta
  kvoten mellan slutpris och utgångspris (`soldPrice / listPrice`) mot
  försäljningsdatum (`soldDate`). Tips: Om figuren förstörs av ett
  extremt värde kan du zooma in genom att lägga till `+ ylim(c(0, 2))`
  för att bestämma gränserna på `y`-axeln.
- Vilka veckodagar publicerar mäklarna sina annonser? Gör ett
  stapeldiagram över antalet annonser per veckodag, veckodag får du
  genom `weekdays(published)`.

*Faktorvariabler:* Ovanstående övning illustrerar ett vanligt problem.
Veckodagarna blir sorterade i alfabetisk ordning medan vi antagligen
vill ha dem i kronologisk. Problemet kommer av att en variabel av typen
`character` inte innehåller någon information om kategoriernas ordning,
det gör däremot en variabel av typen `factor`. För att ändra ordning
behöver vi alltså göra om `weekdays(published)` till en faktorvariabel.
Om vi istället för `weekdays(published)` använder
`factor(weekdays(published), levels = c("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"))`
så ordnas staplarna i den ordning vi angett.

#### Systembolagets katalog

Systembolaget brukade ha hela sin katalog öppen för nedladdning, [så är
inte längre
fallet](https://api-portal.systembolaget.se/api-update-blog/changes-in-the-api-portal)
men en kopia från 2019 finns sparad i `systembolaget_2019-10-30.csv`.
Ladda ner den med

``` r
download.file("https://raw.githubusercontent.com/MT3003-ST23/data/master/systembolaget_2019-10-30.csv")
```

och läs in med

``` r
bolaget <- read_csv("data/systembolaget_2019-10-30.csv")
```

skapa dig en överblick genom att använda t.ex. `glimpse` eller `View`.
Ett enkelt sätt att få en överblick över en viss kategorisk variabel (om
kategorierna inte är för många) är ett stapeldiagram med `geom_bar`,
prova till exempel med variablerna `Varugrupp` eller `Ursprungsland`.
Man kan koppla den kategoriska variabeln antingen till y eller x-axeln
(med `aes(x = Varugrupp)` respektive `aes(y = Varugrupp)`). Vilket
passar bäst?

Vilken varugrupp har högst literpris? Gör ett punktdiagram med
`Varugrupp` på `y`-axeln och `PrisPerLiter` på `x`-axeln. Eftersom
fördelningen för `PrisPerLiter` kan det öka läsbarheten att använda en
logaritmisk skala på `x`-axeln genom att lägga till `+ scale_x_log10()`
till anropet. Som med veckodagarna ovan är det inte optimalt att ordna
kategorierna alfabetiskt, prova att använda
`y = fct_reorder(Varugrupp, PrisPerLiter)` istället för `y = Varugrupp`.
Funktionen `fct_reorder` gör om `Varugrupp` till faktorvariabel och
ordnar kategorierna efter `PrisPerLiter` (medianen i varje grupp).

Med hjälp av `filter` kan vi begränsa oss till vissa kategorier (mer om
detta nästa vecka). Vad genererar till exempel följande kod?

``` r
bolaget_subdata <- filter(bolaget, 
                      Ursprunglandnamn %in% c("Sverige", "Storbritannien", "Frankrike", "Spanien"), 
                      Varugrupp %in% c("Öl", "Rött vin", "Whisky", "Aperitif och dessert"))
ggplot(data = bolaget_subdata,
       mapping = aes(y = Ursprunglandnamn)) + 
  geom_bar() + 
  facet_wrap(~Varugrupp, scales = "free_x")
```

#### Gapminder data

[Gapminder foundation](https://www.gapminder.org/) verkar för att
förändra människors syn på världen med data. Titta gärna på något av
[Hans Roslings
föredrag](https://www.ted.com/speakers/hans_rosling?language=sv) eller
använd deras [interaktiva
verktyg](https://www.gapminder.org/tools/#$chart-type=bubbles&url=v1)
och försök återskapa figurerna med `ggplot`. En begränsad del av deras
data har sammanställts i `gapminder_2021-06-14.csv` (se
[dokumentation](https://www.gapminder.org/data/documentation/)). Ladda
ner med

``` r
download.file("https://raw.githubusercontent.com/MT3003-ST23/data/master/gapminder_2021-06-14.csv",
              "data/gapminder_2021-06-14.csv")
```

och läs in med

``` r
gapminder <- read_csv("data/gapminder_2021-06-14.csv")
```

------------------------------------------------------------------------

## **v25**: Sammanfatta en tabell

### Mål denna vecka

- Att kunna sortera och filtrera med `arrange` och `filter`.
- Skapa nya kolumner med `mutate`
- Sammanställningar med `group_by` och `summarise`

### Kursmaterial

- R4DS: [Kapitel 5-6](https://r4ds.had.co.nz/transform.html).

Posit Primers:

- [Isolating data with dplyr](https://rstudio.cloud/learn/primers/2.2)
- [Deriving information with
  dplyr](https://rstudio.cloud/learn/primers/2.3)

### Övningar

#### Ettor på stan

- Använd `arrange` (eventuellt i kombination med `select` för att
  begränsa utskriften) för att verifiera att bostaden med äldst
  `constructionYear` ligger i vad som troligen är [Stockholms äldsta
  bevarande bostadshus](https://sv.wikipedia.org/wiki/Baggensgatan_27).
  För flera rader antar `constructionYear` värdet `NA`, värde saknas.
  Hur hanteras detta av `arrange`?

- Använd `count` och `arrange` för att hitta den gatuadress där det
  sålts flest ettor. Detta är [Kvinnornas
  hus](https://stockholmskallan.stockholm.se/post/32632) som
  huvudsakligen består av ettor med kokvrå.

- Inför variabeln `priceRise` som prisökningen i procent (baserat på
  `soldPrice` och `listPrice`) och bestäm medelvärdet av `priceRise` per
  mäklare (`source.name`) för alla mäklare med minst 100 försäljningar
  och sammanfatta med ett histogram. **OBS**: Hur hanterar funktionen
  `mean` saknade värden? En försäljning i materialet sticker ut, kan du
  hitta och filtrera bort den?

#### Gapminder data

- Gör en tabell över medelinkomsten per capita för varje kontinent 2020
  baserat på Gapminder data från förra veckans övningar. Tänk på att
  även `income` är räknat i per capita, du behöver alltså bestämma
  kontinenternas totala inkomst och dela på den totala populationen.

#### Systembolagets katalog

- Illustrera hur medelpriset per liter på Röda viner beror på årgång (du
  kan begränsa dig till årgångar med minst 10 produkter).
- Illustrera hur medelpriset per liter på Röda viner beror på
  ursprungsland med ett stapeldiagram, ordna staplarna efter medelpris
  (du kan begränsa dig till länder med minst 10 produkter).
- Kolumnen `Alkoholhalt` är kodad som textvariabel eftersom den
  innehåller ett procenttecken, gör om den till numerisk genom att först
  ta bort procenttecknet med `str_remove` och sedan konvertera med
  `as.numeric`. Illustrera sedan hur pris per liter beror på alkoholhalt
  för varugruppen öl i ett punktdiagram med en rät trendlinje
  (`geom_smooth(method = "lm")`).
- [Skattesatsen för
  öl](https://skatteverket.se/foretag/skatterochavdrag/punktskatter/alkoholskatt/skattesatser.4.4a47257e143e26725aecb5.html)
  är 2.02 kronor per liter och volymprocent, bestäm en ny variabel
  `SkattPerLiter` som innehåller skattesatsen. Plotta sedan
  `PrisPerLiter - SkattPerLiter` mot `Alkoholhalt` (för varugruppen öl)
  med trendlinje.

#### Badväder

Hos Havs och Vattenmyndigheten kan du hitta [statistik över
vattenprover](https://havbipub.havochvatten.se/analytics/saw.dll?PortalPages&PortalPath=%2Fshared%2FHemsidan%2FBadplats%2F_portal%2FBadplats)
tagna vid badplatser runt om i landet, ett utdrag i Excel-format kan
laddas ned med

``` r
download.file("https://raw.githubusercontent.com/MT3003-ST23/data/master/Provresultat.xlsx",
              "data/Provresultat.xlsx")
```

och läsas in med

``` r
badvatten <- readxl::read_excel("data/Provresultat.xlsx") %>% 
  fill(Län, Kommun)
```

Vad gör funktionen `fill` i detta fall? Undersök materialet närmare
avseende t.ex. skillnader mellan län, EU-bad/Övriga och Badplatstyp. En
svårighet är att man för E.coli och enterokocker ibland använder ett
mätvärde och ibland en övre gräns (se prefix-kolumnerna).

Ovanstående utdrag hämtades 4/6 då det fortfarande var ganska kallt i
vattnet. Vill du hämta aktuella data på samma format väljer du
*Exportera \> Formaterad \> Excel* längst ned till vänster på sidan.

------------------------------------------------------------------------

## **v26**: Utforska data med visualiseringar

### Mål denna vecka

- Skriva en enkel rapport i Rmarkdown.
- Utforska data med `ggplot`.
- Andra laborationen inlämnad (deadline söndag).

### Kursmaterial

- R4DS: [Kapitel
  7](https://r4ds.had.co.nz/exploratory-data-analysis.html), [Kapitel
  27](https://r4ds.had.co.nz/r-markdown.html) och [Kapitel
  28](https://r4ds.had.co.nz/graphics-for-communication.html).

Posit Primers:

- [Visualize Data](https://rstudio.cloud/learn/primers/3)

### Övningar

Inga speciella övningar denna vecka, experimetera med visualiseringar av
data från tidigare veckor.

## **v27**: Läsa data från fil

### Mål denna vecka

- Att kunna importera tabeller från textfiler.

### Kursmaterial

- R4DS: [Kapitel 9-11](https://r4ds.had.co.nz/data-import.html).

#### Kapitel 11 från ett svenskt perspektiv

Paketet `readr` följer amerikansk standard om du inte ber det göra något
annat, här listar vi några skillnader mellan svensk och amerikansk
standard som kan vara bra att ha koll på.

##### Filformatet `.csv`

`csv` står för *comma separated values* och är ett av de vanligaste
formaten för att spara tabeller i en textfil. I en `csv`-fil motsvarar
varje rad en rad i tabellen (översta raden består ofta av
kolumnrubriker) och kommatecken används för att separera kolumner. Filen
med innehåll

```r
x, y
1, 2
3, 4
```
motsvarar alltså tabellen

``` r
readr::read_csv(
"x, y
1, 2
3, 4")
```

``` r
## # A tibble: 2 × 2
##       x     y
##   <dbl> <dbl>
## 1     1     2
## 2     3     4

```

Detta fungerar bra i engelskspråkiga länder där man använder punkt som
decimaltecken. När man som i svensk standard använder kommatecken som
decimaltecken används istället ofta semikolon som kolumnavgränsare. Så
är till exempel fallet i Excel; om du har Excel med svenska nationella
inställningar och väljer att spara en tabell i formatet
`CSV (kommaavgränsad) *.csv` så sparas den i själva verket som en fil
där kolumner avgränsas med semikolon. Försöker du sedan läsa in den med
`read_csv` placeras alla värden i samma kolumn

``` r
readr::read_csv(
"x; y
1; 2
3; 4")

```

``` r
  ## # A tibble: 2 × 1
  ##   `x; y`
  ##   <chr> 
  ## 1 1; 2  
  ## 2 3; 4
```

Eftersom detta är vanligt förekommande finns en specialfunktion
`read_csv2` som utgår ifrån att kolumner skiljs med semikolon och komma
används som decimaltecken

``` r
readr::read_csv2(
"x; y
1; 2
3; 4")
```

``` r
## # A tibble: 2 × 2
##       x     y
##   <dbl> <dbl>
## 1     1     2
## 2     3     4
```

##### Decimaltecken igen

När siffror kombineras med punkt, kommatecken och mellanslag gissar
paketet `readr` vad dessa betyder utifrån amerikansk standard. Här kan
det lätt bli fel om vi slarvar med att ange lokala inställningar
(`locale`). Jämför till exempel

``` r
readr::parse_number(c("3,14", "3 000"))
```
``` r

    ## [1] 314   3
```
med

``` r
readr::parse_number(c("3,14", "3 000"), locale = readr::locale(decimal_mark = ",", 
                                                               grouping_mark = " "))
```
``` r
    ## [1]    3.14 3000.00
```
Ibland får man lösa konverteringen själv. I data som matats in manuellt
är det inte ovanligt att både punkt och kommatecken förekommer som
decimaltecken om vartannat i samma fil. Då är det säkrare att läsa in
alla kolumner som text (`chr`) och använda till exempel
`str_replace(x, ",", ".")` följt av `as.numeric`.

##### Spagetti med kÃ¶ttfÃ¤rssÃ¥s

Antagligen har du någon gång stött på en text där svenska tecken bytts
ut mot obegripliga symboler. Problemet beror på att det utvecklats många
olika konventioner för
[teckenkodning](https://sv.wikipedia.org/wiki/Teckenkod) som kan vara
specifika för operativsystem och applikationer. De viktigaste att känna
till är [UTF-8](https://sv.wikipedia.org/wiki/UTF-8), som är standard på
webben och kan koda alla möjliga språk, och [ISO
8859-1](https://sv.wikipedia.org/wiki/ISO/IEC_8859-1) eller **latin1**,
som är en enklare teckenkodning anpassad för västeropeiska språk.
Paketet `readr` förutsätter alltid UTF-8, medan motsvarande funktioner i
Rs `base`-paket (t.ex. `read.csv` som motsvarar `readr::read_csv`)
anpassar sig efter lokala systeminställningar.

Ser ditt resutat ut som i rubriken har du antagligen försökt läsa in
“köttfärssås” som latin1 när den i själva verket var kodad i UTF-8,
detta är mindre vanligt med just `readr`-paketet eftersom det läser in
som UTF-8 om du inte anger något annat. Om du däremot försöker läsa in
en fil kodad i latin1 med `readr` blir det `k\xf6ttf\xe4rss\xe5s` om du
inte anger `locale = locale(encoding = "latin1")`.

### Övningar

#### SCB-data

I [SCBs
statistikdatabas](https://www.statistikdatabasen.scb.se/pxweb/sv/ssd/)
kan man skapa en länk (url) till tabeller man tagit fram. Filen på
`https://www.statistikdatabasen.scb.se/sq/110431` innehåller medelålder
per län i formatet *Kommaavgränsad med rubrik*. Undersök den med
`read_lines("https://www.statistikdatabasen.scb.se/sq/110431")` och
försök sedan läsa in den korrekt med `read_csv`.

#### Mer badvatten

Badvattenfilen som användes i tidigare övningar var exporterad som
Excel-fil från [Hav och
Vattenmyndigheten](https://havbi.havochvatten.se/analytics/saw.dll?PortalPages),
om vi istället väljer att exportera som csv får vi en fil som kan hämtas
med

``` r
download.file("https://raw.githubusercontent.com/MT3003-ST23/data/master/Provresultat.csv",
              "data/Provresultat.csv")
```

Försök läsa in den med `read_csv`, vad händer med vattentemperaturen?
Fixa!

------------------------------------------------------------------------

## **v28**: Omforma och sammanfläta tabeller

### Mål denna vecka

- Att kunna omforma tabeller till ett “tidy”-format.
- Att kunna skapa nya tabeller genom att sammanfoga flera tabeller med
  gemensamma kolumner.

### Kursmaterial

- R4DS: [Kapitel 12-13](https://r4ds.had.co.nz/tidy-data.html)

Posit primers:

- [Tidy your data](https://rstudio.cloud/learn/primers/4). **OBS**: I
  delen *Reshape Data* används funktionerna `gather` och `spread`, dessa
  har ersatts med `pivot_longer` och `pivot_wider` som är enklare att
  använda (de gamla fungerar dock fortfarande). Försök lösa övningen med
  `pivot_longer` och `pivot_wider`.

### Övningar

#### Gapminder data

På [gapminders dataarkiv](https://www.gapminder.org/data/) kan man ladda
ner deras sammanställda datamaterial, en fil för varje variabel.
Tabellen som använts i tidigare övningar är sammanställd av sådana
filer. Filen med antal mobiltelefoner per land och år har vi hämtat så
att den kan laddas ned med

``` r
download.file("https://raw.githubusercontent.com/MT3003-ST23/data/master/cell_phones_total_2021-06-27.csv",
              "data/cell_phones_total_2021-06-27.csv")
```

och sedan läsas in med

``` r
cell_phones_total <- read_csv("data/cell_phones_total_2021-06-27.csv",
                              col_types = cols(.default = "c"))
```

här ser `col_types = cols(.default = "c" )` till att alla kolumner läses
in som text (`chr`) vilket kommer visa sig vara praktiskt. Du kan också
prova med någon anna variabel du hämtad ned direkt från gapminder.

Uppgiften är nu att lägga till variabeln till gapminder-tabellen från
tidigare övningar genom att

- Gör om `cell_phones_total` till “tidy”-format med `pivot_longer`.
- Lägg till den nya variabeln som en kolumn i gapminder tabellen med
  lämplig `*_join` (om du gör allt i en pipe-sekvens kan `right_join`
  vara lämpligt).
- Anledningen till att vi läste in alla kolumner som text är att
  gapminder valt att koda numeriska värden i olika enheter. Talet 1100
  kodas t.ex. som `1.1k` och 12 600 000 som `12.6M`. Detta kan t.ex.
  lösas med `case_when` som nedan

``` r
case_when(
  str_detect(antal_mobiler, "k") ~ 1000 * (str_remove(antal_mobiler, "k") %>% as.numeric()),
  str_detect(antal_mobiler, "M") ~ ...
```

#### Jämställdhet

Tabellen

``` r
read_csv("https://www.statistikdatabasen.scb.se/sq/110673", 
         skip = 1, locale = locale(encoding = "latin1"))
```
``` r
    ## # A tibble: 2 × 8
    ##   kön     `1995` `1999` `2004` `2009` `2011` `2014` `2019`
    ##   <chr>    <dbl>  <dbl>  <dbl>  <dbl>  <dbl>  <dbl>  <dbl>
    ## 1 kvinnor      9      9     11     10      9     11     11
    ## 2 män         13     13      8      8     11      9      9
```

innehåller antal svenska EU-parlamentariker efter kön och år. Använd
`pivot_longer`, `pivot_wider`, `mutate` och `select` i en följd för att
generera

``` r
    ## # A tibble: 7 × 2
    ##   year  percent_female
    ##   <chr>          <dbl>
    ## 1 1995            40.9
    ## 2 1999            40.9
    ## 3 2004            57.9
    ## 4 2009            55.6
    ## 5 2011            45  
    ## 6 2014            55  
    ## 7 2019            55
```

#### Koroplet

Koropletkartor brukar användas när man vill visa hur en variabel
varierar geografiskt, ofta med en indelning i områden som t.ex. län
eller kommuner. Du kan ladda ner och packa upp en karta över sveriges
län i som en så kallad shapefil ([hämtad från
SCB](https://www.scb.se/hitta-statistik/regional-statistik-och-kartor/regionala-indelningar/digitala-granser/))
med

``` r
download.file("https://raw.githubusercontent.com/MT3003-ST23/data/master/LanSweref99TM.zip",
              "LanSweref99TM.zip")
unzip("LanSweref99TM.zip", exdir = "LanSweref99TM")
```

Paketet `sf` innehåller funktioner för att arbeta med geografiska data
och kan bland annat läsa in en shapefil i tabellformat med `st_read` som
sedan kan plottas med `geom_sf`

``` r
library(sf)
karta_lan <- st_read("LanSweref99TM/Lan_Sweref99TM_region.shp", quiet = TRUE)
ggplot(karta_lan, aes(fill = LnNamn)) + geom_sf()
```

<img src="https://raw.githubusercontent.com/MT3003-ST22/mt3003-st22.github.io/main/img/lan.png" width="50%" />

Objektet `karta_lan` kan användas som en vanlig tabell/`tibble`. Det
betyder att vi kan lägga till länsvisa variabler med `*_join` om vi vill
färglägga efter något mer intressant än `LnNamn`. Prova tabellen med
medelålder från tidigare övningar, en nyckel får du t.ex. genom att
skapa en variabel `LnKod = str_sub(region, 1, 2)` i tabellen över
medelålder.

Ett alternativ till `ggplot` för just kartframställning är paketet
[`tmap`](https://cran.r-project.org/web/packages/tmap/vignettes/tmap-getstarted.html)
som kan vara enklare att använda men mindre flexibelt.

#### Hur vild är Amineh?

Amineh Kakabavehs roll som politisk vilde i riksdagen väckte en del
uppmärksamhet under 2022. Men hur ofta röstar egentligen moderpartit Vs
ledamöter samma som henne?

Med

``` r
votering_V <- read_csv("http://data.riksdagen.se/voteringlista/?rm=2021%2F22&bet=&punkt=&parti=V&valkrets=&rost=&iid=&sz=20000&utformat=csv&gruppering=")
votering_vild <- read_csv("http://data.riksdagen.se/voteringlista/?bet=&punkt=&parti=-&valkrets=&rost=&iid=&sz=10000&utformat=csv&gruppering=")
```

hämtar du de resultatet av de senaste 10000 rösterna lagda av
V-ledamöter respektive politiska vildar i riksdagens voteringar
(eftersom det finns fler V-ledamöter än vildar innehåller den andra fler
voteringar). Återskapa motsvarigheten till nedanstående figur, som
illustrerar de 10000 V-rösterna i förhållande till Aminehs röst (endast
voteringar där Amineh röstat skall räknas)

![](index_files/figure-gfm/unnamed-chunk-26-1.png)<!-- -->

Tips: Välj ut Aminehs röster ur `votering_vild` och skapa en ny tabell
med kolumner `votering_id` och `rost` (den senare kan du gärna döpa om
till `aminehs_rost`). Använd sedan lämplig `join` för att koppla ihop
denna tabell med `votering_V` och illustrera.

Gör motsvarande jämförelse mellan V-ledamöter och politiske vilden Roger
Richthoff (tidigare SD). Eftersom Roger blev vilde först under 2022 har
han inte deltagit som vilde i alla voteringar i `votering_V`, ta bort de
där han inte voterat som vilde.

------------------------------------------------------------------------

## **v29**: Arbeta med text, faktorer och datum.

### Mål denna vecka

- Att kunna använda verktyg i paketen `stringr`, `forcats` och
  `lubridate`.

### Kursmaterial

- R4DS: [Kapitel 14-16](https://r4ds.had.co.nz/strings.html) (14.3 om
  reguljära uttryck kan läsas kursivt, ni förväntas ha en grundläggande
  förståelse för konceptet men inte detaljerna).

### Övningar

Kapitel 14-16 innehåller specifika verktyg för att arbeta med text,
faktorer och datum. Vi har redan stött på flera av dessa, t.ex. förekom
`stringr::str_detect`, `forcats::fct_relevel` och `lubridate::yday` i
Laboration 2. Funktionerna i `stringr` och `forcats` börjar alltid med
`str_` respective `fct_` vilket gör det enkelt att leta efter dem i
Posits Console-fönster då man får upp en lista genom att inleda raden
med dessa tecken (skriv `lubridate::` för motsvarande lista för detta
paket). Specifika övningar ges i kursboken, här ger vi ett exempel på
hur man kan arbeta med textdata.

#### En textanalys

På [Projekt Gutenberg](https://www.gutenberg.org/) finns en stor samling
gratis e-böcker. Vi kan ladda ner Strindbergs Hemsöborna med

``` r
download.file("https://www.gutenberg.org/cache/epub/30078/pg30078.txt",
              "data/hemsoborna.txt")
```

läsa ett valt stycke med

``` r
read_lines("data/hemsoborna.txt", skip = 194, n_max = 21) %>% 
  str_c(collapse = " ")
```
```r
    ## [1] "Han kom som ett yrväder en aprilafton och hade ett höganäskrus i en  \nsvångrem om halsen. Clara och Lotten voro inne med sköt-ekan att hämta  \nhonom på Dalarö brygga; men det dröjde evigheter, innan de kommo i båt.  \nDe skulle till handelsman och ha en tunna tjära och på abeteket och hämta  \ngråsalva åt grisen, och så skulle de på posten och få ett frimärke, och  \nså skulle de ner till Fia Lövström i Kroken och låna tuppen mot ett  \nhalvpund småtärna till notbygget, och sist hade de hamnat på  \ngästgivaregården, där Carlsson bjudit på kaffe med dopp. Och så kommo de  \näntligen i båt, men Carlsson ville styra, och det kunde han inte, för han  \nhade aldrig sett en råseglare förr, och därför skrek han, att de skulle  \nhissa focken, som inte fanns."
```
och spara hela boken i en tibble med

``` r
hemsoborna <- tibble(row = read_lines("data/hemsoborna.txt", 
                                       skip = 90, n_max = 10178)) %>% 
  filter(row != "") %>% 
  mutate(row_no = 1:n())
hemsoborna
```
```r
    ## # A tibble: 5,088 × 2
    ##    row                   row_no
    ##    <chr>                  <int>
    ##  1 "\n"                       1
    ##  2 "\n"                       2
    ##  3 "\n"                       3
    ##  4 "\nHEMSÖBORNA"             4
    ##  5 "\n"                       5
    ##  6 "\nAV"                     6
    ##  7 "\n"                       7
    ##  8 "\nAUGUST STRINDBERG"      8
    ##  9 "\n"                       9
    ## 10 "\nSTOCKHOLM"             10
    ## # ℹ 5,078 more rows
```

här har vi klippt bort text som inte hör till boken med `skip` och
`n_max`, tagit bort tomma rader och lagt till radnummer. För att
analysera texten vidare delar vi upp den ord för ord, konverterar
bokstäver till gemener och lägger in en räknare för kapitel

``` r
hemsoborna_words <- hemsoborna %>% 
  mutate(word = str_extract_all(row, boundary("word"))) %>% 
  group_by(row_no) %>% 
  summarise(word = unlist(word)) %>% 
  ungroup() %>% 
  mutate(word = str_to_lower(word),
         chapter = cumsum(str_detect(word, "kapitlet")))
```

- Vad gör egentligen `chapter = cumsum(str_detect(word, "kapitlet"))`?

Vi kan nu få de vanligaste orden med

``` r
hemsoborna_words %>% count(word, sort = TRUE)
```
```r
    ## # A tibble: 8,481 × 2
    ##    word      n
    ##    <chr> <int>
    ##  1 och    2457
    ##  2 i      1053
    ##  3 han     940
    ##  4 att     875
    ##  5 på      851
    ##  6 som     811
    ##  7 det     797
    ##  8 en      756
    ##  9 med     571
    ## 10 sig     509
    ## # ℹ 8,471 more rows

```
de flesta av dessa är så kallade stoppord, ord som är viktiga för att
binda ihop texten men annars betydelsefattiga. För att ta bort dem
hämtar vi en lista på svenska stoppord

``` r
stopwords <- read_table("https://raw.githubusercontent.com/stopwords-iso/stopwords-sv/master/stopwords-sv.txt",
           col_names = "word")
```

- Använd `anti_join` för att ta bort alla stoppord från listan på de
  vanligaste orden.
- Illustrera resultatet med funktionen `wordcloud2::wordcloud2`.

Stämningsanalys (semtiment analysis) är en populär metod för att
beskriva känslostämningar i texter (se till exempel [Jane
Austen](https://juliasilge.com/blog/if-i-loved-nlp-less/) och [Donald
Trump](http://varianceexplained.org/r/trump-tweets/)). I allmänhet
bygger det på att man anväder ett lexikon som kvantifierar stämningen i
enskilda ord, till exempel associerar ett posotivt numeriskt värde till
“kärlek” och ett negativt till “svartsjuka”. Ett svenskt sådant lexikon
kan laddas ned från [språkbanken](https://spraakbanken.gu.se/) som

``` r
sentiment_lex <- read_csv("https://svn.spraakdata.gu.se/sb-arkiv/pub/lmf/sentimentlex/sentimentlex.csv")
```

- Koppla ihop `hemsoborna_words` och `sentiment_lex` med en `inner_join`
  och illustrera hur det går utför för Carlsson genom att bestämma
  medelvärdet av känslostämningen (variabeln `strength`) för varje
  kapitel.

------------------------------------------------------------------------

## **v30**: Funktioner och iteration

### Mål denna vecka

- Att kunna skriva enkla funktioner för att göra koden mer lättläst och
  enklare att underhålla.
- Att kunna arbeta med Rs list-format.
- Att kunna förenkla upprepade uppgifter med iteration.

### Kursmaterial

- R4DS: [Kapitel 17-21](https://r4ds.had.co.nz/program-intro.html)

### Övningar

#### Booli figurer

Koden bakom en figur skapad med `ggplot` kan bli många rader om man vill
finjustera detaljer. Skall man upprepa en figur för olika
parametervärden är det därför praktiskt att skriva en funktion. Använd
tabellen över 20000 försäljningar i innerstaden som laddas ned med

``` r
download.file("https://raw.githubusercontent.com/MT3003-ST23/data/master/booli_alla_2023-06-03.csv",
              "data/booli_alla_2023-06-03.csv")
booli_data <- read_csv("data/booli_alla_2023-06-03.csv")
```

- Konstruera en funktion

``` r
plot_price_ts <- function(data, title = "Pris per kvadratmeter i Stockholms innerstad"){
  ...
}
```

som skapar en figur motsvarande den i Laboration 1 baserat på givet
`data`.

- Vill vi nu plotta t.ex. tvåor kan vi använda funktionen med anropet
  `booli_data %>% filter(rooms == 2) %>% plot_price_ts()`. Lägg till ett
  argument `rooms` till funktionen så att
  `plot_price_ts(booli_data, rooms = 2)` ger samma resultat.

#### Olympiska medaljer

På
<https://sv.wikipedia.org/wiki/Medaljf%C3%B6rdelning_vid_olympiska_sommarspelen_2020>
hittar du medaljfördelningen för OS i Tokyo. Tabellen kan hämtas med

``` r
library(rvest)
url <- "https://sv.wikipedia.org/wiki/Medaljf%C3%B6rdelning_vid_olympiska_sommarspelen_2020"
read_html(url) %>% 
  html_element(".wikitable") %>% 
  html_table()
```
```r
    ## # A tibble: 94 × 7
    ##    Pl.   Land            Guld Silver Brons TAM    PEAM
    ##    <chr> <chr>          <int>  <int> <int> <chr> <int>
    ##  1 1     USA               39     41    33 113       1
    ##  2 2     Kina              38     32    18 88        2
    ##  3 3     Japan             27     14    17 58        5
    ##  4 4     Storbritannien    22     21    22 65        4
    ##  5 5     ROC               20     28    23 71        3
    ##  6 6     Australien        17      7    22 46        6
    ##  7 7     Nederländerna     10     12    14 36        9
    ##  8 8     Frankrike         10     12    11 33       10
    ##  9 9     Tyskland          10     11    16 37        8
    ## 10 10    Italien           10     10    20 40        7
    ## # ℹ 84 more rows
```

En motsvarande tabell för t.ex. OS i Rio kan hämtas genom att byta
`2020` mot `2016`.

Konstruera en funktion

``` r
get_medals <- function(year){
  ...
}
```

som returnerar medaljtabellen för OS-år `year` som nedan (glöm inte ta
bort Total-raden). Tyvärr är inte alla kolumnnamn helt konsistenta, men
du behöver bara kolumnerna `Land`, `Guld`, `Silver` och `Brons`.

``` r
get_medals(2016)
```
``` r
    ## # A tibble: 264 × 4
    ##     year country        class  number
    ##    <dbl> <chr>          <chr>   <int>
    ##  1  2016 USA            Guld       46
    ##  2  2016 USA            Silver     37
    ##  3  2016 USA            Brons      38
    ##  4  2016 Storbritannien Guld       27
    ##  5  2016 Storbritannien Silver     23
    ##  6  2016 Storbritannien Brons      17
    ##  7  2016 Kina           Guld       26
    ##  8  2016 Kina           Silver     18
    ##  9  2016 Kina           Brons      26
    ## 10  2016 Ryssland       Guld       19
    ## # ℹ 254 more rows
```

- Använd `map_df` med `seq(1948, 2020, by = 4)` och `get_medals` som
  argument för att skapa en tabell över medaljfördelningen för alla
  sommar OS sedan 1948.

#### Gapminder data

I en [tidigare
övning](https://mt3003-st22.github.io/schedule.html#v28:_Omforma_och_sammanfl%C3%A4ta_tabeller)
omformade vi en csv-fil från gapminder till ett mer användbart format.
Nedanstående kod hämtar fler filer och placerar dem i
`data/gapminder_raw`

``` r
dir.create("data/gapminder_raw")
filenames <- c("cell_phones_total.csv", "child_mortality_0_5_year_olds_dying_per_1000_born.csv", 
               "children_per_woman_total_fertility.csv", "co2_emissions_tonnes_per_person.csv", 
               "income_per_person_gdppercapita_ppp_inflation_adjusted.csv", 
               "life_expectancy_years.csv", "population_total.csv")

urls <- str_c("https://raw.githubusercontent.com/MT3003-ST23/data/master/gapminder_raw/", filenames)
destfiles <- str_c("data/gapminder_raw/", filenames)
walk2(urls, destfiles, download.file)
```

- Konstruera en funktion

``` r
read_gapminder <- function(file, path = "data/gapminder_raw/"){
  ...
}
```

som genererar följande

``` r
read_gapminder("life_expectancy_years.csv")
```
```r
    ## # A tibble: 56,889 × 4
    ##    country     year  value variable             
    ##    <chr>       <chr> <dbl> <chr>                
    ##  1 Afghanistan 1800   28.2 life_expectancy_years
    ##  2 Afghanistan 1801   28.2 life_expectancy_years
    ##  3 Afghanistan 1802   28.2 life_expectancy_years
    ##  4 Afghanistan 1803   28.2 life_expectancy_years
    ##  5 Afghanistan 1804   28.2 life_expectancy_years
    ##  6 Afghanistan 1805   28.2 life_expectancy_years
    ##  7 Afghanistan 1806   28.1 life_expectancy_years
    ##  8 Afghanistan 1807   28.1 life_expectancy_years
    ##  9 Afghanistan 1808   28.1 life_expectancy_years
    ## 10 Afghanistan 1809   28.1 life_expectancy_years
    ## # ℹ 56,879 more rows
```
här kan du ge kolumnen `variable` värdet `str_sub(file, 1, -5)`.

- Skapa en tabell (samma fyra kolumner) med alla variabler genom att
  använda `map_df` med argument `list.files("data/gapminder_raw/")` och
  `read_gapminder`.

------------------------------------------------------------------------

## **v31**: APIer, databaser och webbskrap

### Mål denna vecka

- Använda grundläggande funktioner i paket som `httr`, `dbplyr` och
  `rvest`.

### Kursmaterial

#### Kommunicera med ett web-API

Ett vanligt sätt att kommunicera med en databas är via ett så kallat
[REST
API](https://sv.wikipedia.org/wiki/Representational_State_Transfer), där
anrop sker genom en webbadress (url). För populära API finns i allmänhet
färdiga paket som förenklar kommunikationen, som t.ex.
[rtweet](https://cran.r-project.org/web/packages/rtweet/),
[spotifyr](https://cran.r-project.org/web/packages/spotifyr/index.html)
och [rgbif](https://cran.r-project.org/web/packages/rgbif/index.html).
Saknas sådant kan man använta paketet `httr` för att själv konstruera
anrop, vi kommer använda funktionerna `GET` och `content` från detta
paket.

##### A-$\pi$

[A-$\pi$](https://pi.delivery/#apipi_get) är ett enkelt API där du kan
hämta en sekvens av $\pi$:s decimaler. Du behöver ange en startposition
(`start`) och antal siffror (`numberOfDigits`), första 10 decimalerna
ges av anropet
[`https://api.pi.delivery/v1/pi?start=1&numberOfDigits=10`](https://api.pi.delivery/v1/pi?start=1&numberOfDigits=10)
som vi gör från R med

``` r
library(httr)
response <- GET("https://api.pi.delivery/v1/pi?start=1&numberOfDigits=10")
content(response)
```
```r
    ## $content
    ## [1] "1415926535"
```

##### Nobel API

På <https://nobelprize.readme.io/> finns ett API där du kan hämta data
om nobelpriser och pristagare. Välj en kategori, t.ex.
[prize](https://nobelprize.readme.io/docs/prize) och prova göra ett
anrop under “Try it out” längst ned på sidan. Klicka “Try it!” och
notera den URL som genereras i fönstret under. Väljer vi format `csv`
och category `literature` blir denna
`http://api.nobelprize.org/v1/prize.csv?category=literature`. För att
hämta resultatet till R

``` r
response <- GET("http://api.nobelprize.org/v1/prize.csv?category=literature")
content(response)
```
``` r
    ## # A tibble: 119 × 8
    ##     year category   overallMotivation    id firstname  surname  motivation share
    ##    <dbl> <chr>      <lgl>             <dbl> <chr>      <chr>    <chr>      <dbl>
    ##  1  2022 literature NA                 1017 Annie      Ernaux   "\"for th…     1
    ##  2  2021 literature NA                 1004 Abdulrazak Gurnah   "\"for hi…     1
    ##  3  2020 literature NA                  993 Louise     Glück    "\"for he…     1
    ##  4  2019 literature NA                  980 Peter      Handke   "\"for an…     1
    ##  5  2018 literature NA                  979 Olga       Tokarcz… "\"for a …     1
    ##  6  2017 literature NA                  947 Kazuo      Ishiguro "\"who in…     1
    ##  7  2016 literature NA                  937 Bob        Dylan    "\"for ha…     1
    ##  8  2015 literature NA                  924 Svetlana   Alexiev… "\"for he…     1
    ##  9  2014 literature NA                  912 Patrick    Modiano  "\"for th…     1
    ## 10  2013 literature NA                  892 Alice      Munro    "\"master…     1
    ## # ℹ 109 more rows
```

#### Skrapa webbsidor

Ibland saknas ett öppet API och vi blir tvungna att skrapa tabeller
direkt från en webbsidas html-kod. Ett exempel gavs i föregående veckas
uppgifter där vi hämtade tabeller över OS-medaljer från Wikipedia. För
att lyckas med detta behövs grundläggande förståelse för hur html-koden
är uppbyggd med [*taggar* och
*element*](https://sv.wikipedia.org/wiki/HTML-element). Ett element
består av en starttagg med eventuella attribut, innehåll och en sluttagg
kodat som `<tagg attributnamn="värde">Innehåll</tagg>`. Informationen vi
är ute efter är oftast `Innehåll` (men ibland `värde`).

Paketet `rvest` innehåller funktioner för att läsa webbsidor och
extrahera information, vi illustrerar med ett minimalt exempel där vi
vill få ut innehållet i taggen `b` ur `<a> 1 </a> <b> 2 </b>`. Först
läser vi in html-koden

``` r
page <- read_html("<a> 1 </a> <b> 2 </b>")
page
```
``` r
    ## {html_document}
    ## <html>
    ## [1] <body>\n<a> 1 </a> <b> 2 </b>\n</body>
```
sedan extraherar vi taggen `b` med en så kallad
[CSS-väljare](https://www.w3schools.com/cssref/css_selectors.asp)

``` r
elements <- html_elements(page, css = "b")
elements
```
``` r
    ## {xml_nodeset (1)}
    ## [1] <b> 2 </b>
```
slutligen drar vi ut innehållet som text

``` r
html_text(elements)
```
``` r
    ## [1] " 2 "
```
Svårigheten ligger i allmänhet att hitta en CSS-väljare som plockar ut
precis vad vi vill ha. I övningen med OS-medaljer vill vi extrahera en
specifik tabell från en Wikipedia-sida. En tabell i standardformat
skrivs i html med start- och sluttagg `<table> ... </table>`, vi kan
därför prova med `css = "table"`

``` r
url <- "https://sv.wikipedia.org/wiki/Medaljf%C3%B6rdelning_vid_olympiska_sommarspelen_2020"
page <- read_html(url)
elements <- html_elements(page, css = "table")
elements
```


```r
    ## {xml_nodeset (5)}
    ## [1] <table class="wikitable sortable"><tbody>\n<tr>\n<th>\n<span style="curso ...
    ## [2] <table class="navbox" style="border-spacing:0; ;"><tbody><tr><td style="p ...
    ## [3] <table class="collapsible autocollapse" style="width:100%;border-spacing: ...
    ## [4] <table class="navbox" style="border-spacing:0; ;"><tbody><tr><td style="p ...
    ## [5] <table class="collapsible autocollapse" style="width:100%;border-spacing: ...
```

Sidan innehåller fem tabeller där vi vill ha den första. Vi kan
extrahera denna med

``` r
html_table(elements[[1]])
```
``` r
    ## # A tibble: 94 × 7
    ##    Pl.   Land            Guld Silver Brons TAM    PEAM
    ##    <chr> <chr>          <int>  <int> <int> <chr> <int>
    ##  1 1     USA               39     41    33 113       1
    ##  2 2     Kina              38     32    18 88        2
    ##  3 3     Japan             27     14    17 58        5
    ##  4 4     Storbritannien    22     21    22 65        4
    ##  5 5     ROC               20     28    23 71        3
    ##  6 6     Australien        17      7    22 46        6
    ##  7 7     Nederländerna     10     12    14 36        9
    ##  8 8     Frankrike         10     12    11 33       10
    ##  9 9     Tyskland          10     11    16 37        8
    ## 10 10    Italien           10     10    20 40        7
    ## # ℹ 84 more rows
```

men väljer istället att utnyttja `class`-attributet `wikitable` eftersom
medaljtabellen inte ligger först på alla OS-sidor

``` r
elements <- html_elements(page, css = ".wikitable")
html_table(elements)
```
``` r
    ## [[1]]
    ## # A tibble: 94 × 7
    ##    Pl.   Land            Guld Silver Brons TAM    PEAM
    ##    <chr> <chr>          <int>  <int> <int> <chr> <int>
    ##  1 1     USA               39     41    33 113       1
    ##  2 2     Kina              38     32    18 88        2
    ##  3 3     Japan             27     14    17 58        5
    ##  4 4     Storbritannien    22     21    22 65        4
    ##  5 5     ROC               20     28    23 71        3
    ##  6 6     Australien        17      7    22 46        6
    ##  7 7     Nederländerna     10     12    14 36        9
    ##  8 8     Frankrike         10     12    11 33       10
    ##  9 9     Tyskland          10     11    16 37        8
    ## 10 10    Italien           10     10    20 40        7
    ## # ℹ 84 more rows
```
Punkten i `.wikitable` anger att det just är `class`-attributet vi skall
välja efter (se
[CSS-väljare](https://www.w3schools.com/cssref/css_selectors.asp)). Ett
verktyg som är användbart för att identifiera dessa är
[SelectorGadget](https://selectorgadget.com/), som till exempel kan
installeras som ett tillägg i Chrome.

På linande sätt kan vi hämta aktuell tabell för Allsvenskan med

``` r
url <- "https://www.allsvenskan.se/tabell"
page <- read_html(url)
elements <- html_elements(page, css = ".col-md-6")
html_table(elements[[1]])
```
``` r
    ## # A tibble: 33 × 10
    ##    `#`   ``    LAG   ``                M     V     O     F     `+/-` P    
    ##    <chr> <lgl> <chr> <chr>             <chr> <chr> <chr> <chr> <chr> <chr>
    ##  1 1     NA    ""    IF Elfsborg       10    8     1     1     25-8  25   
    ##  2 2     NA    ""    Malmö FF          10    8     1     1     23-9  25   
    ##  3 3     NA    ""    BK Häcken         11    7     1     3     29-13 22   
    ##  4 4     NA    ""    Djurgården        11    6     1     4     16-14 19   
    ##  5 5     NA    ""    IF Brommapojkarna 11    6     1     4     15-14 19   
    ##  6 6     NA    ""    Kalmar FF         11    5     3     3     15-12 18   
    ##  7 7     NA    ""    IFK Norrköping    11    5     2     4     16-13 17   
    ##  8 8     NA    ""    Halmstads BK      11    5     1     5     11-16 16   
    ##  9 9     NA    ""    Mjällby AIF       11    4     3     4     9-9   15   
    ## 10 10    NA    ""    Hammarby          12    3     4     5     15-20 13   
    ## # ℹ 23 more rows
```

där SelectorGadget har använts för att hitta väljaren `.col-md-6`.
Notera att kolumnernas namn inte är fullständiga; tabellen är ju inte
avsedd för skrapning och resultatet behöver därför ofta justeras. Vid
webbskrapning är det viktigt att respektera att syftet i allmänhet inte
är att dela data och därför inte belasta servrar i onödan. Upphovsrätten
till data kan även vara skyddat genom
[katalogskyddet](https://lagen.nu/1960:729#P49).

#### Kommunicera med en SQL-databas

[SQL](https://sv.wikipedia.org/wiki/Structured_Query_Language) är det
idag dominerande språket för att ställa frågor till relationsdatabaser.
Syntax är lik den vi lärt oss från `tidyverse`s `dplyr`-paket och med
den kunskapen är det inte svårt att lära sig ställa enkla frågor i SQL.
Här kommer vi dock använda paketet
[`dbplyr`](https://dbplyr.tidyverse.org/) som sköter översättningen till
databasens språk.

Innan vi kan ställa frågor till en databas behöver vi skapa en
anslutning med `DBI::dbConnect`. Vi ansluter här till en öppen
exempeldatabas `imdb_small` som innehåller ett mindre utrag ur
[IMDB](https://www.imdb.com/) (se [Relational Dataset
Repository](https://relational.fit.cvut.cz/) för en lista på deras öppna
databaser)

``` r
con <- DBI::dbConnect(
  RMariaDB::MariaDB(),
  host = "relational.fit.cvut.cz",
  port = 3306,
  username = "guest",
  password = "relational",
  db = "imdb_small"
)
```

Raden `RMariaDB::MariaDB()` anger hur vi skall ansluta, vilket beror på
vilken mjukvara som driver databasen. I det här fallet är det en
[MySQL](https://sv.wikipedia.org/wiki/MySQL)-databas som stöds av
R-paketet `RMariaDB` (se [DBI](https://dbi.r-dbi.org/) för alternativ).

Vi kan nu lista databasens tabeller med

``` r
DBI::dbListTables(con)
```
``` r
    ## [1] "actors"           "directors"        "directors_genres" "movies"          
    ## [5] "movies_directors" "movies_genres"    "roles"
```

och skapa en *virtuell* kopia av tabellen `movies` med

``` r
movies <- tbl(con, "movies")
movies
```
``` r
    ## # Source:   table<movies> [?? x 4]
    ## # Database: mysql  [guest@relational.fit.cvut.cz:NA/imdb_small]
    ##        id name             year  rank
    ##     <int> <chr>           <int> <dbl>
    ##  1  10920 Aliens           1986  8.20
    ##  2  17173 Animal House     1978  7.5 
    ##  3  18979 Apollo 13        1995  7.5 
    ##  4  30959 Batman Begins    2005 NA   
    ##  5  46169 Braveheart       1995  8.30
    ##  6 109093 Fargo            1996  8.20
    ##  7 111813 Few Good Men, A  1992  7.5 
    ##  8 112290 Fight Club       1999  8.5 
    ##  9 116907 Footloose        1984  5.80
    ## 10 124110 Garden State     2004  8.30
    ## # ℹ more rows
```

Här noterar vi att antalet rader i tabellen är listat som `??`, vilket
beror på att `dbplyr` ser till att bara hämta så mycket som är
nödvändigt för att visa tabellens inledande rader. Vill vi hämta hela
tabellen som en vanlig `tibble` använder vi `collect`

``` r
collect(movies)
```
``` r
    ## # A tibble: 36 × 4
    ##        id name             year  rank
    ##     <int> <chr>           <int> <dbl>
    ##  1  10920 Aliens           1986  8.20
    ##  2  17173 Animal House     1978  7.5 
    ##  3  18979 Apollo 13        1995  7.5 
    ##  4  30959 Batman Begins    2005 NA   
    ##  5  46169 Braveheart       1995  8.30
    ##  6 109093 Fargo            1996  8.20
    ##  7 111813 Few Good Men, A  1992  7.5 
    ##  8 112290 Fight Club       1999  8.5 
    ##  9 116907 Footloose        1984  5.80
    ## 10 124110 Garden State     2004  8.30
    ## # ℹ 26 more rows
```

Som ett exempel skapar vi en tabell över alla `Sci-Fi`-filmer i
databasen med

``` r
movies_genres <- tbl(con, "movies_genres")
movies_genres %>% 
  filter(genre == "Sci-Fi") %>% 
  left_join(movies, by = c("movie_id" = "id")) %>% 
  collect()
```
``` r
    ## # A tibble: 6 × 5
    ##   movie_id genre  name         year  rank
    ##      <int> <chr>  <chr>       <int> <dbl>
    ## 1    10920 Sci-Fi Aliens       1986  8.20
    ## 2   147603 Sci-Fi Hollow Man   2000  5.30
    ## 3   207992 Sci-Fi Matrix, The  1999  8.5 
    ## 4   254943 Sci-Fi Pi           1998  7.5 
    ## 5   313459 Sci-Fi Star Wars    1977  8.80
    ## 6   350424 Sci-Fi Vanilla Sky  2001  6.90
```

Vi kan även se den SQL-fråga som genererade resultatet med `show_query`

``` r
movies_genres %>% 
  filter(genre == "Sci-Fi") %>% 
  left_join(movies, by = c("movie_id" = "id")) %>% 
  show_query()
```
``` r
    ## <SQL>
    ## SELECT `LHS`.*, `name`, `year`, `rank`
    ## FROM (
    ##   SELECT *
    ##   FROM `movies_genres`
    ##   WHERE (`genre` = 'Sci-Fi')
    ## ) `LHS`
    ## LEFT JOIN `movies`
    ##   ON (`LHS`.`movie_id` = `movies`.`id`)
```
Slutligen avslutar vi med att stänga ned anslutningen för att inte
belasta servern i onödan

``` r
DBI::dbDisconnect(con)
```

Sammanfattningsvis

- Anslut till databasen med `DBI::dbConnect`.
- Lista tabeller med `DBI::dbListTables`.
- Skapa virtuella tabeller med `tbl`.
- Skriv din kod med virtuella tabelller och vanlig `tidyverse`-syntax.
- Avsluta med `collect`.
- Stäng anslutningen med `DBI::dbDisconnect`.

### Övningar

##### Nobel API

- Hämta alla pristagare
  ([Laureate](https://nobelprize.readme.io/docs/laureate)) och bestäm
  andelen män i varje priskategori.

##### SR API

Sveriges radio har ett [öppet API](https://sverigesradio.se/oppetapi)
där man bland annat kan hämta [låtlistor från en given kanal och
datum](https://sverigesradio.se/api/documentation/v2/metoder/musik.html).
Svaret ges dock inte i vanligt csv-format utan som
[XML](https://sv.wikipedia.org/wiki/XML) eller
[JSON](https://sv.wikipedia.org/wiki/JSON), vilket är vanligt då dessa
format är mer flexibla. Ofta är JSON enklare att arbeta med i R.

- Konstruera en funktion

``` r
get_songs <- function(channel, date){
  ...
}
```

som hämtar låtlistan för ett givet
[kanalnummer](http://api.sr.se/api/v2/channels/) och datum. Begär svaret
i JSON genom att avsluta anropet med `&format=json`. Du kan konvertera
det svar (`response`) du får av `GET` med
`content(response, "text") %>% jsonlite::fromJSON()`.

<!-- ##### Skrapa Dramaten -->
<!-- På [Dramatens arkiv Rollboken](https://www.dramaten.se/rollboken?detail=&type=search_type_all&search=) kan man söka efter uppgifter om deras produktioner. Eftersom de tabeller som genereras inte är i standardformat blir det enklast att skrapa varje variabel för sig. Namn på [uppsättningarna från 2021](https://www.dramaten.se/rollboken?detail=&type=search_type_years&search=2021) får vi t.ex. med -->
<!-- ```{r, echo = TRUE} -->
<!-- url <- "https://www.dramaten.se/rollboken?detail=&type=search_type_years&search=2021" -->
<!-- page <- read_html(url) -->
<!-- elements <- html_elements(page, css = ".play-name") -->
<!-- html_text(elements)[-1] -->
<!-- ``` -->
<!-- (här tar `[-1]` bort första elementet, rubriken). -->
<!-- - Identifiera CSS-väljare och skrapa övriga kolumner i tabellen. -->

##### Relational Dataset Repository

Anslut till valfri databas på [Relational Dataset
Repository](https://relational.fit.cvut.cz/) och prova ställa frågor som
ovan. En mer fulltändig version av IMDB finns till exempel i
`db = "imdb_ijs"`. Glöm inte stänga anslutningen när du är färdig.

------------------------------------------------------------------------

## **v32**: Mer om visualisering

### Kursmaterial

- Kieran Healy, *Data Visualization*, [Kapitel
  1](https://socviz.co/lookatdata.html).
- R4DS: [Kapitel
  28](https://r4ds.had.co.nz/graphics-for-communication.html).

### Övningar

- Gå igenom dina figurer från laborationer, kan de förbättras?
