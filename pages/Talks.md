---
layout: default
permalink: /Talks/
title: Talks
description: 
nav: true
nav_order: 1
---
## Upcoming talks


## Past Talks

{% assign talks = site.talks | sort: "date" | reverse %}
{% for item in talks %}
- [{{ item.title }}]({{item.link}}), {{ item.location }}, *{{ item.date | date: "%B %-d, %Y" }}*
  {{ item.content }}
{% endfor %}

## Other conferences attended

