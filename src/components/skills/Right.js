import { Component } from 'react';
import styles from '../../styles.module.scss';

class Right extends Component {
    render() {
        const content = this.props.content;
        const desc = content.desc.map((desc, index) => <li key={index} style={{ display: "inline-block", width: "50%" }} >{desc}</li>)

        return (
            <div className={styles.Right}>
                <ul>
                    {desc}
                </ul>
            </div>
        );
    }
}

export default Right