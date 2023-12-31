import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap/'
import axios from 'axios';

const StateSelect = ({ onSelectState }) => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    getStates().then(data => setStates(data));
  }, []);

  const handleStateChange = (event) => {
    const selectedStateValue = event.target.value;
    setSelectedState(selectedStateValue);
    onSelectState(selectedStateValue);
  };

  const getStates = async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/states')
        console.log(response.data)
        return response.data
    }catch (error) {
        console.error(error)
        return[]
    }
  }

  return (
    <>
      <Form>
        <Form.Group controlId="stateSelect">
          <Form.Select className='custprimary' value={selectedState} onChange={handleStateChange}>
            <option value="">Select a State</option>
            {states.map((state) => (
              <option key={state.abbrev} value={state.abbrev}>
                {state.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>
    </>
  );
};

export default StateSelect;