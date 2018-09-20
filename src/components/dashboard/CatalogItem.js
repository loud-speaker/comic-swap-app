import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CatalogItem.css';
import CatalogItemForm from './CatalogItemForm';

class CatalogItem extends Component {

  static propTypes = {
    catalogItem: PropTypes.object,
    editCatalog: PropTypes.func,
  };
  
  state = {
    editing: false
  };

  handleEdit = catalog => {
    const { editCatalog } = this.props;
    return editCatalog(catalog)
      .then(() => this.toggleEdit);
  };

  toggleEdit = () => {
    this.setState(({ editing }) => ({ editing: !editing }));
  };
  
  render() { 
    const { catalogItem } = this.props;
    const { editing } = this.state;
    
    return (
      <section className={styles.catalogItem}>
        <h3>Current Catalog</h3>
        <img src={catalogItem.comic.image}/>
        <p>Issue: {catalogItem.comic.issueName}</p>
        <p>Cover Date: {catalogItem.comic.coverDate}</p>
        <p>Volume: {catalogItem.comic.volumeName}</p>
        {editing
          ? <CatalogItemForm submit={this.handleEdit} onCancel={this.toggleEdit}/>
          : <button onClick={this.toggleEdit}>Edit</button>
        }
        <p>Condition: {catalogItem.condition}</p>
        <div dangerouslySetInnerHTML={{ __html: catalogItem.comic.description }}></div>
        Characters:
        <ul>
          {catalogItem.comic.characters.map((character, i) => 
            <li key={i}>{character}</li>  
          )}
        </ul>
        Credits:
        <ul>
          {catalogItem.comic.personCredits.map(person => 
            <li key={person._id}>{person.name} ({person.role})</li>  
          )}
        </ul>
      </section>
    );
  }
}
 
export default CatalogItem;