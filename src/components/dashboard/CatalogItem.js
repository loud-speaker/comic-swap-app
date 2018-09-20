import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './CatalogItem.css';
import CatalogItemForm from './CatalogItemForm';
import { updateCatalog } from './actions';
import { connect } from 'react-redux';

class CatalogItem extends PureComponent {

  static propTypes = {
    catalogItem: PropTypes.object,
    updateCatalog: PropTypes.func,
  };
  
  state = {
    editing: false
  };

  handleUpdate = catalogItem => {
    const { updateCatalog } = this.props;
    return updateCatalog(catalogItem)
      .then(() => this.toggleEdit());
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
        {catalogItem.comic.characters &&
        <Fragment>
          <img src={catalogItem.comic.image}/>
          <p>Issue: {catalogItem.comic.issueName}</p>
          <p>Cover Date: {catalogItem.comic.coverDate}</p>
          <p>Volume: {catalogItem.comic.volumeName}</p>
          {editing
            ? <CatalogItemForm submit={this.handleUpdate} onCancel={this.toggleEdit} catalogItem={catalogItem}/>
            : <Fragment>
              <p>Condition: {catalogItem.condition}</p>
              <p>Status: {catalogItem.exchange}</p>
              <button onClick={this.toggleEdit}>Edit</button>
            </Fragment> 
          }
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
        </Fragment>
        }
      </section>
    );
  }
}
 
export default connect(
  null,
  { updateCatalog }
)(CatalogItem);