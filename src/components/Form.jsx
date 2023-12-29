import React from 'react';

const Form = ({value, onChange, onClick}) => {
  return (
    <form>
      <input
        type='text'
        value={value}
        placeholder={'url ...'}
        style={{fontSize: '18px'}}
        onChange={onChange}
      />
      <button
        type='submit'
        style={{fontSize: '18px'}}
        onClick={onClick}
      >
        Dodaj
      </button>
    </form>
  );
};

export default Form;
