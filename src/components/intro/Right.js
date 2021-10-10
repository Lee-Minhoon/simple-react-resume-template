import { Component } from 'react';
import styles from '../../styles.module.scss';

class Right extends Component {
    render() {
        const content = this.props.content;

        return (
            <div className={styles.Right}>
                <p>{content.intro}</p>
            </div>
        );
    }
}

export default Right;