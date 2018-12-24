---
layout: post
title: Bayesian networks
---
We begin our study of probabilistic graphical models with the topic of *representation*.
The main question we want to address is the following: how do we define a probability distribution that models some real-world phenomenon of interest? This is not a trivial problem: we have seen that a naive model for classifying spam messages with $$n$$ possible words involves potentially up to $$O(2^n)$$ parameters. 