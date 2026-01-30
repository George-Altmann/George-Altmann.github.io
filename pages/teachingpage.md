---
layout: default
permalink: /Teaching/
title: Teaching
description: 
nav: true
nav_order: 2
---

## Teaching

{% assign items = site.teaching | sort: "order" %}
{% for t in items %}

- **{{ t.title }}**, {{ t.year }}, {{ t.institution }}

{% endfor %}
