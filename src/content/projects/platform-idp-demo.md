---
title: "Internal Developer Platform (IDP) Demo"
description: "A comprehensive demo of a modern IDP using Crossplane, ArgoCD, and Backstage."
pubDate: "2026-03-01"
tags: ["Kubernetes", "Crossplane", "ArgoCD", "Terraform"]
github: "https://github.com/hsalahi/platform-idp-demo"
heroImage: "/images/project-idp.svg"
---

This project demonstrates the implementation of an Internal Developer Platform that allows developers to self-serve infrastructure and applications.

### Key Features:
- **Infrastructure as Code:** Using Crossplane to manage AWS resources via Kubernetes CRDs.
- **GitOps:** Using ArgoCD for continuous delivery of both infrastructure and applications.
- **Policy Enforcement:** Using Kyverno for cluster-wide security policies.
- **Secret Management:** Using External Secrets Operator (ESO) with AWS Secrets Manager.
