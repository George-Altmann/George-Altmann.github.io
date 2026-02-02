---
title: ""      
---

## About

I am currently a second year PhD student in the Algebra Group of the School of Mathematics, University of Leeds, supervised by Dr João Faria Martins (University of Leeds) and Dr Cristina Palmer-Anghel (Université Clermont Auvergne). My research mainly focuses on knot invariants, specifically invariants of welded links, and representations of the braid group and loop braid group. More generally I am intereseted in the fields of low-dimensional topology, representation theory, quantum topology and TQFTs.

My research is supported by the Programme Grant [Combinatorial Representation Theory: Discovering the Interfaces of Algebra with Geometry and Topology](https://sites.google.com/view/crt-leeds/home)

---

## [Recent & Upcoming Talks](/Talks/)

- [Combinatorial Approaches to the Yang–Baxter Equation](https://coybe25.github.io/schedule.html), Leeds, UK, *October 9, 2025*<br>
  Peripheral Systems for a subclass of welded graphs

- [Bucharest Topology Days](https://mdp.ac/seminars/Bucharest-topology-days/index.html), Bucharest, Romania, *July 21, 2025*<br>
  Enriching Welded Knot Groups via Loop Braid Group Representations

- [The Yang Baxter Equation and all that](https://sites.google.com/impan.pl/ybe), Będlewo, Poland, *June 17, 2025*<br>
  Lifting the Peripheral System to Welded Links

- [The Interplay Between Skew Braces and Hopf-Galois Theory](https://interplaysbhg.github.io/), Leeds, UK, *May 15, 2025*<br>
  A Higher Peripheral System for Welded Knots

- [Pure PGR Seminar](https://mathsseminars.leeds.ac.uk/seminars/2025-03-17-george-altmann-university-of-leeds/), Leeds, UK, *March 17, 2025*<br>
  Braid Groups and Their Representations

{% assign talks = site.talks | sort: "date" | reverse %}
{% for item in talks %}
<section>- [{{ item.title }}]({{ item.link }}), {{ item.location }}, *{{ item.date | date: "%B %-d, %Y" }}* </section>
  {{ item.content }}
{% endfor %}

---

## [Teaching](/Teaching/)

{% assign teaching = site.teaching | sort: "order" | reverse %}
{% for item in teaching limit: 3 %}
- {{ item.title }}, *{{ item.year }}*, {{ item.institution }}
{% endfor %}

---

## Seminars/Conferences Organised

- [Pure PGR Seminar](https://mathsseminars.leeds.ac.uk/seminarseries/pure-pgr/), Leeds, *2025-2026*
