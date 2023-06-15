---
title: Pass Data from vertex to fragment shader
layout: slide.njk
---
- `attribute` are only available in the vertex shader
- they can be passed via `varying` variables
- declare it in both fragment and vertex shaders
- assign it in the vertex shader
- the values are interpolated in the fragment shader
