---
layout: project
title: Cross-Lingual Subnetworks
description: "Investigating cross-lingual subnetworks in multilingual models"
img: assets/img/cross-lingual-subnets.jpg
importance: 3
category: learning
short_description: "Investigating cross-lingual subnetworks in multilingual models."
featured: false
media_links:
  - title: "Code"
    url: "https://github.com/MaxBelitsky/cross-lingual-subnetworks"
    type: "code"
tags: ["RoBERTa encoder fine-tuning"]
tagline: "Investigating computation sharing across languages in multilingual Transformers."
callouts:
  - "🧠 Research Project"
year: "2025"
institution: "University of Amsterdam"
role: 
links:
  - label: "GitHub Repo"
    url: "https://github.com/MaxBelitsky/cross-lingual-subnetworks"
    icon: "fab fa-github"
# overview:
#   what: >
#     I set out to uncover how much computation multilingual Transformers actually share across
#     languages. The work centers on carving out language-specific subnetworks from XLM-R and
#     measuring how those slices overlap and transfer.
#   why: >
#     Proving real cross-lingual reuse helps me advocate for inclusive NLP systems—if we can lean
#     on shared capacity, we can serve low-resource languages without the cost of training bespoke
#     models from scratch.
# details:
#   contribution: >
#     I designed the experiment suite, implemented the pruning pipeline, and built the evaluation
#     harness that stress-tested each pruned subnet across held-out languages.
#   architecture: >
#     I fine-tuned XLM-R, instrumented structured magnitude pruning, and captured layer-wise
#     subnetworks for every language before benchmarking transfer performance on parallel corpora
#     and zero-shot scenarios.
#   tools:
#     - PyTorch
#     - Hugging Face Transformers
#     - XLM-R
#     - Weights & Biases
#   results: >
#     The analysis revealed substantial overlap between subnetworks and showed that several pruned
#     slices generalize to unseen languages with only single-digit accuracy drops—evidence I now use
#     in talks about multilingual efficiency.
---
