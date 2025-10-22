---
layout: project
title: Learning Sentence Representations with NLI
description: "Reproduction of the results from \"Supervised Learning of Universal Sentence Representations from Natural Language Inference Data\" paper by Conneau et al. (2018)."
short_description: "Reproduction of the results from \"Supervised Learning of Universal Sentence Representations from Natural Language Inference Data\" paper by Conneau et al. (2018)"
img: assets/img/nli.png
importance: 3
category: learning
media_links:
  - title: "Code"
    url: "https://github.com/MaxBelitsky/atcs-nli"
    type: "code"
tags: ["encoder fine-tuning"]
tagline: "Reproducing universal sentence representations using Natural Language Inference."
callouts:
  - "🧠 Research Project"
year: "2019"
role: "Researcher"
links:
  - label: "GitHub Repo"
    url: "https://github.com/MaxBelitsky/atcs-nli"
    icon: "fab fa-github"
overview:
  what: >
    I reimplemented the InferSent approach from Conneau et al. to learn universal sentence
    representations from SNLI and MultiNLI, treating the reproduction as a deep-dive into the paper’s
    hidden assumptions.
  why: >
    Durable sentence embeddings unlock downstream NLP work with less data. Reproducing landmark work
    keeps me honest about what it takes to rebuild state-of-the-art research from scratch.
details:
  contribution: >
    I recreated the training pipeline end-to-end, rebuilt the preprocessing stack, and instrumented
    evaluation scripts that benchmark transfer performance on the suite of downstream NLP tasks.
  architecture: >
    I implemented bi-directional LSTM encoders with max pooling, matched the original hyperparameters,
    and packaged the experiments so peers can compare new baselines reproducibly.
  tools:
    - PyTorch
    - SNLI
    - MultiNLI
    - scikit-learn
    - TensorBoard
  results: >
    I achieved transfer performance within the paper’s reported variance and published configuration
    recipes that classmates and collaborators now reference when extending the work.
reflection:
  learnings: >
    Faithful reproduction highlights the subtle implementation details—tokenization, optimizer
    schedules, regularization—that often go unstated in publications.
  next_time: >
    Automate evaluation across more modern benchmarks and explore contrastive objectives to compare
    against NLI supervision.
---
