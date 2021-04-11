# Btools API Declarations

This repository contains the interface definitions of private Btools APIs that
support gRPC protocols. Reading the original interface definitions can provide a
better understanding of Btools APIs and help you to utilize them more
efficiently. You can also use these definitions with open source tools to
generate client libraries, documentation, and other artifacts.

## Quickstart

```shell
▶ yarn add @btools/apis
```

You need `@nestjs/microservices` to run this package.

## Features

- Typescript definitions for all APIs. (see [example][typescript-example]).
- Protobuf files (see [here](protobuf))
- Easy to use NPM package with Protobuf and Typescript definitions!

## Contribute

These files change often. Please refer to our [contribution guide][contribution]
before adding a pull request.

[typescript-example]: ./src/generated
[contribution]: ./CONTRIBUTING.md
[protobuf]: ./protos
[github-npm]:
  https://help.github.com/en/github/managing-packages-with-github-package-registry/configuring-npm-for-use-with-github-package-registry
