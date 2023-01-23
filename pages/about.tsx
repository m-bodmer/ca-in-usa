import path from 'path'
import { promises as fs } from 'fs'
import Layout from '@/components/layout'

interface FileData {
  cities: City[]
}

interface City {
  id: number
  name: string
}

export default function About({ cityData }: { cityData: FileData }) {
  return (
    <>
      <Layout>
        <div>
          <div className="font-bold">About this site - Supported Cities :</div>
          <ul>
            {cityData.cities.map((city: City) => (
              <li key={city.id}>{city.name}</li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json')
  //Read the json data file data.json
  const fileData = await fs.readFile(jsonDirectory + '/data.json', 'utf8')
  const parsedData = JSON.parse(fileData)

  return {
    props: { cityData: parsedData },
  }
}
