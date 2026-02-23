---
layout: default
permalink: /Organised/
title: Organised Events
seo_title: Organised events of George Altmann in topology and knot theory
description: 
nav: true
nav_order: 3
---

## Organised Events

{% assign organised = site.organised | sort: "order" | reverse %}
{% for item in organised %}
- [{{ item.title }}]({{item.link}}), {{ item.institution }}, *{{ item.year }}*

  {{ item.content }}
{% endfor %}
