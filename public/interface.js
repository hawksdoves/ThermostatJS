$( document ).ready(function(){
  var thermostat = new Thermostat();
  updateTemp();

  $("input[value='Submit']").click(function(event){
    var cityInput = document.getElementById('pickcity').value;
    $.ajax({
      url:"http://api.openweathermap.org/data/2.5/weather",

      data: {
        q: cityInput + 'uk',
        units: 'metric',
        appid: '233f405f671f804ad150ba3eaf2fd352'
      },

      type: "GET",

      dataType: "json",
    })
      .done(function( json ) {
        console.log(json['main']['temp']);
        $( "#getweather" ).text(cityInput + ": " + json['main']['temp'] + "\u00B0" + "C");
      })
      .fail(function( xhr, status, errorThrown) {
        alert("You fucked up good");
      })
      .always(function(xhr, status){
        alert("It did something");
      });

  });

  function updateTemp(){
    console.log(thermostat.temp);

    grabTemp();
    // console.log(thermostat.temp);
    // console.log(thermostat.temp);


  }


  $("input[type='checkbox']").prop('checked', true);

  $("#IncreaseTemp").click(function(event){
    thermostat.upButton();
    postTemp();
    updateTemp();
  });

  $("#DecreaseTemp").click(function(event){
    thermostat.downButton();
    updateTemp();
  });

  $("#ResetTemp").click(function(event){
    thermostat.resetButton();
    updateTemp();
  });

  $("input[type='checkbox']").change(function(){
    if (this.checked) {
      thermostat.powerSavingOn();
    } else {
    	thermostat.powerSavingOff();
    }
    updateTemp();
	});

    function postTemp(){
      $.post("http://localhost:4567/temperature", {temp: thermostat.temp} );
    }
    //
    // function grabTemp(){
    //   $.get("http://localhost:4567/temperature", function(data){
    //     thermostat.temp = data;
    //   });
    function grabTemp(){
      $.getJSON("http://localhost:4567/temperature", function(data){
        thermostat.temp = data.temp;
        $("#temp").text("Current temperature: " + thermostat.temp);
        $('#temp').attr('class', thermostat.displayColor());
        $("button[name='tempChange']").attr('value', thermostat.temp);
        }
      );
    };

      //   if (data.temp === null){
      //     return 20;
      //   }
      //   else {
      //     return data.temp;
      //   }
      // });

    //     // .fail(function( xhr, status, errorThrown) {
    //     //   alert("You fucked up good");
    //     // })
    //     // .always(function(xhr, status){
    //     //   alert("It did something");
    //     // });
    // }


      // $.ajax({
      //   type: "POST",
      //   url:"http://localhost:4567/temperature",
      //   data: {temp: thermostat.temp};
      //   dataType: "json",
      // })

    // $("button[name=tempChange]").click(function(event){
    //   // var cityInput = document.getElementById('pickcity').value;
    //   $.ajax({
    //     url:"http://localhost:4567/temperature",

    //     type: "POST",

    //     dataType: "json",

    //     data: {temp: thermostat.temp};


    //   })
    //     .done(function( data ) {
    //       alert(data);

    //     })
    //     .fail(function( xhr, status, errorThrown) {
    //       alert("You fucked up good");
    //     })
    //     .always(function(xhr, status){
    //       alert("It did something");
    //     });

    // });

});
