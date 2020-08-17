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
	// let a = argv.name
	// console.log(a)
	// $.fs.writeFile('./build/{argv.name}.txt', content)
	// if (argv.ships > 3 && argv.distance < 53.5) {
	//   console.log('Plunder more riffiwobbles!')
	//   console.log(argv.ships)
	// } else {
	//   console.log('Retreat from the xupptumblers!')
	// }
		let a = argv.n
		$.fs.writeFile(`./dev/pug/modules/${a}.pug`, content, (err) => {
	  	if (err) {
		    console.error(err)
		    return
		  }
		})

		$.fs.writeFile(`./dev/static/stylus/${a}/${a}.styl`, content, (err) => {
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
		window.clipboardData.setData("Text", text);
 
})

 
// require('yargs') // eslint-disable-line
//   .command('serve [port]', 'start the server', (yargs) => {
//     yargs
//       .positional('port', {
//         describe: 'port to bind on',
//         default: 5000
//       })
//   }, (argv) => {
//     if (argv.verbose) console.info(`start server on :${argv.port}`)
//     serve(argv.port)
//   })
//   .option('verbose', {
//     alias: 'v',
//     type: 'boolean',
//     description: 'Run with verbose logging'
//   })
//   .argv



}