import { useState, useEffect, useRef } from 'react'

type EventSourceData = {
  flight: string;
  state: string;
}

export const EventSourceRefSample = () => {
  const [sseData, setSseData] = useState<EventSourceData>({} as EventSourceData);
  const sseRef = useRef<EventSource | null>(null);

  //need to start orderentrysystem server

  useEffect(() => {
    sseRef.current = new EventSource('http://localhost:5000/events');
    sseRef.current.addEventListener("flightStateUpdate", evt => {
      const messageEvent = (evt as MessageEvent);  // <== This line is Important!!
      const data: EventSourceData = JSON.parse(messageEvent.data);
      //console.log(data);
      setSseData(data);
    });
    sseRef.current.onmessage = (evt) => {
      console.log("message received");
      //setMsg(evt.data);
    }
    sseRef.current.onopen = function () {
      console.log("Connection to server opened.");
    };
    sseRef.current.onerror = function () {
      console.log("EventSource failed.");
    };
    return () => {
      sseRef.current?.close()
    }
  }, []);

  return (
    <div>
      <h3>{`Flight: ${sseData.flight} Status: ${sseData.state}`}</h3>
      <button onClick={() => { sseRef.current?.close(); console.log(sseRef.current) }} >Stop Updates</button>
    </div>
  )
}
