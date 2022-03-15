import React from "react";

const Form = () => {
  const [isValide, setisValide] = React.useState(true);

  function onSubmit(event) {
    event.preventDefault();
    console.log("You clicked submit.");
  }

  function onChange(event) {
    const value = event.target.value;
    value.includes(" ") ? setisValide(false) : setisValide(true);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>First Name</label>
        {isValide ? (
          <div>
            <input onChange={onChange} className="form-control" />
          </div>
        ) : (
          <div>
            <input onChange={onChange} className="form-control is-invalid" />
            <div className="invalid-feedback">No spaces allowed</div>
          </div>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
