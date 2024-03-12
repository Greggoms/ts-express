# ts-express

A simple express server starter with typescript.

Uses ts-node, so nodemon only has to watch the main
`index.ts` file. This is an improvement from the current
approach of using nodemon to watch the transpiled code.
The TS only compiles after running the build script, which
is how it should've always been.

[Traversy Media Guide](https://www.youtube.com/watch?v=zRo2tvQpus8)
