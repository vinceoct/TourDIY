import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap'
import axios from 'axios';

const CitySelect = ({ selectedState, onSelectCity }) => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  
  useEffect(() => {
    getCities().then(data => setCities(data));
     
  }, [selectedState]);

  const handleCityChange = (event) => {
    const selectedCityValue = event.target.value;
    setSelectedCity(selectedCityValue);
    onSelectCity(selectedCityValue);
  };

  const getCities = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/cities/state/${selectedState}`);
      console.log(response.data);
      return response.data
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="citySelect">
          <Form.Select className='custprimary' value={selectedCity} onChange={handleCityChange}>
            <option value="">Select a City</option>
            {cities && cities.length > 0 ? (
              cities.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))
            ) : (
              <option disabled>Choose State First</option>
            )}
          </Form.Select>
        </Form.Group>
      </Form>
    </div>
  );
};

export default CitySelect;