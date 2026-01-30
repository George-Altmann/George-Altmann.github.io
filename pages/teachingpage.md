---
layout: default
permalink: /Teaching/
title: Teaching
description: 
nav: true
nav_order: 2
---

## Teaching

{% assign teaching = site.teaching | sort: "order" %}
{% assign teaching_limit = 100 %}
{% for item in teaching limit: teaching_limit %}

- **{{ item.year }}**: {{ item.title }}, {{ item.institution }}

{% endfor %}
