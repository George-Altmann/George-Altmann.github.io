---
title: ""      
---

## About

I am currently a second year PhD student in the Algebra Group of the School of Mathematics, University of Leeds, supervised by Dr João Faria Martins (University of Leeds) and Dr Cristina Palmer-Anghel (Université Clermont Auvergne). My research mainly focuses on knot invariants, specifically invariants of welded links, and representations of the braid group and loop braid group. More generally I am interested in the fields of low-dimensional topology, representation theory, quantum topology and TQFTs.

My research is supported by the Programme Grant [Combinatorial Representation Theory: Discovering the Interfaces of Algebra with Geometry and Topology](https://sites.google.com/view/crt-leeds/home)

---

## [Recent & Upcoming Talks](/Talks/)

{% assign talks = site.talks | sort: "date" | reverse %}
{% for item in talks limit: 3 %}
- [{{ item.title }}]({{item.link}}), {{ item.location }}, *{{ item.date | date: "%B %-d, %Y" }}*
  {{ item.content }}
{% endfor %}

---

## [Teaching](/Teaching/)

{% assign teaching = site.teaching | sort: "order" | reverse %}
{% for item in teaching limit: 3 %}
- {{ item.title }}, *{{ item.year }}*, {{ item.institution }}
{% endfor %}

---

## Organised Events

{% assign organised = site.organised | sort: "order" | reverse %}
{% for item in organised %}
- [{{ item.title }}]({{item.link}}), {{ item.institution }}, *{{ item.year }}*
{% endfor %}
