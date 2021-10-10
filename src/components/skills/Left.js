import { Component } from 'react';
import styles from '../../styles.module.scss';

class Left extends Component {
    render() {
        const content = this.props.content;

        return (
            <div className={styles.Left}>
                <h4>{content.category}</h4>
            </div>
        );
    }
}

export default Left