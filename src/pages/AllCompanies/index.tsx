import companiesData from "../../db.json";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export default function AllCompanies() {
  const getAllCompaniesData = companiesData.companies;
  const getAllPhoneNumbersData = companiesData.phone_numbers;
  const history = useNavigate();

  const handleClick = (id: number, name: string) => {
    const phoneNumbers = getAllPhoneNumbersData.filter(
      (item) => item.company_id === id
    );
    return history("companies", { state: { name, phoneNumbers } });
  };

  return (
    <>
      <S.Body>
        <S.Section>
          <S.TblHeader>
            <S.Heading>Companies</S.Heading>
            <S.ContainerContent>
              <S.List>
                <S.BoldText>Company Name</S.BoldText>
                {getAllCompaniesData.map((e) => (
                  <S.ClickableText
                    onClick={() => handleClick(e.id, e.name)}
                    key={e.id}
                  >
                    {e.name}
                  </S.ClickableText>
                ))}
              </S.List>
              <S.List>
                <S.BoldText>Vatin</S.BoldText>
                {getAllCompaniesData.map((e) => (
                  <S.Text key={e.id}>{e.vatin}</S.Text>
                ))}
              </S.List>
            </S.ContainerContent>
          </S.TblHeader>
        </S.Section>
      </S.Body>
    </>
  );
}
