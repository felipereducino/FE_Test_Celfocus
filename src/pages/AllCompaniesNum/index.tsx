import { useLocation, useNavigate } from "react-router-dom";
import { Children } from "react";
import * as S from "./styles";

interface LocationProps {
  name: string;
  phoneNumbers: {
    id: string;
    type: string;
    company_id: number;
  }[];
}

export default function AllCompaniesNum() {
  const location = useLocation();
  const state = location.state as LocationProps;
  const history = useNavigate();

  const handleClick = (id: string, type: string) => {
    return history("/numbers", { state: { id, type } });
  };

  return (
    <>
      <S.Body>
        <S.Section>
          <S.TblHeader>
            <S.Heading key="id">{state.name}</S.Heading>
            <S.ContainerContent>
              {state.phoneNumbers.length ? (
                <>
                  <S.List>
                    <S.BoldText>Number</S.BoldText>
                    {Children.toArray(
                      state.phoneNumbers.map((e) => (
                        <S.ClickableText
                          onClick={() => handleClick(e.id, e.type)}
                        >
                          {e.id}{" "}
                        </S.ClickableText>
                      ))
                    )}
                  </S.List>
                  <S.List>
                    <S.BoldText>Type</S.BoldText>
                    {Children.toArray(
                      state.phoneNumbers.map((e) => <S.Text>{e.type}</S.Text>)
                    )}
                  </S.List>
                </>
              ) : (
                <S.Text>No items</S.Text>
              )}
            </S.ContainerContent>
            <S.GoBackButton onClick={() => history(-1)}>Go back</S.GoBackButton>
          </S.TblHeader>
        </S.Section>
      </S.Body>
    </>
  );
}
