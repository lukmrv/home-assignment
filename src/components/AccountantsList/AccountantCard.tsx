import { useTheme } from "styled-components";
import { AccountantType } from "../../api/accountants";
import { styled } from "../../utils/styled";
import { Button } from "../Button/Button";
import { PagargraphM, PagargraphS, Subtitle } from "../Typography/Typography";

const StyledAccountandCardContainer = styled("div")(({ theme }) => ({
  border: `1px solid ${theme.color["grey.200"]}`,
  borderRadius: theme.radius["16"],
  padding: theme.gap["24"],
  boxShadow: "0px 1px 3px rgba(0,0,0, 0.12)",

  display: "grid",
  gap: theme.gap["24"],
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 340px))",
}));

const StyledAccountandHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.gap["16"],
}));

export const AccountantCard = ({
  accountantObject,
}: {
  accountantObject: AccountantType;
}) => {
  const theme = useTheme();

  return (
    <StyledAccountandCardContainer>
      <StyledAccountandHeader>
        <img
          style={{
            width: "64px",
            height: "64px",
            objectFit: "cover",
            borderRadius: theme.radius["8"],
          }}
          src={accountantObject.picture.medium}
          alt="accountant-profile-picture"
        />
        <div>
          <PagargraphM>Twoja księgowa</PagargraphM>
          <div>
            <Subtitle>
              {`${accountantObject.name.first} ${accountantObject.name.last}`}
            </Subtitle>
          </div>
        </div>
      </StyledAccountandHeader>
      <div>
        <PagargraphS>E-mail:</PagargraphS>
        <a
          href={`mailto:${accountantObject.email}`}
          style={{ textDecorationColor: theme.color.black }}
        >
          <PagargraphM color={theme.color.black}>
            {accountantObject.email}
          </PagargraphM>
        </a>
      </div>
      <div>
        <PagargraphS>Telefon:</PagargraphS>
        <a
          href={`tel:${accountantObject.cell}`}
          style={{ textDecorationColor: theme.color.black }}
        >
          <PagargraphM color={theme.color.black}>
            {accountantObject.email}
          </PagargraphM>
        </a>
      </div>
      <div>
        <PagargraphS>Średnia cena netto usługi / m-c:</PagargraphS>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <PagargraphM color={theme.color.black}>350,00</PagargraphM>
          <span
            style={{
              fontSize: "12px",
              color: theme.color.black,
              lineHeight: "12px",
            }}
          >
            PLN
          </span>
        </div>
      </div>
      <div>
        <Button>Dowiedz się więcej</Button>
      </div>
    </StyledAccountandCardContainer>
  );
};
