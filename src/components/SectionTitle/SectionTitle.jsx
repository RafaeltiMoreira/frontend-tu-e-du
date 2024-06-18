import PropTypes from 'prop-types';

const SectionTitle = ({ s2Class = '', subTitle = '', MainTitle = '' }) => {
  return (
    <div className={`wpo-section-title ${s2Class}`}>
      <span>{subTitle}</span>
      <h2>{MainTitle}</h2>
    </div>
  )
}

SectionTitle.propTypes = {
  s2Class: PropTypes.string,
  subTitle: PropTypes.string,
  MainTitle: PropTypes.string
};

export default SectionTitle;