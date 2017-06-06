# esdoc-plugin-external-links

ESDoc plugin to set the target for external links

## Installation

```sh
npm install --save-dev esdoc-plugin-external-links
```

## Usage

Add the `esdoc-plugin-external-links` to your ESDoc config...
```js
{
  ...
  "plugins": [
    {
      "name": "esdoc-plugin-external-links",
      "option": ...
    }
  ]
}
```

## Options

The `option` property can either be an `Object`...

```js
{
  ...
  "plugins": [
    {
      "name": "esdoc-plugin-external-links",
      "option": {
        ...
      }
    }
  ]
}
```
or an `Array<Object>`...
```js
{
  ...
  "plugins": [
    {
      "name": "esdoc-plugin-external-links",
      "option": [
        { ... },
        { ... }
      ]
    }
  ]
}
```

If you provide an `Array`, each option object within that array will be applied sequentially.

### Available Options

| Option | Behavior | Default |
|--------|----------|---------|
| `includes` | An `Array<String>` or `String` of glob patterns to include | `**/*.html` |
| `excludes` | An `Array<String>` or `String` of glob patterns to exclude |  |
| `query` | The selector quuery to find external links | `a[href^="http://"], a[href^="https://"], a[href^="//"], a[href][ref*="external"]` |
| `target` | The `target` attribute to set on the anchor | `_blank` |
