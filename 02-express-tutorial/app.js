
// const http = require('http')

// const server = http.createServer((req, res) => {
//   // console.log(req.method)
//   const url = req.url
//   // home page
//   if (url === '/') {
//     res.writeHead(200, { 'content-type': 'text/html' })
//     res.write('<h1>home page</h1>')
//     res.end()
//   }
//   // about page
//   else if (url === '/about') {
//     res.writeHead(200, { 'content-type': 'text/html' })
//     res.write('<h1>about page</h1>')
//     res.end()
//   }
//   // 404
//   else {
//     res.writeHead(404, { 'content-type': 'text/html' })
//     res.write('<h1>page not found</h1>')
//     res.end()
//   }
// })

// server.listen(5000)
// =========================================================================================================================
// 02 http app
// const http = require('http')
// const {readFileSync} = require('fs')

// //get all files
// const homePage = readFileSync('./navbar-app/index.html')
// const homeStyles = readFileSync('./navbar-app/styles.css')
// const homeImage = readFileSync('./navbar-app/logo.svg')
// const homeLogic = readFileSync('./navbar-app/browser-app.js')

// const server = http.createServer((req, res) => {

//   const url = req.url;
//   console.log(url);
//   //about page
//   if(url === '/'){
//     res.writeHead(200, {'content-type':'text/html'})
//     res.write(homePage)
//     res.end()
//   }
//   //about page
//   else if(url === '/about'){
//     res.writeHead(200, {'content-type':'text/html'})
//     res.write('<h1>about page</h2>')
//     res.end()
//   }
//   // Style page
//   else if(url === '/styles.css'){
//     res.writeHead(200, { 'content-type': 'text/css' })
//     res.write(homeStyles)
//     res.end()
//   }
//   // Logo Image
//   else if(url === '/logo.svg'){
//     res.writeHead(200, {'content-type': 'image/svg+xml' })
//     res.write(homeImage)
//     res.end()
//   }
//   // logic
//   else if(url === '/browser-app.js'){
//     res.writeHead(200, {'content-type':'text/javascript'})
//     res.write(homeLogic)
//     res.end()
//   }
//   //404
//   else{
//     res.writeHead(404, {'content-type':'text/html'})
//     res.write('<h1>page not found</h2>')
//     res.end()
//   }
// })

// server.listen(5000)

//===============================================================================================================

// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//   console.log('user hit the resource');
//   res.status(200).send('Home page')
// })
// app.get('/about', (req, res)=> {
//   res.status(200).send('About Page')
// })
// app.all('*', (req, res) => {
//   res.status(404).send('<h1>page not found</h1>')
// })
// app.listen(5000, () => {
//   console.log('Server is listening on port 5000......');
  
// })

//=================================================================================================================


// const express = require('express')
// const path = require('path')

// const app = express()

// app.use(express.static('./public'))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

// app.all('*', (req, res) => {
//   res.status(404).send('resource not found')
// })

// app.listen(5000, () => {
//   console.log('server is listening to port 5000....');
  
// })

//========================================================================================================================


// const express = require('express')
// const app = express()

// const {products} = require('./data.js')

// app.get('/', (req, res) => {
//   res.json(products)
// })

// app.listen(5000, () => {
//   console.log('server is listening to port 5000....');
  
// })

//====================================================================================================================

// const express = require('express')
// const app = express()

// const {products} = require('./data.js')

// app.get('/', (req, res) => {
//   res.send('<h1>Home page</h1><a href="/api/products"> products</a>')
// })
// app.get('/api/products', (req, res) => {
//   res.json(products)
// })

// app.listen(5000, () => {
//   console.log('server is listening to port 5000....');
  
// })
//==============================================================================================================================

// const express = require('express')
// const app = express()

// const {products} = require('./data.js')

// app.get('/', (req, res) => {
//   res.send('<h1>Home page</h1><a href="/api/products"> products</a>')
// })
// app.get('/api/products', (req, res) => {
//   const newProduct = products.map((product) => {
//     const {id, name, image} = product
//     return {id, name, image}
//   })
//   res.json(newProduct)
// })

// app.listen(5000, () => {
//   console.log('server is listening to port 5000....');
  
// })
//===========================================================================================================================

// const express = require('express')
// const app = express()

// const {products} = require('./data.js')

// app.get('/', (req, res) => {
//   res.send('<h1>Home page</h1><a href="/api/products"> products</a>')
// })
// app.get('/api/products/1', (req, res) => {
//   const singleProduct = products.find((product) => product.id === 1)
//   res.json(singleProduct)
// })

// app.listen(5000, () => {
//   console.log('server is listening to port 5000....');
  
// })
//===========================================================================================================================

// const express = require('express')
// const app = express()

// const {products} = require('./data.js')

// app.get('/', (req, res) => {
//   res.send('<h1>Home page</h1><a href="/api/products"> products</a>')
// })
// app.get('/api/products/:productID', (req, res) => {
//   // console.log(req);
//   // console.log(req.params);
//   const {productID} = req.params;
//   const singleProduct = products.find((product) => 
//     product.id === Number(productID)
//   )
//   if(!singleProduct){
//     return res.status(404).send('Product not found');
//   }
//   return res.json(singleProduct);
// })

// app.listen(5000, () => {
//   console.log('server is listening to port 5000....');
  
// })

//===========================================================================================================================

// const express = require('express')
// const app = express()

// const {products} = require('./data.js')

// app.get('/', (req, res) => {
//   res.send('<h1>Home page</h1><a href="/api/products"> products</a>')
// })
// app.get('/api/products/:productID', (req, res) => {
//   // console.log(req);
//   // console.log(req.params);
//   const {productID} = req.params;
//   const singleProduct = products.find((product) => 
//     product.id === Number(productID)
//   )
//   if(!singleProduct){
//     return res.status(404).send('Product not found');
//   }
//   return res.json(singleProduct);
// })

// app.listen(5000, () => {
//   console.log('server is listening to port 5000....');
  
// })


//===========================================================================================================================

// const express = require('express')
// const app = express()

// const {products} = require('./data.js')

// app.get('/', (req, res) => {
//   res.send('<h1>Home page</h1><a href="/api/products"> products</a>')
// })

// app.get('/api/products', (req, res) => {
//   const newProducts = products.map((product) => {
//     const {id, name, image} = product
//     return {id, name, image}
//   })
//   res.json(newProducts)
// })

// app.get('/api/products/:productID', (req, res) => {
//   // console.log(req);
//   // console.log(req.params);
//   const {productID} = req.params;
//   const singleProduct = products.find((product) => 
//     product.id === Number(productID)
//   )
//   if(!singleProduct){
//     return res.status(404).send('Product not found');
//   }
//   return res.json(singleProduct);
// })

// app.get('/api/v1/query', (req, res) => {
//   // console.log(req.query);
//   const {search, limit} = req.query
//   let sortedProducts = [...products]

//   if(search){
//     sortedProducts = sortedProducts.filter((product) => {
//       return product.name.startsWith(search)
//     })
//   }
//   if(limit){
//     sortedProducts = sortedProducts.slice(0, Number(limit))
//   }
//   if(sortedProducts.length < 1){
//     // res.status(200).send('No products matched your search')
//     return res.status(200).json({success:true, data:[]})
//   }
//   return res.status(200).json(sortedProducts)
// })
// app.listen(5000, () => {
//   console.log('server is listening to port 5000....');
  
// })

//===========================================================================================================================

// const express = require('express')
// const app = express()
// const morgan = require('morgan')
// const logger = require('./logger')
// const authorize = require('./authorize')
// // app.use([logger, authorize])
// app.use(morgan('tiny'))

// app.get('/', (req, res) => {
//   res.send('Home')
// })

// app.get('/about', (req, res) => {
//   res.send('About')
// })

// app.get('/api/products', (req, res) => {
//   res.send('products')
// })

// app.get('/api/items', [logger, authorize], (req, res) => {
//   console.log(req.user);
  
//   res.send('items')
// })

// app.listen(5000, () => {
//   console.log('Server is listening to port 5000....');
// })

//===========================================================================================================================


// const express = require('express')
// const app = express()
// let {people} = require('./data')

// app.use(express.static('./methods-public'))

// app.use(express.urlencoded({extended:false}))

// app.use(express.json())

// app.get('/api/people', (req, res) => {
//   res.status(200).json({success:true, data:people})
// })

// app.post('/api/people', (req, res) => {
//   const {name} = req.body
//   if(!name){
//     return res
//       .status(400)
//       .json({ success: false, msg: 'please provide name value' })
//   }
//   res.status(201).send({success: true, person:name})
// })

// app.post('/api/people/postman', (req, res) => {
//   const {name} = req.body
//   if(!name){
//     return res
//       .status(400)
//       .json({ success: false, msg: 'please provide name value' })
//   }
//   res.status(201).send({success: true, data: [...people, name]})
// })

// app.put('/api/people/:id', (req, res) => {
//   const {id} = req.params;
//   const {name} = req.body;

//   const person = people.find((person) => person.id === Number(id))

//   if(!person){
//     return res
//       .status(400)
//       .json({success: false, msg: `no person with id ${id}`})
//   }
//   const newPeople = people.map((person) => {
//     if(person.id === Number(id)){
//       person.name = name
//     }
//     return person
//   })
//   res.status(200).json({success: true, data: newPeople})
// })

// app.delete('/api/people/:id', (req, res) => {
//   const person = people.find((person) => person.id === Number(req.params.id))

//   if(!person){
//     return res  
//       .status(400)
//       .json({success: false, msg: `no person with id ${req.params.id}`})
//   }
//   const newPeople = people.filter((person) => person.id != Number(req.params.id))
//   res.status(200).json(newPeople)
// })

// app.post('/login', (req, res) => {
//   const {name} = req.body
//   if(name){
//     return res.status(200).send(`Welcome ${name}`)
//   }
//   res.status(401).send('Please provide credentials...')
// })

// app.listen(5000, () => {
//     console.log('Server is listening to port 5000....');
// })

//===========================================================================================================================



const express = require('express')
const app = express()

const people = require('./routes/people')

const auth = require('./routes/auth')

app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.use('/api/people', people)

app.use('/login', auth)

app.listen(5000, () => {
    console.log('Server is listening to port 5000....');
})