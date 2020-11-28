fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(json => {
      for (let i = 0; i < json.length; i++) {

         
        var y = document.createElement('li');
        var content =  `<div class="card" style="width:400px">
                        <img class="card-img-top" src="XXX" alt="Card image">
                        <div class="card-body">
                        <h4 class="card-title">YYY / DDD</h4>
                        <p class="card-text">ZZZ <br>AAA <br>  SSS<br>BBB<br>CCC</p>
                        <a href="https://www.worldometers.info/coronavirus/?utm_campaign=homeAdvegas1?" class="btn btn-primary">See Corona statistics all over the world</a>
                        </div>
                          </div> `

        var test= content.replace("XXX",json[i].flag);
        test= test.replace("YYY",json[i].name);
        test= test.replace("DDD",json[i].nativeName);
        test= test.replace("ZZZ","Capital : "  + json[i].capital);
        test= test.replace("SSS", " Calling Codes : " +json[i].callingCodes);
        test= test.replace("AAA","Area : " + json[i].area);
        test= test.replace("BBB","Currencies : " + json[i].currencies[0].code+"-" +json[i].currencies[0].name+"-"+ json[i].currencies[0].symbol);
        test= test.replace("CCC"," Population : "  +  json[i].population);
        y.innerHTML =test;
        y.className = "list-group-item";
        document.getElementById('myUL').appendChild(y);

                                              

      }
  })
