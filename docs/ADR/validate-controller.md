# How I'm going to validate in controllers?

## Status

Initially there are no validations on the controllers.

## Context

I need to do it so I can secure that the interactor is recieving the desired props. And if not, give feedback to the user, so he can know where is the problem on the request.

## Decision

To use a library to make it easier to validate. I'll use Ajv since it's one of the most used, and recommended by collegues for functional programming. [Ajv](https://ajv.js.org/)

## Consequences

Easier to manage validations.
