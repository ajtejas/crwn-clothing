import React from "react";
import ShopData from "../../data/shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollecitonProps }) => (
          <CollectionPreview key={id} {...otherCollecitonProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
