
import{showdata}from"./showdata.js";
let product=document.getElementById("product");
async function givedta (){
    let product=document.getElementById("product");
    try{
        let res= await fetch(`http://ec2-3-88-12-166.compute-1.amazonaws.com:5000/lipsticks`)
        let data=await res.json();
        console.log(data)
        showdata(data,product)
    }catch(err){
      console.log(err);
    }
}
givedta()

//http://localhost:5000/lipsticks