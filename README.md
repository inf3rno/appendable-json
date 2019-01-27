# appendable-json
[![Build Status](https://travis-ci.org/inf3rno/appendable-json.svg?branch=master)](https://travis-ci.org/inf3rno/appendable-json)
Appendable JSON based format

# file format

By storing the following variable:
```js
const example = [
    123,
    "Lorem,\nipsum."
];
```

I started with a JSON array.

```js
[123,"Lorem,\nipsum."]
```

Our main problem with the JSON format, that the square brackets make it hard to append without parsing. So I removed the square brackets.

```
123,"Lorem,\nipsum."
```

This is not bad, we could append it by adding `,"next"`, but I don't like that the first item is different, so I added comma at the end.

```
123,"Lorem,\nipsum.",
```

Now if we want to parse only the second item, then we have a problem to find it without parsing the whole string, because the lorem ipsum string contains a comma.
I added a line break after the separator comma to solve this. Since the compact JSON coming from `JSON.stringify` does not contain any line break, this should suffice.

```
123,
"Lorem,\nipsum.",

```

I like this format, because it is easy to parse and build and it is great for logging or for file based event storages.

# docs

installation

```sh
npm install @inf3rno/appendable-json
```

usage

```js
const aJSON = require("@inf3rno/appendable-json");
```

serialization
```js
const string = aJSON.stringify([{a:1},{b:2},{c:3}]);
const appended = string + aJSON.stringify([{d:4},{e:5}]);
```

unserialization
```js
const array = aJSON.parse(string);
```