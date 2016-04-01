const DEFAULT_TEMP = 20;
const MIN_TEMP = 10;
const MAX_TEMP_POWER_SAVING = 25;
const MAX_TEMP_POWER_SAVING_OFF = 32;

function Thermostat(){
    this.temp = DEFAULT_TEMP;
    this.savingModeOn = true;
};

Thermostat.prototype.getTemp = function(){
  return this.temp;
};

Thermostat.prototype.upButton = function(){
	if(this.temp >= this.maxTemp()){
		this.temp = this.maxTemp();
	} else {
  	this.temp += 1;
  };
};

Thermostat.prototype.downButton = function(){
  if(this.temp<=MIN_TEMP){
    this.temp = MIN_TEMP;
  }
  else{
    this.temp -= 1;
  };
};

Thermostat.prototype.powerSavingOn = function(){
  if(this.temp > MAX_TEMP_POWER_SAVING){
    this.temp = MAX_TEMP_POWER_SAVING;
  };
	this.savingModeOn = true;
};

Thermostat.prototype.powerSavingOff = function(){
	this.savingModeOn = false;
};

Thermostat.prototype.maxTemp = function(){
	if(this.savingModeOn){
		return MAX_TEMP_POWER_SAVING;
	} else {
		return MAX_TEMP_POWER_SAVING_OFF;
	};
};

Thermostat.prototype.resetButton = function(){
  this.temp = DEFAULT_TEMP;
};

Thermostat.prototype.displayColor = function(){
  if(this.getTemp()<18){
    return "low-usage";
  } else if(this.getTemp() > 24) {
    return "high-usage";
  } else {
    return "medium-usage";
  };
};
