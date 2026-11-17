---
layout: project
title: Retrieval Evaluator
description: Test retrieval on chunks from your production database. If you don’t have evaluation queries yet, generate a starter dataset from those same chunks.
img: assets/img/retrieval_evaluator.png
importance: 1
category: open_source
callouts:
  - Python toolkit
links:
  - label: GitHub repository
    url: https://github.com/MaxBelitsky/retrieval-evaluator
    icon: fab fa-github
  - label: Install from PyPI
    url: https://pypi.org/project/retrieval-evaluator/
    icon: fab fa-python
overview:
  what: >
    Connect to a Weaviate or Qdrant collection, or load a JSONL export of your chunks.
    If you’re starting without queries, the toolkit samples documents, generates
    questions from their chunks, and pairs each question with the chunk it came from.
    Review those pairs, then compare how often different embedding models retrieve
    the expected chunk.
  why: >
    A public benchmark can’t tell you whether a model will find the right passage
    among dozens of similar chunks in your own collection. Using production chunks
    keeps your terminology and chunk boundaries in the test. Generated questions
    give you a first comparison while you’re still collecting real user queries.
---
