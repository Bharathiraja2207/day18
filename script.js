var url_data='https://restcountries.com/v3.1/all'
async function res_fetch1(){
    var weather_feath=await fetch (weather)
}
res_fetch1()
async function res_fetch(){
    var url_fetch=await fetch (url_data)
    console.log(url_fetch)
    var result=  url_fetch.json()
    var endresult=await result
    console.log(endresult)
   
   
    for(let i of endresult){
        
    var name=i.name.common
    var flag=i.flags.png
    var region=i.region
    var capital=i.capital
    var latlng=i.capitalInfo.latlng
    
    try{
var url=` https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=b2dd1a5f2bb149ef22537059a999a274`
  var url_fetch=await fetch (url)
        var data2=url_fetch.json()
       // console.log(data2)
        var endresult2=await data2
       // console.log(endresult2)
                
        }
       catch(e){
    console.log(e)
    console.log('data is not null')
       }

        var parrent=document.createElement('div')
       parrent.setAttribute('class','card row col-lg-4 col-sm-12')
        parrent.innerHTML=`
       
        
            <div class="card-header">
                <h6 class"h6">${name}</h6>
                </div>
                <div class="card-body">
                    <img src=${flag} alt="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fimage&psig=AOvVaw2GjQpBaPFKSMEI41TJO7t_&ust=1672541373383000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPiq5_rKofwCFQAAAAAdAAAAABAE" class="image">
                    <p><b>capital:</b>${capital}</p>
                    <p><b>region:</b>${region}</p>
                    <p><b>latlng:</b>${latlng}</p>
                  <a href="${url}"  <button onclick="weather(this)"class="btn btn-primary">weather</button></a>
                </div>
               
            `
            document.querySelector('body').append(parrent)
        
    }
   

}

res_fetch()

