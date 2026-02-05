---
layout: default
permalink: /Talks/
title: Conferences
description: 
nav: true
nav_order: 1
---

## Previous Talks

{% assign talks = site.talks | sort: "date" | reverse %}
{% for item in talks %}
- [{{ item.title }}]({{item.link}}), {{ item.location }}, *{{ item.date | date: "%B %-d, %Y" }}*
  Title: *{{ item.content }}*
{% endfor %}

