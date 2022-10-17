var fs = require('fs')
const { MongoClient } = require("mongodb")
const mongoURI = ''
const file = ''
const databaseName = ''
const collectionName = ''

const client = new MongoClient(mongoURI)
const database = client.db(databaseName)
const collection = database.collection(collectionName)

// IF YOU NEED TO DELETE SOMETHING

const deleteClient = new MongoClient(mongoURI)
const deleteDatabase = client.db(databaseName)
const deleteCollection = database.collection(collectionName)

deleteCollection.deleteMany()

// // CUSTOM FUNCTIONS

// function formatValues(nameValue, value){
//     if(nameValue==='fecha_insercion'){
//         var date = value.split('/')
//         date = date[2] + '-'+ date[1] +'-'+date[0]
//         date = new Date(date)
//         return [nameValue,date]
//     }
//     if(nameValue==='parte'){
//         if(value==='redonda '){
//             return [nameValue,'Circular']
//         }
//         else if(value==='Ovalada '){
//             return [nameValue,'Ovalada']
//         }
//     }
//     if(nameValue=='Piezas Sobrantes' || nameValue=='Nº Piezas'){

//         return [nameValue, parseInt(value)]
//     }

//     return [nameValue, value]
// }

// //------------------------------ MAIN SCRIPT ---------------------------------------

//     try {
//         if(file===''){
//             console.log("File path is empty")
//             return
//         }
//         if(mongoURI === ''){
//             console.log("Mongo URI is empty")
//             return
//         }
//         if(databaseName===''){
//             console.log("DatabaseName is empty")
//             return
//         }
//         if(collectionName === ''){
//             console.log("collectionName is empty")
//             return
//         }
//        readFile(file, formatValues)
//     } catch (error) {
//         console.log(error)
//         return
//     }


// //---------------------------------------------------------------------------------

// async function readFile(filepath, formatValues){
//     try {        
//         var data = await fs.readFile(filepath, 'utf8', async (error, data) => {
//             if (error) {
//                 console.error(error);
//                 return;
//             }
//                 data = data.split('\n')
//                 var header = data[0]
//                 var inserts = []
//                 for(line in data){
//                     console.log(line)
//                     if(line != 0){
//                         inserts.push( await createInsertString(header,data[line],formatValues))
//                     }
//                 }
//                 insertToMongo(inserts)
//                 return
//             })
//     } catch (error) {
//         throw error
//     }
// }

// //---------------------------------------------------------------------------------

// async function createInsertString(header, data, formatValues){
//     try{
//         header = header.split(',')
//         data = data.split(',')
//         insert = {}
//         for(value in header){
//             if(data[value] != ''){
//                 var formatedValue = formatValues(header[value], data[value])
//                 insert[formatedValue[0]] = formatedValue[1]
//             }
//             insert['Handmade Insert'] = true
//         }
//         return insert
//     }
//     catch (error) {
//         throw error
//     }
// }

// //---------------------------------------------------------------------------------

// async function insertToMongo(inserts){
//         const client = new MongoClient(mongoURI)
//         const database = client.db(databaseName)
//         const collection = database.collection(collectionName)

//         const result = await collection.insertMany(inserts)
//         console.log(`${result.insertedCount} documents were inserted`)
//         await client.close()    
// }