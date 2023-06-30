import css from 'components/Section/Section.module.css';
import PropTypes from "prop-types";



export const Section = ({ title, children }) => {
    return (
        <section className={css.section_1}>
            <h1>{title}</h1>
            {children}
        </section>
    );
};


Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
