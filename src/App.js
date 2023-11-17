import './App.css';
import React, { useEffect, useState } from "react";
import { MentionsInput, Mention } from 'react-mentions';

function App() {

const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [note, setNote] = useState('');
const [user, setUser] = useState("@tag_here");
const DataUrl = "https://challenge.surfe.com/rf/notes";
const UpdateUrl = "https://challenge.surfe.com/rf/notes/";
const users = [
  {
    id: "Jacques",
    display: "Jacques Cousteau",
  },
  {
    id: "Tesla",
    display: "Nikola Tesla",
  },
  {
    id: "James",
    display: "James Darwin",
  },
]; 

    //get data from the API
    useEffect(() => {
      fetch(DataUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Error: The status is ${response.status}`
            );
          }
          return response.json();
        })
        .then((actualData) => {
          setData(actualData);
          console.log(actualData);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setData(null);
        })
        .finally(() => {
          setLoading(false);
        });

        
    }, []);

    // this can be changed to work with "watch" to check changes
    // access textarea value
    const handleTextChange = (e) => {
      setNote(e.target.value);
      const actualNote = e.target.value;
      const actualId = e.currentTarget.id;
      console.log(actualNote);
      console.log(actualId);
      updateApiCall(actualId, actualNote);
    };

    //this updates the data sending it to the API
    const updateApiCall = (id, body) => {
      fetch(UpdateUrl + id, {
        method: "PUT",
        body: JSON.stringify({body}),
        headers: {"Content-Type": "application/json"}
        
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
};
      


  return (
    <div className="App">
        {loading && <div>
                      A moment please...
                    </div>}
        {error && (
                    <div>
                      {`There is a problem fetching the data - ${error}`}
                    </div>
      )}
      <ul>
              {data &&
                data.map(({ id, body }) => (
                  <div key={id} className='card'>
                    <div className='header' >
                      <h3>Note title</h3>
                    </div>
                    <div name="inputArea">
                      <textarea id={id}  className='textarea' rows={17} cols={40} onBlur={handleTextChange}>
                      {body}
                      </textarea>
                      <div className='mentions'>
                        <MentionsInput value={user}
                          //need to stop propagation
                          onChange={(m) => setUser(m.target.value)}>
                          <Mention data={users} />
                        </MentionsInput>
                      </div>
                    </div>
                    <div className='footer'>
                    </div>
                  </div>
                ))}
      </ul>
    </div>
  );
}

export default App;
