import { useEffect, useState, useMemo } from 'react'

type EventSourceData = {
  flight: string;
  state: string;
}

export const EventSourceSample = () => {
  const [sseData, setSseData] = useState<EventSourceData>({} as EventSourceData);

  //need to start orderentrysystem server
  //const sse = new EventSource('http://localhost:5000/events');

  const sse = useMemo(() => {
    console.log("init memo");
    return new EventSource('http://localhost:5000/events')
  }, []);

  useEffect(() => {
    //console.log(sse);
    sse.addEventListener("flightStateUpdate", evt => {
      const messageEvent = (evt as MessageEvent);  // <== This line is Important!!
      const data: EventSourceData = JSON.parse(messageEvent.data);
      //console.log(data);
      setSseData(data);
    });
    sse.onmessage = (evt) => {
      console.log("message received");
      //setMsg(evt.data);
    }
    sse.onopen = function () {
      console.log("Connection to server opened.");
    };
    sse.onerror = function () {
      console.log("EventSource failed.");
    };
    return () => {
      sse.close()
    }
  }, [sse]);

  return (
    <div>
      <h3>{`Flight: ${sseData.flight} Status: ${sseData.state}`}</h3>
      <button onClick={() => { sse.close(); console.log(sse) }} >Stop Updates</button>
    </div>
  )
}
