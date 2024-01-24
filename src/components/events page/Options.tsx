import React from 'react';
import { useState, useEffect, useRef } from 'react';

function Options({ eventId }) {
  const [event, setEvent] = useState(eventId);
  const [last_address, setLastAddress] = useState<string>();
  const [url, setUrl] = useState<URL>();
  const [newUrl, setNewUrl] = useState<null | string>();
  const optionsRef = useRef<any>();

  useEffect(() => {
    let u = new URL(window.location.href);
    setUrl(u);
    let new_url: string | string[] = u.toString().split('/');
    if (new_url[new_url.length - 1] === '') {
      new_url.pop();
    }
    let la = new_url.pop();
    setLastAddress(la);
    // console.log(la);
    setEvent(la);
    optionsRef.current.value = la;
  }, []);
  useEffect(() => {
    // console.log(window.location.href.split('/').pop());
    if (url) {
      if (event !== last_address) {
        let new_url: string | string[] = url.toString().split('/');
        if (new_url[new_url.length - 1] === '') {
          new_url.pop();
        }
        new_url.pop();
        new_url.push(event);
        new_url = new_url.join('/');

        window.location.href = new_url;
      }
    }
  }, [event, url, last_address]);

  function onChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    setEvent(e.target.value);
    e.target.value = event;
  }

  return (
    <div className=" lg:hidden flex justify-center mb-5">
      <select
        ref={optionsRef}
        onChange={(e) => {
          onChangeHandler(e);
        }}
        name="events"
        id=""
        className="event-selection px-5 py-3 bg-black border-2 rounded-lg text-center flex justify-center"
      >
        <option value="elan">Elan & nVision</option>
        <option value="e-summit">E-Summit</option>
        <option value="milan">Milan</option>
        <option value="ted-talks">TedxIITHyderabad</option>
        <option value="zozimus">Zozimus</option>
        <option value="abhyant">Abhyant</option>
        <option value="diesta">Diesta</option>
        <option value="almuni-day">Almuni Day</option>
      </select>
    </div>
  );
}

export default Options;
