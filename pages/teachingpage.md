---
layout: default
permalink: /Teaching/
title: Teaching
description: 
nav: true
nav_order: 2
---

## Teaching

{% for item in site.teaching %}
    - **{{ item.year }}**: {{ item.title }}, {{ item.institution }}
{% endfor %}
