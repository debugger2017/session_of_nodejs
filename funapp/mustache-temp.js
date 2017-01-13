var mustache = require('mustache')

result = mustache.render("Hello {{first_name}} {{last_name}}",
{
	"first_name": "Kartik",
	"last_name": "Satoskar"
}
)

console.log(result)