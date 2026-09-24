---
title: "01LIP & 01YLIP – Lineární programování / Linear Programming"
local_title: "01LIP – Lineární programování"
collection: teaching
type: "Lecture + Exercises"
local_type: "Akademický rok 2026/27, 2+1 z, zk"
header_lines:
  - "Akademický rok 2026/27, 2+1 z, zk; 3 kredity"
  - "Přednášky: pátek 9:00–10:40, T-301"
  - "Cvičení: vybrané pátky 11:00–11:50, T-115"
summary: "Úvod do lineárního programování: formulace úloh, simplexová metoda, dualita, analýza citlivosti a aplikace. / Introduction to linear programming: problem formulation, the simplex method, duality, sensitivity analysis, and applications."
permalink: /teaching/01lip
date: 2026-09-01
lang: cs
---

[Oficiální sylabus předmětu: Lineární programování (Bílá kniha)](https://bilakniha.cvut.cz/cs/predmet11339905.html#gsc.tab=0){:target="_blank" rel="noopener"}

Požadavky
======

- Zápočet: Udělen za samostatné vypracování zápočtového projektu a krátkou individuální obhajobu.
  - Účast na cvičení je nepovinná. Samostatný zápočtový test se nekoná.
  - Cílem projektu je sestavit, vyřešit a ověřit model lineárního nebo smíšeného celočíselného programování (LP/MILP). Lze odevzdat komentovaný Jupyter notebook s uloženými výsledky **nebo** stručný PDF dokument a kód či editovatelný výpočetní soubor.
  - Podrobné požadavky stanovují platné pokyny: <a class="btn lp-btn" href="{{ '/files/pokyny.pdf' | relative_url }}" download>Pokyny k vypracování úlohy</a>
  - Deadline odevzdání je **14. 5. 2027**.
- Zkouška: Teoretická a praktická část vybraná z obsahu probraného na přednáškách.
  - Zkouška je realizována písemnou formou -- skládá se ze **2 teoretických** a **1 praktické** otázky z níže dostupného seznamu.
  - Zkoušku lze skládat pouze se získaným zápočtem. 
  - Přihlásit se na zkoušku můžete i bez zápočtu v systému KOS, před skládáním zkoušky je však nutné formálně odevzdat zápočtový program, tj. zaslat přednášejícímu svou práci alespoň 1 den před termínem zkoušky + absolvovat krátkou konzultaci k programu (konzultace lze individuálně domluvit i na den zkouškového termínu).
  - Na termíny zkoušek se přihlašujte v systému KOS.
  - Zkoušku bude možné v omezené kapacitě skládat i během LS / v letním zkouškovém období (pro tuto variantu kontaktujte přednášejícího).
  - <a class="btn lp-btn" href="{{ '/files/otazky.pdf' | relative_url }}" download>Seznam otázek ke zkoušce</a>

Osnova přednášek
======

K předmětu je k dispozici ucelený studijní text.

<a class="btn lp-btn" href="{{ '/files/01LIP.pdf' | relative_url }}" download>Studijní text k předmětu (01LIP.pdf)</a>

<style>
.btn.lp-btn { background-color: #9b9b9b; border-color: #9b9b9b; color: #111 !important; }
.btn.lp-btn:hover,
.btn.lp-btn:focus { background-color: #8c8c8c; border-color: #8c8c8c; color: #111 !important; }
html[data-theme="dark"] .btn.lp-btn {
  color: #181818 !important;
}
</style>

1. Formulace úlohy lineárního programování, převody omezení, příklady úloh.
2. Vlastnosti úloh lineárního programování, množina přípustných a optimálních řešení a jejich vlastnosti, geometrie úloh LP.
3. Základní věta LP, grafické řešení úloh LP.
4. Simplexový algoritmus — jednofázová metoda, neomezenost úlohy, více optimálních řešení.
5. Simplexový algoritmus — dvoufázová metoda (technika pomocné báze), M‑úloha.
6. Vlastnosti simplexové metody — degenerace, cyklení, časová náročnost algoritmu.
7. Dualita úloh lineárního programování — formulace duální úlohy, věty o dualitě.
8. Algoritmus duálně‑simplexové metody.
9. Dopravní problém — metoda MODI.
10. Aplikace v teorii her — maticové hry s nulovým součtem, smíšené strategie, min‑max teorém.
11. Algoritmy celočíselného programování — typické úlohy LIP, metoda větví a mezí.
12. Algoritmy celočíselného programování — Gomoryho řezy.

Osnova cvičení
======

1. Řešení úloh LP na počítači - softwarové nástroje a jejich použití.
2. Úloha lineárního programování, podmínka optimality a neomezenost.
3. Simplexová metoda - základní kroky algoritmu, různé situace při řešení.
4. Dvoufázová simplexová metoda - algoritmus techniky pomocné báze, varianta řešení pomocí M-úlohy.
5. Duální simplexová metoda.
6. Příklad z teorie her - hledání smíšených strategií.
7. Gomoryho algoritmus a další algoritmy LIP (metoda větví a mezí).
8. Kvadratické programování.

---

<div lang="en" markdown="1">

# 01YLIP – Linear Programming
{: #english }

*Academic year 2026/27, 2+1, course credit and examination; 3 ECTS credits*

- Lectures: Friday 9:00–10:40, T-301
- Exercises: selected Fridays 11:00–11:50, T-115

[Official course syllabus: Linear Programming (White Book)](https://bilakniha.cvut.cz/en/predmet11339905.html#gsc.tab=0){:target="_blank" rel="noopener"}

## Requirements

- Course credit: Awarded for an independently completed course project and a short individual oral defense.
  - Exercise attendance is optional. There is no separate course-credit test.
  - The project aims to formulate, solve, and validate a linear or mixed-integer linear programming model (LP/MILP). Submit an annotated Jupyter notebook with saved results **or** a short PDF document together with code or an editable computational file.
  - The current guidelines specify the detailed requirements: <a class="btn lp-btn" href="{{ '/files/pokyny_en.pdf' | relative_url }}" download>Course project guidelines</a>
  - The submission deadline is **14 May 2027**.
- Examination: Theoretical and practical material covered in the lectures.
  - The examination is written and consists of **2 theoretical questions** and **1 practical problem** from the list available below.
  - Course credit is required before taking the examination.
  - You may register for an examination date before your course credit is recorded in KOS. Before taking the examination, however, you must formally submit your course project by sending it to the lecturer at least 1 day before the examination date and attend a short consultation about the project (a consultation on the examination day itself may be arranged individually).
  - Register for examination dates in KOS.
  - A limited number of examination places will also be available during the summer semester / summer examination period (contact the lecturer if you wish to use this option).
  - <a class="btn lp-btn" href="{{ '/files/01LIP-exam-questions-en.pdf' | relative_url }}" download>List of examination questions</a>

## Lecture outline

A complete set of lecture notes is available for the course.

<a class="btn lp-btn" href="{{ '/files/01LIP-en.pdf' | relative_url }}" download>Course lecture notes (01LIP-en.pdf)</a>

1. Formulating linear programming problems, converting constraints, and examples.
2. Properties of linear programming problems: feasible and optimal solution sets, their properties, and the geometry of LP.
3. The fundamental theorem of LP and graphical solution methods.
4. The simplex algorithm — the one-phase method, unboundedness, and multiple optimal solutions.
5. The simplex algorithm — the two-phase method (auxiliary basis technique) and the big-M method.
6. Properties of the simplex method — degeneracy, cycling, and computational complexity.
7. Linear programming duality — formulating the dual problem and duality theorems.
8. The dual simplex algorithm.
9. The transportation problem — the MODI method.
10. Applications to game theory — zero-sum matrix games, mixed strategies, and the minimax theorem.
11. Integer programming algorithms — typical integer programming problems and branch and bound.
12. Integer programming algorithms — Gomory cuts.

## Exercise outline

1. Computer-based solutions of LP problems: choosing and using software tools.
2. LP problems: testing optimality and identifying unboundedness.
3. Working through the simplex algorithm and the different cases that arise during its execution.
4. Finding an auxiliary basis with the two-phase simplex algorithm; the alternative big-M approach.
5. Applying the dual simplex algorithm.
6. A game-theoretic example: determining mixed strategies.
7. Integer programming methods: Gomory's algorithm and branch and bound.
8. Quadratic optimization problems.

</div>
