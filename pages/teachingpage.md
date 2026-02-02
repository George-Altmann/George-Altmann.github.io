---
layout: default
permalink: /Teaching/
title: Teaching
description: 
nav: true
nav_order: 2
---

## Teaching

{% assign teaching = site.teaching | sort: "order" | reverse %}
{% for item in teaching %}
- {{ item.title }}, *{{ item.year }}* , {{ item.institution }}
{% endfor %}
