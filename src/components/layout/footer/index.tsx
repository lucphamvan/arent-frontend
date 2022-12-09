import { Container, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

const OuterContainer = styled(Box)`
    background-color: #414141;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.160784);
    padding: 56px 0;
`;

const InnerContainer = styled(Container)`
    display: flex;
    align-items: center;
    gap: 45px;
`;

const FooterItem = styled(Box)`
    font-weight: 300;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.033px;
    color: #ffffff;
`;

const Footer = () => {
    return (
        <OuterContainer>
            <InnerContainer maxW="container.lg">
                <FooterItem>会員登録</FooterItem>
                <FooterItem>運営会社</FooterItem>
                <FooterItem>利用規約</FooterItem>
                <FooterItem>個人情報の取扱について</FooterItem>
                <FooterItem>特定商取引法に基づく表記</FooterItem>
                <FooterItem>お問い合わせ</FooterItem>
            </InnerContainer>
        </OuterContainer>
    );
};

export default Footer;
