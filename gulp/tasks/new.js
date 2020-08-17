module.exports = function() {
	// const fs = require('fs')
	// const content = 'Some content!'
	// $.gulp.task('new', (name) =>{
	// 	$.fs.writeFile('./build/{name}.txt', content, (err) => {
	//   	if (err) {
	// 	    console.error(name)
	// 	    return
	// 	  }
	// 	})
	// })

const {argv} = require('yargs')
const content = ''

$.gulp.task('n', () => {

		let a = argv.n

		$.fs.writeFile(`./dev/pug/modules/${a}.pug`, content, (err) => {
	  	if (err) {
		    console.error(err)
		    return
		  }
		})
		$.fs.mkdir(`./dev/static/stylus/modules/${a}`, (err) => {
				if (err) {
			    console.error(err)
			    return
			  }
			})

		$.fs.writeFile(`./dev/static/stylus/modules/${a}/${a}.styl`, content, (err) => {
	  	if (err) {
		    console.error(err)
		    return
		  }
		})

		$.fs.writeFile(`./dev/static/js/${a}.js`, content, (err) => {
	  	if (err) {
		    console.error(err)
		    return
		  }
		})
 
})
}