import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./styles";

interface LocationProps {
  id: string;
  type: string;
}

export default function CompanyNumber() {
  const location = useLocation();
  const state = location.state as LocationProps;
  const history = useNavigate();

  return (
    <>
      <S.Body>
        <S.Section>
          <S.TblHeader>
            <S.Heading>Company Number</S.Heading>
            <S.ContainerContent>
              <S.List>
                <S.BoldText>Number</S.BoldText>
                <S.Text>{state.id}</S.Text>
              </S.List>
              <S.List>
                <S.BoldText>Type</S.BoldText>
                <S.Text>
                  {state.type.replace(/^\w/, (c) => c.toUpperCase())}
                </S.Text>
              </S.List>
            </S.ContainerContent>
            <S.GoBackButton onClick={() => history(-1)}>Go back</S.GoBackButton>
          </S.TblHeader>
        </S.Section>
      </S.Body>
    </>
  );
}
