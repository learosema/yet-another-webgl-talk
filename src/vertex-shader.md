---
title: Vertex Shader
layout: slide.njk
---

```glsl
precision highp float;
attribute vec4 position;

void main() {
  gl_Position = position;
}
```

- [precision highp float](https://webglfundamentals.org/webgl/lessons/webgl-precision-issues.html) - at least 32bit precision for float
- takes attributes from buffers and returns a position.
- the shader is run as many times as there's data
- the vertex position is set via `gl_Position`
- further calculations possible here, eg. perspective projection.
