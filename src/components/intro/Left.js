import { Component } from 'react';
import styles from '../../styles.module.scss';
import intro from './intro.module.scss';

class Left extends Component {
    render() {
        const content = this.props.content;

        return (
            <div className={styles.Left}>
                <img className={intro.profile} src={content.profile} alt='alt_profile'></img>
            </div>
        );
    }
}

export default Left;