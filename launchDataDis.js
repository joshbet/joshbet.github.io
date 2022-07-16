//a class to setup the data
class InputData{
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ){
            this.time_seconds = time_seconds;
            this.latitude = latitude;
            this.longitude = longitude;
            this.gps_altitude = gps_altitude;
            this.bmpSensor_altitude = bmpSensor_altitude;
            this.bmpSensor_pressure = bmpSensor_pressure;
            this.bmpSensor_temp = bmpSensor_temp;
            this.digSensor_temp = digSensor_temp;
            this.cssSensor_temp = cssSensor_temp;
            this.cssSensor_eCO2 = cssSensor_eCO2;
            this.cssSensor_TVOC = cssSensor_TVOC;
            this.UV = UV;
            this.accelX = accelX;
            this.accelY = accelY;
            this.accelZ = accelZ;
            this.magneticX = magneticX;
            this.magneticY = magneticY;
            this.magneticZ = magneticZ;
            this.gyroX = gyroX;
            this.gyroY = gyroY;
            this.gyroZ = gyroZ;

    }
}

//getData function to load the data from the data file
function getData(){
    var loadedData = loadData();
    return loadedData;

}
//a dataRow function to setup the data
function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}


//updateDisplay to tie it all together

function updateDisplay(){
    var timeRead = data[index].time_seconds;
    //update table..

    if(timeRead >= 10){
            document.getElementById("data").rows["seconds"].innerHTML =
            dataRow("Time Elapsed", data[index].time_seconds, "seconds");
            document.getElementById("data").rows["latitude"].innerHTML =
            dataRow("Latitude", data[index].latitude, " ");
            document.getElementById("data").rows["longitude"].innerHTML =
            dataRow("Longitude", data[index].longitude, " ");
            document.getElementById("data").rows["gps_altitude"].innerHTML =
            dataRow("gps_altitude", data[index].gps_altitude, " ");
            document.getElementById("data").rows["bmp_altitude"].innerHTML =
            dataRow("bmp_altitude", data[index].bmpSensor_altitude, " ");
            document.getElementById("data").rows["bmp_pressure"].innerHTML =
            dataRow("bmp_pressure", data[index].bmpSensor_pressure, " ");
            document.getElementById("data").rows["bmp_temperature"].innerHTML =
            dataRow("bmp_temperature", data[index].bmpSensor_temp, " ");
            document.getElementById("data").rows["digtemp"].innerHTML =
            dataRow("digtemp", data[index].digSensor_temp, " ");
            document.getElementById("data").rows["csstemp"].innerHTML =
            dataRow("csstemp", data[index].cssSensor_temp, " ");
            document.getElementById("data").rows["css_eCO2"].innerHTML =
            dataRow("css_eCO2", data[index].cssSensor_eCO2, " "); 
            document.getElementById("data").rows["css_TVOC"].innerHTML =
            dataRow("css_TVOC", data[index].cssSensor_TVOC, " ");
            document.getElementById("data").rows["UV"].innerHTML =
            dataRow("UV", data[index].UV, " ");
            document.getElementById("data").rows["accelX"].innerHTML =
            dataRow("accelX", data[index].accelX, " ");
            document.getElementById("data").rows["accelY"].innerHTML =
            dataRow("accelY", data[index].accelY, " ");
            document.getElementById("data").rows["accelZ"].innerHTML =
            dataRow("accelZ", data[index].accelZ, " ");
            document.getElementById("data").rows["magneticX"].innerHTML =
            dataRow("magneticX", data[index].magneticX, " ");
            document.getElementById("data").rows["magneticY"].innerHTML =
            dataRow("magneticY", data[index].magneticY, " ");
            document.getElementById("data").rows["magneticZ"].innerHTML =
            dataRow("magneticZ", data[index].magneticZ, " ");
            document.getElementById("data").rows["gyroX"].innerHTML =
            dataRow("gyroX", data[index].gyroX, " ");
            document.getElementById("data").rows["gyroY"].innerHTML =
            dataRow("gyroY", data[index].gyroY, " ");
            document.getElementById("data").rows["gyroZ"].innerHTML =
            dataRow("gyroZ", data[index].gyroZ, " ");
    }

    if(index <  500){
        index++;
    } else {
        index = 0;
    }
}
