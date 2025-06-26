export function getweatherimage(weatherName: string): string {
    const weathers: { [key: string]: string } = {
        Clear: "/icons/sun.svg",
        Clouds: "/icons/cloud.svg",
        Rain: "/icons/rain.svg",
        Snow: "/icons/snow.svg",
        Thunderstorm: "/icons/thunder.svg",
        Drizzle: "/icons/drizzle.svg",
        Mist: "/icons/mist.svg",
    };
    return weathers[weatherName] || "/icons/sun.svg"
}