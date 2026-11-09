---
title: "Container security: practical Docker and Podman controls"
description: "A set of controls to reduce privileges, limit attack surface, and make container images more reproducible."
lang: en
date: 2026-11-08
draft: false
tags: [Docker, Podman, Security]
---

## Reduce privileges

Run processes as a non-root user where possible, limit capabilities, and avoid mounting the engine socket inside a container without a justified need.

## Build maintainable images

Use trusted, version-pinned base images, remove unnecessary packages and files, and scan dependencies in the pipeline. Do not place secrets in image layers or build arguments.

## Operate with controls

Set resource limits, apply network policies, and log relevant events. Review exceptions periodically against each service’s actual risk.
