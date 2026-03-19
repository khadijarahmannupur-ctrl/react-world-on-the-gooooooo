
import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countirs/Countries'


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())
function App() {

  return (
    <>
      <section id="center">
          <Suspense fallback={<h2>Loading....</h2>}>
            <Countries countriesPromise={countriesPromise}></Countries>
          </Suspense>
      </section>
    </>
  )
}

export default App
