import React from "react";

// Material Components
import { MenuItem, TextField, InputAdornment, Button } from "@material-ui/core";

const units = ["kg", "lt", "un"];

const Form = () => (
  <form className="form-container">
    <div className="form-row">
      <TextField
        label="Lista"
        name="list"
        value={""}
        onChange={() => {}}
        required
      />
      <Button variant="outlined" color="secondary">
        Adicionar
      </Button>
    </div>
    <div className="form-row">
      <TextField
        label="Produto"
        name="product"
        value={""}
        onChange={() => {}}
        required
      />
      <TextField
        select
        label="Quantidade"
        name="quantity"
        value={""}
        onChange={() => {}}
        required
      >
        {units.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Unidade"
        name="unity"
        value={""}
        onChange={() => {}}
        required
      />
      <TextField
        label="Preço"
        name="price"
        value={""}
        onChange={() => {}}
        InputProps={{
          startAdornment: <InputAdornment position="start">R$</InputAdornment>
        }}
      />
    </div>
  </form>
);

export default Form;
