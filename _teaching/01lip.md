---
title: "01LIP -- Linear Programming (in Czech)"
local_title: "01LIP -- Lineární programování"
collection: teaching
type: "Lecture + Exercises"
local_type: "Akademický rok 2025/26, 2+1 z, zk"
header_lines:
  - "Akademický rok 2025/26, 2+1 z, zk; 3 kredity"
  - "Přednášky: Úterý T-209, 8:00"
  - "Cvičení: Vybrané pátky T-115, 8:00"
summary: "Introduction to linear programming: formulation, simplex, duality, sensitivity analysis, and applications."
permalink: /teaching/01lip
date: 2025-09-01
lang: cs
---

[Oficiální sylabus předmětu: Lineární programování (Bílá kniha)](https://bilakniha.cvut.cz/cs/predmet11339905.html#gsc.tab=0){:target="_blank" rel="noopener"}

Požadavky
======

- Zápočet: Udělen za splněnou docházku a úspěšné vyřešení zápočtového testu.
  - Detaily doplněny na cvičení.
  - <a class="btn lp-btn" href="{{ '/files/pokyny.pdf' | relative_url }}" download>Pokyny k vypracování úlohy</a>
- Zkouška: Teoretická a praktická část vybraná z obsahu probraného na přednáškách.
  - Zkouška je realizována písemnou formou -- skládá se ze **2 teoretických** a **1 praktické** otázky z níže dostupného seznamu.
  - Zkoušku lze skládat pouze se získaným zápočtem.
  - Na termíny zkoušek se přihlašujte v systému KOS.
  - <a class="btn lp-btn" href="{{ '/files/otazky.pdf' | relative_url }}" download>Seznam otázek ke zkoušce</a>

Osnova přednášek
======

<p style="color: red; text-align: justify;">V průběhu semestru budou postupně doplňovány studijní texty a otázky k jednotlivým přednáškám. Texty nicméně vznikají průběžně a mohou se v nich tak přirozeně objevovat překlepy, chyby, atd. Budu moc rád, když mi jakékoliv takové nedostatky ohlásíte! 🙂
<br>
<br>
Dále platí, že  již některé nahrané texty a otázky bude možná někdy potřeba modifikovat — v případě zásadních změn vás o tom samozřejmě včas informuji.
- 16.12.2025: úprava důkazu první implikace ve větě 3.2
</p>

<style>
.lp-date { margin: 0.25rem 0 0.85rem 0; }
.lp-date .label { color: #555; font-style: italic; font-weight: normal; margin-right: 0.35rem; }
.dark .lp-date .label,
html[data-theme="dark"] .lp-date .label { color: #ffffff; }
.lp-date .date { font-weight: 700; font-style: normal; }
.lp-date .date.past { color: #065f46; font-weight: 700; }
.lp-date .date + .btn { margin-left: 0.25rem; }
.lp-date .btn + .btn { margin-left: 0.25rem; }
.lp-date .btn,
.lp-date .btn-questions,
.btn.lp-btn { background-color: #9b9b9b; border-color: #9b9b9b; color: #111; }
.lp-date .btn:hover,
.lp-date .btn:focus,
.lp-date .btn-questions:hover,
.lp-date .btn-questions:focus,
.btn.lp-btn:hover,
.btn.lp-btn:focus { background-color: #8c8c8c; border-color: #8c8c8c; color: #111; }
html[data-theme="dark"] .lp-date .btn,
html[data-theme="dark"] .lp-date .btn-questions,
html[data-theme="dark"] .btn.lp-btn {
  color: #181818;
}
</style>

1. Formulace úlohy lineárního programování, převody omezení, příklady úloh.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date past">23/09/2025</span> <a class="btn" href="{{ '/files/pr01.pdf' | relative_url }}" download>Studijní text k přednášce 1 (PDF)</a> </div>
2. Vlastnosti úloh lineárního programování, množina přípustných a optimálních řešení a jejich vlastnosti, geometrie úloh LP.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date past">30/09/2025</span> <a class="btn" href="{{ '/files/pr02.pdf' | relative_url }}" download>Studijní text k přednášce 2 (PDF)</a> </div>
3. Základní věta LP, grafické řešení úloh LP.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date past">07/10/2025</span> <a class="btn" href="{{ '/files/pr03.pdf' | relative_url }}" download>Studijní text k přednášce 3 (PDF)</a></div>
4. Simplexový algoritmus — jednofázová metoda, neomezenost úlohy, více optimálních řešení.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date past">14/10/2025</span> <a class="btn" href="{{ '/files/pr04.pdf' | relative_url }}" download>Studijní text k přednášce 4 (PDF)</a></div>
5. Simplexový algoritmus — dvoufázová metoda (technika pomocné báze), M‑úloha.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date past">21/10/2025</span> <a class="btn" href="{{ '/files/pr05.pdf' | relative_url }}" download>Studijní text k přednášce 5 (PDF)</a></div>
6. Vlastnosti simplexové metody — degenerace, cyklení, časová náročnost algoritmu.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date past">04/11/2025</span> <a class="btn" href="{{ '/files/pr06.pdf' | relative_url }}" download>Studijní text k přednášce 6 (PDF)</a></div>
7. Dualita úloh lineárního programování — formulace duální úlohy, věty o dualitě.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date past">11/11/2025</span> <a class="btn" href="{{ '/files/pr07.pdf' | relative_url }}" download>Studijní text k přednášce 7 (PDF)</a></div>
8. Algoritmus duálně‑simplexové metody.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date past">18/11/2025</span> <a class="btn" href="{{ '/files/pr08.pdf' | relative_url }}" download>Studijní text k přednášce 8 (PDF)</a></div>
9. Dopravní problém — metoda MODI.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date past">25/11/2025</span> <a class="btn" href="{{ '/files/pr09.pdf' | relative_url }}" download>Studijní text k přednášce 9 (PDF)</a></div>
10. Aplikace v teorii her — maticové hry s nulovým součtem, smíšené strategie, min‑max teorém.
    <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date past">02/12/2025</span> <a class="btn" href="{{ '/files/pr10.pdf' | relative_url }}" download>Studijní text k přednášce 10 (PDF)</a></div>
11. Algoritmy celočíselného programování — typické úlohy LIP, metoda větví a mezí.
    <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date past">09/12/2025</span> <a class="btn" href="{{ '/files/pr11.pdf' | relative_url }}" download>Studijní text k přednášce 11 a 12 (PDF)</a></div>
12. Algoritmy celočíselného programování — Gomoryho řezy.
    <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date past">16/12/2025</span><a class="btn" href="{{ '/files/pr11.pdf' | relative_url }}" download>Studijní text k přednášce 11 a 12 (PDF)</a></div>

Osnova cvičení
======

1. Řešení úloh LP na počítači — softwarové nástroje a jejich použití.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date past">03/10/2025</span> <a class="btn" href="{{ '/files/cv1.zip' | relative_url }}" download>Úlohy ke cvičení 1</a> <a class="btn" href="{{ '/files/cv1-text.pdf' | relative_url }}" download>Text k úlohám</a></div>
2. Úloha lineárního programování, podmínka optimality a neomezenost.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date past">17/10/2025</span> <a class="btn" href="{{ '/files/cv2.zip' | relative_url }}" download>Úlohy ke cvičení 2</a></div>
3. Simplexová metoda — základní kroky algoritmu, různé situace při řešení; dvoufázová simplexová metoda (technika pomocné báze, M‑úloha); duální simplexová metoda.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date past">31/10/2025</span></div>
4. Příklad z teorie her — hledání smíšených strategií.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date past">14/11/2025</span> <a class="btn" href="{{ '/files/cv04.zip' | relative_url }}" download>Text a úloha ke cvičení</a></div>
5. Gomoryho algoritmus a další algoritmy LIP (metoda větví a mezí).
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date past">28/11/2025</span> <a class="btn" href="{{ '/files/cv05.zip' | relative_url }}" download>Úlohy ke cvičení 5</a></div>
6. Kvadratické programování.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date past">12/12/2025</span></div>
