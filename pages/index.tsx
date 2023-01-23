import Image from 'next/image'
import inchScale from '../public/inches-scale.png'
import Layout from '@/components/layout'

export default function Home() {
  return (
    <>
      <Layout>
        <h2 className="text-xl">Inch ruler reference</h2>
        <Image
          className="w-80"
          src={inchScale}
          alt="Picture of an Inch ruler scale"
        />
        <h2 className="text=xl">
          Common calculators - Inch to MM - F and C most common ranges
        </h2>
        <div className="table w-full">
          <div className="table-header-group">
            <div className="table-row">
              <div className="table-cell text-left">Fahrenheit</div>
              <div className="table-cell text-left">Celsius</div>
            </div>
          </div>
          <div className="table-row-group">
            <div className="table-row">
              <div className="table-cell">40</div>
              <div className="table-cell">5</div>
            </div>
            <div className="table-row">
              <div className="table-cell">50</div>
              <div className="table-cell">10</div>
            </div>
            <div className="table-row">
              <div className="table-cell">60</div>
              <div className="table-cell">15</div>
            </div>
          </div>
        </div>
        <h2 className="text-xl">
          Current location forecast in F and C - Should be configurable
        </h2>
      </Layout>
    </>
  )
}
