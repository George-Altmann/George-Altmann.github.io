---
layout: default
permalink: /Teaching/
title: Teaching
description: 
nav: true
nav_order: 2
---

## Modules Taught

{% assign teaching = site.teaching | sort: "order" | reverse %}
{% for item in teaching %}
- {{ item.title }}, *{{ item.year }}* , {{ item.institution }}
{% endfor %}

## Other teaching Experience

I have a PGCE Secondary Education 11-18 Mathematics with QTS from Leeds Beckett University, and experience teaching mathematics in UK secondary schools.
