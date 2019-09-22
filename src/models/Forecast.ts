// export interface Weather {
//     list: Array<Forecast>;
// }

// export interface Forecast {
//     cod: string;
//     message: number;
//     cnt: number;
//     list: Array<
//         {
//             dt: number;
//             main: {
//                 temp: number;
//                 temp_min: number;
//                 temp_max: number;
//                 pressure: number;
//                 sea_level: number;
//                 grnd_level: number;
//                 humidity: number;
//                 temp_kf: number;
//             };
//             weather: Array<
//                 {
//                     id: number;
//                     main: string;
//                     description: string;
//                     icon: string;
//                 }
//                 >;
//             clouds: {
//                 all: number;
//             };
//             wind: {
//                 speed: number;
//                 deg: number;
//             };
//             sys: {
//                 pod: string;
//             };
//             dt_txt: string;
//         }
//         >;
//     city: {
//         id: number;
//         name: string;
//         coord: {
//             lat: number;
//             lon: number;
//         };
//         country: string;
//         timezone: number;
//         sunrise: number;
//         sunset: number;
//     };
//
//
// }


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

