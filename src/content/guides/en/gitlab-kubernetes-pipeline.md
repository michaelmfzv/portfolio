---
title: "A GitLab CI/CD pipeline with Kubernetes runners"
description: "A pattern for validation, image builds, and deployment while keeping credentials and production changes controlled."
lang: en
date: 2026-11-08
draft: false
tags: [GitLab CI/CD, Kubernetes, Automation]
---

## Delivery flow

Separate lint and tests, image build, analysis, and deployment. Each stage should publish versioned artifacts so deployment uses the same image that passed validation.

## Runners and credentials

Use isolated runners with least privilege. Keep secrets outside the repository and scope them by environment; protect branches and require approval for production.

## Verifiable deployment

Define readiness and health checks, record the deployed version, and keep a rollback strategy. Adapt the flow to the cluster configuration and team process.
