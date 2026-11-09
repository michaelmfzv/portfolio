---
title: "Seguridad de contenedores: prácticas para Docker y Podman"
description: "Una lista de controles para reducir privilegios, limitar la superficie de ataque y hacer más reproducibles las imágenes de contenedor."
lang: es
date: 2026-11-08
draft: false
tags: [Docker, Podman, Seguridad]
---

## Reducir privilegios

Ejecuta procesos como usuario no privilegiado cuando sea posible, limita capacidades y evita montar el socket del motor dentro del contenedor sin una necesidad justificada.

## Construir imágenes mantenibles

Usa imágenes base confiables y fijadas a una versión, elimina paquetes y archivos innecesarios, y analiza dependencias en el pipeline. No incluyas secretos en capas ni argumentos de build.

## Operar con controles

Define límites de recursos, aplica políticas de red y registra eventos relevantes. Revisa periódicamente las excepciones según el riesgo real de cada servicio.
