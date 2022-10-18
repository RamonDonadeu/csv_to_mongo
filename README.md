# csv_to_mongo#
NodeJS function to import csv data to MongoDB

# Installation
Download this repository into your computer
Open the folder on your favourite IDE
And RUN:

```
npm i 
```
When dependencies are installed, configure your files and DB info and then run:

```
npm run start
```

# Usage

Open the file 'index.js' and fill this variables

Configuration:
```
const mongoURI = ''       // mongodb://db1.example.net,db2.example.net:2500/?replicaSet=test
const file = ''           // files/data.csv
const databaseName = ''   // Database Name
const collectionName = '' // Collection Name
```

There is also a function called 'FormatValues':
```
function formatValues(nameValue, value){
    

    return [nameValue, value]
}
```

This function can be used to format values read on your csv in case they need any change

### Example

```
function formatValues(nameValue, value){
    if(nameValue==='date'){
        var date = value.split(' ')[0].split('/')
        date = date[2] + '-'+ date[1] +'-'+date[0]
        date = new Date(date)
        return [nameValue,date]
    }
    if(nameValue=='Value X' || nameValue=='Value Y'){

        return [nameValue, parseInt(value)]
    }
    return [nameValue, value]
}

```


