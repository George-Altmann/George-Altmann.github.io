---
layout: default
permalink: /Talks/
title: Conferences
seo_title: Conferences and talks of George Altmann in topology and knot theory
description: 
nav: true
nav_order: 1
---

## Previous Talks

{% assign talks = site.talks | sort: "date" | reverse %}
{% for item in talks %}

- [{{ item.title }}]({{item.link}}), {{ item.location }}, *{{ item.date | date: "%B %-d, %Y" }}*
  {{ item.content }}

{% endfor %}

## Other Presented Work

{% assign other = site.posters | sort: "date" | reverse %}
{% for item in other %}

- [{{ item.title }}]({{item.link}}), {{ item.location }}, *{{ item.date | date: "%B %-d, %Y" }}*
  {{ item.content }}

{% endfor %}
