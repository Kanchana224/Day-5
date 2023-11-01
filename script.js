
// QUESTION 1

//by using for loop//
 let data=[
    {
      "name": "kanchana",
      "age": 23,
      "place":"oddanchatram"
    },
    {
      "name":"alex",
      "age": "26",
      "place":"palani"
    },
    {
      "name":"subbu",
      "age": "50",
      "place":"kerala"
    }
  ] 
for (let i=0;i<data.length;i++){
    console.log((data[i].name),(data[i].age),(data[i].place))
}

// //by using for in loop//

let data1=[
    {
      "name": "kanchana",
      "age": 23,
      "place":"oddanchatram"
    },
    {
      "name":"alex",
      "age": "26",
      "place":"palani"
    },
    {
      "name":"subbu",
      "age": "50",
      "place":"kerala"
    }
  ] 

for (let index in data1) {
  const item = data1;
  console.log(data1[index].name,(data1[index].age),(data1[index].place));
} 

// //by using for of loop//

let data2=[
        {
          "names": "kanchana",
          "age": 23,
          "place":"oddanchatram"
        },
        {
          "names":"alex",
          "age": "26",
          "place":"palani"
        },
        {
          "names":"subbu",
          "age": "50",
          "place":"kerala"
        }
      ] 

for (let val of data2) {
    
      console.log((val.names),(val.age),(val.place));
    }

//   QUESTION 2: resume making in JSON FormDataEvent.

const resume=
  {
    "name": "kanchanadevi",
      "email": "kkanchana427@gmail.com",
      "phone": "1234567890",
      "address": "123 Main Street, City, State, 12345",
      "education": [
      {
        "degree":"Diplomo in ECE",
        "school": "Rc fathima high sec school",
        "graduation_year": 2019
        }

        ],
     "languages": ["English","tamil"],
     "skills" :["teamwork","communication","problemsolving" ]
}
console.log(resume)