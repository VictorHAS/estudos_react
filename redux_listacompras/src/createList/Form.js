import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as FormActions } from "../store/actions/form";

// Material Components
import { MenuItem, TextField, InputAdornment, Button } from "@material-ui/core";

const units = ["Quilos", "Litros", "Unidades"];

class Form extends Component {
  state = {
    list: "",
    product: "",
    quantity: "",
    unit: "",
    price: "",
    showErrors: false
  };

  componentDidUpdate = prevProps => {
    const { form } = this.props;
    if (
      form.action === "update" &&
      prevProps.form.productToUpdate !== form.productToUpdate
    ) {
      const { product, quantity, unit, price } = form.productToUpdate;
      this.setState({
        list: form.listToUpdate,
        product,
        quantity,
        unit,
        price,
        showErrors: false
      });
    }
    if (form.action === "new" && prevProps.form.action !== form.action) {
      this.setState({ list: form.listToUpdate });
    }
  };

  handleChange = e => {
    return this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = () => {
    const { list, product, quantity, unit, price } = this.state;
    if (!list || !product || !quantity || !unit) {
      this.setState({ showErrors: true });
    } else {
      this.props.form.action === "update"
        ? this.updateItem(list, product, quantity, unit, price)
        : this.addItem(list, product, quantity, unit, price);
    }
  };

  addItem = (list, product, quantity, unit, price) => {
    this.props.addProduct({ product, quantity, unit, price }, list);
    this.clearState();
    this.props.finishAdd();
  };

  updateItem = (list, product, quantity, unit, price) => {
    const { id, checked } = this.props.form.productToUpdate;
    this.props.updateProduct(
      { product, quantity, unit, id, checked, price },
      list
    );
    this.clearState();
    this.props.finishUpdate();
  };

  clearState = () => {
    this.setState({
      product: "",
      quantity: "",
      unit: "",
      price: "",
      showErrors: false
    });
  };
  render() {
    if (!this.props.showForm) {
      return <div />;
    } else {
      return (
        <form className="form-container">
          <div className="form-row">
            <TextField
              label="Lista"
              name="list"
              value={this.state.list}
              onChange={this.handleChange}
              required
              error={!this.state.list && this.state.showErrors}
            />
            <Button
              variant="outlined"
              onClick={this.onSubmit}
              color="secondary"
            >
              Salvar
            </Button>
          </div>
          <div className="form-row">
            <TextField
              label="Produto"
              name="product"
              value={this.state.product}
              onChange={this.handleChange}
              required
              error={!this.state.product && this.state.showErrors}
            />
            <TextField
              label="Quantidade"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
              required
              error={!this.state.quantity && this.state.showErrors}
            />
            <TextField
              select
              label="Unidade"
              name="unit"
              value={this.state.unit}
              onChange={this.handleChange}
              required
              error={!this.state.unit && this.state.showErrors}
            >
              {units.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Preço"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">R$</InputAdornment>
                )
              }}
            />
          </div>
        </form>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  form: state.form,
  showForm: state.form.action || ownProps.url === "novo"
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FormActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
