export function getweatherimage(weatherName: string): string {
    const weathers: { [key: string]: string } = {
        Clear: "/sun.png",
        Clouds: "/cloud.png",
        Rain: "/rain.png",
        Snow: "/snow.png",
        Thunderstorm: "/thunder.png",
        Drizzle: "/drizzle.png",
        Mist: "/mist.png",
    };
    return weathers[weatherName] || "/sun.png"
}