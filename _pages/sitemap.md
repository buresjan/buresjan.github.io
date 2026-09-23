---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

## Pages

- [About]({{ '/' | relative_url }})
- [Teaching]({{ '/teaching/' | relative_url }})
- [CV]({{ '/cv/' | relative_url }})

## Course pages

{% for course in site.teaching reversed %}
- [{{ course.title | replace: '--', '–' }}]({{ course.url | relative_url }}){% if course.status == 'inactive' %} — inactive{% endif %}
{% endfor %}

[XML sitemap]({{ '/sitemap.xml' | relative_url }})
