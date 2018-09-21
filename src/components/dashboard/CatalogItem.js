import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './CatalogItem.css';
import CatalogItemForm from './CatalogItemForm';
import { updateCatalog, removeCatalog } from './actions';
import { connect } from 'react-redux';

class CatalogItem extends PureComponent {

  static propTypes = {
    catalogItem: PropTypes.object,
    updateCatalog: PropTypes.func,
    removeCatalog: PropTypes.func
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
    const { catalogItem, removeCatalog } = this.props;
    const { editing } = this.state;
    
    return (
      <section className={styles.catalogItem}>
        {catalogItem.comic.characters &&
        <Fragment>
          <button name="delete" onClick={() => removeCatalog(catalogItem)}><i className="fas fa-trash-alt fa-2x"></i></button>
          <img src={catalogItem.comic.image}/>
          <div className="user-settings">
            {editing
              ? <CatalogItemForm submit={this.handleUpdate} onCancel={this.toggleEdit} catalogItem={catalogItem}/>
              : <Fragment>
                <button onClick={this.toggleEdit}>Edit</button>
                <h2>Condition:</h2>
                <p>{catalogItem.condition}</p>
                <h2>Status:</h2>
                <p>{catalogItem.exchange}</p>
              </Fragment> 
            }
          </div>
          <h2>Issue:</h2>
          <p>{catalogItem.comic.issueName}</p>
          <h2>Cover Date:</h2>
          <p>{catalogItem.comic.coverDate}</p>
          <h2>Volume:</h2>
          <p>{catalogItem.comic.volumeName}</p>
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
  { updateCatalog, removeCatalog }
)(CatalogItem);