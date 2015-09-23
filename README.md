Sorting rules in JSON format

### Examples
```
var orderBy = require('js-order-by')
orderBy('id')
// returns `id`
orderBy({id: 'desc'})
// returns `id desc`
orderBy({id: 'desc', name: 'asc'})
// returns `id` desc, `name` asc
orderBy(['id', {name: 'desc'}])
// returns `id`, `name` desc
```
