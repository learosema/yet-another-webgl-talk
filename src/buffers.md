---
title: Buffers
layout: slide.njk
---
- pass any kind of data to your shaders, most commonly a bunch of floats.
- specify how many items are used per record, most commonly 2 floats for 2D data, 3 floats for 3D data
- These are processed inside the vertex shader to make up points, lines or triangles
- If you pass 6 floats, using 2 floats to make up 2D points, the vertex shader is executed 3 times
- highly parallelized manner
