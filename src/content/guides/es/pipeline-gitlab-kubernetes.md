---
title: "Pipeline CI/CD con GitLab Runner y Kubernetes"
description: "Un esquema para organizar etapas de validación, construcción y despliegue, manteniendo credenciales y cambios de producción bajo control."
lang: es
date: 2026-11-08
draft: false
tags: [GitLab CI/CD, Kubernetes, Automatización]
---

## Flujo de entrega

Separa lint y pruebas, construcción de imagen, análisis y despliegue. Cada etapa debe publicar artefactos versionados para que el despliegue use la misma imagen que pasó las validaciones.

## Runner y credenciales

Usa runners aislados con permisos mínimos. Gestiona secretos fuera del repositorio y limítalos por entorno; protege las ramas y exige aprobación para producción.

## Despliegue verificable

Define readiness y health checks, registra la versión desplegada y conserva una estrategia de reversión. Ajusta el flujo a la configuración real del clúster y al proceso del equipo.
