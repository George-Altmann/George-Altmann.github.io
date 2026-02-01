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
{% for item in teaching %}
    - **{{ item.year }}**: {{ item.title }}, {{ item.institution }}
{% endfor %}
