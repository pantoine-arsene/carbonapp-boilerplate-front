import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export function LangSelect() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <Select
      defaultValue={i18n.language}
      onChange={e => handleLanguageChange(e)}
    >
      <option value="fr">FR</option>
      <option value="en">EN</option>
    </Select>
  );
}

const Select = styled.select`
  background-color: transparent;
  padding: 3px;
`;
