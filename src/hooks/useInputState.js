import { useState } from 'react';

export default (initialvalue) => {
  const [value, setValue] = useState(initialvalue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue('');
  };
  return [value, handleChange, reset];
};
