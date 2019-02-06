import React from 'react'


class ProductsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("/api/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  addToOrder = (e, id) => {

    alert("added to order")
  }



  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container">
          <h2>Products</h2>
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr>
                  <td><img src={item.image["url"]} /></td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.description}</td>
                  <td>{item.quantity}</td>
                  {item.in_stock == true ?

                    <td>
                      <button className="add-to-order btn btn-primary"
                      onClick={(e) => {this.addToOrder(e, item.id)}} type="button">Add</button></td>
                  :
                    null
                  }
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default ProductsIndex
