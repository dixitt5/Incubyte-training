# Typescript 

>It was introduced for implementing type saftety in Javascript.

## Various types
1) number
2) string
3) boolean

## Interface

>Interfaces are like blueprints, that helps for modularization.

## Generics

- A class having generics can accept diff types of datatypes, and can work just like it's intended to.
### Example
```typescript
const d1 = new Tuple<number, boolean, string>(10, true, "Hello");
```


## Namespaces

- It can have multiple interfaces and types in it, which can be imported into different ts file and can be used like this - 
```typescript
namespace_name.Classname.function()
```

## Interfaces and types joins like "|" (union)

- can be done something like this ,
```typescript
type = string | number
```