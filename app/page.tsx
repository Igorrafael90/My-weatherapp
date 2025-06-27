'use client'

import { Background } from "@/components/backanima";
import { getweatherimage } from "@/utils/weather";
import { useState } from "react";


export default function Home() {
  const [city, setcity] = useState('')
  const [weather, setweaher] = useState<any>(null)
  const apiKey = process.env.NEXT_PUBLIC_APIKEY

  const fetchweather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`)
    .then(response => response.json())
    .then(data => setweaher(data))
  }

  return (
    <>
      <Background></Background>
      <main className="w-full h-full flex items-center justify-center space-x-3">
        <div className="w-72 h-36 bg-[#58557a] rounded-xl shadow-Page">
          <form className="flex flex-col space-y-2 w-full h-full p-4" onSubmit={(e) => {e.preventDefault(), fetchweather()}} action="">
            <label className="text-2xl text-white font-light">LOCAL</label>
            <input value={city} onChange={(e) => setcity(e.target.value)} placeholder="Digite seu local" className="bg-white w-64 h-8 rounded-sm" type="text" />
            <button className="bg-[#DFE953] w-64 h-8 rounded-sm mt-2 cursor-pointer" type="submit">PROCURAR</button>
          </form>
        </div>
        {weather && weather.name &&(
          <section className="scale bg-[#58557a] w-[40%] h-90 p-4 rounded-xl flex items-center shadow-Page">
            <div className="w-[50%]">
              <h1 className="text-2xl text-white">Cidade</h1>
              <p className="mb-3">{weather.name}</p>
              <h1 className="text-2xl text-white">Descrição</h1>
              <p className="mb-3">{weather.weather[0].description}</p>
              <h1 className="text-2xl text-white">Temperatura</h1>
              <p className="mb-3">{weather.main.temp}</p>
              <h1 className="text-2xl text-white">Temperatura maxima</h1>
              <p className="mb-3">{weather.main.temp_max}</p>
              <h1 className="text-2xl text-white">Temperatura minima</h1>
              <p>{weather.main.temp_min}</p>
            </div>
            <div className="w-[50%] flex justify-center">
              <img className="w-48" src={`${getweatherimage(weather.weather[0].main)}`} alt={`${weather.weather[0].main}`} />
            </div>
          </section>
        )}
      </main>
    </>
  );
}
