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
  - TBA. Detaily doplněny na cvičení.
- Zkouška: Teoretická a praktická část vybraná z obsahu probraného na přednáškách.
  - TBA. Detaily ke konkrétním otázkám budou doplněny.

Osnova přednášek
======

<p style="color: red; text-align: justify;">V průběhu semestru budou postupně doplňovány studijní texty a otázky k jednotlivým přednáškám. Texty nicméně vznikají průběžně a mohou se v nich tak přirozeně objevovat překlepy, chyby, atd. Budu moc rád, když mi jakékoliv takové nedostatky ohlásíte! 🙂</p>

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
.lp-date .btn-questions { background-color: #9b9b9b; border-color: #9b9b9b; color: #111; }
.lp-date .btn:hover,
.lp-date .btn:focus,
.lp-date .btn-questions:hover,
.lp-date .btn-questions:focus { background-color: #8c8c8c; border-color: #8c8c8c; color: #111; }
html[data-theme="dark"] .lp-date .btn,
html[data-theme="dark"] .lp-date .btn-questions {
  color: #181818;
}
</style>

1. Formulace úlohy lineárního programování, převody omezení, příklady úloh.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date past">23/09/2025</span> <a class="btn" href="{{ '/files/slides1.pdf' | relative_url }}" download>Studijní text k přednášce 1 (PDF)</a> <a class="btn btn-questions" href="{{ '/files/slides2.pdf' | relative_url }}" download>Otázky k přednášce 1 (PDF)</a></div>
2. Vlastnosti úloh lineárního programování, množina přípustných a optimálních řešení a jejich vlastnosti, geometrie úloh LP.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date past">30/09/2025</span> <a class="btn" href="{{ '/files/slides1.pdf' | relative_url }}" download>Studijní text k přednášce 2 (PDF)</a> <a class="btn btn-questions" href="{{ '/files/slides2.pdf' | relative_url }}" download>Otázky k přednášce 2 (PDF)</a></div>
3. Základní věta LP, grafické řešení úloh LP.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date">07/10/2025</span></div>
4. Simplexový algoritmus — jednofázová metoda, neomezenost úlohy, více optimálních řešení.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date">14/10/2025</span></div>
5. Simplexový algoritmus — dvoufázová metoda (technika pomocné báze), M‑úloha.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date">21/10/2025</span></div>
6. Vlastnosti simplexové metody — degenerace, cyklení, časová náročnost algoritmu.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date">04/11/2025</span></div>
7. Dualita úloh lineárního programování — formulace duální úlohy, věty o dualitě.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date">11/11/2025</span></div>
8. Algoritmus duálně‑simplexové metody.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date">18/11/2025</span></div>
9. Dopravní problém — metoda MODI.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date">25/11/2025</span></div>
10. Aplikace v teorii her — maticové hry s nulovým součtem, smíšené strategie, min‑max teorém.
    <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date">02/12/2025</span></div>
11. Algoritmy celočíselného programování — typické úlohy LIP, metoda větví a mezí.
    <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date">09/12/2025</span></div>
12. Algoritmy celočíselného programování — Gomoryho řezy.
    <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date">16/12/2025</span></div>

Osnova cvičení
======

1. Řešení úloh LP na počítači — softwarové nástroje a jejich použití.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date">03/10/2025</span></div>
2. Úloha lineárního programování, podmínka optimality a neomezenost.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date">17/10/2025</span></div>
3. Simplexová metoda — základní kroky algoritmu, různé situace při řešení; dvoufázová simplexová metoda (technika pomocné báze, M‑úloha); duální simplexová metoda.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date">31/10/2025</span></div>
4. Příklad z teorie her — hledání smíšených strategií.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date">14/11/2025</span></div>
5. Gomoryho algoritmus a další algoritmy LIP (metoda větví a mezí).
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date">28/11/2025</span></div>
6. Kvadratické programování.
   <div class="lp-date"><span class="label">Předpokládané datum:</span> <span class="date">12/12/2025</span></div>
