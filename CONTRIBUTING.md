# Contributing to Indiv APIs

The following is a set of guidelines for contributing to the Indiv APIs on
GitHub. These are just guidelines, not rules, so use your best judgment and feel
free to propose changes to this document in a pull request.

## Prerequisite

You need `protobuf` to generate the protobuf files, and `buf` to lint. However,
the Github Actions steps do the linting and generation, so you don't really have
to install it to contribute.

## Issues and Pull Requests

- If you're not sure about adding something, [open an issue][open-issue] to
  discuss it.
- Feel free to open a Pull Request early so that a discussion can be had as
  changes are developed.

## Commit Messages and Pull Request Titles

We use the
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
specification to standardize our commit history. To enforce this convention on
commit messages and/or pull request titles, we use the
[Semantic Pull Requests](https://github.com/probot/semantic-pull-requests) bot.

The commit message summary (or pull request title) is constructed by prepending
the type of change being made (e.g., feat, fix, refactor), followed by an
imperative, present tense sentence (without a period). Example:
`fix: make header bold`.

If you are still working on your pull request, prepend `WIP:` to indicate that
it's work in progress.

**PS**: When you create a pull request, a few Github Actions steps will start.
One of which will run `yarn generate` and create a commit with potential
changes.

### Pull Request Title

Same as commit messages, prepend the type of change being made (refactor, fix,
chore, feat, etc.) Example: `docs: add linux setup instructions`

## Introducing a breaking change?

Make sure to disclose that in your Pull Request! Discuss the changes you are
doing, bring a compelling reason. Breaking changes can be expensive!

## Need Help?

If any of this information confusing, incorrect, or incomplete, feel free to
[open an issue][open-issue] for help.

[open-issue]: https://github.com/indivorg/apis/issues/new
