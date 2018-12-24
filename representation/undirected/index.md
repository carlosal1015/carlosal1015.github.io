---
layout: post
title: Markov random fields
---

## Markov Random Fields

{% marginfigure 'nb1' 'assets/img/mrf.png' 'Undirected graphical representation of a joint probability of voting preferences over four individuals. The figure on the right illustrates the pairwise factors present in the model.'%} As a motivating example, suppose that we model the distribution of political voting preferences among persons $$A,B,C,D$$. Let's say that $$(A,B)$$, $$(B,C)$$, $$(C,D)$$, and $$(D,A)$$ are friends, and friends tend to have similar voting preferences. These influences can be naturally represented by a directed graph

One way to define a probability over the joint voting decision of $$A,B,C,D$$ is to assign scores to each assignment to these variables and then define a probability as a normalized score. A score can be any function, but in our case, we will define it to be of the form
{% math %} 
\tilde p(A,B,C,D) = \phi(A,B)\phi(B,C)\phi(C,D)\phi(D,A), 
{% endmath %}
where $$\phi(X,Y)$$ is a factor that assigns weights more consistent votes between friends $$X,Y$$, for example:
{% math %} 
\begin{align*}
\phi(A,B) = 
\begin{cases}
10 & \text{ if}\; X = Y = 1 \\
5 & \text{ if}\; X = Y = 0 \\
1 & \text{ otherwise}.
\end{cases}
\end{align*}
{% endmath %} 
The factors in the unnormalized distribution are often referred to as *potentials*.
The final probability is then defined as
{% math %}
p(A,B,C,D) = \frac{1}{Z} \tilde p(A,B,C,D),
{% endmath %}
where $$ Z = \sum_{A,B,C,D} \tilde p(A,B,C,D) $$ is a normalizing constant that ensures that the distribution sums to one.

When normalized, we can view $$\phi(A,B)$$ as an interaction term between friends that pushes them $$B$$'s vote closer to that of $$A$$. The term $$\phi(B,C)$$ pushes $$B$$'s vote closer to $$C$$, and the most likely vote will require reconciling these potentially conflicting influences.

Note that compared to the directed case, we are no longer describing how one variable is generated from another set of variables (as a conditional probability distribution would do); we simply indicate a relative coupling strength between dependent neighbors in the graph. In a sense, this requires less prior knowledge from our part, as we no longer have to specify a full generative story (via a probability) of how the vote of $$B$$ is constructed from the vote of $$A$$ (which we would need to do if we had a $$P(B\mid A)$$ factor). Instead, we simply identify dependent variables, define the strength of their interactions via arbitrary couplings, which in turn defines an energy landscape over the space of possible assignments; finally we convert this energy to a probability via a normalization constant.

### Formal definition

A Markov Random Field (MRF) is a probability distribution $$p$$ over variables $$x_1,...,x_n$$ defined by an *undirected* graph $$G$$ in which nodes correspond to variables $$x_i$$. The probability $$p$$
has the form
{% math %}
p(x_1,..,x_n) = \frac{1}{Z} \prod_{c \in C} \phi_c(x_c),
{% endmath %}
where $$C$$ denotes the set of *cliques* (i.e. fully connected subgraphs) of $$G$$.
The value
{% math %} 
Z = \sum_{x_1,..,x_n}\prod_{c \in C} \phi_c(x_c) 
{% endmath %}
is a normalizing constant that ensures that the distribution sums to one.

Thus, given a graph $$G$$, our probability distribution may contain factors whose scope is any clique in $$G$$, which can be a single node, an edge, a triangle, etc. Note that we do not need to specify a factor for each clique. In our above example, we defined a factor over each edge (which is a clique of two nodes). However, we chose not to specify any unary potentials i.e. cliques over single nodes (although they can be easily incorporated within e.g. edge cliques).

### Comparison to Bayesian networks

{% marginfigure 'nb1' 'assets/img/mrf2.png' 'Examples of directed models for our four-variable voting example. None of them can accurately express our prior knowledge about the dependency structure among the variables.'%}
In our earlier voting example, we had a distribution over $$A,B,C,D$$ that satisfied $$A \perp C \mid  \{B,D\}$$ and $$B \perp D \mid  \{A,C\}$$