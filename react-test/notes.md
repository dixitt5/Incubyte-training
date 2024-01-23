# React

- developed by facebook devs.

### CSR vs SSR

SSR is good for scalability in older devices, but one disadvantage is that when refreshing or routing server fetches again, while CSR does not refreshes again when routing, therefor fast.

### Installation with Vite

> ### What Vite does ? 
> - optimizes the code , minify and compresses the code.
> - therefore no one can reverse engineer the code.

### CDN (Content Delivery Network)

- It is faster and browser can also cache it. (widely spread to servers across the world)

### Virtual DOM

- only renders the component, not the whole dom.

### Enums in TypeScript
- Crete your own datatypes.
> Just like solidity enums.

```typescript
export enum PokemonType {
  Grass,
  Water,
  Fire,
  Rock,
  Other,
}
```

### Props 
- are called functional arguements , can pass values from one component to another component
```typescript
export type PokemonProps = {
  pokemon: Pokemon;
};

export function Header(pokemon: PokemonProps) {
```

### Bootstrap 

#### Installation
- run this command
```
npm install bootstrap
```
