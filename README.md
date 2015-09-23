
### Usage
var orderBy = require('js-order-by')

```js
orderBy(sortingRule)
//returns corresponding sql `order by` clause
orderBy('id')
// returns `id`
orderBy({id: 'desc'})
// returns `id desc`
orderBy({id: 'desc', name: 'asc'})
// returns `id` desc, `name` asc
orderBy(['id', {name: 'desc'}])
// returns `id`, `name` desc
```

### When is this useful?
If you want to use the same rules both with js arrays and in sql queries
