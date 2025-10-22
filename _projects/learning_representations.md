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
tags: ["LSTM training"]
tagline: "Reproducing universal sentence representations using Natural Language Inference."
callouts:
  - "📖 Reproducibility Project"
year: "2025"
institution: "University of Amsterdam"
role: 
links:
  - label: "GitHub Repo"
    url: "https://github.com/MaxBelitsky/atcs-nli"
    icon: "fab fa-github"
# overview:
#   what: >
#     I reimplemented the InferSent approach from Conneau et al. to learn universal sentence
#     representations from SNLI and MultiNLI, treating the reproduction as a deep-dive into the paper’s
#     hidden assumptions.
#   why: 
# details:
#   contribution: >
#     I recreated the training pipeline end-to-end, rebuilt the preprocessing stack, and instrumented
#     evaluation scripts that benchmark transfer performance on the suite of downstream NLP tasks.
#   architecture: >
#     I implemented bi-directional LSTM encoders with max pooling, matched the original hyperparameters,
#     and packaged the experiments so peers can compare new baselines reproducibly.
#   tools:
#     - PyTorch
#     - SNLI
#     - MultiNLI
#     - scikit-learn
#     - TensorBoard
#   results: 
---
