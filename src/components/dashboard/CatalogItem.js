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
      <section id="itemContainer" className={styles.catalogItem}>
        {catalogItem.comic.characters &&
        <Fragment>
          <button id="deleteButton" name="delete" onClick={() => removeCatalog(catalogItem)}><i className="fas fa-window-close fa-2x"></i></button>
          <div className="comicCover">
            <img src={catalogItem.comic.image}/>
          </div>
          <div className="user-settings">
            {editing
              ? <CatalogItemForm submit={this.handleUpdate} onCancel={this.toggleEdit} catalogItem={catalogItem}/>
              : <Fragment>
                <button id="editButton" onClick={this.toggleEdit}>Edit Comic</button>
                <h2>Condition:</h2>
                <h3>{catalogItem.condition}</h3>
                <h2>Status:</h2>
                <h3>{catalogItem.exchange}</h3>
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