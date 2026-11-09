---
title: "Sécurité des conteneurs : pratiques Docker et Podman"
description: "Des contrôles pour réduire les privilèges, limiter la surface d’attaque et rendre les images plus reproductibles."
lang: fr
date: 2026-11-08
draft: false
tags: [Docker, Podman, Sécurité]
---

## Réduire les privilèges

Exécutez les processus avec un utilisateur non privilégié lorsque c’est possible, limitez les capacités et évitez de monter le socket du moteur sans nécessité justifiée.

## Construire des images maintenables

Utilisez des images de base fiables et versionnées, supprimez les éléments inutiles et analysez les dépendances dans le pipeline. Ne placez pas de secrets dans les couches ni les arguments de build.

## Exploiter avec des contrôles

Définissez des limites de ressources, appliquez des politiques réseau et consignez les événements pertinents. Réévaluez régulièrement les exceptions selon le risque de chaque service.
