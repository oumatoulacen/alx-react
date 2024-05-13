# Redux and Normalizr Guide

This guide provides an overview of Redux and Normalizr, along with explanations of core concepts, usage, and testing strategies.

## Normalizr

Normalizr is a utility library used to normalize nested JSON data. It transforms nested JSON into a flat data structure for easier management.

### How to Use Normalizr

1. **Define Schemas**: Define schemas for your data entities.
2. **Normalize Data**: Use Normalizr's `normalize` function to normalize your nested JSON data.
3. **Utilize Normalized Data**: Store the normalized data in your Redux state or manipulate as needed.

## Core Concepts of Redux

Redux is a predictable state container for JavaScript apps.

### Core Concepts

- **Store**: Holds the state of your application.
- **Actions**: Plain JavaScript objects representing intentions to change the state.
- **Reducers**: Functions specifying how the state changes in response to actions.
- **Single Source of Truth**: State of your whole application is stored in a single store.
- **State is Read-Only**: Changes are made by dispatching actions.
- **Changes with Pure Functions**: Reducers specify how state tree is transformed by actions.

### Redux Actions

Actions are plain JavaScript objects with a `type` field indicating the action type.

### Redux Action Creators

Action creators are functions that create and return action objects.

### Async Actions in Redux

Use middleware like `redux-thunk` or `redux-saga` to handle asynchronous actions.

### Writing Tests for Redux

Write unit tests for action creators, reducers, and middleware. Integration tests can also be useful.
