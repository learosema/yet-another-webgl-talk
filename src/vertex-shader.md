---
title: Vertex Shader
layout: slide.njk
---

```glsl
attribute vec4 position;

void main() {
  gl_Position = position;
}
```

- takes attributes from buffers and returns a position.
- the shader is run as many times as there's data
- the vertex position output via `gl_Position`
- further calculations possible here, eg. perspective projection.