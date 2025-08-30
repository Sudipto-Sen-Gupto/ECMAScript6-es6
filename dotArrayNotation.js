
const studentDetail={
name:"Sokhina Khatun",
ID:1234,
CGPA:3.25,
1:"student",
subjects:{
    101:"operating system",
    102:"Database Management System",
    103:"Networking",
    // "web-development":{
    //      1:"HTML",
    //      2:"CSS",
    //      3:"JS"
    // }
}
}

console.log(studentDetail.subjects["web-development"]?.[3]);