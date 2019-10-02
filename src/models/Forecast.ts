
export interface Coord {
    lon: number;
    lat: number;
}

export interface Sys {
    country: string;
    timezone: number;
    sunrise: number;
    sunset: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Main {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
}

export interface Wind {
    speed: number;
    deg: number;
}

export interface Clouds {
    all: number;
}

export interface List {
    coord: Coord;
    sys: Sys;
    weather: Array<Weather>;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    id: number;
    name: string;
}

export interface Forecast {
    cnt: number;
    list: Array<List>;
}

