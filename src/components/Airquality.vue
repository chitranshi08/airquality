<template>
  <div class="container">

    <h1>Check Air Particulate Matter In Cities</h1>
  <input @input="hideError" @keyup.enter="getValue" v-model="enterCity" type="text" placeholder="Please enter city name">
  <div class="instruction">Optimum Particulate Matter - <span class="qualityResult">35.4µg/m&#xB3;</span></div>
   <p v-if="inCorrectCity">Please enter correct city name</p>
   <div v-if="AirqualityResult" class="resultContainer">
  <div class="cityLocation">Location - <span class="locationResult">{{location}}</span></div>
  <div :class="[{changeColor:AirqualityResult>35.4}]"" class="result">Particulate Matter - {{AirqualityResult}}µg/m&#xB3;</div>
</div>

  
  </div>

</template>

<script>
export default {
  name: 'Airquality',
 data:()=>({
  enterCity:null,
  response:null,
  AirqualityResult:null,
  location:null,
  inCorrectCity:false
  

 }),
 methods:{
  getValue(){
    var city = this.enterCity
   city =  city.charAt(0).toUpperCase() + city.slice(1);
  fetch(`https://api.openaq.org/v1/measurements?city=${city}&parameter[]=co&parameter[]=pm25`)
  .then((response)=>{return response.json()})
  .then((response)=>{
    console.log(response)
    
    this.location = response.results[0].location
    this.AirqualityResult =  response.results[0].value 


  })
  .catch((error)=>{
this.inCorrectCity = true
  })
 },
 hideError(){
  this.inCorrectCity = false
  this.AirqualityResult = null
 }
 
 
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .result{
    color:green;
    font-size: 40px;
    font-weight: bold;
    background-color:rgba(255,255,255,0.9);
    width:50%;
    margin: auto;
    margin-top: 50px;

  }
  input{
  height: 50px;
  font-size: 25px;
  text-align: center;
  margin-top: 20px;

  }
  
  

  p{

    color:red;
  }
  .changeColor{
  color:red;
}
.instruction{
  font-size: 30px;
  margin-top: 30px;
  font-weight: bold;
}
.cityLocation{
  margin-top: 30px;
  font-weight: bold;
}
h1{
  font-size: 45px;
  margin-top: 20px;

}
.cityLocation{
font-size: 25px;
}
.locationResult{
}
.qualityResult{
}
.container{
color:white;
}



</style>
