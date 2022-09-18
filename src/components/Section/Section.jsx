import PropsType from 'prop-types';
import { SectionContainer, Title } from 'components/Section/StyledSection';


export const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      {title && <Title>{title}</Title>}
      {children}
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropsType.string,
};

