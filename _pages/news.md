---
layout: page
permalink: /Recent Talks/
title: Conferences and Talks
nav: true
nav_order: 2
---

<!-- Recent Talks -->
    {% if page.announcements and page.announcements.enabled %}
      <h2>
        <a href="{{ '/news/' | relative_url }}" style="color: inherit">Recent Talks</a>
      </h2>
      {% include news.liquid limit=true %}
    {% endif %}

    <!-- Conferences/Workshops Attended -->
    {% if page.announcements and page.announcements.enabled %}
      <h2>
        <a href="{{ '/conferences/' | relative_url }}" style="color: inherit">Conferences and Workshops Attended</a>
      </h2>
      {% include Conferences.liquid limit=true %}
    {% endif %}

    <!-- Conferences/Workshops Organised -->
    {% if page.announcements and page.announcements.enabled %}
      <h2>
        <a href="{{ '/conferences/' | relative_url }}" style="color: inherit">Conferences and Workshops Attended</a>
      </h2>
      {% include Conferencesorg.liquid limit=true %}
    {% endif %}







