import faker from 'faker'
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized'
import { useState, useEffect, useRef } from 'react'

type People = {
  id: number;
  name: string;
  bio: string;
}

type RowRendererParams = {
  index: number;
  key: string;
  parent: Object;
  style: Object;
};

export const VirtualizedSample = () => {
  const [people, setPeople] = useState<People[]>([]);
  const [timer, setTimer] = useState<Date>(new Date());
  const cache = useRef(new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 50
  }))

  /* useEffect(() => {
    const interval = window.setInterval(() => {
      setTimer(new Date())
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, []) */

  useEffect(() => {
    setPeople([...Array(1000)].map((val, key) => {
      return {
        id: key,
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        bio: faker.lorem.lines(Math.random() * 100)
      }
    }))
  }, [])

  const renderData = ({ key, index, style, parent }: RowRendererParams) => {
    return (
      <div key={key} style={style} className="aligner">
        <h3>{people[index].name}</h3>
      </div>
    );
  }

  const renderData1 = ({ key, index, style, parent }: RowRendererParams) => {
    return (
      <CellMeasurer
        key={key}
        cache={cache.current}
        parent={parent}
        rowIndex={index}
        columnIndex={0}
      >
        <div style={style} className="aligner">
          <h3>{people[index].name}</h3>
          <p>{people[index].bio}</p>
        </div>
      </CellMeasurer>
    );
  }

  return (
    <div>
      <h3>{timer.toISOString()}</h3>
      {/* 
      option1: normal rendering
      <ul>
        {
          people && people.map(person => (
            <li key={person.id}>
              {person.name}
            </li>
          ))
        }
      </ul> */}


      {/* 
      Option2: virtulised rendering but fixed width and height
      <List
        className="leftSide"
        width={600}
        height={600}
        rowHeight={50}
        rowRenderer={renderData}
        rowCount={people.length}
        overscanRowCount={3} /> */}

      {/* 
      Option3: with dynamic width and height
      <div style={{ width: '100%', height: '100vh' }}>
        <AutoSizer>
          {
            ({ width, height }) => (
              <List
                className="leftSide"
                width={width}
                height={height}
                rowHeight={50}
                rowRenderer={renderData}
                rowCount={people.length}
                overscanRowCount={3} />
            )
          }
        </AutoSizer>
      </div> */}

      {/* Option4: with dynamic row height, we have used renderData1 function */}
      <div style={{ width: '100%', height: '100vh' }}>
        <AutoSizer>
          {
            ({ width, height }) => (
              <List
                className="leftSide"
                width={width}
                height={height}
                rowHeight={cache.current.rowHeight}
                deferredMeasurementCache={cache.current}
                rowRenderer={renderData1}
                rowCount={people.length}
                overscanRowCount={3} />
            )
          }
        </AutoSizer>
      </div>
    </div>
  )
}
