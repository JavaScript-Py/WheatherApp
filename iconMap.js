export const ICON_MAP = new Map();


addMapping([0, 1], "sun");
addMapping([2], "cloud_sun");
addMapping([3, 45, 48], "clouds");
addMapping([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82], "cloud_wind_rain");
addMapping([71, 73, 75, 77, 85, 86], "snow");
addMapping([95, 96, 99], "cloud_lightning");

function addMapping(values, icon){

    values.forEach(value => {
        
        ICON_MAP.set(value, icon);

    });

}