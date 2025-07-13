import express from 'express'
import cors from 'cors'
import customerRouter from './routes/customer.routes.js'
import collegeRouter from './routes/college.routes.js'
import staffRouter from './routes/staff.routes.js'
import laptopRouter from './routes/laptops.routes.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.use('/customers', customerRouter)
app.use('/colleges', collegeRouter)
app.use('/staff', staffRouter)
app.use('/laptops', laptopRouter)

app.listen(port, () => {
  console.log('Laptop Borrowing App running at port ' + port)
})
