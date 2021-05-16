# The Way Examples

This repository provides a loot of examples to use [TheWay](https://www.npmjs.com/package/@umberware/the-way)

**Note:** The application.properties.yml is set to not scan files but, some examples pass the property to scan their files.

## Summary

 - [Example: MainOnly](#example-mainonly)
 - [Example: HeroesRest](#example-heroesrest)

## Example: MainOnly

It's a single example with a main.
The directory of this example is under `examples/main-only`.
This example uses the `tsconfig-main-only.json` file.
You can use two prepared package.json scripts:

 - build-main-only-example: To build the main-only example. 
 - serve-main-only-example: To run the typescript files of the main-only example.

## Example: HeroesRest

It's an example of REST operations using the framework TheWay.
The directory of this example is under `examples/heroes-rest`.
This example uses the `tsconfig-heroes-rest.json` file and in the scripts we set the properties  `the-way.core.scan.enabled` and `the-way.core.scan.path` to scan the example files.

You can run this example with tree prepared package.json scripts:


 - build-heroes-rest-example: To build the heroes-rest files
 - serve-heroes-rest-example: To run the typescript source code for the heroes-rest example
 - run-heroes-rest-example: To build the heroes-rest source code and run the built code
