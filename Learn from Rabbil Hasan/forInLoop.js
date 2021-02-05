let myDetails = {
    name: 'Md Fuadul Islam Redoy',
    age: 21,
    Department: 'BCSE',
    ID: 20103046,
    Year: 2020
}

for (let details in myDetails){     //details is property name
    console.log(details + ' = ' + myDetails[details]);      //myDetails[details] is property name and property value
}