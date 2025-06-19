'use client'

import { useEffect, useState } from "react";


export default function Home() {
  const [city, setcity] = useState('')
  const [weather, setweaher] = useState<any>(null)
  const apiKey = ''
  const fetchweather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`)
    .then(response => response.json())
    .then(data => setweaher(data))
  }

  return (
    <>
      <main className="w-full h-full flex items-center justify-center">
        <div className="w-[30%] h-36 bg-[#5f53ff] rounded-xl">
          <form className="flex flex-col space-y-2 w-full h-full items-center justify-center" onSubmit={(e) => {e.preventDefault(), fetchweather()}} action="">
            <label className="text-2xl font-extrabold">Cidade</label>
            <input value={city} onChange={(e) => setcity(e.target.value)} placeholder="Digite sua cidade" className="bg-white w-[50%] rounded-sm" type="text" />
            <button className="bg-[#DFE953] w-32 rounded-sm" type="submit">PROCURAR</button>
          </form>
        </div>
        {weather && weather.name &&(
          <p>{weather.name} , {weather.main.temp}, {weather.weather[0].description}</p>
        )}
      </main>
    </>
  );
}
