---
layout: page
title: projects
permalink: /projects/
description: # A growing collection of your cool projects.
nav: true
nav_order: 3
display_categories: [work, personal_learning, open_source]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <div class="projects-category-nav">
    <span class="projects-category-nav__label">Browse:</span>
    <div class="projects-category-nav__chips">
      {% for category in page.display_categories %}
        {% assign normalized_category = category | replace: "_", " " %}
        <a class="projects-category-chip" href=".#{{ category }}">
          {% if category == "personal_learning" %}
            Personal/Learning
          {% else %}
            {{ normalized_category | capitalize }}
          {% endif %}
        </a>
      {% endfor %}
    </div>
  </div>
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  {% assign normalized_category = category | replace: "_", " " %}
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% if categorized_projects.size == 0 %}
    {% assign categorized_projects = site.projects | where: "category", normalized_category %}
  {% endif %}
  {% if category == "personal_learning" and categorized_projects.size == 0 %}
    {% assign personal_projects = site.projects | where: "category", "personal" %}
    {% assign learning_projects = site.projects | where: "category", "learning" %}
    {% assign categorized_projects = personal_projects | concat: learning_projects %}
  {% endif %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  {% if sorted_projects.size > 0 %}
    <section class="project-category-group" id="{{ category }}">
      <div class="project-category-header">
        <h2 class="category">
          {% if category == "personal_learning" %}
            Personal/Learning
          {% else %}
            {{ normalized_category | capitalize }}
          {% endif %}
        </h2>
        <span class="project-category-count">
          {% if sorted_projects.size == 1 %}
            1 project
          {% else %}
            {{ sorted_projects.size }} projects
          {% endif %}
        </span>
      </div>
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
      <div class="row row-cols-1 row-cols-md-3">
        {% for project in sorted_projects %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
  {% endif %}
    </section>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
