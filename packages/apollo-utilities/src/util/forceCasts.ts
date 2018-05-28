// Esta expresión fué desarrollada por andyburke: https://github.com/honeinc/is-iso-date/blob/master/index.js
var isoDateRegExp = new RegExp( /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/ );
// función desarrollada por Alexander E. <alexander.eberle@softwaredelcentro.com.ar>
export function forceCasts(data:any){
    for (let i in data)
        if (data.hasOwnProperty(i)) {
            if(typeof data[i] == 'object')
                data[i] = forceCasts(data[i]);
            else if(isoDateRegExp.test(data[i]))
                data[i] = new Date(data[i]);
        }
    return data;
}
