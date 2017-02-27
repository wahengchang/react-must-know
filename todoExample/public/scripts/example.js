
class B extends React.Component {
  render() {
    return (
      <div className="IAmB">
        component A: value = {this.props.value}
      </div>
    );
  }
}

class A extends React.Component {
  render() {
    return (
      <div className="IAmA">
        component A: value = {this.props.value}
        <B value={this.props.value * this.props.value}/>
      </div>
    );
  }
}


class FilterTable extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}


class FirstProductRow extends React.Component {
  render() {
    return (
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
    );
  }
}

class ProductCategoryRow extends React.Component {
  render() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
}

class ProductRow extends React.Component {
  render() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class ProductsTable extends React.Component {
  render() {

    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <div className="ProductsTable">
        <table>
          <FirstProductRow />
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

class BigTable extends React.Component {
  render() {
    return (
      <div className="BigTable">
        <FilterTable />
        <ProductsTable products={this.props.products}/>
      </div>
    );
  }
}

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <BigTable products={PRODUCTS} />,
  document.getElementById('content')
);
