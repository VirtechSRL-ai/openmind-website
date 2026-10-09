# CI rollout — openmind-website

## Initial inspection
Base commit: `14a915b227141e63683dea98a7a075c0baced3ba`.
Node packages with committed npm locks: .. Existing workflow files remain intact except the explicitly documented OpenMind FastAPI test dependency fix.

## Implemented
`Ops Brain Quality` runs on PRs, main pushes and manual dispatch with read-only token permissions, no inherited git credentials, timeouts and immutable action versions. Gitleaks scans history with redaction and a checksum-verified binary, without the organization-license dependency of gitleaks-action. Node packages use npm ci, existing lint/type/test/build commands, a high-severity dependency gate and build artifacts linked to the commit. Python packages use syntax, selected isolated tests, dependency scanning and Bandit. Existing test commands run where configured; absent unit tests are reported explicitly. Selected Python tests use local fixtures, not external production services.

## Phase status
| Phase | Status | Evidence or limitation |
|---|---|---|
| Initial repository analysis | IMPLEMENTED_AND_VERIFIED | Tracked manifests, workflows and package locks inspected |
| CI build and static checks | IMPLEMENTED_NOT_VERIFIED | Workflow authored; actual Actions results must be checked |
| Unit and integration tests | PARTIALLY_IMPLEMENTED | Existing scripts/selected isolated tests reused; complete business coverage not established |
| Security | IMPLEMENTED_NOT_VERIFIED | Secret/dependency/code checks configured; findings must be resolved |
| Artifacts | PARTIALLY_IMPLEMENTED | Node/Python build outputs keyed by commit where configured; these are CI artifacts, not necessarily deployable release images |
| Staging and E2E | BLOCKED | No independently verified staging URL/database/accounts. Never use production credentials here |
| Production approval | BLOCKED | Existing provider auto-deploy settings and GitHub enforcement require a separate audit; no settings changed |
| Deployment and rollback | BLOCKED | No deploy commands or resource provisioning added; existing release workflows preserved |
| Monitoring | PARTIALLY_IMPLEMENTED | Ops Brain monitors only the previously configured services; this repo is not automatically registered |

## Validation and remaining work
Workflow YAML and git diff are checked locally. A valid configuration is not evidence the application tests passed. Read actual GitHub checks before approval. Missing tests, existing lint failures, vulnerabilities and build configuration failures remain blocking work; no ignored failures or artificial green tests were added.

Add regression tests for the critical business flow in this repo, configure isolated staging fixtures and E2E, and identify the immutable artifact and rollback target. Enforce required CI checks and approval in GitHub/provider settings after reviewing available plan capabilities. **This PR does not guarantee the existing provider cannot automatically deploy main. Do not merge it as a production-release authorization.**

See `CI_IMPLEMENTATION_PROMPT.md` for the full requested standard. No merge, production deployment, credential change, live data modification or paid resource provisioning performed.


## Security corrections verified on 2026-10-09

- Updated postcss 8.5.29 and regenerated the lockfile.

- Local build passed using Node 24.16.0.
- Dependency audit: no vulnerabilities found.

The PR remains a draft. Current-head GitHub Actions results must be reviewed before merging; staging, production promotion and credential rotation remain outside these changes.


### Build artifact verification

Next.js writes to the hidden .next directory. Artifact upload now explicitly includes hidden files while still excluding .next/cache; an empty artifact remains a failure. Workflow validation passes. GitHub Actions must verify the uploaded artifact on this head.
