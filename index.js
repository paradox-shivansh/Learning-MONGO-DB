import express from 'express'

const app = express()

const port = 3000

app.use(express.json())

let teadata = []
let nextId = 1

// Add New Tea
app.post('/teas' , (req,res)=>{
    
    const {name , price} =  req.body
    const newTea = {id: nextId++ , name , price }
    teadata.push(newTea)
    res.status(201).send(newTea)
})

// Tea List
app.get('/teas' , (req,res)=>{
    
    res.status(200).send(teadata)
})

// Finding a Particular Tea
app.get('/teas/:id' , (req,res)=>{
    const tea = teadata.find(t=>t.id === req.params.id)
    if (!tea) {
        return res.status(404).send("Tea not found !!")
    } else{
        return res.status(200).send(tea)
    }
})

// Updating the Tea 
app.put('/teas/:id' , (req,res)=>{
  const tea = teadata.find(t=>t.id === req.params.id)
    if (!tea) {
        return res.status(404).send("Tea not found !!")
    } 

    const {name , price} = req.body
    tea.name = name
    tea.price = price
    res.status(200).send(tea)
})

// Delete the Tea
app.delete("/tea/:id" , (req,res)=>{
    const index = teadata.findIndex(t => t.id === parseInt(req.params.id))
    if (index === -1) {
        return res.status(404).send('Tea not Found!!')
    }

    teadata.splice(index , 1)
    return res.status(204).send('Deleated')
})

app.get("/" , (req,res)=>{
    res.send("HELLO FROM SHIVANSH AND NEW DAY")
})

app.get("/linkedin" , (req,res)=>{
    res.send("https://www.linkedin.com/in/shivansh-srivastava-299870309/")
})

app.get("/ice-tea" , (req,res)=>{
    res.send("What ice tea would ypu live to prefer?")
})




app.listen(port , ()=> {
    console.log(`Server is running on port: ${port}...`)
})